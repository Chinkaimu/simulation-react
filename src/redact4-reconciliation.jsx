/**
 * 除了渲染，还需要有更新操作。我们需要考虑现在 DOM 需要渲染的结构以及当前渲染的 结构进行比较，根据差异决定是否更新。
 * 新增数据结构：currentRoot 存储当前 fiber 树
 * 主要变化点：
 *    * 创建要渲染的 fiber 树时，存在与上一个 Fiber 树的比较。
 *    * 提交 DOM 更新的时候不仅仅只照着 Fiber 的结构渲染，还要进行删除等操作
 *    * DOM 渲染完成后，将结果 Fiber 结构赋值给 currentRoot 保留下次使用
 * render ⟶ workLoop ⟶ performUnitOfWork ⟶ reconcileChildren ⟶ workLoop ⟶ commitRoot ⟶ commitWork ⟶ updateDom
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  updateDom(dom, {}, fiber.props);

  return dom;
}

// 6. [新增] 更新 DOM
const isEvent = key => key.startsWith('on')
const isProperty = key => (key !== 'children') && !isEvent(key)
const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)

function updateDom (dom, prevProps, nextProps) {
  // 移除旧的或者变化的事件处理函数
  // 以 on 开头的事件属性特殊处理：有所不同的事件——不在新属性中或者与上次不同，直接移除
  Object.keys(prevProps)
    // 是事件属性
    .filter(isEvent)
    // key 不在新属性中或者与上一次不相等
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2)
      dom.removeEventListener(eventType)
    })
  
  // 移除非 children 的旧属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dome[name] = ""
    })

  // 添加或更新属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      // React 规定 style 内联央视是驼峰命名的对象
      // 根据规范给 style 每个属性单独赋值
      if (name === 'style') {
        Object.entries(nextProps[name]).forEach(([key, value]) => {
          dome.style[key] = value
        })
      } else {
        dom[name] = nextProps[name]
      }
    })

      
    // TODO: 应该放在旧事件处理之后添加新事件处理函数
    Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase.substring(2)
      dom.addEventListener(eventType, nextProps[name])
    })
}

let nextUnitOfWork = null
// 1. [新增] 新增存储当前渲染结构
let currentRoot = null
let wipRoot = null
// 2. [新增] 新增要删除列表
let deletions = null

function render (element, container) {
  wipRoot = {
    dom: container,
    // 根节点的 children 就是要渲染的内容
    props: {
      children: [element]
    },
    alternate: currentRoot
  };
  deletions = []
  nextUnitOfWork = wipRoot
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

function commitRoot () {
  // 5. [新增] 先删除需要删除的节点
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork (fiber) {
  if (!fiber) {
    return
  }

  const domParent = fiber.parent.dom
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag === "DELETION") {
    // 此 if 语句在传入 deletions 时候执行
    domParent.removeChild(fiber.dom)
  }
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

requestIdleCallback(workLoop)

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  // 3. [修改] 原本添加 fiber 的逻辑挪到 reconcileChildren 函数
  reconcileChildren(fiber, elements)

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

// 4. [新增] 处理子节点，参数分别是 父节点，用于取第一个子节点，子节点可以再取后面的兄弟节点。
function reconcileChildren (wipFiber, elements) {
  let index = 0;

  // 上次渲染完成后的 fiber 节点，需要在创建 fiber 的时候添加。现在是处理 fiber 的子节点，所以 fiber 我们已经处理完了，并且将老数据保留在 alternate。
  // 通过 alternate 我们可以得到原来老节点的子节点，然后我们可以进行子几点的比较
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child
  let prevSibling = null

  // TODO: 为什么要扁平化？ 扁平化一层组件
  elements = elements.flat()

  while (index < elements.length || oldFiber !== null) {
    const element = elements[index]
    let newFiber = null

    const sameType = oldFiber && element && elements.type === oldFiber.type

    // 存在同类型节点，则只需要更新属性
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        // 新增属性在渲染 DOM 阶段进行标识
        effectTag: "UPDATE"
      }
    }

    // 不同类型节点且存在新元素时，创建新的 DOM
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        // PLACEMENT 表示添加新节点
        effectTag: "PLACEMENT"
      }
    }

    // 不同类型节点，且存在旧 fiber 时，需要删除旧节点
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION"
      // 当最后提交 fiber 树到 DOM 时，我是从 wipRoot 开始的，
      // 此时没有上一次的 fiber，所以这里用一个数组来跟踪需要
      // 删除的节点
      deletions.push(oldFiber)
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling
    }

    if (index === 0) { 
      wipFiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }

}


const Redact = {
  createElement,
  render
}

export default Redact;

