webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
});

/***/ })

})
//# sourceMappingURL=index.js.4eb9ebee871b3253186c.hot-update.js.map