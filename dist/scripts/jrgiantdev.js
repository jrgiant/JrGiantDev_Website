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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function (w,d) {
  w.jdr = w.jdr || {};
  jdr.isReady = false;
  jdr.onloads = jdr.onloads || [];
  d.addEventListener('DOMContentLoaded', function() {
     document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
     jdr.isReady = true;
     while (jdr.onloads.length) {
       jdr.onloads.shift().call();
     }
  },false);
}(window,document));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function (jdr){
jdr.onloads.push(()=>{
  if(navigator.userAgent.indexOf('MSIE') != -1 && navigator.userAgent.match(/MSIE (\d+\.\d+);/)){
    var style = document.createElement('style');
    style.type= "text/css";
    style.appendChild(document.createTextNode('.gradient {filter: none;}'));
    var head = document.head || document.getElementByTagName('head')[0];
    head.appendChild(style);
  }
  });
}(window.jdr));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (jdr) {
  jdr.onloads.push(function () {
    hideShowToTop();
    changeNav();
    window.addEventListener('scroll', () => {hideShowToTop();changeNav();});
  });
  function hideShowToTop() {
    var back_to_top = document.querySelector("a.back-to-top");
    if (back_to_top){
      back_to_top.style.display = isScrolledPast(150)?"block":"none";
      back_to_top.style.opacity = isScrolledPast(200)?"1":"0";
    }
  }
  function changeNav() {
    var nav = document.querySelector('nav');
    if(nav){
      var isScrolled = isScrolledPast(200);
      var title = nav.querySelector(".title");
      title.style.display = isScrolledPast(150)?"block":"none";
      title.style.opacity = isScrolledPast(200)?"1":"0";
      var buttons = nav.querySelectorAll(".link-button");
      buttons.forEach((b, i)=>{
        b.style.display = isScrolledPast(150)?"block":"none";
        b.style.opacity = isScrolledPast(200)?"1":"0";
      });
      nav.style.backgroundColor=isScrolled?"#1d1075":"unset";


    }
  }
  function getScrollTop(){
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }
  function isScrolledPast(offset) {
    if (getScrollTop() > offset){
      return true;
    }
    return false;
  }
}(window.jdr))


/***/ })
/******/ ]);