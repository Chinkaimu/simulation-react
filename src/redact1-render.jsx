// 0. 创建节点的对象描述
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

function render (element, container) {
  // 1.1. 创建DOM： 根据对象描述创建 DOM
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)

  // 1.2. 创建DOM： DOM 元素添加属性
  const isProperty = key => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
  
  // 2. 子节点处理： 递归调用，同样方法处理子元素
  element.props.children.forEach(child =>
    render(child, dom)
  )

  // 3. 将 DOM 节点插入容器
  container.appendChild(dom)
}

const Redact = {
  createElement,
  render
}

export default Redact;

