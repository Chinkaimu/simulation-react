/**
 * 实现 Hooks 使得函数组件有状态
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

    Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase.substring(2)
      dom.addEventListener(eventType, nextProps[name])
    })
}

let nextUnitOfWork = null
let currentRoot = null
let wipRoot = null
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
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork (fiber) {
  if (!fiber) {
    return
  }

  let domParentFiber = fiber.parent.dom
  while (!domParent.dom) {
    domParentFiber = domParentFiber.parent
  }

  const domParent = domParentFiber.dom
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag === "DELETION") {
    // 2.1. [修改] 直接移除 DOM 替换成 commitDeletion 函数
    commitDeletion(fiber, domParent)
  }
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

requestIdleCallback(workLoop)

function commitDeletion(fiber, domParent) {
  // 当 child 是自函数组件是不存在 DOM，需要遍历子节点找到真正的 DOM 再进行删除
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  } else {
    commitDeletion(fiber.child, domParent)
  }
}

function performUnitOfWork(fiber) {
  const isFunctionComponent = fiber.type instanceof Function

  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }

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

// 1. [新增] 新增变量，存储渲染进行中的 fiber 节点
let wipFiber = null
// 2. [新增] 新增变量，当前 hook 的索引
let hookIndex = null

function updateFunctionComponent(fiber) {
  // 更新进行中的 fiber 节点
  wipFiber = fiber
  // 重置 hook 索引
  hookIndex = 0
  // 新增 hooks 数组以支持同一个组件多次调用 useState
  wipFiber.hooks = []
  // 执行函数得到的结果就是 children
  const children = [fiber.type(fiber.props)]
  reconcileChildren(fiber, children)
}

// 3. [新增] 新增 hook 方法
function useState(initial) {
  // alternate 保存了上一次渲染的 fiber 节点
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex]

  const hook = {
    // 第一次渲染使用入参，第二次渲染复用前一次的状态
    state: oldHook ? oldHook.state : initial,
    // 保存每次 setState 入参的队列
    queue: []
  }

  const actions = oldHook ? oldHook.queue : []
  actions.forEach(action => {
    // 根据调用 setState 顺序从前往后生成最新的 state
    hook.state = action instanceof Function ? action(hook.state) : action
  })

  // setState 函数用于新增 state, 入参 action
  const setState = action => {
    hook.queue.push(action)
    // 设置新的 wipRoot 和 nextUnitOfWork
    // 浏览器空闲时即开始渲染
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot
    }
    nextUnitOfWork = wipRoot
    deletions = []
  }

  // 保存本次 hook
  wipFiber.hooks.push(hook)
  hookIndex++
  return [hook.state, setState]
}

function updateHostComponent (fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  reconcileChildren(fiber, fiber.props.children)
}

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
  render,
  useState
}

export default Redact;

