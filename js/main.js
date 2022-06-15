/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/function/accordion.js":
/*!**************************************!*\
  !*** ./src/js/function/accordion.js ***!
  \**************************************/
/***/ (() => {


//Аккордеон
var accordions = document.querySelectorAll('.accordion');
document.addEventListener('DOMContentLoaded', function () {
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accordion__control');
      var content = self.querySelector('.accordion__content');
      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});



/***/ }),

/***/ "./src/js/function/burger.js":
/*!***********************************!*\
  !*** ./src/js/function/burger.js ***!
  \***********************************/
/***/ (() => {

/***/ }),

/***/ "./src/js/function/slider.js":
/*!***********************************!*\
  !*** ./src/js/function/slider.js ***!
  \***********************************/
/***/ (() => {

//Слайдер
var card = document.querySelectorAll('.slider .card__slider .deck__card');
var cardSliderDecstop = document.querySelector('.slider .card__slider');
var cardSliderTablet = document.querySelector('.slider .card__slider-tablet');
var cardSliderPhone = document.querySelector('.slider .card__slider-phone');
var width;
var cound = 0;

var initDecstop = function initDecstop() {
  width = document.querySelector('.slider').offsetWidth;
  cardSliderDecstop.style.width = width * card.length + 'px';
  card.forEach(function (item) {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSliderDecstop();
};

initDecstop();
window.addEventListener('resize', initDecstop);

var initTablet = function initTablet() {
  width = document.querySelector('.slider').offsetWidth;
  cardSliderTablet.style.width = width * card.length + 'px';
  card.forEach(function (item) {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSliderTablet();
};

initTablet();
window.addEventListener('resize', initTablet);

var initPhone = function initPhone() {
  width = document.querySelector('.slider').offsetWidth;
  cardSliderPhone.style.width = width * card.length + 'px';
  card.forEach(function (item) {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSliderPhone();
};

initPhone();
window.addEventListener('resize', initPhone);
document.querySelector('.arrow__slider .next').addEventListener('click', function () {
  cound++;

  if (cound >= card.length) {
    cound = 0;
  }

  rollSliderDecstop();
  rollSliderTablet();
  rollSliderPhone();
});
document.querySelector('.arrow__slider .prev').addEventListener('click', function () {
  cound--;

  if (cound < 0) {
    cound = card.length - 1;
  }

  rollSliderDecstop();
  rollSliderTablet();
  rollSliderPhone();
});

function rollSliderDecstop() {
  cardSliderDecstop.style.transform = 'translate(-' + cound * width + 'px)';
}

function rollSliderTablet() {
  cardSliderTablet.style.transform = 'translate(-' + cound * width + 'px)';
}

function rollSliderPhone() {
  cardSliderPhone.style.transform = 'translate(-' + cound * width + 'px)';
} 



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/burger */ "./src/js/function/burger.js");
/* harmony import */ var _function_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_function_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _function_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/accordion */ "./src/js/function/accordion.js");
/* harmony import */ var _function_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_function_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _function_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/slider */ "./src/js/function/slider.js");
/* harmony import */ var _function_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_function_slider__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map