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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"button {\\r\\n    background: transparent;\\r\\n    border: 0;\\r\\n    padding: 0;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  \\r\\n  .card__card--7bN6- {\\r\\n    position: relative;\\r\\n    background-color: var(--white);\\r\\n    border-radius: 7px;\\r\\n    padding: 20px 20px 10px;\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n  }\\r\\n  .card__card--7bN6- > *, .card__textContent--3Ki_7 > * {\\r\\n    flex: 1 1 100%;\\r\\n  }\\r\\n  .card__card--7bN6- > * + * {\\r\\n    padding: 13px 0 0;\\r\\n  }\\r\\n  .card__card--7bN6-:hover h2 a, .card__card--7bN6-:focus-within h2 a {\\r\\n    color: var(--orange);\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__card--7bN6- {\\r\\n      background-color: transparent;\\r\\n      flex-flow: row nowrap;\\r\\n      max-height: 107px;\\r\\n      padding: 0 40px;\\r\\n    }\\r\\n    .card__card--7bN6- > * {\\r\\n      flex: 0 0;\\r\\n    }\\r\\n    .card__card--7bN6- > * + * {\\r\\n      padding: 0;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__card--7bN6- {\\r\\n      padding: 20px 60px;\\r\\n      max-height: 147px;\\r\\n      cursor: pointer;\\r\\n    }\\r\\n    .card__card--7bN6-:hover, .card__card--7bN6-:focus-within {\\r\\n      outline: 1px solid var(--grey-demi-dark);\\r\\n    }\\r\\n  }\\r\\n  .card__textContent--3Ki_7 {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n  }\\r\\n  .card__textContent--3Ki_7 > * + * {\\r\\n    padding: 7px 0 0;\\r\\n  }\\r\\n  \\r\\n  .card__metaData--2-4Ht {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    align-items: center;\\r\\n    font-size: 10px;\\r\\n    line-height: 12px;\\r\\n  }\\r\\n  \\r\\n  .card__publishedLabel--3FDD2 {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  .card__createdAt--1NM_7, .card__createdAt--1NM_7 span {\\r\\n    color: var(--grey99);\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__textContent--3Ki_7 {\\r\\n      flex-basis: 540px;\\r\\n      order: 1;\\r\\n      margin: 0 0 0 38px;\\r\\n      flex-flow: column-reverse nowrap;\\r\\n      justify-content: center;\\r\\n    }\\r\\n    .card__textContent--3Ki_7 > * {\\r\\n      flex: 0 0;\\r\\n    }\\r\\n  \\r\\n    .card__metaData--2-4Ht {\\r\\n      flex-flow: row-reverse nowrap;\\r\\n      justify-content: flex-end;\\r\\n      font-size: 14px;\\r\\n      line-height: 16px;\\r\\n    }\\r\\n  \\r\\n    .card__publishedLabel--3FDD2 {\\r\\n      display: inline;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__textContent--3Ki_7 {\\r\\n      flex-basis: 672px;\\r\\n    }\\r\\n  }\\r\\n  .card__userLink--1NVQG {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    align-items: center;\\r\\n    height: 20px;\\r\\n    padding: 0 6px 0 0;\\r\\n  }\\r\\n  \\r\\n  .card__avatar--3eg0i {\\r\\n    border-radius: 20px;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    margin: 0 7px 0 0;\\r\\n  }\\r\\n  \\r\\n  .card__username--1I_6u {\\r\\n    color: var(--orange);\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__userLink--1NVQG {\\r\\n      padding: 0 0 0 5px;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__userLink--1NVQG:hover a {\\r\\n      text-decoration: underline;\\r\\n    }\\r\\n  }\\r\\n  .card__title--2eC9p {\\r\\n    font-size: 16px;\\r\\n    line-height: 19px;\\r\\n    font-weight: normal;\\r\\n    margin: 0;\\r\\n  }\\r\\n  \\r\\n  .card__postLink--1dr-s {\\r\\n    overflow: hidden;\\r\\n    -webkit-line-clamp: 2;\\r\\n    -webkit-box-orient: vertical;\\r\\n    display: -webkit-box;\\r\\n  }\\r\\n  \\r\\n  .card__postLink--1dr-s::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__textContent--3Ki_7 {\\r\\n      flex-basis:      540px;\\r\\n      order:           1;\\r\\n      margin:          0 0 0 38px;\\r\\n      flex-flow:       column-reverse nowrap;\\r\\n      justify-content: center;\\r\\n    }\\r\\n  \\r\\n    .card__textContent--3Ki_7 > * {\\r\\n      flex: 0 0;\\r\\n    }\\r\\n  \\r\\n    .card__title--2eC9p {\\r\\n      padding:     0 0 10px 0;\\r\\n      font-size:   20px;\\r\\n      line-height: 23px;\\r\\n    }\\r\\n  \\r\\n    .card__postLink--1dr-s {\\r\\n      -webkit-line-clamp: 1;\\r\\n    }\\r\\n  }\\r\\n  .card__preview--M1PGJ {\\r\\n    max-height: 178px;\\r\\n    margin: 0 -20px;\\r\\n  }\\r\\n  \\r\\n  .card__previewImg--37Jut {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__preview--M1PGJ {\\r\\n      flex-basis: 190px;\\r\\n      order:      0;\\r\\n      margin:     0;\\r\\n    }\\r\\n  }\\r\\n  .card__menu--2VNdY {\\r\\n    position: absolute;\\r\\n    top: 17px;\\r\\n    right: 15px;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  .card__menuButton--2icIq {\\r\\n    width: 31px;\\r\\n    height: 31px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    transform: rotate(90deg);\\r\\n    border-radius: 31px;\\r\\n  }\\r\\n  .card__menuButton--2icIq:active {\\r\\n    background-color: rgba(51, 51, 51, 0.1);\\r\\n  }\\r\\n  \\r\\n  .card__dropdown--Loivo {\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: 10px;\\r\\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\\r\\n    border-radius: 3px;\\r\\n    background-color: var(--white);\\r\\n  }\\r\\n  \\r\\n  .card__closeButton--2Y2Nh {\\r\\n    background-color: var(--greyD9);\\r\\n    padding: 12px 23px;\\r\\n    border-radius: 0 0 3px 3px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__menu--2VNdY {\\r\\n      position: relative;\\r\\n      order: 2;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      flex: 0 0;\\r\\n      top: unset;\\r\\n      right: unset;\\r\\n      margin: 0 0 0 auto;\\r\\n    }\\r\\n  \\r\\n    .card__menuButton--2icIq {\\r\\n      align-self: center;\\r\\n      transform: unset;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__menuButton--2icIq:hover {\\r\\n      background-color: rgba(51, 51, 51, 0.1);\\r\\n    }\\r\\n  }\\r\\n  .card__controls--1mm-w {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n  \\r\\n  .card__actions--1cmic {\\r\\n    display: flex;\\r\\n    flex-flow: row nowrap;\\r\\n  }\\r\\n  .card__actions--1cmic > * + * {\\r\\n    margin: 0 0 0 13px;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__controls--1mm-w {\\r\\n      order: 3;\\r\\n      flex: 0 0;\\r\\n      margin: 0 0 0 24px;\\r\\n    }\\r\\n  \\r\\n    .card__actions--1cmic {\\r\\n      display: none;\\r\\n    }\\r\\n  }\\r\\n  .card__karmaCounter--2eqMa > * + * {\\r\\n    padding: 0 0 0 4px;\\r\\n  }\\r\\n  \\r\\n  .card__karmaValue--1HJaY {\\r\\n    color: var(--greyC4);\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n  }\\r\\n  \\r\\n  .card__down--KLMht svg {\\r\\n    transform: rotate(180deg);\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__karmaCounter--2eqMa {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center;\\r\\n      flex-flow: column nowrap;\\r\\n    }\\r\\n    .card__karmaCounter--2eqMa > * + * {\\r\\n      padding: 7px 0 0;\\r\\n    }\\r\\n  \\r\\n    .card__karmaValue--1HJaY {\\r\\n      font-size: 14px;\\r\\n      line-height: 16px;\\r\\n      color: var(--black);\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1540px) {\\r\\n    .card__karmaCounter--2eqMa > button.card__up--K0BLJ:hover > svg > path {\\r\\n      fill: var(--green);\\r\\n    }\\r\\n  \\r\\n    .card__karmaCounter--2eqMa > button.card__down--KLMht:hover > svg > path {\\r\\n      fill: var(--orange);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .card__commentsButton--1yRBb {\\r\\n    display: flex;\\r\\n    align-items: normal;\\r\\n  }\\r\\n  .card__commentsButton--1yRBb * {\\r\\n    color: var(--greyC4);\\r\\n  }\\r\\n  \\r\\n  .card__commentsNumber--2xwYQ {\\r\\n    padding: 0 0 0 6px;\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n  }\\r\\n  \\r\\n  @media all and (min-width: 1024px) {\\r\\n    .card__commentsButton--1yRBb {\\r\\n      display: none;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n    \", \"\"]);\n// Exports\nexports.locals = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"metaData\": \"card__metaData--2-4Ht\",\n\t\"publishedLabel\": \"card__publishedLabel--3FDD2\",\n\t\"createdAt\": \"card__createdAt--1NM_7\",\n\t\"userLink\": \"card__userLink--1NVQG\",\n\t\"avatar\": \"card__avatar--3eg0i\",\n\t\"username\": \"card__username--1I_6u\",\n\t\"title\": \"card__title--2eC9p\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"preview\": \"card__preview--M1PGJ\",\n\t\"previewImg\": \"card__previewImg--37Jut\",\n\t\"menu\": \"card__menu--2VNdY\",\n\t\"menuButton\": \"card__menuButton--2icIq\",\n\t\"dropdown\": \"card__dropdown--Loivo\",\n\t\"closeButton\": \"card__closeButton--2Y2Nh\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"actions\": \"card__actions--1cmic\",\n\t\"karmaCounter\": \"card__karmaCounter--2eqMa\",\n\t\"karmaValue\": \"card__karmaValue--1HJaY\",\n\t\"down\": \"card__down--KLMht\",\n\t\"up\": \"card__up--K0BLJ\",\n\t\"commentsButton\": \"card__commentsButton--1yRBb\",\n\t\"commentsNumber\": \"card__commentsNumber--2xwYQ\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/card.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\n            react_1.default.createElement(\"div\", { className: card_css_1.default.metaData },\n                react_1.default.createElement(\"div\", { className: card_css_1.default.userLink },\n                    react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: \"https://cdn-icons-png.flaticon.com/512/147/147142.png\", alt: \"avatar\" }),\n                    react_1.default.createElement(\"a\", { href: '#user-url', className: card_css_1.default.username }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\n                react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt }, \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n            react_1.default.createElement(\"h2\", { className: card_css_1.default.title },\n                react_1.default.createElement(\"a\", { href: '#post-url', className: card_css_1.default.postLink }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439\"))),\n        react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\n            react_1.default.createElement(\"img\", { className: card_css_1.default.previewImg, src: \"https://cdn.dribbble.com/users/2293994/screenshots/5326648/media/9a5ecb77e427e839c778bffc68d17579.jpg\" })),\n        react_1.default.createElement(\"div\", { className: card_css_1.default.menu },\n            react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })))),\n        react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\n            react_1.default.createElement(\"div\", { className: card_css_1.default.karmaCounter },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.up },\n                    react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n                react_1.default.createElement(\"span\", { className: card_css_1.default.karmaValue }, \"234\"),\n                react_1.default.createElement(\"button\", { className: card_css_1.default.down },\n                    react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))),\n            react_1.default.createElement(\"button\", { className: card_css_1.default.commentsButton },\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n                react_1.default.createElement(\"span\", { className: card_css_1.default.commentsNumber }, \"13\")),\n            react_1.default.createElement(\"div\", null))));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/Card.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee0866cf6992c31c5617")
/******/ })();
/******/ 
/******/ }
);