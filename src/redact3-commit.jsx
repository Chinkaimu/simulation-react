/**
 * 片段化执行创建 DOM 可能造成片段化渲染，导致体验很差。所以需要在所有任务处理完成后整体去提交。
 * 新增数据结构： wipRoot 存储根节点，所有的子节点 DOM 处理完以后提交 DOM 渲染。
 * 这里形成了一颗 Fiber 树，建立了各节点之间的联系。
 */
function createElement (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement (text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function createDom (fiber) {
  // create node
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type)

  // props assignment
  const isProperty = key => key !== 'children'
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name]
    })

  return dom
}

// 存储根节点信息
let wipRoot = null
function render (element, container) {
  // 1. [修改] 根节点信息先存储在 wipRoot，然后再初始化第一个单元任务
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    }
  }
  nextUnitWork = wipRoot
}

let nextUnitWork = null;
function workLoop (deadline) {
  let shouldYield = false;
  while (nextUnitWork && !shouldYield) {
    nextUnitWork = performUnitOfWork(nextUnitWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  // 2. [新增] 如果当前已经没有单元任务了，且存在根节点则提交进行 DOM 渲染
  if (!nextUnitWork && wipRoot) {
    commitRoot()
  }

  // 浏览器的空闲时间段内调用的函数队列
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback
  requestIdleCallback(workLoop)
}

function commitRoot () {
  // 根节点已经存在，不需要创建 DOM 进行渲染
  commitWork(wipRoot.child)
  wipRoot = null
}

function commitWork (fiber) {
  if (!fiber) {
    return
  }

  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)

  // 递归子节点和兄弟节点
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

// 一旦浏览器空闲，就触发执行单元任务
requestIdleCallback(workLoop)

function performUnitOfWork (fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  // 除根节点外子节点 DOM 插到父节点之后
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  }

  // 每个子元素创建新的 fiber
  const elements = fiber.props.children
  let index = 0
  let prevSibling = null

  while (index < elements.length) {
    const element = elements[index]

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    }

    // 根据上面的图示，父节点只链接到第一个子节点
    if (index === 0) {
      fiber.child = newFiber
    } else {
      // 兄弟节点链接兄弟节点
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }

  // 返回下一个任务单元（fiber）
  // 有子节点直接返回
  if (fiber.child) {
    return fiber.child
  }

  // 没有子节点则找兄弟节点，没有兄弟节点则找父节点的兄弟节点
  // 循环遍历到根节点为止
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}


const Redact = {
  createElement,
  render
}

export default Redact;

