/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndexPage */ "./src/components/IndexPage.js");
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blog */ "./src/components/Blog.js");
/* harmony import */ var _NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotFoundPage */ "./src/components/NotFoundPage.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _IndexPage__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/blog",
        component: _Blog__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        component: _NotFoundPage__WEBPACK_IMPORTED_MODULE_5__["default"]
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/Blog.js":
/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " Blog Header "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " This is a story "));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/IndexPage.js":
/*!*************************************!*\
  !*** ./src/components/IndexPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Index.css */ "./src/css/Index.css");
/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Index_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //import { Link } from 'react-router-dom';
//import Nasa from './Nasa';



var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-main-container container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-monitor row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-monitor-text col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "line one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "line two"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-keyboard row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-keyboard-text col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "key one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "key two"))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-content"
      }, this.props.children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/NotFoundPage.js":
/*!****************************************!*\
  !*** ./src/components/NotFoundPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFoundPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //import { Link } from 'react-router-dom';

var NotFoundPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotFoundPage, _React$Component);

  function NotFoundPage() {
    _classCallCheck(this, NotFoundPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotFoundPage).apply(this, arguments));
  }

  _createClass(NotFoundPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "not-found"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Page not found!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null));
    }
  }]);

  return NotFoundPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/css/Index.css":
/*!***************************!*\
  !*** ./src/css/Index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-computer-monitor {\n    /*\n    border: 20px solid grey;\n    border-radius: 5px;\n    height: 40vh;\n    margin-top: 5vh;\n    margin-left: 10vh;\n    margin-right: 10vh;\n    background-color: #282828;\n    */\n    background: url(" + escape(__webpack_require__(/*! ../images/computer.svg */ "./src/images/computer.svg")) + ");\n    background-repeat: no-repeat;\n    height: 70vh;\n}\n\n.index-computer-keyboard {\n    background: url(" + escape(__webpack_require__(/*! ../images/keyboard2.svg */ "./src/images/keyboard2.svg")) + ");\n    background-repeat: no-repeat;\n    height: 20vh;\n}", ""]);

// exports


/***/ }),

/***/ "./src/images/computer.svg":
/*!*********************************!*\
  !*** ./src/images/computer.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPCEtLQogICB3aWR0aD0iMTEzLjIxODUzbW0iCiAgIGhlaWdodD0iMTAzLjMzNDk0bW0iCi0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgogICB2aWV3Qm94PSIwIDAgMTEzLjIxODUzIDEwMy4zMzQ5NCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4yIDVjM2U4MGQsIDIwMTctMDgtMDYiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNvbXB1dGVyLnN2ZyIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGZpbHRlcgogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgc3R5bGU9ImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpzUkdCIgogICAgICAgaWQ9ImZpbHRlcjU3MjQiPgogICAgICA8ZmVCbGVuZAogICAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICAgIG1vZGU9ImNvbG9yLWJ1cm4iCiAgICAgICAgIGluMj0iQmFja2dyb3VuZEltYWdlIgogICAgICAgICBpZD0iZmVCbGVuZDU3MjYiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuNDA2MjI4OTYiCiAgICAgaW5rc2NhcGU6Y3g9IjM4Ny4zNjc5OCIKICAgICBpbmtzY2FwZTpjeT0iLTE2MS41NjkxOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxMiIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMTUyIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjY2OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTMiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjY3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6bWVhc3VyZS1zdGFydD0iODMuMjE0Myw4MjkuNjQzIgogICAgIGlua3NjYXBlOm1lYXN1cmUtZW5kPSIxMDAuNzE0LDc2MS4wNzEiCiAgICAgaW5rc2NhcGU6c25hcC1nbG9iYWw9InRydWUiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEwIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciA2IgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi41MDg4ODg4LC0yLjQxNjU0MzUpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7b3BhY2l0eToxO2ZpbGw6I2Q1ZDFhYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MjA0NzkwMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDEwNy4zNTUyLDc4LjEyNzk1MyBjIDAuMzIwMDQsLTMuNTc2ODcgNC4xMzg1LC00Ljg2MzgyIDUuODEwODgsLTcuMzkwMTMgMy4wMDc1LC0yLjIzMDU4IDEuOTA1MDcsLTQuODQwMDQgMi4xOTI2NywtOC4zODAzNiAtMC4wMjk0LC04LjI4NDkyIDAuMTQ1MTUsLTE2LjYwNzI0MyAtMC4zMjUxLC0yNC44MzkzNiAtMC45MDgxMywtNS4xNDUxMTkgLTAuNjg2NjUsLTEwLjQ2NzcgLTEuMTMsLTE1LjY3ODIxOSAwLjE3MTAzLC0zLjQ4NjY5OSAtMC41MDk3NywtNy4yNjg0NDYgMC43Mjc1NSwtMTAuNDkxODQ3IC0yLjY5Nzk0LDAuMzU4NDY3IC00LjkwNDg1LC0xLjMxMjIxMyAtNy40NTg5OCwtMS4yNzM2MTkiCiAgICAgICBpZD0icGF0aDUxNjEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNkNWQxYWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA4NS4xNTQ2MTcsOTYuMzY5MzgzIGMgMC41MjEwOSwzLjI0ODk0IDEuNTY5NTIsMi4xODM3NyAwLjU2NjksNS4yOTk5NDcgLTMuMjE1ODYsMC44NTEzOSAtNi41MTgzNiwyLjE5NjEgLTEwLjIxOTEyLDIuMzE1MjQgLTUuNDM3NTYsMC4zNjY0NyAtMTAuODY5NzQsMS4yNjY5NyAtMTYuMzY3MDIsMS4yODkyMyAtNC40OTI5OCwwLjUzNjI5IC04LjQ4NDI2LC0wLjk5NzE5IC0xMy4wNDM0NzcsLTAuNTc5MTIgLTQuOTc0OTIzLDAuMzI1MTEgLTEyLjg5MTQ5NCwtMS4yNDI2MiAtMTQuNjE1NTQyLC0xLjg0OTUzIC00LjEwMDU5LC0wLjI5MTU5IC02LjAyOTIwOSwtMy45NjkzNzcgLTQuMjc0NDcxLC02Ljk3NTgwNyIKICAgICAgIGlkPSJwYXRoNTIwMSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2MiIC8+CiAgPC9nPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXI5IgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciA1IgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi41MDg4ODg4LC0yLjQxNjU0MzUpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDojZDVkMWFjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcyMDUzMTY0cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMzIuMzg1OTg1LDkxLjU5MzMzMyBjIC0xLjI3Nzk3NiwxLjcyNzk3IC05LjAyOTY4MSw1LjA1NSAtMy41MTQxODksNS4yNzc3OCA0LjIwMDUzNCwxLjI3NjEyIDguNTEzNDU4LDIuNTUxNjcgMTMuMTcyNCwyLjc5NTQyIDYuNTgyMDYxLC0wLjE4NDA3IDEyLjk5NTg4MSwxLjEzMDMwNyAxOS41OTE1MDEsMC44NDI5OTcgNS4zMjkxOSwtMC4xMjQ0IDEwLjY2ODE5LC0wLjU4Njg0NyAxNS45NjQ4OSwtMS4wNDQyMDcgMy4xNTg4MSwtMS4wMzg0IDYuOTU5MzcsMS4xODA0NzcgNS40NjAxOSwtMy4yNzc5NiIKICAgICAgIGlkPSJwYXRoNTE5OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjYyIgLz4KICA8L2c+CiAgPGcKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjciCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDMiCiAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjUwODg4ODgsLTIuNDE2NTQzNSkiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNkNWQxYWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA4LjEzMjI3NDcsODQuMzA3ODUzIGMgMS4xMDE0MjYsMS44NDMzNCAtMS4xMzkxOTgsNi41NDQxMSAxLjU0NTMxOSw2LjYwNTk2IDEuMjcyMzY2MywwLjIxMjc0IDYuODc0NTk0MywwLjg2ODkyIDkuOTc0MjQ3MywwLjg2MTUxIDcuMjEyOTMzLDAuMDcyOCAxNC41NjU5MjQsLTAuMTcyOTYgMjEuNjUwNTkxLDAuMTgxOTQgNC41MTEwOTUsMS4xOTc5NSA5LjQ0MTk1NSwwLjMzNDAzIDE0LjA2ODEwNSwxLjU0OTg2IDUuNDUzMywtMC4wMjUgMTAuNjk3ODIsMS42NDQ4MyAxNi4xMzcyLDEuOTA3NDkgMy45MzgzNCwxLjc4MDM1IDguNjA4NTMsMC44NjMyNiAxMi45MjI5NSwxLjA5MTc3IDMuODAzNywwLjA3NjUgNy41OTk2MSwtMC43NTIzMSAxMS4yNjI1MiwtMS41NzYwNCAyLjk5NjQ2LC0yLjQyOTI4IDYuOTMzMzAzLC0zLjUxNTcgMTAuMzU2NDMzLC01LjA2ODMxIC0xLjQxMzg0LC0xLjU0MjgyIC0wLjA5MjYsLTguMzkxNiAtMi42OTY5MSwtNS45MTEyMSIKICAgICAgIGlkPSJwYXRoNTE4NyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2Q1ZDFhYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43Mzk0NTM3M3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDk5LjQ4MjcxNywzLjUxMDYwNDUgYyA0LjEyMTY5MywwLjUzNDg1MyA5LjMyOTg2MywtMC43MDQwOTEgNy45MDUxNjMsNS4xNzQ2OTYgLTAuMTIyNTUsNi4xMzgzNDE1IDAuNjU3NzUsMTIuMjUwMTk5NSAtMC4yMDI2MSwxOC4zNzM2MDE1IDAuMjc2ODIsNS4yMDQyNjYgLTAuMTgwODMsMTEuOTQ4MzEyIC0wLjE3OTQ3LDE1LjUxMTUwOSAtMC4yMDc3OCw3LjY0MTM2OCAwLjA3NzYsMTUuMjk2NzUyIDAuMjIxNCwyMi45NTI4MzIgMC40NDcxMSwzLjk2ODUyIDAuNjI1MDgsOC4wMjU3NiAwLjU2MDg2LDEyLjE2OTEzIDIuMzcyOTIsNS4xNDQ3NyAtNS4xMDQyMiw1LjE1MTA3IC02Ljc4NTMyLDkuMjc1MzEgLTAuMDA4LDAuNjczMjggLTEuMDM0MzYzLDAuNTM0NjIgLTAuOTc3NDcsMS40NTIzNSIKICAgICAgIGlkPSJwYXRoNTE1OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiAvPgogIDwvZz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTA4ODg4OCwtMi40MTY1NDM1KSI+CiAgICA8cmVjdAogICAgICAgaWQ9InJlY3QzNzE4IgogICAgICAgd2lkdGg9IjY4LjQxMzY4OSIKICAgICAgIGhlaWdodD0iNDQuODIyMzQ2IgogICAgICAgeD0iNDQuNzUyMzg4IgogICAgICAgeT0iMjUuOTE1NDc2IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MC4yNzk5MjI1MiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7b3BhY2l0eToxO2ZpbGw6I2Q1ZDFhYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MjA1MzE2NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDg2LjcwMzUwNywyLjc4MzQ2NDUgYyAtMC42ODE1NSwwLjAxNDQzIC0xLjM1OTMyLDAuMDgzMjIgLTIuMDMyMTIsMC4yMjkzODEgLTIuNDU2NjksMC4wNzAwMSAtNC41NTkxMiwwLjM2NjM2NiAtNy4zMTM2OCwwLjIzNTAxOCAtMi44NzU5MywwLjEyNTU0MiAtNi4yMTQzNiwtMC4yNzg1MDYgLTguNzUxOTMsMC4yNTc1MzkgLTcuMzQ4OTMsLTAuMDQ0NTMgLTE0LjY5MTg3LDAuMDI1MzMgLTIyLjAyNTQ2OSwwLjI0OTA5OCAtNi4wMDY4NzksMC43MTY5NzEgLTEyLjE5MjQxMywtMC40MTM5NzMgLTE4LjExNzQzLDEuMDk3Njg0IC00LjI3MzAyNywwLjQ4NTkyNCAtOC42NTg0NzIsLTAuMTUyMjMxIC0xMi45MzAxNjUsMC40OTgxNzkgLTIuOTc4NjA2LC0wLjEzNTk0NiAtNi43MjM4OTQzLC0wLjcwMzQ0MiAtOS4yMDIyNjUzLC0wLjU1ODY5MyAtMC4yNDM0NiwzLjU5NjU3OSAwLjUwOTM3NCw2LjkwNTE0NjUgMC4yODU2ODUsMTAuNTE1MjYyNSAtMC42NDk0NDYsNC42MDIzNjYgMC4xNjAwNDYsOS40MjU0MDQgLTEuMTE1OTgyLDE0LjAwMTExMiAtMC44MDY3NjQsNS40MDY2MSAtMC4zMjM1MjUsMTAuOTMxMjI4IC0wLjQ1NTk2LDE2LjQwMDU0MiAwLjA1OTM3LDUuMzIzNjEgMC4xODUzMTgsMTAuNzQ5NDc2IDEuMDMwMTM5LDE2LjA4OTUyNiAwLjA3MTYyLDYuMTIzMzEgLTAuMjAxMDU5LDEyLjMxNTcgMC4yNTc1NCwxOC4zNjc5MyAtMS4wODA3NjIsNC4yMTgxIDIuMDU3NjgsNC44MTkxNiA1LjY2MTUxOTMsNS40Mjc5IDUuNTg1MDcxLDEuMzI5NzcgMTEuNDMyODU3LDAuMjQ0OTkgMTcuMDcwNDExLDEuNTM2NzcgOS44ODMwMTUsMC43OTg2NSAxOS44MzI0OTcsMC40NDcwNSAyOS43NjQxNDcsMC41MjIxIDMuNDE5NDcsMC40MzA0MSA2Ljg5ODI3LDAuMTg0ODEgMTAuMzE1NDMsMC41MTUwNyA2LjE0MDY3LDAuNDc0MjggMTIuMzM1NzUsMC4xNzI5NiAxOC41MDU4NCwwLjI1NzU0IDIuNjI5MzcsMC41NDAyIDUuNzYxNjYsMC4xMjY5MyA4LjYwNTU3LDAuMjU3NTQgNC43OTU2MjMsMS4wOTc1NSAzLjgzMjM5MywtMy45NDE0NCAzLjc0NjIwMywtNy4xODEzOSAwLjA2MjYsLTguMDI3NTkgLTAuMjU5MTczLC0xNi4wODY3MiAwLjUxNTA3LC0yNC4wNDkxNSA3LjJlLTQsLTUuNTgwODY4IC0wLjA5MDgsLTExLjE3Njc0OCAwLjI1NjEyLC0xNi43MDMxMTIgMC41MDEyMiwtNS42MDUxOTYgMC4xNTM1MSwtMTEuMjc2OTQxIDAuMjU3NTQsLTE2LjkxNDE5OSAtMC45MTYzOCwtMy41OTg4MzMgLTEuNTEwMzgzLC03LjIxMTM0OCAtMS4yODYyNjMsLTExLjA2NDEwNCAwLjAzODEsLTMuMDk5MDYzNSAwLjAxNjEsLTYuMTkyMTY0NSAtMC4yNTc1NCwtOS4yNjU1ODM1IC00LjA2NDk1LDEuMDgyNDkxIC04LjE0NjE1LC0wLjYwNTY2MSAtMTIuMDk5ODUsLTAuNzE5MTIzIC0wLjIyODExLC0wLjAwNjUgLTAuNDU1MzYsLTAuMDA3NiAtMC42ODI1NCwtMC4wMDI3IHoiCiAgICAgICBpZD0icGF0aDUxNTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KICA8ZwogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMiIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMiIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTA4ODg4OCwtMi40MTY1NDM1KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzY2NjY2NjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MDI2ODMxNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDEwNy40MTUwOCwxNC4zMDY1MzEgYyAwLDAgMS43ODk0NiwwLjQ1ODMwMiAzLjY2MTI1LDAuNjMzMzAyIDEuMjc4ODIsMC4xMTk1NTIgMi4xNzIzOCwtMC4wMTUyNSAyLjgyNzk1LDAuOTU3NTMyIgogICAgICAgaWQ9InBhdGg1MTYzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMDcuMTcyMjUsMTguMDgwNzkyIGMgMi4yODU2NCwwLjM5NTIwNyA1LjE0MTY3LDEuMzEzNzk4IDYuOTE0MTEsMi4xODM2MjciCiAgICAgICBpZD0icGF0aDUxNjUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzA3Mjg0MjdweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMDcuMDgwMTUsMjMuNzIxNjA2IGMgMi40NjY0NCwtMC4yMjE4OTIgNC42MzA4NiwxLjM0OTYxNyA3LjE4ODgzLDEuMDkxODE0IgogICAgICAgaWQ9InBhdGg1MTY3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojNjY2NjY2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcwNzgzOTg1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTA3LjA2NTYzLDI4LjQ5NzcwMSBjIDIuODU2MzMsMS4zNzY4NiAzLjI3Njc4LDEuMzQwNjExIDcuMzk3MDYsMS40NDQyNTYiCiAgICAgICBpZD0icGF0aDUxNjkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcyMDUzMTY0cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTA2Ljk5MDI4LDMzLjM2NTU3OCBjIDIuMzU4ODEsLTAuMDg3MjUgNC44MDc4OCwwLjE5NzE5MiA3LjA5MTc4LC0wLjE5NzAyOSAwLjU3MDA4LC0wLjU1NTU2NiAwLjQ0Mjg4LC0xLjQ3MDkxNCAwLjM2Nzg1LC0yLjE2ODUyOCIKICAgICAgIGlkPSJwYXRoNTE3MSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MDAyOTYxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTA3LjA3OTg1LDM5LjAwNjM5MiBjIDMuNTY2MTUsLTAuMjc3MTIzIDMuMjUyMSwwLjI3NzAyMiA3LjczNDg3LC0xLjgxOTc0MyIKICAgICAgIGlkPSJwYXRoNTE3MyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNjk3NzIwODNweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMDYuODA2NzMsNDQuNDY1MjQgYyAzLjMwMjMyLDAuMjU1NTUxIDUuMjM1OTgsLTIuNTA2Njc3IDguMTkwMDcsLTMuMjc1MzI1IgogICAgICAgaWQ9InBhdGg1MTc1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcwMzQ1NzEycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTA2LjgwNzc5LDQ4LjkyNzc2OSBjIDIuODg4MTksLTEuNDU1NTY5IDkuNjg3OTUsLTMuMTk3NDUzIDguMTg5MDEsLTcuNzM3ODU0IgogICAgICAgaWQ9InBhdGg1MTc3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzY2NjY2NjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MjA1MzE2NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDEwNi44MDgzNCw1NS4wMTkwMjMgYyAzLjIyMDk3LC0xLjIyMjcgNS4yMTMyNiwtNC40MzQ4OTYgOC41NTE2OSwtNS42NDA5MjYiCiAgICAgICBpZD0icGF0aDUxNzkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMDYuODA4MzQsNjEuNTY5NjQzIGMgMy42NzQxOCwtMC40NDY5IDUuNDA3MTYsLTUuMTEwNTQgOC4yNDM4MywtNi4yMTQ2OCBsIDAuMjA2NDIsLTAuMTY2NSAwLjEwMTg1LC0wLjE2OTUyIgogICAgICAgaWQ9InBhdGg1MTgxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojNjY2NjY2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcyMDUzMTY0cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTA3LjcxODEzLDY2LjQ4MjYxMyBjIDMuMDMwNTksLTEuNzQwODggNC43NzYyNiwtNC40NTIzIDcuNDU5NTUsLTYuNTUwNjQiCiAgICAgICBpZD0icGF0aDUxODMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMTUuMTc4NzIsNTkuOTMxOTczIGMgMC44NjM2LDQuODc0NTIgLTMuNDY5MTIsNy4wNDU1NCAtNi4yMzIxMiwxMC4xNzQ4MiAtMC4wODAxLDAuNjEyMzMgLTEuMDY0NTYsMC40NjA5NyAtMS4wNDQ5LDEuMTA2OTQiCiAgICAgICBpZD0icGF0aDUxODUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmMTJjMDA7ZmlsbC1vcGFjaXR5OjA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA5NC43OTg4NTcsODguNjgxOTQzIGMgLTAuOTY5MTEsMS40MTk5NiAxLjQyOTYsNy42NTI0IDAuMzYzNSw2LjM2ODc1IgogICAgICAgaWQ9InBhdGg1MTg5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZjEyYzAwO2ZpbGwtb3BhY2l0eTowO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcyMDUzMTY0cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNzYuNzg0NjQ3LDg4LjQ5OTk4MyBjIDAuMDc5LDIuNjYzNzQgLTAuMTgwODMsNS4zOTI2OCAwLjE4MTkxLDguMDA2MzIiCiAgICAgICBpZD0icGF0aDUxOTEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmMTJjMDA7ZmlsbC1vcGFjaXR5OjA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA3OS42NTA1MjcsOTAuMTM3NjQzIGMgLTEuMTA2MDIsMy40NDQ3NSAyLjc4NDY2LDEuODk4MyA0LjY5NTQ3LDIuMjI5MiAzLjEyMTI0LDEuMjAwNTEgNS4yOTM5NSwtMi42NjIzNyAxLjE3MjEyLC0yLjI3NDUzIC0xLjk0OTg2LC0wLjAzNjggLTMuOTI0NDUsLTAuMTQyOTQgLTUuODY3NTksMC4wNDUzIHoiCiAgICAgICBpZD0icGF0aDUxOTMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmMTJjMDA7ZmlsbC1vcGFjaXR5OjA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNzIwNTMxNjRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA3OC45MjI2ODcsOTAuMDkyMTUzIGMgLTEuNjI5NSw1LjMyNjE0IDcuNDE0MjksMi43ODAzOSA5LjkwNTQzLDIuNjA0NzYgMi4wNTc4MywtNS42ODIwOCAtOC41MTgyMywtMy4zMzM3NyAtOS45OTYyMywtMi4yNDE1MSIKICAgICAgIGlkPSJwYXRoNTE5NSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2YxMmMwMDtmaWxsLW9wYWNpdHk6MDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MjA1MzE2NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDMyLjM4NTk4NSw5MS41OTMzMzMgYyAtMS4xMjUwOTIsNS4xODUzOCA1LjM4ODU2LDMuMzY3OTYgOC42NzMyODYsNC4zNjcxMyA5LjA1MjAzNiwwLjAyOTYgMTguMTI1Njc2LDAuNDQyOTggMjcuMTcxODA2LDAgMC43ODg3NCwtMC4wMzg3IDIuNDg3ODksLTAuNTMzMzIgMy4yNzY2NiwtMC41NDU4NSIKICAgICAgIGlkPSJwYXRoNTE5NyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgPC9nPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxMyIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgOSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTA4ODg4OCwtMi40MTY1NDM1KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7ZmlsdGVyOnVybCgjZmlsdGVyNTcyNCkiCiAgICAgICBkPSJtIDU3LjY1NjI2Niw1NC40MzA1OTIgYyAtMC4yMDU5NiwxLjk2ODYwNyAtMC4zNzM3Nyw0LjAwODcyNiAtMC4wNDg2LDUuOTY0NDA4IDAuMTMwODYsMC43NDA1NTQgMC4xMTYyMiwxLjY5NzIyOSAwLjExNTM2LDIuNTQ1NjM1IDAuMDI0LDMuMTExODg2IDAuMTg0OTIsNi4yMTM4NDEgMC4xMzM2LDkuMzMwMjY0IC0wLjA5MDcsMS4xMDczNDEgLTAuMTU1NzUsMi4yMzY2MzYgLTAuMjAwNCwzLjM0MTY0IDAuMjI2OTYsMC44MzAyOSAtMC43MDE0MSwyLjUwOTcgMC43MjA4NSwyLjMyOTcyIDEuMjc5ODcsMC4xNDU1MzUgMi43MzI3MiwwLjUzOTc4MiA0LjEzNDM5LDAuNDc1OTAxIDEuNDI3NjQsMC4xMzI2MzggMi44ODM3MiwwLjAyMTAyIDQuMzQ0MjQsMC4xMzM2MyAyLjM3NDUxLC0wLjIzMzA0MyA0Ljc1ODI5LDAuMTcwNzg0IDcuMTI2NiwwIDIuMjk0OTMsMC4wNDI0OCA0LjU3MTg2LC0wLjIzOTY0MiA2Ljg3MDU4LC0wLjE0MjM4MyAyLjMxMzIsMC4wMzY4NyA0LjY0NDc4LDAuMTM4NDIgNi45MzY5NiwwLjAwODggLTAuMDM0NywtMi4yNDE3NDggMC4yNjg3NywtNC40OTkxNzQgMC4wODc1LC02LjczNTQzNiAtMC4xOTY0NiwtMS4zOTQ3ODEgMC4yNjA5NCwtMi44MDgzNTkgMC4wNDYsLTQuMjIyNzYyIC0wLjAwNCwtMS4xMDIyNzggMC4wNjY4LC0yLjIwNjYwNyAtMC4yMDA0NCwtMy4yNzQwNjIgMC4yODM5NiwtMi45OTM2NjUgMC4wNjU4LC02LjAxMTU5MiAwLjE0MDIyLC05LjAxNDg4MiAwLjIzMjU0LC0xLjYyNDg1NiAtMS40NjM4NywtMS4wMDI3ODIgLTIuNjA3NzYsLTEuMjUxNDA2IC0xLjU1NTY0LC0wLjA0MTM0IC0zLjExMzQ0LDAuMTM2Nzk1IC00LjY2OTc4LC0wLjAyMjc5IC0yLjEwMzc2LDAuMDQwNTEgLTQuMzA0NzcsLTAuMDkzOSAtNi4zMzgxMiwwLjEwMzAxNyAtMi4xOTE4MSwwLjI3MDQ2IC00LjQ0MTI4LDAuMTI5ODkxIC02LjY2NSwwLjE2MjE5NyAtMS43Mzg1MiwtMC4yNDYxMTQgLTMuNDU2OCwwLjI3NjQ4NyAtNS4xNzY4NiwwLjQxMzIyMSAtMS40NTMyNiwwLjE1MzI4NCAtMi45MjA0NCwtMC4wMTQ0OSAtNC4zNzI3LC0wLjAxNDg3IHoiCiAgICAgICBpZD0icGF0aDUxNTUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMi43MjMyNjk1LDAsMCwyLjcyMzI2OTUsLTE0NS41NTMxNiwtMTM0LjE1MTUzKSIgLz4KICA8L2c+CiAgPGcKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEyIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciA4IgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi41MDg4ODg4LC0yLjQxNjU0MzUpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7b3BhY2l0eToxO2ZpbGw6IzE4MTgxODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC43MjA1MzE2NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDYwLjU4MTQxNywxMy45MDEwMzkgYyAtMi40MDI0MywwLjAxOTM0IC00Ljc5NDcyLDAuMjQ2MTI5IC03LjA5MjczLDAuNTQwNDAxIC0zLjUyNDc4LDAuMDg5MDggLTcuMDk1MTk4LC0wLjIwMjMxMiAtMTAuNTgyODExLDAuMTk3MDI4IC0zLjE4MDM5NywwLjM0MjgwOCAtNi44NDYyMjUsMC41OTcwNTUgLTEwLjI4ODY4LDAuNTMwNTUgLTMuMzQ5Mjk4LDAuMDUzMDIgLTYuMzI2MTc0LDAuNTM2MzkyIC05Ljc1NjczNCwwLjM2NDQ4OCAtMy4xNzQ0MzMsLTAuMTI5OTI3IC02LjQxNDkxNCwtMC4zOTUyNjEgLTkuNTc5NDExLDAgaCAtMC4wMDE0IGMgLTAuNDA4MDg4LDcuNzU4NzM2IC0wLjA5NTU5LDE1LjUzOTczNSAwLDIzLjI5MDYyNiAtMC41NjE2NzcsMy40MzI2MTggMC4yNzQwODEsNy4yMjYwNCAtMC40ODk3MzksMTAuNDg5OTI0IC0wLjgwMTg2Nyw2LjM2NDA1NyAtMC4yNTk4ODIsMTMuMDQ2NTg3IC0wLjQxOTM3LDE5LjU1NTY4NyAwLjA0NzYzLDIuMjgwNiAtMC4xODQ2NjUsNC43NTI3NyAwLjQ4NTUxNSw2Ljc5NzIgMy44Mjc1NSwwLjYwNjUxIDcuODUwOTM1LC0wLjE1MTI4IDExLjUyMTQ2NywxLjAwNjIxIDQuNDcxNDE4LDEuNDI5ODcgOS4wMjE3OTksLTAuMzcwODUgMTMuNjQ5MjksMC4zNjMwOCA1LjE5MjgxNSwwLjUyNzc0IDEwLjI2MjkxMywwLjExNjkxIDE1LjQ2NjEwMywwLjE4MTUzIDUuMTMyMTksLTAuNDIxODQgMTAuNDM4NTYsLTEuMDMyNDEgMTUuNDY2MSwwLjE4Mjk1IDUuODI1MzIsMC41ODg0NyAxMS42MzgwNiwwLjYwNTQ2IDE3LjQ2NTg1LDEuMjczNiAzLjEwMTQsMC4xNzE4NCA2LjYyNjQyLDAuNTE0NTYgNS4wOTQzOSwtNC4wMzYxIC0wLjMwNzU0LC0zLjM4MzM2IDAuNTgxNzMsLTQuNDYxNzkgMC4zNjQ0OSwtNy42NzM5NCAtMC4zMDM3MywtNC45MTM2NiAtMC4wMjgsLTkuODgzOTQgLTAuMzQwNTcsLTE0Ljc4Nzc5NCAtMC41NjE0NSwtNC4yOTM1MjUgMC4wNzA5LC04Ljc4Nzc2NCAtMC4wMjI2LC0xMy4xNzA4MTQgLTAuMzQzNTEsLTUuMDE4MTU4IDAuNzk0NiwtOS44MzY1NDIgMC4xOTk4MywtMTQuNzY2Njc4IC0wLjI3MDQyLC0yLjc2MTQzMSAwLjQ2ODY3LC01LjkwNjU1MSAtMC40OTUzNiwtOC40MTQxNzYgLTMuMjk1OTIsMC4wNTU1NSAtNi41MDg1MywtMC45OTgwNTEgLTkuOTA0NDksLTAuNjU1Nzk4IC00LjU2NDgsMC4wNDA4NSAtOS4wMTUxNiwtMC44NzQwODUgLTEzLjU4NDU2LC0wLjU2NTczMiAtMi4zMzkzMiwtMC41MzM0ODkgLTQuNzUyMjIsLTAuNzIxNTkzIC03LjE1NDY2LC0wLjcwMjIzOSB6IgogICAgICAgaWQ9InBhdGg1MTUzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/images/keyboard2.svg":
/*!**********************************!*\
  !*** ./src/images/keyboard2.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB2aWV3Qm94PSIwIDAgNDMuOTQ3NDIyIDE1LjA1NjIxOSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNTk2NCIKICAgc29kaXBvZGk6ZG9jbmFtZT0ia2V5Ym9hcmQyLnN2ZyIKICAgaGVpZ2h0PSIxMDAlIgogICB3aWR0aD0iNDMuOTQ3NDIybW0iCiAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMiA1YzNlODBkLCAyMDE3LTA4LTA2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTk1OCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMi44IgogICAgIGlua3NjYXBlOmN4PSI4MS4yMTA2NzQiCiAgICAgaW5rc2NhcGU6Y3k9IjM1LjU5NTMwOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNTk2NCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMTI4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjY2NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iODMiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjM2IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTk2MSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU5LjUyMzMyMSwtMTM1LjYzNTUxKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2Q1ZDFhYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDU5Ljc1NjM2OSwxNDQuNTE5MyBjIDAuNTgxNzA2LC0xLjAyMDI4IDEuMTEyMjg0LC0yLjI1NzE4IDEuOTAyMzY3LC0zLjAxOTE1IDAuNTY4ODA5LC0wLjg0MDcxIDEuMjYwNzM5LC0xLjU3NDIzIDEuODkzNzI5LC0yLjQwNzM4IDAuODI0Mjk5LC0wLjcwNzg4IDEuMjY4NzAzLC0xLjU1NzUzIDIuMDQyNDcsLTIuMzY5NDMgMC43ODg2MzUsLTEuMTgzNjggMi4xNDIwOTQsLTAuOTU3MjkgMy40Mjc1MjUsLTAuODk5NTUgMS4yNDc1MjEsMC4xODMxOSAyLjUzNDc3NiwwLjEwNTk5IDMuNzYyNTIyLDAuMzkyODMgMS4zMjM2OTQsLTAuMDg5NCAyLjYyMTY3LDAuNDI4OTQgMy45NzUzNjksMC4zNjM3NSAxLjMzOTg3MSwwLjEzODcxIDIuNjkzMjExLDAuNTIwNTIgMy45ODczNjEsMC40NjI3OCAxLjg2MzY1MiwwLjM0NTc4IDMuODc1MjA3LDAuMjI2MzggNS43OTcyNzQsMC40NTEzOCAxLjQ3MzAzOSwwLjQxNzE4IDMuMDc3NjQyLDAuMDczMiA0LjU3OTI2MywwLjUzMTA3IDEuMzAxMzg2LC0wLjA3NzQgMi41NDI4MiwwLjE0ODE5IDMuODE5MzYsMC4yNzM3MSAyLjAxNDE0NSwtMC4zMDQ2NSA0LjAwODQ0MywtMC4wMTMyIDYuMDIzMDAxLC0wLjIxODY5IDAuODQ4MTYsMC4zNzk4NCAyLjY1NTM4LC0wLjIwNzk3IDIuMTkyNzcsMS4zMzE1NCAwLjAyMDEsMS4wNTI3NyAwLjU5ODE3LDIuNDE3MzQgLTAuNDM1MTIsMy4xNDQyMyAtMS4wMjYyMiwwLjkyMDczIC0xLjY1ODQzLDIuMDcyMDggLTIuMTEyNjUsMy4zNDg5NCAtMC42Mjg4NzUsMC45NDU2MyAtMS4yMDk1NDIsMi4wNjAzMSAtMS43NzAwNDksMy4wNTA0MyAtMC42NjgyMiwxLjExODkzIC0wLjc0ODM3NiwxLjI5OTMzIC0xLjk4NzgwNSwxLjUwNjc3IC0xLjI2MDI3NCwwLjA5NzMgLTIuNTM5MzIzLDAuMTY3ODMgLTMuNzc4NzE2LC0wLjAyNjMgLTEuMDA3NDM3LC0wLjE4MDk1IC0xLjY5MjUxNSwtMC4wMzQ1IC0yLjY3MTUzOSwtMC4zNjE0IC0xLjUyNDM0OSwtMC4xNzM4NSAtMi45OTk3MjksLTAuNTY3ODQgLTQuNTMyMjE0LC0wLjY3ODIxIC0xLjA2MjAyNywtMC4xMDA3IC0yLjExMjg5OSwtMC4xNzg4NyAtMy4xNzcxOSwtMC4wNzgzIC0xLjUwNzE3MiwtMC4xMjAxOSAtMi45MDgwODgsLTAuNjQzNjIgLTQuNDI3MjYyLC0wLjgyODY1IC0xLjIzNDAxNCwtMC4yMjUzMSAtMi4zODU0NjcsLTAuMjg2MDIgLTMuNTE3MiwtMC42MjcyMyAtMS4wNDI3NjIsLTAuMzIwOCAtMi4xMzg2ODIsLTAuNDYxODEgLTMuMjEzNTIyLC0wLjUzODM0IC0xLjE5MjUzMywtMC4zODY3NyAtMi4zNDU3MzUsLTAuOTIxNjkgLTMuNjM3MjE0LC0wLjkwMDY4IC0wLjYzNzU3MiwtMC4wMzcyIC0xLjQ1MTgzLC0wLjAxMTMgLTIuMTc2MTAyLDAuMDk1OSAtMS4xNDk0NDQsMC4xMjg4IC0yLjI5ODk3MSwtMC4zMDg4MyAtMy4zOTUxMDEsLTAuNTYxMDUgLTAuOTIwMDUsLTAuMTA5NDMgLTIuOTQzNTk2LDAuMTM2OTYgLTIuNjQyODM5LC0xLjQwMjY0IGwgMC4wNzE1MSwtMC4wMzYzIHoiCiAgICAgICBpZD0icGF0aDYwMjgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNkNWQxYWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxMDMuMTc5NTksMTM4LjMxNDMzIGMgLTAuMjU3MDUsMS4xNTM3MiAtMS4wOTAwNywxLjgyMTI0IC0xLjUzMTUsMi44NDYzIC0wLjQ4ODksMC45MzY0IC0wLjk5MjUsMi4wNjk0OSAtMS41MDQ4NiwzLjAxNjc3IC0wLjM5ODU1NSwxLjEwMTc1IC0xLjA5NDQ2NSwxLjQ4NTExIC0xLjYwMjUyNCwyLjQ4MTQgMC4wMTk1NCwwLjg1NzM3IC0xLjIwMDUzOSwxLjkyODczIC0wLjk1NTI1MSwyLjQ5Nzc3IDAuMjcwNjEzLDAuMjcyMjIgMC41NTE0MDIsMC40NjQ4MiAwLjU3MDU1OSwwLjkwMDQ5IgogICAgICAgaWQ9InBhdGg2MDMwIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZDVkMWFjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNTkuNzU2MzY5LDE0NC41MTkzIGMgMS4zOTcyMDMsMC4yNDk1NSAyLjkwMjg1NSwwLjA5MTEgNC4yOTA3MDYsMC41NjA0MiAxLjM2NzkwOSwwLjAxNzIgMi43OTUyMTksMC41MjMxMSA0LjAxMjI3NCwwLjcyNTE5IDAuOTA5NTE0LDAuMjIzMyAxLjkxNDkyLDAuNDYxNDIgMi44NDczMTgsMC41NDQ2OSAxLjE5MTM3MSwwLjE3NTIzIDIuNDEzNTMyLDAuNTAyNTQgMy42MDg3MDUsMC41ODg2OCAxLjcwMjAxNiwwLjA5NCAzLjM2NDM3LDAuNjE4MSA1LjEwNzQwNSwwLjUyNjkxIDEuMzEwMzM0LDAuMjQ1ODQgMi42NzAzNzcsMC40NjQgMy45NTczNjQsMC42ODQyOSAxLjAxMTA5OSwtMC4wMjY3IDEuOTYwOTI4LDAuNDkxODQgMi45Njg1MDcsMC42MDE3MiAxLjIyOTQ1NCwwLjEzNDA5IDIuNDY3MDY1LC0wLjA4NzIgMy42ODk3MzQsMC4xMTUwNCAxLjMzNTMzNCwwLjIyMTcxIDIuNjYyMDg1LC0wLjEwNTM3IDMuOTg2NzE3LDAuMTU2MjQgMC45NjMzMzcsMC40Mjg4NCAyLjY0Mjg3NSwtMC4zMjI4OSAzLjQ4MTIzLDAuNTMxNzcgMC4xMzk0OTQsMC4xNzU1NiAwLjI3NzUzOSwwLjM1NDkgMC40NDkwMjMsMC41MDEzMSIKICAgICAgIGlkPSJwYXRoNjAzMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");






 // initialize the server and configure support for ejs templates

var app = new express__WEBPACK_IMPORTED_MODULE_2___default.a();
var server = new http__WEBPACK_IMPORTED_MODULE_1__["Server"](app);
app.set('view engine', 'ejs');
app.set('views', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'views')); // define the folder that will be used for static assets

app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'static'))); // universal routing and rendering

app.get('*', function (req, res) {
  var markup = '';
  var status = 200;
  var context = {};
  markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))); // context.url will contain the URL to redirect to if a <Redirect> was used

  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }

  return res.status(status).render('index', {
    markup: markup
  });
}); //console.log(app.get('env'));
//console.log(process.env.NODE_ENV);
//const env = process.env.NODE_ENV || 'production';
// start the server

var port = process.env.PORT || 3002;
server.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  return console.info("Server running");
});
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZGV4UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvSW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcHV0ZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMva2V5Ym9hcmQyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZXNjYXBlIiwidXJsIiwidGVzdCIsInNsaWNlIiwicmVwbGFjZSIsIkFwcCIsIkluZGV4UGFnZSIsIkJsb2ciLCJOb3RGb3VuZFBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJhcHAiLCJFeHByZXNzIiwic2VydmVyIiwiU2VydmVyIiwic2V0IiwicGF0aCIsIl9fZGlybmFtZSIsInVzZSIsInN0YXRpYyIsImdldCIsInJlcSIsInJlcyIsIm1hcmt1cCIsInN0YXR1cyIsImNvbnRleHQiLCJyZW5kZXJUb1N0cmluZyIsInJlZGlyZWN0IiwiaXM0MDQiLCJyZW5kZXIiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdI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QW5DLENBQVA7QUFDRCxDQXhCRCxFLENBMEJBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1PLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7QUFDQXBCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY0osSUFBZCxFQUFvQixVQUFDSyxHQUFELEVBQVM7QUFDM0IsTUFBSUEsR0FBSixFQUFTO0FBQ1AsV0FBT0MsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQsQ0FBUDtBQUNEOztBQUNELFNBQU9DLE9BQU8sQ0FBQ0UsSUFBUixDQUNMLGdCQURLLENBQVA7QUFFRCxDQU5ELEU7Ozs7Ozs7Ozs7OztBQ25EQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLmpzXCIpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi9JbmRleFBhZ2UnO1xuaW1wb3J0IEJsb2cgZnJvbSAnLi9CbG9nJztcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9Ob3RGb3VuZFBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtJbmRleFBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYmxvZ1wiIGNvbXBvbmVudD17QmxvZ30gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICBcdDxkaXY+XG4gICAgXHRcdDxoMT4gQmxvZyBIZWFkZXIgPC9oMT5cbiAgICBcdFx0PGRpdj4gVGhpcyBpcyBhIHN0b3J5IDwvZGl2PlxuICAgIFx0PC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vaW1wb3J0IE5hc2EgZnJvbSAnLi9OYXNhJztcbmltcG9ydCAnLi4vY3NzL0luZGV4LmNzcyc7XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuICAgIFx0cmV0dXJuIChcbiAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmRleC1tYWluLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbXB1dGVyLW1vbml0b3Igcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbXB1dGVyLW1vbml0b3ItdGV4dCBjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5saW5lIG9uZTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PmxpbmUgdHdvPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbXB1dGVyLWtleWJvYXJkIHJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmRleC1jb21wdXRlci1rZXlib2FyZC10ZXh0IGNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PmtleSBvbmU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5rZXkgdHdvPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3QtZm91bmRcIj5cbiAgICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICAgIDxoMj5QYWdlIG5vdCBmb3VuZCE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleC1jb21wdXRlci1tb25pdG9yIHtcXG4gICAgLypcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHZoO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICAgICovXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2NvbXB1dGVyLnN2Z1wiKSkgKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogNzB2aDtcXG59XFxuXFxuLmluZGV4LWNvbXB1dGVyLWtleWJvYXJkIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMva2V5Ym9hcmQyLnN2Z1wiKSkgKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogMjB2aDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p3aExTMGdRM0psWVhSbFpDQjNhWFJvSUVsdWEzTmpZWEJsSUNob2RIUndPaTh2ZDNkM0xtbHVhM05qWVhCbExtOXlaeThwSUMwdFBnb0tQQ0V0TFFvZ0lDQjNhV1IwYUQwaU1URXpMakl4T0RVemJXMGlDaUFnSUdobGFXZG9kRDBpTVRBekxqTXpORGswYlcwaUNpMHRQZ29LUEhOMlp3b2dJQ0I0Yld4dWN6cGtZejBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJWc1pXMWxiblJ6THpFdU1TOGlDaUFnSUhodGJHNXpPbU5qUFNKb2RIUndPaTh2WTNKbFlYUnBkbVZqYjIxdGIyNXpMbTl5Wnk5dWN5TWlDaUFnSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJS0lDQWdlRzFzYm5NNmMzWm5QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lDQjRiV3h1Y3pwemIyUnBjRzlrYVQwaWFIUjBjRG92TDNOdlpHbHdiMlJwTG5OdmRYSmpaV1p2Y21kbExtNWxkQzlFVkVRdmMyOWthWEJ2WkdrdE1DNWtkR1FpQ2lBZ0lIaHRiRzV6T21sdWEzTmpZWEJsUFNKb2RIUndPaTh2ZDNkM0xtbHVhM05qWVhCbExtOXlaeTl1WVcxbGMzQmhZMlZ6TDJsdWEzTmpZWEJsSWdvZ0lDQndjbVZ6WlhKMlpVRnpjR1ZqZEZKaGRHbHZQU0p1YjI1bElnb2dJQ0IyYVdWM1FtOTRQU0l3SURBZ01URXpMakl4T0RVeklERXdNeTR6TXpRNU5DSUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0JwWkQwaWMzWm5PQ0lLSUNBZ2FXNXJjMk5oY0dVNmRtVnljMmx2YmowaU1DNDVNaTR5SURWak0yVTRNR1FzSURJd01UY3RNRGd0TURZaUNpQWdJSE52Wkdsd2IyUnBPbVJ2WTI1aGJXVTlJbU52YlhCMWRHVnlMbk4yWnlJS0lDQWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUkrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6SWlQZ29nSUNBZ1BHWnBiSFJsY2dvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5c2JHVmpkRDBpWVd4M1lYbHpJZ29nSUNBZ0lDQWdjM1I1YkdVOUltTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNHRabWxzZEdWeWN6cHpVa2RDSWdvZ0lDQWdJQ0FnYVdROUltWnBiSFJsY2pVM01qUWlQZ29nSUNBZ0lDQThabVZDYkdWdVpBb2dJQ0FnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMnhzWldOMFBTSmhiSGRoZVhNaUNpQWdJQ0FnSUNBZ0lHMXZaR1U5SW1OdmJHOXlMV0oxY200aUNpQWdJQ0FnSUNBZ0lHbHVNajBpUW1GamEyZHliM1Z1WkVsdFlXZGxJZ29nSUNBZ0lDQWdJQ0JwWkQwaVptVkNiR1Z1WkRVM01qWWlJQzgrQ2lBZ0lDQThMMlpwYkhSbGNqNEtJQ0E4TDJSbFpuTStDaUFnUEhOdlpHbHdiMlJwT201aGJXVmtkbWxsZHdvZ0lDQWdJR2xrUFNKaVlYTmxJZ29nSUNBZ0lIQmhaMlZqYjJ4dmNqMGlJMlptWm1abVppSUtJQ0FnSUNCaWIzSmtaWEpqYjJ4dmNqMGlJelkyTmpZMk5pSUtJQ0FnSUNCaWIzSmtaWEp2Y0dGamFYUjVQU0l4TGpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2Y0dGblpXOXdZV05wZEhrOUlqQXVNQ0lLSUNBZ0lDQnBibXR6WTJGd1pUcHdZV2RsYzJoaFpHOTNQU0l5SWdvZ0lDQWdJR2x1YTNOallYQmxPbnB2YjIwOUlqQXVOREEyTWpJNE9UWWlDaUFnSUNBZ2FXNXJjMk5oY0dVNlkzZzlJak00Tnk0ek5qYzVPQ0lLSUNBZ0lDQnBibXR6WTJGd1pUcGplVDBpTFRFMk1TNDFOamt4T1NJS0lDQWdJQ0JwYm10elkyRndaVHBrYjJOMWJXVnVkQzExYm1sMGN6MGliVzBpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZZM1Z5Y21WdWRDMXNZWGxsY2owaWJHRjVaWEl4TWlJS0lDQWdJQ0J6YUc5M1ozSnBaRDBpWm1Gc2MyVWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFhkcFpIUm9QU0l4TVRVeUlnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTFvWldsbmFIUTlJalkyT1NJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RlRDBpTVRNaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMWGs5SWpZM0lnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTF0WVhocGJXbDZaV1E5SWpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2YldWaGMzVnlaUzF6ZEdGeWREMGlPRE11TWpFME15dzRNamt1TmpReklnb2dJQ0FnSUdsdWEzTmpZWEJsT20xbFlYTjFjbVV0Wlc1a1BTSXhNREF1TnpFMExEYzJNUzR3TnpFaUNpQWdJQ0FnYVc1cmMyTmhjR1U2YzI1aGNDMW5iRzlpWVd3OUluUnlkV1VpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTEwYjNBOUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMXNaV1owUFNJd0lnb2dJQ0FnSUdacGRDMXRZWEpuYVc0dGNtbG5hSFE5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxaWIzUjBiMjA5SWpBaUlDOCtDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoTlNJK0NpQWdJQ0E4Y21SbU9sSkVSajRLSUNBZ0lDQWdQR05qT2xkdmNtc0tJQ0FnSUNBZ0lDQWdjbVJtT21GaWIzVjBQU0lpUGdvZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2YzNabkszaHRiRHd2WkdNNlptOXliV0YwUGdvZ0lDQWdJQ0FnSUR4a1l6cDBlWEJsQ2lBZ0lDQWdJQ0FnSUNBZ2NtUm1PbkpsYzI5MWNtTmxQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012WkdOdGFYUjVjR1V2VTNScGJHeEpiV0ZuWlNJZ0x6NEtJQ0FnSUNBZ0lDQThaR002ZEdsMGJHVStQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHY0tJQ0FnSUNCcGJtdHpZMkZ3WlRwbmNtOTFjRzF2WkdVOUlteGhlV1Z5SWdvZ0lDQWdJR2xrUFNKc1lYbGxjakV3SWdvZ0lDQWdJR2x1YTNOallYQmxPbXhoWW1Wc1BTSk1ZWGxsY2lBMklnb2dJQ0FnSUhOMGVXeGxQU0prYVhOd2JHRjVPbWx1YkdsdVpTSUtJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNaTQxTURnNE9EZzRMQzB5TGpReE5qVTBNelVwSWo0S0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNCemRIbHNaVDBpWkdsemNHeGhlVHBwYm14cGJtVTdiM0JoWTJsMGVUb3hPMlpwYkd3NkkyUTFaREZoWXp0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01qQTBOemt3TVhCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElERXdOeTR6TlRVeUxEYzRMakV5TnprMU15QmpJREF1TXpJd01EUXNMVE11TlRjMk9EY2dOQzR4TXpnMUxDMDBMamcyTXpneUlEVXVPREV3T0Rnc0xUY3VNemt3TVRNZ015NHdNRGMxTEMweUxqSXpNRFU0SURFdU9UQTFNRGNzTFRRdU9EUXdNRFFnTWk0eE9USTJOeXd0T0M0ek9EQXpOaUF0TUM0d01qazBMQzA0TGpJNE5Ea3lJREF1TVRRMU1UVXNMVEUyTGpZd056STBNeUF0TUM0ek1qVXhMQzB5TkM0NE16a3pOaUF0TUM0NU1EZ3hNeXd0TlM0eE5EVXhNVGtnTFRBdU5qZzJOalVzTFRFd0xqUTJOemNnTFRFdU1UTXNMVEUxTGpZM09ESXhPU0F3TGpFM01UQXpMQzB6TGpRNE5qWTVPU0F0TUM0MU1EazNOeXd0Tnk0eU5qZzBORFlnTUM0M01qYzFOU3d0TVRBdU5Ea3hPRFEzSUMweUxqWTVOemswTERBdU16VTRORFkzSUMwMExqa3dORGcxTEMweExqTXhNakl4TXlBdE55NDBOVGc1T0N3dE1TNHlOek0yTVRraUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE5qRWlDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTmtOV1F4WVdNN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQTROUzR4TlRRMk1UY3NPVFl1TXpZNU16Z3pJR01nTUM0MU1qRXdPU3d6TGpJME9EazBJREV1TlRZNU5USXNNaTR4T0RNM055QXdMalUyTmprc05TNHlPVGs1TkRjZ0xUTXVNakUxT0RZc01DNDROVEV6T1NBdE5pNDFNVGd6Tml3eUxqRTVOakVnTFRFd0xqSXhPVEV5TERJdU16RTFNalFnTFRVdU5ETTNOVFlzTUM0ek5qWTBOeUF0TVRBdU9EWTVOelFzTVM0eU5qWTVOeUF0TVRZdU16WTNNRElzTVM0eU9Ea3lNeUF0TkM0ME9USTVPQ3d3TGpVek5qSTVJQzA0TGpRNE5ESTJMQzB3TGprNU56RTVJQzB4TXk0d05ETTBOemNzTFRBdU5UYzVNVElnTFRRdU9UYzBPVEl6TERBdU16STFNVEVnTFRFeUxqZzVNVFE1TkN3dE1TNHlOREkyTWlBdE1UUXVOakUxTlRReUxDMHhMamcwT1RVeklDMDBMakV3TURVNUxDMHdMakk1TVRVNUlDMDJMakF5T1RJd09Td3RNeTQ1Tmprek56Y2dMVFF1TWpjME5EY3hMQzAyTGprM05UZ3dOeUlLSUNBZ0lDQWdJR2xrUFNKd1lYUm9OVEl3TVNJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlDaUFnSUNBZ0lDQnpiMlJwY0c5a2FUcHViMlJsZEhsd1pYTTlJbU5qWTJOalkyTWlJQzgrQ2lBZ1BDOW5QZ29nSUR4bkNpQWdJQ0FnYVc1cmMyTmhjR1U2WjNKdmRYQnRiMlJsUFNKc1lYbGxjaUlLSUNBZ0lDQnBaRDBpYkdGNVpYSTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9teGhZbVZzUFNKTVlYbGxjaUExSWdvZ0lDQWdJSE4wZVd4bFBTSmthWE53YkdGNU9tbHViR2x1WlNJS0lDQWdJQ0IwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNndE1pNDFNRGc0T0RnNExDMHlMalF4TmpVME16VXBJajRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlaR2x6Y0d4aGVUcHBibXhwYm1VN1ptbHNiRG9qWkRWa01XRmpPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMamN5TURVek1UWTBjSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTXpJdU16ZzFPVGcxTERreExqVTVNek16TXlCaklDMHhMakkzTnprM05pd3hMamN5TnprM0lDMDVMakF5T1RZNE1TdzFMakExTlNBdE15NDFNVFF4T0Rrc05TNHlOemMzT0NBMExqSXdNRFV6TkN3eExqSTNOakV5SURndU5URXpORFU0TERJdU5UVXhOamNnTVRNdU1UY3lOQ3d5TGpjNU5UUXlJRFl1TlRneU1EWXhMQzB3TGpFNE5EQTNJREV5TGprNU5UZzRNU3d4TGpFek1ETXdOeUF4T1M0MU9URTFNREVzTUM0NE5ESTVPVGNnTlM0ek1qa3hPU3d0TUM0eE1qUTBJREV3TGpZMk9ERTVMQzB3TGpVNE5qZzBOeUF4TlM0NU5qUTRPU3d0TVM0d05EUXlNRGNnTXk0eE5UZzRNU3d0TVM0d016ZzBJRFl1T1RVNU16Y3NNUzR4T0RBME56Y2dOUzQwTmpBeE9Td3RNeTR5TnpjNU5pSUtJQ0FnSUNBZ0lHbGtQU0p3WVhSb05URTVPU0lLSUNBZ0lDQWdJR2x1YTNOallYQmxPbU52Ym01bFkzUnZjaTFqZFhKMllYUjFjbVU5SWpBaUNpQWdJQ0FnSUNCemIyUnBjRzlrYVRwdWIyUmxkSGx3WlhNOUltTmpZMk5qWXlJZ0x6NEtJQ0E4TDJjK0NpQWdQR2NLSUNBZ0lDQnBibXR6WTJGd1pUcG5jbTkxY0cxdlpHVTlJbXhoZVdWeUlnb2dJQ0FnSUdsa1BTSnNZWGxsY2pjaUNpQWdJQ0FnYVc1cmMyTmhjR1U2YkdGaVpXdzlJa3hoZVdWeUlETWlDaUFnSUNBZ2MzUjViR1U5SW1ScGMzQnNZWGs2YVc1c2FXNWxJZ29nSUNBZ0lIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzB5TGpVd09EZzRPRGdzTFRJdU5ERTJOVFF6TlNraVBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTmtOV1F4WVdNN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQTRMakV6TWpJM05EY3NPRFF1TXpBM09EVXpJR01nTVM0eE1ERTBNallzTVM0NE5ETXpOQ0F0TVM0eE16a3hPVGdzTmk0MU5EUXhNU0F4TGpVME5UTXhPU3cyTGpZd05UazJJREV1TWpjeU16WTJNeXd3TGpJeE1qYzBJRFl1T0RjME5UazBNeXd3TGpnMk9Ea3lJRGt1T1RjME1qUTNNeXd3TGpnMk1UVXhJRGN1TWpFeU9UTXpMREF1TURjeU9DQXhOQzQxTmpVNU1qUXNMVEF1TVRjeU9UWWdNakV1TmpVd05Ua3hMREF1TVRneE9UUWdOQzQxTVRFd09UVXNNUzR4T1RjNU5TQTVMalEwTVRrMU5Td3dMak16TkRBeklERTBMakEyT0RFd05Td3hMalUwT1RnMklEVXVORFV6TXl3dE1DNHdNalVnTVRBdU5qazNPRElzTVM0Mk5EUTRNeUF4Tmk0eE16Y3lMREV1T1RBM05Ea2dNeTQ1TXpnek5Dd3hMamM0TURNMUlEZ3VOakE0TlRNc01DNDROak15TmlBeE1pNDVNakk1TlN3eExqQTVNVGMzSURNdU9EQXpOeXd3TGpBM05qVWdOeTQxT1RrMk1Td3RNQzQzTlRJek1TQXhNUzR5TmpJMU1pd3RNUzQxTnpZd05DQXlMams1TmpRMkxDMHlMalF5T1RJNElEWXVPVE16TXpBekxDMHpMalV4TlRjZ01UQXVNelUyTkRNekxDMDFMakEyT0RNeElDMHhMalF4TXpnMExDMHhMalUwTWpneUlDMHdMakE1TWpZc0xUZ3VNemt4TmlBdE1pNDJPVFk1TVN3dE5TNDVNVEV5TVNJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFNE55SUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpSUM4K0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2MzUjViR1U5SW1ScGMzQnNZWGs2YVc1c2FXNWxPMlpwYkd3NkkyUTFaREZoWXp0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M016azBOVE0zTTNCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElEazVMalE0TWpjeE55d3pMalV4TURZd05EVWdZeUEwTGpFeU1UWTVNeXd3TGpVek5EZzFNeUE1TGpNeU9UZzJNeXd0TUM0M01EUXdPVEVnTnk0NU1EVXhOak1zTlM0eE56UTJPVFlnTFRBdU1USXlOVFVzTmk0eE16Z3pOREUxSURBdU5qVTNOelVzTVRJdU1qVXdNVGs1TlNBdE1DNHlNREkyTVN3eE9DNHpOek0yTURFMUlEQXVNamMyT0RJc05TNHlNRFF5TmpZZ0xUQXVNVGd3T0RNc01URXVPVFE0TXpFeUlDMHdMakUzT1RRM0xERTFMalV4TVRVd09TQXRNQzR5TURjM09DdzNMalkwTVRNMk9DQXdMakEzTnpZc01UVXVNamsyTnpVeUlEQXVNakl4TkN3eU1pNDVOVEk0TXpJZ01DNDBORGN4TVN3ekxqazJPRFV5SURBdU5qSTFNRGdzT0M0d01qVTNOaUF3TGpVMk1EZzJMREV5TGpFMk9URXpJREl1TXpjeU9USXNOUzR4TkRRM055QXROUzR4TURReU1pdzFMakUxTVRBM0lDMDJMamM0TlRNeUxEa3VNamMxTXpFZ0xUQXVNREE0TERBdU5qY3pNamdnTFRFdU1ETTBNell6TERBdU5UTTBOaklnTFRBdU9UYzNORGNzTVM0ME5USXpOU0lLSUNBZ0lDQWdJR2xrUFNKd1lYUm9OVEUxT1NJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlDaUFnSUNBZ0lDQnpiMlJwY0c5a2FUcHViMlJsZEhsd1pYTTlJbU5qWTJOalkyTmpJaUF2UGdvZ0lEd3ZaejRLSUNBOFp3b2dJQ0FnSUdsdWEzTmpZWEJsT214aFltVnNQU0pNWVhsbGNpQXhJZ29nSUNBZ0lHbHVhM05qWVhCbE9tZHliM1Z3Ylc5a1pUMGliR0Y1WlhJaUNpQWdJQ0FnYVdROUlteGhlV1Z5TVNJS0lDQWdJQ0J6ZEhsc1pUMGlaR2x6Y0d4aGVUcHBibXhwYm1VaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUSXVOVEE0T0RnNE9Dd3RNaTQwTVRZMU5ETTFLU0krQ2lBZ0lDQThjbVZqZEFvZ0lDQWdJQ0FnYVdROUluSmxZM1F6TnpFNElnb2dJQ0FnSUNBZ2QybGtkR2c5SWpZNExqUXhNelk0T1NJS0lDQWdJQ0FnSUdobGFXZG9kRDBpTkRRdU9ESXlNelEySWdvZ0lDQWdJQ0FnZUQwaU5EUXVOelV5TXpnNElnb2dJQ0FnSUNBZ2VUMGlNalV1T1RFMU5EYzJJZ29nSUNBZ0lDQWdjM1I1YkdVOUltWnBiR3c2Ym05dVpUdHpkSEp2YTJVdGQybGtkR2c2TUM0eU56azVNakkxTWlJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVpHbHpjR3hoZVRwcGJteHBibVU3YjNCaFkybDBlVG94TzJacGJHdzZJMlExWkRGaFl6dG1hV3hzTFc5d1lXTnBkSGs2TVR0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNDNNakExTXpFMk5IQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJRGcyTGpjd016VXdOeXd5TGpjNE16UTJORFVnWXlBdE1DNDJPREUxTlN3d0xqQXhORFF6SUMweExqTTFPVE15TERBdU1EZ3pNaklnTFRJdU1ETXlNVElzTUM0eU1qa3pPREVnTFRJdU5EVTJOamtzTUM0d056QXdNU0F0TkM0MU5Ua3hNaXd3TGpNMk5qTTJOaUF0Tnk0ek1UTTJPQ3d3TGpJek5UQXhPQ0F0TWk0NE56VTVNeXd3TGpFeU5UVTBNaUF0Tmk0eU1UUXpOaXd0TUM0eU56ZzFNRFlnTFRndU56VXhPVE1zTUM0eU5UYzFNemtnTFRjdU16UTRPVE1zTFRBdU1EUTBOVE1nTFRFMExqWTVNVGczTERBdU1ESTFNek1nTFRJeUxqQXlOVFEyT1N3d0xqSTBPVEE1T0NBdE5pNHdNRFk0Tnprc01DNDNNVFk1TnpFZ0xURXlMakU1TWpReE15d3RNQzQwTVRNNU56TWdMVEU0TGpFeE56UXpMREV1TURrM05qZzBJQzAwTGpJM016QXlOeXd3TGpRNE5Ua3lOQ0F0T0M0Mk5UZzBOeklzTFRBdU1UVXlNak14SUMweE1pNDVNekF4TmpVc01DNDBPVGd4TnprZ0xUSXVPVGM0TmpBMkxDMHdMakV6TlRrME5pQXROaTQzTWpNNE9UUXpMQzB3TGpjd016UTBNaUF0T1M0eU1ESXlOalV6TEMwd0xqVTFPRFk1TXlBdE1DNHlORE0wTml3ekxqVTVOalUzT1NBd0xqVXdPVE0zTkN3Mkxqa3dOVEUwTmpVZ01DNHlPRFUyT0RVc01UQXVOVEUxTWpZeU5TQXRNQzQyTkRrME5EWXNOQzQyTURJek5qWWdNQzR4TmpBd05EWXNPUzQwTWpVME1EUWdMVEV1TVRFMU9UZ3lMREUwTGpBd01URXhNaUF0TUM0NE1EWTNOalFzTlM0ME1EWTJNU0F0TUM0ek1qTTFNalVzTVRBdU9UTXhNakk0SUMwd0xqUTFOVGsyTERFMkxqUXdNRFUwTWlBd0xqQTFPVE0zTERVdU16SXpOakVnTUM0eE9EVXpNVGdzTVRBdU56UTVORGMySURFdU1ETXdNVE01TERFMkxqQTRPVFV5TmlBd0xqQTNNVFl5TERZdU1USXpNekVnTFRBdU1qQXhNRFU1TERFeUxqTXhOVGNnTUM0eU5UYzFOQ3d4T0M0ek5qYzVNeUF0TVM0d09EQTNOaklzTkM0eU1UZ3hJREl1TURVM05qZ3NOQzQ0TVRreE5pQTFMalkyTVRVeE9UTXNOUzQwTWpjNUlEVXVOVGcxTURjeExERXVNekk1TnpjZ01URXVORE15T0RVM0xEQXVNalEwT1RrZ01UY3VNRGN3TkRFeExERXVOVE0yTnpjZ09TNDRPRE13TVRVc01DNDNPVGcyTlNBeE9TNDRNekkwT1Rjc01DNDBORGN3TlNBeU9TNDNOalF4TkRjc01DNDFNakl4SURNdU5ERTVORGNzTUM0ME16QTBNU0EyTGpnNU9ESTNMREF1TVRnME9ERWdNVEF1TXpFMU5ETXNNQzQxTVRVd055QTJMakUwTURZM0xEQXVORGMwTWpnZ01USXVNek0xTnpVc01DNHhOekk1TmlBeE9DNDFNRFU0TkN3d0xqSTFOelUwSURJdU5qSTVNemNzTUM0MU5EQXlJRFV1TnpZeE5qWXNNQzR4TWpZNU15QTRMall3TlRVM0xEQXVNalUzTlRRZ05DNDNPVFUyTWpNc01TNHdPVGMxTlNBekxqZ3pNak01TXl3dE15NDVOREUwTkNBekxqYzBOakl3TXl3dE55NHhPREV6T1NBd0xqQTJNallzTFRndU1ESTNOVGtnTFRBdU1qVTVNVGN6TEMweE5pNHdPRFkzTWlBd0xqVXhOVEEzTEMweU5DNHdORGt4TlNBM0xqSmxMVFFzTFRVdU5UZ3dPRFk0SUMwd0xqQTVNRGdzTFRFeExqRTNOamMwT0NBd0xqSTFOakV5TEMweE5pNDNNRE14TVRJZ01DNDFNREV5TWl3dE5TNDJNRFV4T1RZZ01DNHhOVE0xTVN3dE1URXVNamMyT1RReElEQXVNalUzTlRRc0xURTJMamt4TkRFNU9TQXRNQzQ1TVRZek9Dd3RNeTQxT1RnNE16TWdMVEV1TlRFd016Z3pMQzAzTGpJeE1UTTBPQ0F0TVM0eU9EWXlOak1zTFRFeExqQTJOREV3TkNBd0xqQXpPREVzTFRNdU1EazVNRFl6TlNBd0xqQXhOakVzTFRZdU1Ua3lNVFkwTlNBdE1DNHlOVGMxTkN3dE9TNHlOalUxT0RNMUlDMDBMakEyTkRrMUxERXVNRGd5TkRreElDMDRMakUwTmpFMUxDMHdMall3TlRZMk1TQXRNVEl1TURrNU9EVXNMVEF1TnpFNU1USXpJQzB3TGpJeU9ERXhMQzB3TGpBd05qVWdMVEF1TkRVMU16WXNMVEF1TURBM05pQXRNQzQyT0RJMU5Dd3RNQzR3TURJM0lIb2lDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhOVGNpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUR3dlp6NEtJQ0E4WndvZ0lDQWdJR2x1YTNOallYQmxPbWR5YjNWd2JXOWtaVDBpYkdGNVpYSWlDaUFnSUNBZ2FXUTlJbXhoZVdWeU1pSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwc1lXSmxiRDBpVEdGNVpYSWdNaUlLSUNBZ0lDQnpkSGxzWlQwaVpHbHpjR3hoZVRwcGJteHBibVVpQ2lBZ0lDQWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRJdU5UQTRPRGc0T0N3dE1pNDBNVFkxTkRNMUtTSStDaUFnSUNBOGNHRjBhQW9nSUNBZ0lDQWdjM1I1YkdVOUltWnBiR3c2SXpZMk5qWTJOanRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNkl6QXdNREF3TUR0emRISnZhMlV0ZDJsa2RHZzZNQzQzTURJMk9ETXhOWEI0TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXZjR0ZqYVhSNU9qRWlDaUFnSUNBZ0lDQmtQU0p0SURFd055NDBNVFV3T0N3eE5DNHpNRFkxTXpFZ1l5QXdMREFnTVM0M09EazBOaXd3TGpRMU9ETXdNaUF6TGpZMk1USTFMREF1TmpNek16QXlJREV1TWpjNE9ESXNNQzR4TVRrMU5USWdNaTR4TnpJek9Dd3RNQzR3TVRVeU5TQXlMamd5TnprMUxEQXVPVFUzTlRNeUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UWXpJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJS0lDQWdJQ0FnSUhOdlpHbHdiMlJwT201dlpHVjBlWEJsY3owaVkzTmpJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTTJOalkyTmpZN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNRGN1TVRjeU1qVXNNVGd1TURnd056a3lJR01nTWk0eU9EVTJOQ3d3TGpNNU5USXdOeUExTGpFME1UWTNMREV1TXpFek56azRJRFl1T1RFME1URXNNaTR4T0RNMk1qY2lDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhOalVpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSm1hV3hzT2lNMk5qWTJOalk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdjM1J5YjJ0bE9pTXdNREF3TURBN2MzUnliMnRsTFhkcFpIUm9PakF1TnpBM01qZzBNamR3ZUR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hJZ29nSUNBZ0lDQWdaRDBpYlNBeE1EY3VNRGd3TVRVc01qTXVOekl4TmpBMklHTWdNaTQwTmpZME5Dd3RNQzR5TWpFNE9USWdOQzQyTXpBNE5pd3hMak0wT1RZeE55QTNMakU0T0RnekxERXVNRGt4T0RFMElnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UWTNJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRG9qTmpZMk5qWTJPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMamN3Tnpnek9UZzFjSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTVRBM0xqQTJOVFl6TERJNExqUTVOemN3TVNCaklESXVPRFUyTXpNc01TNHpOelk0TmlBekxqSTNOamM0TERFdU16UXdOakV4SURjdU16azNNRFlzTVM0ME5EUXlOVFlpQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4TmpraUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJZ29nSUNBZ0lDQWdjMjlrYVhCdlpHazZibTlrWlhSNWNHVnpQU0pqWXlJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRHB1YjI1bE8yWnBiR3d0YjNCaFkybDBlVG94TzNOMGNtOXJaVG9qTURBd01EQXdPM04wY205clpTMTNhV1IwYURvd0xqY3lNRFV6TVRZMGNIZzdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFc5d1lXTnBkSGs2TVNJS0lDQWdJQ0FnSUdROUltMGdNVEEyTGprNU1ESTRMRE16TGpNMk5UVTNPQ0JqSURJdU16VTRPREVzTFRBdU1EZzNNalVnTkM0NE1EYzRPQ3d3TGpFNU56RTVNaUEzTGpBNU1UYzRMQzB3TGpFNU56QXlPU0F3TGpVM01EQTRMQzB3TGpVMU5UVTJOaUF3TGpRME1qZzRMQzB4TGpRM01Ea3hOQ0F3TGpNMk56ZzFMQzB5TGpFMk9EVXlPQ0lLSUNBZ0lDQWdJR2xrUFNKd1lYUm9OVEUzTVNJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlJQzgrQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NmJtOXVaVHRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNkl6QXdNREF3TUR0emRISnZhMlV0ZDJsa2RHZzZNQzQzTURBeU9UWXhjSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTVRBM0xqQTNPVGcxTERNNUxqQXdOak01TWlCaklETXVOVFkyTVRVc0xUQXVNamMzTVRJeklETXVNalV5TVN3d0xqSTNOekF5TWlBM0xqY3pORGczTEMweExqZ3hPVGMwTXlJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFM015SUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpQ2lBZ0lDQWdJQ0J6YjJScGNHOWthVHB1YjJSbGRIbHdaWE05SW1OaklpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSm1hV3hzT2lNMk5qWTJOalk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdjM1J5YjJ0bE9pTXdNREF3TURBN2MzUnliMnRsTFhkcFpIUm9PakF1TmprM056SXdPRE53ZUR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hJZ29nSUNBZ0lDQWdaRDBpYlNBeE1EWXVPREEyTnpNc05EUXVORFkxTWpRZ1l5QXpMak13TWpNeUxEQXVNalUxTlRVeElEVXVNak0xT1Rnc0xUSXVOVEEyTmpjM0lEZ3VNVGt3TURjc0xUTXVNamMxTXpJMUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UYzFJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRHB1YjI1bE8yWnBiR3d0YjNCaFkybDBlVG94TzNOMGNtOXJaVG9qTURBd01EQXdPM04wY205clpTMTNhV1IwYURvd0xqY3dNelExTnpFeWNIZzdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFc5d1lXTnBkSGs2TVNJS0lDQWdJQ0FnSUdROUltMGdNVEEyTGpnd056YzVMRFE0TGpreU56YzJPU0JqSURJdU9EZzRNVGtzTFRFdU5EVTFOVFk1SURrdU5qZzNPVFVzTFRNdU1UazNORFV6SURndU1UZzVNREVzTFRjdU56TTNPRFUwSWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cxTVRjM0lnb2dJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXVibVZqZEc5eUxXTjFjblpoZEhWeVpUMGlNQ0lLSUNBZ0lDQWdJSE52Wkdsd2IyUnBPbTV2WkdWMGVYQmxjejBpWTJNaUlDOCtDaUFnSUNBOGNHRjBhQW9nSUNBZ0lDQWdjM1I1YkdVOUltWnBiR3c2SXpZMk5qWTJOanRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNkl6QXdNREF3TUR0emRISnZhMlV0ZDJsa2RHZzZNQzQzTWpBMU16RTJOSEI0TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXZjR0ZqYVhSNU9qRWlDaUFnSUNBZ0lDQmtQU0p0SURFd05pNDRNRGd6TkN3MU5TNHdNVGt3TWpNZ1l5QXpMakl5TURrM0xDMHhMakl5TWpjZ05TNHlNVE15Tml3dE5DNDBNelE0T1RZZ09DNDFOVEUyT1N3dE5TNDJOREE1TWpZaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE56a2lDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPbTV2Ym1VN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNRFl1T0RBNE16UXNOakV1TlRZNU5qUXpJR01nTXk0Mk56UXhPQ3d0TUM0ME5EWTVJRFV1TkRBM01UWXNMVFV1TVRFd05UUWdPQzR5TkRNNE15d3ROaTR5TVRRMk9DQnNJREF1TWpBMk5ESXNMVEF1TVRZMk5TQXdMakV3TVRnMUxDMHdMakUyT1RVeUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UZ3hJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRG9qTmpZMk5qWTJPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMamN5TURVek1UWTBjSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTVRBM0xqY3hPREV6TERZMkxqUTRNall4TXlCaklETXVNRE13TlRrc0xURXVOelF3T0RnZ05DNDNOell5Tml3dE5DNDBOVEl6SURjdU5EVTVOVFVzTFRZdU5UVXdOalFpQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4T0RNaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09tNXZibVU3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdjM1J5YjJ0bE9pTXdNREF3TURBN2MzUnliMnRsTFhkcFpIUm9PakF1TnpJd05UTXhOalJ3ZUR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hJZ29nSUNBZ0lDQWdaRDBpYlNBeE1UVXVNVGM0TnpJc05Ua3VPVE14T1RjeklHTWdNQzQ0TmpNMkxEUXVPRGMwTlRJZ0xUTXVORFk1TVRJc055NHdORFUxTkNBdE5pNHlNekl4TWl3eE1DNHhOelE0TWlBdE1DNHdPREF4TERBdU5qRXlNek1nTFRFdU1EWTBOVFlzTUM0ME5qQTVOeUF0TVM0d05EUTVMREV1TVRBMk9UUWlDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhPRFVpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSm1hV3hzT2lObU1USmpNREE3Wm1sc2JDMXZjR0ZqYVhSNU9qQTdjM1J5YjJ0bE9pTXdNREF3TURBN2MzUnliMnRsTFhkcFpIUm9PakF1TnpJd05UTXhOalJ3ZUR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hJZ29nSUNBZ0lDQWdaRDBpYlNBNU5DNDNPVGc0TlRjc09EZ3VOamd4T1RReklHTWdMVEF1T1RZNU1URXNNUzQwTVRrNU5pQXhMalF5T1RZc055NDJOVEkwSURBdU16WXpOU3cyTGpNMk9EYzFJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzFNVGc1SWdvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvalpqRXlZekF3TzJacGJHd3RiM0JoWTJsMGVUb3dPM04wY205clpUb2pNREF3TURBd08zTjBjbTlyWlMxM2FXUjBhRG93TGpjeU1EVXpNVFkwY0hnN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzl3WVdOcGRIazZNU0lLSUNBZ0lDQWdJR1E5SW0wZ056WXVOemcwTmpRM0xEZzRMalE1T1RrNE15QmpJREF1TURjNUxESXVOall6TnpRZ0xUQXVNVGd3T0RNc05TNHpPVEkyT0NBd0xqRTRNVGt4TERndU1EQTJNeklpQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4T1RFaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTm1NVEpqTURBN1ptbHNiQzF2Y0dGamFYUjVPakE3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQTNPUzQyTlRBMU1qY3NPVEF1TVRNM05qUXpJR01nTFRFdU1UQTJNRElzTXk0ME5EUTNOU0F5TGpjNE5EWTJMREV1T0RrNE15QTBMalk1TlRRM0xESXVNakk1TWlBekxqRXlNVEkwTERFdU1qQXdOVEVnTlM0eU9UTTVOU3d0TWk0Mk5qSXpOeUF4TGpFM01qRXlMQzB5TGpJM05EVXpJQzB4TGprME9UZzJMQzB3TGpBek5qZ2dMVE11T1RJME5EVXNMVEF1TVRReU9UUWdMVFV1T0RZM05Ua3NNQzR3TkRVeklIb2lDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhPVE1pQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSm1hV3hzT2lObU1USmpNREE3Wm1sc2JDMXZjR0ZqYVhSNU9qQTdjM1J5YjJ0bE9pTXdNREF3TURBN2MzUnliMnRsTFhkcFpIUm9PakF1TnpJd05UTXhOalJ3ZUR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hJZ29nSUNBZ0lDQWdaRDBpYlNBM09DNDVNakkyT0Rjc09UQXVNRGt5TVRVeklHTWdMVEV1TmpJNU5TdzFMak15TmpFMElEY3VOREUwTWprc01pNDNPREF6T1NBNUxqa3dOVFF6TERJdU5qQTBOellnTWk0d05UYzRNeXd0TlM0Mk9ESXdPQ0F0T0M0MU1UZ3lNeXd0TXk0ek16TTNOeUF0T1M0NU9UWXlNeXd0TWk0eU5ERTFNU0lLSUNBZ0lDQWdJR2xrUFNKd1lYUm9OVEU1TlNJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlJQzgrQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWXhNbU13TUR0bWFXeHNMVzl3WVdOcGRIazZNRHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01qQTFNekUyTkhCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElETXlMak00TlRrNE5TdzVNUzQxT1RNek16TWdZeUF0TVM0eE1qVXdPVElzTlM0eE9EVXpPQ0ExTGpNNE9EVTJMRE11TXpZM09UWWdPQzQyTnpNeU9EWXNOQzR6TmpjeE15QTVMakExTWpBek5pd3dMakF5T1RZZ01UZ3VNVEkxTmpjMkxEQXVORFF5T1RnZ01qY3VNVGN4T0RBMkxEQWdNQzQzT0RnM05Dd3RNQzR3TXpnM0lESXVORGczT0Rrc0xUQXVOVE16TXpJZ015NHlOelkyTml3dE1DNDFORFU0TlNJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFNU55SUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpQ2lBZ0lDQWdJQ0J6YjJScGNHOWthVHB1YjJSbGRIbHdaWE05SW1OalkyTWlJQzgrQ2lBZ1BDOW5QZ29nSUR4bkNpQWdJQ0FnYVc1cmMyTmhjR1U2WjNKdmRYQnRiMlJsUFNKc1lYbGxjaUlLSUNBZ0lDQnBaRDBpYkdGNVpYSXhNeUlLSUNBZ0lDQnBibXR6WTJGd1pUcHNZV0psYkQwaVRHRjVaWElnT1NJS0lDQWdJQ0J6ZEhsc1pUMGlaR2x6Y0d4aGVUcHBibXhwYm1VaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUSXVOVEE0T0RnNE9Dd3RNaTQwTVRZMU5ETTFLU0krQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVJwYzNCc1lYazZhVzVzYVc1bE8yWnBiR3c2SXpBd01EQXdNRHRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNkl6QXdNREF3TUR0emRISnZhMlV0ZDJsa2RHZzZNQzR5TmpRMU9ETXpNbkI0TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXZjR0ZqYVhSNU9qRTdabWxzZEdWeU9uVnliQ2dqWm1sc2RHVnlOVGN5TkNraUNpQWdJQ0FnSUNCa1BTSnRJRFUzTGpZMU5qSTJOaXcxTkM0ME16QTFPVElnWXlBdE1DNHlNRFU1Tml3eExqazJPRFl3TnlBdE1DNHpOek0zTnl3MExqQXdPRGN5TmlBdE1DNHdORGcyTERVdU9UWTBOREE0SURBdU1UTXdPRFlzTUM0M05EQTFOVFFnTUM0eE1UWXlNaXd4TGpZNU56SXlPU0F3TGpFeE5UTTJMREl1TlRRMU5qTTFJREF1TURJMExETXVNVEV4T0RnMklEQXVNVGcwT1RJc05pNHlNVE00TkRFZ01DNHhNek0yTERrdU16TXdNalkwSUMwd0xqQTVNRGNzTVM0eE1EY3pOREVnTFRBdU1UVTFOelVzTWk0eU16WTJNellnTFRBdU1qQXdOQ3d6TGpNME1UWTBJREF1TWpJMk9UWXNNQzQ0TXpBeU9TQXRNQzQzTURFME1Td3lMalV3T1RjZ01DNDNNakE0TlN3eUxqTXlPVGN5SURFdU1qYzVPRGNzTUM0eE5EVTFNelVnTWk0M016STNNaXd3TGpVek9UYzRNaUEwTGpFek5ETTVMREF1TkRjMU9UQXhJREV1TkRJM05qUXNNQzR4TXpJMk16Z2dNaTQ0T0RNM01pd3dMakF5TVRBeUlEUXVNelEwTWpRc01DNHhNek0yTXlBeUxqTTNORFV4TEMwd0xqSXpNekEwTXlBMExqYzFPREk1TERBdU1UY3dOemcwSURjdU1USTJOaXd3SURJdU1qazBPVE1zTUM0d05ESTBPQ0EwTGpVM01UZzJMQzB3TGpJek9UWTBNaUEyTGpnM01EVTRMQzB3TGpFME1qTTRNeUF5TGpNeE16SXNNQzR3TXpZNE55QTBMalkwTkRjNExEQXVNVE00TkRJZ05pNDVNelk1Tml3d0xqQXdPRGdnTFRBdU1ETTBOeXd0TWk0eU5ERTNORGdnTUM0eU5qZzNOeXd0TkM0ME9Ua3hOelFnTUM0d09EYzFMQzAyTGpjek5UUXpOaUF0TUM0eE9UWTBOaXd0TVM0ek9UUTNPREVnTUM0eU5qQTVOQ3d0TWk0NE1EZ3pOVGtnTUM0d05EWXNMVFF1TWpJeU56WXlJQzB3TGpBd05Dd3RNUzR4TURJeU56Z2dNQzR3TmpZNExDMHlMakl3TmpZd055QXRNQzR5TURBME5Dd3RNeTR5TnpRd05qSWdNQzR5T0RNNU5pd3RNaTQ1T1RNMk5qVWdNQzR3TmpVNExDMDJMakF4TVRVNU1pQXdMakUwTURJeUxDMDVMakF4TkRnNE1pQXdMakl6TWpVMExDMHhMall5TkRnMU5pQXRNUzQwTmpNNE55d3RNUzR3TURJM09ESWdMVEl1TmpBM056WXNMVEV1TWpVeE5EQTJJQzB4TGpVMU5UWTBMQzB3TGpBME1UTTBJQzB6TGpFeE16UTBMREF1TVRNMk56azFJQzAwTGpZMk9UYzRMQzB3TGpBeU1qYzVJQzB5TGpFd016YzJMREF1TURRd05URWdMVFF1TXpBME56Y3NMVEF1TURrek9TQXROaTR6TXpneE1pd3dMakV3TXpBeE55QXRNaTR4T1RFNE1Td3dMakkzTURRMklDMDBMalEwTVRJNExEQXVNVEk1T0RreElDMDJMalkyTlN3d0xqRTJNakU1TnlBdE1TNDNNemcxTWl3dE1DNHlORFl4TVRRZ0xUTXVORFUyT0N3d0xqSTNOalE0TnlBdE5TNHhOelk0Tml3d0xqUXhNekl5TVNBdE1TNDBOVE15Tml3d0xqRTFNekk0TkNBdE1pNDVNakEwTkN3dE1DNHdNVFEwT1NBdE5DNHpOekkzTEMwd0xqQXhORGczSUhvaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE5UVWlDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWdvZ0lDQWdJQ0FnYzI5a2FYQnZaR2s2Ym05a1pYUjVjR1Z6UFNKalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpJZ29nSUNBZ0lDQWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NaTQzTWpNeU5qazFMREFzTUN3eUxqY3lNekkyT1RVc0xURTBOUzQxTlRNeE5pd3RNVE0wTGpFMU1UVXpLU0lnTHo0S0lDQThMMmMrQ2lBZ1BHY0tJQ0FnSUNCcGJtdHpZMkZ3WlRwbmNtOTFjRzF2WkdVOUlteGhlV1Z5SWdvZ0lDQWdJR2xrUFNKc1lYbGxjakV5SWdvZ0lDQWdJR2x1YTNOallYQmxPbXhoWW1Wc1BTSk1ZWGxsY2lBNElnb2dJQ0FnSUhOMGVXeGxQU0prYVhOd2JHRjVPbWx1YkdsdVpTSUtJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNaTQxTURnNE9EZzRMQzB5TGpReE5qVTBNelVwSWo0S0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNCemRIbHNaVDBpWkdsemNHeGhlVHBwYm14cGJtVTdiM0JoWTJsMGVUb3hPMlpwYkd3Nkl6RTRNVGd4T0R0bWFXeHNMVzl3WVdOcGRIazZNVHRtYVd4c0xYSjFiR1U2Ym05dWVtVnlienR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01qQTFNekUyTkhCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElEWXdMalU0TVRReE55d3hNeTQ1TURFd016a2dZeUF0TWk0ME1ESTBNeXd3TGpBeE9UTTBJQzAwTGpjNU5EY3lMREF1TWpRMk1USTVJQzAzTGpBNU1qY3pMREF1TlRRd05EQXhJQzB6TGpVeU5EYzRMREF1TURnNU1EZ2dMVGN1TURrMU1UazRMQzB3TGpJd01qTXhNaUF0TVRBdU5UZ3lPREV4TERBdU1UazNNREk0SUMwekxqRTRNRE01Tnl3d0xqTTBNamd3T0NBdE5pNDRORFl5TWpVc01DNDFPVGN3TlRVZ0xURXdMakk0T0RZNExEQXVOVE13TlRVZ0xUTXVNelE1TWprNExEQXVNRFV6TURJZ0xUWXVNekkyTVRjMExEQXVOVE0yTXpreUlDMDVMamMxTmpjek5Dd3dMak0yTkRRNE9DQXRNeTR4TnpRME16TXNMVEF1TVRJNU9USTNJQzAyTGpReE5Ea3hOQ3d0TUM0ek9UVXlOakVnTFRrdU5UYzVOREV4TERBZ2FDQXRNQzR3TURFMElHTWdMVEF1TkRBNE1EZzRMRGN1TnpVNE56TTJJQzB3TGpBNU5UVTVMREUxTGpVek9UY3pOU0F3TERJekxqSTVNRFl5TmlBdE1DNDFOakUyTnpjc015NDBNekkyTVRnZ01DNHlOelF3T0RFc055NHlNall3TkNBdE1DNDBPRGszTXprc01UQXVORGc1T1RJMElDMHdMamd3TVRnMk55dzJMak0yTkRBMU55QXRNQzR5TlRrNE9ESXNNVE11TURRMk5UZzNJQzB3TGpReE9UTTNMREU1TGpVMU5UWTROeUF3TGpBME56WXpMREl1TWpnd05pQXRNQzR4T0RRMk5qVXNOQzQzTlRJM055QXdMalE0TlRVeE5TdzJMamM1TnpJZ015NDRNamMxTlN3d0xqWXdOalV4SURjdU9EVXdPVE0xTEMwd0xqRTFNVEk0SURFeExqVXlNVFEyTnl3eExqQXdOakl4SURRdU5EY3hOREU0TERFdU5ESTVPRGNnT1M0d01qRTNPVGtzTFRBdU16Y3dPRFVnTVRNdU5qUTVNamtzTUM0ek5qTXdPQ0ExTGpFNU1qZ3hOU3d3TGpVeU56YzBJREV3TGpJMk1qa3hNeXd3TGpFeE5qa3hJREUxTGpRMk5qRXdNeXd3TGpFNE1UVXpJRFV1TVRNeU1Ua3NMVEF1TkRJeE9EUWdNVEF1TkRNNE5UWXNMVEV1TURNeU5ERWdNVFV1TkRZMk1Td3dMakU0TWprMUlEVXVPREkxTXpJc01DNDFPRGcwTnlBeE1TNDJNemd3Tml3d0xqWXdOVFEySURFM0xqUTJOVGcxTERFdU1qY3pOaUF6TGpFd01UUXNNQzR4TnpFNE5DQTJMall5TmpReUxEQXVOVEUwTlRZZ05TNHdPVFF6T1N3dE5DNHdNell4SUMwd0xqTXdOelUwTEMwekxqTTRNek0ySURBdU5UZ3hOek1zTFRRdU5EWXhOemtnTUM0ek5qUTBPU3d0Tnk0Mk56TTVOQ0F0TUM0ek1ETTNNeXd0TkM0NU1UTTJOaUF0TUM0d01qZ3NMVGt1T0Rnek9UUWdMVEF1TXpRd05UY3NMVEUwTGpjNE56YzVOQ0F0TUM0MU5qRTBOU3d0TkM0eU9UTTFNalVnTUM0d056QTVMQzA0TGpjNE56YzJOQ0F0TUM0d01qSTJMQzB4TXk0eE56QTRNVFFnTFRBdU16UXpOVEVzTFRVdU1ERTRNVFU0SURBdU56azBOaXd0T1M0NE16WTFORElnTUM0eE9UazRNeXd0TVRRdU56WTJOamM0SUMwd0xqSTNNRFF5TEMweUxqYzJNVFF6TVNBd0xqUTJPRFkzTEMwMUxqa3dOalUxTVNBdE1DNDBPVFV6Tml3dE9DNDBNVFF4TnpZZ0xUTXVNamsxT1RJc01DNHdOVFUxTlNBdE5pNDFNRGcxTXl3dE1DNDVPVGd3TlRFZ0xUa3VPVEEwTkRrc0xUQXVOalUxTnprNElDMDBMalUyTkRnc01DNHdOREE0TlNBdE9TNHdNVFV4Tml3dE1DNDROelF3T0RVZ0xURXpMalU0TkRVMkxDMHdMalUyTlRjek1pQXRNaTR6TXprek1pd3RNQzQxTXpNME9Ea2dMVFF1TnpVeU1qSXNMVEF1TnpJeE5Ua3pJQzAzTGpFMU5EWTJMQzB3TGpjd01qSXpPU0I2SWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cxTVRVeklnb2dJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXVibVZqZEc5eUxXTjFjblpoZEhWeVpUMGlNQ0lnTHo0S0lDQThMMmMrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDandoTFMwZ1EzSmxZWFJsWkNCM2FYUm9JRWx1YTNOallYQmxJQ2hvZEhSd09pOHZkM2QzTG1sdWEzTmpZWEJsTG05eVp5OHBJQzB0UGdvS1BITjJad29nSUNCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpQ2lBZ0lIaHRiRzV6T21OalBTSm9kSFJ3T2k4dlkzSmxZWFJwZG1WamIyMXRiMjV6TG05eVp5OXVjeU1pQ2lBZ0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SUtJQ0FnZUcxc2JuTTZjM1puUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJQ0I0Yld4dWN6cHpiMlJwY0c5a2FUMGlhSFIwY0RvdkwzTnZaR2x3YjJScExuTnZkWEpqWldadmNtZGxMbTVsZEM5RVZFUXZjMjlrYVhCdlpHa3RNQzVrZEdRaUNpQWdJSGh0Ykc1ek9tbHVhM05qWVhCbFBTSm9kSFJ3T2k4dmQzZDNMbWx1YTNOallYQmxMbTl5Wnk5dVlXMWxjM0JoWTJWekwybHVhM05qWVhCbElnb2dJQ0IyYVdWM1FtOTRQU0l3SURBZ05ETXVPVFEzTkRJeUlERTFMakExTmpJeE9TSUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0JwWkQwaWMzWm5OVGsyTkNJS0lDQWdjMjlrYVhCdlpHazZaRzlqYm1GdFpUMGlhMlY1WW05aGNtUXlMbk4yWnlJS0lDQWdhR1ZwWjJoMFBTSXhNREFsSWdvZ0lDQjNhV1IwYUQwaU5ETXVPVFEzTkRJeWJXMGlDaUFnSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUltNXZibVVpQ2lBZ0lHbHVhM05qWVhCbE9uWmxjbk5wYjI0OUlqQXVPVEl1TWlBMVl6TmxPREJrTENBeU1ERTNMVEE0TFRBMklqNEtJQ0E4WkdWbWN3b2dJQ0FnSUdsa1BTSmtaV1p6TlRrMU9DSWdMejRLSUNBOGMyOWthWEJ2WkdrNmJtRnRaV1IyYVdWM0NpQWdJQ0FnYVdROUltSmhjMlVpQ2lBZ0lDQWdjR0ZuWldOdmJHOXlQU0lqWm1abVptWm1JZ29nSUNBZ0lHSnZjbVJsY21OdmJHOXlQU0lqTmpZMk5qWTJJZ29nSUNBZ0lHSnZjbVJsY205d1lXTnBkSGs5SWpFdU1DSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwd1lXZGxiM0JoWTJsMGVUMGlNQzR3SWdvZ0lDQWdJR2x1YTNOallYQmxPbkJoWjJWemFHRmtiM2M5SWpJaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZW05dmJUMGlNaTQ0SWdvZ0lDQWdJR2x1YTNOallYQmxPbU40UFNJNE1TNHlNVEEyTnpRaUNpQWdJQ0FnYVc1cmMyTmhjR1U2WTNrOUlqTTFMalU1TlRNd09TSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwa2IyTjFiV1Z1ZEMxMWJtbDBjejBpYlcwaUNpQWdJQ0FnYVc1cmMyTmhjR1U2WTNWeWNtVnVkQzFzWVhsbGNqMGljM1puTlRrMk5DSUtJQ0FnSUNCemFHOTNaM0pwWkQwaVptRnNjMlVpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTEwYjNBOUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMXNaV1owUFNJd0lnb2dJQ0FnSUdacGRDMXRZWEpuYVc0dGNtbG5hSFE5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxaWIzUjBiMjA5SWpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMWGRwWkhSb1BTSXhNVEk0SWdvZ0lDQWdJR2x1YTNOallYQmxPbmRwYm1SdmR5MW9aV2xuYUhROUlqWTJOQ0lLSUNBZ0lDQnBibXR6WTJGd1pUcDNhVzVrYjNjdGVEMGlPRE1pQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xYazlJak0ySWdvZ0lDQWdJR2x1YTNOallYQmxPbmRwYm1SdmR5MXRZWGhwYldsNlpXUTlJakFpSUM4K0NpQWdQRzFsZEdGa1lYUmhDaUFnSUNBZ2FXUTlJbTFsZEdGa1lYUmhOVGsyTVNJK0NpQWdJQ0E4Y21SbU9sSkVSajRLSUNBZ0lDQWdQR05qT2xkdmNtc0tJQ0FnSUNBZ0lDQWdjbVJtT21GaWIzVjBQU0lpUGdvZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2YzNabkszaHRiRHd2WkdNNlptOXliV0YwUGdvZ0lDQWdJQ0FnSUR4a1l6cDBlWEJsQ2lBZ0lDQWdJQ0FnSUNBZ2NtUm1PbkpsYzI5MWNtTmxQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012WkdOdGFYUjVjR1V2VTNScGJHeEpiV0ZuWlNJZ0x6NEtJQ0FnSUNBZ0lDQThaR002ZEdsMGJHVStQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHY0tJQ0FnSUNCcGJtdHpZMkZ3WlRwc1lXSmxiRDBpVEdGNVpYSWdNU0lLSUNBZ0lDQnBibXR6WTJGd1pUcG5jbTkxY0cxdlpHVTlJbXhoZVdWeUlnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUVTVMalV5TXpNeU1Td3RNVE0xTGpZek5UVXhLU0krQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyUTFaREZoWXp0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0eU5qUTFPRE16TW5CNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElEVTVMamMxTmpNMk9Td3hORFF1TlRFNU15QmpJREF1TlRneE56QTJMQzB4TGpBeU1ESTRJREV1TVRFeU1qZzBMQzB5TGpJMU56RTRJREV1T1RBeU16WTNMQzB6TGpBeE9URTFJREF1TlRZNE9EQTVMQzB3TGpnME1EY3hJREV1TWpZd056TTVMQzB4TGpVM05ESXpJREV1T0Rrek56STVMQzB5TGpRd056TTRJREF1T0RJME1qazVMQzB3TGpjd056ZzRJREV1TWpZNE56QXpMQzB4TGpVMU56VXpJREl1TURReU5EY3NMVEl1TXpZNU5ETWdNQzQzT0RnMk16VXNMVEV1TVRnek5qZ2dNaTR4TkRJd09UUXNMVEF1T1RVM01qa2dNeTQwTWpjMU1qVXNMVEF1T0RrNU5UVWdNUzR5TkRjMU1qRXNNQzR4T0RNeE9TQXlMalV6TkRjM05pd3dMakV3TlRrNUlETXVOell5TlRJeUxEQXVNemt5T0RNZ01TNHpNak0yT1RRc0xUQXVNRGc1TkNBeUxqWXlNVFkzTERBdU5ESTRPVFFnTXk0NU56VXpOamtzTUM0ek5qTTNOU0F4TGpNek9UZzNNU3d3TGpFek9EY3hJREl1Tmprek1qRXhMREF1TlRJd05USWdNeTQ1T0Rjek5qRXNNQzQwTmpJM09DQXhMamcyTXpZMU1pd3dMak0wTlRjNElETXVPRGMxTWpBM0xEQXVNakkyTXpnZ05TNDNPVGN5TnpRc01DNDBOVEV6T0NBeExqUTNNekF6T1N3d0xqUXhOekU0SURNdU1EYzNOalF5TERBdU1EY3pNaUEwTGpVM09USTJNeXd3TGpVek1UQTNJREV1TXpBeE16ZzJMQzB3TGpBM056UWdNaTQxTkRJNE1pd3dMakUwT0RFNUlETXVPREU1TXpZc01DNHlOek0zTVNBeUxqQXhOREUwTlN3dE1DNHpNRFEyTlNBMExqQXdPRFEwTXl3dE1DNHdNVE15SURZdU1ESXpNREF4TEMwd0xqSXhPRFk1SURBdU9EUTRNVFlzTUM0ek56azROQ0F5TGpZMU5UTTRMQzB3TGpJd056azNJREl1TVRreU56Y3NNUzR6TXpFMU5DQXdMakF5TURFc01TNHdOVEkzTnlBd0xqVTVPREUzTERJdU5ERTNNelFnTFRBdU5ETTFNVElzTXk0eE5EUXlNeUF0TVM0d01qWXlNaXd3TGpreU1EY3pJQzB4TGpZMU9EUXpMREl1TURjeU1EZ2dMVEl1TVRFeU5qVXNNeTR6TkRnNU5DQXRNQzQyTWpnNE56VXNNQzQ1TkRVMk15QXRNUzR5TURrMU5ESXNNaTR3TmpBek1TQXRNUzQzTnpBd05Ea3NNeTR3TlRBME15QXRNQzQyTmpneU1pd3hMakV4T0RreklDMHdMamMwT0RNM05pd3hMakk1T1RNeklDMHhMams0Tnpnd05Td3hMalV3TmpjM0lDMHhMakkyTURJM05Dd3dMakE1TnpNZ0xUSXVOVE01TXpJekxEQXVNVFkzT0RNZ0xUTXVOemM0TnpFMkxDMHdMakF5TmpNZ0xURXVNREEzTkRNM0xDMHdMakU0TURrMUlDMHhMalk1TWpVeE5Td3RNQzR3TXpRMUlDMHlMalkzTVRVek9Td3RNQzR6TmpFMElDMHhMalV5TkRNME9Td3RNQzR4TnpNNE5TQXRNaTQ1T1RrM01qa3NMVEF1TlRZM09EUWdMVFF1TlRNeU1qRTBMQzB3TGpZM09ESXhJQzB4TGpBMk1qQXlOeXd0TUM0eE1EQTNJQzB5TGpFeE1qZzVPU3d0TUM0eE56ZzROeUF0TXk0eE56Y3hPU3d0TUM0d056Z3pJQzB4TGpVd056RTNNaXd0TUM0eE1qQXhPU0F0TWk0NU1EZ3dPRGdzTFRBdU5qUXpOaklnTFRRdU5ESTNNall5TEMwd0xqZ3lPRFkxSUMweExqSXpOREF4TkN3dE1DNHlNalV6TVNBdE1pNHpPRFUwTmpjc0xUQXVNamcyTURJZ0xUTXVOVEUzTWl3dE1DNDJNamN5TXlBdE1TNHdOREkzTmpJc0xUQXVNekl3T0NBdE1pNHhNemcyT0RJc0xUQXVORFl4T0RFZ0xUTXVNakV6TlRJeUxDMHdMalV6T0RNMElDMHhMakU1TWpVek15d3RNQzR6T0RZM055QXRNaTR6TkRVM016VXNMVEF1T1RJeE5qa2dMVE11TmpNM01qRTBMQzB3TGprd01EWTRJQzB3TGpZek56VTNNaXd0TUM0d016Y3lJQzB4TGpRMU1UZ3pMQzB3TGpBeE1UTWdMVEl1TVRjMk1UQXlMREF1TURrMU9TQXRNUzR4TkRrME5EUXNNQzR4TWpnNElDMHlMakk1T0RrM01Td3RNQzR6TURnNE15QXRNeTR6T1RVeE1ERXNMVEF1TlRZeE1EVWdMVEF1T1RJd01EVXNMVEF1TVRBNU5ETWdMVEl1T1RRek5UazJMREF1TVRNMk9UWWdMVEl1TmpReU9ETTVMQzB4TGpRd01qWTBJR3dnTUM0d056RTFNU3d0TUM0d016WXpJSG9pQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFl3TWpnaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTmtOV1F4WVdNN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU1qWTBOVGd6TXpKd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNRE11TVRjNU5Ua3NNVE00TGpNeE5ETXpJR01nTFRBdU1qVTNNRFVzTVM0eE5UTTNNaUF0TVM0d09UQXdOeXd4TGpneU1USTBJQzB4TGpVek1UVXNNaTQ0TkRZeklDMHdMalE0T0Rrc01DNDVNelkwSUMwd0xqazVNalVzTWk0d05qazBPU0F0TVM0MU1EUTROaXd6TGpBeE5qYzNJQzB3TGpNNU9EVTFOU3d4TGpFd01UYzFJQzB4TGpBNU5EUTJOU3d4TGpRNE5URXhJQzB4TGpZd01qVXlOQ3d5TGpRNE1UUWdNQzR3TVRrMU5Dd3dMamcxTnpNM0lDMHhMakl3TURVek9Td3hMamt5T0RjeklDMHdMamsxTlRJMU1Td3lMalE1TnpjM0lEQXVNamN3TmpFekxEQXVNamN5TWpJZ01DNDFOVEUwTURJc01DNDBOalE0TWlBd0xqVTNNRFUxT1N3d0xqa3dNRFE1SWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cyTURNd0lnb2dJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXVibVZqZEc5eUxXTjFjblpoZEhWeVpUMGlNQ0lnTHo0S0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNCemRIbHNaVDBpWm1sc2JEb2paRFZrTVdGak8yWnBiR3d0YjNCaFkybDBlVG94TzNOMGNtOXJaVG9qTURBd01EQXdPM04wY205clpTMTNhV1IwYURvd0xqSTJORFU0TXpNeWNIZzdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFc5d1lXTnBkSGs2TVNJS0lDQWdJQ0FnSUdROUltMGdOVGt1TnpVMk16WTVMREUwTkM0MU1Ua3pJR01nTVM0ek9UY3lNRE1zTUM0eU5EazFOU0F5TGprd01qZzFOU3d3TGpBNU1URWdOQzR5T1RBM01EWXNNQzQxTmpBME1pQXhMak0yTnprd09Td3dMakF4TnpJZ01pNDNPVFV5TVRrc01DNDFNak14TVNBMExqQXhNakkzTkN3d0xqY3lOVEU1SURBdU9UQTVOVEUwTERBdU1qSXpNeUF4TGpreE5Ea3lMREF1TkRZeE5ESWdNaTQ0TkRjek1UZ3NNQzQxTkRRMk9TQXhMakU1TVRNM01Td3dMakUzTlRJeklESXVOREV6TlRNeUxEQXVOVEF5TlRRZ015NDJNRGczTURVc01DNDFPRGcyT0NBeExqY3dNakF4Tml3d0xqQTVOQ0F6TGpNMk5ETTNMREF1TmpFNE1TQTFMakV3TnpRd05Td3dMalV5TmpreElERXVNekV3TXpNMExEQXVNalExT0RRZ01pNDJOekF6Tnpjc01DNDBOalFnTXk0NU5UY3pOalFzTUM0Mk9EUXlPU0F4TGpBeE1UQTVPU3d0TUM0d01qWTNJREV1T1RZd09USTRMREF1TkRreE9EUWdNaTQ1TmpnMU1EY3NNQzQyTURFM01pQXhMakl5T1RRMU5Dd3dMakV6TkRBNUlESXVORFkzTURZMUxDMHdMakE0TnpJZ015NDJPRGszTXpRc01DNHhNVFV3TkNBeExqTXpOVE16TkN3d0xqSXlNVGN4SURJdU5qWXlNRGcxTEMwd0xqRXdOVE0zSURNdU9UZzJOekUzTERBdU1UVTJNalFnTUM0NU5qTXpNemNzTUM0ME1qZzROQ0F5TGpZME1qZzNOU3d0TUM0ek1qSTRPU0F6TGpRNE1USXpMREF1TlRNeE56Y2dNQzR4TXprME9UUXNNQzR4TnpVMU5pQXdMakkzTnpVek9Td3dMak0xTkRrZ01DNDBORGt3TWpNc01DNDFNREV6TVNJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTmpBek1pSUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpSUM4K0NpQWdQQzluUGdvOEwzTjJaejRLXCIiLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmd9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbi8vIGluaXRpYWxpemUgdGhlIHNlcnZlciBhbmQgY29uZmlndXJlIHN1cHBvcnQgZm9yIGVqcyB0ZW1wbGF0ZXNcbmNvbnN0IGFwcCA9IG5ldyBFeHByZXNzKCk7XG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKGFwcCk7XG5cbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAndmlld3MnKSk7XG5cbi8vIGRlZmluZSB0aGUgZm9sZGVyIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBzdGF0aWMgYXNzZXRzXG5hcHAudXNlKEV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdzdGF0aWMnKSkpO1xuXG4vLyB1bml2ZXJzYWwgcm91dGluZyBhbmQgcmVuZGVyaW5nXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBtYXJrdXAgPSAnJztcbiAgbGV0IHN0YXR1cyA9IDIwMDtcblxuICBjb25zdCBjb250ZXh0ID0ge307XG4gIG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgPEFwcCAvPlxuICAgIDwvU3RhdGljUm91dGVyPixcbiAgKTtcblxuXG4gIC8vIGNvbnRleHQudXJsIHdpbGwgY29udGFpbiB0aGUgVVJMIHRvIHJlZGlyZWN0IHRvIGlmIGEgPFJlZGlyZWN0PiB3YXMgdXNlZFxuICBpZiAoY29udGV4dC51cmwpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMiwgY29udGV4dC51cmwpO1xuICB9XG5cblxuICBpZiAoY29udGV4dC5pczQwNCkge1xuICAgIHN0YXR1cyA9IDQwNDtcbiAgfVxuXG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzKS5yZW5kZXIoJ2luZGV4JywgeyBtYXJrdXAgfSk7XG59KTtcblxuLy9jb25zb2xlLmxvZyhhcHAuZ2V0KCdlbnYnKSk7XG4vL2NvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcbi8vY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nO1xuXG4vLyBzdGFydCB0aGUgc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAyO1xuc2VydmVyLmxpc3Rlbihwb3J0LCAoZXJyKSA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmluZm8oXG4gICAgXCJTZXJ2ZXIgcnVubmluZ1wiKTtcbn0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==