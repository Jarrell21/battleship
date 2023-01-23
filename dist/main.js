/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\nmain {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n}\r\n\r\n#ship-preview {\r\n    background-color: black;\r\n    color: red;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.gameboards-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .gameboards-container {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sDAAsD;IACtD,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,kDAAkD;IACtD;AACJ","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\nmain {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n}\r\n\r\n#ship-preview {\r\n    background-color: black;\r\n    color: red;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.gameboards-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .gameboards-container {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/modules/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/shipFactory.js");




const Game = (() => {
  let winner = '';
  // Create players
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('player');
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');

  // Create player's boards
  const playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // Create players ships
  const playerCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(5);
  const playerBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(4);
  const playerDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(3);
  const playerSubmarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(3);
  const playerPatrolboat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(2);

  const getGameBoard = (playerName) => {
    if (playerName === 'player') return playerBoard;
    return computerBoard;
  };

  const getPlayerShips = () => [
    playerCarrier,
    playerBattleship,
    playerDestroyer,
    playerSubmarine,
    playerPatrolboat,
  ];

  const init = () => {
    computerBoard.randomPlaceShips();
  };

  const reset = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
    init();
  };

  const turn = (next) => {
    if (next === player) {
      player.randomAttack(computerBoard);
      return;
    }

    computer.randomAttack(playerBoard);
  };

  const over = () => {
    if (playerBoard.allShipsHaveSunk()) {
      winner = computer.getName();
      return true;
    }
    if (computerBoard.allShipsHaveSunk()) {
      winner = player.getName();
      return true;
    }
  };

  const getWinner = () => winner;

  return { init, getWinner, getGameBoard, getPlayerShips, reset };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/shipFactory.js");


const GameBoard = () => {
  let board = [];
  let numOfShipsSunk = 0;

  const getBoard = () => board;

  const createBoard = () => {
    for (let i = 0; i < 100; i += 1) {
      board.push({ ship: null, hasShip: false, isShot: false });
    }
  };

  const resetBoard = () => {
    board = [];
    createBoard();
  };

  const placeShip = (ship, index, isVertical = false) => {
    if (!isPlacementPossible(ship, index, isVertical)) return false;

    if (isVertical) {
      for (let i = 0; i < ship.getLength() * 10; i += 10) {
        board[index + i].hasShip = true;
        board[index + i].ship = ship;
      }
    } else {
      for (let i = 0; i < ship.getLength(); i += 1) {
        board[index + i].hasShip = true;
        board[index + i].ship = ship;
      }
    }

    return true;
  };

  const randomPlaceShips = () => {
    let randomIndex = Math.floor(Math.random() * 100);
    let randomOrientation = Math.floor(Math.random() * 10) <= 5;
    const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
    const battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(4);
    const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
    const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
    const patrolBoat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(2);
    const shipsArray = [carrier, battleship, destroyer, submarine, patrolBoat];

    shipsArray.forEach((ship) => {
      while (placeShip(ship, randomIndex, randomOrientation) === false) {
        randomIndex = Math.floor(Math.random() * 100);
        randomOrientation = Math.floor(Math.random() * 10) <= 5;
      }
    });
  };

  const isPlacementPossible = (ship, index, isVertical = false) => {
    if (index < 0 || index > 98) return false;

    // if ship doesn't fit gameboard
    if (isVertical) {
      if ((ship.getLength() - 1) * 10 + index > 99) return false;
    } else {
      for (let i = 0; i < 100; i += 10) {
        if (index <= 9 + i) {
          if (ship.getLength() - 1 + index > 9 + i) return false;
        }
      }
    }

    // if field is already taken
    if (isVertical) {
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[index + i * 10].hasShip === true) return false;
      }
    } else {
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[index + i].hasShip === true) return false;
      }
    }

    return true;
  };

  const receiveAttack = (index) => {
    if (board[index].isShot === true) return;

    board[index].isShot = true;
    if (board[index].hasShip) {
      board[index].ship.hit();
      if (board[index].ship.isSunk()) {
        numOfShipsSunk += 1;
      }
    }
  };

  const getEmptyCoordinates = () =>
    board.filter((coordinate) => coordinate.hasShip === false).length;

  const allShipsHaveSunk = () => numOfShipsSunk === 5;

  createBoard();
  return {
    getBoard,
    placeShip,
    randomPlaceShips,
    isPlacementPossible,
    receiveAttack,
    allShipsHaveSunk,
    resetBoard,
    getEmptyCoordinates,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (name) => {
  const getName = () => name;
  const shotCoordinates = [];

  const attack = (gameBoard, index) => {
    if (isAlreadyShot(index)) return;

    gameBoard.receiveAttack(index);
    shotCoordinates.push(index);
  };

  const randomAttack = (gameBoard) => {
    if (shotCoordinates.length === 100) return;

    let coordinate = Math.floor(Math.random() * 100);

    while (isAlreadyShot(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }

    shotCoordinates.push(coordinate);
    gameBoard.receiveAttack(coordinate);
  };

  const isAlreadyShot = (index) => shotCoordinates.includes(index);

  return { attack, randomAttack, getName };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  let numOfHits = 0;

  const getLength = () => length;

  const getNumOfHits = () => numOfHits;

  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;

  return { hit, isSunk, getNumOfHits, getLength };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/modules/gameBoard.js");




const UI = (() => {
  const loadPage = () => {
    _game__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    loadPlaceShipScreen();
  };

  const createGameBoard = (player) => {
    const board = document.querySelector(`.${player}-board`);
    let array = [];

    if (player === 'player') array = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player').getBoard();
    else {
      array = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('computer').getBoard();
    }

    for (let i = 0; i < array.length; i += 1) {
      board.innerHTML += `<div class="${player}-board-square" data-index="${i}" data-hasShip="${array[i].hasShip}">${i}</div>`;
    }
  };

  const loadFleet = (player) => {
    const board = document.querySelector(`.${player}-board`);

    [...board.children].forEach((child) => {
      if (child.getAttribute('data-hasShip') === 'true') {
        if (player === 'player') {
          child.style.backgroundColor = 'blue';
        } else {
          child.style.backgroundColor = 'blue';
        }
      }
    });
  };

  const initButtons = () => {
    const resetBtn = document.querySelector('.reset-btn');

    resetBtn.addEventListener('click', resetGame);
  };

  const resetGame = () => {
    const computerBoard = document.querySelector(`.computer-board`);
    computerBoard.innerHTML = '';
    _game__WEBPACK_IMPORTED_MODULE_1__["default"].reset();
    createGameBoard('computer');
    loadFleet('computer');
  };

  // The following functions are for the placing ship screen
  const ships = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerShips();
  let currentShip = ships[0];
  let isVertical = false;

  const loadPlaceShipScreen = () => {
    const main = document.querySelector('main');

    main.innerHTML += `
    <section class="gameboards-container">
      <div>
        <span class="place-ship-instruction">Place your Carrier!</span>
        <button class="rotate-btn">Rotate</button>
        <button class="reset-place-ship-btn">Reset</button>
        <div class="player-board gameboard"></div>
      </div>
    </section>`;

    createGameBoard('player');
    loadFleet('player');
    placeShipInitEvents();
  };

  // Adding event listeners
  const placeShipInitEvents = () => {
    const boardSquares = document.querySelectorAll('.player-board-square');
    const rotateBtn = document.querySelector('.rotate-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-place-ship-btn');

    boardSquares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        addShipPreview(e, currentShip, isVertical);
      });
      square.addEventListener('mouseout', (e) => {
        removeShipPreview(e, currentShip, isVertical);
      });
      square.addEventListener('click', placeShip);
    });

    rotateBtn.addEventListener('click', rotateShip);

    resetPlaceShipBtn.addEventListener('click', resetPlaceShip);
  };

  const addShipPreview = (e) => {
    const boardSquares = document.querySelectorAll('.player-board-square');
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    boardSquares.forEach((square) => {
      square.classList.add('placing');
    });

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].setAttribute('id', 'ship-preview');
      }
    } else {
      e.target.classList.add('not-allowed');
    }
  };

  const removeShipPreview = (e) => {
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (targetArr[i].getAttribute('data-hasShip') === 'false') {
          targetArr[i].removeAttribute('id');
        }
      }
    } else {
      e.target.classList.remove('not-allowed');
    }
  };

  const populateTargetShipCoord = (e, orientation) => {
    const targetArr = [];
    if (orientation === 'vertical') {
      let current = e.target;
      let next = current.nextSibling;

      targetArr.push(current);

      for (let i = 0; i < 9; i += 1) {
        if (next) {
          current = next;
          next = current.nextSibling;
        }
      }
      current = e.target;

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (next) {
          targetArr.push(next);
          current = next;
          next = current.nextSibling;

          for (let j = 0; j < 9; j += 1) {
            if (next) {
              current = next;
              next = current.nextSibling;
            }
          }
        }
      }
    } else {
      let current = e.target;
      let next = current.nextSibling;

      targetArr.push(current);

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (next) {
          targetArr.push(next);
          current = next;
          next = current.nextSibling;
        }
      }
    }

    return targetArr;
  };

  const placeShip = (e) => {
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      playerBoard.placeShip(currentShip, index, isVertical);

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].setAttribute('data-hasShip', 'true');
      }

      if (currentShip !== ships[4]) {
        changeShip();
        return;
      }

      console.log('Change to main screen');
      const boardSquares = document.querySelectorAll('.player-board-square');

      boardSquares.forEach((square) => {
        square.removeEventListener('mouseover', addShipPreview);
        square.removeEventListener('mouseout', removeShipPreview);
        square.removeEventListener('click', placeShip);
      });
    }
  };

  const changeShip = () => {
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );
    const shipNames = [
      'Carrier',
      'BattleShip',
      'Destroyer',
      'Submarine',
      'Patrol Boat',
    ];

    for (let i = 0; i < ships.length; i += 1) {
      if (currentShip === ships[i]) {
        currentShip = ships[i + 1];
        placeShipInstruction.innerHTML = `Place your ${shipNames[i + 1]}`;
        return;
      }
    }
  };

  const rotateShip = () => {
    if (isVertical === false) {
      isVertical = true;
    } else {
      isVertical = false;
    }
  };

  const resetPlaceShip = () => {
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const main = document.querySelector('main');

    main.innerHTML = '';
    playerBoard.resetBoard();
    loadPlaceShipScreen();
    currentShip = ships[0];
  };

  return { loadPage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");


document.addEventListener('DOMContentLoaded', _modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"].loadPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBOEI7QUFDOUI7QUFDQSw4Q0FBOEMsNERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1wcmV2aWV3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5wbGFjaW5nIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWFsbG93ZWQge1xcclxcbiAgICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMS45cmVtKSAvIHJlcGVhdCgxMCwgMS45cmVtKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY4NXB4KSB7XFxyXFxuICAgIC5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMnJlbSkgLyByZXBlYXQoMTAsIDJyZW0pO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNEQUFzRDtJQUN0RCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrREFBa0Q7SUFDdEQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtcHJldmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2luZyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBuby1kcm9wO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkcy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDEuOXJlbSkgLyByZXBlYXQoMTAsIDEuOXJlbSk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2ODVweCkge1xcclxcbiAgICAuZ2FtZWJvYXJkcy1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDJyZW0pIC8gcmVwZWF0KDEwLCAycmVtKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEZhY3RvcnknO1xyXG5cclxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XHJcbiAgbGV0IHdpbm5lciA9ICcnO1xyXG4gIC8vIENyZWF0ZSBwbGF5ZXJzXHJcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKCdwbGF5ZXInKTtcclxuICBjb25zdCBjb21wdXRlciA9IFBsYXllcignY29tcHV0ZXInKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBsYXllcidzIGJvYXJkc1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZUJvYXJkKCk7XHJcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICAvLyBDcmVhdGUgcGxheWVycyBzaGlwc1xyXG4gIGNvbnN0IHBsYXllckNhcnJpZXIgPSBTaGlwKDUpO1xyXG4gIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBTaGlwKDQpO1xyXG4gIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IFNoaXAoMyk7XHJcbiAgY29uc3QgcGxheWVyU3VibWFyaW5lID0gU2hpcCgzKTtcclxuICBjb25zdCBwbGF5ZXJQYXRyb2xib2F0ID0gU2hpcCgyKTtcclxuXHJcbiAgY29uc3QgZ2V0R2FtZUJvYXJkID0gKHBsYXllck5hbWUpID0+IHtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09PSAncGxheWVyJykgcmV0dXJuIHBsYXllckJvYXJkO1xyXG4gICAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UGxheWVyU2hpcHMgPSAoKSA9PiBbXHJcbiAgICBwbGF5ZXJDYXJyaWVyLFxyXG4gICAgcGxheWVyQmF0dGxlc2hpcCxcclxuICAgIHBsYXllckRlc3Ryb3llcixcclxuICAgIHBsYXllclN1Ym1hcmluZSxcclxuICAgIHBsYXllclBhdHJvbGJvYXQsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbXB1dGVyQm9hcmQucmFuZG9tUGxhY2VTaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBpbml0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHVybiA9IChuZXh0KSA9PiB7XHJcbiAgICBpZiAobmV4dCA9PT0gcGxheWVyKSB7XHJcbiAgICAgIHBsYXllci5yYW5kb21BdHRhY2soY29tcHV0ZXJCb2FyZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG92ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNIYXZlU3VuaygpKSB7XHJcbiAgICAgIHdpbm5lciA9IGNvbXB1dGVyLmdldE5hbWUoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc0hhdmVTdW5rKCkpIHtcclxuICAgICAgd2lubmVyID0gcGxheWVyLmdldE5hbWUoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0V2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICByZXR1cm4geyBpbml0LCBnZXRXaW5uZXIsIGdldEdhbWVCb2FyZCwgZ2V0UGxheWVyU2hpcHMsIHJlc2V0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcclxuXHJcbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcclxuICBsZXQgYm9hcmQgPSBbXTtcclxuICBsZXQgbnVtT2ZTaGlwc1N1bmsgPSAwO1xyXG5cclxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xyXG5cclxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcclxuICAgICAgYm9hcmQucHVzaCh7IHNoaXA6IG51bGwsIGhhc1NoaXA6IGZhbHNlLCBpc1Nob3Q6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICBib2FyZCA9IFtdO1xyXG4gICAgY3JlYXRlQm9hcmQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgaW5kZXgsIGlzVmVydGljYWwgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKSAqIDEwOyBpICs9IDEwKSB7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5oYXNTaGlwID0gdHJ1ZTtcclxuICAgICAgICBib2FyZFtpbmRleCArIGldLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0uaGFzU2hpcCA9IHRydWU7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbVBsYWNlU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgbGV0IHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIDw9IDU7XHJcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1KTtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQpO1xyXG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMyk7XHJcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xyXG5cclxuICAgIHNoaXBzQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICB3aGlsZSAocGxhY2VTaGlwKHNoaXAsIHJhbmRvbUluZGV4LCByYW5kb21PcmllbnRhdGlvbikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIDw9IDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzUGxhY2VtZW50UG9zc2libGUgPSAoc2hpcCwgaW5kZXgsIGlzVmVydGljYWwgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IDk4KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gaWYgc2hpcCBkb2Vzbid0IGZpdCBnYW1lYm9hcmRcclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGlmICgoc2hpcC5nZXRMZW5ndGgoKSAtIDEpICogMTAgKyBpbmRleCA+IDk5KSByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxMCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8PSA5ICsgaSkge1xyXG4gICAgICAgICAgaWYgKHNoaXAuZ2V0TGVuZ3RoKCkgLSAxICsgaW5kZXggPiA5ICsgaSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGZpZWxkIGlzIGFscmVhZHkgdGFrZW5cclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW2luZGV4ICsgaSAqIDEwXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW2luZGV4ICsgaV0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkW2luZGV4XS5pc1Nob3QgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICBib2FyZFtpbmRleF0uaXNTaG90ID0gdHJ1ZTtcclxuICAgIGlmIChib2FyZFtpbmRleF0uaGFzU2hpcCkge1xyXG4gICAgICBib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcclxuICAgICAgaWYgKGJvYXJkW2luZGV4XS5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgbnVtT2ZTaGlwc1N1bmsgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcHR5Q29vcmRpbmF0ZXMgPSAoKSA9PlxyXG4gICAgYm9hcmQuZmlsdGVyKChjb29yZGluYXRlKSA9PiBjb29yZGluYXRlLmhhc1NoaXAgPT09IGZhbHNlKS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGFsbFNoaXBzSGF2ZVN1bmsgPSAoKSA9PiBudW1PZlNoaXBzU3VuayA9PT0gNTtcclxuXHJcbiAgY3JlYXRlQm9hcmQoKTtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByYW5kb21QbGFjZVNoaXBzLFxyXG4gICAgaXNQbGFjZW1lbnRQb3NzaWJsZSxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBhbGxTaGlwc0hhdmVTdW5rLFxyXG4gICAgcmVzZXRCb2FyZCxcclxuICAgIGdldEVtcHR5Q29vcmRpbmF0ZXMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcclxuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBjb25zdCBzaG90Q29vcmRpbmF0ZXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKGdhbWVCb2FyZCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpc0FscmVhZHlTaG90KGluZGV4KSkgcmV0dXJuO1xyXG5cclxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KTtcclxuICAgIHNob3RDb29yZGluYXRlcy5wdXNoKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZUJvYXJkKSA9PiB7XHJcbiAgICBpZiAoc2hvdENvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMTAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG5cclxuICAgIHdoaWxlIChpc0FscmVhZHlTaG90KGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3RDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNBbHJlYWR5U2hvdCA9IChpbmRleCkgPT4gc2hvdENvb3JkaW5hdGVzLmluY2x1ZGVzKGluZGV4KTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCByYW5kb21BdHRhY2ssIGdldE5hbWUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcclxuICBsZXQgbnVtT2ZIaXRzID0gMDtcclxuXHJcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xyXG5cclxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiBudW1PZkhpdHM7XHJcblxyXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcclxuICAgIG51bU9mSGl0cyArPSAxO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IG51bU9mSGl0cyA9PT0gbGVuZ3RoO1xyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGggfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsImltcG9ydCAnLi4vYXNzZXRzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgR2FtZS5pbml0KCk7XHJcbiAgICBsb2FkUGxhY2VTaGlwU2NyZWVuKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LWJvYXJkYCk7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAocGxheWVyID09PSAncGxheWVyJykgYXJyYXkgPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJykuZ2V0Qm9hcmQoKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBhcnJheSA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdjb21wdXRlcicpLmdldEJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBib2FyZC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCIke3BsYXllcn0tYm9hcmQtc3F1YXJlXCIgZGF0YS1pbmRleD1cIiR7aX1cIiBkYXRhLWhhc1NoaXA9XCIke2FycmF5W2ldLmhhc1NoaXB9XCI+JHtpfTwvZGl2PmA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZEZsZWV0ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LWJvYXJkYCk7XHJcblxyXG4gICAgWy4uLmJvYXJkLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWhhc1NoaXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ3BsYXllcicpIHtcclxuICAgICAgICAgIGNoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idG4nKTtcclxuXHJcbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1ib2FyZGApO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIEdhbWUucmVzZXQoKTtcclxuICAgIGNyZWF0ZUdhbWVCb2FyZCgnY29tcHV0ZXInKTtcclxuICAgIGxvYWRGbGVldCgnY29tcHV0ZXInKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgZm9yIHRoZSBwbGFjaW5nIHNoaXAgc2NyZWVuXHJcbiAgY29uc3Qgc2hpcHMgPSBHYW1lLmdldFBsYXllclNoaXBzKCk7XHJcbiAgbGV0IGN1cnJlbnRTaGlwID0gc2hpcHNbMF07XHJcbiAgbGV0IGlzVmVydGljYWwgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgbG9hZFBsYWNlU2hpcFNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG4gICAgbWFpbi5pbm5lckhUTUwgKz0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJnYW1lYm9hcmRzLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicGxhY2Utc2hpcC1pbnN0cnVjdGlvblwiPlBsYWNlIHlvdXIgQ2FycmllciE8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdGF0ZS1idG5cIj5Sb3RhdGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXQtcGxhY2Utc2hpcC1idG5cIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItYm9hcmQgZ2FtZWJvYXJkXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPmA7XHJcblxyXG4gICAgY3JlYXRlR2FtZUJvYXJkKCdwbGF5ZXInKTtcclxuICAgIGxvYWRGbGVldCgncGxheWVyJyk7XHJcbiAgICBwbGFjZVNoaXBJbml0RXZlbnRzKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQWRkaW5nIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGNvbnN0IHBsYWNlU2hpcEluaXRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJvYXJkLXNxdWFyZScpO1xyXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcclxuICAgIGNvbnN0IHJlc2V0UGxhY2VTaGlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LXBsYWNlLXNoaXAtYnRuJyk7XHJcblxyXG4gICAgYm9hcmRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICBhZGRTaGlwUHJldmlldyhlLCBjdXJyZW50U2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHJlbW92ZVNoaXBQcmV2aWV3KGUsIGN1cnJlbnRTaGlwLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcclxuXHJcbiAgICByZXNldFBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UGxhY2VTaGlwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRTaGlwUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJvYXJkLXNxdWFyZScpO1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuXHJcbiAgICBib2FyZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGxheWVyQm9hcmQuaXNQbGFjZW1lbnRQb3NzaWJsZShjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpKSB7XHJcbiAgICAgIGxldCB0YXJnZXRBcnIgPSBbXTtcclxuXHJcbiAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ2hvcml6b250YWwnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vdC1hbGxvd2VkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlU2hpcFByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuXHJcbiAgICBpZiAocGxheWVyQm9hcmQuaXNQbGFjZW1lbnRQb3NzaWJsZShjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpKSB7XHJcbiAgICAgIGxldCB0YXJnZXRBcnIgPSBbXTtcclxuXHJcbiAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ2hvcml6b250YWwnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldEFycltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnJbaV0ucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFsbG93ZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZCA9IChlLCBvcmllbnRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0QXJyID0gW107XHJcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBlLnRhcmdldDtcclxuICAgICAgbGV0IG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgdGFyZ2V0QXJyLnB1c2goY3VycmVudCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2gobmV4dCk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGxldCBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuXHJcbiAgICAgIHRhcmdldEFyci5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKG5leHQpO1xyXG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0QXJyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG5cclxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc1BsYWNlbWVudFBvc3NpYmxlKGN1cnJlbnRTaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCkpIHtcclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG5cclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAndmVydGljYWwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIHRhcmdldEFycltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50U2hpcCAhPT0gc2hpcHNbNF0pIHtcclxuICAgICAgICBjaGFuZ2VTaGlwKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnQ2hhbmdlIHRvIG1haW4gc2NyZWVuJyk7XHJcbiAgICAgIGNvbnN0IGJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYm9hcmQtc3F1YXJlJyk7XHJcblxyXG4gICAgICBib2FyZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFkZFNoaXBQcmV2aWV3KTtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByZW1vdmVTaGlwUHJldmlldyk7XHJcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYWNlU2hpcEluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5wbGFjZS1zaGlwLWluc3RydWN0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcclxuICAgICAgJ0NhcnJpZXInLFxyXG4gICAgICAnQmF0dGxlU2hpcCcsXHJcbiAgICAgICdEZXN0cm95ZXInLFxyXG4gICAgICAnU3VibWFyaW5lJyxcclxuICAgICAgJ1BhdHJvbCBCb2F0JyxcclxuICAgIF07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoY3VycmVudFNoaXAgPT09IHNoaXBzW2ldKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwc1tpICsgMV07XHJcbiAgICAgICAgcGxhY2VTaGlwSW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gYFBsYWNlIHlvdXIgJHtzaGlwTmFtZXNbaSArIDFdfWA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgIGlmIChpc1ZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICBpc1ZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzVmVydGljYWwgPSBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFBsYWNlU2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gICAgbG9hZFBsYWNlU2hpcFNjcmVlbigpO1xyXG4gICAgY3VycmVudFNoaXAgPSBzaGlwc1swXTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsb2FkUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvdWknO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRQYWdlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9