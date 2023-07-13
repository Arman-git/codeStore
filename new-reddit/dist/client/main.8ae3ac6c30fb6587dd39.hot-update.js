"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenew_reddit"]("main",{

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nif (true) {\n    var hot = (__webpack_require__(/*! ./index */ \"./node_modules/react-hot-loader/index.js\").hot);\n    if (true) {\n        var cache = __webpack_require__.c;\n        if (!module.parents || module.parents.length === 0) {\n            throw new Error('React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +\n                'Please use `import {hot} from \"react-hot-loader\"` instead');\n        }\n        // access parent\n        var parent = cache[module.parents[0]];\n        if (!parent) {\n            throw new Error('React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +\n                'Please use `import {hot} from \"react-hot-loader\"` instead');\n        }\n        // remove self from a cache\n        delete cache[module.id];\n        // setup hot for caller\n        exports.hot = hot(parent);\n    }\n    else {}\n}\nelse {}\nfunction fallbackHot() {\n    exports.hot = function (a) {\n        return a;\n    };\n}\n\n\n//# sourceURL=webpack://new-reddit/./node_modules/react-hot-loader/root.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nfunction AppComponent() {\n    return (react_1.default.createElement(\"div\", null, \"content\"));\n}\nexports.App = (0, root_1.hot)(AppComponent);\n\n\n//# sourceURL=webpack://new-reddit/./src/App.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02d53d02ea0206640dce")
/******/ })();
/******/ 
/******/ }
);