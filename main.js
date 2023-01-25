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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\n.main {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ship-preview, .placed {\r\n    background-color: gray;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.shooting-allowed {\r\n    cursor: crosshair;\r\n}\r\n\r\n.ship-is-shot {\r\n    background-color: red;\r\n}\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 1rem;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .main {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sDAAsD;IACtD,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,kDAAkD;IACtD;AACJ","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\n.main {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ship-preview, .placed {\r\n    background-color: gray;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.shooting-allowed {\r\n    cursor: crosshair;\r\n}\r\n\r\n.ship-is-shot {\r\n    background-color: red;\r\n}\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 1rem;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .main {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}"],"sourceRoot":""}]);
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
  const playerCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(5, 'Carrier');
  const playerBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(4, 'Battleship');
  const playerDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(3, 'Destroyer');
  const playerSubmarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(3, 'Submarine');
  const playerPatrolboat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(2, 'Patrolboat');

  const getPlayer = (playerName) =>
    playerName === 'player' ? player : computer;

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

  const restart = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
  };

  const computerTurn = () => {
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

  return {
    init,
    getPlayer,
    getWinner,
    getGameBoard,
    getPlayerShips,
    restart,
    computerTurn,
    over,
  };
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
    if (isAlreadyShot(index)) return false;

    gameBoard.receiveAttack(index);
    shotCoordinates.push(index);
    return true;
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
const Ship = (length, name) => {
  let numOfHits = 0;

  const getLength = () => length;

  const getName = () => name;

  const getNumOfHits = () => numOfHits;

  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;

  return { hit, isSunk, getNumOfHits, getLength, getName };
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



const UI = (() => {
  const loadPage = () => {
    loadPlaceShipScreen();
  };

  const createGameBoard = (player) => {
    const boardElement = document.querySelector(`.${player}-board`);
    const gameBoardArr = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard(`${player}`).getBoard();

    for (let i = 0; i < gameBoardArr.length; i += 1) {
      if (player === 'player') {
        boardElement.innerHTML += `<div class="${player}-board-square" data-index="${i}" data-hasShip="${gameBoardArr[i].hasShip}" data-isShot="${gameBoardArr[i].isShot}"></div>`;
      } else {
        boardElement.innerHTML += `<div class="${player}-board-square" data-index="${i}"  data-isShot="${gameBoardArr[i].isShot}"></div>`;
      }
    }
  };

  const loadFleet = (player) => {
    const boardSquares = document.querySelectorAll(`.${player}-board-square`);
    const gameBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard(`${player}`).getBoard();

    for (let i = 0; i < gameBoard.length; i += 1) {
      if (gameBoard[i].hasShip) {
        boardSquares[i].classList.add('placed');
      }
    }
  };

  // The following functions are for the placing ship screen
  const ships = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerShips();
  let currentShip = ships[0];
  let isVertical = false;

  const loadPlaceShipScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML += `
    <section class="placing-ship">
      <span class="place-ship-instruction">Place your ${currentShip.getName()}</span>
      <div class="player-board gameboard"></div>
      <div class="place-ship-buttons">
        <button class="rotate-btn">Rotate</button>
        <button class="random-btn">Place randomly</button>
        <button class="reset-btn">Reset</button>
      </div>
    </section>`;

    createGameBoard('player');
    loadFleet('player');
    placeShipInitEvents('enable');
  };

  // Adding event listeners
  const placeShipInitEvents = (command) => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const rotateBtn = document.querySelector('.rotate-btn');
    const randomBtn = document.querySelector('.random-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-btn');

    if (command === 'enable') {
      playerBoardSquares.forEach((square) => {
        square.addEventListener('mouseover', addShipPreview);
        square.addEventListener('mouseout', removeShipPreview);
        square.addEventListener('click', placeShip);

        square.classList.add('placing');
      });

      rotateBtn.addEventListener('click', rotateShip);
      resetPlaceShipBtn.addEventListener('click', resetPlaceShip);
      randomBtn.addEventListener('click', placeShipsRandomly);
    } else {
      playerBoardSquares.forEach((square) => {
        square.removeEventListener('mouseover', addShipPreview);
        square.removeEventListener('mouseout', removeShipPreview);
        square.removeEventListener('click', placeShip);

        square.classList.remove('placing');
      });
    }
  };

  // Function when mouse is over the board squares
  const addShipPreview = (e) => {
    const playerBoardObj = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoardObj.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].classList.add('ship-preview');
      }
    } else {
      e.target.classList.add('not-allowed');
    }
  };

  // Function when mouse is out from each of the board squares
  const removeShipPreview = (e) => {
    const playerBoardObj = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoardObj.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (targetArr[i].getAttribute('data-hasShip') === 'false') {
          targetArr[i].classList.remove('ship-preview');
        }
      }
    } else {
      e.target.classList.remove('not-allowed');
    }
  };

  // Returns an array that contains the coordinates
  // for the specific ship and it's orientation
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

  // Function for placing ships
  const placeShip = (e) => {
    const playerBoardObj = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoardObj.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      playerBoardObj.placeShip(currentShip, index, isVertical);

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].setAttribute('data-hasShip', 'true');
        targetArr[i].classList.remove('placing');
        targetArr[i].classList.remove('ship-preview');
        targetArr[i].classList.add('placed');
      }

      if (currentShip !== ships[4]) {
        changeShip();
        return;
      }

      donePlacingShips();
    }
  };

  const placeShipsRandomly = () => {
    const playerBoardObj = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');

    playerBoardObj.resetBoard();
    playerBoardObj.randomPlaceShips();
    updateBoard(playerBoardObj);
    donePlacingShips();
  };

  const updateBoard = (boardObj) => {
    const thisBoard = boardObj.getBoard();
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );

    for (let i = 0; i < thisBoard.length; i += 1) {
      playerBoardSquares[i].classList.remove('placed');
      playerBoardSquares[i].setAttribute('data-hasShip', 'false');

      if (thisBoard[i].hasShip) {
        playerBoardSquares[i].setAttribute('data-hasShip', 'true');
        playerBoardSquares[i].classList.add('placed');
      }
    }
  };

  // Function for changing ship after the previous ship was placed
  const changeShip = () => {
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );
    const shipNames = [];

    ships.forEach((ship) => {
      shipNames.push(ship.getName());
    });

    for (let i = 0; i < ships.length; i += 1) {
      if (currentShip === ships[i]) {
        currentShip = ships[i + 1];
        placeShipInstruction.innerHTML = `Place your ${shipNames[i + 1]}`;
        return;
      }
    }
  };

  const rotateShip = () => {
    isVertical ? (isVertical = false) : (isVertical = true);
  };

  const resetPlaceShip = () => {
    const main = document.querySelector('.main');

    _game__WEBPACK_IMPORTED_MODULE_1__["default"].restart();
    main.innerHTML = '';
    loadPlaceShipScreen();
    currentShip = ships[0];
  };

  const donePlacingShips = () => {
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );

    placeShipInitEvents('disable');

    placeShipInstruction.innerHTML = `<button class="start-btn">Start Game</button>`;
    const startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener('click', loadMainGameScreen);
  };

  // The following functions are for the main game screen
  const loadMainGameScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML = `
      <section class="gameboard-container">
        <div class="player-board gameboard"></div>
        <span class="gameboard-name">Your game board</span>
      </section>
      <section class="game-info-container">
        <span class="game-info">Your turn...</span>
        <button class="restart-game-btn">Restart Game</button>
      </section>
      <section class="gameboard-container">
        <div class="computer-board gameboard"></div>
        <span class="gameboard-name">Computer game board</span>
      </section>`;

    _game__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    createGameBoard('player');
    createGameBoard('computer');
    loadFleet('player');
    loadFleet('computer');
    initGameEvents('enable');
  };

  const initGameEvents = (command) => {
    const computerBoardSquares = document.querySelectorAll(
      '.computer-board-square'
    );
    const restartGameBtn = document.querySelector('.restart-game-btn');

    if (command === 'enable') {
      computerBoardSquares.forEach((square) => {
        square.addEventListener('click', playerAttack);
        square.classList.add('shooting-allowed');
      });

      restartGameBtn.addEventListener('click', restartGame);
    } else {
      computerBoardSquares.forEach((square) => {
        square.removeEventListener('click', playerAttack);
        square.classList.remove('shooting-allowed');
      });
    }
  };

  const playerAttack = (e) => {
    const targetElement = e.target;
    const index = parseInt(targetElement.getAttribute('data-index'));
    const player = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayer('player');
    const computerBoardObj = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('computer');
    const computerBoardArr = computerBoardObj.getBoard();

    if (!player.attack(computerBoardObj, index)) return;

    for (let i = 0; i < computerBoardArr.length; i += 1) {
      if (i === index && computerBoardArr[i].hasShip) {
        targetElement.classList.add('ship-is-shot');
      }
    }

    targetElement.textContent = 'X';
    targetElement.setAttribute('data-isShot', 'true');
    targetElement.classList.remove('shooting-allowed');
    targetElement.classList.add('not-allowed');

    if (!_game__WEBPACK_IMPORTED_MODULE_1__["default"].over()) {
      computerAttack();
      return;
    }

    endGame();
  };

  const computerAttack = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player').getBoard();
    const gameInfo = document.querySelector('.game-info');

    _game__WEBPACK_IMPORTED_MODULE_1__["default"].computerTurn();
    gameInfo.innerHTML = "Computer's turn...";
    initGameEvents('disable');

    setTimeout(() => {
      for (let i = 0; i < playerBoard.length; i += 1) {
        const { hasShip } = playerBoard[i];
        const { isShot } = playerBoard[i];
        if (isShot) {
          playerBoardSquares[i].textContent = 'X';
          if (hasShip) {
            playerBoardSquares[i].style.backgroundColor = 'red';
          }
        }
      }

      setTimeout(() => {
        gameInfo.innerHTML = 'Your turn...';
        initGameEvents('enable');
      }, 1000);
    }, 1000);

    if (_game__WEBPACK_IMPORTED_MODULE_1__["default"].over()) {
      endGame();
    }
  };

  const endGame = () => {
    const winner = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getWinner();
    const gameInfo = document.querySelector('.game-info');
    const restartGameBtn = document.querySelector('.restart-game-btn');

    if (winner === 'player') {
      gameInfo.innerHTML = `You win!`;
    } else {
      gameInfo.innerHTML = `Computer wins!`;
    }
    initGameEvents('disable');

    restartGameBtn.textContent = `Play Again`;
  };

  const restartGame = () => {
    const main = document.querySelector('.main');

    main.innerHTML = '';
    _game__WEBPACK_IMPORTED_MODULE_1__["default"].restart();
    loadPlaceShipScreen();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBOEI7QUFDOUI7QUFDQSw4Q0FBOEMsNERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcHJldmlldywgLnBsYWNlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wbGFjaW5nIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWFsbG93ZWQge1xcclxcbiAgICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5zaG9vdGluZy1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWlzLXNob3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxLjlyZW0pIC8gcmVwZWF0KDEwLCAxLjlyZW0pO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2ODVweCkge1xcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMnJlbSkgLyByZXBlYXQoMTAsIDJyZW0pO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0RBQXNEO0lBQ3RELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0RBQWtEO0lBQ3REO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wcmV2aWV3LCAucGxhY2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNpbmcge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3QtYWxsb3dlZCB7XFxyXFxuICAgIGN1cnNvcjogbm8tZHJvcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob290aW5nLWFsbG93ZWQge1xcclxcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaXMtc2hvdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDEuOXJlbSkgLyByZXBlYXQoMTAsIDEuOXJlbSk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY4NXB4KSB7XFxyXFxuICAgIC5tYWluIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5nYW1lYm9hcmQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAycmVtKSAvIHJlcGVhdCgxMCwgMnJlbSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcclxuXHJcbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xyXG4gIGxldCB3aW5uZXIgPSAnJztcclxuICAvLyBDcmVhdGUgcGxheWVyc1xyXG4gIGNvbnN0IHBsYXllciA9IFBsYXllcigncGxheWVyJyk7XHJcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcblxyXG4gIC8vIENyZWF0ZSBwbGF5ZXIncyBib2FyZHNcclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBsYXllcnMgc2hpcHNcclxuICBjb25zdCBwbGF5ZXJDYXJyaWVyID0gU2hpcCg1LCAnQ2FycmllcicpO1xyXG4gIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XHJcbiAgY29uc3QgcGxheWVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XHJcbiAgY29uc3QgcGxheWVyU3VibWFyaW5lID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgY29uc3QgcGxheWVyUGF0cm9sYm9hdCA9IFNoaXAoMiwgJ1BhdHJvbGJvYXQnKTtcclxuXHJcbiAgY29uc3QgZ2V0UGxheWVyID0gKHBsYXllck5hbWUpID0+XHJcbiAgICBwbGF5ZXJOYW1lID09PSAncGxheWVyJyA/IHBsYXllciA6IGNvbXB1dGVyO1xyXG5cclxuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAocGxheWVyTmFtZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck5hbWUgPT09ICdwbGF5ZXInKSByZXR1cm4gcGxheWVyQm9hcmQ7XHJcbiAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJTaGlwcyA9ICgpID0+IFtcclxuICAgIHBsYXllckNhcnJpZXIsXHJcbiAgICBwbGF5ZXJCYXR0bGVzaGlwLFxyXG4gICAgcGxheWVyRGVzdHJveWVyLFxyXG4gICAgcGxheWVyU3VibWFyaW5lLFxyXG4gICAgcGxheWVyUGF0cm9sYm9hdCxcclxuICBdO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29tcHV0ZXJCb2FyZC5yYW5kb21QbGFjZVNoaXBzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcclxuICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcclxuICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJCb2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3ZlciA9ICgpID0+IHtcclxuICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc0hhdmVTdW5rKCkpIHtcclxuICAgICAgd2lubmVyID0gY29tcHV0ZXIuZ2V0TmFtZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzSGF2ZVN1bmsoKSkge1xyXG4gICAgICB3aW5uZXIgPSBwbGF5ZXIuZ2V0TmFtZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0LFxyXG4gICAgZ2V0UGxheWVyLFxyXG4gICAgZ2V0V2lubmVyLFxyXG4gICAgZ2V0R2FtZUJvYXJkLFxyXG4gICAgZ2V0UGxheWVyU2hpcHMsXHJcbiAgICByZXN0YXJ0LFxyXG4gICAgY29tcHV0ZXJUdXJuLFxyXG4gICAgb3ZlcixcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XHJcblxyXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgbGV0IGJvYXJkID0gW107XHJcbiAgbGV0IG51bU9mU2hpcHNTdW5rID0gMDtcclxuXHJcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcclxuXHJcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XHJcbiAgICAgIGJvYXJkLnB1c2goeyBzaGlwOiBudWxsLCBoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgYm9hcmQgPSBbXTtcclxuICAgIGNyZWF0ZUJvYXJkKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghaXNQbGFjZW1lbnRQb3NzaWJsZShzaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCkgKiAxMDsgaSArPSAxMCkge1xyXG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0uaGFzU2hpcCA9IHRydWU7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBib2FyZFtpbmRleCArIGldLmhhc1NoaXAgPSB0cnVlO1xyXG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21QbGFjZVNoaXBzID0gKCkgPT4ge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgIGxldCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSA8PSA1O1xyXG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSk7XHJcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0KTtcclxuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMyk7XHJcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMpO1xyXG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMik7XHJcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0XTtcclxuXHJcbiAgICBzaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgd2hpbGUgKHBsYWNlU2hpcChzaGlwLCByYW5kb21JbmRleCwgcmFuZG9tT3JpZW50YXRpb24pID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSA8PSA1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1BsYWNlbWVudFBvc3NpYmxlID0gKHNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsID0gZmFsc2UpID0+IHtcclxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiA5OCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIGlmIHNoaXAgZG9lc24ndCBmaXQgZ2FtZWJvYXJkXHJcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICBpZiAoKHNoaXAuZ2V0TGVuZ3RoKCkgLSAxKSAqIDEwICsgaW5kZXggPiA5OSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMTApIHtcclxuICAgICAgICBpZiAoaW5kZXggPD0gOSArIGkpIHtcclxuICAgICAgICAgIGlmIChzaGlwLmdldExlbmd0aCgpIC0gMSArIGluZGV4ID4gOSArIGkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBmaWVsZCBpcyBhbHJlYWR5IHRha2VuXHJcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChib2FyZFtpbmRleCArIGkgKiAxMF0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChib2FyZFtpbmRleCArIGldLmhhc1NoaXAgPT09IHRydWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGlmIChib2FyZFtpbmRleF0uaXNTaG90ID09PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgYm9hcmRbaW5kZXhdLmlzU2hvdCA9IHRydWU7XHJcbiAgICBpZiAoYm9hcmRbaW5kZXhdLmhhc1NoaXApIHtcclxuICAgICAgYm9hcmRbaW5kZXhdLnNoaXAuaGl0KCk7XHJcbiAgICAgIGlmIChib2FyZFtpbmRleF0uc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIG51bU9mU2hpcHNTdW5rICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRFbXB0eUNvb3JkaW5hdGVzID0gKCkgPT5cclxuICAgIGJvYXJkLmZpbHRlcigoY29vcmRpbmF0ZSkgPT4gY29vcmRpbmF0ZS5oYXNTaGlwID09PSBmYWxzZSkubGVuZ3RoO1xyXG5cclxuICBjb25zdCBhbGxTaGlwc0hhdmVTdW5rID0gKCkgPT4gbnVtT2ZTaGlwc1N1bmsgPT09IDU7XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJvYXJkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmFuZG9tUGxhY2VTaGlwcyxcclxuICAgIGlzUGxhY2VtZW50UG9zc2libGUsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgYWxsU2hpcHNIYXZlU3VuayxcclxuICAgIHJlc2V0Qm9hcmQsXHJcbiAgICBnZXRFbXB0eUNvb3JkaW5hdGVzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XHJcbiIsImNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgY29uc3Qgc2hvdENvb3JkaW5hdGVzID0gW107XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9IChnYW1lQm9hcmQsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaXNBbHJlYWR5U2hvdChpbmRleCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XHJcbiAgICBzaG90Q29vcmRpbmF0ZXMucHVzaChpbmRleCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZUJvYXJkKSA9PiB7XHJcbiAgICBpZiAoc2hvdENvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMTAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG5cclxuICAgIHdoaWxlIChpc0FscmVhZHlTaG90KGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3RDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNBbHJlYWR5U2hvdCA9IChpbmRleCkgPT4gc2hvdENvb3JkaW5hdGVzLmluY2x1ZGVzKGluZGV4KTtcclxuXHJcbiAgcmV0dXJuIHsgYXR0YWNrLCByYW5kb21BdHRhY2ssIGdldE5hbWUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIG5hbWUpID0+IHtcclxuICBsZXQgbnVtT2ZIaXRzID0gMDtcclxuXHJcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xyXG5cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuXHJcbiAgY29uc3QgZ2V0TnVtT2ZIaXRzID0gKCkgPT4gbnVtT2ZIaXRzO1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBudW1PZkhpdHMgKz0gMTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBudW1PZkhpdHMgPT09IGxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoLCBnZXROYW1lIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgbG9hZFBsYWNlU2hpcFNjcmVlbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllcn0tYm9hcmRgKTtcclxuICAgIGNvbnN0IGdhbWVCb2FyZEFyciA9IEdhbWUuZ2V0R2FtZUJvYXJkKGAke3BsYXllcn1gKS5nZXRCb2FyZCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXInKSB7XHJcbiAgICAgICAgYm9hcmRFbGVtZW50LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cIiR7cGxheWVyfS1ib2FyZC1zcXVhcmVcIiBkYXRhLWluZGV4PVwiJHtpfVwiIGRhdGEtaGFzU2hpcD1cIiR7Z2FtZUJvYXJkQXJyW2ldLmhhc1NoaXB9XCIgZGF0YS1pc1Nob3Q9XCIke2dhbWVCb2FyZEFycltpXS5pc1Nob3R9XCI+PC9kaXY+YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib2FyZEVsZW1lbnQuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiJHtwbGF5ZXJ9LWJvYXJkLXNxdWFyZVwiIGRhdGEtaW5kZXg9XCIke2l9XCIgIGRhdGEtaXNTaG90PVwiJHtnYW1lQm9hcmRBcnJbaV0uaXNTaG90fVwiPjwvZGl2PmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkRmxlZXQgPSAocGxheWVyKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXJ9LWJvYXJkLXNxdWFyZWApO1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoYCR7cGxheWVyfWApLmdldEJvYXJkKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGdhbWVCb2FyZFtpXS5oYXNTaGlwKSB7XHJcbiAgICAgICAgYm9hcmRTcXVhcmVzW2ldLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIGZvciB0aGUgcGxhY2luZyBzaGlwIHNjcmVlblxyXG4gIGNvbnN0IHNoaXBzID0gR2FtZS5nZXRQbGF5ZXJTaGlwcygpO1xyXG4gIGxldCBjdXJyZW50U2hpcCA9IHNoaXBzWzBdO1xyXG4gIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGxvYWRQbGFjZVNoaXBTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCArPSBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBsYWNpbmctc2hpcFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBsYWNlLXNoaXAtaW5zdHJ1Y3Rpb25cIj5QbGFjZSB5b3VyICR7Y3VycmVudFNoaXAuZ2V0TmFtZSgpfTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1ib2FyZCBnYW1lYm9hcmRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNoaXAtYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3RhdGUtYnRuXCI+Um90YXRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJhbmRvbS1idG5cIj5QbGFjZSByYW5kb21seTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5gO1xyXG5cclxuICAgIGNyZWF0ZUdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBsb2FkRmxlZXQoJ3BsYXllcicpO1xyXG4gICAgcGxhY2VTaGlwSW5pdEV2ZW50cygnZW5hYmxlJyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQWRkaW5nIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGNvbnN0IHBsYWNlU2hpcEluaXRFdmVudHMgPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XHJcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLWJ0bicpO1xyXG4gICAgY29uc3QgcmVzZXRQbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XHJcblxyXG4gICAgaWYgKGNvbW1hbmQgPT09ICdlbmFibGUnKSB7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkU2hpcFByZXZpZXcpO1xyXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZVNoaXBQcmV2aWV3KTtcclxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXApO1xyXG5cclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2luZycpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApO1xyXG4gICAgICByZXNldFBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UGxhY2VTaGlwKTtcclxuICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwc1JhbmRvbWx5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkU2hpcFByZXZpZXcpO1xyXG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZVNoaXBQcmV2aWV3KTtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXApO1xyXG5cclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB3aGVuIG1vdXNlIGlzIG92ZXIgdGhlIGJvYXJkIHNxdWFyZXNcclxuICBjb25zdCBhZGRTaGlwUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZE9iaiA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG5cclxuICAgIGlmIChwbGF5ZXJCb2FyZE9iai5pc1BsYWNlbWVudFBvc3NpYmxlKGN1cnJlbnRTaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCkpIHtcclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG5cclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAndmVydGljYWwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vdC1hbGxvd2VkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gd2hlbiBtb3VzZSBpcyBvdXQgZnJvbSBlYWNoIG9mIHRoZSBib2FyZCBzcXVhcmVzXHJcbiAgY29uc3QgcmVtb3ZlU2hpcFByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuXHJcbiAgICBpZiAocGxheWVyQm9hcmRPYmouaXNQbGFjZW1lbnRQb3NzaWJsZShjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpKSB7XHJcbiAgICAgIGxldCB0YXJnZXRBcnIgPSBbXTtcclxuXHJcbiAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ2hvcml6b250YWwnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldEFycltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtYWxsb3dlZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29vcmRpbmF0ZXNcclxuICAvLyBmb3IgdGhlIHNwZWNpZmljIHNoaXAgYW5kIGl0J3Mgb3JpZW50YXRpb25cclxuICBjb25zdCBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZCA9IChlLCBvcmllbnRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0QXJyID0gW107XHJcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBlLnRhcmdldDtcclxuICAgICAgbGV0IG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgdGFyZ2V0QXJyLnB1c2goY3VycmVudCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2gobmV4dCk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGxldCBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuXHJcbiAgICAgIHRhcmdldEFyci5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKG5leHQpO1xyXG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0QXJyO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIGZvciBwbGFjaW5nIHNoaXBzXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkT2JqID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcblxyXG4gICAgaWYgKHBsYXllckJvYXJkT2JqLmlzUGxhY2VtZW50UG9zc2libGUoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcblxyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICdob3Jpem9udGFsJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllckJvYXJkT2JqLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXNTaGlwJywgJ3RydWUnKTtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpO1xyXG4gICAgICAgIHRhcmdldEFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXByZXZpZXcnKTtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50U2hpcCAhPT0gc2hpcHNbNF0pIHtcclxuICAgICAgICBjaGFuZ2VTaGlwKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb25lUGxhY2luZ1NoaXBzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcblxyXG4gICAgcGxheWVyQm9hcmRPYmoucmVzZXRCb2FyZCgpO1xyXG4gICAgcGxheWVyQm9hcmRPYmoucmFuZG9tUGxhY2VTaGlwcygpO1xyXG4gICAgdXBkYXRlQm9hcmQocGxheWVyQm9hcmRPYmopO1xyXG4gICAgZG9uZVBsYWNpbmdTaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkT2JqKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzQm9hcmQgPSBib2FyZE9iai5nZXRCb2FyZCgpO1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXNCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgaWYgKHRoaXNCb2FyZFtpXS5oYXNTaGlwKSB7XHJcbiAgICAgICAgcGxheWVyQm9hcmRTcXVhcmVzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXNTaGlwJywgJ3RydWUnKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiBmb3IgY2hhbmdpbmcgc2hpcCBhZnRlciB0aGUgcHJldmlvdXMgc2hpcCB3YXMgcGxhY2VkXHJcbiAgY29uc3QgY2hhbmdlU2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYWNlU2hpcEluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5wbGFjZS1zaGlwLWluc3RydWN0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtdO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgc2hpcE5hbWVzLnB1c2goc2hpcC5nZXROYW1lKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoY3VycmVudFNoaXAgPT09IHNoaXBzW2ldKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwc1tpICsgMV07XHJcbiAgICAgICAgcGxhY2VTaGlwSW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gYFBsYWNlIHlvdXIgJHtzaGlwTmFtZXNbaSArIDFdfWA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgIGlzVmVydGljYWwgPyAoaXNWZXJ0aWNhbCA9IGZhbHNlKSA6IChpc1ZlcnRpY2FsID0gdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRQbGFjZVNoaXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBHYW1lLnJlc3RhcnQoKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsb2FkUGxhY2VTaGlwU2NyZWVuKCk7XHJcbiAgICBjdXJyZW50U2hpcCA9IHNoaXBzWzBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbmVQbGFjaW5nU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGFjZVNoaXBJbnN0cnVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGxhY2Utc2hpcC1pbnN0cnVjdGlvbidcclxuICAgICk7XHJcblxyXG4gICAgcGxhY2VTaGlwSW5pdEV2ZW50cygnZGlzYWJsZScpO1xyXG5cclxuICAgIHBsYWNlU2hpcEluc3RydWN0aW9uLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwic3RhcnQtYnRuXCI+U3RhcnQgR2FtZTwvYnV0dG9uPmA7XHJcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1haW5HYW1lU2NyZWVuKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgZm9yIHRoZSBtYWluIGdhbWUgc2NyZWVuXHJcbiAgY29uc3QgbG9hZE1haW5HYW1lU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcblxyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FtZWJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItYm9hcmQgZ2FtZWJvYXJkXCI+PC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJnYW1lYm9hcmQtbmFtZVwiPllvdXIgZ2FtZSBib2FyZDwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImdhbWUtaW5mby1jb250YWluZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdhbWUtaW5mb1wiPllvdXIgdHVybi4uLjwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzdGFydC1nYW1lLWJ0blwiPlJlc3RhcnQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FtZWJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlci1ib2FyZCBnYW1lYm9hcmRcIj48L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdhbWVib2FyZC1uYW1lXCI+Q29tcHV0ZXIgZ2FtZSBib2FyZDwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPmA7XHJcblxyXG4gICAgR2FtZS5pbml0KCk7XHJcbiAgICBjcmVhdGVHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY3JlYXRlR2FtZUJvYXJkKCdjb21wdXRlcicpO1xyXG4gICAgbG9hZEZsZWV0KCdwbGF5ZXInKTtcclxuICAgIGxvYWRGbGVldCgnY29tcHV0ZXInKTtcclxuICAgIGluaXRHYW1lRXZlbnRzKCdlbmFibGUnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0R2FtZUV2ZW50cyA9IChjb21tYW5kKSA9PiB7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuY29tcHV0ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtZ2FtZS1idG4nKTtcclxuXHJcbiAgICBpZiAoY29tbWFuZCA9PT0gJ2VuYWJsZScpIHtcclxuICAgICAgY29tcHV0ZXJCb2FyZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrKTtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hvb3RpbmctYWxsb3dlZCcpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcHV0ZXJCb2FyZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrKTtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvb3RpbmctYWxsb3dlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIGNvbnN0IHBsYXllciA9IEdhbWUuZ2V0UGxheWVyKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgnY29tcHV0ZXInKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRBcnIgPSBjb21wdXRlckJvYXJkT2JqLmdldEJvYXJkKCk7XHJcblxyXG4gICAgaWYgKCFwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyQm9hcmRPYmosIGluZGV4KSkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJCb2FyZEFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoaSA9PT0gaW5kZXggJiYgY29tcHV0ZXJCb2FyZEFycltpXS5oYXNTaGlwKSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLXNob3QnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldEVsZW1lbnQudGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICB0YXJnZXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pc1Nob3QnLCAndHJ1ZScpO1xyXG4gICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG9vdGluZy1hbGxvd2VkJyk7XHJcbiAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1hbGxvd2VkJyk7XHJcblxyXG4gICAgaWYgKCFHYW1lLm92ZXIoKSkge1xyXG4gICAgICBjb21wdXRlckF0dGFjaygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpLmdldEJvYXJkKCk7XHJcbiAgICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8nKTtcclxuXHJcbiAgICBHYW1lLmNvbXB1dGVyVHVybigpO1xyXG4gICAgZ2FtZUluZm8uaW5uZXJIVE1MID0gXCJDb21wdXRlcidzIHR1cm4uLi5cIjtcclxuICAgIGluaXRHYW1lRXZlbnRzKCdkaXNhYmxlJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCB7IGhhc1NoaXAgfSA9IHBsYXllckJvYXJkW2ldO1xyXG4gICAgICAgIGNvbnN0IHsgaXNTaG90IH0gPSBwbGF5ZXJCb2FyZFtpXTtcclxuICAgICAgICBpZiAoaXNTaG90KSB7XHJcbiAgICAgICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgICBpZiAoaGFzU2hpcCkge1xyXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBnYW1lSW5mby5pbm5lckhUTUwgPSAnWW91ciB0dXJuLi4uJztcclxuICAgICAgICBpbml0R2FtZUV2ZW50cygnZW5hYmxlJyk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgaWYgKEdhbWUub3ZlcigpKSB7XHJcbiAgICAgIGVuZEdhbWUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lubmVyID0gR2FtZS5nZXRXaW5uZXIoKTtcclxuICAgIGNvbnN0IGdhbWVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5mbycpO1xyXG4gICAgY29uc3QgcmVzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1nYW1lLWJ0bicpO1xyXG5cclxuICAgIGlmICh3aW5uZXIgPT09ICdwbGF5ZXInKSB7XHJcbiAgICAgIGdhbWVJbmZvLmlubmVySFRNTCA9IGBZb3Ugd2luIWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnYW1lSW5mby5pbm5lckhUTUwgPSBgQ29tcHV0ZXIgd2lucyFgO1xyXG4gICAgfVxyXG4gICAgaW5pdEdhbWVFdmVudHMoJ2Rpc2FibGUnKTtcclxuXHJcbiAgICByZXN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9IGBQbGF5IEFnYWluYDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5cclxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBHYW1lLnJlc3RhcnQoKTtcclxuICAgIGxvYWRQbGFjZVNoaXBTY3JlZW4oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsb2FkUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvdWknO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRQYWdlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9