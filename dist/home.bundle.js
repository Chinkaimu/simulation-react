(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/chinkaimu/code/simulation-react/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redact4_reconciliation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redact4-reconciliation */ \"./src/redact4-reconciliation.jsx\");\n\nconst element = _redact4_reconciliation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', {\n  id: 'foo'\n}, _redact4_reconciliation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"a\", null, 'bar'), _redact4_reconciliation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"b\"));\nconst container = document.getElementById('root');\n_redact4_reconciliation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(element, container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeD9lZDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWRhY3QgZnJvbSAnLi9yZWRhY3Q0LXJlY29uY2lsaWF0aW9uJ1xuXG5jb25zdCBlbGVtZW50ID0gUmVkYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICdkaXYnLFxuICB7IGlkOiAnZm9vJyB9LFxuICBSZWRhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgJ2JhcicpLFxuICBSZWRhY3QuY3JlYXRlRWxlbWVudChcImJcIilcbilcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblJlZGFjdC5yZW5kZXIoZWxlbWVudCwgY29udGFpbmVyKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.jsx\n");

/***/ }),

/***/ "./src/redact4-reconciliation.jsx":
/*!****************************************!*\
  !*** ./src/redact4-reconciliation.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * 除了渲染，还需要有更新操作。我们需要考虑现在 DOM 需要渲染的结构以及当前渲染的 结构进行比较，根据差异决定是否更新。\n * 新增数据结构：currentRoot 存储当前 fiber 树\n * 主要变化点：\n *    * 创建要渲染的 fiber 树时，存在与上一个 Fiber 树的比较。\n *    * 提交 DOM 更新的时候不仅仅只照着 Fiber 的结构渲染，还要进行删除等操作\n *    * DOM 渲染完成后，将结果 Fiber 结构赋值给 currentRoot 保留下次使用\n * render ⟶ workLoop ⟶ performUnitOfWork ⟶ reconcileChildren ⟶ workLoop ⟶ commitRoot ⟶ commitWork ⟶ updateDom\n */\nfunction createElement(type, props, ...children) {\n  return {\n    type,\n    props: { ...props,\n      children: children.map(child => typeof child === \"object\" ? child : createTextElement(child))\n    }\n  };\n}\n\nfunction createTextElement(text) {\n  return {\n    type: \"TEXT_ELEMENT\",\n    props: {\n      nodeValue: text,\n      children: []\n    }\n  };\n}\n\nfunction createDom(fiber) {\n  const dom = fiber.type === \"TEXT_ELEMENT\" ? document.createTextNode(\"\") : document.createElement(fiber.type);\n  updateDom(dom, {}, fiber.props);\n  return dom;\n} // 6. [新增] 更新 DOM\n\n\nconst isEvent = key => key.startsWith('on');\n\nconst isProperty = key => key !== 'children' && !isEvent(key);\n\nconst isNew = (prev, next) => key => prev[key] !== next[key];\n\nconst isGone = (prev, next) => key => !(key in next);\n\nfunction updateDom(dom, prevProps, nextProps) {\n  // 移除旧的或者变化的事件处理函数\n  // 以 on 开头的事件属性特殊处理：有所不同的事件——不在新属性中或者与上次不同，直接移除\n  Object.keys(prevProps) // 是事件属性\n  .filter(isEvent) // key 不在新属性中或者与上一次不相等\n  .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key)).forEach(name => {\n    const eventType = name.toLowerCase().substring(2);\n    dom.removeEventListener(eventType);\n  }); // 移除非 children 的旧属性\n\n  Object.keys(prevProps).filter(isProperty).filter(isGone(prevProps, nextProps)).forEach(name => {\n    dome[name] = \"\";\n  }); // 添加或更新属性\n\n  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(name => {\n    // React 规定 style 内联央视是驼峰命名的对象\n    // 根据规范给 style 每个属性单独赋值\n    if (name === 'style') {\n      Object.entries(nextProps[name]).forEach(([key, value]) => {\n        dome.style[key] = value;\n      });\n    } else {\n      dom[name] = nextProps[name];\n    }\n  }); // TODO: 应该放在旧事件处理之后添加新事件处理函数\n\n  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(name => {\n    const eventType = name.toLowerCase.substring(2);\n    dom.addEventListener(eventType, nextProps[name]);\n  });\n}\n\nlet nextUnitOfWork = null; // 1. [新增] 新增存储当前渲染结构\n\nlet currentRoot = null;\nlet wipRoot = null; // 2. [新增] 新增要删除列表\n\nlet deletions = null;\n\nfunction render(element, container) {\n  wipRoot = {\n    dom: container,\n    // 根节点的 children 就是要渲染的内容\n    props: {\n      children: [element]\n    },\n    alternate: currentRoot\n  };\n  deletions = [];\n  nextUnitOfWork = wipRoot;\n}\n\nfunction workLoop(deadline) {\n  let shouldYield = false;\n\n  while (nextUnitOfWork && !shouldYield) {\n    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);\n    shouldYield = deadline.timeRemaining() < 1;\n  }\n\n  if (!nextUnitOfWork && wipRoot) {\n    commitRoot();\n  }\n\n  requestIdleCallback(workLoop);\n}\n\nfunction commitRoot() {\n  // 5. [新增] 先删除需要删除的节点\n  deletions.forEach(commitWork);\n  commitWork(wipRoot.child);\n  currentRoot = wipRoot;\n  wipRoot = null;\n}\n\nfunction commitWork(fiber) {\n  if (!fiber) {\n    return;\n  }\n\n  const domParent = fiber.parent.dom;\n\n  if (fiber.effectTag === \"PLACEMENT\" && fiber.dom != null) {\n    domParent.appendChild(fiber.dom);\n  } else if (fiber.effectTag === \"UPDATE\" && fiber.dom != null) {\n    updateDom(fiber.dom, fiber.alternate.props, fiber.props);\n  } else if (fiber.effectTag === \"DELETION\") {\n    // 此 if 语句在传入 deletions 时候执行\n    domParent.removeChild(fiber.dom);\n  }\n\n  commitWork(fiber.child);\n  commitWork(fiber.sibling);\n}\n\nrequestIdleCallback(workLoop);\n\nfunction performUnitOfWork(fiber) {\n  if (!fiber.dom) {\n    fiber.dom = createDom(fiber);\n  }\n\n  const elements = fiber.props.children; // 3. [修改] 原本添加 fiber 的逻辑挪到 reconcileChildren 函数\n\n  reconcileChildren(fiber, elements);\n\n  if (fiber.child) {\n    return fiber.child;\n  }\n\n  let nextFiber = fiber;\n\n  while (nextFiber) {\n    if (nextFiber.sibling) {\n      return nextFiber.sibling;\n    }\n\n    nextFiber = nextFiber.parent;\n  }\n} // 4. [新增] 处理子节点，参数分别是 父节点，用于取第一个子节点，子节点可以再取后面的兄弟节点。\n\n\nfunction reconcileChildren(wipFiber, elements) {\n  let index = 0; // 上次渲染完成后的 fiber 节点，需要在创建 fiber 的时候添加。现在是处理 fiber 的子节点，所以 fiber 我们已经处理完了，并且将老数据保留在 alternate。\n  // 通过 alternate 我们可以得到原来老节点的子节点，然后我们可以进行子几点的比较\n\n  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;\n  let prevSibling = null; // TODO: 为什么要扁平化？ 扁平化一层组件\n\n  elements = elements.flat();\n\n  while (index < elements.length || oldFiber !== null) {\n    const element = elements[index];\n    let newFiber = null;\n    const sameType = oldFiber && element && elements.type === oldFiber.type; // 存在同类型节点，则只需要更新属性\n\n    if (sameType) {\n      newFiber = {\n        type: oldFiber.type,\n        props: element.props,\n        dom: oldFiber.dom,\n        parent: wipFiber,\n        alternate: oldFiber,\n        // 新增属性在渲染 DOM 阶段进行标识\n        effectTag: \"UPDATE\"\n      };\n    } // 不同类型节点且存在新元素时，创建新的 DOM\n\n\n    if (element && !sameType) {\n      newFiber = {\n        type: element.type,\n        props: element.props,\n        dom: null,\n        parent: wipFiber,\n        alternate: null,\n        // PLACEMENT 表示添加新节点\n        effectTag: \"PLACEMENT\"\n      };\n    } // 不同类型节点，且存在旧 fiber 时，需要删除旧节点\n\n\n    if (oldFiber && !sameType) {\n      oldFiber.effectTag = \"DELETION\"; // 当最后提交 fiber 树到 DOM 时，我是从 wipRoot 开始的，\n      // 此时没有上一次的 fiber，所以这里用一个数组来跟踪需要\n      // 删除的节点\n\n      deletions.push(oldFiber);\n    }\n\n    if (oldFiber) {\n      oldFiber = oldFiber.sibling;\n    }\n\n    if (index === 0) {\n      wipFiber.child = newFiber;\n    } else {\n      prevSibling.sibling = newFiber;\n    }\n\n    prevSibling = newFiber;\n    index++;\n  }\n}\n\nconst Redact = {\n  createElement,\n  render\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Redact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkYWN0NC1yZWNvbmNpbGlhdGlvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0NC1yZWNvbmNpbGlhdGlvbi5qc3g/NWRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmZpOS6hua4suafk++8jOi/mOmcgOimgeacieabtOaWsOaTjeS9nOOAguaIkeS7rOmcgOimgeiAg+iZkeeOsOWcqCBET00g6ZyA6KaB5riy5p+T55qE57uT5p6E5Lul5Y+K5b2T5YmN5riy5p+T55qEIOe7k+aehOi/m+ihjOavlOi+g++8jOagueaNruW3ruW8guWGs+WumuaYr+WQpuabtOaWsOOAglxuICog5paw5aKe5pWw5o2u57uT5p6E77yaY3VycmVudFJvb3Qg5a2Y5YKo5b2T5YmNIGZpYmVyIOagkVxuICog5Li76KaB5Y+Y5YyW54K577yaXG4gKiAgICAqIOWIm+W7uuimgea4suafk+eahCBmaWJlciDmoJHml7bvvIzlrZjlnKjkuI7kuIrkuIDkuKogRmliZXIg5qCR55qE5q+U6L6D44CCXG4gKiAgICAqIOaPkOS6pCBET00g5pu05paw55qE5pe25YCZ5LiN5LuF5LuF5Y+q54Wn552AIEZpYmVyIOeahOe7k+aehOa4suafk++8jOi/mOimgei/m+ihjOWIoOmZpOetieaTjeS9nFxuICogICAgKiBET00g5riy5p+T5a6M5oiQ5ZCO77yM5bCG57uT5p6cIEZpYmVyIOe7k+aehOi1i+WAvOe7mSBjdXJyZW50Um9vdCDkv53nlZnkuIvmrKHkvb/nlKhcbiAqIHJlbmRlciDin7Ygd29ya0xvb3Ag4p+2IHBlcmZvcm1Vbml0T2ZXb3JrIOKftiByZWNvbmNpbGVDaGlsZHJlbiDin7Ygd29ya0xvb3Ag4p+2IGNvbW1pdFJvb3Qg4p+2IGNvbW1pdFdvcmsg4p+2IHVwZGF0ZURvbVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwib2JqZWN0XCIgPyBjaGlsZCA6IGNyZWF0ZVRleHRFbGVtZW50KGNoaWxkKVxuICAgICAgKVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQodGV4dCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiVEVYVF9FTEVNRU5UXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgIG5vZGVWYWx1ZTogdGV4dCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9tKGZpYmVyKSB7XG4gIGNvbnN0IGRvbSA9XG4gICAgZmliZXIudHlwZSA9PT0gXCJURVhUX0VMRU1FTlRcIlxuICAgICAgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZpYmVyLnR5cGUpO1xuXG4gIHVwZGF0ZURvbShkb20sIHt9LCBmaWJlci5wcm9wcyk7XG5cbiAgcmV0dXJuIGRvbTtcbn1cblxuLy8gNi4gW+aWsOWinl0g5pu05pawIERPTVxuY29uc3QgaXNFdmVudCA9IGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnb24nKVxuY29uc3QgaXNQcm9wZXJ0eSA9IGtleSA9PiAoa2V5ICE9PSAnY2hpbGRyZW4nKSAmJiAhaXNFdmVudChrZXkpXG5jb25zdCBpc05ldyA9IChwcmV2LCBuZXh0KSA9PiBrZXkgPT4gcHJldltrZXldICE9PSBuZXh0W2tleV1cbmNvbnN0IGlzR29uZSA9IChwcmV2LCBuZXh0KSA9PiBrZXkgPT4gIShrZXkgaW4gbmV4dClcblxuZnVuY3Rpb24gdXBkYXRlRG9tIChkb20sIHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gIC8vIOenu+mZpOaXp+eahOaIluiAheWPmOWMlueahOS6i+S7tuWkhOeQhuWHveaVsFxuICAvLyDku6Ugb24g5byA5aS055qE5LqL5Lu25bGe5oCn54m55q6K5aSE55CG77ya5pyJ5omA5LiN5ZCM55qE5LqL5Lu24oCU4oCU5LiN5Zyo5paw5bGe5oCn5Lit5oiW6ICF5LiO5LiK5qyh5LiN5ZCM77yM55u05o6l56e76ZmkXG4gIE9iamVjdC5rZXlzKHByZXZQcm9wcylcbiAgICAvLyDmmK/kuovku7blsZ7mgKdcbiAgICAuZmlsdGVyKGlzRXZlbnQpXG4gICAgLy8ga2V5IOS4jeWcqOaWsOWxnuaAp+S4reaIluiAheS4juS4iuS4gOasoeS4jeebuOetiVxuICAgIC5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIG5leHRQcm9wcykgfHwgaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKGtleSkpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUpXG4gICAgfSlcbiAgXG4gIC8vIOenu+mZpOmdniBjaGlsZHJlbiDnmoTml6flsZ7mgKdcbiAgT2JqZWN0LmtleXMocHJldlByb3BzKVxuICAgIC5maWx0ZXIoaXNQcm9wZXJ0eSlcbiAgICAuZmlsdGVyKGlzR29uZShwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBkb21lW25hbWVdID0gXCJcIlxuICAgIH0pXG5cbiAgLy8g5re75Yqg5oiW5pu05paw5bGe5oCnXG4gIE9iamVjdC5rZXlzKG5leHRQcm9wcylcbiAgICAuZmlsdGVyKGlzUHJvcGVydHkpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAvLyBSZWFjdCDop4Tlrpogc3R5bGUg5YaF6IGU5aSu6KeG5piv6am85bOw5ZG95ZCN55qE5a+56LGhXG4gICAgICAvLyDmoLnmja7op4TojIPnu5kgc3R5bGUg5q+P5Liq5bGe5oCn5Y2V54us6LWL5YC8XG4gICAgICBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICBPYmplY3QuZW50cmllcyhuZXh0UHJvcHNbbmFtZV0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGRvbWUuc3R5bGVba2V5XSA9IHZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21bbmFtZV0gPSBuZXh0UHJvcHNbbmFtZV1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgICBcbiAgICAvLyBUT0RPOiDlupTor6XmlL7lnKjml6fkuovku7blpITnkIbkuYvlkI7mt7vliqDmlrDkuovku7blpITnkIblh73mlbBcbiAgICBPYmplY3Qua2V5cyhuZXh0UHJvcHMpXG4gICAgLmZpbHRlcihpc0V2ZW50KVxuICAgIC5maWx0ZXIoaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKVxuICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS50b0xvd2VyQ2FzZS5zdWJzdHJpbmcoMilcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbmV4dFByb3BzW25hbWVdKVxuICAgIH0pXG59XG5cbmxldCBuZXh0VW5pdE9mV29yayA9IG51bGxcbi8vIDEuIFvmlrDlop5dIOaWsOWinuWtmOWCqOW9k+WJjea4suafk+e7k+aehFxubGV0IGN1cnJlbnRSb290ID0gbnVsbFxubGV0IHdpcFJvb3QgPSBudWxsXG4vLyAyLiBb5paw5aKeXSDmlrDlop7opoHliKDpmaTliJfooahcbmxldCBkZWxldGlvbnMgPSBudWxsXG5cbmZ1bmN0aW9uIHJlbmRlciAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gIHdpcFJvb3QgPSB7XG4gICAgZG9tOiBjb250YWluZXIsXG4gICAgLy8g5qC56IqC54K555qEIGNoaWxkcmVuIOWwseaYr+imgea4suafk+eahOWGheWuuVxuICAgIHByb3BzOiB7XG4gICAgICBjaGlsZHJlbjogW2VsZW1lbnRdXG4gICAgfSxcbiAgICBhbHRlcm5hdGU6IGN1cnJlbnRSb290XG4gIH07XG4gIGRlbGV0aW9ucyA9IFtdXG4gIG5leHRVbml0T2ZXb3JrID0gd2lwUm9vdFxufVxuXG5mdW5jdGlvbiB3b3JrTG9vcChkZWFkbGluZSkge1xuICBsZXQgc2hvdWxkWWllbGQgPSBmYWxzZTtcbiAgd2hpbGUgKG5leHRVbml0T2ZXb3JrICYmICFzaG91bGRZaWVsZCkge1xuICAgIG5leHRVbml0T2ZXb3JrID0gcGVyZm9ybVVuaXRPZldvcmsobmV4dFVuaXRPZldvcmspO1xuICAgIHNob3VsZFlpZWxkID0gZGVhZGxpbmUudGltZVJlbWFpbmluZygpIDwgMTtcbiAgfVxuXG4gIGlmICghbmV4dFVuaXRPZldvcmsgJiYgd2lwUm9vdCkge1xuICAgIGNvbW1pdFJvb3QoKVxuICB9XG5cbiAgcmVxdWVzdElkbGVDYWxsYmFjayh3b3JrTG9vcClcbn1cblxuZnVuY3Rpb24gY29tbWl0Um9vdCAoKSB7XG4gIC8vIDUuIFvmlrDlop5dIOWFiOWIoOmZpOmcgOimgeWIoOmZpOeahOiKgueCuVxuICBkZWxldGlvbnMuZm9yRWFjaChjb21taXRXb3JrKVxuICBjb21taXRXb3JrKHdpcFJvb3QuY2hpbGQpXG4gIGN1cnJlbnRSb290ID0gd2lwUm9vdFxuICB3aXBSb290ID0gbnVsbFxufVxuXG5mdW5jdGlvbiBjb21taXRXb3JrIChmaWJlcikge1xuICBpZiAoIWZpYmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkb21QYXJlbnQgPSBmaWJlci5wYXJlbnQuZG9tXG4gIGlmIChmaWJlci5lZmZlY3RUYWcgPT09IFwiUExBQ0VNRU5UXCIgJiYgZmliZXIuZG9tICE9IG51bGwpIHtcbiAgICBkb21QYXJlbnQuYXBwZW5kQ2hpbGQoZmliZXIuZG9tKVxuICB9IGVsc2UgaWYgKGZpYmVyLmVmZmVjdFRhZyA9PT0gXCJVUERBVEVcIiAmJiBmaWJlci5kb20gIT0gbnVsbCkge1xuICAgIHVwZGF0ZURvbShmaWJlci5kb20sIGZpYmVyLmFsdGVybmF0ZS5wcm9wcywgZmliZXIucHJvcHMpXG4gIH0gZWxzZSBpZiAoZmliZXIuZWZmZWN0VGFnID09PSBcIkRFTEVUSU9OXCIpIHtcbiAgICAvLyDmraQgaWYg6K+t5Y+l5Zyo5Lyg5YWlIGRlbGV0aW9ucyDml7blgJnmiafooYxcbiAgICBkb21QYXJlbnQucmVtb3ZlQ2hpbGQoZmliZXIuZG9tKVxuICB9XG4gIGNvbW1pdFdvcmsoZmliZXIuY2hpbGQpXG4gIGNvbW1pdFdvcmsoZmliZXIuc2libGluZylcbn1cblxucmVxdWVzdElkbGVDYWxsYmFjayh3b3JrTG9vcClcblxuZnVuY3Rpb24gcGVyZm9ybVVuaXRPZldvcmsoZmliZXIpIHtcbiAgaWYgKCFmaWJlci5kb20pIHtcbiAgICBmaWJlci5kb20gPSBjcmVhdGVEb20oZmliZXIpXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IGZpYmVyLnByb3BzLmNoaWxkcmVuXG4gIC8vIDMuIFvkv67mlLldIOWOn+acrOa3u+WKoCBmaWJlciDnmoTpgLvovpHmjKrliLAgcmVjb25jaWxlQ2hpbGRyZW4g5Ye95pWwXG4gIHJlY29uY2lsZUNoaWxkcmVuKGZpYmVyLCBlbGVtZW50cylcblxuICBpZiAoZmliZXIuY2hpbGQpIHtcbiAgICByZXR1cm4gZmliZXIuY2hpbGRcbiAgfVxuICBsZXQgbmV4dEZpYmVyID0gZmliZXJcbiAgd2hpbGUgKG5leHRGaWJlcikge1xuICAgIGlmIChuZXh0RmliZXIuc2libGluZykge1xuICAgICAgcmV0dXJuIG5leHRGaWJlci5zaWJsaW5nXG4gICAgfVxuICAgIG5leHRGaWJlciA9IG5leHRGaWJlci5wYXJlbnRcbiAgfVxufVxuXG4vLyA0LiBb5paw5aKeXSDlpITnkIblrZDoioLngrnvvIzlj4LmlbDliIbliKvmmK8g54i26IqC54K577yM55So5LqO5Y+W56ys5LiA5Liq5a2Q6IqC54K577yM5a2Q6IqC54K55Y+v5Lul5YaN5Y+W5ZCO6Z2i55qE5YWE5byf6IqC54K544CCXG5mdW5jdGlvbiByZWNvbmNpbGVDaGlsZHJlbiAod2lwRmliZXIsIGVsZW1lbnRzKSB7XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgLy8g5LiK5qyh5riy5p+T5a6M5oiQ5ZCO55qEIGZpYmVyIOiKgueCue+8jOmcgOimgeWcqOWIm+W7uiBmaWJlciDnmoTml7blgJnmt7vliqDjgILnjrDlnKjmmK/lpITnkIYgZmliZXIg55qE5a2Q6IqC54K577yM5omA5LulIGZpYmVyIOaIkeS7rOW3sue7j+WkhOeQhuWujOS6hu+8jOW5tuS4lOWwhuiAgeaVsOaNruS/neeVmeWcqCBhbHRlcm5hdGXjgIJcbiAgLy8g6YCa6L+HIGFsdGVybmF0ZSDmiJHku6zlj6/ku6XlvpfliLDljp/mnaXogIHoioLngrnnmoTlrZDoioLngrnvvIznhLblkI7miJHku6zlj6/ku6Xov5vooYzlrZDlh6DngrnnmoTmr5TovoNcbiAgbGV0IG9sZEZpYmVyID0gd2lwRmliZXIuYWx0ZXJuYXRlICYmIHdpcEZpYmVyLmFsdGVybmF0ZS5jaGlsZFxuICBsZXQgcHJldlNpYmxpbmcgPSBudWxsXG5cbiAgLy8gVE9ETzog5Li65LuA5LmI6KaB5omB5bmz5YyW77yfIOaJgeW5s+WMluS4gOWxgue7hOS7tlxuICBlbGVtZW50cyA9IGVsZW1lbnRzLmZsYXQoKVxuXG4gIHdoaWxlIChpbmRleCA8IGVsZW1lbnRzLmxlbmd0aCB8fCBvbGRGaWJlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF1cbiAgICBsZXQgbmV3RmliZXIgPSBudWxsXG5cbiAgICBjb25zdCBzYW1lVHlwZSA9IG9sZEZpYmVyICYmIGVsZW1lbnQgJiYgZWxlbWVudHMudHlwZSA9PT0gb2xkRmliZXIudHlwZVxuXG4gICAgLy8g5a2Y5Zyo5ZCM57G75Z6L6IqC54K577yM5YiZ5Y+q6ZyA6KaB5pu05paw5bGe5oCnXG4gICAgaWYgKHNhbWVUeXBlKSB7XG4gICAgICBuZXdGaWJlciA9IHtcbiAgICAgICAgdHlwZTogb2xkRmliZXIudHlwZSxcbiAgICAgICAgcHJvcHM6IGVsZW1lbnQucHJvcHMsXG4gICAgICAgIGRvbTogb2xkRmliZXIuZG9tLFxuICAgICAgICBwYXJlbnQ6IHdpcEZpYmVyLFxuICAgICAgICBhbHRlcm5hdGU6IG9sZEZpYmVyLFxuICAgICAgICAvLyDmlrDlop7lsZ7mgKflnKjmuLLmn5MgRE9NIOmYtuautei/m+ihjOagh+ivhlxuICAgICAgICBlZmZlY3RUYWc6IFwiVVBEQVRFXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuI3lkIznsbvlnovoioLngrnkuJTlrZjlnKjmlrDlhYPntKDml7bvvIzliJvlu7rmlrDnmoQgRE9NXG4gICAgaWYgKGVsZW1lbnQgJiYgIXNhbWVUeXBlKSB7XG4gICAgICBuZXdGaWJlciA9IHtcbiAgICAgICAgdHlwZTogZWxlbWVudC50eXBlLFxuICAgICAgICBwcm9wczogZWxlbWVudC5wcm9wcyxcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBwYXJlbnQ6IHdpcEZpYmVyLFxuICAgICAgICBhbHRlcm5hdGU6IG51bGwsXG4gICAgICAgIC8vIFBMQUNFTUVOVCDooajnpLrmt7vliqDmlrDoioLngrlcbiAgICAgICAgZWZmZWN0VGFnOiBcIlBMQUNFTUVOVFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5LiN5ZCM57G75Z6L6IqC54K577yM5LiU5a2Y5Zyo5penIGZpYmVyIOaXtu+8jOmcgOimgeWIoOmZpOaXp+iKgueCuVxuICAgIGlmIChvbGRGaWJlciAmJiAhc2FtZVR5cGUpIHtcbiAgICAgIG9sZEZpYmVyLmVmZmVjdFRhZyA9IFwiREVMRVRJT05cIlxuICAgICAgLy8g5b2T5pyA5ZCO5o+Q5LqkIGZpYmVyIOagkeWIsCBET00g5pe277yM5oiR5piv5LuOIHdpcFJvb3Qg5byA5aeL55qE77yMXG4gICAgICAvLyDmraTml7bmsqHmnInkuIrkuIDmrKHnmoQgZmliZXLvvIzmiYDku6Xov5nph4znlKjkuIDkuKrmlbDnu4TmnaXot5/ouKrpnIDopoFcbiAgICAgIC8vIOWIoOmZpOeahOiKgueCuVxuICAgICAgZGVsZXRpb25zLnB1c2gob2xkRmliZXIpXG4gICAgfVxuXG4gICAgaWYgKG9sZEZpYmVyKSB7XG4gICAgICBvbGRGaWJlciA9IG9sZEZpYmVyLnNpYmxpbmdcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHsgXG4gICAgICB3aXBGaWJlci5jaGlsZCA9IG5ld0ZpYmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZTaWJsaW5nLnNpYmxpbmcgPSBuZXdGaWJlclxuICAgIH1cblxuICAgIHByZXZTaWJsaW5nID0gbmV3RmliZXJcbiAgICBpbmRleCsrXG4gIH1cblxufVxuXG5cbmNvbnN0IFJlZGFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgcmVuZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZGFjdDtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redact4-reconciliation.jsx\n");

/***/ })

/******/ });
});