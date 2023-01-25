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
    placeShipInitEvents(true);
  };

  // Adding event listeners
  const placeShipInitEvents = (enable) => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const rotateBtn = document.querySelector('.rotate-btn');
    const randomBtn = document.querySelector('.random-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-btn');

    if (enable) {
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

    placeShipInitEvents(false);

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
    initGameEvents(true);
  };

  const initGameEvents = (enable) => {
    const computerBoardSquares = document.querySelectorAll(
      '.computer-board-square'
    );
    const restartGameBtn = document.querySelector('.restart-game-btn');

    if (enable) {
      computerBoardSquares.forEach((square) => {
        square.addEventListener('click', playerAttack);
        if (square.getAttribute('data-isShot') === 'false') {
          square.classList.add('shooting-allowed');
        }
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
    initGameEvents(false);

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
        initGameEvents(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O1VDeGFsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQThCO0FBQzlCO0FBQ0EsOENBQThDLDREQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXByZXZpZXcsIC5wbGFjZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2luZyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBuby1kcm9wO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvb3RpbmctYWxsb3dlZCB7XFxyXFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1pcy1zaG90IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMS45cmVtKSAvIHJlcGVhdCgxMCwgMS45cmVtKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjg1cHgpIHtcXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDJyZW0pIC8gcmVwZWF0KDEwLCAycmVtKTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNEQUFzRDtJQUN0RCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtEQUFrRDtJQUN0RDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcHJldmlldywgLnBsYWNlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wbGFjaW5nIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWFsbG93ZWQge1xcclxcbiAgICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5zaG9vdGluZy1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWlzLXNob3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxLjlyZW0pIC8gcmVwZWF0KDEwLCAxLjlyZW0pO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2ODVweCkge1xcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMnJlbSkgLyByZXBlYXQoMTAsIDJyZW0pO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XHJcblxyXG5jb25zdCBHYW1lID0gKCgpID0+IHtcclxuICBsZXQgd2lubmVyID0gJyc7XHJcbiAgLy8gQ3JlYXRlIHBsYXllcnNcclxuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoJ3BsYXllcicpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicpO1xyXG5cclxuICAvLyBDcmVhdGUgcGxheWVyJ3MgYm9hcmRzXHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZUJvYXJkKCk7XHJcblxyXG4gIC8vIENyZWF0ZSBwbGF5ZXJzIHNoaXBzXHJcbiAgY29uc3QgcGxheWVyQ2FycmllciA9IFNoaXAoNSwgJ0NhcnJpZXInKTtcclxuICBjb25zdCBwbGF5ZXJCYXR0bGVzaGlwID0gU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xyXG4gIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xyXG4gIGNvbnN0IHBsYXllclN1Ym1hcmluZSA9IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xyXG4gIGNvbnN0IHBsYXllclBhdHJvbGJvYXQgPSBTaGlwKDIsICdQYXRyb2xib2F0Jyk7XHJcblxyXG4gIGNvbnN0IGdldFBsYXllciA9IChwbGF5ZXJOYW1lKSA9PlxyXG4gICAgcGxheWVyTmFtZSA9PT0gJ3BsYXllcicgPyBwbGF5ZXIgOiBjb21wdXRlcjtcclxuXHJcbiAgY29uc3QgZ2V0R2FtZUJvYXJkID0gKHBsYXllck5hbWUpID0+IHtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09PSAncGxheWVyJykgcmV0dXJuIHBsYXllckJvYXJkO1xyXG4gICAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UGxheWVyU2hpcHMgPSAoKSA9PiBbXHJcbiAgICBwbGF5ZXJDYXJyaWVyLFxyXG4gICAgcGxheWVyQmF0dGxlc2hpcCxcclxuICAgIHBsYXllckRlc3Ryb3llcixcclxuICAgIHBsYXllclN1Ym1hcmluZSxcclxuICAgIHBsYXllclBhdHJvbGJvYXQsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbXB1dGVyQm9hcmQucmFuZG9tUGxhY2VTaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XHJcbiAgICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XHJcbiAgICBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG92ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNIYXZlU3VuaygpKSB7XHJcbiAgICAgIHdpbm5lciA9IGNvbXB1dGVyLmdldE5hbWUoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc0hhdmVTdW5rKCkpIHtcclxuICAgICAgd2lubmVyID0gcGxheWVyLmdldE5hbWUoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0V2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCxcclxuICAgIGdldFBsYXllcixcclxuICAgIGdldFdpbm5lcixcclxuICAgIGdldEdhbWVCb2FyZCxcclxuICAgIGdldFBsYXllclNoaXBzLFxyXG4gICAgcmVzdGFydCxcclxuICAgIGNvbXB1dGVyVHVybixcclxuICAgIG92ZXIsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEZhY3RvcnknO1xyXG5cclxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gIGxldCBib2FyZCA9IFtdO1xyXG4gIGxldCBudW1PZlNoaXBzU3VuayA9IDA7XHJcblxyXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xyXG4gICAgICBib2FyZC5wdXNoKHsgc2hpcDogbnVsbCwgaGFzU2hpcDogZmFsc2UsIGlzU2hvdDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcclxuICAgIGJvYXJkID0gW107XHJcbiAgICBjcmVhdGVCb2FyZCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxhY2VtZW50UG9zc2libGUoc2hpcCwgaW5kZXgsIGlzVmVydGljYWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpICogMTA7IGkgKz0gMTApIHtcclxuICAgICAgICBib2FyZFtpbmRleCArIGldLmhhc1NoaXAgPSB0cnVlO1xyXG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5oYXNTaGlwID0gdHJ1ZTtcclxuICAgICAgICBib2FyZFtpbmRleCArIGldLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tUGxhY2VTaGlwcyA9ICgpID0+IHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICBsZXQgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgPD0gNTtcclxuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUpO1xyXG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCk7XHJcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMpO1xyXG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XHJcblxyXG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgIHdoaWxlIChwbGFjZVNoaXAoc2hpcCwgcmFuZG9tSW5kZXgsIHJhbmRvbU9yaWVudGF0aW9uKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgPD0gNTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNQbGFjZW1lbnRQb3NzaWJsZSA9IChzaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gOTgpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBpZiBzaGlwIGRvZXNuJ3QgZml0IGdhbWVib2FyZFxyXG4gICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgaWYgKChzaGlwLmdldExlbmd0aCgpIC0gMSkgKiAxMCArIGluZGV4ID4gOTkpIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEwKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDw9IDkgKyBpKSB7XHJcbiAgICAgICAgICBpZiAoc2hpcC5nZXRMZW5ndGgoKSAtIDEgKyBpbmRleCA+IDkgKyBpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgZmllbGQgaXMgYWxyZWFkeSB0YWtlblxyXG4gICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoYm9hcmRbaW5kZXggKyBpICogMTBdLmhhc1NoaXAgPT09IHRydWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoYm9hcmRbaW5kZXggKyBpXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoYm9hcmRbaW5kZXhdLmlzU2hvdCA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgIGJvYXJkW2luZGV4XS5pc1Nob3QgPSB0cnVlO1xyXG4gICAgaWYgKGJvYXJkW2luZGV4XS5oYXNTaGlwKSB7XHJcbiAgICAgIGJvYXJkW2luZGV4XS5zaGlwLmhpdCgpO1xyXG4gICAgICBpZiAoYm9hcmRbaW5kZXhdLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICBudW1PZlNoaXBzU3VuayArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wdHlDb29yZGluYXRlcyA9ICgpID0+XHJcbiAgICBib2FyZC5maWx0ZXIoKGNvb3JkaW5hdGUpID0+IGNvb3JkaW5hdGUuaGFzU2hpcCA9PT0gZmFsc2UpLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgYWxsU2hpcHNIYXZlU3VuayA9ICgpID0+IG51bU9mU2hpcHNTdW5rID09PSA1O1xyXG5cclxuICBjcmVhdGVCb2FyZCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXRCb2FyZCxcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJhbmRvbVBsYWNlU2hpcHMsXHJcbiAgICBpc1BsYWNlbWVudFBvc3NpYmxlLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGFsbFNoaXBzSGF2ZVN1bmssXHJcbiAgICByZXNldEJvYXJkLFxyXG4gICAgZ2V0RW1wdHlDb29yZGluYXRlcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xyXG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gIGNvbnN0IHNob3RDb29yZGluYXRlcyA9IFtdO1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoZ2FtZUJvYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGlzQWxyZWFkeVNob3QoaW5kZXgpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgpO1xyXG4gICAgc2hvdENvb3JkaW5hdGVzLnB1c2goaW5kZXgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVCb2FyZCkgPT4ge1xyXG4gICAgaWYgKHNob3RDb29yZGluYXRlcy5sZW5ndGggPT09IDEwMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBjb29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuXHJcbiAgICB3aGlsZSAoaXNBbHJlYWR5U2hvdChjb29yZGluYXRlKSkge1xyXG4gICAgICBjb29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG90Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcclxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzQWxyZWFkeVNob3QgPSAoaW5kZXgpID0+IHNob3RDb29yZGluYXRlcy5pbmNsdWRlcyhpbmRleCk7XHJcblxyXG4gIHJldHVybiB7IGF0dGFjaywgcmFuZG9tQXR0YWNrLCBnZXROYW1lIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBuYW1lKSA9PiB7XHJcbiAgbGV0IG51bU9mSGl0cyA9IDA7XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcclxuXHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcblxyXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IG51bU9mSGl0cztcclxuXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgbnVtT2ZIaXRzICs9IDE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbnVtT2ZIaXRzID09PSBsZW5ndGg7XHJcblxyXG4gIHJldHVybiB7IGhpdCwgaXNTdW5rLCBnZXROdW1PZkhpdHMsIGdldExlbmd0aCwgZ2V0TmFtZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiaW1wb3J0ICcuLi9hc3NldHMvc3R5bGUuY3NzJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IFVJID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcclxuICAgIGxvYWRQbGFjZVNoaXBTY3JlZW4oKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAocGxheWVyKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LWJvYXJkYCk7XHJcbiAgICBjb25zdCBnYW1lQm9hcmRBcnIgPSBHYW1lLmdldEdhbWVCb2FyZChgJHtwbGF5ZXJ9YCkuZ2V0Qm9hcmQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZEFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyJykge1xyXG4gICAgICAgIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCIke3BsYXllcn0tYm9hcmQtc3F1YXJlXCIgZGF0YS1pbmRleD1cIiR7aX1cIiBkYXRhLWhhc1NoaXA9XCIke2dhbWVCb2FyZEFycltpXS5oYXNTaGlwfVwiIGRhdGEtaXNTaG90PVwiJHtnYW1lQm9hcmRBcnJbaV0uaXNTaG90fVwiPjwvZGl2PmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9hcmRFbGVtZW50LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cIiR7cGxheWVyfS1ib2FyZC1zcXVhcmVcIiBkYXRhLWluZGV4PVwiJHtpfVwiICBkYXRhLWlzU2hvdD1cIiR7Z2FtZUJvYXJkQXJyW2ldLmlzU2hvdH1cIj48L2Rpdj5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZEZsZWV0ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyfS1ib2FyZC1zcXVhcmVgKTtcclxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWUuZ2V0R2FtZUJvYXJkKGAke3BsYXllcn1gKS5nZXRCb2FyZCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChnYW1lQm9hcmRbaV0uaGFzU2hpcCkge1xyXG4gICAgICAgIGJvYXJkU3F1YXJlc1tpXS5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSBmb3IgdGhlIHBsYWNpbmcgc2hpcCBzY3JlZW5cclxuICBjb25zdCBzaGlwcyA9IEdhbWUuZ2V0UGxheWVyU2hpcHMoKTtcclxuICBsZXQgY3VycmVudFNoaXAgPSBzaGlwc1swXTtcclxuICBsZXQgaXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBsb2FkUGxhY2VTaGlwU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcblxyXG4gICAgbWFpbi5pbm5lckhUTUwgKz0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwbGFjaW5nLXNoaXBcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwbGFjZS1zaGlwLWluc3RydWN0aW9uXCI+UGxhY2UgeW91ciAke2N1cnJlbnRTaGlwLmdldE5hbWUoKX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItYm9hcmQgZ2FtZWJvYXJkXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zaGlwLWJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm90YXRlLWJ0blwiPlJvdGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyYW5kb20tYnRuXCI+UGxhY2UgcmFuZG9tbHk8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXQtYnRuXCI+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+YDtcclxuXHJcbiAgICBjcmVhdGVHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgbG9hZEZsZWV0KCdwbGF5ZXInKTtcclxuICAgIHBsYWNlU2hpcEluaXRFdmVudHModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQWRkaW5nIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGNvbnN0IHBsYWNlU2hpcEluaXRFdmVudHMgPSAoZW5hYmxlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLnBsYXllci1ib2FyZC1zcXVhcmUnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcclxuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tYnRuJyk7XHJcbiAgICBjb25zdCByZXNldFBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idG4nKTtcclxuXHJcbiAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkU2hpcFByZXZpZXcpO1xyXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZVNoaXBQcmV2aWV3KTtcclxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXApO1xyXG5cclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2luZycpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApO1xyXG4gICAgICByZXNldFBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UGxhY2VTaGlwKTtcclxuICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwc1JhbmRvbWx5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkU2hpcFByZXZpZXcpO1xyXG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZVNoaXBQcmV2aWV3KTtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXApO1xyXG5cclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB3aGVuIG1vdXNlIGlzIG92ZXIgdGhlIGJvYXJkIHNxdWFyZXNcclxuICBjb25zdCBhZGRTaGlwUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZE9iaiA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG5cclxuICAgIGlmIChwbGF5ZXJCb2FyZE9iai5pc1BsYWNlbWVudFBvc3NpYmxlKGN1cnJlbnRTaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCkpIHtcclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG5cclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAndmVydGljYWwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vdC1hbGxvd2VkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gd2hlbiBtb3VzZSBpcyBvdXQgZnJvbSBlYWNoIG9mIHRoZSBib2FyZCBzcXVhcmVzXHJcbiAgY29uc3QgcmVtb3ZlU2hpcFByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuXHJcbiAgICBpZiAocGxheWVyQm9hcmRPYmouaXNQbGFjZW1lbnRQb3NzaWJsZShjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpKSB7XHJcbiAgICAgIGxldCB0YXJnZXRBcnIgPSBbXTtcclxuXHJcbiAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyID0gcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQoZSwgJ2hvcml6b250YWwnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldEFycltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtYWxsb3dlZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29vcmRpbmF0ZXNcclxuICAvLyBmb3IgdGhlIHNwZWNpZmljIHNoaXAgYW5kIGl0J3Mgb3JpZW50YXRpb25cclxuICBjb25zdCBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZCA9IChlLCBvcmllbnRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0QXJyID0gW107XHJcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBlLnRhcmdldDtcclxuICAgICAgbGV0IG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgdGFyZ2V0QXJyLnB1c2goY3VycmVudCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2gobmV4dCk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGxldCBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuXHJcbiAgICAgIHRhcmdldEFyci5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKG5leHQpO1xyXG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0QXJyO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIGZvciBwbGFjaW5nIHNoaXBzXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkT2JqID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcblxyXG4gICAgaWYgKHBsYXllckJvYXJkT2JqLmlzUGxhY2VtZW50UG9zc2libGUoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcblxyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICdob3Jpem9udGFsJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllckJvYXJkT2JqLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgaW5kZXgsIGlzVmVydGljYWwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgdGFyZ2V0QXJyW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXNTaGlwJywgJ3RydWUnKTtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpO1xyXG4gICAgICAgIHRhcmdldEFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXByZXZpZXcnKTtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50U2hpcCAhPT0gc2hpcHNbNF0pIHtcclxuICAgICAgICBjaGFuZ2VTaGlwKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb25lUGxhY2luZ1NoaXBzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcblxyXG4gICAgcGxheWVyQm9hcmRPYmoucmVzZXRCb2FyZCgpO1xyXG4gICAgcGxheWVyQm9hcmRPYmoucmFuZG9tUGxhY2VTaGlwcygpO1xyXG4gICAgdXBkYXRlQm9hcmQocGxheWVyQm9hcmRPYmopO1xyXG4gICAgZG9uZVBsYWNpbmdTaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkT2JqKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzQm9hcmQgPSBib2FyZE9iai5nZXRCb2FyZCgpO1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXNCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XHJcbiAgICAgIHBsYXllckJvYXJkU3F1YXJlc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgaWYgKHRoaXNCb2FyZFtpXS5oYXNTaGlwKSB7XHJcbiAgICAgICAgcGxheWVyQm9hcmRTcXVhcmVzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXNTaGlwJywgJ3RydWUnKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiBmb3IgY2hhbmdpbmcgc2hpcCBhZnRlciB0aGUgcHJldmlvdXMgc2hpcCB3YXMgcGxhY2VkXHJcbiAgY29uc3QgY2hhbmdlU2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYWNlU2hpcEluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5wbGFjZS1zaGlwLWluc3RydWN0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtdO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgc2hpcE5hbWVzLnB1c2goc2hpcC5nZXROYW1lKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoY3VycmVudFNoaXAgPT09IHNoaXBzW2ldKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwc1tpICsgMV07XHJcbiAgICAgICAgcGxhY2VTaGlwSW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gYFBsYWNlIHlvdXIgJHtzaGlwTmFtZXNbaSArIDFdfWA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgIGlzVmVydGljYWwgPyAoaXNWZXJ0aWNhbCA9IGZhbHNlKSA6IChpc1ZlcnRpY2FsID0gdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRQbGFjZVNoaXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBHYW1lLnJlc3RhcnQoKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsb2FkUGxhY2VTaGlwU2NyZWVuKCk7XHJcbiAgICBjdXJyZW50U2hpcCA9IHNoaXBzWzBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbmVQbGFjaW5nU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGFjZVNoaXBJbnN0cnVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGxhY2Utc2hpcC1pbnN0cnVjdGlvbidcclxuICAgICk7XHJcblxyXG4gICAgcGxhY2VTaGlwSW5pdEV2ZW50cyhmYWxzZSk7XHJcblxyXG4gICAgcGxhY2VTaGlwSW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJzdGFydC1idG5cIj5TdGFydCBHYW1lPC9idXR0b24+YDtcclxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWFpbkdhbWVTY3JlZW4pO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSBmb3IgdGhlIG1haW4gZ2FtZSBzY3JlZW5cclxuICBjb25zdCBsb2FkTWFpbkdhbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJnYW1lYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1ib2FyZCBnYW1lYm9hcmRcIj48L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdhbWVib2FyZC1uYW1lXCI+WW91ciBnYW1lIGJvYXJkPC9zcGFuPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FtZS1pbmZvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZ2FtZS1pbmZvXCI+WW91ciB0dXJuLi4uPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXN0YXJ0LWdhbWUtYnRuXCI+UmVzdGFydCBHYW1lPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJnYW1lYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyLWJvYXJkIGdhbWVib2FyZFwiPjwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZ2FtZWJvYXJkLW5hbWVcIj5Db21wdXRlciBnYW1lIGJvYXJkPC9zcGFuPlxyXG4gICAgICA8L3NlY3Rpb24+YDtcclxuXHJcbiAgICBHYW1lLmluaXQoKTtcclxuICAgIGNyZWF0ZUdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjcmVhdGVHYW1lQm9hcmQoJ2NvbXB1dGVyJyk7XHJcbiAgICBsb2FkRmxlZXQoJ3BsYXllcicpO1xyXG4gICAgbG9hZEZsZWV0KCdjb21wdXRlcicpO1xyXG4gICAgaW5pdEdhbWVFdmVudHModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdEdhbWVFdmVudHMgPSAoZW5hYmxlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuY29tcHV0ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtZ2FtZS1idG4nKTtcclxuXHJcbiAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgIGNvbXB1dGVyQm9hcmRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFjayk7XHJcbiAgICAgICAgaWYgKHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXNTaG90JykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaG9vdGluZy1hbGxvd2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcHV0ZXJCb2FyZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrKTtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvb3RpbmctYWxsb3dlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIGNvbnN0IHBsYXllciA9IEdhbWUuZ2V0UGxheWVyKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRPYmogPSBHYW1lLmdldEdhbWVCb2FyZCgnY29tcHV0ZXInKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRBcnIgPSBjb21wdXRlckJvYXJkT2JqLmdldEJvYXJkKCk7XHJcblxyXG4gICAgaWYgKCFwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyQm9hcmRPYmosIGluZGV4KSkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJCb2FyZEFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoaSA9PT0gaW5kZXggJiYgY29tcHV0ZXJCb2FyZEFycltpXS5oYXNTaGlwKSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLXNob3QnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldEVsZW1lbnQudGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICB0YXJnZXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pc1Nob3QnLCAndHJ1ZScpO1xyXG4gICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG9vdGluZy1hbGxvd2VkJyk7XHJcbiAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1hbGxvd2VkJyk7XHJcblxyXG4gICAgaWYgKCFHYW1lLm92ZXIoKSkge1xyXG4gICAgICBjb21wdXRlckF0dGFjaygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpLmdldEJvYXJkKCk7XHJcbiAgICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8nKTtcclxuXHJcbiAgICBHYW1lLmNvbXB1dGVyVHVybigpO1xyXG4gICAgZ2FtZUluZm8uaW5uZXJIVE1MID0gXCJDb21wdXRlcidzIHR1cm4uLi5cIjtcclxuICAgIGluaXRHYW1lRXZlbnRzKGZhbHNlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHsgaGFzU2hpcCB9ID0gcGxheWVyQm9hcmRbaV07XHJcbiAgICAgICAgY29uc3QgeyBpc1Nob3QgfSA9IHBsYXllckJvYXJkW2ldO1xyXG4gICAgICAgIGlmIChpc1Nob3QpIHtcclxuICAgICAgICAgIHBsYXllckJvYXJkU3F1YXJlc1tpXS50ZXh0Q29udGVudCA9ICdYJztcclxuICAgICAgICAgIGlmIChoYXNTaGlwKSB7XHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkU3F1YXJlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGdhbWVJbmZvLmlubmVySFRNTCA9ICdZb3VyIHR1cm4uLi4nO1xyXG4gICAgICAgIGluaXRHYW1lRXZlbnRzKHRydWUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGlmIChHYW1lLm92ZXIoKSkge1xyXG4gICAgICBlbmRHYW1lKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdpbm5lciA9IEdhbWUuZ2V0V2lubmVyKCk7XHJcbiAgICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8nKTtcclxuICAgIGNvbnN0IHJlc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtZ2FtZS1idG4nKTtcclxuXHJcbiAgICBpZiAod2lubmVyID09PSAncGxheWVyJykge1xyXG4gICAgICBnYW1lSW5mby5pbm5lckhUTUwgPSBgWW91IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2FtZUluZm8uaW5uZXJIVE1MID0gYENvbXB1dGVyIHdpbnMhYDtcclxuICAgIH1cclxuICAgIGluaXRHYW1lRXZlbnRzKCdkaXNhYmxlJyk7XHJcblxyXG4gICAgcmVzdGFydEdhbWVCdG4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgR2FtZS5yZXN0YXJ0KCk7XHJcbiAgICBsb2FkUGxhY2VTaGlwU2NyZWVuKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbG9hZFBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL3VpJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkUGFnZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==