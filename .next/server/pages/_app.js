module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\seobo\\Desktop\\nodebird\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NodeBird = ({
  Component
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charset: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};
NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





// (이전상태, 액션) => 다음상태를 만들어내는 함수
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫 번째 게시글 #해시태크 #익스프레스',
    Images: [{
      src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg'
    }, {
      src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg'
    }, {
      src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른 사고싶어요~'
    }]
  }],
  imagePaths: [],
  postAdded: false
};

// 변수로 빼주는게 좋음 => 에러 발생을 막을 수 있다.
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 2,
  content: '더미데이터입니다',
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
};
const loginAction = data => {
  return {
    type: 'LOG_IN',
    data
  };
};
const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");




const configureStore = () => {
  const middlewares = [];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEYwQjtBQUNTO0FBQ1A7QUFDQztBQUVpQjtBQUU5QyxNQUFNQSxRQUFRLEdBQUcsQ0FBQztFQUFFQztBQUFVLENBQUMsS0FBSztFQUNsQyxPQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSSxNQUFDLGdEQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRDtJQUFNLE9BQU8sRUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUN4QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGNBQXVCLENBQ3BCLEVBQ1QsTUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNUO0FBRVYsQ0FBQztBQUVERCxRQUFRLENBQUNFLFNBQVMsR0FBRztFQUNqQkQsU0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFXLENBQUNDO0FBQ3JDLENBQUM7QUFFY0MsNEhBQU8sQ0FBQ0MsU0FBUyxDQUFDUCxRQUFRLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRztBQUNMO0FBRWQ7QUFDQTs7QUFHMUI7QUFDQSxNQUFNUSxXQUFXLEdBQUdDLDZEQUFlLENBQUU7RUFDakNDLEtBQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLE1BQU0sS0FBSztJQUMzQixRQUFPQSxNQUFNLENBQUNDLElBQUk7TUFDZCxLQUFLQywwREFBTztRQUNSQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVKLE1BQU0sQ0FBQztRQUM5Qix1Q0FBV0QsS0FBSyxHQUFLQyxNQUFNLENBQUNLLE9BQU87TUFDdkM7UUFDSSxPQUFPTixLQUFLO0lBQUM7RUFFekIsQ0FBQztFQUNETyxtREFBSTtFQUNKQyxtREFBSUE7QUFDUixDQUFDLENBQUM7QUFFYVgsMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJuQixNQUFNWSxZQUFZLEdBQUc7RUFDeEJDLFNBQVMsRUFBRSxDQUFDO0lBQ1JDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRTtNQUNGRCxFQUFFLEVBQUUsQ0FBQztNQUNMRSxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLE1BQU0sRUFBRSxDQUFDO01BQ0xDLEdBQUcsRUFBRTtJQUNULENBQUMsRUFBRTtNQUNDQSxHQUFHLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDQ0EsR0FBRyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBQ0ZDLFFBQVEsRUFBRSxDQUFDO01BQ1BMLElBQUksRUFBRTtRQUNGQyxRQUFRLEVBQUU7TUFDZCxDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNiLENBQUMsRUFBRTtNQUNDRixJQUFJLEVBQUU7UUFDRkMsUUFBUSxFQUFFO01BQ2QsQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDYixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0VBQ0ZJLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFNBQVMsRUFBRTtBQUNmLENBQUM7O0FBRUQ7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUNwQixNQUFNQyxPQUFPLEdBQUc7RUFDbkJuQixJQUFJLEVBQUVrQjtBQUNWLENBQUM7QUFFRCxNQUFNRSxTQUFTLEdBQUc7RUFDZFgsRUFBRSxFQUFFLENBQUM7RUFDTEcsT0FBTyxFQUFFLFVBQVU7RUFDbkJGLElBQUksRUFBRTtJQUNGRCxFQUFFLEVBQUUsQ0FBQztJQUNMRSxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RFLE1BQU0sRUFBRSxFQUFFO0VBQ1ZFLFFBQVEsRUFBRTtBQUNkLENBQUM7QUFFRCxNQUFNTSxPQUFPLEdBQUcsQ0FBQ3ZCLEtBQUssR0FBR1MsWUFBWSxFQUFFUixNQUFNLEtBQUs7RUFDOUMsUUFBT0EsTUFBTSxDQUFDQyxJQUFJO0lBQ2QsS0FBS2tCLFFBQVE7TUFDVCx1Q0FDT3BCLEtBQUs7UUFDUlUsU0FBUyxFQUFFLENBQUNZLFNBQVMsRUFBRSxHQUFHdEIsS0FBSyxDQUFDVSxTQUFTLENBQUM7UUFDMUNTLFNBQVMsRUFBRTtNQUFJO0lBRXZCO01BQ0ksT0FBT25CLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRWN1QixzRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RmLE1BQU1kLFlBQVksR0FBRztFQUN4QmUsVUFBVSxFQUFFLEtBQUs7RUFDakJDLEVBQUUsRUFBRSxJQUFJO0VBQ1JDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDZEMsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVNLE1BQU1DLFdBQVcsR0FBSUMsSUFBSSxJQUFLO0VBQ2pDLE9BQU87SUFDSDNCLElBQUksRUFBQyxRQUFRO0lBQ2IyQjtFQUNKLENBQUM7QUFDTCxDQUFDO0FBRU0sTUFBTUMsWUFBWSxHQUFHLE1BQU07RUFDOUIsT0FBTztJQUNINUIsSUFBSSxFQUFDO0VBQ1QsQ0FBQztBQUNMLENBQUM7QUFHRCxNQUFNcUIsT0FBTyxHQUFHLENBQUN2QixLQUFLLEdBQUdTLFlBQVksRUFBRVIsTUFBTSxLQUFLO0VBQzlDLFFBQU9BLE1BQU0sQ0FBQ0MsSUFBSTtJQUNkLEtBQUssUUFBUTtNQUNULHVDQUNXRixLQUFLO1FBQ1J3QixVQUFVLEVBQUUsSUFBSTtRQUNoQkMsRUFBRSxFQUFFeEIsTUFBTSxDQUFDNEI7TUFBSTtJQUUzQixLQUFLLFNBQVM7TUFDVix1Q0FDVzdCLEtBQUs7UUFDUndCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxFQUFFLEVBQUU7TUFBSTtJQUVwQjtNQUNJLE9BQU96QixLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUVjdUIsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDeEN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ1c7QUFDQztBQUV2QjtBQUV4QyxNQUFNUSxjQUFjLEdBQUcsTUFBTTtFQUN6QixNQUFNQyxXQUFXLEdBQUcsRUFBRTtFQUN0QixNQUFNQyxRQUFRLEdBQUcsUUFDWEMsU0FBd0MsR0FDeENDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQVcsQ0FBQyxDQUFDO0VBQzFELE1BQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2YsdURBQU8sRUFBRVUsUUFBUSxDQUFDO0VBQzVDLE9BQU9JLEtBQUs7QUFDaEIsQ0FBQztBQUVELE1BQU0xQyxPQUFPLEdBQUc0Qyx3RUFBYSxDQUFDUixjQUFjLEVBQUU7RUFDMUNTLEtBQUs7QUFDVCxDQUFDLENBQUM7QUFFYTdDLHNFQUFPLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ0QiwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyAoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnO2BrCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLmdvYWwuY29tL3YzL2Fzc2V0cy9ibHRjYzdhN2ZmZDJmYmY3MWY1L2JsdGUzMjJmNTQxOWNiNTU4NjEvNjM0NzJjYTViMDJjMmYxMWM2ZjVlYWM4L0dldHR5SW1hZ2VzLTE0MzI5NDY0ODcuanBnJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuZ29hbC5jb20vdjMvYXNzZXRzL2JsdGNjN2E3ZmZkMmZiZjcxZjUvYmx0ZTMyMmY1NDE5Y2I1NTg2MS82MzQ3MmNhNWIwMmMyZjExYzZmNWVhYzgvR2V0dHlJbWFnZXMtMTQzMjk0NjQ4Ny5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuZ29hbC5jb20vdjMvYXNzZXRzL2JsdGNjN2E3ZmZkMmZiZjcxZjUvYmx0ZTMyMmY1NDE5Y2I1NTg2MS82MzQ3MmNhNWIwMmMyZjExYzZmNWVhYzgvR2V0dHlJbWFnZXMtMTQzMjk0NjQ4Ny5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUficsXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59XHJcblxyXG4vLyDrs4DsiJjroZwg67m87KO864qU6rKMIOyii+ydjCA9PiDsl5Drn6wg67Cc7IOd7J2EIOunieydhCDsiJgg7J6I64ukLlxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsOyeheuLiOuLpCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOidMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOidMT0dfT1VUJyxcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=