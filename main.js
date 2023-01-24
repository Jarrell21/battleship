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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\nmain {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n}\r\n\r\n.ship-preview, .placed {\r\n    background-color: gray;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.shooting-allowed {\r\n    cursor: crosshair;\r\n}\r\n\r\n.ship-is-shot {\r\n    background-color: red;\r\n}\r\n\r\n.gameboards-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 1rem;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .gameboards-container {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sDAAsD;IACtD,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,kDAAkD;IACtD;AACJ","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\nheader {\r\n    color: red;\r\n    margin: 0.5rem auto;\r\n    font-size: 2rem;\r\n}\r\n\r\nmain {\r\n    margin: 20px auto;\r\n    height: 100%;\r\n    color: black;\r\n}\r\n\r\n.ship-preview, .placed {\r\n    background-color: gray;\r\n}\r\n\r\n.placing {\r\n    cursor: pointer;\r\n}\r\n\r\n.not-allowed {\r\n    cursor: no-drop;\r\n}\r\n\r\n.shooting-allowed {\r\n    cursor: crosshair;\r\n}\r\n\r\n.ship-is-shot {\r\n    background-color: red;\r\n}\r\n\r\n.gameboards-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 1rem;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: repeat(10, 1.9rem) / repeat(10, 1.9rem);\r\n    border: solid 1px black;\r\n}\r\n\r\n.gameboard div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: solid 1px black;\r\n}\r\n\r\n@media (min-width: 685px) {\r\n    .gameboards-container {\r\n        flex-direction: row;\r\n    }\r\n    \r\n    .gameboard {\r\n        grid-template: repeat(10, 2rem) / repeat(10, 2rem);\r\n    }\r\n}"],"sourceRoot":""}]);
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

  const reset = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
    init();
  };

  const turn = (next) => {
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
    reset,
    turn,
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
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/modules/gameBoard.js");




const UI = (() => {
  const loadPage = () => {
    loadPlaceShipScreen();
    // loadMainGameScreen();
  };

  const createGameBoard = (player) => {
    const board = document.querySelector(`.${player}-board`);
    let array = [];

    if (player === 'player') array = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player').getBoard();
    else {
      array = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('computer').getBoard();
    }

    for (let i = 0; i < array.length; i += 1) {
      board.innerHTML += `<div class="${player}-board-square" data-index="${i}" data-hasShip="${array[i].hasShip}" data-isShot="${array[i].isShot}"></div>`;
    }
  };

  const loadFleet = (player) => {
    const board = document.querySelector(`.${player}-board`);

    [...board.children].forEach((child) => {
      if (child.getAttribute('data-hasShip') === 'true') {
        if (player === 'player') {
          child.classList.add('placed');
        } else {
          child.classList.add('placed');
        }
      }
    });
  };

  // The following functions are for the placing ship screen
  const ships = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerShips();
  let currentShip = ships[0];
  let isVertical = false;

  const loadPlaceShipScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML += `
    <section class="placing-ship">
      <span class="place-ship-instruction">Place your ${currentShip.getName()}!</span>
      <div class="player-board gameboard"></div>
      <div class="place-ship-buttons">
        <button class="rotate-btn">Rotate</button>
        <button class="random-btn">Place randomly</button>
        <button class="reset-btn">Reset</button>
      </div>
    </section>`;

    createGameBoard('player');
    loadFleet('player');
    placeShipInitEvents();
  };

  // Adding event listeners
  const placeShipInitEvents = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const rotateBtn = document.querySelector('.rotate-btn');
    const randomBtn = document.querySelector('.random-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-btn');

    playerBoardSquares.forEach((square) => {
      square.addEventListener('mouseover', addShipPreview);
      square.addEventListener('mouseout', removeShipPreview);
      square.addEventListener('click', placeShip);

      square.classList.add('placing');
    });

    rotateBtn.addEventListener('click', rotateShip);
    resetPlaceShipBtn.addEventListener('click', resetPlaceShip);
    randomBtn.addEventListener('click', placeShipsRandomly);
  };

  // Function when mouse is over the board
  const addShipPreview = (e) => {
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
        targetArr[i].classList.add('ship-preview');
      }
    } else {
      e.target.classList.add('not-allowed');
    }
  };

  // Function when mouse is out from the board
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
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');

    playerBoard.resetBoard();
    playerBoard.randomPlaceShips();
    updateBoard(playerBoard);
  };

  const updateBoard = (board) => {
    const thisBoard = board.getBoard();
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );

    for (let i = 0; i < thisBoard.length; i += 1) {
      playerBoardSquares[i].classList.remove('placed');
      playerBoardSquares[i].setAttribute('data-hasShip', 'false');

      if (thisBoard[i].hasShip === true) {
        playerBoardSquares[i].setAttribute('data-hasShip', 'true');
        playerBoardSquares[i].classList.add('placed');
      }
    }

    donePlacingShips();
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
    if (isVertical === false) {
      isVertical = true;
    } else {
      isVertical = false;
    }
  };

  const resetPlaceShip = () => {
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player');
    const main = document.querySelector('.main');

    main.innerHTML = '';
    playerBoard.resetBoard();
    loadPlaceShipScreen();
    currentShip = ships[0];
  };

  const donePlacingShips = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );

    placeShipInstruction.innerHTML = `<button class="start-btn">Start Game</button>`;

    playerBoardSquares.forEach((square) => {
      square.removeEventListener('mouseover', addShipPreview);
      square.removeEventListener('mouseout', removeShipPreview);
      square.removeEventListener('click', placeShip);
      square.classList.remove('placing');
    });

    const startBtn = document.querySelector('.start-btn');

    startBtn.addEventListener('click', loadMainGameScreen);
  };

  // The following functions are for the main game screen
  const loadMainGameScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML = `
    <section class="gameboards-container">
      <div>
        <div class="player-board gameboard"></div>
        <span>Your game board</span>
      </div>
      <div>
        <div class="computer-board gameboard"></div>
        <span>Computer game board</span>
      </div>
    </section>`;

    _game__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    createGameBoard('player');
    createGameBoard('computer');
    loadFleet('player');
    // loadFleet('computer');
    initGameEvents();
  };

  const initGameEvents = () => {
    const computerBoardSquares = document.querySelectorAll(
      '.computer-board-square'
    );

    computerBoardSquares.forEach((square) => {
      square.addEventListener('click', playerAttack);
      square.classList.add('shooting-allowed');
    });
  };

  const playerAttack = (e) => {
    const targetElement = e.target;
    const index = parseInt(targetElement.getAttribute('data-index'));
    const player = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayer('player');
    const computerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('computer');

    if (!player.attack(computerBoard, index)) return;

    if (targetElement.getAttribute('data-hasShip') === 'true') {
      targetElement.classList.add('ship-is-shot');
    }

    targetElement.textContent = 'X';
    targetElement.setAttribute('data-isShot', 'true');
    targetElement.classList.remove('shooting-allowed');
    targetElement.classList.add('not-allowed');

    if (!_game__WEBPACK_IMPORTED_MODULE_1__["default"].over()) {
      setTimeout(computerAttack, 1000);
      return;
    }

    setTimeout(() => {
      alert('YOU WON');
    }, 1000);
  };

  const computerAttack = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const playerBoard = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getGameBoard('player').getBoard();

    _game__WEBPACK_IMPORTED_MODULE_1__["default"].turn('computer');

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
  };

  const restartGame = () => {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXByZXZpZXcsIC5wbGFjZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2luZyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBuby1kcm9wO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvb3RpbmctYWxsb3dlZCB7XFxyXFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1pcy1zaG90IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkcy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDEuOXJlbSkgLyByZXBlYXQoMTAsIDEuOXJlbSk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY4NXB4KSB7XFxyXFxuICAgIC5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMnJlbSkgLyByZXBlYXQoMTAsIDJyZW0pO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzREFBc0Q7SUFDdEQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrREFBa0Q7SUFDdEQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcHJldmlldywgLnBsYWNlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wbGFjaW5nIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWFsbG93ZWQge1xcclxcbiAgICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5zaG9vdGluZy1hbGxvd2VkIHtcXHJcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWlzLXNob3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMS45cmVtKSAvIHJlcGVhdCgxMCwgMS45cmVtKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjg1cHgpIHtcXHJcXG4gICAgLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5nYW1lYm9hcmQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAycmVtKSAvIHJlcGVhdCgxMCwgMnJlbSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcclxuXHJcbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xyXG4gIGxldCB3aW5uZXIgPSAnJztcclxuICAvLyBDcmVhdGUgcGxheWVyc1xyXG4gIGNvbnN0IHBsYXllciA9IFBsYXllcigncGxheWVyJyk7XHJcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcblxyXG4gIC8vIENyZWF0ZSBwbGF5ZXIncyBib2FyZHNcclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBsYXllcnMgc2hpcHNcclxuICBjb25zdCBwbGF5ZXJDYXJyaWVyID0gU2hpcCg1LCAnQ2FycmllcicpO1xyXG4gIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XHJcbiAgY29uc3QgcGxheWVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XHJcbiAgY29uc3QgcGxheWVyU3VibWFyaW5lID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgY29uc3QgcGxheWVyUGF0cm9sYm9hdCA9IFNoaXAoMiwgJ1BhdHJvbGJvYXQnKTtcclxuXHJcbiAgY29uc3QgZ2V0UGxheWVyID0gKHBsYXllck5hbWUpID0+XHJcbiAgICBwbGF5ZXJOYW1lID09PSAncGxheWVyJyA/IHBsYXllciA6IGNvbXB1dGVyO1xyXG5cclxuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAocGxheWVyTmFtZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck5hbWUgPT09ICdwbGF5ZXInKSByZXR1cm4gcGxheWVyQm9hcmQ7XHJcbiAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJTaGlwcyA9ICgpID0+IFtcclxuICAgIHBsYXllckNhcnJpZXIsXHJcbiAgICBwbGF5ZXJCYXR0bGVzaGlwLFxyXG4gICAgcGxheWVyRGVzdHJveWVyLFxyXG4gICAgcGxheWVyU3VibWFyaW5lLFxyXG4gICAgcGxheWVyUGF0cm9sYm9hdCxcclxuICBdO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29tcHV0ZXJCb2FyZC5yYW5kb21QbGFjZVNoaXBzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIGluaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0dXJuID0gKG5leHQpID0+IHtcclxuICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJCb2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3ZlciA9ICgpID0+IHtcclxuICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc0hhdmVTdW5rKCkpIHtcclxuICAgICAgd2lubmVyID0gY29tcHV0ZXIuZ2V0TmFtZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzSGF2ZVN1bmsoKSkge1xyXG4gICAgICB3aW5uZXIgPSBwbGF5ZXIuZ2V0TmFtZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0LFxyXG4gICAgZ2V0UGxheWVyLFxyXG4gICAgZ2V0V2lubmVyLFxyXG4gICAgZ2V0R2FtZUJvYXJkLFxyXG4gICAgZ2V0UGxheWVyU2hpcHMsXHJcbiAgICByZXNldCxcclxuICAgIHR1cm4sXHJcbiAgICBvdmVyLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5JztcclxuXHJcbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcclxuICBsZXQgYm9hcmQgPSBbXTtcclxuICBsZXQgbnVtT2ZTaGlwc1N1bmsgPSAwO1xyXG5cclxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xyXG5cclxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcclxuICAgICAgYm9hcmQucHVzaCh7IHNoaXA6IG51bGwsIGhhc1NoaXA6IGZhbHNlLCBpc1Nob3Q6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICBib2FyZCA9IFtdO1xyXG4gICAgY3JlYXRlQm9hcmQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgaW5kZXgsIGlzVmVydGljYWwgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKSAqIDEwOyBpICs9IDEwKSB7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5oYXNTaGlwID0gdHJ1ZTtcclxuICAgICAgICBib2FyZFtpbmRleCArIGldLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0uaGFzU2hpcCA9IHRydWU7XHJcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpXS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbVBsYWNlU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgbGV0IHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIDw9IDU7XHJcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1KTtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQpO1xyXG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMyk7XHJcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xyXG5cclxuICAgIHNoaXBzQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICB3aGlsZSAocGxhY2VTaGlwKHNoaXAsIHJhbmRvbUluZGV4LCByYW5kb21PcmllbnRhdGlvbikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIDw9IDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzUGxhY2VtZW50UG9zc2libGUgPSAoc2hpcCwgaW5kZXgsIGlzVmVydGljYWwgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IDk4KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gaWYgc2hpcCBkb2Vzbid0IGZpdCBnYW1lYm9hcmRcclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGlmICgoc2hpcC5nZXRMZW5ndGgoKSAtIDEpICogMTAgKyBpbmRleCA+IDk5KSByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxMCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8PSA5ICsgaSkge1xyXG4gICAgICAgICAgaWYgKHNoaXAuZ2V0TGVuZ3RoKCkgLSAxICsgaW5kZXggPiA5ICsgaSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGZpZWxkIGlzIGFscmVhZHkgdGFrZW5cclxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW2luZGV4ICsgaSAqIDEwXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW2luZGV4ICsgaV0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkW2luZGV4XS5pc1Nob3QgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICBib2FyZFtpbmRleF0uaXNTaG90ID0gdHJ1ZTtcclxuICAgIGlmIChib2FyZFtpbmRleF0uaGFzU2hpcCkge1xyXG4gICAgICBib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcclxuICAgICAgaWYgKGJvYXJkW2luZGV4XS5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgbnVtT2ZTaGlwc1N1bmsgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcHR5Q29vcmRpbmF0ZXMgPSAoKSA9PlxyXG4gICAgYm9hcmQuZmlsdGVyKChjb29yZGluYXRlKSA9PiBjb29yZGluYXRlLmhhc1NoaXAgPT09IGZhbHNlKS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGFsbFNoaXBzSGF2ZVN1bmsgPSAoKSA9PiBudW1PZlNoaXBzU3VuayA9PT0gNTtcclxuXHJcbiAgY3JlYXRlQm9hcmQoKTtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByYW5kb21QbGFjZVNoaXBzLFxyXG4gICAgaXNQbGFjZW1lbnRQb3NzaWJsZSxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBhbGxTaGlwc0hhdmVTdW5rLFxyXG4gICAgcmVzZXRCb2FyZCxcclxuICAgIGdldEVtcHR5Q29vcmRpbmF0ZXMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcclxuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBjb25zdCBzaG90Q29vcmRpbmF0ZXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKGdhbWVCb2FyZCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpc0FscmVhZHlTaG90KGluZGV4KSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KTtcclxuICAgIHNob3RDb29yZGluYXRlcy5wdXNoKGluZGV4KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lQm9hcmQpID0+IHtcclxuICAgIGlmIChzaG90Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAxMDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgY29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcblxyXG4gICAgd2hpbGUgKGlzQWxyZWFkeVNob3QoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgY29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0FscmVhZHlTaG90ID0gKGluZGV4KSA9PiBzaG90Q29vcmRpbmF0ZXMuaW5jbHVkZXMoaW5kZXgpO1xyXG5cclxuICByZXR1cm4geyBhdHRhY2ssIHJhbmRvbUF0dGFjaywgZ2V0TmFtZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xyXG4gIGxldCBudW1PZkhpdHMgPSAwO1xyXG5cclxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XHJcblxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG5cclxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiBudW1PZkhpdHM7XHJcblxyXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcclxuICAgIG51bU9mSGl0cyArPSAxO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IG51bU9mSGl0cyA9PT0gbGVuZ3RoO1xyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGgsIGdldE5hbWUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsImltcG9ydCAnLi4vYXNzZXRzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgbG9hZFBsYWNlU2hpcFNjcmVlbigpO1xyXG4gICAgLy8gbG9hZE1haW5HYW1lU2NyZWVuKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LWJvYXJkYCk7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAocGxheWVyID09PSAncGxheWVyJykgYXJyYXkgPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJykuZ2V0Qm9hcmQoKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBhcnJheSA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdjb21wdXRlcicpLmdldEJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBib2FyZC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCIke3BsYXllcn0tYm9hcmQtc3F1YXJlXCIgZGF0YS1pbmRleD1cIiR7aX1cIiBkYXRhLWhhc1NoaXA9XCIke2FycmF5W2ldLmhhc1NoaXB9XCIgZGF0YS1pc1Nob3Q9XCIke2FycmF5W2ldLmlzU2hvdH1cIj48L2Rpdj5gO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRGbGVldCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyfS1ib2FyZGApO1xyXG5cclxuICAgIFsuLi5ib2FyZC5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXNTaGlwJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXInKSB7XHJcbiAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgZm9yIHRoZSBwbGFjaW5nIHNoaXAgc2NyZWVuXHJcbiAgY29uc3Qgc2hpcHMgPSBHYW1lLmdldFBsYXllclNoaXBzKCk7XHJcbiAgbGV0IGN1cnJlbnRTaGlwID0gc2hpcHNbMF07XHJcbiAgbGV0IGlzVmVydGljYWwgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgbG9hZFBsYWNlU2hpcFNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5cclxuICAgIG1haW4uaW5uZXJIVE1MICs9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGxhY2luZy1zaGlwXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGxhY2Utc2hpcC1pbnN0cnVjdGlvblwiPlBsYWNlIHlvdXIgJHtjdXJyZW50U2hpcC5nZXROYW1lKCl9ITwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1ib2FyZCBnYW1lYm9hcmRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNoaXAtYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3RhdGUtYnRuXCI+Um90YXRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJhbmRvbS1idG5cIj5QbGFjZSByYW5kb21seTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5gO1xyXG5cclxuICAgIGNyZWF0ZUdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBsb2FkRmxlZXQoJ3BsYXllcicpO1xyXG4gICAgcGxhY2VTaGlwSW5pdEV2ZW50cygpO1xyXG4gIH07XHJcblxyXG4gIC8vIEFkZGluZyBldmVudCBsaXN0ZW5lcnNcclxuICBjb25zdCBwbGFjZVNoaXBJbml0RXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XHJcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLWJ0bicpO1xyXG4gICAgY29uc3QgcmVzZXRQbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XHJcblxyXG4gICAgcGxheWVyQm9hcmRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkU2hpcFByZXZpZXcpO1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByZW1vdmVTaGlwUHJldmlldyk7XHJcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcCk7XHJcblxyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2luZycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XHJcbiAgICByZXNldFBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UGxhY2VTaGlwKTtcclxuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcHNSYW5kb21seSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gd2hlbiBtb3VzZSBpcyBvdmVyIHRoZSBib2FyZFxyXG4gIGNvbnN0IGFkZFNoaXBQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcblxyXG4gICAgaWYgKHBsYXllckJvYXJkLmlzUGxhY2VtZW50UG9zc2libGUoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcblxyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICdob3Jpem9udGFsJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIHRhcmdldEFycltpXS5jbGFzc0xpc3QuYWRkKCdzaGlwLXByZXZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbm90LWFsbG93ZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB3aGVuIG1vdXNlIGlzIG91dCBmcm9tIHRoZSBib2FyZFxyXG4gIGNvbnN0IHJlbW92ZVNoaXBQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcblxyXG4gICAgaWYgKHBsYXllckJvYXJkLmlzUGxhY2VtZW50UG9zc2libGUoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcblxyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEFyciA9IHBvcHVsYXRlVGFyZ2V0U2hpcENvb3JkKGUsICdob3Jpem9udGFsJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRBcnJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWhhc1NoaXAnKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcHJldmlldycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFsbG93ZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBSZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGNvb3JkaW5hdGVzXHJcbiAgLy8gZm9yIHRoZSBzcGVjaWZpYyBzaGlwIGFuZCBpdCdzIG9yaWVudGF0aW9uXHJcbiAgY29uc3QgcG9wdWxhdGVUYXJnZXRTaGlwQ29vcmQgPSAoZSwgb3JpZW50YXRpb24pID0+IHtcclxuICAgIGNvbnN0IHRhcmdldEFyciA9IFtdO1xyXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGxldCBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuXHJcbiAgICAgIHRhcmdldEFyci5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpICs9IDEpIHtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKG5leHQpO1xyXG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICBuZXh0ID0gY3VycmVudC5uZXh0U2libGluZztcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3VycmVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBsZXQgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgICB0YXJnZXRBcnIucHVzaChjdXJyZW50KTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaChuZXh0KTtcclxuICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldEFycjtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiBmb3IgcGxhY2luZyBzaGlwc1xyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdwbGF5ZXInKTtcclxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG5cclxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc1BsYWNlbWVudFBvc3NpYmxlKGN1cnJlbnRTaGlwLCBpbmRleCwgaXNWZXJ0aWNhbCkpIHtcclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG5cclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAndmVydGljYWwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRBcnIgPSBwb3B1bGF0ZVRhcmdldFNoaXBDb29yZChlLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGluZGV4LCBpc1ZlcnRpY2FsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xyXG4gICAgICAgIHRhcmdldEFycltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcsICd0cnVlJyk7XHJcbiAgICAgICAgdGFyZ2V0QXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmcnKTtcclxuICAgICAgICB0YXJnZXRBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wcmV2aWV3Jyk7XHJcbiAgICAgICAgdGFyZ2V0QXJyW2ldLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudFNoaXAgIT09IHNoaXBzWzRdKSB7XHJcbiAgICAgICAgY2hhbmdlU2hpcCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9uZVBsYWNpbmdTaGlwcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG5cclxuICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgIHBsYXllckJvYXJkLnJhbmRvbVBsYWNlU2hpcHMoKTtcclxuICAgIHVwZGF0ZUJvYXJkKHBsYXllckJvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0JvYXJkID0gYm9hcmQuZ2V0Qm9hcmQoKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcucGxheWVyLWJvYXJkLXNxdWFyZSdcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgcGxheWVyQm9hcmRTcXVhcmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xyXG4gICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWhhc1NoaXAnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgIGlmICh0aGlzQm9hcmRbaV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHBsYXllckJvYXJkU3F1YXJlc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcsICd0cnVlJyk7XHJcbiAgICAgICAgcGxheWVyQm9hcmRTcXVhcmVzW2ldLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9uZVBsYWNpbmdTaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIGZvciBjaGFuZ2luZyBzaGlwIGFmdGVyIHRoZSBwcmV2aW91cyBzaGlwIHdhcyBwbGFjZWRcclxuICBjb25zdCBjaGFuZ2VTaGlwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxhY2VTaGlwSW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBsYWNlLXNoaXAtaW5zdHJ1Y3Rpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW107XHJcblxyXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICBzaGlwTmFtZXMucHVzaChzaGlwLmdldE5hbWUoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChjdXJyZW50U2hpcCA9PT0gc2hpcHNbaV0pIHtcclxuICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXBzW2kgKyAxXTtcclxuICAgICAgICBwbGFjZVNoaXBJbnN0cnVjdGlvbi5pbm5lckhUTUwgPSBgUGxhY2UgeW91ciAke3NoaXBOYW1lc1tpICsgMV19YDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlzVmVydGljYWwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0UGxhY2VTaGlwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lLmdldEdhbWVCb2FyZCgncGxheWVyJyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gICAgbG9hZFBsYWNlU2hpcFNjcmVlbigpO1xyXG4gICAgY3VycmVudFNoaXAgPSBzaGlwc1swXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb25lUGxhY2luZ1NoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBsYWNlU2hpcEluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5wbGFjZS1zaGlwLWluc3RydWN0aW9uJ1xyXG4gICAgKTtcclxuXHJcbiAgICBwbGFjZVNoaXBJbnN0cnVjdGlvbi5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cInN0YXJ0LWJ0blwiPlN0YXJ0IEdhbWU8L2J1dHRvbj5gO1xyXG5cclxuICAgIHBsYXllckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFkZFNoaXBQcmV2aWV3KTtcclxuICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVtb3ZlU2hpcFByZXZpZXcpO1xyXG4gICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXApO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XHJcblxyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWFpbkdhbWVTY3JlZW4pO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSBmb3IgdGhlIG1haW4gZ2FtZSBzY3JlZW5cclxuICBjb25zdCBsb2FkTWFpbkdhbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbiAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FtZWJvYXJkcy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWJvYXJkIGdhbWVib2FyZFwiPjwvZGl2PlxyXG4gICAgICAgIDxzcGFuPllvdXIgZ2FtZSBib2FyZDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyLWJvYXJkIGdhbWVib2FyZFwiPjwvZGl2PlxyXG4gICAgICAgIDxzcGFuPkNvbXB1dGVyIGdhbWUgYm9hcmQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPmA7XHJcblxyXG4gICAgR2FtZS5pbml0KCk7XHJcbiAgICBjcmVhdGVHYW1lQm9hcmQoJ3BsYXllcicpO1xyXG4gICAgY3JlYXRlR2FtZUJvYXJkKCdjb21wdXRlcicpO1xyXG4gICAgbG9hZEZsZWV0KCdwbGF5ZXInKTtcclxuICAgIC8vIGxvYWRGbGVldCgnY29tcHV0ZXInKTtcclxuICAgIGluaXRHYW1lRXZlbnRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdEdhbWVFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuY29tcHV0ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBjb21wdXRlckJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrKTtcclxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3Nob290aW5nLWFsbG93ZWQnKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG4gICAgY29uc3QgcGxheWVyID0gR2FtZS5nZXRQbGF5ZXIoJ3BsYXllcicpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWUuZ2V0R2FtZUJvYXJkKCdjb21wdXRlcicpO1xyXG5cclxuICAgIGlmICghcGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCBpbmRleCkpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzU2hpcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLXNob3QnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgdGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXNTaG90JywgJ3RydWUnKTtcclxuICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvb3RpbmctYWxsb3dlZCcpO1xyXG4gICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtYWxsb3dlZCcpO1xyXG5cclxuICAgIGlmICghR2FtZS5vdmVyKCkpIHtcclxuICAgICAgc2V0VGltZW91dChjb21wdXRlckF0dGFjaywgMTAwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYWxlcnQoJ1lPVSBXT04nKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5wbGF5ZXItYm9hcmQtc3F1YXJlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRHYW1lQm9hcmQoJ3BsYXllcicpLmdldEJvYXJkKCk7XHJcblxyXG4gICAgR2FtZS50dXJuKCdjb21wdXRlcicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgeyBoYXNTaGlwIH0gPSBwbGF5ZXJCb2FyZFtpXTtcclxuICAgICAgY29uc3QgeyBpc1Nob3QgfSA9IHBsYXllckJvYXJkW2ldO1xyXG4gICAgICBpZiAoaXNTaG90KSB7XHJcbiAgICAgICAgcGxheWVyQm9hcmRTcXVhcmVzW2ldLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICAgIGlmIChoYXNTaGlwKSB7XHJcbiAgICAgICAgICBwbGF5ZXJCb2FyZFNxdWFyZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7fTtcclxuXHJcbiAgcmV0dXJuIHsgbG9hZFBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL3VpJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkUGFnZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==