/**
 * 为了能够片段化执行及方便其他功能引入，增加一层 Fiber 结构由节点对象转化，主要是在节点对象的基础上增加了节点之前的关联及其他属性
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

function render (element, container) {
  // 1 [新增]. 初始化 Fiber： 为了能够片段化执行，引入 Fiber 结构，根节点对应根 fiber，初始化单元任务 —— 插入根节点。
  nextUnitWork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}

let nextUnitWork = null;
function workLoop (deadline) {
  let shouldYield = false;
  while (nextUnitWork && !shouldYield) {
    nextUnitWork = performUnitOfWork(nextUnitWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  requestIdleCallback(workLoop)
}

// 2 [新增]. 等待任务执行：等待浏览器空闲时执行单元任务，并获取下一个单元任务马上执行或等待执行。
requestIdleCallback(workLoop)

// 3 [新增]. 任务执行
// 3.1. 单元任务的具体操作，将节点内容转化成真实的 DOM 并插入到父节点(根节点除外)。
// 3.2. 创建所有子节点的 fiber 结构
// 3.3. 返回下一个需要执行的 fiber 节点（如果有子节点则返回子节点，没有就返回兄弟节点，再没有就返回父节点的兄弟节点直到根节点）
function performUnitOfWork (fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  // 子节点 DOM 插到父节点之后
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

