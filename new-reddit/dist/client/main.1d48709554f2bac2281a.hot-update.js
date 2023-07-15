/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenew_reddit"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/shared/CardsList/Card/card.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/shared/CardsList/Card/card.css ***!
  \**************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"button {\\r\\n    background: transparent;\\r\\n    border: 0;\\r\\n    padding: 0;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  \\r\\n  .card__card--7bN6- {\\r\\n    position: relative;\\r\\n    background-color: var(--white);\\r\\n    border-radius: 7px;\\r\\n    padding: 20px 20px 10px;\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n  }\\r\\n  .card__card--7bN6- > *, .card__textContent--3Ki_7 > * {\\r\\n    flex: 1 1 100%;\\r\\n  }\\r\\n  .card__card--7bN6- > * + * {\\r\\n    padding: 13px 0 0;\\r\\n  }\\r\\n  .card__card--7bN6-:hover h2 a, .card__card--7bN6-:focus-within h2 a {\\r\\n    color: var(--orange);\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__card--7bN6- {\\r\\n      background-color: transparent;\\r\\n      flex-flow: row nowrap;\\r\\n      max-height: 107px;\\r\\n      padding: 0 40px;\\r\\n    }\\r\\n    .card__card--7bN6- > * {\\r\\n      flex: 0 0;\\r\\n    }\\r\\n    .card__card--7bN6- > * + * {\\r\\n      padding: 0;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__card--7bN6- {\\r\\n      padding: 20px 60px;\\r\\n      max-height: 147px;\\r\\n      cursor: pointer;\\r\\n    }\\r\\n    .card__card--7bN6-:hover, .card__card--7bN6-:focus-within {\\r\\n      outline: 1px solid var(--grey-demi-dark);\\r\\n    }\\r\\n  }\\r\\n  \", \"\"]);\n// Exports\nexports.locals = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/card.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./card.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/shared/CardsList/Card/card.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./card.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/shared/CardsList/Card/card.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./card.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/shared/CardsList/Card/card.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.id, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(\"div\", null)));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/Card.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("feeca2c0b21f92f10f93")
/******/ })();
/******/ 
/******/ }
);