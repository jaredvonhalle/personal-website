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

/***/ "./src/components/ComputerKeyboard.js":
/*!********************************************!*\
  !*** ./src/components/ComputerKeyboard.js ***!
  \********************************************/
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




var ComputerKeyboard =
/*#__PURE__*/
function (_Component) {
  _inherits(ComputerKeyboard, _Component);

  function ComputerKeyboard() {
    _classCallCheck(this, ComputerKeyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComputerKeyboard).apply(this, arguments));
  }

  _createClass(ComputerKeyboard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-keyboard row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-keyboard-text col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "key one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "key two")));
    }
  }]);

  return ComputerKeyboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ComputerKeyboard);

/***/ }),

/***/ "./src/components/ComputerMonitor.js":
/*!*******************************************!*\
  !*** ./src/components/ComputerMonitor.js ***!
  \*******************************************/
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




var ComputerMonitor =
/*#__PURE__*/
function (_Component) {
  _inherits(ComputerMonitor, _Component);

  function ComputerMonitor() {
    _classCallCheck(this, ComputerMonitor);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComputerMonitor).apply(this, arguments));
  }

  _createClass(ComputerMonitor, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-monitor row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-computer-monitor-text col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "line one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "line two")));
    }
  }]);

  return ComputerMonitor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ComputerMonitor);

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
/* harmony import */ var _ComputerMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerMonitor */ "./src/components/ComputerMonitor.js");
/* harmony import */ var _ComputerKeyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerKeyboard */ "./src/components/ComputerKeyboard.js");
/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Index.css */ "./src/css/Index.css");
/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Index_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






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
        className: "index-computer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComputerMonitor__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComputerKeyboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
exports.push([module.i, ".index-computer {\n    margin-top: 5%;\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.index-computer-monitor {\n    background: url(" + escape(__webpack_require__(/*! ../images/computer.svg */ "./src/images/computer.svg")) + ");\n    background-repeat: no-repeat;\n    height: 70vh;\n}\n\n.index-computer-keyboard {\n    background: url(" + escape(__webpack_require__(/*! ../images/keyboard2.svg */ "./src/images/keyboard2.svg")) + ");\n    background-repeat: no-repeat;\n    height: 20vh;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbXB1dGVyS2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcHV0ZXJNb25pdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZGV4UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvSW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcHV0ZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMva2V5Ym9hcmQyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZXNjYXBlIiwidXJsIiwidGVzdCIsInNsaWNlIiwicmVwbGFjZSIsIkFwcCIsIkluZGV4UGFnZSIsIkJsb2ciLCJOb3RGb3VuZFBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbXB1dGVyS2V5Ym9hcmQiLCJDb21wdXRlck1vbml0b3IiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiYXBwIiwiRXhwcmVzcyIsInNlcnZlciIsIlNlcnZlciIsInNldCIsInBhdGgiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJzdGF0aWMiLCJnZXQiLCJyZXEiLCJyZXMiLCJtYXJrdXAiLCJzdGF0dXMiLCJjb250ZXh0IiwicmVuZGVyVG9TdHJpbmciLCJyZWRpcmVjdCIsImlzNDA0IiwicmVuZGVyIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaW5mbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7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QUFHLEVBQWhCO0FBQ0FGLFFBQU0sR0FBR0csdUVBQWMsQ0FDckIsMkRBQUMsNkRBQUQ7QUFBYyxZQUFRLEVBQUVMLEdBQUcsQ0FBQ3pCLEdBQTVCO0FBQWlDLFdBQU8sRUFBRTZCO0FBQTFDLEtBQ0UsMkRBQUMsdURBQUQsT0FERixDQURxQixDQUF2QixDQUx5QixDQVl6Qjs7QUFDQSxNQUFJQSxPQUFPLENBQUM3QixHQUFaLEVBQWlCO0FBQ2YsV0FBTzBCLEdBQUcsQ0FBQ0ssUUFBSixDQUFhLEdBQWIsRUFBa0JGLE9BQU8sQ0FBQzdCLEdBQTFCLENBQVA7QUFDRDs7QUFHRCxNQUFJNkIsT0FBTyxDQUFDRyxLQUFaLEVBQW1CO0FBQ2pCSixVQUFNLEdBQUcsR0FBVDtBQUNEOztBQUdELFNBQU9GLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQSxNQUFYLEVBQW1CSyxNQUFuQixDQUEwQixPQUExQixFQUFtQztBQUFFTixVQUFNLEVBQU5BO0FBQUYsR0FBbkMsQ0FBUDtBQUNELENBeEJELEUsQ0EwQkE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTU8sSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQztBQUNBcEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjSixJQUFkLEVBQW9CLFVBQUNLLEdBQUQsRUFBUztBQUMzQixNQUFJQSxHQUFKLEVBQVM7QUFDUCxXQUFPQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsT0FBTyxDQUFDRSxJQUFSLENBQ0wsZ0JBREssQ0FBUDtBQUVELENBTkQsRTs7Ozs7Ozs7Ozs7O0FDbkRBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIuanNcIik7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuL0luZGV4UGFnZSc7XG5pbXBvcnQgQmxvZyBmcm9tICcuL0Jsb2cnO1xuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL05vdEZvdW5kUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0luZGV4UGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ibG9nXCIgY29tcG9uZW50PXtCbG9nfSAvPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGgxPiBCbG9nIEhlYWRlciA8L2gxPlxuICAgIFx0XHQ8ZGl2PiBUaGlzIGlzIGEgc3RvcnkgPC9kaXY+XG4gICAgXHQ8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY3NzL0luZGV4LmNzcyc7XG5cbmNsYXNzIENvbXB1dGVyS2V5Ym9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcbiAgICBcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbXB1dGVyLWtleWJvYXJkIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtY29tcHV0ZXIta2V5Ym9hcmQtdGV4dCBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5rZXkgb25lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+a2V5IHR3bzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHV0ZXJLZXlib2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jc3MvSW5kZXguY3NzJztcblxuY2xhc3MgQ29tcHV0ZXJNb25pdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG4gICAgXHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1jb21wdXRlci1tb25pdG9yIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtY29tcHV0ZXItbW9uaXRvci10ZXh0IGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmxpbmUgb25lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bGluZSB0d288L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB1dGVyTW9uaXRvcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXB1dGVyTW9uaXRvciBmcm9tICcuL0NvbXB1dGVyTW9uaXRvcic7XG5pbXBvcnQgQ29tcHV0ZXJLZXlib2FyZCBmcm9tICcuL0NvbXB1dGVyS2V5Ym9hcmQnO1xuaW1wb3J0ICcuLi9jc3MvSW5kZXguY3NzJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG4gICAgXHRyZXR1cm4gKFxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LW1haW4tY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbXB1dGVyXCI+XG5cdFx0XHRcdFx0PENvbXB1dGVyTW9uaXRvci8+XG5cdFx0XHRcdFx0PENvbXB1dGVyS2V5Ym9hcmQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3QtZm91bmRcIj5cbiAgICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICAgIDxoMj5QYWdlIG5vdCBmb3VuZCE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleC1jb21wdXRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG59XFxuXFxuLmluZGV4LWNvbXB1dGVyLW1vbml0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9jb21wdXRlci5zdmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5pbmRleC1jb21wdXRlci1rZXlib2FyZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2tleWJvYXJkMi5zdmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0Nqd2hMUzBnUTNKbFlYUmxaQ0IzYVhSb0lFbHVhM05qWVhCbElDaG9kSFJ3T2k4dmQzZDNMbWx1YTNOallYQmxMbTl5Wnk4cElDMHRQZ29LUENFdExRb2dJQ0IzYVdSMGFEMGlNVEV6TGpJeE9EVXpiVzBpQ2lBZ0lHaGxhV2RvZEQwaU1UQXpMak16TkRrMGJXMGlDaTB0UGdvS1BITjJad29nSUNCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpQ2lBZ0lIaHRiRzV6T21OalBTSm9kSFJ3T2k4dlkzSmxZWFJwZG1WamIyMXRiMjV6TG05eVp5OXVjeU1pQ2lBZ0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SUtJQ0FnZUcxc2JuTTZjM1puUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJQ0I0Yld4dWN6cHpiMlJwY0c5a2FUMGlhSFIwY0RvdkwzTnZaR2x3YjJScExuTnZkWEpqWldadmNtZGxMbTVsZEM5RVZFUXZjMjlrYVhCdlpHa3RNQzVrZEdRaUNpQWdJSGh0Ykc1ek9tbHVhM05qWVhCbFBTSm9kSFJ3T2k4dmQzZDNMbWx1YTNOallYQmxMbTl5Wnk5dVlXMWxjM0JoWTJWekwybHVhM05qWVhCbElnb2dJQ0J3Y21WelpYSjJaVUZ6Y0dWamRGSmhkR2x2UFNKdWIyNWxJZ29nSUNCMmFXVjNRbTk0UFNJd0lEQWdNVEV6TGpJeE9EVXpJREV3TXk0ek16UTVOQ0lLSUNBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUNCcFpEMGljM1puT0NJS0lDQWdhVzVyYzJOaGNHVTZkbVZ5YzJsdmJqMGlNQzQ1TWk0eUlEVmpNMlU0TUdRc0lESXdNVGN0TURndE1EWWlDaUFnSUhOdlpHbHdiMlJwT21SdlkyNWhiV1U5SW1OdmJYQjFkR1Z5TG5OMlp5SUtJQ0FnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlJK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jeklpUGdvZ0lDQWdQR1pwYkhSbGNnb2dJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXNiR1ZqZEQwaVlXeDNZWGx6SWdvZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenB6VWtkQ0lnb2dJQ0FnSUNBZ2FXUTlJbVpwYkhSbGNqVTNNalFpUGdvZ0lDQWdJQ0E4Wm1WQ2JHVnVaQW9nSUNBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjJ4c1pXTjBQU0poYkhkaGVYTWlDaUFnSUNBZ0lDQWdJRzF2WkdVOUltTnZiRzl5TFdKMWNtNGlDaUFnSUNBZ0lDQWdJR2x1TWowaVFtRmphMmR5YjNWdVpFbHRZV2RsSWdvZ0lDQWdJQ0FnSUNCcFpEMGlabVZDYkdWdVpEVTNNallpSUM4K0NpQWdJQ0E4TDJacGJIUmxjajRLSUNBOEwyUmxabk0rQ2lBZ1BITnZaR2x3YjJScE9tNWhiV1ZrZG1sbGR3b2dJQ0FnSUdsa1BTSmlZWE5sSWdvZ0lDQWdJSEJoWjJWamIyeHZjajBpSTJabVptWm1aaUlLSUNBZ0lDQmliM0prWlhKamIyeHZjajBpSXpZMk5qWTJOaUlLSUNBZ0lDQmliM0prWlhKdmNHRmphWFI1UFNJeExqQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmNHRm5aVzl3WVdOcGRIazlJakF1TUNJS0lDQWdJQ0JwYm10elkyRndaVHB3WVdkbGMyaGhaRzkzUFNJeUlnb2dJQ0FnSUdsdWEzTmpZWEJsT25wdmIyMDlJakF1TkRBMk1qSTRPVFlpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZZM2c5SWpNNE55NHpOamM1T0NJS0lDQWdJQ0JwYm10elkyRndaVHBqZVQwaUxURTJNUzQxTmpreE9TSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwa2IyTjFiV1Z1ZEMxMWJtbDBjejBpYlcwaUNpQWdJQ0FnYVc1cmMyTmhjR1U2WTNWeWNtVnVkQzFzWVhsbGNqMGliR0Y1WlhJeE1pSUtJQ0FnSUNCemFHOTNaM0pwWkQwaVptRnNjMlVpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xYZHBaSFJvUFNJeE1UVXlJZ29nSUNBZ0lHbHVhM05qWVhCbE9uZHBibVJ2ZHkxb1pXbG5hSFE5SWpZMk9TSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0ZUQwaU1UTWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFhrOUlqWTNJZ29nSUNBZ0lHbHVhM05qWVhCbE9uZHBibVJ2ZHkxdFlYaHBiV2w2WldROUlqQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmJXVmhjM1Z5WlMxemRHRnlkRDBpT0RNdU1qRTBNeXc0TWprdU5qUXpJZ29nSUNBZ0lHbHVhM05qWVhCbE9tMWxZWE4xY21VdFpXNWtQU0l4TURBdU56RTBMRGMyTVM0d056RWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmMyNWhjQzFuYkc5aVlXdzlJblJ5ZFdVaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxMGIzQTlJakFpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTFzWldaMFBTSXdJZ29nSUNBZ0lHWnBkQzF0WVhKbmFXNHRjbWxuYUhROUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMWliM1IwYjIwOUlqQWlJQzgrQ2lBZ1BHMWxkR0ZrWVhSaENpQWdJQ0FnYVdROUltMWxkR0ZrWVhSaE5TSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR2NLSUNBZ0lDQnBibXR6WTJGd1pUcG5jbTkxY0cxdlpHVTlJbXhoZVdWeUlnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFd0lnb2dJQ0FnSUdsdWEzTmpZWEJsT214aFltVnNQU0pNWVhsbGNpQTJJZ29nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaU0lLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TWk0MU1EZzRPRGc0TEMweUxqUXhOalUwTXpVcElqNEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVpHbHpjR3hoZVRwcGJteHBibVU3YjNCaFkybDBlVG94TzJacGJHdzZJMlExWkRGaFl6dG1hV3hzTFc5d1lXTnBkSGs2TVR0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNDNNakEwTnprd01YQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJREV3Tnk0ek5UVXlMRGM0TGpFeU56azFNeUJqSURBdU16SXdNRFFzTFRNdU5UYzJPRGNnTkM0eE16ZzFMQzAwTGpnMk16Z3lJRFV1T0RFd09EZ3NMVGN1TXprd01UTWdNeTR3TURjMUxDMHlMakl6TURVNElERXVPVEExTURjc0xUUXVPRFF3TURRZ01pNHhPVEkyTnl3dE9DNHpPREF6TmlBdE1DNHdNamswTEMwNExqSTRORGt5SURBdU1UUTFNVFVzTFRFMkxqWXdOekkwTXlBdE1DNHpNalV4TEMweU5DNDRNemt6TmlBdE1DNDVNRGd4TXl3dE5TNHhORFV4TVRrZ0xUQXVOamcyTmpVc0xURXdMalEyTnpjZ0xURXVNVE1zTFRFMUxqWTNPREl4T1NBd0xqRTNNVEF6TEMwekxqUTROalk1T1NBdE1DNDFNRGszTnl3dE55NHlOamcwTkRZZ01DNDNNamMxTlN3dE1UQXVORGt4T0RRM0lDMHlMalk1TnprMExEQXVNelU0TkRZM0lDMDBMamt3TkRnMUxDMHhMak14TWpJeE15QXROeTQwTlRnNU9Dd3RNUzR5TnpNMk1Ua2lDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhOakVpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSmthWE53YkdGNU9tbHViR2x1WlR0bWFXeHNPaU5rTldReFlXTTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVOekl3TlRNeE5qUndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0E0TlM0eE5UUTJNVGNzT1RZdU16WTVNemd6SUdNZ01DNDFNakV3T1N3ekxqSTBPRGswSURFdU5UWTVOVElzTWk0eE9ETTNOeUF3TGpVMk5qa3NOUzR5T1RrNU5EY2dMVE11TWpFMU9EWXNNQzQ0TlRFek9TQXROaTQxTVRnek5pd3lMakU1TmpFZ0xURXdMakl4T1RFeUxESXVNekUxTWpRZ0xUVXVORE0zTlRZc01DNHpOalkwTnlBdE1UQXVPRFk1TnpRc01TNHlOalk1TnlBdE1UWXVNelkzTURJc01TNHlPRGt5TXlBdE5DNDBPVEk1T0N3d0xqVXpOakk1SUMwNExqUTROREkyTEMwd0xqazVOekU1SUMweE15NHdORE0wTnpjc0xUQXVOVGM1TVRJZ0xUUXVPVGMwT1RJekxEQXVNekkxTVRFZ0xURXlMamc1TVRRNU5Dd3RNUzR5TkRJMk1pQXRNVFF1TmpFMU5UUXlMQzB4TGpnME9UVXpJQzAwTGpFd01EVTVMQzB3TGpJNU1UVTVJQzAyTGpBeU9USXdPU3d0TXk0NU5qa3pOemNnTFRRdU1qYzBORGN4TEMwMkxqazNOVGd3TnlJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRJd01TSUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpQ2lBZ0lDQWdJQ0J6YjJScGNHOWthVHB1YjJSbGRIbHdaWE05SW1OalkyTmpZMk1pSUM4K0NpQWdQQzluUGdvZ0lEeG5DaUFnSUNBZ2FXNXJjMk5oY0dVNlozSnZkWEJ0YjJSbFBTSnNZWGxsY2lJS0lDQWdJQ0JwWkQwaWJHRjVaWEk1SWdvZ0lDQWdJR2x1YTNOallYQmxPbXhoWW1Wc1BTSk1ZWGxsY2lBMUlnb2dJQ0FnSUhOMGVXeGxQU0prYVhOd2JHRjVPbWx1YkdsdVpTSUtJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNaTQxTURnNE9EZzRMQzB5TGpReE5qVTBNelVwSWo0S0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNCemRIbHNaVDBpWkdsemNHeGhlVHBwYm14cGJtVTdabWxzYkRvalpEVmtNV0ZqTzJacGJHd3RiM0JoWTJsMGVUb3hPM04wY205clpUb2pNREF3TURBd08zTjBjbTlyWlMxM2FXUjBhRG93TGpjeU1EVXpNVFkwY0hnN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzl3WVdOcGRIazZNU0lLSUNBZ0lDQWdJR1E5SW0wZ016SXVNemcxT1RnMUxEa3hMalU1TXpNek15QmpJQzB4TGpJM056azNOaXd4TGpjeU56azNJQzA1TGpBeU9UWTRNU3cxTGpBMU5TQXRNeTQxTVRReE9Ea3NOUzR5TnpjM09DQTBMakl3TURVek5Dd3hMakkzTmpFeUlEZ3VOVEV6TkRVNExESXVOVFV4TmpjZ01UTXVNVGN5TkN3eUxqYzVOVFF5SURZdU5UZ3lNRFl4TEMwd0xqRTROREEzSURFeUxqazVOVGc0TVN3eExqRXpNRE13TnlBeE9TNDFPVEUxTURFc01DNDROREk1T1RjZ05TNHpNamt4T1N3dE1DNHhNalEwSURFd0xqWTJPREU1TEMwd0xqVTROamcwTnlBeE5TNDVOalE0T1N3dE1TNHdORFF5TURjZ015NHhOVGc0TVN3dE1TNHdNemcwSURZdU9UVTVNemNzTVM0eE9EQTBOemNnTlM0ME5qQXhPU3d0TXk0eU56YzVOaUlLSUNBZ0lDQWdJR2xrUFNKd1lYUm9OVEU1T1NJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlDaUFnSUNBZ0lDQnpiMlJwY0c5a2FUcHViMlJsZEhsd1pYTTlJbU5qWTJOall5SWdMejRLSUNBOEwyYytDaUFnUEdjS0lDQWdJQ0JwYm10elkyRndaVHBuY205MWNHMXZaR1U5SW14aGVXVnlJZ29nSUNBZ0lHbGtQU0pzWVhsbGNqY2lDaUFnSUNBZ2FXNXJjMk5oY0dVNmJHRmlaV3c5SWt4aGVXVnlJRE1pQ2lBZ0lDQWdjM1I1YkdVOUltUnBjM0JzWVhrNmFXNXNhVzVsSWdvZ0lDQWdJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0MweUxqVXdPRGc0T0Rnc0xUSXVOREUyTlRRek5Ta2lQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSmthWE53YkdGNU9tbHViR2x1WlR0bWFXeHNPaU5rTldReFlXTTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVOekl3TlRNeE5qUndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0E0TGpFek1qSTNORGNzT0RRdU16QTNPRFV6SUdNZ01TNHhNREUwTWpZc01TNDRORE16TkNBdE1TNHhNemt4T1Rnc05pNDFORFF4TVNBeExqVTBOVE14T1N3MkxqWXdOVGsySURFdU1qY3lNelkyTXl3d0xqSXhNamMwSURZdU9EYzBOVGswTXl3d0xqZzJPRGt5SURrdU9UYzBNalEzTXl3d0xqZzJNVFV4SURjdU1qRXlPVE16TERBdU1EY3lPQ0F4TkM0MU5qVTVNalFzTFRBdU1UY3lPVFlnTWpFdU5qVXdOVGt4TERBdU1UZ3hPVFFnTkM0MU1URXdPVFVzTVM0eE9UYzVOU0E1TGpRME1UazFOU3d3TGpNek5EQXpJREUwTGpBMk9ERXdOU3d4TGpVME9UZzJJRFV1TkRVek15d3RNQzR3TWpVZ01UQXVOamszT0RJc01TNDJORFE0TXlBeE5pNHhNemN5TERFdU9UQTNORGtnTXk0NU16Z3pOQ3d4TGpjNE1ETTFJRGd1TmpBNE5UTXNNQzQ0TmpNeU5pQXhNaTQ1TWpJNU5Td3hMakE1TVRjM0lETXVPREF6Tnl3d0xqQTNOalVnTnk0MU9UazJNU3d0TUM0M05USXpNU0F4TVM0eU5qSTFNaXd0TVM0MU56WXdOQ0F5TGprNU5qUTJMQzB5TGpReU9USTRJRFl1T1RNek16QXpMQzB6TGpVeE5UY2dNVEF1TXpVMk5ETXpMQzAxTGpBMk9ETXhJQzB4TGpReE16ZzBMQzB4TGpVME1qZ3lJQzB3TGpBNU1qWXNMVGd1TXpreE5pQXRNaTQyT1RZNU1Td3ROUzQ1TVRFeU1TSUtJQ0FnSUNBZ0lHbGtQU0p3WVhSb05URTROeUlLSUNBZ0lDQWdJR2x1YTNOallYQmxPbU52Ym01bFkzUnZjaTFqZFhKMllYUjFjbVU5SWpBaUlDOCtDaUFnSUNBOGNHRjBhQW9nSUNBZ0lDQWdjM1I1YkdVOUltUnBjM0JzWVhrNmFXNXNhVzVsTzJacGJHdzZJMlExWkRGaFl6dG1hV3hzTFc5d1lXTnBkSGs2TVR0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNDNNemswTlRNM00zQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJRGs1TGpRNE1qY3hOeXd6TGpVeE1EWXdORFVnWXlBMExqRXlNVFk1TXl3d0xqVXpORGcxTXlBNUxqTXlPVGcyTXl3dE1DNDNNRFF3T1RFZ055NDVNRFV4TmpNc05TNHhOelEyT1RZZ0xUQXVNVEl5TlRVc05pNHhNemd6TkRFMUlEQXVOalUzTnpVc01USXVNalV3TVRrNU5TQXRNQzR5TURJMk1Td3hPQzR6TnpNMk1ERTFJREF1TWpjMk9ESXNOUzR5TURReU5qWWdMVEF1TVRnd09ETXNNVEV1T1RRNE16RXlJQzB3TGpFM09UUTNMREUxTGpVeE1UVXdPU0F0TUM0eU1EYzNPQ3czTGpZME1UTTJPQ0F3TGpBM056WXNNVFV1TWprMk56VXlJREF1TWpJeE5Dd3lNaTQ1TlRJNE16SWdNQzQwTkRjeE1Td3pMamsyT0RVeUlEQXVOakkxTURnc09DNHdNalUzTmlBd0xqVTJNRGcyTERFeUxqRTJPVEV6SURJdU16Y3lPVElzTlM0eE5EUTNOeUF0TlM0eE1EUXlNaXcxTGpFMU1UQTNJQzAyTGpjNE5UTXlMRGt1TWpjMU16RWdMVEF1TURBNExEQXVOamN6TWpnZ0xURXVNRE0wTXpZekxEQXVOVE0wTmpJZ0xUQXVPVGMzTkRjc01TNDBOVEl6TlNJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFMU9TSUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpQ2lBZ0lDQWdJQ0J6YjJScGNHOWthVHB1YjJSbGRIbHdaWE05SW1OalkyTmpZMk5qSWlBdlBnb2dJRHd2Wno0S0lDQThad29nSUNBZ0lHbHVhM05qWVhCbE9teGhZbVZzUFNKTVlYbGxjaUF4SWdvZ0lDQWdJR2x1YTNOallYQmxPbWR5YjNWd2JXOWtaVDBpYkdGNVpYSWlDaUFnSUNBZ2FXUTlJbXhoZVdWeU1TSUtJQ0FnSUNCemRIbHNaVDBpWkdsemNHeGhlVHBwYm14cGJtVWlDaUFnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEl1TlRBNE9EZzRPQ3d0TWk0ME1UWTFORE0xS1NJK0NpQWdJQ0E4Y21WamRBb2dJQ0FnSUNBZ2FXUTlJbkpsWTNRek56RTRJZ29nSUNBZ0lDQWdkMmxrZEdnOUlqWTRMalF4TXpZNE9TSUtJQ0FnSUNBZ0lHaGxhV2RvZEQwaU5EUXVPREl5TXpRMklnb2dJQ0FnSUNBZ2VEMGlORFF1TnpVeU16ZzRJZ29nSUNBZ0lDQWdlVDBpTWpVdU9URTFORGMySWdvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NmJtOXVaVHR6ZEhKdmEyVXRkMmxrZEdnNk1DNHlOems1TWpJMU1pSWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlaR2x6Y0d4aGVUcHBibXhwYm1VN2IzQmhZMmwwZVRveE8yWnBiR3c2STJRMVpERmhZenRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNkl6QXdNREF3TUR0emRISnZhMlV0ZDJsa2RHZzZNQzQzTWpBMU16RTJOSEI0TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXZjR0ZqYVhSNU9qRWlDaUFnSUNBZ0lDQmtQU0p0SURnMkxqY3dNelV3Tnl3eUxqYzRNelEyTkRVZ1l5QXRNQzQyT0RFMU5Td3dMakF4TkRReklDMHhMak0xT1RNeUxEQXVNRGd6TWpJZ0xUSXVNRE15TVRJc01DNHlNamt6T0RFZ0xUSXVORFUyTmprc01DNHdOekF3TVNBdE5DNDFOVGt4TWl3d0xqTTJOak0yTmlBdE55NHpNVE0yT0N3d0xqSXpOVEF4T0NBdE1pNDROelU1TXl3d0xqRXlOVFUwTWlBdE5pNHlNVFF6Tml3dE1DNHlOemcxTURZZ0xUZ3VOelV4T1RNc01DNHlOVGMxTXprZ0xUY3VNelE0T1RNc0xUQXVNRFEwTlRNZ0xURTBMalk1TVRnM0xEQXVNREkxTXpNZ0xUSXlMakF5TlRRMk9Td3dMakkwT1RBNU9DQXROaTR3TURZNE56a3NNQzQzTVRZNU56RWdMVEV5TGpFNU1qUXhNeXd0TUM0ME1UTTVOek1nTFRFNExqRXhOelF6TERFdU1EazNOamcwSUMwMExqSTNNekF5Tnl3d0xqUTROVGt5TkNBdE9DNDJOVGcwTnpJc0xUQXVNVFV5TWpNeElDMHhNaTQ1TXpBeE5qVXNNQzQwT1RneE56a2dMVEl1T1RjNE5qQTJMQzB3TGpFek5UazBOaUF0Tmk0M01qTTRPVFF6TEMwd0xqY3dNelEwTWlBdE9TNHlNREl5TmpVekxDMHdMalUxT0RZNU15QXRNQzR5TkRNME5pd3pMalU1TmpVM09TQXdMalV3T1RNM05DdzJMamt3TlRFME5qVWdNQzR5T0RVMk9EVXNNVEF1TlRFMU1qWXlOU0F0TUM0Mk5EazBORFlzTkM0Mk1ESXpOallnTUM0eE5qQXdORFlzT1M0ME1qVTBNRFFnTFRFdU1URTFPVGd5TERFMExqQXdNVEV4TWlBdE1DNDRNRFkzTmpRc05TNDBNRFkyTVNBdE1DNHpNak0xTWpVc01UQXVPVE14TWpJNElDMHdMalExTlRrMkxERTJMalF3TURVME1pQXdMakExT1RNM0xEVXVNekl6TmpFZ01DNHhPRFV6TVRnc01UQXVOelE1TkRjMklERXVNRE13TVRNNUxERTJMakE0T1RVeU5pQXdMakEzTVRZeUxEWXVNVEl6TXpFZ0xUQXVNakF4TURVNUxERXlMak14TlRjZ01DNHlOVGMxTkN3eE9DNHpOamM1TXlBdE1TNHdPREEzTmpJc05DNHlNVGd4SURJdU1EVTNOamdzTkM0NE1Ua3hOaUExTGpZMk1UVXhPVE1zTlM0ME1qYzVJRFV1TlRnMU1EY3hMREV1TXpJNU56Y2dNVEV1TkRNeU9EVTNMREF1TWpRME9Ua2dNVGN1TURjd05ERXhMREV1TlRNMk56Y2dPUzQ0T0RNd01UVXNNQzQzT1RnMk5TQXhPUzQ0TXpJME9UY3NNQzQwTkRjd05TQXlPUzQzTmpReE5EY3NNQzQxTWpJeElETXVOREU1TkRjc01DNDBNekEwTVNBMkxqZzVPREkzTERBdU1UZzBPREVnTVRBdU16RTFORE1zTUM0MU1UVXdOeUEyTGpFME1EWTNMREF1TkRjME1qZ2dNVEl1TXpNMU56VXNNQzR4TnpJNU5pQXhPQzQxTURVNE5Dd3dMakkxTnpVMElESXVOakk1TXpjc01DNDFOREF5SURVdU56WXhOallzTUM0eE1qWTVNeUE0TGpZd05UVTNMREF1TWpVM05UUWdOQzQzT1RVMk1qTXNNUzR3T1RjMU5TQXpMamd6TWpNNU15d3RNeTQ1TkRFME5DQXpMamMwTmpJd015d3ROeTR4T0RFek9TQXdMakEyTWpZc0xUZ3VNREkzTlRrZ0xUQXVNalU1TVRjekxDMHhOaTR3T0RZM01pQXdMalV4TlRBM0xDMHlOQzR3TkRreE5TQTNMakpsTFRRc0xUVXVOVGd3T0RZNElDMHdMakE1TURnc0xURXhMakUzTmpjME9DQXdMakkxTmpFeUxDMHhOaTQzTURNeE1USWdNQzQxTURFeU1pd3ROUzQyTURVeE9UWWdNQzR4TlRNMU1Td3RNVEV1TWpjMk9UUXhJREF1TWpVM05UUXNMVEUyTGpreE5ERTVPU0F0TUM0NU1UWXpPQ3d0TXk0MU9UZzRNek1nTFRFdU5URXdNemd6TEMwM0xqSXhNVE0wT0NBdE1TNHlPRFl5TmpNc0xURXhMakEyTkRFd05DQXdMakF6T0RFc0xUTXVNRGs1TURZek5TQXdMakF4TmpFc0xUWXVNVGt5TVRZME5TQXRNQzR5TlRjMU5Dd3RPUzR5TmpVMU9ETTFJQzAwTGpBMk5EazFMREV1TURneU5Ea3hJQzA0TGpFME5qRTFMQzB3TGpZd05UWTJNU0F0TVRJdU1EazVPRFVzTFRBdU56RTVNVEl6SUMwd0xqSXlPREV4TEMwd0xqQXdOalVnTFRBdU5EVTFNellzTFRBdU1EQTNOaUF0TUM0Mk9ESTFOQ3d0TUM0d01ESTNJSG9pQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4TlRjaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lEd3ZaejRLSUNBOFp3b2dJQ0FnSUdsdWEzTmpZWEJsT21keWIzVndiVzlrWlQwaWJHRjVaWElpQ2lBZ0lDQWdhV1E5SW14aGVXVnlNaUlLSUNBZ0lDQnBibXR6WTJGd1pUcHNZV0psYkQwaVRHRjVaWElnTWlJS0lDQWdJQ0J6ZEhsc1pUMGlaR2x6Y0d4aGVUcHBibXhwYm1VaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUSXVOVEE0T0RnNE9Dd3RNaTQwTVRZMU5ETTFLU0krQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3Nkl6WTJOalkyTmp0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01ESTJPRE14TlhCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElERXdOeTQwTVRVd09Dd3hOQzR6TURZMU16RWdZeUF3TERBZ01TNDNPRGswTml3d0xqUTFPRE13TWlBekxqWTJNVEkxTERBdU5qTXpNekF5SURFdU1qYzRPRElzTUM0eE1UazFOVElnTWk0eE56SXpPQ3d0TUM0d01UVXlOU0F5TGpneU56azFMREF1T1RVM05UTXlJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzFNVFl6SWdvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSUtJQ0FnSUNBZ0lITnZaR2x3YjJScE9tNXZaR1YwZVhCbGN6MGlZM05qSWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPaU0yTmpZMk5qWTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVOekl3TlRNeE5qUndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0F4TURjdU1UY3lNalVzTVRndU1EZ3dOemt5SUdNZ01pNHlPRFUyTkN3d0xqTTVOVEl3TnlBMUxqRTBNVFkzTERFdU16RXpOems0SURZdU9URTBNVEVzTWk0eE9ETTJNamNpQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4TmpVaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTTJOalkyTmpZN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56QTNNamcwTWpkd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNRGN1TURnd01UVXNNak11TnpJeE5qQTJJR01nTWk0ME5qWTBOQ3d0TUM0eU1qRTRPVElnTkM0Mk16QTROaXd4TGpNME9UWXhOeUEzTGpFNE9EZ3pMREV1TURreE9ERTBJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzFNVFkzSWdvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvak5qWTJOalkyTzJacGJHd3RiM0JoWTJsMGVUb3hPM04wY205clpUb2pNREF3TURBd08zTjBjbTlyWlMxM2FXUjBhRG93TGpjd056Z3pPVGcxY0hnN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzl3WVdOcGRIazZNU0lLSUNBZ0lDQWdJR1E5SW0wZ01UQTNMakEyTlRZekxESTRMalE1Tnpjd01TQmpJREl1T0RVMk16TXNNUzR6TnpZNE5pQXpMakkzTmpjNExERXVNelF3TmpFeElEY3VNemszTURZc01TNDBORFF5TlRZaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE5qa2lDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWdvZ0lDQWdJQ0FnYzI5a2FYQnZaR2s2Ym05a1pYUjVjR1Z6UFNKall5SWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRwdWIyNWxPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMamN5TURVek1UWTBjSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTVRBMkxqazVNREk0TERNekxqTTJOVFUzT0NCaklESXVNelU0T0RFc0xUQXVNRGczTWpVZ05DNDRNRGM0T0N3d0xqRTVOekU1TWlBM0xqQTVNVGM0TEMwd0xqRTVOekF5T1NBd0xqVTNNREE0TEMwd0xqVTFOVFUyTmlBd0xqUTBNamc0TEMweExqUTNNRGt4TkNBd0xqTTJOemcxTEMweUxqRTJPRFV5T0NJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFM01TSUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpSUM4K0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZibTl1WlR0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01EQXlPVFl4Y0hnN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzl3WVdOcGRIazZNU0lLSUNBZ0lDQWdJR1E5SW0wZ01UQTNMakEzT1RnMUxETTVMakF3TmpNNU1pQmpJRE11TlRZMk1UVXNMVEF1TWpjM01USXpJRE11TWpVeU1Td3dMakkzTnpBeU1pQTNMamN6TkRnM0xDMHhMamd4T1RjME15SUtJQ0FnSUNBZ0lHbGtQU0p3WVhSb05URTNNeUlLSUNBZ0lDQWdJR2x1YTNOallYQmxPbU52Ym01bFkzUnZjaTFqZFhKMllYUjFjbVU5SWpBaUNpQWdJQ0FnSUNCemIyUnBjRzlrYVRwdWIyUmxkSGx3WlhNOUltTmpJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTTJOalkyTmpZN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU5qazNOekl3T0ROd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNRFl1T0RBMk56TXNORFF1TkRZMU1qUWdZeUF6TGpNd01qTXlMREF1TWpVMU5UVXhJRFV1TWpNMU9UZ3NMVEl1TlRBMk5qYzNJRGd1TVRrd01EY3NMVE11TWpjMU16STFJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzFNVGMxSWdvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRwdWIyNWxPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMamN3TXpRMU56RXljSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTVRBMkxqZ3dOemM1TERRNExqa3lOemMyT1NCaklESXVPRGc0TVRrc0xURXVORFUxTlRZNUlEa3VOamczT1RVc0xUTXVNVGszTkRVeklEZ3VNVGc1TURFc0xUY3VOek0zT0RVMElnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UYzNJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJS0lDQWdJQ0FnSUhOdlpHbHdiMlJwT201dlpHVjBlWEJsY3owaVkyTWlJQzgrQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3Nkl6WTJOalkyTmp0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0M01qQTFNekUyTkhCNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakVpQ2lBZ0lDQWdJQ0JrUFNKdElERXdOaTQ0TURnek5DdzFOUzR3TVRrd01qTWdZeUF6TGpJeU1EazNMQzB4TGpJeU1qY2dOUzR5TVRNeU5pd3ROQzQwTXpRNE9UWWdPQzQxTlRFMk9Td3ROUzQyTkRBNU1qWWlDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhOemtpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lpQXZQZ29nSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJSE4wZVd4bFBTSm1hV3hzT201dmJtVTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVOekl3TlRNeE5qUndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0F4TURZdU9EQTRNelFzTmpFdU5UWTVOalF6SUdNZ015NDJOelF4T0N3dE1DNDBORFk1SURVdU5EQTNNVFlzTFRVdU1URXdOVFFnT0M0eU5ETTRNeXd0Tmk0eU1UUTJPQ0JzSURBdU1qQTJORElzTFRBdU1UWTJOU0F3TGpFd01UZzFMQzB3TGpFMk9UVXlJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzFNVGd4SWdvZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSWdMejRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvak5qWTJOalkyTzJacGJHd3RiM0JoWTJsMGVUb3hPM04wY205clpUb2pNREF3TURBd08zTjBjbTlyWlMxM2FXUjBhRG93TGpjeU1EVXpNVFkwY0hnN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzl3WVdOcGRIazZNU0lLSUNBZ0lDQWdJR1E5SW0wZ01UQTNMamN4T0RFekxEWTJMalE0TWpZeE15QmpJRE11TURNd05Ua3NMVEV1TnpRd09EZ2dOQzQzTnpZeU5pd3ROQzQwTlRJeklEY3VORFU1TlRVc0xUWXVOVFV3TmpRaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE9ETWlDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPbTV2Ym1VN1ptbHNiQzF2Y0dGamFYUjVPakU3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNVFV1TVRjNE56SXNOVGt1T1RNeE9UY3pJR01nTUM0NE5qTTJMRFF1T0RjME5USWdMVE11TkRZNU1USXNOeTR3TkRVMU5DQXROaTR5TXpJeE1pd3hNQzR4TnpRNE1pQXRNQzR3T0RBeExEQXVOakV5TXpNZ0xURXVNRFkwTlRZc01DNDBOakE1TnlBdE1TNHdORFE1TERFdU1UQTJPVFFpQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4T0RVaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTm1NVEpqTURBN1ptbHNiQzF2Y0dGamFYUjVPakE3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQTVOQzQzT1RnNE5UY3NPRGd1TmpneE9UUXpJR01nTFRBdU9UWTVNVEVzTVM0ME1UazVOaUF4TGpReU9UWXNOeTQyTlRJMElEQXVNell6TlN3MkxqTTJPRGMxSWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cxTVRnNUlnb2dJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXVibVZqZEc5eUxXTjFjblpoZEhWeVpUMGlNQ0lnTHo0S0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNCemRIbHNaVDBpWm1sc2JEb2paakV5WXpBd08yWnBiR3d0YjNCaFkybDBlVG93TzNOMGNtOXJaVG9qTURBd01EQXdPM04wY205clpTMTNhV1IwYURvd0xqY3lNRFV6TVRZMGNIZzdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFc5d1lXTnBkSGs2TVNJS0lDQWdJQ0FnSUdROUltMGdOell1TnpnME5qUTNMRGc0TGpRNU9UazRNeUJqSURBdU1EYzVMREl1TmpZek56UWdMVEF1TVRnd09ETXNOUzR6T1RJMk9DQXdMakU0TVRreExEZ3VNREEyTXpJaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURVeE9URWlDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPaU5tTVRKak1EQTdabWxzYkMxdmNHRmphWFI1T2pBN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVOekl3TlRNeE5qUndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0EzT1M0Mk5UQTFNamNzT1RBdU1UTTNOalF6SUdNZ0xURXVNVEEyTURJc015NDBORFEzTlNBeUxqYzRORFkyTERFdU9EazRNeUEwTGpZNU5UUTNMREl1TWpJNU1pQXpMakV5TVRJMExERXVNakF3TlRFZ05TNHlPVE01TlN3dE1pNDJOakl6TnlBeExqRTNNakV5TEMweUxqSTNORFV6SUMweExqazBPVGcyTEMwd0xqQXpOamdnTFRNdU9USTBORFVzTFRBdU1UUXlPVFFnTFRVdU9EWTNOVGtzTUM0d05EVXpJSG9pQ2lBZ0lDQWdJQ0JwWkQwaWNHRjBhRFV4T1RNaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJaUF2UGdvZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUhOMGVXeGxQU0ptYVd4c09pTm1NVEpqTURBN1ptbHNiQzF2Y0dGamFYUjVPakE3YzNSeWIydGxPaU13TURBd01EQTdjM1J5YjJ0bExYZHBaSFJvT2pBdU56SXdOVE14TmpSd2VEdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQTNPQzQ1TWpJMk9EY3NPVEF1TURreU1UVXpJR01nTFRFdU5qSTVOU3cxTGpNeU5qRTBJRGN1TkRFME1qa3NNaTQzT0RBek9TQTVMamt3TlRRekxESXVOakEwTnpZZ01pNHdOVGM0TXl3dE5TNDJPREl3T0NBdE9DNDFNVGd5TXl3dE15NHpNek0zTnlBdE9TNDVPVFl5TXl3dE1pNHlOREUxTVNJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTlRFNU5TSUtJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tTnZibTVsWTNSdmNpMWpkWEoyWVhSMWNtVTlJakFpSUM4K0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZJMll4TW1Nd01EdG1hV3hzTFc5d1lXTnBkSGs2TUR0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNDNNakExTXpFMk5IQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJRE15TGpNNE5UazROU3c1TVM0MU9UTXpNek1nWXlBdE1TNHhNalV3T1RJc05TNHhPRFV6T0NBMUxqTTRPRFUyTERNdU16WTNPVFlnT0M0Mk56TXlPRFlzTkM0ek5qY3hNeUE1TGpBMU1qQXpOaXd3TGpBeU9UWWdNVGd1TVRJMU5qYzJMREF1TkRReU9UZ2dNamN1TVRjeE9EQTJMREFnTUM0M09EZzNOQ3d0TUM0d016ZzNJREl1TkRnM09Ea3NMVEF1TlRNek16SWdNeTR5TnpZMk5pd3RNQzQxTkRVNE5TSUtJQ0FnSUNBZ0lHbGtQU0p3WVhSb05URTVOeUlLSUNBZ0lDQWdJR2x1YTNOallYQmxPbU52Ym01bFkzUnZjaTFqZFhKMllYUjFjbVU5SWpBaUNpQWdJQ0FnSUNCemIyUnBjRzlrYVRwdWIyUmxkSGx3WlhNOUltTmpZMk1pSUM4K0NpQWdQQzluUGdvZ0lEeG5DaUFnSUNBZ2FXNXJjMk5oY0dVNlozSnZkWEJ0YjJSbFBTSnNZWGxsY2lJS0lDQWdJQ0JwWkQwaWJHRjVaWEl4TXlJS0lDQWdJQ0JwYm10elkyRndaVHBzWVdKbGJEMGlUR0Y1WlhJZ09TSUtJQ0FnSUNCemRIbHNaVDBpWkdsemNHeGhlVHBwYm14cGJtVWlDaUFnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEl1TlRBNE9EZzRPQ3d0TWk0ME1UWTFORE0xS1NJK0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2MzUjViR1U5SW1ScGMzQnNZWGs2YVc1c2FXNWxPMlpwYkd3Nkl6QXdNREF3TUR0bWFXeHNMVzl3WVdOcGRIazZNVHR6ZEhKdmEyVTZJekF3TURBd01EdHpkSEp2YTJVdGQybGtkR2c2TUM0eU5qUTFPRE16TW5CNE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF2Y0dGamFYUjVPakU3Wm1sc2RHVnlPblZ5YkNnalptbHNkR1Z5TlRjeU5Da2lDaUFnSUNBZ0lDQmtQU0p0SURVM0xqWTFOakkyTml3MU5DNDBNekExT1RJZ1l5QXRNQzR5TURVNU5pd3hMamsyT0RZd055QXRNQzR6TnpNM055dzBMakF3T0RjeU5pQXRNQzR3TkRnMkxEVXVPVFkwTkRBNElEQXVNVE13T0RZc01DNDNOREExTlRRZ01DNHhNVFl5TWl3eExqWTVOekl5T1NBd0xqRXhOVE0yTERJdU5UUTFOak0xSURBdU1ESTBMRE11TVRFeE9EZzJJREF1TVRnME9USXNOaTR5TVRNNE5ERWdNQzR4TXpNMkxEa3VNek13TWpZMElDMHdMakE1TURjc01TNHhNRGN6TkRFZ0xUQXVNVFUxTnpVc01pNHlNelkyTXpZZ0xUQXVNakF3TkN3ekxqTTBNVFkwSURBdU1qSTJPVFlzTUM0NE16QXlPU0F0TUM0M01ERTBNU3d5TGpVd09UY2dNQzQzTWpBNE5Td3lMak15T1RjeUlERXVNamM1T0Rjc01DNHhORFUxTXpVZ01pNDNNekkzTWl3d0xqVXpPVGM0TWlBMExqRXpORE01TERBdU5EYzFPVEF4SURFdU5ESTNOalFzTUM0eE16STJNemdnTWk0NE9ETTNNaXd3TGpBeU1UQXlJRFF1TXpRME1qUXNNQzR4TXpNMk15QXlMak0zTkRVeExDMHdMakl6TXpBME15QTBMamMxT0RJNUxEQXVNVGN3TnpnMElEY3VNVEkyTml3d0lESXVNamswT1RNc01DNHdOREkwT0NBMExqVTNNVGcyTEMwd0xqSXpPVFkwTWlBMkxqZzNNRFU0TEMwd0xqRTBNak00TXlBeUxqTXhNeklzTUM0d016WTROeUEwTGpZME5EYzRMREF1TVRNNE5ESWdOaTQ1TXpZNU5pd3dMakF3T0RnZ0xUQXVNRE0wTnl3dE1pNHlOREUzTkRnZ01DNHlOamczTnl3dE5DNDBPVGt4TnpRZ01DNHdPRGMxTEMwMkxqY3pOVFF6TmlBdE1DNHhPVFkwTml3dE1TNHpPVFEzT0RFZ01DNHlOakE1TkN3dE1pNDRNRGd6TlRrZ01DNHdORFlzTFRRdU1qSXlOell5SUMwd0xqQXdOQ3d0TVM0eE1ESXlOemdnTUM0d05qWTRMQzB5TGpJd05qWXdOeUF0TUM0eU1EQTBOQ3d0TXk0eU56UXdOaklnTUM0eU9ETTVOaXd0TWk0NU9UTTJOalVnTUM0d05qVTRMQzAyTGpBeE1UVTVNaUF3TGpFME1ESXlMQzA1TGpBeE5EZzRNaUF3TGpJek1qVTBMQzB4TGpZeU5EZzFOaUF0TVM0ME5qTTROeXd0TVM0d01ESTNPRElnTFRJdU5qQTNOellzTFRFdU1qVXhOREEySUMweExqVTFOVFkwTEMwd0xqQTBNVE0wSUMwekxqRXhNelEwTERBdU1UTTJOemsxSUMwMExqWTJPVGM0TEMwd0xqQXlNamM1SUMweUxqRXdNemMyTERBdU1EUXdOVEVnTFRRdU16QTBOemNzTFRBdU1Ea3pPU0F0Tmk0ek16Z3hNaXd3TGpFd016QXhOeUF0TWk0eE9URTRNU3d3TGpJM01EUTJJQzAwTGpRME1USTRMREF1TVRJNU9Ea3hJQzAyTGpZMk5Td3dMakUyTWpFNU55QXRNUzQzTXpnMU1pd3RNQzR5TkRZeE1UUWdMVE11TkRVMk9Dd3dMakkzTmpRNE55QXROUzR4TnpZNE5pd3dMalF4TXpJeU1TQXRNUzQwTlRNeU5pd3dMakUxTXpJNE5DQXRNaTQ1TWpBME5Dd3RNQzR3TVRRME9TQXROQzR6TnpJM0xDMHdMakF4TkRnM0lIb2lDaUFnSUNBZ0lDQnBaRDBpY0dGMGFEVXhOVFVpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lnb2dJQ0FnSUNBZ2MyOWthWEJ2WkdrNmJtOWtaWFI1Y0dWelBTSmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qSWdvZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTWk0M01qTXlOamsxTERBc01Dd3lMamN5TXpJMk9UVXNMVEUwTlM0MU5UTXhOaXd0TVRNMExqRTFNVFV6S1NJZ0x6NEtJQ0E4TDJjK0NpQWdQR2NLSUNBZ0lDQnBibXR6WTJGd1pUcG5jbTkxY0cxdlpHVTlJbXhoZVdWeUlnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFeUlnb2dJQ0FnSUdsdWEzTmpZWEJsT214aFltVnNQU0pNWVhsbGNpQTRJZ29nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaU0lLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TWk0MU1EZzRPRGc0TEMweUxqUXhOalUwTXpVcElqNEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVpHbHpjR3hoZVRwcGJteHBibVU3YjNCaFkybDBlVG94TzJacGJHdzZJekU0TVRneE9EdG1hV3hzTFc5d1lXTnBkSGs2TVR0bWFXeHNMWEoxYkdVNmJtOXVlbVZ5Ynp0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNDNNakExTXpFMk5IQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJRFl3TGpVNE1UUXhOeXd4TXk0NU1ERXdNemtnWXlBdE1pNDBNREkwTXl3d0xqQXhPVE0wSUMwMExqYzVORGN5TERBdU1qUTJNVEk1SUMwM0xqQTVNamN6TERBdU5UUXdOREF4SUMwekxqVXlORGM0TERBdU1EZzVNRGdnTFRjdU1EazFNVGs0TEMwd0xqSXdNak14TWlBdE1UQXVOVGd5T0RFeExEQXVNVGszTURJNElDMHpMakU0TURNNU55d3dMak0wTWpnd09DQXROaTQ0TkRZeU1qVXNNQzQxT1Rjd05UVWdMVEV3TGpJNE9EWTRMREF1TlRNd05UVWdMVE11TXpRNU1qazRMREF1TURVek1ESWdMVFl1TXpJMk1UYzBMREF1TlRNMk16a3lJQzA1TGpjMU5qY3pOQ3d3TGpNMk5EUTRPQ0F0TXk0eE56UTBNek1zTFRBdU1USTVPVEkzSUMwMkxqUXhORGt4TkN3dE1DNHpPVFV5TmpFZ0xUa3VOVGM1TkRFeExEQWdhQ0F0TUM0d01ERTBJR01nTFRBdU5EQTRNRGc0TERjdU56VTROek0ySUMwd0xqQTVOVFU1TERFMUxqVXpPVGN6TlNBd0xESXpMakk1TURZeU5pQXRNQzQxTmpFMk56Y3NNeTQwTXpJMk1UZ2dNQzR5TnpRd09ERXNOeTR5TWpZd05DQXRNQzQwT0RrM016a3NNVEF1TkRnNU9USTBJQzB3TGpnd01UZzJOeXcyTGpNMk5EQTFOeUF0TUM0eU5UazRPRElzTVRNdU1EUTJOVGczSUMwd0xqUXhPVE0zTERFNUxqVTFOVFk0TnlBd0xqQTBOell6TERJdU1qZ3dOaUF0TUM0eE9EUTJOalVzTkM0M05USTNOeUF3TGpRNE5UVXhOU3cyTGpjNU56SWdNeTQ0TWpjMU5Td3dMall3TmpVeElEY3VPRFV3T1RNMUxDMHdMakUxTVRJNElERXhMalV5TVRRMk55d3hMakF3TmpJeElEUXVORGN4TkRFNExERXVOREk1T0RjZ09TNHdNakUzT1Rrc0xUQXVNemN3T0RVZ01UTXVOalE1TWprc01DNHpOak13T0NBMUxqRTVNamd4TlN3d0xqVXlOemMwSURFd0xqSTJNamt4TXl3d0xqRXhOamt4SURFMUxqUTJOakV3TXl3d0xqRTRNVFV6SURVdU1UTXlNVGtzTFRBdU5ESXhPRFFnTVRBdU5ETTROVFlzTFRFdU1ETXlOREVnTVRVdU5EWTJNU3d3TGpFNE1qazFJRFV1T0RJMU16SXNNQzQxT0RnME55QXhNUzQyTXpnd05pd3dMall3TlRRMklERTNMalEyTlRnMUxERXVNamN6TmlBekxqRXdNVFFzTUM0eE56RTROQ0EyTGpZeU5qUXlMREF1TlRFME5UWWdOUzR3T1RRek9Td3ROQzR3TXpZeElDMHdMak13TnpVMExDMHpMak00TXpNMklEQXVOVGd4TnpNc0xUUXVORFl4TnprZ01DNHpOalEwT1N3dE55NDJOek01TkNBdE1DNHpNRE0zTXl3dE5DNDVNVE0yTmlBdE1DNHdNamdzTFRrdU9EZ3pPVFFnTFRBdU16UXdOVGNzTFRFMExqYzROemM1TkNBdE1DNDFOakUwTlN3dE5DNHlPVE0xTWpVZ01DNHdOekE1TEMwNExqYzROemMyTkNBdE1DNHdNakkyTEMweE15NHhOekE0TVRRZ0xUQXVNelF6TlRFc0xUVXVNREU0TVRVNElEQXVOemswTml3dE9TNDRNelkxTkRJZ01DNHhPVGs0TXl3dE1UUXVOelkyTmpjNElDMHdMakkzTURReUxDMHlMamMyTVRRek1TQXdMalEyT0RZM0xDMDFMamt3TmpVMU1TQXRNQzQwT1RVek5pd3RPQzQwTVRReE56WWdMVE11TWprMU9USXNNQzR3TlRVMU5TQXROaTQxTURnMU15d3RNQzQ1T1Rnd05URWdMVGt1T1RBME5Ea3NMVEF1TmpVMU56azRJQzAwTGpVMk5EZ3NNQzR3TkRBNE5TQXRPUzR3TVRVeE5pd3RNQzQ0TnpRd09EVWdMVEV6TGpVNE5EVTJMQzB3TGpVMk5UY3pNaUF0TWk0ek16a3pNaXd0TUM0MU16TTBPRGtnTFRRdU56VXlNaklzTFRBdU56SXhOVGt6SUMwM0xqRTFORFkyTEMwd0xqY3dNakl6T1NCNklnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMU1UVXpJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJZ0x6NEtJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p3aExTMGdRM0psWVhSbFpDQjNhWFJvSUVsdWEzTmpZWEJsSUNob2RIUndPaTh2ZDNkM0xtbHVhM05qWVhCbExtOXlaeThwSUMwdFBnb0tQSE4yWndvZ0lDQjRiV3h1Y3pwa1l6MGlhSFIwY0RvdkwzQjFjbXd1YjNKbkwyUmpMMlZzWlcxbGJuUnpMekV1TVM4aUNpQWdJSGh0Ykc1ek9tTmpQU0pvZEhSd09pOHZZM0psWVhScGRtVmpiMjF0YjI1ekxtOXlaeTl1Y3lNaUNpQWdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUlLSUNBZ2VHMXNibk02YzNablBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUNCNGJXeHVjenB6YjJScGNHOWthVDBpYUhSMGNEb3ZMM052Wkdsd2IyUnBMbk52ZFhKalpXWnZjbWRsTG01bGRDOUVWRVF2YzI5a2FYQnZaR2t0TUM1a2RHUWlDaUFnSUhodGJHNXpPbWx1YTNOallYQmxQU0pvZEhSd09pOHZkM2QzTG1sdWEzTmpZWEJsTG05eVp5OXVZVzFsYzNCaFkyVnpMMmx1YTNOallYQmxJZ29nSUNCMmFXVjNRbTk0UFNJd0lEQWdORE11T1RRM05ESXlJREUxTGpBMU5qSXhPU0lLSUNBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUNCcFpEMGljM1puTlRrMk5DSUtJQ0FnYzI5a2FYQnZaR2s2Wkc5amJtRnRaVDBpYTJWNVltOWhjbVF5TG5OMlp5SUtJQ0FnYUdWcFoyaDBQU0l4TURBbElnb2dJQ0IzYVdSMGFEMGlORE11T1RRM05ESXliVzBpQ2lBZ0lIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlJbTV2Ym1VaUNpQWdJR2x1YTNOallYQmxPblpsY25OcGIyNDlJakF1T1RJdU1pQTFZek5sT0RCa0xDQXlNREUzTFRBNExUQTJJajRLSUNBOFpHVm1jd29nSUNBZ0lHbGtQU0prWldaek5UazFPQ0lnTHo0S0lDQThjMjlrYVhCdlpHazZibUZ0WldSMmFXVjNDaUFnSUNBZ2FXUTlJbUpoYzJVaUNpQWdJQ0FnY0dGblpXTnZiRzl5UFNJalptWm1abVptSWdvZ0lDQWdJR0p2Y21SbGNtTnZiRzl5UFNJak5qWTJOalkySWdvZ0lDQWdJR0p2Y21SbGNtOXdZV05wZEhrOUlqRXVNQ0lLSUNBZ0lDQnBibXR6WTJGd1pUcHdZV2RsYjNCaFkybDBlVDBpTUM0d0lnb2dJQ0FnSUdsdWEzTmpZWEJsT25CaFoyVnphR0ZrYjNjOUlqSWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmVtOXZiVDBpTWk0NElnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONFBTSTRNUzR5TVRBMk56UWlDaUFnSUNBZ2FXNXJjMk5oY0dVNlkzazlJak0xTGpVNU5UTXdPU0lLSUNBZ0lDQnBibXR6WTJGd1pUcGtiMk4xYldWdWRDMTFibWwwY3owaWJXMGlDaUFnSUNBZ2FXNXJjMk5oY0dVNlkzVnljbVZ1ZEMxc1lYbGxjajBpYzNabk5UazJOQ0lLSUNBZ0lDQnphRzkzWjNKcFpEMGlabUZzYzJVaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxMGIzQTlJakFpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTFzWldaMFBTSXdJZ29nSUNBZ0lHWnBkQzF0WVhKbmFXNHRjbWxuYUhROUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMWliM1IwYjIwOUlqQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFhkcFpIUm9QU0l4TVRJNElnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTFvWldsbmFIUTlJalkyTkNJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RlRDBpT0RNaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMWGs5SWpNMklnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTF0WVhocGJXbDZaV1E5SWpBaUlDOCtDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoTlRrMk1TSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR2NLSUNBZ0lDQnBibXR6WTJGd1pUcHNZV0psYkQwaVRHRjVaWElnTVNJS0lDQWdJQ0JwYm10elkyRndaVHBuY205MWNHMXZaR1U5SW14aGVXVnlJZ29nSUNBZ0lHbGtQU0pzWVhsbGNqRWlDaUFnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVFU1TGpVeU16TXlNU3d0TVRNMUxqWXpOVFV4S1NJK0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZJMlExWkRGaFl6dG1hV3hzTFc5d1lXTnBkSGs2TVR0emRISnZhMlU2SXpBd01EQXdNRHR6ZEhKdmEyVXRkMmxrZEdnNk1DNHlOalExT0RNek1uQjRPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdmNHRmphWFI1T2pFaUNpQWdJQ0FnSUNCa1BTSnRJRFU1TGpjMU5qTTJPU3d4TkRRdU5URTVNeUJqSURBdU5UZ3hOekEyTEMweExqQXlNREk0SURFdU1URXlNamcwTEMweUxqSTFOekU0SURFdU9UQXlNelkzTEMwekxqQXhPVEUxSURBdU5UWTRPREE1TEMwd0xqZzBNRGN4SURFdU1qWXdOek01TEMweExqVTNOREl6SURFdU9Ea3pOekk1TEMweUxqUXdOek00SURBdU9ESTBNams1TEMwd0xqY3dOemc0SURFdU1qWTROekF6TEMweExqVTFOelV6SURJdU1EUXlORGNzTFRJdU16WTVORE1nTUM0M09EZzJNelVzTFRFdU1UZ3pOamdnTWk0eE5ESXdPVFFzTFRBdU9UVTNNamtnTXk0ME1qYzFNalVzTFRBdU9EazVOVFVnTVM0eU5EYzFNakVzTUM0eE9ETXhPU0F5TGpVek5EYzNOaXd3TGpFd05UazVJRE11TnpZeU5USXlMREF1TXpreU9ETWdNUzR6TWpNMk9UUXNMVEF1TURnNU5DQXlMall5TVRZM0xEQXVOREk0T1RRZ015NDVOelV6Tmprc01DNHpOak0zTlNBeExqTXpPVGczTVN3d0xqRXpPRGN4SURJdU5qa3pNakV4TERBdU5USXdOVElnTXk0NU9EY3pOakVzTUM0ME5qSTNPQ0F4TGpnMk16WTFNaXd3TGpNME5UYzRJRE11T0RjMU1qQTNMREF1TWpJMk16Z2dOUzQzT1RjeU56UXNNQzQwTlRFek9DQXhMalEzTXpBek9Td3dMalF4TnpFNElETXVNRGMzTmpReUxEQXVNRGN6TWlBMExqVTNPVEkyTXl3d0xqVXpNVEEzSURFdU16QXhNemcyTEMwd0xqQTNOelFnTWk0MU5ESTRNaXd3TGpFME9ERTVJRE11T0RFNU16WXNNQzR5TnpNM01TQXlMakF4TkRFME5Td3RNQzR6TURRMk5TQTBMakF3T0RRME15d3RNQzR3TVRNeUlEWXVNREl6TURBeExDMHdMakl4T0RZNUlEQXVPRFE0TVRZc01DNHpOems0TkNBeUxqWTFOVE00TEMwd0xqSXdOemszSURJdU1Ua3lOemNzTVM0ek16RTFOQ0F3TGpBeU1ERXNNUzR3TlRJM055QXdMalU1T0RFM0xESXVOREUzTXpRZ0xUQXVORE0xTVRJc015NHhORFF5TXlBdE1TNHdNall5TWl3d0xqa3lNRGN6SUMweExqWTFPRFF6TERJdU1EY3lNRGdnTFRJdU1URXlOalVzTXk0ek5EZzVOQ0F0TUM0Mk1qZzROelVzTUM0NU5EVTJNeUF0TVM0eU1EazFORElzTWk0d05qQXpNU0F0TVM0M056QXdORGtzTXk0d05UQTBNeUF0TUM0Mk5qZ3lNaXd4TGpFeE9Ea3pJQzB3TGpjME9ETTNOaXd4TGpJNU9UTXpJQzB4TGprNE56Z3dOU3d4TGpVd05qYzNJQzB4TGpJMk1ESTNOQ3d3TGpBNU56TWdMVEl1TlRNNU16SXpMREF1TVRZM09ETWdMVE11TnpjNE56RTJMQzB3TGpBeU5qTWdMVEV1TURBM05ETTNMQzB3TGpFNE1EazFJQzB4TGpZNU1qVXhOU3d0TUM0d016UTFJQzB5TGpZM01UVXpPU3d0TUM0ek5qRTBJQzB4TGpVeU5ETTBPU3d0TUM0eE56TTROU0F0TWk0NU9UazNNamtzTFRBdU5UWTNPRFFnTFRRdU5UTXlNakUwTEMwd0xqWTNPREl4SUMweExqQTJNakF5Tnl3dE1DNHhNREEzSUMweUxqRXhNamc1T1N3dE1DNHhOemc0TnlBdE15NHhOemN4T1N3dE1DNHdOemd6SUMweExqVXdOekUzTWl3dE1DNHhNakF4T1NBdE1pNDVNRGd3T0Rnc0xUQXVOalF6TmpJZ0xUUXVOREkzTWpZeUxDMHdMamd5T0RZMUlDMHhMakl6TkRBeE5Dd3RNQzR5TWpVek1TQXRNaTR6T0RVME5qY3NMVEF1TWpnMk1ESWdMVE11TlRFM01pd3RNQzQyTWpjeU15QXRNUzR3TkRJM05qSXNMVEF1TXpJd09DQXRNaTR4TXpnMk9ESXNMVEF1TkRZeE9ERWdMVE11TWpFek5USXlMQzB3TGpVek9ETTBJQzB4TGpFNU1qVXpNeXd0TUM0ek9EWTNOeUF0TWk0ek5EVTNNelVzTFRBdU9USXhOamtnTFRNdU5qTTNNakUwTEMwd0xqa3dNRFk0SUMwd0xqWXpOelUzTWl3dE1DNHdNemN5SUMweExqUTFNVGd6TEMwd0xqQXhNVE1nTFRJdU1UYzJNVEF5TERBdU1EazFPU0F0TVM0eE5EazBORFFzTUM0eE1qZzRJQzB5TGpJNU9EazNNU3d0TUM0ek1EZzRNeUF0TXk0ek9UVXhNREVzTFRBdU5UWXhNRFVnTFRBdU9USXdNRFVzTFRBdU1UQTVORE1nTFRJdU9UUXpOVGsyTERBdU1UTTJPVFlnTFRJdU5qUXlPRE01TEMweExqUXdNalkwSUd3Z01DNHdOekUxTVN3dE1DNHdNell6SUhvaUNpQWdJQ0FnSUNCcFpEMGljR0YwYURZd01qZ2lDaUFnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWlBdlBnb2dJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPaU5rTldReFlXTTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT2lNd01EQXdNREE3YzNSeWIydGxMWGRwWkhSb09qQXVNalkwTlRnek16SndlRHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGIzQmhZMmwwZVRveElnb2dJQ0FnSUNBZ1pEMGliU0F4TURNdU1UYzVOVGtzTVRNNExqTXhORE16SUdNZ0xUQXVNalUzTURVc01TNHhOVE0zTWlBdE1TNHdPVEF3Tnl3eExqZ3lNVEkwSUMweExqVXpNVFVzTWk0NE5EWXpJQzB3TGpRNE9Ea3NNQzQ1TXpZMElDMHdMams1TWpVc01pNHdOamswT1NBdE1TNDFNRFE0Tml3ekxqQXhOamMzSUMwd0xqTTVPRFUxTlN3eExqRXdNVGMxSUMweExqQTVORFEyTlN3eExqUTROVEV4SUMweExqWXdNalV5TkN3eUxqUTRNVFFnTUM0d01UazFOQ3d3TGpnMU56TTNJQzB4TGpJd01EVXpPU3d4TGpreU9EY3pJQzB3TGprMU5USTFNU3d5TGpRNU56YzNJREF1TWpjd05qRXpMREF1TWpjeU1qSWdNQzQxTlRFME1ESXNNQzQwTmpRNE1pQXdMalUzTURVMU9Td3dMamt3TURRNUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnMk1ETXdJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRG9qWkRWa01XRmpPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlRvak1EQXdNREF3TzNOMGNtOXJaUzEzYVdSMGFEb3dMakkyTkRVNE16TXljSGc3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lHUTlJbTBnTlRrdU56VTJNelk1TERFME5DNDFNVGt6SUdNZ01TNHpPVGN5TURNc01DNHlORGsxTlNBeUxqa3dNamcxTlN3d0xqQTVNVEVnTkM0eU9UQTNNRFlzTUM0MU5qQTBNaUF4TGpNMk56a3dPU3d3TGpBeE56SWdNaTQzT1RVeU1Ua3NNQzQxTWpNeE1TQTBMakF4TWpJM05Dd3dMamN5TlRFNUlEQXVPVEE1TlRFMExEQXVNakl6TXlBeExqa3hORGt5TERBdU5EWXhORElnTWk0NE5EY3pNVGdzTUM0MU5EUTJPU0F4TGpFNU1UTTNNU3d3TGpFM05USXpJREl1TkRFek5UTXlMREF1TlRBeU5UUWdNeTQyTURnM01EVXNNQzQxT0RnMk9DQXhMamN3TWpBeE5pd3dMakE1TkNBekxqTTJORE0zTERBdU5qRTRNU0ExTGpFd056UXdOU3d3TGpVeU5qa3hJREV1TXpFd016TTBMREF1TWpRMU9EUWdNaTQyTnpBek56Y3NNQzQwTmpRZ015NDVOVGN6TmpRc01DNDJPRFF5T1NBeExqQXhNVEE1T1N3dE1DNHdNalkzSURFdU9UWXdPVEk0TERBdU5Ea3hPRFFnTWk0NU5qZzFNRGNzTUM0Mk1ERTNNaUF4TGpJeU9UUTFOQ3d3TGpFek5EQTVJREl1TkRZM01EWTFMQzB3TGpBNE56SWdNeTQyT0RrM016UXNNQzR4TVRVd05DQXhMak16TlRNek5Dd3dMakl5TVRjeElESXVOall5TURnMUxDMHdMakV3TlRNM0lETXVPVGcyTnpFM0xEQXVNVFUyTWpRZ01DNDVOak16TXpjc01DNDBNamc0TkNBeUxqWTBNamczTlN3dE1DNHpNakk0T1NBekxqUTRNVEl6TERBdU5UTXhOemNnTUM0eE16azBPVFFzTUM0eE56VTFOaUF3TGpJM056VXpPU3d3TGpNMU5Ea2dNQzQwTkRrd01qTXNNQzQxTURFek1TSUtJQ0FnSUNBZ0lHbGtQU0p3WVhSb05qQXpNaUlLSUNBZ0lDQWdJR2x1YTNOallYQmxPbU52Ym01bFkzUnZjaTFqZFhKMllYUjFjbVU5SWpBaUlDOCtDaUFnUEM5blBnbzhMM04yWno0S1wiIiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdodHRwJztcbmltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG4vLyBpbml0aWFsaXplIHRoZSBzZXJ2ZXIgYW5kIGNvbmZpZ3VyZSBzdXBwb3J0IGZvciBlanMgdGVtcGxhdGVzXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xuXG4vLyBkZWZpbmUgdGhlIGZvbGRlciB0aGF0IHdpbGwgYmUgdXNlZCBmb3Igc3RhdGljIGFzc2V0c1xuYXBwLnVzZShFeHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3RhdGljJykpKTtcblxuLy8gdW5pdmVyc2FsIHJvdXRpbmcgYW5kIHJlbmRlcmluZ1xuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICBsZXQgbWFya3VwID0gJyc7XG4gIGxldCBzdGF0dXMgPSAyMDA7XG5cbiAgY29uc3QgY29udGV4dCA9IHt9O1xuICBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1N0YXRpY1JvdXRlcj4sXG4gICk7XG5cblxuICAvLyBjb250ZXh0LnVybCB3aWxsIGNvbnRhaW4gdGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiBhIDxSZWRpcmVjdD4gd2FzIHVzZWRcbiAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDIsIGNvbnRleHQudXJsKTtcbiAgfVxuXG5cbiAgaWYgKGNvbnRleHQuaXM0MDQpIHtcbiAgICBzdGF0dXMgPSA0MDQ7XG4gIH1cblxuXG4gIHJldHVybiByZXMuc3RhdHVzKHN0YXR1cykucmVuZGVyKCdpbmRleCcsIHsgbWFya3VwIH0pO1xufSk7XG5cbi8vY29uc29sZS5sb2coYXBwLmdldCgnZW52JykpO1xuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7XG4vL2NvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcblxuLy8gc3RhcnQgdGhlIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMjtcbnNlcnZlci5saXN0ZW4ocG9ydCwgKGVycikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxuICByZXR1cm4gY29uc29sZS5pbmZvKFxuICAgIFwiU2VydmVyIHJ1bm5pbmdcIik7XG59KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=