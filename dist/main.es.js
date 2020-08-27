import React, { useState } from 'react';
import reactDom from 'react-dom';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var tabbable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];
});

unwrapExports(tabbable_1);

var focusManager = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}
});

unwrapExports(focusManager);
var focusManager_1 = focusManager.handleBlur;
var focusManager_2 = focusManager.handleFocus;
var focusManager_3 = focusManager.markForFocusLater;
var focusManager_4 = focusManager.returnFocus;
var focusManager_5 = focusManager.popWithoutFocus;
var focusManager_6 = focusManager.setupScopedFocus;
var focusManager_7 = focusManager.teardownScopedFocus;

var scopeTab_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];
});

unwrapExports(scopeTab_1);

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var warning = function() {};

var warning_1 = warning;

var exenv = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if ( module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

var safeHTMLElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;



var _exenv2 = _interopRequireDefault(exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;
});

unwrapExports(safeHTMLElement);
var safeHTMLElement_1 = safeHTMLElement.canUseDOM;

var ariaAppHider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;



var _warning2 = _interopRequireDefault(warning_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}
});

unwrapExports(ariaAppHider);
var ariaAppHider_1 = ariaAppHider.assertNodeList;
var ariaAppHider_2 = ariaAppHider.setElement;
var ariaAppHider_3 = ariaAppHider.validateElement;
var ariaAppHider_4 = ariaAppHider.hide;
var ariaAppHider_5 = ariaAppHider.show;
var ariaAppHider_6 = ariaAppHider.documentNotReadyOrSSRTesting;
var ariaAppHider_7 = ariaAppHider.resetForTesting;

var classList = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
});

unwrapExports(classList);
var classList_1 = classList.dumpClassLists;
var classList_2 = classList.add;
var classList_3 = classList.remove;

var portalOpenInstances_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];
});

unwrapExports(portalOpenInstances_1);

var bodyTrap_1 = createCommonjsModule(function (module) {



var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);
});

unwrapExports(bodyTrap_1);

var ModalPortal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);



var focusManager$1 = _interopRequireWildcard(focusManager);



var _scopeTab2 = _interopRequireDefault(scopeTab_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var classList$1 = _interopRequireWildcard(classList);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList$1.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider$1.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager$1.returnFocus();
          focusManager$1.teardownScopedFocus();
        } else {
          focusManager$1.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager$1.setupScopedFocus(_this.node);
          focusManager$1.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList$1.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider$1.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            id: id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(React.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];
});

unwrapExports(ModalPortal_1);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  polyfill: polyfill
});

var Modal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React);



var _reactDom2 = _interopRequireDefault(reactDom);



var _propTypes2 = _interopRequireDefault(propTypes);



var _ModalPortal2 = _interopRequireDefault(ModalPortal_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider$1.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, reactLifecyclesCompat_es.polyfill)(Modal);

exports.default = Modal;
});

unwrapExports(Modal_1);
var Modal_2 = Modal_1.bodyOpenClassName;
var Modal_3 = Modal_1.portalClassName;

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _Modal2 = _interopRequireDefault(Modal_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];
});

var ReactModal = unwrapExports(lib);

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

var arrays = shallowEqualArrays;

var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var dist = function (_ref) {
  var data = _ref.data;
  var multiSection = _ref.multiSection;

  function nextNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = 0;
    } else {
      sectionIndex++;
    }

    while (sectionIndex < data.length && data[sectionIndex] === 0) {
      sectionIndex++;
    }

    return sectionIndex === data.length ? null : sectionIndex;
  }

  function prevNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = data.length - 1;
    } else {
      sectionIndex--;
    }

    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
      sectionIndex--;
    }

    return sectionIndex === -1 ? null : sectionIndex;
  }

  function next(position) {
    var _position = _slicedToArray$1(position, 2);

    var sectionIndex = _position[0];
    var itemIndex = _position[1];


    if (multiSection) {
      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, 0];
      }

      return [sectionIndex, itemIndex + 1];
    }

    if (data === 0 || itemIndex === data - 1) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, 0];
    }

    return [null, itemIndex + 1];
  }

  function prev(position) {
    var _position2 = _slicedToArray$1(position, 2);

    var sectionIndex = _position2[0];
    var itemIndex = _position2[1];


    if (multiSection) {
      if (itemIndex === null || itemIndex === 0) {
        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, data[sectionIndex] - 1];
      }

      return [sectionIndex, itemIndex - 1];
    }

    if (data === 0 || itemIndex === 0) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, data - 1];
    }

    return [null, itemIndex - 1];
  }

  function isLast(position) {
    return next(position)[1] === null;
  }

  return {
    next: next,
    prev: prev,
    isLast: isLast
  };
};

var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

var objectAssign = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

var dist$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }



var _objectAssign2 = _interopRequireDefault(objectAssign);

var truthy = function truthy(x) {
  return x;
};

exports['default'] = function (input) {
  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

  var _ref2 = _slicedToArray(_ref, 2);

  var theme = _ref2[0];
  var classNameDecorator = _ref2[1];

  return function (key) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      names[_key - 1] = arguments[_key];
    }

    var styles = names.map(function (name) {
      return theme[name];
    }).filter(truthy);

    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
  };
};

module.exports = exports['default'];
});

unwrapExports(dist$1);

var compareObjects_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = compareObjects;

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function compareObjects(objA, objB) {
  var keys =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (objA === objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (aKeys.length !== bKeys.length) {
    return true;
  }

  var keysMap = {};
  var i, len;

  for (i = 0, len = keys.length; i < len; i++) {
    keysMap[keys[i]] = true;
  }

  for (i = 0, len = aKeys.length; i < len; i++) {
    var key = aKeys[i];
    var aValue = objA[key];
    var bValue = objB[key];

    if (aValue === bValue) {
      continue;
    }

    if (
      !keysMap[key] ||
      aValue === null ||
      bValue === null ||
      _typeof(aValue) !== 'object' ||
      _typeof(bValue) !== 'object'
    ) {
      return true;
    }

    var aValueKeys = Object.keys(aValue);
    var bValueKeys = Object.keys(bValue);

    if (aValueKeys.length !== bValueKeys.length) {
      return true;
    }

    for (var n = 0, length = aValueKeys.length; n < length; n++) {
      var aValueKey = aValueKeys[n];

      if (aValue[aValueKey] !== bValue[aValueKey]) {
        return true;
      }
    }
  }

  return false;
}
});

unwrapExports(compareObjects_1);

var SectionTitle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(React);

var _propTypes = _interopRequireDefault(propTypes);

var _compareObjects = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var SectionTitle = /*#__PURE__*/ (function (_Component) {
  _inherits(SectionTitle, _Component);

  var _super = _createSuper(SectionTitle);

  function SectionTitle() {
    _classCallCheck(this, SectionTitle);

    return _super.apply(this, arguments);
  }

  _createClass(SectionTitle, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          section = _this$props.section,
          renderSectionTitle = _this$props.renderSectionTitle,
          theme = _this$props.theme,
          sectionKeyPrefix = _this$props.sectionKeyPrefix;
        var sectionTitle = renderSectionTitle(section);

        if (!sectionTitle) {
          return null;
        }

        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          theme(''.concat(sectionKeyPrefix, 'title'), 'sectionTitle'),
          sectionTitle
        );
      },
    },
  ]);

  return SectionTitle;
})(_react.Component);

exports['default'] = SectionTitle;

_defineProperty(SectionTitle, 'propTypes', {
  section: _propTypes['default'].any.isRequired,
  renderSectionTitle: _propTypes['default'].func.isRequired,
  theme: _propTypes['default'].func.isRequired,
  sectionKeyPrefix: _propTypes['default'].string.isRequired,
});
});

unwrapExports(SectionTitle_1);

var Item_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(React);

var _propTypes = _interopRequireDefault(propTypes);

var _compareObjects = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Item = /*#__PURE__*/ (function (_Component) {
  _inherits(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(
      _assertThisInitialized(_this),
      'storeItemReference',
      function (item) {
        if (item !== null) {
          _this.item = item;
        }
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'onMouseEnter', function (
      event
    ) {
      var _this$props = _this.props,
        sectionIndex = _this$props.sectionIndex,
        itemIndex = _this$props.itemIndex;

      _this.props.onMouseEnter(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'onMouseLeave', function (
      event
    ) {
      var _this$props2 = _this.props,
        sectionIndex = _this$props2.sectionIndex,
        itemIndex = _this$props2.itemIndex;

      _this.props.onMouseLeave(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'onMouseDown', function (
      event
    ) {
      var _this$props3 = _this.props,
        sectionIndex = _this$props3.sectionIndex,
        itemIndex = _this$props3.itemIndex;

      _this.props.onMouseDown(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'onClick', function (event) {
      var _this$props4 = _this.props,
        sectionIndex = _this$props4.sectionIndex,
        itemIndex = _this$props4.itemIndex;

      _this.props.onClick(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
      });
    });

    return _this;
  }

  _createClass(Item, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props, [
          'renderItemData',
        ]);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props5 = this.props,
          isHighlighted = _this$props5.isHighlighted,
          item = _this$props5.item,
          renderItem = _this$props5.renderItem,
          renderItemData = _this$props5.renderItemData,
          restProps = _objectWithoutProperties(_this$props5, [
            'isHighlighted',
            'item',
            'renderItem',
            'renderItemData',
          ]);

        delete restProps.sectionIndex;
        delete restProps.itemIndex;

        if (typeof restProps.onMouseEnter === 'function') {
          restProps.onMouseEnter = this.onMouseEnter;
        }

        if (typeof restProps.onMouseLeave === 'function') {
          restProps.onMouseLeave = this.onMouseLeave;
        }

        if (typeof restProps.onMouseDown === 'function') {
          restProps.onMouseDown = this.onMouseDown;
        }

        if (typeof restProps.onClick === 'function') {
          restProps.onClick = this.onClick;
        }

        return /*#__PURE__*/ _react['default'].createElement(
          'li',
          _extends(
            {
              role: 'option',
            },
            restProps,
            {
              ref: this.storeItemReference,
            }
          ),
          renderItem(
            item,
            _objectSpread(
              {
                isHighlighted: isHighlighted,
              },
              renderItemData
            )
          )
        );
      },
    },
  ]);

  return Item;
})(_react.Component);

exports['default'] = Item;

_defineProperty(Item, 'propTypes', {
  sectionIndex: _propTypes['default'].number,
  isHighlighted: _propTypes['default'].bool.isRequired,
  itemIndex: _propTypes['default'].number.isRequired,
  item: _propTypes['default'].any.isRequired,
  renderItem: _propTypes['default'].func.isRequired,
  renderItemData: _propTypes['default'].object.isRequired,
  onMouseEnter: _propTypes['default'].func,
  onMouseLeave: _propTypes['default'].func,
  onMouseDown: _propTypes['default'].func,
  onClick: _propTypes['default'].func,
});
});

unwrapExports(Item_1);

var ItemList = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(React);

var _propTypes = _interopRequireDefault(propTypes);

var _Item = _interopRequireDefault(Item_1);

var _compareObjects = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var ItemsList = /*#__PURE__*/ (function (_Component) {
  _inherits(ItemsList, _Component);

  var _super = _createSuper(ItemsList);

  function ItemsList() {
    var _this;

    _classCallCheck(this, ItemsList);

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(
      _assertThisInitialized(_this),
      'storeHighlightedItemReference',
      function (highlightedItem) {
        _this.props.onHighlightedItemChange(
          highlightedItem === null ? null : highlightedItem.item
        );
      }
    );

    return _this;
  }

  _createClass(ItemsList, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props, [
          'itemProps',
        ]);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
          items = _this$props.items,
          itemProps = _this$props.itemProps,
          renderItem = _this$props.renderItem,
          renderItemData = _this$props.renderItemData,
          sectionIndex = _this$props.sectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex,
          getItemId = _this$props.getItemId,
          theme = _this$props.theme,
          keyPrefix = _this$props.keyPrefix;
        var sectionPrefix =
          sectionIndex === null
            ? keyPrefix
            : ''.concat(keyPrefix, 'section-').concat(sectionIndex, '-');
        var isItemPropsFunction = typeof itemProps === 'function';
        return /*#__PURE__*/ _react['default'].createElement(
          'ul',
          _extends(
            {
              role: 'listbox',
            },
            theme(''.concat(sectionPrefix, 'items-list'), 'itemsList')
          ),
          items.map(function (item, itemIndex) {
            var isFirst = itemIndex === 0;
            var isHighlighted = itemIndex === highlightedItemIndex;
            var itemKey = ''.concat(sectionPrefix, 'item-').concat(itemIndex);
            var itemPropsObj = isItemPropsFunction
              ? itemProps({
                  sectionIndex: sectionIndex,
                  itemIndex: itemIndex,
                })
              : itemProps;

            var allItemProps = _objectSpread(
              {
                id: getItemId(sectionIndex, itemIndex),
                'aria-selected': isHighlighted,
              },
              theme(
                itemKey,
                'item',
                isFirst && 'itemFirst',
                isHighlighted && 'itemHighlighted'
              ),
              {},
              itemPropsObj
            );

            if (isHighlighted) {
              allItemProps.ref = _this2.storeHighlightedItemReference;
            } // `key` is provided by theme()

            /* eslint-disable react/jsx-key */

            return /*#__PURE__*/ _react['default'].createElement(
              _Item['default'],
              _extends({}, allItemProps, {
                sectionIndex: sectionIndex,
                isHighlighted: isHighlighted,
                itemIndex: itemIndex,
                item: item,
                renderItem: renderItem,
                renderItemData: renderItemData,
              })
            );
            /* eslint-enable react/jsx-key */
          })
        );
      },
    },
  ]);

  return ItemsList;
})(_react.Component);

exports['default'] = ItemsList;

_defineProperty(ItemsList, 'propTypes', {
  items: _propTypes['default'].array.isRequired,
  itemProps: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  renderItem: _propTypes['default'].func.isRequired,
  renderItemData: _propTypes['default'].object.isRequired,
  sectionIndex: _propTypes['default'].number,
  highlightedItemIndex: _propTypes['default'].number,
  onHighlightedItemChange: _propTypes['default'].func.isRequired,
  getItemId: _propTypes['default'].func.isRequired,
  theme: _propTypes['default'].func.isRequired,
  keyPrefix: _propTypes['default'].string.isRequired,
});

_defineProperty(ItemsList, 'defaultProps', {
  sectionIndex: null,
});
});

unwrapExports(ItemList);

var Autowhatever_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(React);

var _propTypes = _interopRequireDefault(propTypes);

var _sectionIterator = _interopRequireDefault(dist);

var _reactThemeable = _interopRequireDefault(dist$1);

var _SectionTitle = _interopRequireDefault(SectionTitle_1);

var _ItemList = _interopRequireDefault(ItemList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(n);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var emptyObject = {};

var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
  return /*#__PURE__*/ _react['default'].createElement('input', props);
};

var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
  var containerProps = _ref.containerProps,
    children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    containerProps,
    children
  );
};

var defaultTheme = {
  container: 'react-autowhatever__container',
  containerOpen: 'react-autowhatever__container--open',
  input: 'react-autowhatever__input',
  inputOpen: 'react-autowhatever__input--open',
  inputFocused: 'react-autowhatever__input--focused',
  itemsContainer: 'react-autowhatever__items-container',
  itemsContainerOpen: 'react-autowhatever__items-container--open',
  itemsList: 'react-autowhatever__items-list',
  item: 'react-autowhatever__item',
  itemFirst: 'react-autowhatever__item--first',
  itemHighlighted: 'react-autowhatever__item--highlighted',
  sectionContainer: 'react-autowhatever__section-container',
  sectionContainerFirst: 'react-autowhatever__section-container--first',
  sectionTitle: 'react-autowhatever__section-title',
  commandPanelInputLogo: 'command-panel-input-logo',
  commandPanelInputWrapper: 'command-panel-input-wrapper',
  commandPanelInputWrapperFocused: 'command-panel-input-wrapper-focused',
};

var Autowhatever = /*#__PURE__*/ (function (_Component) {
  _inherits(Autowhatever, _Component);

  var _super = _createSuper(Autowhatever);

  function Autowhatever(props) {
    var _this;

    _classCallCheck(this, Autowhatever);

    _this = _super.call(this, props);

    _defineProperty(
      _assertThisInitialized(_this),
      'storeInputReference',
      function (input) {
        if (input !== null) {
          _this.input = input;
        }

        var userRef = _this.props.inputProps.ref;

        if (userRef) {
          if (typeof userRef === 'function') {
            userRef(input);
          } else if (
            _typeof(userRef) === 'object' &&
            Object.prototype.hasOwnProperty.call(userRef, 'current')
          ) {
            userRef.current = input;
          }
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'storeItemsContainerReference',
      function (itemsContainer) {
        if (itemsContainer !== null) {
          _this.itemsContainer = itemsContainer;
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onHighlightedItemChange',
      function (highlightedItem) {
        _this.highlightedItem = highlightedItem;
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'getItemId', function (
      sectionIndex,
      itemIndex
    ) {
      if (itemIndex === null) {
        return null;
      }

      var id = _this.props.id;
      var section =
        sectionIndex === null ? '' : 'section-'.concat(sectionIndex);
      return 'react-autowhatever-'
        .concat(id, '-')
        .concat(section, '-item-')
        .concat(itemIndex);
    });

    _defineProperty(_assertThisInitialized(_this), 'onFocus', function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: true,
      });

      inputProps.onFocus && inputProps.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), 'onBlur', function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: false,
      });

      inputProps.onBlur && inputProps.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), 'onKeyDown', function (
      event
    ) {
      var _this$props = _this.props,
        inputProps = _this$props.inputProps,
        highlightedSectionIndex = _this$props.highlightedSectionIndex,
        highlightedItemIndex = _this$props.highlightedItemIndex;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp': {
          var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

          var _this$sectionIterator = _this.sectionIterator[nextPrev]([
              highlightedSectionIndex,
              highlightedItemIndex,
            ]),
            _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
            newHighlightedSectionIndex = _this$sectionIterator2[0],
            newHighlightedItemIndex = _this$sectionIterator2[1];

          inputProps.onKeyDown(event, {
            newHighlightedSectionIndex: newHighlightedSectionIndex,
            newHighlightedItemIndex: newHighlightedItemIndex,
          });
          break;
        }

        default:
          inputProps.onKeyDown(event, {
            highlightedSectionIndex: highlightedSectionIndex,
            highlightedItemIndex: highlightedItemIndex,
          });
      }
    });

    _this.highlightedItem = null;
    _this.state = {
      isInputFocused: false,
    };

    _this.setSectionsItems(props);

    _this.setSectionIterator(props);

    _this.setTheme(props);

    return _this;
  }

  _createClass(Autowhatever, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.ensureHighlightedItemIsVisible();
      }, // eslint-disable-next-line camelcase, react/sort-comp
    },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
          this.setSectionsItems(nextProps);
        }

        if (
          nextProps.items !== this.props.items ||
          nextProps.multiSection !== this.props.multiSection
        ) {
          this.setSectionIterator(nextProps);
        }

        if (nextProps.theme !== this.props.theme) {
          this.setTheme(nextProps);
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.ensureHighlightedItemIsVisible();
      },
    },
    {
      key: 'setSectionsItems',
      value: function setSectionsItems(props) {
        if (props.multiSection) {
          this.sectionsItems = props.items.map(function (section) {
            return props.getSectionItems(section);
          });
          this.sectionsLengths = this.sectionsItems.map(function (items) {
            return items.length;
          });
          this.allSectionsAreEmpty = this.sectionsLengths.every(function (
            itemsCount
          ) {
            return itemsCount === 0;
          });
        }
      },
    },
    {
      key: 'setSectionIterator',
      value: function setSectionIterator(props) {
        this.sectionIterator = (0, _sectionIterator['default'])({
          multiSection: props.multiSection,
          data: props.multiSection ? this.sectionsLengths : props.items.length,
        });
      },
    },
    {
      key: 'setTheme',
      value: function setTheme(props) {
        this.theme = (0, _reactThemeable['default'])(props.theme);
      },
    },
    {
      key: 'renderSections',
      value: function renderSections() {
        var _this2 = this;

        if (this.allSectionsAreEmpty) {
          return null;
        }

        var theme = this.theme;
        var _this$props2 = this.props,
          id = _this$props2.id,
          items = _this$props2.items,
          renderItem = _this$props2.renderItem,
          renderItemData = _this$props2.renderItemData,
          renderSectionTitle = _this$props2.renderSectionTitle,
          highlightedSectionIndex = _this$props2.highlightedSectionIndex,
          highlightedItemIndex = _this$props2.highlightedItemIndex,
          itemProps = _this$props2.itemProps;
        return items.map(function (section, sectionIndex) {
          var keyPrefix = 'react-autowhatever-'.concat(id, '-');
          var sectionKeyPrefix = ''
            .concat(keyPrefix, 'section-')
            .concat(sectionIndex, '-');
          var isFirstSection = sectionIndex === 0; // `key` is provided by theme()

          /* eslint-disable react/jsx-key */

          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            theme(
              ''.concat(sectionKeyPrefix, 'container'),
              'sectionContainer',
              isFirstSection && 'sectionContainerFirst'
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _SectionTitle['default'],
              {
                section: section,
                renderSectionTitle: renderSectionTitle,
                theme: theme,
                sectionKeyPrefix: sectionKeyPrefix,
              }
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _ItemList['default'],
              {
                items: _this2.sectionsItems[sectionIndex],
                itemProps: itemProps,
                renderItem: renderItem,
                renderItemData: renderItemData,
                sectionIndex: sectionIndex,
                highlightedItemIndex:
                  highlightedSectionIndex === sectionIndex
                    ? highlightedItemIndex
                    : null,
                onHighlightedItemChange: _this2.onHighlightedItemChange,
                getItemId: _this2.getItemId,
                theme: theme,
                keyPrefix: keyPrefix,
                ref: _this2.storeItemsListReference,
              }
            )
          );
          /* eslint-enable react/jsx-key */
        });
      },
    },
    {
      key: 'renderItems',
      value: function renderItems() {
        var items = this.props.items;

        if (items.length === 0) {
          return null;
        }

        var theme = this.theme;
        var _this$props3 = this.props,
          id = _this$props3.id,
          renderItem = _this$props3.renderItem,
          renderItemData = _this$props3.renderItemData,
          highlightedSectionIndex = _this$props3.highlightedSectionIndex,
          highlightedItemIndex = _this$props3.highlightedItemIndex,
          itemProps = _this$props3.itemProps;
        return /*#__PURE__*/ _react['default'].createElement(
          _ItemList['default'],
          {
            items: items,
            itemProps: itemProps,
            renderItem: renderItem,
            renderItemData: renderItemData,
            highlightedItemIndex:
              highlightedSectionIndex === null ? highlightedItemIndex : null,
            onHighlightedItemChange: this.onHighlightedItemChange,
            getItemId: this.getItemId,
            theme: theme,
            keyPrefix: 'react-autowhatever-'.concat(id, '-'),
          }
        );
      },
    },
    {
      key: 'ensureHighlightedItemIsVisible',
      value: function ensureHighlightedItemIsVisible() {
        var highlightedItem = this.highlightedItem;

        if (!highlightedItem) {
          return;
        }

        var itemsContainer = this.itemsContainer;
        var itemOffsetRelativeToContainer =
          highlightedItem.offsetParent === itemsContainer
            ? highlightedItem.offsetTop
            : highlightedItem.offsetTop - itemsContainer.offsetTop;
        var scrollTop = itemsContainer.scrollTop; // Top of the visible area

        if (itemOffsetRelativeToContainer < scrollTop) {
          // Item is off the top of the visible area
          scrollTop = itemOffsetRelativeToContainer;
        } else if (
          itemOffsetRelativeToContainer + highlightedItem.offsetHeight >
          scrollTop + itemsContainer.offsetHeight
        ) {
          // Item is off the bottom of the visible area
          scrollTop =
            itemOffsetRelativeToContainer +
            highlightedItem.offsetHeight -
            itemsContainer.offsetHeight;
        }

        if (scrollTop !== itemsContainer.scrollTop) {
          itemsContainer.scrollTop = scrollTop;
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var theme = this.theme;
        var _this$props4 = this.props,
          id = _this$props4.id,
          multiSection = _this$props4.multiSection,
          renderInputComponent = _this$props4.renderInputComponent,
          renderItemsContainer = _this$props4.renderItemsContainer,
          highlightedSectionIndex = _this$props4.highlightedSectionIndex,
          highlightedItemIndex = _this$props4.highlightedItemIndex;
        var isInputFocused = this.state.isInputFocused;
        var renderedItems = multiSection
          ? this.renderSections()
          : this.renderItems();
        var isOpen = renderedItems !== null;
        var ariaActivedescendant = this.getItemId(
          highlightedSectionIndex,
          highlightedItemIndex
        );
        var itemsContainerId = 'react-autowhatever-'.concat(id);

        var containerProps = _objectSpread(
          {
            role: 'combobox',
            'aria-haspopup': 'listbox',
            'aria-owns': itemsContainerId,
            'aria-expanded': isOpen,
          },
          theme(
            'react-autowhatever-'.concat(id, '-container'),
            'container',
            isOpen && 'containerOpen'
          ),
          {},
          this.props.containerProps
        );

        var inputComponent = renderInputComponent(
          _objectSpread(
            {
              type: 'text',
              value: '',
              autoComplete: 'off',
              'aria-autocomplete': 'list',
              'aria-controls': itemsContainerId,
              'aria-activedescendant': ariaActivedescendant,
            },
            theme(
              'react-autowhatever-'.concat(id, '-input'),
              'input',
              isOpen && 'inputOpen',
              isInputFocused && 'inputFocused'
            ),
            {},
            this.props.inputProps,
            {
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
              ref: this.storeInputReference,
            }
          )
        );
        var itemsContainer = renderItemsContainer({
          containerProps: _objectSpread(
            {
              id: itemsContainerId,
              role: 'listbox',
            },
            theme(
              'react-autowhatever-'.concat(id, '-items-container'),
              'itemsContainer',
              isOpen && 'itemsContainerOpen'
            ),
            {
              ref: this.storeItemsContainerReference,
            }
          ),
          children: renderedItems,
        });
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          containerProps,
          /*#__PURE__*/ _react['default'].createElement(
            'div',
            theme(
              'react-autowhatever-'.concat(id, '-commandPanelInputWrapper'),
              'commandPanelInputWrapper',
              isInputFocused && 'commandPanelInputWrapperFocused'
            ),
            /*#__PURE__*/ _react['default'].createElement(
              'img',
              theme(
                'react-autowhatever-'.concat(id, '-commandPanelInputLogo'),
                'commandPanelInputLogo'
              )
            ),
            inputComponent
          ),
          itemsContainer
        );
      },
    },
  ]);

  return Autowhatever;
})(_react.Component);

exports['default'] = Autowhatever;

_defineProperty(Autowhatever, 'propTypes', {
  id: _propTypes['default'].string,
  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
  multiSection: _propTypes['default'].bool,
  // Indicates whether a multi section layout should be rendered.
  renderInputComponent: _propTypes['default'].func,
  // When specified, it is used to render the input element.
  renderItemsContainer: _propTypes['default'].func,
  // Renders the items container.
  items: _propTypes['default'].array.isRequired,
  // Array of items or sections to render.
  renderItem: _propTypes['default'].func,
  // This function renders a single item.
  renderItemData: _propTypes['default'].object,
  // Arbitrary data that will be passed to renderItem()
  renderSectionTitle: _propTypes['default'].func,
  // This function gets a section and renders its title.
  getSectionItems: _propTypes['default'].func,
  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
  containerProps: _propTypes['default'].object,
  // Arbitrary container props
  inputProps: _propTypes['default'].object,
  // Arbitrary input props
  itemProps: _propTypes['default'].oneOfType([
    // Arbitrary item props
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  highlightedSectionIndex: _propTypes['default'].number,
  // Section index of the highlighted item
  highlightedItemIndex: _propTypes['default'].number,
  // Highlighted item index (within a section)
  theme: _propTypes['default'].oneOfType([
    // Styles. See: https://github.com/markdalgleish/react-themeable
    _propTypes['default'].object,
    _propTypes['default'].array,
  ]),
});

_defineProperty(Autowhatever, 'defaultProps', {
  id: '1',
  multiSection: false,
  renderInputComponent: defaultRenderInputComponent,
  renderItemsContainer: defaultRenderItemsContainer,
  renderItem: function renderItem() {
    throw new Error('`renderItem` must be provided');
  },
  renderItemData: emptyObject,
  renderSectionTitle: function renderSectionTitle() {
    throw new Error('`renderSectionTitle` must be provided');
  },
  getSectionItems: function getSectionItems() {
    throw new Error('`getSectionItems` must be provided');
  },
  containerProps: emptyObject,
  inputProps: emptyObject,
  itemProps: emptyObject,
  highlightedSectionIndex: null,
  highlightedItemIndex: null,
  theme: defaultTheme,
});
});

unwrapExports(Autowhatever_1);

var theme = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.mapToAutowhateverTheme = exports.defaultTheme = void 0;
var defaultTheme = {
  container: 'react-autosuggest__container',
  containerOpen: 'react-autosuggest__container--open',
  input: 'react-autosuggest__input',
  inputOpen: 'react-autosuggest__input--open',
  inputFocused: 'react-autosuggest__input--focused',
  suggestionsContainer: 'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion',
  suggestionFirst: 'react-autosuggest__suggestion--first',
  suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'react-autosuggest__section-title',
};
exports.defaultTheme = defaultTheme;

var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
  var result = {};

  for (var key in theme) {
    switch (key) {
      case 'suggestionsContainer':
        result['itemsContainer'] = theme[key];
        break;

      case 'suggestionsContainerOpen':
        result['itemsContainerOpen'] = theme[key];
        break;

      case 'suggestion':
        result['item'] = theme[key];
        break;

      case 'suggestionFirst':
        result['itemFirst'] = theme[key];
        break;

      case 'suggestionHighlighted':
        result['itemHighlighted'] = theme[key];
        break;

      case 'suggestionsList':
        result['itemsList'] = theme[key];
        break;

      default:
        result[key] = theme[key];
    }
  }

  return result;
};

exports.mapToAutowhateverTheme = mapToAutowhateverTheme;
});

unwrapExports(theme);
var theme_1 = theme.mapToAutowhateverTheme;
var theme_2 = theme.defaultTheme;

var Autosuggest_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(React);

var _propTypes = _interopRequireDefault(propTypes);

var _arrays = _interopRequireDefault(arrays);

var _Autowhatever = _interopRequireDefault(Autowhatever_1);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var alwaysTrue = function alwaysTrue() {
  return true;
};

var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(
  value
) {
  return value.trim().length > 0;
};

var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer(
  _ref
) {
  var containerProps = _ref.containerProps,
    children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    containerProps,
    children
  );
};

var Autosuggest = /*#__PURE__*/ (function (_Component) {
  _inherits(Autosuggest, _Component);

  var _super = _createSuper(Autosuggest);

  function Autosuggest(_ref2) {
    var _this;

    var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;

    _classCallCheck(this, Autosuggest);

    _this = _super.call(this);

    _defineProperty(
      _assertThisInitialized(_this),
      'onDocumentMouseDown',
      function (event) {
        _this.justClickedOnSuggestionsContainer = false;
        var node =
          (event.detail && event.detail.target) || // This is for testing only. Please show me a better way to emulate this.
          event.target;

        while (node !== null && node !== document) {
          if (
            node.getAttribute &&
            node.getAttribute('data-suggestion-index') !== null
          ) {
            // Suggestion was clicked
            return;
          }

          if (node === _this.suggestionsContainer) {
            // Something else inside suggestions container was clicked
            _this.justClickedOnSuggestionsContainer = true;
            return;
          }

          node = node.parentNode;
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'storeAutowhateverRef',
      function (autowhatever) {
        if (autowhatever !== null) {
          _this.autowhatever = autowhatever;
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionMouseEnter',
      function (event, _ref3) {
        var sectionIndex = _ref3.sectionIndex,
          itemIndex = _ref3.itemIndex;

        _this.updateHighlightedSuggestion(sectionIndex, itemIndex);

        if (event.target === _this.pressedSuggestion) {
          _this.justSelectedSuggestion = true;
        }

        _this.justMouseEntered = true;
        setTimeout(function () {
          _this.justMouseEntered = false;
        });
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'highlightFirstSuggestion',
      function () {
        _this.updateHighlightedSuggestion(
          _this.props.multiSection ? 0 : null,
          0
        );
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onDocumentMouseUp',
      function () {
        if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
          _this.input.focus();
        }

        _this.pressedSuggestion = null;
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionMouseDown',
      function (event) {
        // Checking if this.justSelectedSuggestion is already true to not duplicate touch events in chrome
        // See: https://github.com/facebook/react/issues/9809#issuecomment-413978405
        if (!_this.justSelectedSuggestion) {
          _this.justSelectedSuggestion = true;
          _this.pressedSuggestion = event.target;
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionsClearRequested',
      function () {
        var onSuggestionsClearRequested =
          _this.props.onSuggestionsClearRequested;
        onSuggestionsClearRequested && onSuggestionsClearRequested();
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionSelected',
      function (event, data) {
        var _this$props = _this.props,
          alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions,
          onSuggestionSelected = _this$props.onSuggestionSelected,
          onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
        onSuggestionSelected && onSuggestionSelected(event, data);

        if (alwaysRenderSuggestions) {
          onSuggestionsFetchRequested({
            value: data.suggestionValue,
            reason: 'suggestion-selected',
          });
        } else {
          _this.onSuggestionsClearRequested();
        }

        _this.resetHighlightedSuggestion();
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionClick',
      function (event) {
        var _this$props2 = _this.props,
          alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions,
          focusInputOnSuggestionClick =
            _this$props2.focusInputOnSuggestionClick;

        var _this$getSuggestionIn = _this.getSuggestionIndices(
            _this.findSuggestionElement(event.target)
          ),
          sectionIndex = _this$getSuggestionIn.sectionIndex,
          suggestionIndex = _this$getSuggestionIn.suggestionIndex;

        var clickedSuggestion = _this.getSuggestion(
          sectionIndex,
          suggestionIndex
        );

        var clickedSuggestionValue = _this.props.getSuggestionValue(
          clickedSuggestion
        );

        _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');

        _this.onSuggestionSelected(event, {
          suggestion: clickedSuggestion,
          suggestionValue: clickedSuggestionValue,
          suggestionIndex: suggestionIndex,
          sectionIndex: sectionIndex,
          method: 'click',
        });

        if (!alwaysRenderSuggestions) {
          _this.closeSuggestions();
        }

        if (focusInputOnSuggestionClick === true) {
          _this.input.focus();
        } else {
          _this.onBlur();
        }

        setTimeout(function () {
          _this.justSelectedSuggestion = false;
        });
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'onBlur', function () {
      var _this$props3 = _this.props,
        inputProps = _this$props3.inputProps,
        shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
      var value = inputProps.value,
        onBlur = inputProps.onBlur;

      var highlightedSuggestion = _this.getHighlightedSuggestion();

      var shouldRender = shouldRenderSuggestions(value);

      _this.setState({
        isFocused: false,
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null,
        isCollapsed: !shouldRender,
      });

      onBlur &&
        onBlur(_this.blurEvent, {
          highlightedSuggestion: highlightedSuggestion,
        });
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionMouseLeave',
      function (event) {
        _this.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown

        if (
          _this.justSelectedSuggestion &&
          event.target === _this.pressedSuggestion
        ) {
          _this.justSelectedSuggestion = false;
        }
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionTouchStart',
      function () {
        _this.justSelectedSuggestion = true; // todo: event.preventDefault when https://github.com/facebook/react/issues/2043
        // todo: gets released so onSuggestionMouseDown won't fire in chrome
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'onSuggestionTouchMove',
      function () {
        _this.justSelectedSuggestion = false;
        _this.pressedSuggestion = null;

        _this.input.focus();
      }
    );

    _defineProperty(_assertThisInitialized(_this), 'itemProps', function (
      _ref4
    ) {
      var sectionIndex = _ref4.sectionIndex,
        itemIndex = _ref4.itemIndex;
      return {
        'data-section-index': sectionIndex,
        'data-suggestion-index': itemIndex,
        onMouseEnter: _this.onSuggestionMouseEnter,
        onMouseLeave: _this.onSuggestionMouseLeave,
        onMouseDown: _this.onSuggestionMouseDown,
        onTouchStart: _this.onSuggestionTouchStart,
        onTouchMove: _this.onSuggestionTouchMove,
        onClick: _this.onSuggestionClick,
      };
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'renderSuggestionsContainer',
      function (_ref5) {
        var containerProps = _ref5.containerProps,
          children = _ref5.children;
        var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
        return renderSuggestionsContainer({
          containerProps: containerProps,
          children: children,
          query: _this.getQuery(),
        });
      }
    );

    _this.state = {
      isFocused: false,
      isCollapsed: !_alwaysRenderSuggestions,
      highlightedSectionIndex: null,
      highlightedSuggestionIndex: null,
      highlightedSuggestion: null,
      valueBeforeUpDown: null,
    };
    _this.justPressedUpDown = false;
    _this.justMouseEntered = false;
    _this.pressedSuggestion = null;
    return _this;
  }

  _createClass(Autosuggest, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.onDocumentMouseDown);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        this.input = this.autowhatever.input;
        this.suggestionsContainer = this.autowhatever.itemsContainer;
      }, // eslint-disable-next-line camelcase, react/sort-comp
    },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (
          (0, _arrays['default'])(nextProps.suggestions, this.props.suggestions)
        ) {
          if (
            nextProps.highlightFirstSuggestion &&
            nextProps.suggestions.length > 0 &&
            this.justPressedUpDown === false &&
            this.justMouseEntered === false
          ) {
            this.highlightFirstSuggestion();
          }
        } else {
          if (this.willRenderSuggestions(nextProps)) {
            if (this.state.isCollapsed && !this.justSelectedSuggestion) {
              this.revealSuggestions();
            }
          } else {
            this.resetHighlightedSuggestion();
          }
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _this$props4 = this.props,
          suggestions = _this$props4.suggestions,
          onSuggestionHighlighted = _this$props4.onSuggestionHighlighted,
          highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;

        if (
          !(0, _arrays['default'])(suggestions, prevProps.suggestions) &&
          suggestions.length > 0 &&
          highlightFirstSuggestion
        ) {
          this.highlightFirstSuggestion();
          return;
        }

        if (onSuggestionHighlighted) {
          var highlightedSuggestion = this.getHighlightedSuggestion();
          var prevHighlightedSuggestion = prevState.highlightedSuggestion;

          if (highlightedSuggestion != prevHighlightedSuggestion) {
            onSuggestionHighlighted({
              suggestion: highlightedSuggestion,
            });
          }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.onDocumentMouseDown);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
      },
    },
    {
      key: 'updateHighlightedSuggestion',
      value: function updateHighlightedSuggestion(
        sectionIndex,
        suggestionIndex,
        prevValue
      ) {
        var _this2 = this;

        this.setState(function (state) {
          var valueBeforeUpDown = state.valueBeforeUpDown;

          if (suggestionIndex === null) {
            valueBeforeUpDown = null;
          } else if (
            valueBeforeUpDown === null &&
            typeof prevValue !== 'undefined'
          ) {
            valueBeforeUpDown = prevValue;
          }

          return {
            highlightedSectionIndex: sectionIndex,
            highlightedSuggestionIndex: suggestionIndex,
            highlightedSuggestion:
              suggestionIndex === null
                ? null
                : _this2.getSuggestion(sectionIndex, suggestionIndex),
            valueBeforeUpDown: valueBeforeUpDown,
          };
        });
      },
    },
    {
      key: 'resetHighlightedSuggestion',
      value: function resetHighlightedSuggestion() {
        var shouldResetValueBeforeUpDown =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : true;
        this.setState(function (state) {
          var valueBeforeUpDown = state.valueBeforeUpDown;
          return {
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: shouldResetValueBeforeUpDown
              ? null
              : valueBeforeUpDown,
          };
        });
      },
    },
    {
      key: 'revealSuggestions',
      value: function revealSuggestions() {
        this.setState({
          isCollapsed: false,
        });
      },
    },
    {
      key: 'closeSuggestions',
      value: function closeSuggestions() {
        this.setState({
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: null,
          isCollapsed: true,
        });
      },
    },
    {
      key: 'getSuggestion',
      value: function getSuggestion(sectionIndex, suggestionIndex) {
        var _this$props5 = this.props,
          suggestions = _this$props5.suggestions,
          multiSection = _this$props5.multiSection,
          getSectionSuggestions = _this$props5.getSectionSuggestions;

        if (multiSection) {
          return getSectionSuggestions(suggestions[sectionIndex])[
            suggestionIndex
          ];
        }

        return suggestions[suggestionIndex];
      },
    },
    {
      key: 'getHighlightedSuggestion',
      value: function getHighlightedSuggestion() {
        var _this$state = this.state,
          highlightedSectionIndex = _this$state.highlightedSectionIndex,
          highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;

        if (highlightedSuggestionIndex === null) {
          return null;
        }

        return this.getSuggestion(
          highlightedSectionIndex,
          highlightedSuggestionIndex
        );
      },
    },
    {
      key: 'getSuggestionValueByIndex',
      value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
        var getSuggestionValue = this.props.getSuggestionValue;
        return getSuggestionValue(
          this.getSuggestion(sectionIndex, suggestionIndex)
        );
      },
    },
    {
      key: 'getSuggestionIndices',
      value: function getSuggestionIndices(suggestionElement) {
        var sectionIndex = suggestionElement.getAttribute('data-section-index');
        var suggestionIndex = suggestionElement.getAttribute(
          'data-suggestion-index'
        );
        return {
          sectionIndex:
            typeof sectionIndex === 'string'
              ? parseInt(sectionIndex, 10)
              : null,
          suggestionIndex: parseInt(suggestionIndex, 10),
        };
      },
    },
    {
      key: 'findSuggestionElement',
      value: function findSuggestionElement(startNode) {
        var node = startNode;

        do {
          if (
            node.getAttribute &&
            node.getAttribute('data-suggestion-index') !== null
          ) {
            return node;
          }

          node = node.parentNode;
        } while (node !== null);

        console.error('Clicked element:', startNode); // eslint-disable-line no-console

        throw new Error("Couldn't find suggestion element");
      },
    },
    {
      key: 'maybeCallOnChange',
      value: function maybeCallOnChange(event, newValue, method) {
        var _this$props$inputProp = this.props.inputProps,
          value = _this$props$inputProp.value,
          onChange = _this$props$inputProp.onChange;

        if (newValue !== value) {
          onChange(event, {
            newValue: newValue,
            method: method,
          });
        }
      },
    },
    {
      key: 'willRenderSuggestions',
      value: function willRenderSuggestions(props) {
        var suggestions = props.suggestions,
          inputProps = props.inputProps,
          shouldRenderSuggestions = props.shouldRenderSuggestions;
        var value = inputProps.value;
        return suggestions.length > 0 && shouldRenderSuggestions(value);
      },
    },
    {
      key: 'getQuery',
      value: function getQuery() {
        var inputProps = this.props.inputProps;
        var value = inputProps.value;
        var valueBeforeUpDown = this.state.valueBeforeUpDown;
        return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _this$props6 = this.props,
          suggestions = _this$props6.suggestions,
          renderInputComponent = _this$props6.renderInputComponent,
          onSuggestionsFetchRequested =
            _this$props6.onSuggestionsFetchRequested,
          renderSuggestion = _this$props6.renderSuggestion,
          inputProps = _this$props6.inputProps,
          multiSection = _this$props6.multiSection,
          renderSectionTitle = _this$props6.renderSectionTitle,
          id = _this$props6.id,
          getSectionSuggestions = _this$props6.getSectionSuggestions,
          theme$1 = _this$props6.theme,
          getSuggestionValue = _this$props6.getSuggestionValue,
          alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions,
          highlightFirstSuggestion = _this$props6.highlightFirstSuggestion;
        var _this$state2 = this.state,
          isFocused = _this$state2.isFocused,
          isCollapsed = _this$state2.isCollapsed,
          highlightedSectionIndex = _this$state2.highlightedSectionIndex,
          highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex,
          valueBeforeUpDown = _this$state2.valueBeforeUpDown;
        var shouldRenderSuggestions = alwaysRenderSuggestions
          ? alwaysTrue
          : this.props.shouldRenderSuggestions;
        var value = inputProps.value,
          _onFocus = inputProps.onFocus,
          _onKeyDown = inputProps.onKeyDown;
        var willRenderSuggestions = this.willRenderSuggestions(this.props);
        var isOpen =
          alwaysRenderSuggestions ||
          (isFocused && !isCollapsed && willRenderSuggestions);
        var items = isOpen ? suggestions : [];

        var autowhateverInputProps = _objectSpread({}, inputProps, {
          onFocus: function onFocus(event) {
            if (
              !_this3.justSelectedSuggestion &&
              !_this3.justClickedOnSuggestionsContainer
            ) {
              var shouldRender = shouldRenderSuggestions(value);

              _this3.setState({
                isFocused: true,
                isCollapsed: !shouldRender,
              });

              _onFocus && _onFocus(event);

              if (shouldRender) {
                onSuggestionsFetchRequested({
                  value: value,
                  reason: 'input-focused',
                });
              }
            }
          },
          onBlur: function onBlur(event) {
            if (_this3.justClickedOnSuggestionsContainer) {
              _this3.input.focus();

              return;
            }

            _this3.blurEvent = event;

            if (!_this3.justSelectedSuggestion) {
              _this3.onBlur();

              _this3.onSuggestionsClearRequested();
            }
          },
          onChange: function onChange(event) {
            var value = event.target.value;
            var shouldRender = shouldRenderSuggestions(value);

            _this3.maybeCallOnChange(event, value, 'type');

            if (_this3.suggestionsContainer) {
              _this3.suggestionsContainer.scrollTop = 0;
            }

            _this3.setState(
              _objectSpread(
                {},
                highlightFirstSuggestion
                  ? {}
                  : {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                    },
                {
                  valueBeforeUpDown: null,
                  isCollapsed: !shouldRender,
                }
              )
            );

            if (shouldRender) {
              onSuggestionsFetchRequested({
                value: value,
                reason: 'input-changed',
              });
            } else {
              _this3.onSuggestionsClearRequested();
            }
          },
          onKeyDown: function onKeyDown(event, data) {
            var keyCode = event.keyCode;

            switch (keyCode) {
              case 40: // ArrowDown

              case 38:
                // ArrowUp
                if (isCollapsed) {
                  if (shouldRenderSuggestions(value)) {
                    onSuggestionsFetchRequested({
                      value: value,
                      reason: 'suggestions-revealed',
                    });

                    _this3.revealSuggestions();
                  }
                } else if (suggestions.length > 0) {
                  var newHighlightedSectionIndex =
                      data.newHighlightedSectionIndex,
                    newHighlightedItemIndex = data.newHighlightedItemIndex;
                  var newValue;

                  if (newHighlightedItemIndex === null) {
                    // valueBeforeUpDown can be null if, for example, user
                    // hovers on the first suggestion and then pressed Up.
                    // If that happens, use the original input value.
                    newValue =
                      valueBeforeUpDown === null ? value : valueBeforeUpDown;
                  } else {
                    newValue = _this3.getSuggestionValueByIndex(
                      newHighlightedSectionIndex,
                      newHighlightedItemIndex
                    );
                  }

                  _this3.updateHighlightedSuggestion(
                    newHighlightedSectionIndex,
                    newHighlightedItemIndex,
                    value
                  );

                  _this3.maybeCallOnChange(
                    event,
                    newValue,
                    keyCode === 40 ? 'down' : 'up'
                  );
                }

                event.preventDefault(); // Prevents the cursor from moving

                _this3.justPressedUpDown = true;
                setTimeout(function () {
                  _this3.justPressedUpDown = false;
                });
                break;
              // Enter

              case 13: {
                // See #388
                if (event.keyCode === 229) {
                  break;
                }

                var highlightedSuggestion = _this3.getHighlightedSuggestion();

                if (isOpen && !alwaysRenderSuggestions) {
                  _this3.closeSuggestions();
                }

                if (highlightedSuggestion != null) {
                  var _newValue = getSuggestionValue(highlightedSuggestion);

                  _this3.maybeCallOnChange(event, _newValue, 'enter');

                  _this3.onSuggestionSelected(event, {
                    suggestion: highlightedSuggestion,
                    suggestionValue: _newValue,
                    suggestionIndex: highlightedSuggestionIndex,
                    sectionIndex: highlightedSectionIndex,
                    method: 'enter',
                  });

                  _this3.justSelectedSuggestion = true;
                  setTimeout(function () {
                    _this3.justSelectedSuggestion = false;
                  });
                }

                break;
              }
              // Escape

              case 27: {
                if (isOpen) {
                  // If input.type === 'search', the browser clears the input
                  // when Escape is pressed. We want to disable this default
                  // behaviour so that, when suggestions are shown, we just hide
                  // them, without clearing the input.
                  event.preventDefault();
                }

                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

                if (valueBeforeUpDown === null) {
                  // Didn't interact with Up/Down
                  if (!willCloseSuggestions) {
                    var _newValue2 = '';

                    _this3.maybeCallOnChange(event, _newValue2, 'escape');

                    if (shouldRenderSuggestions(_newValue2)) {
                      onSuggestionsFetchRequested({
                        value: _newValue2,
                        reason: 'escape-pressed',
                      });
                    } else {
                      _this3.onSuggestionsClearRequested();
                    }
                  }
                } else {
                  // Interacted with Up/Down
                  _this3.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
                }

                if (willCloseSuggestions) {
                  _this3.onSuggestionsClearRequested();

                  _this3.closeSuggestions();
                } else {
                  _this3.resetHighlightedSuggestion();
                }

                break;
              }
            }

            _onKeyDown && _onKeyDown(event);
          },
        });

        var renderSuggestionData = {
          query: this.getQuery(),
        };
        return /*#__PURE__*/ _react['default'].createElement(
          _Autowhatever['default'],
          {
            multiSection: multiSection,
            items: items,
            renderInputComponent: renderInputComponent,
            renderItemsContainer: this.renderSuggestionsContainer,
            renderItem: renderSuggestion,
            renderItemData: renderSuggestionData,
            renderSectionTitle: renderSectionTitle,
            getSectionItems: getSectionSuggestions,
            highlightedSectionIndex: highlightedSectionIndex,
            highlightedItemIndex: highlightedSuggestionIndex,
            inputProps: autowhateverInputProps,
            itemProps: this.itemProps,
            theme: (0, theme.mapToAutowhateverTheme)(theme$1),
            id: id,
            ref: this.storeAutowhateverRef,
          }
        );
      },
    },
  ]);

  return Autosuggest;
})(_react.Component);

exports['default'] = Autosuggest;

_defineProperty(Autosuggest, 'propTypes', {
  suggestions: _propTypes['default'].array.isRequired,
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(
    props,
    propName
  ) {
    var onSuggestionsFetchRequested = props[propName];

    if (typeof onSuggestionsFetchRequested !== 'function') {
      throw new Error(
        "'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp"
      );
    }
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(
    props,
    propName
  ) {
    var onSuggestionsClearRequested = props[propName];

    if (
      props.alwaysRenderSuggestions === false &&
      typeof onSuggestionsClearRequested !== 'function'
    ) {
      throw new Error(
        "'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp"
      );
    }
  },
  onSuggestionSelected: _propTypes['default'].func,
  onSuggestionHighlighted: _propTypes['default'].func,
  renderInputComponent: _propTypes['default'].func,
  renderSuggestionsContainer: _propTypes['default'].func,
  getSuggestionValue: _propTypes['default'].func.isRequired,
  renderSuggestion: _propTypes['default'].func.isRequired,
  inputProps: function inputProps(props, propName) {
    var inputProps = props[propName];

    if (!Object.prototype.hasOwnProperty.call(inputProps, 'value')) {
      throw new Error("'inputProps' must have 'value'.");
    }

    if (!Object.prototype.hasOwnProperty.call(inputProps, 'onChange')) {
      throw new Error("'inputProps' must have 'onChange'.");
    }
  },
  shouldRenderSuggestions: _propTypes['default'].func,
  alwaysRenderSuggestions: _propTypes['default'].bool,
  multiSection: _propTypes['default'].bool,
  renderSectionTitle: function renderSectionTitle(props, propName) {
    var renderSectionTitle = props[propName];

    if (
      props.multiSection === true &&
      typeof renderSectionTitle !== 'function'
    ) {
      throw new Error(
        "'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp"
      );
    }
  },
  getSectionSuggestions: function getSectionSuggestions(props, propName) {
    var getSectionSuggestions = props[propName];

    if (
      props.multiSection === true &&
      typeof getSectionSuggestions !== 'function'
    ) {
      throw new Error(
        "'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp"
      );
    }
  },
  focusInputOnSuggestionClick: _propTypes['default'].bool,
  highlightFirstSuggestion: _propTypes['default'].bool,
  theme: _propTypes['default'].object,
  id: _propTypes['default'].string,
});

_defineProperty(Autosuggest, 'defaultProps', {
  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  focusInputOnSuggestionClick: true,
  highlightFirstSuggestion: false,
  theme: theme.defaultTheme,
  id: '1',
});
});

unwrapExports(Autosuggest_1);

var dist$2 = Autosuggest_1['default'];

var mousetrap = createCommonjsModule(function (module) {
/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined$1) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback, useCapture) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, useCapture);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement, useCapture = true) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent, useCapture);
        _addEvent(targetElement, 'keydown', _handleKeyEvent, useCapture);
        _addEvent(targetElement, 'keyup', _handleKeyEvent, useCapture);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof undefined$1 === 'function' && undefined$1.amd) {
        undefined$1(function() {
            return Mousetrap;
        });
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);
});

// options are defined in fuzzysort docss, see:
// https://github.com/farzher/fuzzysort
var fuzzysortOptions = {
  threshold: -Infinity,
  // Don't return matches worse than this (higher is faster)
  limit: 7,
  // Don't return more results than this (lower is faster)
  allowTypo: true,
  // Allwos a snigle transpoes (false is faster)
  key: "name",
  // For when targets are objects (see its example usage)
  keys: ["name"],
  // For when targets are objects (see its example usage)
  scoreFn: null // For use with `keys` (see its example usage)

};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.default-spinner {\n  color: #FFFFFF;\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n.default-spinner.spinner-inline {\n  border-top: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-right: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-bottom: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-left: 0.4em solid #000000;\n}\n.default-spinner,\n.default-spinner:after {\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
styleInject(css_248z);

var DefaultSpinnerComponent = function DefaultSpinnerComponent(props) {
  var display = props.display,
      theme = props.theme;
  var cssClass;

  if (display === "inline") {
    cssClass = "default-spinner ".concat(theme, " inline");
  } else {
    cssClass = "default-spinner ".concat(theme, " modal");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: cssClass,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Loading..."));
}; // When a developer adds custom spinner wrap it so that if its a string
// then assume the text is accessible. If it's a component then instert
// a "Loading..." string that visible only to screen readers


var CustomSpinnerComponent = function CustomSpinnerComponent(props) {
  var spinner = props.spinner,
      display = props.display,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? "atom-spinner" : _props$theme;
  var cssClass;

  if (display === "inline") {
    cssClass = "spinner ".concat(theme, " inline");
  } else {
    cssClass = "spinner ".concat(theme, " modal");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: cssClass,
    role: "status"
  }, typeof spinner !== "string" ? /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Loading...") : null, spinner);
};

function PaletteSpinner(props) {
  var spinner = props.spinner,
      display = props.display,
      theme = props.theme;

  if (spinner) {
    return /*#__PURE__*/React.createElement(CustomSpinnerComponent, props);
  }

  return /*#__PURE__*/React.createElement(DefaultSpinnerComponent, {
    display: display,
    theme: theme
  });
}
DefaultSpinnerComponent.propTypes = {
  display: propTypes.oneOf(["modal", "inline"]),
  theme: propTypes.string
};
CustomSpinnerComponent.propTypes = {
  display: propTypes.oneOf(["modal", "inline"]),
  theme: propTypes.string,
  spinner: propTypes.oneOfType([propTypes.string, propTypes.element])
};
PaletteSpinner.propTypes = CustomSpinnerComponent.propTypes;

// should be safe because the raw markup originates from fuzzsort
// and is derived from the default, see:
// https://github.com/farzher/fuzzysort#fuzzysorthighlightresult-openb-closeb

var DefaultCommand = function DefaultCommand(props) {
  var suggestion = props.suggestion;
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, suggestion.highlight ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: suggestion.highlight
    }
  }) : /*#__PURE__*/React.createElement("span", null, suggestion.name));
};

DefaultCommand.defaultProps = {
  suggestion: {
    highlight: null
  }
};
DefaultCommand.propTypes = {
  /** a single suggestion that appears in the command palette. It must have a _name_ and
   * a _command_. The _name_ is a user friendly string that will be display to the user.
   * The command is a function that will be executed when the user clicks or presses the
   * enter key. */
  suggestion: propTypes.shape({
    name: propTypes.string.isRequired,
    highlight: propTypes.string,
    command: propTypes.func.isRequired
  })
};

var RenderCommand = function RenderCommand(props) {
  var suggestion = props.suggestion,
      renderCommand = props.renderCommand;

  if (renderCommand) {
    return /*#__PURE__*/React.createElement("div", null, renderCommand(suggestion));
  }

  return /*#__PURE__*/React.createElement(DefaultCommand, {
    suggestion: suggestion
  });
};

RenderCommand.defaultProps = {
  suggestion: {
    highlight: null
  }
};
RenderCommand.propTypes = {
  /** a single suggestion that appears in the command palette. It must have a _name_ and
   * a _command_. The _name_ is a user friendly string that will be display to the user.
   * The command is a function that will be executed when the user clicks or presses the
   * enter key. For single match a _highlight_ string will be passed, for mutliple mathes
   * the _highlight_ should be an array */
  suggestion: propTypes.shape({
    name: propTypes.string.isRequired,
    highlight: propTypes.oneOfType([propTypes.string, propTypes.array]),
    command: propTypes.func.isRequired
  }),

  /** trigger a string or a React.ComponentType that customises the layout and content of
   * the commands in the command list. For complete documentation see the storybook
   * notes. */
  renderCommand: propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.element])
};

/* eslint-disable react/jsx-one-expression-per-line */
/* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */

var visualyHidden = {
  position: "absolute !important",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)",
  display: "inline-block"
};

var DefaultTriggerComponent = function DefaultTriggerComponent(props) {
  var onClick = props.onClick,
      theme = props.theme;
  return /*#__PURE__*/React.createElement("button", {
    className: theme,
    onClick: onClick,
    type: "button"
  }, "Command Palette \xA0", /*#__PURE__*/React.createElement("kbd", {
    className: "ui mini horizontal grey label"
  }, /*#__PURE__*/React.createElement("span", {
    style: visualyHidden
  }, " Keyboard Shortcut "), "\u2318K"));
};

var CustomTriggerComponent = function CustomTriggerComponent(props) {
  var onClick = props.onClick,
      trigger = props.trigger,
      theme = props.theme;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: theme,
    onKeyPress: onClick,
    role: "button",
    tabIndex: 0
  }, trigger);
};

function PaletteTrigger(props) {
  var onClick = props.onClick,
      trigger = props.trigger,
      theme = props.theme;

  if (trigger) {
    return /*#__PURE__*/React.createElement(CustomTriggerComponent, {
      onClick: onClick,
      trigger: trigger,
      theme: theme
    });
  }

  return /*#__PURE__*/React.createElement(DefaultTriggerComponent, {
    onClick: onClick,
    theme: theme
  });
}

PaletteTrigger.defaultProps = {
  theme: "ui button"
};
DefaultTriggerComponent.propTypes = {
  onClick: propTypes.func,
  theme: propTypes.string
};
CustomTriggerComponent.propTypes = {
  onClick: propTypes.func,
  theme: propTypes.string,
  trigger: propTypes.oneOfType([propTypes.string, propTypes.element])
};
PaletteTrigger.propTypes = CustomTriggerComponent.propTypes;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var fuzzysort = createCommonjsModule(function (module) {
(function(root, UMD) {
  if( module.exports) module.exports = UMD();
  else root.fuzzysort = UMD();
})(commonjsGlobal, function UMD() { function fuzzysortNew(instanceOptions) {

  var fuzzysort = {

    single: function(search, target, options) {
      if(!search) return null
      if(!isObj(search)) search = fuzzysort.getPreparedSearch(search);

      if(!target) return null
      if(!isObj(target)) target = fuzzysort.getPrepared(target);

      var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
        : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
        : true;
      var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
      return algorithm(search, target, search[0])
      // var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
      // var result = algorithm(search, target, search[0])
      // if(result === null) return null
      // if(result.score < threshold) return null
      // return result
    },

    go: function(search, targets, options) {
      if(!search) return noResults
      search = fuzzysort.prepareSearch(search);
      var searchLowerCode = search[0];

      var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
      var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
      var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
        : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
        : true;
      var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
      var resultsLen = 0; var limitedCount = 0;
      var targetsLen = targets.length;

      // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

      // options.keys
      if(options && options.keys) {
        var scoreFn = options.scoreFn || defaultScoreFn;
        var keys = options.keys;
        var keysLen = keys.length;
        for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i];
          var objResults = new Array(keysLen);
          for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
            var key = keys[keyI];
            var target = getValue(obj, key);
            if(!target) { objResults[keyI] = null; continue }
            if(!isObj(target)) target = fuzzysort.getPrepared(target);

            objResults[keyI] = algorithm(search, target, searchLowerCode);
          }
          objResults.obj = obj; // before scoreFn so scoreFn can use it
          var score = scoreFn(objResults);
          if(score === null) continue
          if(score < threshold) continue
          objResults.score = score;
          if(resultsLen < limit) { q.add(objResults); ++resultsLen; }
          else {
            ++limitedCount;
            if(score > q.peek().score) q.replaceTop(objResults);
          }
        }

      // options.key
      } else if(options && options.key) {
        var key = options.key;
        for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i];
          var target = getValue(obj, key);
          if(!target) continue
          if(!isObj(target)) target = fuzzysort.getPrepared(target);

          var result = algorithm(search, target, searchLowerCode);
          if(result === null) continue
          if(result.score < threshold) continue

          // have to clone result so duplicate targets from different obj can each reference the correct obj
          result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj}; // hidden

          if(resultsLen < limit) { q.add(result); ++resultsLen; }
          else {
            ++limitedCount;
            if(result.score > q.peek().score) q.replaceTop(result);
          }
        }

      // no keys
      } else {
        for(var i = targetsLen - 1; i >= 0; --i) { var target = targets[i];
          if(!target) continue
          if(!isObj(target)) target = fuzzysort.getPrepared(target);

          var result = algorithm(search, target, searchLowerCode);
          if(result === null) continue
          if(result.score < threshold) continue
          if(resultsLen < limit) { q.add(result); ++resultsLen; }
          else {
            ++limitedCount;
            if(result.score > q.peek().score) q.replaceTop(result);
          }
        }
      }

      if(resultsLen === 0) return noResults
      var results = new Array(resultsLen);
      for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll();
      results.total = resultsLen + limitedCount;
      return results
    },

    goAsync: function(search, targets, options) {
      var canceled = false;
      var p = new Promise(function(resolve, reject) {
        if(!search) return resolve(noResults)
        search = fuzzysort.prepareSearch(search);
        var searchLowerCode = search[0];

        var q = fastpriorityqueue();
        var iCurrent = targets.length - 1;
        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
        var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
        var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
          : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
          : true;
        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
        var resultsLen = 0; var limitedCount = 0;
        function step() {
          if(canceled) return reject('canceled')

          var startMs = Date.now();

          // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

          // options.keys
          if(options && options.keys) {
            var scoreFn = options.scoreFn || defaultScoreFn;
            var keys = options.keys;
            var keysLen = keys.length;
            for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent];
              var objResults = new Array(keysLen);
              for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                var key = keys[keyI];
                var target = getValue(obj, key);
                if(!target) { objResults[keyI] = null; continue }
                if(!isObj(target)) target = fuzzysort.getPrepared(target);

                objResults[keyI] = algorithm(search, target, searchLowerCode);
              }
              objResults.obj = obj; // before scoreFn so scoreFn can use it
              var score = scoreFn(objResults);
              if(score === null) continue
              if(score < threshold) continue
              objResults.score = score;
              if(resultsLen < limit) { q.add(objResults); ++resultsLen; }
              else {
                ++limitedCount;
                if(score > q.peek().score) q.replaceTop(objResults);
              }

              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                if(Date.now() - startMs >= 10/*asyncInterval*/) {
                  isNode?setImmediate(step):setTimeout(step);
                  return
                }
              }
            }

          // options.key
          } else if(options && options.key) {
            var key = options.key;
            for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent];
              var target = getValue(obj, key);
              if(!target) continue
              if(!isObj(target)) target = fuzzysort.getPrepared(target);

              var result = algorithm(search, target, searchLowerCode);
              if(result === null) continue
              if(result.score < threshold) continue

              // have to clone result so duplicate targets from different obj can each reference the correct obj
              result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj}; // hidden

              if(resultsLen < limit) { q.add(result); ++resultsLen; }
              else {
                ++limitedCount;
                if(result.score > q.peek().score) q.replaceTop(result);
              }

              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                if(Date.now() - startMs >= 10/*asyncInterval*/) {
                  isNode?setImmediate(step):setTimeout(step);
                  return
                }
              }
            }

          // no keys
          } else {
            for(; iCurrent >= 0; --iCurrent) { var target = targets[iCurrent];
              if(!target) continue
              if(!isObj(target)) target = fuzzysort.getPrepared(target);

              var result = algorithm(search, target, searchLowerCode);
              if(result === null) continue
              if(result.score < threshold) continue
              if(resultsLen < limit) { q.add(result); ++resultsLen; }
              else {
                ++limitedCount;
                if(result.score > q.peek().score) q.replaceTop(result);
              }

              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
                if(Date.now() - startMs >= 10/*asyncInterval*/) {
                  isNode?setImmediate(step):setTimeout(step);
                  return
                }
              }
            }
          }

          if(resultsLen === 0) return resolve(noResults)
          var results = new Array(resultsLen);
          for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll();
          results.total = resultsLen + limitedCount;
          resolve(results);
        }

        isNode?setImmediate(step):step();
      });
      p.cancel = function() { canceled = true; };
      return p
    },

    highlight: function(result, hOpen, hClose) {
      if(result === null) return null
      if(hOpen === undefined) hOpen = '<b>';
      if(hClose === undefined) hClose = '</b>';
      var highlighted = '';
      var matchesIndex = 0;
      var opened = false;
      var target = result.target;
      var targetLen = target.length;
      var matchesBest = result.indexes;
      for(var i = 0; i < targetLen; ++i) { var char = target[i];
        if(matchesBest[matchesIndex] === i) {
          ++matchesIndex;
          if(!opened) { opened = true;
            highlighted += hOpen;
          }

          if(matchesIndex === matchesBest.length) {
            highlighted += char + hClose + target.substr(i+1);
            break
          }
        } else {
          if(opened) { opened = false;
            highlighted += hClose;
          }
        }
        highlighted += char;
      }

      return highlighted
    },

    prepare: function(target) {
      if(!target) return
      return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:null, score:null, indexes:null, obj:null} // hidden
    },
    prepareSlow: function(target) {
      if(!target) return
      return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:fuzzysort.prepareNextBeginningIndexes(target), score:null, indexes:null, obj:null} // hidden
    },
    prepareSearch: function(search) {
      if(!search) return
      return fuzzysort.prepareLowerCodes(search)
    },



    // Below this point is only internal code
    // Below this point is only internal code
    // Below this point is only internal code
    // Below this point is only internal code



    getPrepared: function(target) {
      if(target.length > 999) return fuzzysort.prepare(target) // don't cache huge targets
      var targetPrepared = preparedCache.get(target);
      if(targetPrepared !== undefined) return targetPrepared
      targetPrepared = fuzzysort.prepare(target);
      preparedCache.set(target, targetPrepared);
      return targetPrepared
    },
    getPreparedSearch: function(search) {
      if(search.length > 999) return fuzzysort.prepareSearch(search) // don't cache huge searches
      var searchPrepared = preparedSearchCache.get(search);
      if(searchPrepared !== undefined) return searchPrepared
      searchPrepared = fuzzysort.prepareSearch(search);
      preparedSearchCache.set(search, searchPrepared);
      return searchPrepared
    },

    algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
      var targetLowerCodes = prepared._targetLowerCodes;
      var searchLen = searchLowerCodes.length;
      var targetLen = targetLowerCodes.length;
      var searchI = 0; // where we at
      var targetI = 0; // where you at
      var typoSimpleI = 0;
      var matchesSimpleLen = 0;

      // very basic fuzzy match; to remove non-matching targets ASAP!
      // walk through target. find sequential matches.
      // if all chars aren't found then exit
      for(;;) {
        var isMatch = searchLowerCode === targetLowerCodes[targetI];
        if(isMatch) {
          matchesSimple[matchesSimpleLen++] = targetI;
          ++searchI; if(searchI === searchLen) break
          searchLowerCode = searchLowerCodes[typoSimpleI===0?searchI : (typoSimpleI===searchI?searchI+1 : (typoSimpleI===searchI-1?searchI-1 : searchI))];
        }

        ++targetI; if(targetI >= targetLen) { // Failed to find searchI
          // Check for typo or exit
          // we go as far as possible before trying to transpose
          // then we transpose backwards until we reach the beginning
          for(;;) {
            if(searchI <= 1) return null // not allowed to transpose first char
            if(typoSimpleI === 0) { // we haven't tried to transpose yet
              --searchI;
              var searchLowerCodeNew = searchLowerCodes[searchI];
              if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
              typoSimpleI = searchI;
            } else {
              if(typoSimpleI === 1) return null // reached the end of the line for transposing
              --typoSimpleI;
              searchI = typoSimpleI;
              searchLowerCode = searchLowerCodes[searchI + 1];
              var searchLowerCodeNew = searchLowerCodes[searchI];
              if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
            }
            matchesSimpleLen = searchI;
            targetI = matchesSimple[matchesSimpleLen - 1] + 1;
            break
          }
        }
      }

      var searchI = 0;
      var typoStrictI = 0;
      var successStrict = false;
      var matchesStrictLen = 0;

      var nextBeginningIndexes = prepared._nextBeginningIndexes;
      if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
      var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1];

      // Our target string successfully matched all characters in sequence!
      // Let's try a more advanced and strict test to improve the score
      // only count it as a match if it's consecutive or a beginning character!
      if(targetI !== targetLen) for(;;) {
        if(targetI >= targetLen) {
          // We failed to find a good spot for this search char, go back to the previous search char and force it forward
          if(searchI <= 0) { // We failed to push chars forward for a better match
            // transpose, starting from the beginning
            ++typoStrictI; if(typoStrictI > searchLen-2) break
            if(searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI+1]) continue // doesn't make sense to transpose a repeat char
            targetI = firstPossibleI;
            continue
          }

          --searchI;
          var lastMatch = matchesStrict[--matchesStrictLen];
          targetI = nextBeginningIndexes[lastMatch];

        } else {
          var isMatch = searchLowerCodes[typoStrictI===0?searchI : (typoStrictI===searchI?searchI+1 : (typoStrictI===searchI-1?searchI-1 : searchI))] === targetLowerCodes[targetI];
          if(isMatch) {
            matchesStrict[matchesStrictLen++] = targetI;
            ++searchI; if(searchI === searchLen) { successStrict = true; break }
            ++targetI;
          } else {
            targetI = nextBeginningIndexes[targetI];
          }
        }
      }

      { // tally up the score & keep track of matches for highlighting later
        if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen; }
        else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen; }
        var score = 0;
        var lastTargetI = -1;
        for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i];
          // score only goes down if they're not consecutive
          if(lastTargetI !== targetI - 1) score -= targetI;
          lastTargetI = targetI;
        }
        if(!successStrict) {
          score *= 1000;
          if(typoSimpleI !== 0) score += -20;/*typoPenalty*/
        } else {
          if(typoStrictI !== 0) score += -20;/*typoPenalty*/
        }
        score -= targetLen - searchLen;
        prepared.score = score;
        prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];

        return prepared
      }
    },

    algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
      var targetLowerCodes = prepared._targetLowerCodes;
      var searchLen = searchLowerCodes.length;
      var targetLen = targetLowerCodes.length;
      var searchI = 0; // where we at
      var targetI = 0; // where you at
      var matchesSimpleLen = 0;

      // very basic fuzzy match; to remove non-matching targets ASAP!
      // walk through target. find sequential matches.
      // if all chars aren't found then exit
      for(;;) {
        var isMatch = searchLowerCode === targetLowerCodes[targetI];
        if(isMatch) {
          matchesSimple[matchesSimpleLen++] = targetI;
          ++searchI; if(searchI === searchLen) break
          searchLowerCode = searchLowerCodes[searchI];
        }
        ++targetI; if(targetI >= targetLen) return null // Failed to find searchI
      }

      var searchI = 0;
      var successStrict = false;
      var matchesStrictLen = 0;

      var nextBeginningIndexes = prepared._nextBeginningIndexes;
      if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
      var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1];

      // Our target string successfully matched all characters in sequence!
      // Let's try a more advanced and strict test to improve the score
      // only count it as a match if it's consecutive or a beginning character!
      if(targetI !== targetLen) for(;;) {
        if(targetI >= targetLen) {
          // We failed to find a good spot for this search char, go back to the previous search char and force it forward
          if(searchI <= 0) break // We failed to push chars forward for a better match

          --searchI;
          var lastMatch = matchesStrict[--matchesStrictLen];
          targetI = nextBeginningIndexes[lastMatch];

        } else {
          var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
          if(isMatch) {
            matchesStrict[matchesStrictLen++] = targetI;
            ++searchI; if(searchI === searchLen) { successStrict = true; break }
            ++targetI;
          } else {
            targetI = nextBeginningIndexes[targetI];
          }
        }
      }

      { // tally up the score & keep track of matches for highlighting later
        if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen; }
        else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen; }
        var score = 0;
        var lastTargetI = -1;
        for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i];
          // score only goes down if they're not consecutive
          if(lastTargetI !== targetI - 1) score -= targetI;
          lastTargetI = targetI;
        }
        if(!successStrict) score *= 1000;
        score -= targetLen - searchLen;
        prepared.score = score;
        prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];

        return prepared
      }
    },

    prepareLowerCodes: function(str) {
      var strLen = str.length;
      var lowerCodes = []; // new Array(strLen)    sparse array is too slow
      var lower = str.toLowerCase();
      for(var i = 0; i < strLen; ++i) lowerCodes[i] = lower.charCodeAt(i);
      return lowerCodes
    },
    prepareBeginningIndexes: function(target) {
      var targetLen = target.length;
      var beginningIndexes = []; var beginningIndexesLen = 0;
      var wasUpper = false;
      var wasAlphanum = false;
      for(var i = 0; i < targetLen; ++i) {
        var targetCode = target.charCodeAt(i);
        var isUpper = targetCode>=65&&targetCode<=90;
        var isAlphanum = isUpper || targetCode>=97&&targetCode<=122 || targetCode>=48&&targetCode<=57;
        var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
        wasUpper = isUpper;
        wasAlphanum = isAlphanum;
        if(isBeginning) beginningIndexes[beginningIndexesLen++] = i;
      }
      return beginningIndexes
    },
    prepareNextBeginningIndexes: function(target) {
      var targetLen = target.length;
      var beginningIndexes = fuzzysort.prepareBeginningIndexes(target);
      var nextBeginningIndexes = []; // new Array(targetLen)     sparse array is too slow
      var lastIsBeginning = beginningIndexes[0];
      var lastIsBeginningI = 0;
      for(var i = 0; i < targetLen; ++i) {
        if(lastIsBeginning > i) {
          nextBeginningIndexes[i] = lastIsBeginning;
        } else {
          lastIsBeginning = beginningIndexes[++lastIsBeginningI];
          nextBeginningIndexes[i] = lastIsBeginning===undefined ? targetLen : lastIsBeginning;
        }
      }
      return nextBeginningIndexes
    },

    cleanup: cleanup,
    new: fuzzysortNew,
  };
  return fuzzysort
} // fuzzysortNew

// This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
var isNode = typeof commonjsRequire !== 'undefined' && typeof window === 'undefined';
// var MAX_INT = Number.MAX_SAFE_INTEGER
// var MIN_INT = Number.MIN_VALUE
var preparedCache = new Map();
var preparedSearchCache = new Map();
var noResults = []; noResults.total = 0;
var matchesSimple = []; var matchesStrict = [];
function cleanup() { preparedCache.clear(); preparedSearchCache.clear(); matchesSimple = []; matchesStrict = []; }
function defaultScoreFn(a) {
  var max = -9007199254740991;
  for (var i = a.length - 1; i >= 0; --i) {
    var result = a[i]; if(result === null) continue
    var score = result.score;
    if(score > max) max = score;
  }
  if(max === -9007199254740991) return null
  return max
}

// prop = 'key'              2.5ms optimized for this case, seems to be about as fast as direct obj[prop]
// prop = 'key1.key2'        10ms
// prop = ['key1', 'key2']   27ms
function getValue(obj, prop) {
  var tmp = obj[prop]; if(tmp !== undefined) return tmp
  var segs = prop;
  if(!Array.isArray(prop)) segs = prop.split('.');
  var len = segs.length;
  var i = -1;
  while (obj && (++i < len)) obj = obj[segs[i]];
  return obj
}

function isObj(x) { return typeof x === 'object' } // faster as a function

// Hacked version of https://github.com/lemire/FastPriorityQueue.js
var fastpriorityqueue=function(){var r=[],o=0,e={};function n(){for(var e=0,n=r[e],c=1;c<o;){var f=c+1;e=c,f<o&&r[f].score<r[c].score&&(e=f),r[e-1>>1]=r[e],c=1+(e<<1);}for(var a=e-1>>1;e>0&&n.score<r[a].score;a=(e=a)-1>>1)r[e]=r[a];r[e]=n;}return e.add=function(e){var n=o;r[o++]=e;for(var c=n-1>>1;n>0&&e.score<r[c].score;c=(n=c)-1>>1)r[n]=r[c];r[n]=e;},e.poll=function(){if(0!==o){var e=r[0];return r[0]=r[--o],n(),e}},e.peek=function(e){if(0!==o)return r[0]},e.replaceTop=function(o){r[0]=o,n();},e};
var q = fastpriorityqueue(); // reuse this, except for async, it needs to make its own

return fuzzysortNew()
}); // UMD

// TODO: (performance) wasm version!?

// TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses

// TODO: (performance) preparedCache is a memory leak

// TODO: (like sublime) backslash === forwardslash

// TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSuggestionHighlights(suggestion) {
  // if there's more than one suggestion, retun an array of
  // highlighted results. ex: ["first *result*", "second *result*"]
  if (Array.isArray(suggestion) && suggestion.length >= 2) {
    return suggestion.map(function (result) {
      return fuzzysort.highlight(result);
    });
  } // otherwise return the single suggestion as a string. ex:
  // "only *result*"


  return fuzzysort.highlight(suggestion[0]);
} // format the output to include a code higlight for innerHTML
// and the command to invoke


function formatSuggestions(filteredSuggestions, value) {
  filteredSuggestions = filteredSuggestions.map(function (suggestion) {
    var opts = {
      name: suggestion.obj.name,
      command: suggestion.obj.command,
      highlight: getSuggestionHighlights(suggestion)
    };
    return _objectSpread(_objectSpread({}, opts), suggestion.obj);
  });
  if (filteredSuggestions.filter(function (i) {
    return i.name === value;
  }).length <= 0) filteredSuggestions.push({
    id: filteredSuggestions.length,
    mode: "INPUT_SEARCH",
    name: value,
    command: function command() {}
  });
  return filteredSuggestions;
} // Teach Autosuggest how to calculate suggestions for any given input value.


var getSuggestions = function getSuggestions(value, allCommands, options) {
  // TODO: preparing fuzzysort results make them much faster
  // however prepare is expensiveand should only be run when
  // the commands change lodash.once get close to this
  // but the implementation needs to work within the react lifecyle
  // lets come back to this later, ex:
  // once(() => {
  //   allCommands.forEach(s => (s.namePrepared = fuzzysort.prepare(s.name)));
  // });
  // If the user specified an autosuggest term
  // search for close matches
  var suggestionResults = fuzzysort.go(value, allCommands, options); // if the user didnt suggest a specific term or there's a search term
  // but no matches were found return all the commands

  if (value.length > 0 && suggestionResults.length <= 0) return [{
    id: 1,
    mode: "INPUT_SEARCH",
    name: value,
    command: function command() {}
  }];else if (!value || !suggestionResults.length) return allCommands; // Otherwise return the search results

  return formatSuggestions(suggestionResults, value);
};

var GIT_COMBO_TO_TEXT_DICT = require("../data/modal/modes/git/default-combo-to-text-dict.json");

var GitSearch = function GitSearch() {
  classCallCheck(this, GitSearch);
};

defineProperty(GitSearch, "getTextForKeyCombinations", function (combo) {
  var item = GIT_COMBO_TO_TEXT_DICT.find(function (item) {
    return item.key === combo;
  });
  if (!item) return "";else return item.value;
});

var QUICK_SEARCH_COMBO_TO_TEXT_DICT = require("../data/modal/modes/quick-search/default-combo-to-text-dict.json");

var QuickSearch = function QuickSearch() {
  classCallCheck(this, QuickSearch);
};

defineProperty(QuickSearch, "getTextForKeyCombinations", function (combo) {
  var item = QUICK_SEARCH_COMBO_TO_TEXT_DICT.find(function (item) {
    return item.key === combo;
  });
  if (!item) return "";else return item.value;
});

var ModalCommandPanelTheme = {
  modal: "kloudi-modal",
  overlay: "kloudi-modal-overlay",
  header: "kloudi-modal-header",
  container: "kloudi-modal-container",
  content: "kloudi-modal-content",
  containerOpen: "kloudi-modal-containerOpen",
  input: "kloudi-modal-input",
  inputOpen: "kloudi-modal-inputOpen",
  inputFocused: "kloudi-modal-inputFocused",
  spinner: "kloudi-modal-spinner",
  suggestionsContainer: "kloudi-modal-suggestionsContainer",
  suggestionsContainerOpen: "kloudi-modal-suggestionsContainerOpen",
  suggestionsList: "kloudi-modal-suggestionsList",
  suggestion: "kloudi-modal-suggestion",
  suggestionFirst: "kloudi-modal-suggestionFirst",
  suggestionHighlighted: "kloudi-modal-suggestionHighlighted",
  trigger: "kloudi-modal-trigger",
  commandPanelInputLogo: "kloudi-modal-input-logo",
  commandPanelInputWrapper: "kloudi-modal-input-wrapper",
  commandPanelInputWrapperFocused: "kloudi-modal-input-wrapper-focussed"
};

// Mostly because function props shouldn't throw errors by default
var noop = function noop() {
  return undefined;
}; // Apply a functions that'll run after the command's function runs
// Monkey patching for the commands
// http://me.dt.in.th/page/JavaScript-override/

function override(object, methodName, callback) {
  var dupe = object;
  dupe[methodName] = callback(object[methodName]);
}
function after(extraBehavior) {
  return function (original) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return function () {
      var returnValue = original.apply(this, args);
      extraBehavior.apply(this, args);
      return returnValue;
    };
  };
}

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap\");\n\n.kloudi-modal-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n\n@media only screen and (min-width: 0px) {\n  .kloudi-modal {\n    width: 360px;\n  }\n}\n\n@media only screen and (min-width: 640px) {\n  .kloudi-modal {\n    width: 640px;\n  }\n}\n\n.kloudi-modal {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  border-bottom: solid 1px #e4e5ec;\n  box-shadow: 2px 2px 8px 4px rgba(69, 73, 91, 0.25);\n\n  overflow: hidden;\n  outline: none;\n  padding: 0px 0px 0px 0px;\n  transform: translate(-50%);\n}\n\n.kloudi-modal-header {\n}\n\n.kloudi-modal-content {\n}\n\n.kloudi-modal-container {\n  font-family: \"Nunito Sans\", -apple-system, system-ui, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.kloudi-modal-containerOpen {\n}\n\n.kloudi-modal-input {\n  width: calc(100% - 40px);\n  height: 58px;\n  padding: 0px 16px;\n  outline: none;\n\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  font-family: \"Nunito Sans\", -apple-system, system-ui, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n\n  border: none;\n  border-radius: 0px;\n  caret-color: black;\n}\n\n.kloudi-modal-input::-moz-placeholder {\n  color: #9b9b9b;\n  font-family: \"Nunito Sans\";\n  font-weight: normal;\n  padding-right: 2px;\n}\n\n.kloudi-modal-input::placeholder {\n  color: #9b9b9b;\n  font-family: \"Nunito Sans\";\n  font-weight: normal;\n  padding-right: 2px;\n}\n\n.kloudi-modal-input::-ms-input-placeholder {\n  color: #9b9b9b;\n  font-family: \"Nunito Sans\";\n  font-weight: normal;\n  padding-right: 2px;\n}\n\n.kloudi-modal-inputOpen {\n}\n\n.kloudi-modal-inputFocused {\n}\n\n.kloudi-modal-suggestionsContainerOpen {\n  overflow: scroll;\n  max-height: 270px;\n}\n\n.kloudi-modal-suggestionsList {\n  list-style: none;\n  padding: 0px 0px 16px 0px;\n  margin: 0px 0px;\n}\n\n.kloudi-modal-suggestion {\n  color: #9b9b9b;\n  border-top: 0px none;\n  padding: 16px 16px;\n  cursor: pointer;\n  border-left: solid 2px #fff;\n}\n\n.kloudi-modal-suggestionFirst {\n}\n\n.kloudi-modal-suggestionHighlighted {\n  color: #4a4a4a;\n  background-color: #f7f7f7;\n  border-left: solid 2px #f06723;\n}\n\n.kloudi-modal-suggestionHighlighted .kloudi-modal-query-item svg {\n  stroke: black;\n}\n\n.kloudi-modal-suggestionHighlighted .kloudi-modal-query-shortcut kbd {\n  color: black;\n  background-color: rgba(61, 61, 61, 0.25);\n}\n\n.kloudi-modal-spinner {\n  border-top: 0.4em solid rgba(240, 103, 35, 0.2);\n  border-right: 0.4em solid rgba(240, 103, 35, 0.2);\n  border-bottom: 0.4em solid rgba(240, 103, 35, 0.2);\n  border-left: 0.4em solid#f06723;\n}\n\n.kloudi-modal-trigger {\n  display: none;\n}\n\n.kloudi-modal-input-logo {\n  width: 24px;\n  height: 24px;\n  margin: auto 0px auto 24px;\n  content: url(\"../../images/search.svg\");\n}\n\n.kloudi-modal-input-wrapper {\n  display: flex;\n  flex-direction: row;\n  border: none;\n  border-bottom: solid 1px #e4e5ec;\n}\n";
styleInject(css_248z$1);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var allSuggestions = []; // When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.name;
};

var Header = function Header(props) {
  var theme = props.theme,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: theme.header
  }, children);
};

Header.propTypes = {
  theme: propTypes.object,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
};

var CommandPalette = /*#__PURE__*/function (_React$Component) {
  inherits(CommandPalette, _React$Component);

  var _super = _createSuper(CommandPalette);

  function CommandPalette(props) {
    var _this;

    classCallCheck(this, CommandPalette);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        defaultInputValue = _this$props.defaultInputValue,
        mode = _this$props.mode; // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.

    _this.state = {
      isLoading: false,
      showModal: false,
      value: defaultInputValue,
      suggestions: allSuggestions,
      mode: mode
    };
    _this.onChange = _this.onChange.bind(assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(assertThisInitialized(_this)); // eslint-disable-next-line prettier/prettier

    _this.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(assertThisInitialized(_this));
    _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(assertThisInitialized(_this));
    _this.onSuggestionHighlighted = _this.onSuggestionHighlighted.bind(assertThisInitialized(_this));
    _this.onSuggestionSelected = _this.onSuggestionSelected.bind(assertThisInitialized(_this));
    _this.afterOpenModal = _this.afterOpenModal.bind(assertThisInitialized(_this));
    _this.handleOpenModal = _this.handleOpenModal.bind(assertThisInitialized(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind(assertThisInitialized(_this));
    _this.commandTemplate = _this.commandTemplate.bind(assertThisInitialized(_this));
    _this.renderModalCommandPalette = _this.renderModalCommandPalette.bind(assertThisInitialized(_this));
    _this.renderInlineCommandPalette = _this.renderInlineCommandPalette.bind(assertThisInitialized(_this));
    _this.fetchData = _this.fetchData.bind(assertThisInitialized(_this));
    _this.commandPaletteInput = /*#__PURE__*/React.createRef();
    _this.focusInput = _this.focusInput.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(CommandPalette, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          hotKeys = _this$props2.hotKeys,
          open = _this$props2.open,
          display = _this$props2.display;
      this.setState({
        suggestions: this.fetchData()
      }); // Use hot key to open command palette

      mousetrap.bind(hotKeys, function (event, combo) {
        _this2.handleOpenModal(combo); // prevent default which opens Chrome dev tools command palatte


        return false;
      });
      if (open) return this.handleOpenModal(); // because there's no modal when using inline the input should be focused

      if (display === "inline") return this.focusInput();
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var commands = this.props.commands;

      if (!fastDeepEqual(prevProps.commands, commands)) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          suggestions: this.fetchData()
        });
      }

      if (!fastDeepEqual(prevState.mode, this.state.mode)) {
        var onCommandPanelModeChanged = this.props.onCommandPanelModeChanged;
        onCommandPanelModeChanged(this.state.mode);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event, _ref) {
      var newValue = _ref.newValue;
      var onChange = this.props.onChange;
      this.setState({
        value: newValue
      });
      return onChange(newValue, this.getInputOnTextTyped(event, newValue));
    }
  }, {
    key: "onSelect",
    value: function onSelect() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var onSelect = this.props.onSelect;

      if (suggestion && suggestion.mode === "MODE") {
        var mode = suggestion.name.split(" Mode")[0].replace(" ", "_").toUpperCase();
        this.setState({
          mode: mode,
          value: ""
        });
      } else return onSelect(suggestion);
    }
  }, {
    key: "onSuggestionHighlighted",
    value: function onSuggestionHighlighted(_ref2) {
      var suggestion = _ref2.suggestion;
      var onHighlight = this.props.onHighlight;
      onHighlight(suggestion);
    }
  }, {
    key: "onSuggestionSelected",
    value: function onSuggestionSelected(event, _ref3) {
      var _this3 = this;

      var suggestion = _ref3.suggestion;

      if (typeof suggestion.command === "function") {
        // after the command executes display a spinner
        override(suggestion, "command", after(function () {
          // fire onSelect event
          _this3.onSelect(suggestion); // close the command palette if prop is set


          var _this3$props = _this3.props,
              closeOnSelect = _this3$props.closeOnSelect,
              display = _this3$props.display;

          if (closeOnSelect && display === "modal") {
            _this3.handleCloseModal();
          } else {
            // otherwise show the loading spinner
            _this3.setState({
              isLoading: true
            });
          }
        }));
        return suggestion.command();
      }

      throw new Error("command must be a function");
    } // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.

  }, {
    key: "onSuggestionsFetchRequested",
    value: function onSuggestionsFetchRequested(_ref4) {
      var value = _ref4.value;
      var options = this.props.options;
      this.setState({
        suggestions: getSuggestions(value, this.allCommands, options)
      });
    }
  }, {
    key: "onSuggestionsClearRequested",
    value: function onSuggestionsClearRequested() {
      // when using the onSuggestionsClearRequested property, it overrides
      // alwaysRenderSuggestions which I think is counter intuitive, as always should mean
      // always, see: https://github.com/moroshko/react-autosuggest/issues/521
      // once this issue is resolved the suggestions should return an empty array, ex:
      // this.setState({
      //   suggestions: []
      // });
      return true;
    } // returns user typed queries only
    // wont return selections or keyboard navigation
    // just input

  }, {
    key: "getInputOnTextTyped",
    value: function getInputOnTextTyped(event, newValue) {
      var key = event.key,
          type = event.type;

      if (key !== "ArrowUp" && key !== "ArrowDown" && key !== "Enter" && type !== "click") {
        return newValue;
      }

      return null;
    }
  }, {
    key: "afterOpenModal",
    value: function afterOpenModal() {
      var onAfterOpen = this.props.onAfterOpen;
      this.focusInput();
      return onAfterOpen();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this$props3 = this.props,
          commands = _this$props3.commands,
          maxDisplayed = _this$props3.maxDisplayed;

      if (maxDisplayed > 500) {
        throw new Error("Display is limited to a maximum of 500 items to prevent performance issues");
      }

      this.allCommands = commands;
      return this.allCommands;
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      var _this4 = this;

      this.commandPaletteInput.input.focus(); // FIXME: apply "esc" on the modal instead of input
      // so that pressing esc on loading spinner works too

      var hotKeys = this.props.hotKeys;
      var mode = this.state.mode;

      if (["QUICK_SEARCH", "GIT"].indexOf(mode) >= 0) {
        mousetrap(this.commandPaletteInput.input).bind(["esc"].concat(hotKeys), function (event, combo) {
          var keys = "",
              text = "";

          if (mode === "GIT") {
            keys = ["esc", "command+alt+g", "control+alt+g"];
            text = GitSearch.getTextForKeyCombinations(combo);
          } else if (mode === "QUICK_SEARCH") {
            keys = ["esc", "command+alt+k", "control+alt+k"];
            text = QuickSearch.getTextForKeyCombinations(combo);
          } else keys = ["esc"];

          if (keys.indexOf(combo) >= 0 && _this4.state.value.length <= 0) {
            _this4.handleCloseModal();
          } else if (keys.indexOf(combo) >= 0 && _this4.state.value.length > 0) {
            _this4.setState({
              value: ""
            });

            _this4.onSuggestionsFetchRequested({
              value: ""
            });
          } else {
            _this4.setState({
              value: text
            });

            _this4.onSuggestionsFetchRequested({
              value: text
            });
          }

          return false;
        });
      } else {
        mousetrap(this.commandPaletteInput.input).bind(["esc"].concat(hotKeys), function (event, combo) {
          if (["esc", "command+k", "control+k"].indexOf(combo) >= 0 && _this4.state.value.length > 0) {
            _this4.setState({
              value: ""
            });

            _this4.onSuggestionsFetchRequested({
              value: ""
            });
          } else if (["command+alt+k", "control+alt+k"].indexOf(combo) >= 0) {
            _this4.setState({
              value: "",
              mode: "QUICK_SEARCH"
            });

            _this4.focusInput();
          } else if (["command+alt+g", "control+alt+g"].indexOf(combo) >= 0) {
            _this4.setState({
              value: "",
              mode: "GIT"
            });

            _this4.focusInput();
          } else _this4.handleCloseModal();

          return false;
        });
      }
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      var _this$props4 = this.props,
          resetInputOnClose = _this$props4.resetInputOnClose,
          defaultInputValue = _this$props4.defaultInputValue,
          onRequestClose = _this$props4.onRequestClose;
      var value = this.state.value;
      this.setState({
        showModal: false,
        isLoading: false,
        value: resetInputOnClose ? defaultInputValue : value,
        mode: "SEARCH" // When we close we undo the mode in which the Command Panel was started

      });
      return onRequestClose();
    }
  }, {
    key: "handleOpenModal",
    value: function handleOpenModal(combo) {
      var mode = this.getCommandPanelMode(combo);
      this.setState({
        showModal: true,
        suggestions: allSuggestions,
        mode: mode
      });
    }
  }, {
    key: "getCommandPanelMode",
    value: function getCommandPanelMode(combo) {
      if (!combo) return "SEARCH";else {
        switch (combo) {
          case "command+alt+k":
          case "control+alt+k":
            return "QUICK_SEARCH";

          case "command+alt+g":
          case "control+alt+g":
            return "GIT";

          default:
            return "SEARCH";
        }
      }
    } // Autosuggest will pass through all these props to the input element.

  }, {
    key: "defaultInputProps",
    value: function defaultInputProps(value) {
      var placeholder = this.props.placeholder;
      return {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      };
    }
  }, {
    key: "commandTemplate",
    value: function commandTemplate(suggestion) {
      return /*#__PURE__*/React.createElement(RenderCommand, _extends_1({}, this.props, {
        suggestion: suggestion
      }));
    } // eslint-disable-next-line react/sort-comp

  }, {
    key: "renderAutoSuggest",
    value: function renderAutoSuggest() {
      var _this5 = this;

      var _this$state = this.state,
          suggestions = _this$state.suggestions,
          value = _this$state.value,
          isLoading = _this$state.isLoading;
      var theme = this.props.theme;
      var _this$props5 = this.props,
          maxDisplayed = _this$props5.maxDisplayed,
          spinner = _this$props5.spinner,
          showSpinnerOnSelect = _this$props5.showSpinnerOnSelect,
          display = _this$props5.display,
          header = _this$props5.header,
          renderSuggestionsContainer = _this$props5.renderSuggestionsContainer,
          highlightFirstSuggestion = _this$props5.highlightFirstSuggestion,
          alwaysRenderCommands = _this$props5.alwaysRenderCommands;

      if (isLoading && showSpinnerOnSelect) {
        return /*#__PURE__*/React.createElement(PaletteSpinner, {
          spinner: spinner,
          display: display,
          theme: theme.spinner
        });
      }

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        theme: theme
      }, header), /*#__PURE__*/React.createElement(dist$2, {
        ref: function ref(input) {
          _this5.commandPaletteInput = input;
        },
        alwaysRenderSuggestions: alwaysRenderCommands,
        suggestions: suggestions.slice(0, maxDisplayed),
        highlightFirstSuggestion: highlightFirstSuggestion,
        onSuggestionHighlighted: this.onSuggestionHighlighted,
        onSuggestionSelected: this.onSuggestionSelected,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestionsContainer: renderSuggestionsContainer,
        renderSuggestion: this.commandTemplate,
        inputProps: this.defaultInputProps(value),
        theme: theme
      }));
    }
  }, {
    key: "renderModalCommandPalette",
    value: function renderModalCommandPalette() {
      var showModal = this.state.showModal;
      var _this$props6 = this.props,
          trigger = _this$props6.trigger,
          theme = _this$props6.theme,
          reactModalParentSelector = _this$props6.reactModalParentSelector,
          shouldReturnFocusAfterClose = _this$props6.shouldReturnFocusAfterClose;
      return /*#__PURE__*/React.createElement("div", {
        className: "react-command-palette"
      }, /*#__PURE__*/React.createElement(PaletteTrigger, {
        onClick: this.handleOpenModal,
        trigger: trigger,
        theme: theme.trigger
      }), /*#__PURE__*/React.createElement(ReactModal, {
        appElement: document.body,
        isOpen: showModal,
        parentSelector: function parentSelector() {
          return document.querySelector(reactModalParentSelector);
        },
        onAfterOpen: this.afterOpenModal,
        onRequestClose: this.handleCloseModal,
        shouldReturnFocusAfterClose: shouldReturnFocusAfterClose,
        className: theme.modal,
        overlayClassName: theme.overlay,
        contentLabel: "Command Palette",
        closeTimeoutMS: 1
        /* otherwise the modal is not closed when
        suggestion is selected by pressing Enter */

      }, this.renderAutoSuggest()));
    }
  }, {
    key: "renderInlineCommandPalette",
    value: function renderInlineCommandPalette() {
      return /*#__PURE__*/React.createElement("div", {
        className: "react-command-palette"
      }, this.renderAutoSuggest());
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var commandPalette;

      if (display === "inline") {
        commandPalette = this.renderInlineCommandPalette();
      } else {
        commandPalette = this.renderModalCommandPalette();
      }

      return commandPalette;
    }
  }]);

  return CommandPalette;
}(React.Component);

CommandPalette.defaultProps = {
  alwaysRenderCommands: true,
  placeholder: "Type a command",
  hotKeys: "command+shift+p",
  defaultInputValue: "",
  header: null,
  highlightFirstSuggestion: true,
  maxDisplayed: 7,
  options: fuzzysortOptions,
  onChange: noop,
  onHighlight: noop,
  onSelect: noop,
  onAfterOpen: noop,
  onRequestClose: noop,
  closeOnSelect: false,
  resetInputOnClose: false,
  display: "modal",
  reactModalParentSelector: "body",
  renderCommand: null,
  shouldReturnFocusAfterClose: true,
  showSpinnerOnSelect: true,
  theme: ModalCommandPanelTheme,
  mode: "SEARCH"
};
CommandPalette.propTypes = {
  /** alwaysRenderCommands a boolean, Set it to true if you'd like to render suggestions
   * even when the input is not focused. */
  alwaysRenderCommands: propTypes.bool,

  /** commands appears in the command palette. For each command in the array the object
   * must have a _name_ and a _command_. The _name_ is a user friendly string that will
   * be display to the user. The command is a function that will be executed when the
   * user clicks or presses the enter key. Commands may also include custom properties
   * this" will be bound to the command */
  commands: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    command: propTypes.func.isRequired
  })).isRequired,

  /** maxDisplayed a number between 1 and 500 that determines the maximum number of
   * commands that will be rendered on screen. Defaults to 7 */
  maxDisplayed: function maxDisplayed(props, propName, componentName) {
    var maxDisplayed = props.maxDisplayed;

    if (maxDisplayed > 500) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, " Cannot be greater than\n         500."));
    }

    return null;
  },

  /** placeholder a string that contains a short text description which is displayed
   * inside the the input field until the user provides input. Defaults to "Type a
   * command" */
  placeholder: propTypes.string,

  /** hotKeys a string or array of strings that contain a keyboard shortcut for
   * opening/closing the palette.
   * Defaults to "command+shift+p" */
  hotKeys: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string]),

  /** defaultInputValue a string that determines the value of the text in the input field.
   * By default the defaultInputValue is an empty string. */
  defaultInputValue: propTypes.string,

  /** When highlightFirstSuggestion={true}, Autosuggest will automatically highlight the
   *  first suggestion. Defaults to false. */
  highlightFirstSuggestion: propTypes.bool,

  /** options controls how fuzzy search is configured see [fuzzysort options]
   * (https://github.com/farzher/fuzzysort#options) */
  options: propTypes.object,

  /** open a boolean, when set to true it forces the command palette to be displayed.
   * Defaults to "false". */
  open: propTypes.bool,

  /** onHighlight a function that's called when the highlighted suggestion changes. */
  onHighlight: propTypes.func,

  /** onSelect a function that's called when the selected suggestion changes, given the
   * user selects an item or the user clears the selection. It's called with the item that
   * was selected or null */
  onSelect: propTypes.func,

  /** onChange a function that's called when the input value changes. */
  onChange: propTypes.func,

  /** onAfterOpen a function that fires after the command palette modal is opened */
  onAfterOpen: propTypes.func,

  /** onRequestClose a function that fires after the command palette modal is closed */
  onRequestClose: propTypes.func,

  /** display one of "modal" or "inline", when set to "modal" the command palette is
   * rendered centered inside a modal. When set to "inline", it is render inline with
   * other page content. Defaults to "modal". */
  display: propTypes.oneOf(["modal", "inline"]),

  /** header a string or a React.ComponentType which provides a helpful description for
   * the usage of the command palette. The component is displayed at the top of the
   * command palette. header are not displayed by default. see: examples
   * sampleInstruction.js for reference */
  header: propTypes.oneOfType([propTypes.string, propTypes.element, propTypes.func]),

  /** trigger a string or a React.ComponentType that opens the command palette when
   * clicked. If a custom trigger is not set, then by default a button will be used. If a
   * custom component or string is provided then it will automatically be wrapped inside
   * an accessible div which will allow it be keyboard accessible, clickable and focusable
   * for assistive technologies. */
  trigger: propTypes.oneOfType([propTypes.string, propTypes.element]),

  /** spinner a string or a React.ComponentType that is displayed when the user selects
   * an item. If a custom spinner is not set then the default spinner will be used. If
   * custom component or string is provided then it will automatically be wrapped inside
   * a div with a role="status" attribute. If a component is provided then it will be be
   * wrapped in a div that also contains a sibling node with a div contain "Loading..."
   * visible only to screen readers. */
  spinner: propTypes.oneOfType([propTypes.string, propTypes.element]),

  /** showSpinnerOnSelect a boolean which displays a loading indicator immediately after
   * a command has been selected. When true the spinner is enabled when false the spinner
   * is disabled. */
  showSpinnerOnSelect: propTypes.bool,

  /**
   * shouldReturnFocusAfterClose a boolean indicate if the modal should restore focus to
   * the element that had focus prior to its display. */
  shouldReturnFocusAfterClose: propTypes.bool,

  /** closeOnSelect a boolean, when true selecting an item will immediately close the
   * command-palette  */
  closeOnSelect: propTypes.bool,

  /** resetInputOnClose a boolean which indicates whether to reset the user's query
   * to `defaultInputValue` when the command palette closes. */
  resetInputOnClose: propTypes.bool,

  /** a selector compatible with querySelector. By default, the modal portal will be
   * appended to the document's body. You can choose a different parent element by
   * selector. If you do this, please ensure that your app element is set correctly. The
   * app element should not be a parent of the modal, to prevent modal content from being
   * hidden to screenreaders while it is open. */
  reactModalParentSelector: propTypes.string,

  /** a React.func that defines the layout and contents of the commands in the
   * command list. For complete documentation see the storybook notes. */
  renderCommand: propTypes.func,

  /** Styles and object that contains a list of key value pairs where the keys map the
   * command palette components to their CSS class names. */
  theme: propTypes.object,

  /** mode one of "SEARCH" or "QUICK_SEARCH" or "GIT", when set to any of the
   * mode the command palette is in the mode set by this prop. Defaults to
   * "SEARCH". */
  mode: propTypes.oneOf(["SEARCH", "QUICK_SEARCH", "GIT"])
};

const img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='1024px' height='1024px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3e %3ctitle%3eGroup%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cdefs%3e %3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' id='linearGradient-1'%3e %3cstop stop-color='%23CC2B5E' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='%23F06723' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' id='linearGradient-2'%3e %3cstop stop-color='%23CC2B5E' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='%23F06723' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3c/defs%3e %3cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='Logo-Solid'%3e %3cg id='Group'%3e %3ccircle id='Oval' fill='white' cx='512' cy='512' r='512'%3e%3c/circle%3e %3cg id='logo' transform='translate(192.000000%2c 200.000000)'%3e %3cpath d='M447.775542%2c537.918888 C447.760812%2c537.804439 447.747169%2c537.689765 447.734703%2c537.574781 C447.69908%2c537.534741 447.664208%2c537.49415 447.630101%2c537.453027 C447.676975%2c537.608737 447.725458%2c537.764031 447.775542%2c537.918888 Z M497.267078%2c320.413715 C497.247952%2c320.395837 497.228827%2c320.377959 497.209704%2c320.360081 C496.972679%2c319.810531 496.745134%2c319.260981 496.536552%2c318.693703 C496.298671%2c318.015607 496.099292%2c317.326231 495.939248%2c316.628459 C495.58845%2c315.201401 495.275577%2c313.774344 495.048032%2c312.320695 C494.924779%2c311.319096 494.83945%2c310.308633 494.773083%2c309.29817 C494.773083%2c309.182942 494.773083%2c309.076577 494.773083%2c308.970213 C494.829969%2c308.323162 494.896336%2c307.684975 494.972184%2c307.046788 L494.972184%2c306.922696 C495.161805%2c305.983142 495.389349%2c305.025862 495.635855%2c304.139491 C495.711704%2c303.829261 495.787552%2c303.510167 495.872881%2c303.253119 C495.95821%2c302.996072 496.043539%2c302.739024 496.138349%2c302.473113 C496.42278%2c301.657652 496.70721%2c300.833326 496.98216%2c300.009001 L497.048527%2c299.849455 C497.336613%2c299.238655 497.64703%2c298.635683 497.970691%2c298.039125 L497.777778%2c297.828549 C498.070307%2c297.296839 498.362837%2c296.76513 498.664803%2c296.242282 C499.220027%2c295.311762 499.851002%2c294.422932 500.552092%2c293.583735 C501.089969%2c292.972269 501.646719%2c292.334217 502.165723%2c291.758199 C502.684728%2c291.18218 503.203732%2c290.579576 503.751046%2c289.985834 L503.769918%2c289.835183 C504.535032%2c288.994265 505.347739%2c288.19259 506.20452%2c287.433628 L506.546097%2c287.77492 C506.932743%2c287.455344 507.329404%2c287.145626 507.735637%2c286.846165 L507.754898%2c286.811062 L508.294201%2c286.442478 L508.40209%2c286.521676 C508.809607%2c286.239546 509.222301%2c285.961751 509.638255%2c285.690099 C510.456062%2c285.137552 511.303095%2c284.624431 512.176089%2c284.152713 L512.751583%2c283.868341 C513.798793%2c283.503989 514.846004%2c283.175184 515.921517%2c282.890812 C517.447993%2c282.455429 519.001255%2c282.108206 520.572641%2c281.851077 C521.214176%2c281.762211 521.836841%2c281.646685 522.459507%2c281.540045 L522.55385%2c281.540045 C522.901495%2c281.615628 523.26285%2c281.615628 523.610495%2c281.540045 C524.176555%2c281.495612 524.752049%2c281.495612 525.318108%2c281.495612 L526.440793%2c281.486726 L527.384226%2c281.486726 C528.205573%2c281.523862 529.022344%2c281.591172 529.834538%2c281.673647 L529.634718%2c281.486726 L531.272703%2c281.66406 C532.044627%2c281.77046 532.825965%2c281.903461 533.597889%2c282.045328 C534.434286%2c282.181258 535.256424%2c282.385975 536.054866%2c282.657131 C536.718842%2c282.917312 537.366325%2c283.213361 537.99409%2c283.543801 C538.332983%2c283.712269 538.65305%2c283.89847 538.935461%2c284.066937 C539.217872%2c284.235404 539.528524%2c284.359538 539.829763%2c284.510272 L540.629928%2c284.882674 L563.87237%2c306.579503 L578.680131%2c320.349496 C593.986819%2c334.536225 607.975587%2c347.63235 621.456016%2c360.249672 L622.933968%2c361.553077 L624.374265%2c362.909683 L625.93694%2c364.381556 L626.096973%2c364.53229 C626.379385%2c364.807158 626.652382%2c365.064293 626.906552%2c365.348027 C627.129702%2c365.550421 627.314374%2c365.787341 627.452547%2c366.048497 C628.328022%2c366.837634 629.156428%2c367.617904 630.276659%2c368.708509 C631.326979%2c369.791822 632.301766%2c370.938022 633.194908%2c372.139924 C634.174218%2c373.434614 635.052019%2c374.794825 635.821333%2c376.209742 C637.454009%2c379.142188 638.630222%2c382.280648 639.313818%2c385.528649 C640.003044%2c388.967575 640.174174%2c392.480841 639.822158%2c395.964762 C639.10045%2c402.656963 636.852671%2c409.123397 633.232563%2c414.921778 C631.598645%2c417.508427 629.707399%2c419.942941 627.584339%2c422.192477 L627.396065%2c422.449611 C627.305322%2c422.686402 627.191889%2c422.914923 627.057171%2c423.132348 C626.978406%2c423.276187 626.89038%2c423.415359 626.793588%2c423.549083 C626.661796%2c423.753017 626.511176%2c423.948085 626.360557%2c424.143152 L626.219352%2c424.320486 C625.965181%2c424.657421 625.68277%2c424.976623 625.409773%2c425.295824 L625.136775%2c425.606159 C624.994877%2c425.992482 624.736429%2c426.331436 624.393092%2c426.581496 L624.327196%2c426.65243 L624.204818%2c426.820897 L624.035371%2c427.078032 C623.922407%2c427.237633 623.847097%2c427.3529 623.762374%2c427.4593 C623.666934%2c427.609825 623.549706%2c427.747099 623.414067%2c427.867169 C623.264814%2c428.006095 623.089184%2c428.11738 622.896313%2c428.195237 C622.602024%2c428.522561 622.287699%2c428.833424 621.954942%2c429.126241 L621.456016%2c429.605043 C621.117122%2c429.933111 620.787643%2c430.270046 620.458163%2c430.606981 L620.345198%2c430.731115 L619.46031%2c431.617785 C618.217701%2c432.84139 616.852713%2c434.127063 615.751309%2c435.164467 L615.515967%2c435.395002 L615.327693%2c435.572336 L615.064109%2c435.811737 L613.906223%2c436.911208 L608.860476%2c441.654896 L607.824968%2c442.630233 L601.564853%2c448.544326 L601.470716%2c448.632993 L598.552467%2c451.399405 L592.659486%2c456.98543 L589.750651%2c459.742975 L576.948009%2c471.890362 C566.423485%2c481.847672 555.127037%2c492.354719 546.890043%2c500.024419 L546.55115%2c500.34362 L545.609779%2c501.230291 C539.10177%2c507.277384 532.612588%2c513.333344 526.142233%2c519.398171 L522.37675%2c522.944853 C518.422993%2c526.662958 514.453547%2c530.375152 510.468411%2c534.081435 L506.702928%2c537.628117 L502.937445%2c541.1748 L499.040171%2c544.774682 L497.157429%2c546.47709 L496.856191%2c546.751957 C496.293387%2c547.309196 495.661235%2c547.800417 494.973449%2c548.214964 C494.835062%2c548.299205 494.68654%2c548.367663 494.531005%2c548.418898 L494.333317%2c548.622832 L490.944383%2c551.841446 L489.005159%2c553.676855 L488.911022%2c553.765522 C488.732162%2c553.978323 488.562715%2c554.14679 488.393268%2c554.315257 L488.082616%2c554.625592 C487.856687%2c554.856126 487.602517%2c555.095527 487.404829%2c555.255128 C487.207141%2c555.414729 487.028281%2c555.538863 486.840006%2c555.671863 C486.425136%2c555.907728 485.950188%2c556.033354 485.465605%2c556.035398 C485.236678%2c556.034652 485.014434%2c556.00729 484.802174%2c555.956429 C483.652392%2c556.794404 482.411189%2c557.516446 481.099154%2c558.110446 L480.567045%2c558.329017 C478.903746%2c558.992569 477.155649%2c559.448806 475.367553%2c559.686736 C475.073067%2c559.733223 474.777352%2c559.774189 474.480604%2c559.80959 C474.267399%2c559.847021 474.052413%2c559.875185 473.836337%2c559.89398 C473.616673%2c559.918724 473.395828%2c559.933003 473.174654%2c559.936765 C472.541239%2c559.981867 471.906094%2c560.002848 471.270981%2c559.99969 C470.647604%2c560.002826 470.024124%2c559.982161 469.402097%2c559.937694 C467.266883%2c559.765311 465.166216%2c559.3242 463.156821%2c558.626272 C459.540251%2c557.353127 456.267101%2c555.3503 453.569529%2c552.759846 C452.123668%2c551.359743 450.814616%2c549.84117 449.658063%2c548.222326 C448.609916%2c546.762304 447.674029%2c545.234281 446.85749%2c543.649836 C446.624109%2c543.203953 446.409399%2c542.775555 446.213359%2c542.303443 C446.213359%2c542.4171 446.316047%2c542.539499 446.372058%2c542.653155 C444.793952%2c539.505453 443.890059%2c536.098538 443.711514%2c532.62515 L443.711514%2c532.459037 C443.679688%2c531.682898 443.689523%2c530.906134 443.740863%2c530.131674 C443.632348%2c529.152023 443.709529%2c528.159864 443.971103%2c527.20181 C444.095531%2c526.730948 444.253173%2c526.268404 444.442981%2c525.817249 C444.584544%2c525.444483 444.726107%2c525.071717 444.886546%2c524.707826 L444.971484%2c524.228555 C445.234627%2c523.14154 445.64705%2c522.091345 446.198366%2c521.104418 C446.641931%2c520.216879 447.142122%2c519.32934 447.65175%2c518.495054 C448.119859%2c517.643326 448.662835%2c516.829877 449.27501%2c516.063197 C449.756325%2c515.450795 450.218765%2c514.847269 450.775581%2c514.28812 C453.37472%2c510.58307 456.435308%2c507.183365 459.89226%2c504.161301 L460.373576%2c503.761909 C460.751078%2c503.362516 461.138018%2c502.963124 461.543833%2c502.581482 C462.304353%2c501.866264 463.091144%2c501.170811 463.888525%2c500.48775 C464.070768%2c500.292823 464.266017%2c500.108645 464.47317%2c499.936348 L464.813741%2c499.626498 L467.453165%2c497.1654 L473.129345%2c491.853679 L473.29963%2c491.703181 L484.33034%2c481.416148 L484.415483%2c481.345325 L487.253573%2c478.689464 L487.310334%2c478.636347 L487.423858%2c478.538966 C494.071295%2c472.377369 500.693505%2c466.215773 507.290488%2c460.054177 L516.19263%2c451.635099 L520.374082%2c447.730984 L523.912235%2c444.428864 L530.827714%2c437.96627 C534.687516%2c434.38381 538.550472%2c430.798398 542.416581%2c427.210035 L543.570738%2c426.129986 L545.027624%2c424.793202 C548.017079%2c422.031108 550.990766%2c419.269013 553.948687%2c416.506918 C557.15629%2c413.533322 560.355345%2c410.543726 563.54585%2c407.538129 C563.728175%2c407.191148 563.905724%2c406.841922 564.078449%2c406.490537 C564.626646%2c405.472825 565.203198%2c404.472813 565.751395%2c403.4551 C565.885636%2c403.223789 566.024595%2c402.995042 566.168184%2c402.768981 C566.229784%2c402.582299 566.29276%2c402.393641 566.3606%2c402.209536 C566.729083%2c401.132926 566.995009%2c400.027907 567.155265%2c398.907416 C567.316091%2c397.597191 567.429614%2c396.402054 567.429614%2c395.242328 C567.429614%2c394.604922 567.429614%2c393.949809 567.429614%2c393.30355 L567.429614%2c393.232727 L567.278249%2c392.683849 C567.107964%2c392.108413 566.899837%2c391.550682 566.691711%2c391.01951 L566.625489%2c390.869011 L566.464664%2c390.435221 C566.313299%2c390.027989 566.152474%2c389.62961 565.991649%2c389.222378 C565.401858%2c388.022572 564.675522%2c386.885784 563.82524%2c385.831729 L563.636034%2c385.601555 C563.371146%2c385.291704 563.134638%2c384.990707 562.841369%2c384.672004 C562.548099%2c384.3533 562.226449%2c384.04345 561.961561%2c383.786717 L561.848037%2c383.680482 L561.677752%2c383.529984 C561.41917%2c383.282103 561.154282%2c383.043076 560.883087%2c382.812901 C560.483142%2c382.482772 560.101099%2c382.134123 559.73839%2c381.768263 L559.539724%2c381.5735 L559.284296%2c381.334472 L559.151852%2c381.210532 L559.028868%2c381.086592 L558.972106%2c381.033475 L558.905884%2c380.980357 L556.843539%2c379.032726 L551.999865%2c374.438088 L548.111682%2c370.755295 L545.188449%2c367.975494 L541.347567%2c364.354671 L536.617417%2c359.928237 C531.313343%2c354.947023 526.018728%2c349.959907 520.733574%2c344.966889 C515.328589%2c339.826324 509.929911%2c334.709366 504.53754%2c329.616016 L502.64548%2c327.845442 C501.850815%2c327.092948 501.05615%2c326.349308 500.270945%2c325.596814 C499.523581%2c324.525617 498.83298%2c323.410155 498.123457%2c322.3124 C497.88695%2c321.763522 497.640982%2c321.29432 497.366633%2c320.64806 C497.333426%2c320.569836 497.300218%2c320.491742 497.267078%2c320.413715 Z M533.892995%2c285.470127 C534.206876%2c285.842047 534.52855%2c286.217916 534.809043%2c286.605421 C535.583882%2c287.235439 536.357306%2c287.865457 537.128765%2c288.497025 L533.892995%2c285.470127 Z M629.218616%2c377.852599 C629.231599%2c377.923834 629.244096%2c377.995156 629.256104%2c378.066563 C629.39527%2c378.265815 629.532793%2c378.466614 629.668433%2c378.668503 C629.522647%2c378.394453 629.372691%2c378.122457 629.218616%2c377.852599 Z M446.749751%2c532.912449 C446.799891%2c532.775388 446.85838%2c532.640775 446.925058%2c532.509292 C446.863263%2c532.53763 446.800372%2c532.562876 446.736629%2c532.585041 C446.73809%2c532.694111 446.742716%2c532.803208 446.749751%2c532.912449 Z M455.600457%2c99.1150442 L457.630937%2c99.150563 C458.735897%2c99.150563 459.831412%2c99.2038411 460.775821%2c99.2038411 L462.929075%2c99.3103973 L517.799274%2c99.3103973 C517.949105%2c99.3049561 518.097203%2c99.3420888 518.224258%2c99.4169535 C519.272553%2c99.3370364 520.320847%2c99.3370364 521.378586%2c99.3370364 C522.842421%2c99.2926379 524.3157%2c99.2926379 525.779535%2c99.2926379 L526.242295%2c99.2926379 C526.601171%2c99.2926379 526.969491%2c99.3370364 527.385031%2c99.3370364 L527.819459%2c99.3370364 L529.122745%2c99.2748786 C529.566617%2c99.2748786 529.934937%2c99.2748786 530.444918%2c99.2748786 C530.954899%2c99.2748786 531.530989%2c99.2926379 532.163744%2c99.3370364 C533.344256%2c99.4258332 534.401994%2c99.5146301 535.469177%2c99.6655847 C536.53636%2c99.8165394 537.575211%2c100.011892 538.642394%2c100.216125 C539.152375%2c100.322681 539.662356%2c100.455877 540.172337%2c100.580192 L540.625654%2c100.695628 L540.805092%2c100.695628 C541.097859%2c100.766666 541.428402%2c100.855463 541.692837%2c100.9265 C541.957271%2c100.997537 542.240594%2c101.077455 542.505029%2c101.166251 L543.147227%2c101.352725 L543.251113%2c101.352725 L543.524991%2c101.423762 L543.676097%2c101.423762 C545.474012%2c101.764639 547.249346%2c102.203443 548.993123%2c102.737956 C551.174857%2c103.399907 553.289302%2c104.243875 555.311223%2c105.259786 C556.349892%2c105.74896 557.350331%2c106.306822 558.305002%2c106.929167 C559.326945%2c107.565695 560.304808%2c108.262677 561.232672%2c109.015893 C564.620041%2c111.887447 567.331794%2c115.392892 569.194045%2c119.307448 C570.154588%2c121.263788 570.928883%2c123.296304 571.507848%2c125.381153 C572.077183%2c127.380048 572.506239%2c129.411951 572.792245%2c131.463737 L572.867798%2c132.067555 L572.867798%2c132.236269 C572.971683%2c132.751291 573.066124%2c133.266313 573.151121%2c133.790214 L573.151121%2c134.003327 L573.151121%2c134.19868 L573.151121%2c134.394033 L573.245562%2c134.988972 C573.349447%2c135.583911 573.443888%2c136.17885 573.528885%2c136.764909 C573.661102%2c137.608479 573.755543%2c138.452049 573.859428%2c139.295619 C573.982201%2c140.325662 574.076642%2c141.364586 574.161639%2c142.403509 L574.20886%2c142.989568 L574.20886%2c143.273718 L574.20886%2c143.433552 C574.25608%2c143.611146 574.25608%2c143.77986 574.25608%2c143.948574 L574.359965%2c145.058535 L574.359965%2c145.316045 L574.359965%2c145.413722 C574.46385%2c146.399367 574.567735%2c147.491568 574.633844%2c148.548251 C574.737729%2c150.155474 574.83217%2c151.762697 574.898279%2c153.36992 C574.898279%2c153.671829 574.898279%2c153.964859 574.898279%2c154.257888 L574.898279%2c158.013995 C574.898279%2c158.742129 574.898279%2c159.470263 574.898279%2c160.198398 L574.898279%2c161.601388 C574.898279%2c161.725703 574.898279%2c161.850019 574.898279%2c161.983214 L574.898279%2c162.285124 C574.895246%2c162.40528 574.876209%2c162.524606 574.841614%2c162.640311 C574.822306%2c162.723221 574.779939%2c162.799826 574.718841%2c162.862303 C574.678391%2c162.904713 574.626005%2c162.935497 574.567735%2c162.9511 C574.633844%2c166.165546 574.633844%2c169.379992 574.633844%2c172.594438 L574.633844%2c177.806813 C574.633844%2c180.515117 574.633844%2c183.179022 574.633844%2c185.842928 L574.633844%2c186.06492 C574.633844%2c189.243847 574.633844%2c192.431654 574.633844%2c195.601702 L574.633844%2c207.900065 C574.633844%2c209.436251 574.633844%2c210.963557 574.633844%2c212.490863 L574.633844%2c223.031049 C574.633844%2c224.735948 574.633844%2c226.511885 574.633844%2c228.287822 C574.633844%2c228.323341 574.633844%2c228.367739 574.633844%2c228.412138 L574.633844%2c229.237949 L574.633844%2c229.48658 L574.784949%2c229.566497 L574.67162%2c230.03712 L574.67162%2c230.134797 L574.614956%2c230.383428 C574.520515%2c230.818533 574.41663%2c231.262517 574.284412%2c231.706501 C574.227748%2c231.892974 574.161639%2c232.079448 574.09553%2c232.265921 L573.982201%2c232.621109 L573.982201%2c232.754304 C573.944425%2c232.86086 573.878316%2c232.976296 573.878316%2c233.091732 C571.609845%2c236.356392 568.656524%2c239.151341 565.199192%2c241.305441 C563.394004%2c242.432986 561.469793%2c243.382228 559.457181%2c244.13806 C558.487943%2c244.536218 557.49083%2c244.871471 556.472847%2c245.141464 C555.39622%2c245.452253 554.225152%2c245.718644 553.006864%2c245.949516 C550.805389%2c246.31659 548.575083%2c246.509658 546.339332%2c246.526695 L546.037121%2c246.526695 C543.6402%2c246.499887 541.249446%2c246.292025 538.88794%2c245.905117 C536.548428%2c245.503308 534.250979%2c244.909045 532.022082%2c244.12918 C530.859414%2c243.747042 529.721094%2c243.302323 528.612764%2c242.797228 C528.083894%2c242.566356 527.555025%2c242.326604 527.0356%2c242.060214 L526.686168%2c241.8915 L526.346181%2c241.713906 L526.100634%2c241.58959 C526.02049%2c241.552505 525.944549%2c241.507878 525.873976%2c241.456395 L525.751202%2c241.385358 L525.618985%2c241.31432 L525.184557%2c241.065689 C524.863457%2c240.879216 524.542358%2c240.692742 524.240147%2c240.48851 C523.57906%2c240.115563 522.984082%2c239.715977 522.351328%2c239.271993 C521.22748%2c238.446182 520.075301%2c237.531574 518.923121%2c236.53705 C517.373003%2c235.170763 515.918711%2c233.711435 514.569393%2c232.168245 C514.503284%2c232.097207 514.503284%2c232.00841 514.503284%2c231.928493 C514.419649%2c231.689723 514.321908%2c231.455528 514.210517%2c231.226998 L514.087744%2c230.978367 L513.785533%2c230.347909 C513.584059%2c229.844727 513.395177%2c229.329705 513.218887%2c228.802844 L513.067781%2c228.376619 C512.886067%2c227.922793 512.740849%2c227.45678 512.633353%2c226.982509 C512.595577%2c226.716118 512.576688%2c226.449728 512.576688%2c226.183337 C512.577072%2c226.054184 512.557994%2c225.925631 512.520024%2c225.80151 L512.520024%2c225.428564 L512.576688%2c218.680003 L512.576688%2c217.197096 L512.576688%2c212.268871 L512.576688%2c209.702642 L512.576688%2c208.441726 L512.576688%2c205.555829 L512.576688%2c203.282629 L512.576688%2c201.044949 L512.576688%2c198.74511 C512.661685%2c191.454889 512.71835%2c183.054707 512.71835%2c173.695519 L512.71835%2c173.429128 L512.71835%2c173.322572 L512.642797%2c173.082821 L512.567244%2c172.843069 C512.425315%2c172.375142 512.352231%2c171.891139 512.35003%2c171.40456 L512.35003%2c171.155929 L512.35003%2c170.525471 L512.35003%2c170.392276 C512.265033%2c170.054848 512.198925%2c169.788457 512.057263%2c169.379992 C511.915602%2c168.971526 511.77394%2c168.571941 511.603946%2c168.172355 L511.273403%2c167.373183 L511.141186%2c167.071274 C511.046745%2c166.858161 510.94286%2c166.645049 510.848419%2c166.467455 L510.650093%2c166.218824 L510.583984%2c166.138907 C510.234553%2c165.721562 509.866233%2c165.330855 509.479025%2c164.91351 L508.534615%2c163.883467 L508.364622%2c163.705873 C507.986858%2c163.315167 507.590206%2c162.933341 507.193554%2c162.551514 C507.051892%2c162.418319 506.900787%2c162.294003 506.749681%2c162.169688 L506.617464%2c162.072011 C506.40025%2c161.885538 506.173591%2c161.707944 505.946933%2c161.53923 L505.814716%2c161.450433 L505.701386%2c161.361636 L504.756977%2c160.70454 L504.313104%2c160.42039 L504.171443%2c160.313833 L503.803123%2c160.038563 L503.142036%2c159.630098 L503.028707%2c159.55906 L502.849269%2c159.443624 C502.518726%2c159.239392 502.178739%2c159.026279 501.829307%2c158.839806 C501.630981%2c158.73325 501.423211%2c158.635573 501.187108%2c158.529017 L500.96045%2c158.413581 L500.733792%2c158.315904 C500.497689%2c158.200468 500.252143%2c158.076153 500.006596%2c157.969597 L499.912156%2c157.969597 C499.713829%2c157.907439 499.430507%2c157.836401 499.260513%2c157.809762 C499.090519%2c157.783123 498.920525%2c157.738725 498.684423%2c157.685447 L498.56165%2c157.685447 L498.334991%2c157.641048 L498.183886%2c157.641048 L495.907859%2c157.641048 L494.585685%2c157.641048 L452.257247%2c157.641048 C448.564605%2c157.747604 444.900296%2c157.845281 441.009328%2c157.845281 L440.064919%2c157.845281 C437.27891%2c157.836401 434.332352%2c157.738725 431.612453%2c157.641048 L286.475584%2c157.641048 L285.370624%2c157.641048 L285.049525%2c157.641048 C284.256221%2c157.676567 283.066265%2c157.729845 281.989638%2c157.729845 L281.55521%2c157.729845 C279.723055%2c157.703206 277.900344%2c157.667687 276.06819%2c157.614409 L274.50047%2c157.570011 L266.000783%2c157.570011 C245.45043%2c157.570011 225.145624%2c157.534492 198.135509%2c157.481214 L185.055436%2c157.481214 L184.233799%2c157.481214 L165.761147%2c157.427936 L143.000876%2c157.427936 C141.149833%2c157.60553 139.006023%2c157.827522 136.257791%2c158.14719 C134.028984%2c158.404701 131.82851%2c158.653332 129.646924%2c158.875324 L129.533595%2c158.99076 L129.306936%2c159.194993 L129.089722%2c159.345948 L128.995281%2c159.416985 C128.949731%2c159.454162 128.90857%2c159.49584 128.872508%2c159.541301 L128.825287%2c159.594579 L128.768623%2c159.665616 C128.655996%2c159.776136 128.536137%2c159.879935 128.409747%2c159.976405 L128.230309%2c160.091841 L128.135868%2c160.153999 L128.041427%2c160.216157 L127.956431%2c160.269435 L127.843101%2c160.358232 C127.654244%2c160.514724 127.474543%2c160.680721 127.304788%2c160.855494 L127.191459%2c160.97981 C127.040353%2c161.130764 126.889248%2c161.272839 126.747586%2c161.423794 L126.492596%2c161.663546 L126.332046%2c161.83226 L126.114832%2c162.045372 L125.992059%2c162.160808 C125.71818%2c162.515995 125.463189%2c162.871183 125.160978%2c163.297408 L124.471559%2c164.318571 L124.273233%2c164.620481 L124.169348%2c164.842473 L124.065463%2c165.037826 L124.065463%2c165.162141 L124.065463%2c165.277577 C124.027687%2c165.393013 123.971022%2c165.508449 123.971022%2c165.632765 L123.971022%2c165.721562 L123.971022%2c165.845877 C123.935803%2c166.001913 123.891667%2c166.156051 123.838805%2c166.307621 C123.725475%2c166.680568 123.593258%2c167.035755 123.451597%2c167.399822 C123.385488%2c167.577416 123.319379%2c167.755009 123.262715%2c167.941483 L123.20605%2c168.136836 C123.165855%2c168.240945 123.134281%2c168.347819 123.111609%2c168.456505 C123.020059%2c168.804089 122.953797%2c169.157134 122.913283%2c169.513187 C122.83773%2c169.735179 122.83773%2c169.957171 122.83773%2c170.179164 L122.83773%2c170.401156 C122.824347%2c170.597834 122.783057%2c170.791946 122.714957%2c170.978335 L122.592184%2c171.333523 L122.592184%2c171.41344 C122.520967%2c171.576737 122.467186%2c171.746284 122.431634%2c171.919582 L122.346637%2c172.700994 L122.176644%2c174.334856 C122.148311%2c174.539089 122.101091%2c174.743322 122.101091%2c174.956434 L122.101091%2c175.089629 L122.101091%2c175.213945 L122.101091%2c175.329381 C122.101091%2c175.728967 122.101091%2c176.19071 122.101091%2c176.616935 C122.101091%2c176.803409 121.978318%2c176.989882 121.855544%2c176.989882 L121.855544%2c200.72528 C122.061005%2c202.553874 122.155599%2c204.391982 122.138867%2c206.230685 L122.138867%2c206.905541 C122.148311%2c208.237494 122.101091%2c209.507288 122.044426%2c210.981316 L122.044426%2c211.15891 L121.987762%2c212.455344 C121.987762%2c213.014764 121.987762%2c213.574184 121.987762%2c214.142484 C121.968874%2c215.030453 121.95943%2c215.918421 121.893321%2c216.80639 L121.893321%2c226.041262 C122.186381%2c227.082991 122.186381%2c228.17846 121.893321%2c229.220189 L121.893321%2c231.280276 C121.89391%2c231.415576 121.861607%2c231.549213 121.79888%2c231.670982 L121.79888%2c231.955132 C121.785063%2c232.219765 121.756693%2c232.483548 121.713883%2c232.745424 C121.671671%2c232.982146 121.614912%2c233.21637 121.543889%2c233.446919 C121.465092%2c233.685725 121.36396%2c233.917502 121.241678%2c234.139535 C121.206954%2c234.218122 121.162581%2c234.292625 121.109461%2c234.361527 L121.01502%2c234.494722 L120.769473%2c234.805511 L120.656144%2c234.920947 C120.669829%2c235.037087 120.646836%2c235.154444 120.590036%2c235.258375 C120.574997%2c235.361247 120.532788%2c235.458937 120.467262%2c235.542525 L120.23116%2c235.871073 C120.051722%2c236.101945 119.86284%2c236.323937 119.683402%2c236.545929 L119.522853%2c236.732403 L119.418968%2c236.901117 L119.418968%2c236.972154 C119.396939%2c237.019585 119.350603%2c237.053098 119.296194%2c237.060951 L118.833434%2c237.584853 C118.172347%2c238.286348 117.530148%2c238.916805 116.878506%2c239.493985 C115.38308%2c240.822859 113.754234%2c242.012374 112.014796%2c243.045859 C110.303688%2c244.048193 108.498639%2c244.901238 106.622217%2c245.594328 C104.6961%2c246.324035 102.696343%2c246.868473 100.653549%2c247.219311 C98.4535702%2c247.595733 96.2221254%2c247.785928 93.9860169%2c247.787611 L93.3721506%2c247.787611 C88.5885784%2c247.721545 83.8532774%2c246.877349 79.3760002%2c245.292419 C78.2615969%2c244.892833 77.1660817%2c244.466608 76.117787%2c244.004865 C75.5889177%2c243.773993 75.0694924%2c243.525362 74.5500671%2c243.267851 L74.3706293%2c243.179054 L73.851204%2c242.912664 L73.6245457%2c242.806107 C73.5844175%2c242.790506 73.5488099%2c242.766157 73.5206606%2c242.73507 C71.8097065%2c241.808926 70.1829504%2c240.751616 68.6569511%2c239.573902 C67.2447313%2c238.428412 65.9104834%2c237.200595 64.6620985%2c235.897712 C64.6016711%2c235.794749 64.5321711%2c235.69673 64.4543284%2c235.604683 L64.4543284%2c235.551405 L64.2182259%2c235.1163 C64.0010117%2c234.725594 63.7743534%2c234.334888 63.5665833%2c233.944182 L63.4721424%2c233.535716 C63.4623285%2c233.414536 63.4623285%2c233.292829 63.4721424%2c233.171649 C63.4614567%2c233.09502 63.4614567%2c233.017407 63.4721424%2c232.940777 C63.2789429%2c232.717811 63.1753065%2c232.438056 63.1793754%2c232.150485 C63.1793754%2c231.670982 63.1793754%2c231.235878 63.1793754%2c230.783014 L63.1793754%2c229.859527 L63.1227108%2c229.149152 C63.1133128%2c228.998326 63.1133128%2c228.847113 63.1227108%2c228.696288 L63.1227108%2c228.527574 C63.0905518%2c228.36917 63.0905518%2c228.206475 63.1227108%2c228.048071 L63.1227108%2c227.817199 C63.1227108%2c226.582923 63.1227108%2c225.339767 63.1227108%2c224.078852 L63.1227108%2c223.00441 L63.1227108%2c219.115108 C63.1699313%2c216.948465 63.1699313%2c214.772942 63.1699313%2c212.606299 C63.239188%2c207.580397 63.2738163%2c202.548575 63.2738163%2c197.510834 L63.2738163%2c194.989003 L63.2738163%2c193.559374 L63.2738163%2c191.1441 L63.2738163%2c189.323764 L63.2738163%2c188.995216 C63.3115927%2c186.562182 63.3304809%2c184.132109 63.3304809%2c181.704995 L63.3304809%2c181.340928 L63.4154778%2c168.278911 L63.4154778%2c165.686043 C63.4154778%2c163.332926 63.4154778%2c160.96205 63.4154778%2c158.582295 L63.4154778%2c149.587174 C63.4111874%2c149.55177 63.4111874%2c149.516022 63.4154778%2c149.480618 L63.4154778%2c149.400701 C63.4013216%2c149.178908 63.4013216%2c148.956517 63.4154778%2c148.734724 C63.4532542%2c148.406176 63.5004746%2c148.059868 63.5760274%2c147.651403 L63.5760274%2c147.571485 C63.6043597%2c146.58584 63.6421361%2c145.600195 63.6988007%2c144.62343 C63.6469393%2c142.895987 63.7068625%2c141.167176 63.8782385%2c139.446574 C63.8929814%2c139.032424 63.9403314%2c138.61987 64.0198999%2c138.212297 L64.0198999%2c138.016944 L64.0198999%2c137.85711 C64.0387881%2c137.715035 64.0860086%2c137.58184 64.0860086%2c137.439765 C64.3576384%2c135.762401 64.7360825%2c134.101875 65.2193001%2c132.467141 C65.8520571%2c130.28943 66.686321%2c128.16797 67.7125415%2c126.127046 C69.7281688%2c121.892368 72.4936399%2c118.010087 75.8911287%2c114.645613 C79.1666835%2c111.491212 82.910762%2c108.799379 87.0068298%2c106.653897 C88.0267922%2c106.103356 89.0278664%2c105.614974 90.0478288%2c105.15323 L91.5777724%2c104.487254 L91.8138748%2c104.389577 L92.3521882%2c104.167585 L92.6638434%2c104.043269 C92.8223903%2c103.969734 92.986542%2c103.907404 93.1549364%2c103.856796 L93.5704766%2c103.696962 L93.6743617%2c103.696962 L93.7876908%2c103.625924 C93.995461%2c103.501609 94.2032311%2c103.368413 94.4110012%2c103.252977 C94.867268%2c102.947951 95.3507152%2c102.680565 95.8559479%2c102.453806 L96.4225937%2c102.187415 L97.536997%2c101.921025 L98.6514003%2c101.654634 L98.7552854%2c101.654634 L98.8780586%2c101.654634 L99.2652666%2c101.565837 C100.049127%2c101.379364 100.842431%2c101.192891 101.626291%2c101.024177 L102.825691%2c100.757786 L103.052349%2c100.704508 L103.892874%2c100.509155 C104.591737%2c100.3582 105.318932%2c100.242764 105.989463%2c100.145088 C107.415522%2c99.9852534 108.614922%2c99.825419 109.767101%2c99.6389457 C110.267639%2c99.5590285 110.758732%2c99.4524723 111.325377%2c99.3281567 L111.476483%2c99.3281567 C116.746288%2c99.3281567 122.02239%2c99.3281567 127.304788%2c99.3281567 L129.344713%2c99.3281567 L130.506336%2c99.3281567 L134.283975%2c99.3281567 L142.783661%2c99.3281567 L179.332313%2c99.2659989 L179.615636%2c99.2659989 L198.399943%2c99.2659989 L199.259356%2c99.2659989 L218.034219%2c99.2659989 L233.465872%2c99.2659989 L256.245032%2c99.2659989 L287.268888%2c99.2659989 L373.125165%2c99.2659989 L446.581345%2c99.2659989 C449.140695%2c99.1683224 451.652824%2c99.1150442 454.920482%2c99.1150442 L455.600457%2c99.1150442 Z M119.65507%2c178.952292 L119.673958%2c178.952292 C119.730623%2c179.245322 119.787287%2c179.547231 119.834508%2c179.840261 L119.834508%2c177.868971 C119.777843%2c178.233038 119.711735%2c178.597105 119.65507%2c178.952292 Z M514.012191%2c229.007077 L513.974415%2c229.007077 C514.122485%2c229.046735 514.256319%2c229.123464 514.361623%2c229.229069 L514.106632%2c228.651889 L514.106632%2c228.563093 L514.106632%2c228.758446 L514.012191%2c229.007077 Z M121.392784%2c232.159365 L121.421116%2c232.150485 C121.39087%2c232.173049 121.355199%2c232.188293 121.317231%2c232.194884 L121.317231%2c232.274801 L121.317231%2c232.665507 L121.317231%2c232.416876 C121.321329%2c232.326764 121.347165%2c232.238707 121.392784%2c232.159365 Z M464.296843%2c229.956976 L464.117487%2c230.178805 C464.226771%2c230.180707 464.335064%2c230.198671 464.438439%2c230.232044 C465.108662%2c230.187678 465.807205%2c230.187678 466.515187%2c230.187678 C467.657398%2c230.187678 468.884567%2c230.240917 470.158935%2c230.338521 C471.631538%2c230.471619 472.915345%2c230.631335 474.085876%2c230.835418 L474.387948%2c230.888657 L474.510665%2c230.888657 C475.313045%2c231.030627 476.219262%2c231.199217 477.07828%2c231.394426 C477.168444%2c231.394809 477.257861%2c231.409818 477.342594%2c231.438792 C478.404539%2c231.717413 479.447903%2c232.05519 480.467155%2c232.450331 C483.342749%2c233.488537 486.042448%2c234.914286 488.481513%2c236.682823 C489.123417%2c237.17972 489.76532%2c237.720982 490.444983%2c238.333229 L490.529941%2c238.404214 L490.57714%2c238.457453 C491.407396%2c239.238841 492.177127%2c240.07505 492.880442%2c240.959681 C492.996112%2c241.032086 493.098191%2c241.122041 493.182514%2c241.225876 C493.239902%2c241.259285 493.293653%2c241.297921 493.34299%2c241.341227 C493.427948%2c241.447704 493.522346%2c241.563055 493.607303%2c241.68728 L493.701701%2c241.80263 L493.701701%2c241.873616 L493.984894%2c242.255161 C494.230328%2c242.592341 494.466322%2c242.938394 494.702316%2c243.284446 C495.200728%2c244.01833 495.651512%2c244.779851 496.052202%2c245.564846 C496.633346%2c246.667428 497.150153%2c247.798952 497.600323%2c248.954389 C497.836317%2c249.335934 498.062871%2c249.71748 498.298865%2c250.143391 L498.298865%2c250.36522 L498.298865%2c250.480571 L498.298865%2c250.658034 L498.355504%2c250.84437 C498.907767%2c252.555106 499.32426%2c254.301994 499.601552%2c256.070655 C499.667631%2c256.496566 499.724269%2c256.886985 499.780908%2c257.26853 C499.724269%2c257.454866 499.724269%2c257.641202 499.724269%2c257.792046 C499.582673%2c258.759219 499.422197%2c259.912728 499.30892%2c261.119477 L499.30892%2c261.27032 L499.30892%2c261.385671 L499.30892%2c261.492149 C499.223962%2c261.989045 499.157883%2c262.485942 499.110685%2c263.009458 L499.025727%2c263.284525 L499.025727%2c263.38213 L498.770853%2c264.269445 C498.563178%2c264.997043 498.327184%2c265.884358 498.176148%2c266.771673 L498.09119%2c266.975755 L497.987353%2c267.206457 L497.883516%2c267.419413 L497.543684%2c268.155884 L497.128335%2c268.670527 C496.9301%2c268.936721 496.722425%2c269.194043 496.51475%2c269.451364 C496.307075%2c269.708685 496.071081%2c270.036992 495.920045%2c270.258821 C495.769009%2c270.480649 495.617973%2c270.702478 495.448057%2c270.915434 L495.32534%2c271.057404 L495.079906%2c271.359091 C494.862792%2c271.598666 494.645677%2c271.847114 494.419123%2c272.086689 L493.937695%2c272.619078 L493.390189%2c273.195833 C493.066426%2c273.510433 492.769717%2c273.848673 492.502851%2c274.207372 C492.393384%2c274.36814 492.313597%2c274.545136 492.266857%2c274.730888 L491.983664%2c275.059195 L490.680977%2c276.25707 C490.105152%2c276.940302 489.557646%2c277.534803 489.0007%2c278.084939 L488.377675%2c278.697186 L488.141681%2c278.981127 C488.016808%2c279.114819 487.884464%2c279.242181 487.745211%2c279.362672 L487.584735%2c279.513516 L487.188265%2c279.877315 L487.046669%2c280.019285 L486.754036%2c280.303226 C485.149277%2c281.900393 483.138608%2c283.896851 481.090179%2c285.777959 C480.117884%2c286.665274 479.107829%2c287.552589 477.975058%2c288.439904 L462.82424%2c302.486099 L445.285163%2c318.750582 L427.868802%2c334.899714 L414.247226%2c347.526206 L413.879075%2c347.872259 L413.435406%2c348.280424 C391.544598%2c368.608809 371.796617%2c386.922989 352.076954%2c405.139565 L349.443261%2c407.579681 L349.320544%2c407.686159 L349.226146%2c407.783764 C338.691372%2c417.473243 325.69282%2c429.540726 313.204015%2c440.951596 L300.450897%2c452.593168 L297.817203%2c454.997792 C289.802845%2c462.273774 281.590253%2c469.771586 273.509816%2c477.180665 C266.801292%2c483.338631 260.077035%2c489.487724 253.337045%2c495.627943 C247.833664%2c500.641273 242.254765%2c505.645729 236.855221%2c510.490468 L236.779703%2c510.552581 L234.023293%2c513.028189 L226.58476%2c519.691924 L218.28721%2c527.11875 C209.80401%2c534.956699 201.333397%2c542.797606 192.875371%2c550.64147 C192.826609%2c550.691113 192.758442%2c550.719947 192.686576%2c550.721328 C192.611656%2c550.721328 192.540009%2c550.692466 192.488341%2c550.64147 C192.462595%2c550.603598 192.462595%2c550.555118 192.488341%2c550.517246 C191.978593%2c550.907664 191.468846%2c551.28921 190.94022%2c551.661882 L190.458792%2c552.007935 L190.307756%2c552.114412 C189.32602%2c552.815391 188.221568%2c553.613975 187.079357%2c554.270588 C186.730086%2c554.47467 186.361935%2c554.669879 186.003224%2c554.856216 C185.833308%2c554.944947 185.653953%2c555.033679 185.465158%2c555.113537 L185.210284%2c555.220015 C184.998824%2c555.31284 184.781265%2c555.392862 184.558941%2c555.45959 C184.314368%2c555.532983 184.060313%2c555.574774 183.80376%2c555.583814 C183.435609%2c555.743531 183.048579%2c555.903247 182.670988%2c556.045218 L182.416115%2c556.142822 L182.312277%2c556.142822 L181.745892%2c556.346905 L181.557096%2c556.426763 C180.962391%2c556.684084 180.358247%2c556.89704 179.782421%2c557.101122 C179.30629%2c557.284725 178.813396%2c557.427281 178.309818%2c557.527034 L178.139903%2c557.527034 C177.899909%2c557.573199 177.657186%2c557.605792 177.413041%2c557.624638 L177.177047%2c557.624638 C175.169164%2c558.311227 173.074887%2c558.749682 170.946804%2c558.928991 C170.286021%2c559.00885 169.615798%2c559.00885 168.945575%2c559.00885 C168.435827%2c559.00885 167.92608%2c558.964484 167.416333%2c558.964484 L167.218098%2c558.964484 C166.966577%2c558.978016 166.714438%2c558.978016 166.462917%2c558.964484 C166.145709%2c558.933595 165.830567%2c558.886199 165.518941%2c558.822513 C163.480195%2c558.615923 161.485468%2c558.125494 159.60021%2c557.367317 L159.062144%2c557.145488 C157.679701%2c556.516351 156.375401%2c555.745631 155.172962%2c554.847342 L154.993607%2c554.723118 L154.634896%2c554.456924 C154.23943%2c554.419867 153.856689%2c554.304984 153.511564%2c554.119744 C153.313329%2c553.977774 153.143413%2c553.85355 152.935738%2c553.68496 C152.695278%2c553.488644 152.46827%2c553.278226 152.256076%2c553.054966 L151.944563%2c552.744406 C151.784088%2c552.584689 151.604732%2c552.407226 151.425377%2c552.194271 L151.330979%2c552.105539 L149.386388%2c550.277671 L145.988074%2c547.047844 L145.799279%2c546.861508 C145.642727%2c546.801402 145.491256%2c546.730212 145.34617%2c546.648552 C144.657911%2c546.231861 144.024232%2c545.740456 143.458218%2c545.184483 L143.146705%2c544.909415 L141.258753%2c543.20577 C139.956066%2c541.987191 138.656525%2c540.786358 137.360131%2c539.603272 L133.584227%2c536.054012 L129.808322%2c532.504752 C125.824742%2c528.795776 121.84431%2c525.077926 117.867023%2c521.351203 L114.091119%2c517.801944 C107.590269%2c511.709048 101.111446%2c505.645729 94.6546489%2c499.611987 L93.7106727%2c498.724672 L93.3708413%2c498.414112 L92.747817%2c497.837357 C85.1676882%2c490.792077 73.7172571%2c480.153171 63.2391215%2c470.259609 C58.9534696%2c466.207537 54.6709643%2c462.155466 50.3916056%2c458.103394 L47.4747192%2c455.343845 L41.5654283%2c449.744887 L38.6391021%2c446.976465 L38.5447045%2c446.896606 L35.0236734%2c443.578049 L33.8531429%2c442.468905 L32.2672629%2c440.978216 L31.2288891%2c440.002169 L26.1691768%2c435.246161 L25.0080861%2c434.154764 L24.7532125%2c433.915189 L24.5644172%2c433.728853 L24.3189834%2c433.507024 L24.2340256%2c433.427166 C23.2334108%2c432.477739 21.8552056%2c431.182259 20.5997173%2c429.940018 L19.7218194%2c429.052703 L19.6085423%2c428.937352 C19.2781506%2c428.600172 18.9383192%2c428.262993 18.5984878%2c427.934686 C18.4380118%2c427.766096 18.2680961%2c427.615253 18.0981804%2c427.455536 C17.7111502%2c427.144976 17.4279573%2c426.861035 17.1542042%2c426.568221 C16.962013%2c426.488227 16.7862768%2c426.377101 16.6350173%2c426.239915 C16.4947103%2c426.123553 16.3765869%2c425.985511 16.2857461%2c425.83175 C16.2007883%2c425.725272 16.1252702%2c425.609921 16.011993%2c425.450204 L15.8420773%2c425.192883 L15.7193604%2c425.01542 L15.6532821%2c424.953308 C15.3136557%2c424.700789 15.0581345%2c424.362068 14.9169807%2c423.977261 L14.6432276%2c423.666701 C14.3600347%2c423.347268 14.0862816%2c423.027834 13.8219683%2c422.690655 L13.6426128%2c422.459953 C13.5104561%2c422.28249 13.3405404%2c422.060661 13.2461428%2c421.918691 C13.1517452%2c421.77672 13.0573476%2c421.63475 12.9723897%2c421.49278 C12.8456986%2c421.275494 12.7352996%2c421.05016 12.641998%2c420.81842 L12.4532028%2c420.561099 C10.3265482%2c418.305022 8.43025217%2c415.866005 6.78934571%2c413.276243 C3.16057862%2c407.473071 0.906678215%2c401.002224 0.181512422%2c394.30545 C-0.174588545%2c390.819413 -0.00616264379%2c387.303597 0.681819799%2c383.861753 C1.3576715%2c380.553608 2.53383783%2c377.353437 4.17453168%2c374.35861 C4.95667723%2c372.944576 5.84302876%2c371.583667 6.82710476%2c370.285834 C7.71620643%2c369.078485 8.69403311%2c367.93105 9.75343093%2c366.851925 C10.8012445%2c365.760528 11.6413833%2c364.953071 12.5853595%2c364.189981 C12.7271647%2c363.930511 12.9119758%2c363.693895 13.1328657%2c363.489002 C13.3877392%2c363.205061 13.6614923%2c362.94774 13.9541249%2c362.672672 L14.1051611%2c362.521829 L15.4833664%2c360.933535 L16.9370897%2c359.575943 L18.4096925%2c358.191732 C31.9179917%2c345.582986 45.9454778%2c332.512837 61.3134101%2c318.262559 L76.1527157%2c304.473685 L105.415977%2c277.295228 C112.653128%2c270.569381 119.906012%2c263.852407 127.174628%2c257.144306 L131.337563%2c253.293359 L138.275788%2c246.886945 C140.107102%2c245.206962 141.941563%2c243.509233 143.779169%2c241.793757 L146.611098%2c239.220544 L147.243562%2c238.634916 C147.875821%2c238.009616 148.54389%2c237.417192 149.244792%2c236.860286 C149.575617%2c236.527683 150.019728%2c236.314247 150.50028%2c236.256912 C150.745242%2c236.128949 150.997331%2c236.013432 151.255461%2c235.910859 C151.302982%2c235.562772 151.519025%2c235.254883 151.840726%2c235.076783 C152.360255%2c234.785347 152.906858%2c234.538845 153.473805%2c234.340312 L153.766438%2c234.224961 C154.361143%2c233.985386 154.946408%2c233.763557 155.550553%2c233.550601 L155.63551%2c233.550601 L155.729908%2c233.550601 L155.956462%2c233.46187 C156.051563%2c233.425597 156.149371%2c233.39594 156.249095%2c233.373139 L156.343492%2c233.373139 C157.117553%2c233.106944 157.844415%2c232.885115 158.561837%2c232.681033 L158.646794%2c232.681033 C160.153978%2c232.267144 161.690114%2c231.952859 163.243958%2c231.740479 L163.357236%2c231.696113 C164.140736%2c231.571889 164.943116%2c231.483158 165.887092%2c231.421046 C166.528996%2c231.421046 167.15202%2c231.421046 167.775044%2c231.421046 L168.265912%2c231.421046 C168.775659%2c231.421046 169.304286%2c231.492031 169.89899%2c231.492031 L170.106665%2c231.492031 L170.380418%2c231.492031 C171.013682%2c231.532453 171.644007%2c231.606514 172.268371%2c231.71386 L172.627082%2c231.767098 C173.335064%2c231.864703 174.024166%2c231.9978 174.66607%2c232.130898 C174.775452%2c232.138532 174.883328%2c232.159409 174.987022%2c232.19301 C176.283243%2c232.486615 177.547389%2c232.893596 178.762927%2c233.408631 L178.885644%2c233.408631 L178.961162%2c233.408631 C179.056475%2c233.437923 179.148235%2c233.476587 179.234915%2c233.523982 C179.754102%2c233.728064 180.273289%2c233.949893 180.773596%2c234.180595 C180.917917%2c234.207002 181.053681%2c234.264732 181.170066%2c234.349185 C181.762876%2c234.629023 182.336656%2c234.943144 182.888103%2c235.289739 C183.312892%2c235.54706 183.737681%2c235.804381 184.153031%2c236.070576 C185.210284%2c236.736062 186.276977%2c237.481407 187.334231%2c238.271117 C188.392199%2c239.058581 189.400793%2c239.902942 190.354954%2c240.799965 C191.272292%2c241.692034 192.132807%2c242.634227 192.932009%2c243.621626 C194.890519%2c246.017309 196.380033%2c248.721378 197.330938%2c251.607461 C198.359474%2c254.633487 198.731823%2c257.822699 198.425951%2c260.98638 C198.28584%2c262.589248 197.969494%2c264.174167 197.481975%2c265.715768 C196.962766%2c267.357669 196.206859%2c268.925023 195.235311%2c270.374172 C194.759376%2c271.08764 194.219338%2c271.761501 193.621112%2c272.388377 C193.638671%2c272.999211 193.393673%2c273.590935 192.941449%2c274.029909 C191.506605%2c275.405247 190.043442%2c276.771712 188.55196%2c278.147051 L188.174369%2c278.501977 C187.296472%2c279.309433 186.428013%2c280.11689 185.559555%2c280.942093 L182.727627%2c283.604037 L181.321102%2c284.93501 L179.206596%2c286.913722 L177.129848%2c288.874688 L175.440131%2c290.516221 L174.496155%2c291.403536 C169.360924%2c296.230529 164.065218%2c301.199493 158.788391%2c306.203949 C151.752622%2c312.864727 144.729439%2c319.537335 137.718842%2c326.221774 L135.83089%2c327.996404 C130.450226%2c333.116211 124.956284%2c338.351369 119.688897%2c343.346953 C114.42151%2c348.342536 109.154123%2c353.320373 103.839537%2c358.342575 L99.1196562%2c362.77915 L95.2871129%2c366.408268 L92.3702265%2c369.194437 L88.4904844%2c372.885667 C86.8857249%2c374.42368 85.2715256%2c375.958734 83.6478866%2c377.490832 L81.5994583%2c379.442924 L81.5333799%2c379.496163 L81.4767414%2c379.558275 L81.3540245%2c379.673626 L81.2218678%2c379.79785 L80.9669942%2c380.037425 L80.7687592%2c380.232635 C80.40979%2c380.602029 80.0284176%2c380.951622 79.626548%2c381.279666 L78.8336081%2c381.998392 L78.6636923%2c382.149235 L78.5504152%2c382.255713 C78.3333007%2c382.459795 77.9934692%2c382.788102 77.6819571%2c383.143028 L76.8795774%2c384.030343 L76.6907821%2c384.261045 C75.8484412%2c385.321363 75.1240788%2c386.460133 74.5290767%2c387.659461 C74.3780405%2c388.058753 74.2175645%2c388.458044 74.0665283%2c388.875082 L73.8966126%2c389.300993 L73.8305343%2c389.469583 C73.6322993%2c389.993099 73.4151848%2c390.543234 73.2547088%2c391.119989 L73.0942329%2c391.670124 L73.0942329%2c391.74111 C73.0942329%2c392.379976 73.0942329%2c393.027716 73.0942329%2c393.684329 C73.1198532%2c394.912366 73.2112198%2c396.138412 73.3679859%2c397.357813 C73.5286555%2c398.479959 73.7907706%2c399.587194 74.1514862%2c400.667498 L74.3497212%2c401.226506 L74.3497212%2c401.306365 L74.5385164%2c401.634671 C74.7556309%2c402.042836 74.9821852%2c402.451001 75.2087395%2c402.859166 L75.3314564%2c403.080995 C75.624089%2c403.613384 75.9167216%2c404.136899 76.1999145%2c404.669288 L76.6247038%2c405.485618 L76.8606978%2c405.929276 C80.0702169%2c408.957977 83.2891756%2c411.980763 86.5175742%2c414.997634 L95.4192696%2c423.294029 L96.8729929%2c424.633875 L98.0624029%2c425.814003 C101.926412%2c429.410587 105.780982%2c433.004212 109.626111%2c436.59488 L116.526577%2c443.072279 L120.057048%2c446.381964 L124.229423%2c450.295023 L133.168877%2c458.697895 L149.999973%2c474.465482 L152.954618%2c477.225031 L153.058455%2c477.322636 L153.115094%2c477.375875 L155.947023%2c480.03782 L156.03198%2c480.108805 L167.038743%2c490.419404 L167.208658%2c490.570248 L170.758009%2c493.924298 L171.041202%2c493.649231 L171.749184%2c493.001491 L175.525089%2c489.452231 L179.300993%2c485.902971 L190.392713%2c475.663357 L194.801082%2c471.572835 L207.18605%2c460.037741 L211.905931%2c455.601166 L215.351444%2c452.406832 L225.876778%2c442.646368 C250.206191%2c419.99026 274.573363%2c397.369644 298.978294%2c374.784521 L304.642151%2c369.460631 C330.601496%2c345.372988 356.560841%2c321.294219 382.520186%2c297.224322 L400.899402%2c280.179002 L419.571251%2c262.805375 L420.00548%2c262.414957 L420.477468%2c261.971299 C425.622139%2c257.206418 430.681851%2c252.530268 435.949238%2c247.685529 L443.01962%2c241.225876 L443.963596%2c240.338561 C444.926452%2c239.451246 445.936506%2c238.563931 446.880482%2c237.676616 L447.531826%2c237.090988 L448.56076%2c236.203673 L448.711796%2c236.079449 C448.843953%2c235.955225 448.976109%2c235.839874 449.108266%2c235.733396 L449.325381%2c235.555933 C449.504736%2c235.413963 449.674652%2c235.263119 449.835128%2c235.112276 L449.929525%2c235.032417 L450.335435%2c234.677491 C450.465243%2c234.564588 450.615502%2c234.474435 450.779104%2c234.411297 C450.958459%2c234.2782 451.137815%2c234.145103 451.33605%2c234.020878 L451.496526%2c233.905527 L451.600363%2c233.843415 L451.987393%2c233.586094 L452.062912%2c233.541728 L452.147869%2c233.488489 C452.544339%2c233.204549 453.035207%2c232.920608 453.488316%2c232.64554 C453.712048%2c232.514616 453.945496%2c232.398968 454.186858%2c232.299487 C454.323041%2c232.229491 454.465116%2c232.170137 454.611647%2c232.122024 L454.772123%2c232.051039 C455.168593%2c231.891323 455.583943%2c231.767098 455.980413%2c231.642874 L456.08425%2c231.642874 L456.310804%2c231.571889 C456.716714%2c231.456538 457.113184%2c231.332314 457.500214%2c231.181471 C457.836777%2c231.05697 458.18891%2c230.973475 458.548028%2c230.933022 C458.86898%2c230.808798 459.180492%2c230.702321 459.492004%2c230.595843 C459.916068%2c230.446761 460.351544%2c230.328113 460.794691%2c230.240917 C461.187432%2c230.175157 461.585215%2c230.139547 461.984101%2c230.134439 L462.465529%2c230.134439 C462.937517%2c230.090073 463.400066%2c230.036834 463.834295%2c230.036834 C463.900873%2c229.99798 463.974458%2c229.970915 464.051409%2c229.956976 C464.132596%2c229.943545 464.215656%2c229.943545 464.296843%2c229.956976 Z M164.112416%2c234.118483 L164.112416%2c234.162849 L164.320091%2c234.162849 C164.40358%2c234.141389 164.488837%2c234.126548 164.574965%2c234.118483 L164.263453%2c234.118483 L164.112416%2c234.118483 Z M175.827161%2c492.753043 L176.138673%2c492.469102 L175.85548%2c492.726423 L175.827161%2c492.753043 Z' id='Combined-Shape' fill='url(%23linearGradient-1)'%3e%3c/path%3e %3cpath d='M320.658515%2c7.01788175 L320.737641%2c7.062231 C321.079849%2c6.98123675 321.432135%2c6.93951087 321.786057%2c6.9380531 C322.481801%2c6.94185208 323.164124%2c7.11012381 323.764201%2c7.42589484 C324.669403%2c7.87874268 325.327397%2c8.64520453 325.584093%2c9.54578897 C325.67311%2c10.0602403 325.781908%2c10.5924313 325.781908%2c11.1157524 C326.02558%2c11.7994783 326.16531%2c12.5095535 326.197318%2c13.2267767 C326.197318%2c13.5283516 326.197318%2c13.8210566 326.197318%2c14.1137617 C326.246771%2c14.2379396 326.246771%2c14.3621175 326.246771%2c14.4862954 C326.428244%2c15.8162899 326.510849%2c17.155638 326.494039%2c18.4954675 C326.494039%2c20.2250882 326.494039%2c21.9192296 326.494039%2c23.6931995 C326.494039%2c27.507235 326.494039%2c31.3656197 326.494039%2c35.2240044 C326.494039%2c39.700322 326.494039%2c44.1736829 326.494039%2c48.6440873 L326.494039%2c55.0303792 C326.484149%2c56.9196572 326.573165%2c58.8355448 326.414914%2c60.715953 C326.391623%2c61.7610929 325.973132%2c62.7681391 325.228027%2c63.5720447 L325.228027%2c63.9800578 C325.243014%2c65.5196914 324.098551%2c66.8748163 322.441878%2c67.2790545 C320.785205%2c67.6832928 319.032893%2c67.0349986 318.175945%2c65.7008086 C317.830689%2c65.180373 317.649506%2c64.5856269 317.651737%2c63.9800578 L317.651737%2c63.5809145 C316.931054%2c62.7630895 316.525065%2c61.7579646 316.494523%2c60.715953 C316.494523%2c59.7934886 316.494523%2c58.826675 316.494523%2c57.93969 C316.494523%2c56.7866095 316.494523%2c55.633529 316.494523%2c54.4893184 C316.543976%2c52.3694242 316.543976%2c50.2495301 316.543976%2c48.129636 C316.596727%2c43.641492 316.649477%2c39.1533479 316.702228%2c34.6652039 C316.741791%2c30.8068192 316.741791%2c26.9661742 316.820916%2c23.134399 C316.860479%2c21.4047783 316.860479%2c19.7195068 316.919824%2c17.9455368 C316.929001%2c16.7199385 317.028123%2c15.4962108 317.216545%2c14.2822888 L317.275889%2c13.8654059 C317.325343%2c13.5993104 317.325343%2c13.324345 317.325343%2c13.0671194 C317.33299%2c12.5782615 317.392604%2c12.0911716 317.503376%2c11.612464 C317.572705%2c11.3974496 317.658632%2c11.1870217 317.760535%2c10.9827046 L317.819879%2c10.3972946 C317.828404%2c10.1556087 317.86151%2c9.9151251 317.918786%2c9.67883671 L317.918786%2c9.50143972 C318.282779%2c8.29979849 319.322571%2c7.35723006 320.658515%2c7.01788175 Z M377.528968%2c34.5614486 L377.51324%2c34.6614241 L377.455974%2c35.0761791 C377.314132%2c35.5897387 377.064418%2c36.0724875 376.721053%2c36.4969356 L376.558798%2c36.71755 L376.329732%2c37.0617084 C376.157933%2c37.3087965 375.986133%2c37.5647092 375.804789%2c37.8117972 L375.213035%2c38.6942547 L374.831258%2c39.2413784 C374.752025%2c39.3979334 374.659471%2c39.5484241 374.55447%2c39.6914317 L374.506748%2c39.7708528 L374.363581%2c39.9826426 C374.067704%2c40.4768188 373.73365%2c40.9621704 373.409139%2c41.4386975 L373.294606%2c41.6063644 L373.055996%2c41.9328737 C371.586155%2c44.0242979 370.440824%2c45.6480196 369.238227%2c47.3070397 L367.71112%2c49.4072885 C365.706792%2c52.1782049 363.692919%2c54.9491214 361.669501%2c57.7200379 C360.342827%2c59.5467249 359.006608%2c61.3822364 357.660845%2c63.2089234 L357.24089%2c63.7913453 L354.84524%2c67.0740871 L354.77843%2c67.1711574 L354.396653%2c67.7006319 C353.887912%2c68.4651414 353.309996%2c69.1884041 352.669112%2c69.8626527 C352.258156%2c70.264771 351.746964%2c70.5677441 351.180183%2c70.7451102 C350.602272%2c71.1466519 349.898761%2c71.3634689 349.175854%2c71.3628305 C349.147128%2c71.3607628 349.118473%2c71.3584088 349.089893%2c71.3557711 C347.114987%2c71.4656852 345.258507%2c70.2833592 344.708172%2c68.4368021 C344.378332%2c67.4017655 344.533331%2c66.2850742 345.134929%2c65.3622453 C345.609104%2c64.6201109 346.16863%2c63.9133162 346.671255%2c63.1976866 C347.401484%2c62.1905042 348.12223%2c61.1656519 348.852459%2c60.1584695 C350.666967%2c57.6434584 352.49412%2c55.1313924 354.333918%2c52.6222713 C355.310718%2c51.2351867 356.344418%2c49.9276166 357.292768%2c48.5847067 C360.71947%2c43.8491823 364.13985%2c39.1048231 367.553907%2c34.3516289 C371.233502%2c29.2450373 374.894131%2c24.1296109 378.592693%2c19.0406892 C380.318689%2c16.7171017 382.025718%2c14.3405046 383.761197%2c11.9727425 C384.624195%2c10.8065312 385.487193%2c9.61381522 386.369157%2c8.43876907 C386.786431%2c7.88216827 387.194221%2c7.31673253 387.620979%2c6.76896665 L388.474493%2c5.57625064 C389.043503%2c4.79877649 389.640963%2c3.93295301 390.172038%2c3.24382821 C390.703114%2c2.5547034 391.215222%2c1.83907379 391.812683%2c1.19412364 L391.765265%2c1.08810444 C392.506446%2c0.367983061 393.539826%2c-0.0267273727 394.610313%2c0.00140762922 C394.971609%2c0.00167288235 395.331506%2c0.043212585 395.681948%2c0.125096698 C396.694909%2c0.402140346 397.55215%2c1.03596198 398.071788%2c1.89208339 C398.619098%2c2.76162359 398.766153%2c3.80026271 398.479578%2c4.77227169 C398.381746%2c5.08079591 398.244853%2c5.37737875 398.071788%2c5.65576504 C397.657468%2c6.36287758 397.194993%2c7.04456084 396.687198%2c7.69663466 C396.108705%2c8.50944854 395.530212%2c9.32226242 394.932752%2c10.1350763 L394.705148%2c10.4619688 L394.65773%2c10.5238134 C393.974919%2c11.5221608 393.27314%2c12.5205083 392.580845%2c13.5100209 C390.753692%2c16.0721516 388.926539%2c18.6313373 387.099386%2c21.187578 C383.909247%2c25.6455349 380.719108%2c30.1034917 377.528968%2c34.5614486 Z M277.374034%2c38.7626664 L277.374034%2c38.7895457 C278.420688%2c38.5198327 279.538576%2c38.6587127 280.475182%2c39.1748147 C280.773665%2c39.3376553 281.045939%2c39.5397953 281.283763%2c39.7751175 C282.054293%2c40.5979009 282.724375%2c41.4995151 283.281435%2c42.4630406 C284.194656%2c43.8518009 285.098365%2c45.249521 286.002074%2c46.6382813 C287.758757%2c49.3262044 289.512269%2c52.0141276 291.26261%2c54.7020507 L293.74543%2c58.4920224 C293.812019%2c58.5995393 293.888121%2c58.7070562 293.964223%2c58.8145732 C294.915495%2c60.2302127 295.933357%2c61.5383353 296.884629%2c62.9181358 C297.464905%2c63.7424323 298.035668%2c64.5936079 298.663508%2c65.3910251 C299.276702%2c66.1587939 299.845133%2c66.9573892 300.366286%2c67.7832767 C300.725177%2c68.3591987 300.933833%2c69.00712 300.9751%2c69.6737827 C301.472227%2c70.5467559 301.60132%2c71.5642599 301.336583%2c72.5229812 L301.28902%2c72.6304982 C301.196215%2c72.9280954 301.065241%2c73.2139285 300.898998%2c73.4816738 C300.195172%2c74.6299157 298.891604%2c75.3344421 297.483931%2c75.327381 C296.742828%2c75.3295481 296.014283%2c75.1471811 295.372106%2c74.7987562 C294.864991%2c74.5143656 294.42995%2c74.1290766 294.097401%2c73.6698284 C293.423296%2c73.2975691 292.860371%2c72.7704496 292.461213%2c72.1377122 C291.861911%2c71.2417379 291.386275%2c70.3457635 290.863075%2c69.4497891 C289.499585%2c67.0664972 288.094873%2c64.7041114 286.648939%2c62.3626317 L286.563324%2c62.2371953 L284.194656%2c58.5995393 L278.705815%2c50.1863398 C277.805277%2c48.8125124 276.907911%2c47.4297253 276.013715%2c46.0379784 C275.424177%2c45.2224886 274.938845%2c44.3443377 274.567781%2c43.4217332 C273.994854%2c41.4074372 275.244392%2c39.3328994 277.374034%2c38.7626664 Z' id='Combined-Shape' fill='url(%23linearGradient-2)'%3e%3c/path%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap\");\n\n.header-wrapper {\n  color: black;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Nunito Sans\", -apple-system, system-ui, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 16px 0px;\n  margin: 0px 16px;\n}\n\n.header-item {\n  margin: 11px 0px 7px 0px;\n}\n\n.header-logo {\n  margin: auto 8px auto auto;\n  width: 40px;\n  height: 40px;\n}\n\n.header-mode {\n  border-radius: 8px;\n  background-color: #f7f7f7;\n  font-family: \"Nunito Sans\", -apple-system, system-ui, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n  padding: 4px 8px;\n  color: #555;\n}\n";
styleInject(css_248z$2);

function getModeName(mode) {
  switch (mode) {
    case "QUICK_SEARCH":
      return "Quick Search";

    case "GIT":
      return "Git Mode";

    default:
      return "Search";
  }
}

function ModalCommandPanelHeader(mode) {
  return /*#__PURE__*/React.createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header-mode"
  }, getModeName(mode)), " on COMMAND PANEL"), /*#__PURE__*/React.createElement("object", {
    className: "header-logo",
    type: "image/svg+xml",
    data: img
  }));
}

var css_248z$3 = "@import \"./kbcd.css\";\n\n.kloudi-query-item {\n  display: flex;\n  height: 32px;\n}\n\n.kloudi-query-category {\n  color: #fff;\n  margin-right: 6px;\n  border-radius: 2px;\n  padding: 1.2px 3px;\n  margin: auto 0px;\n}\n\n.kloudi-query-shortcut {\n  margin: auto 8px auto auto;\n  display: flex;\n  flex-direction: row;\n}\n\n.kloudi-query-shortcut-text {\n  font-size: 14px;\n  margin: auto 6px;\n}\n\n.kloudi-query-icon {\n  width: 20px;\n  height: 20px;\n  margin: auto 0px;\n}\n\n.kloudi-query-text {\n  max-width: 420px;\n  margin: auto 0px 4px 16px;\n  outline: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.kloudi-query-text b {\n  color: black;\n}\n\n.search {\n  margin: auto 4px;\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke: #9b9b9b;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.search:hover {\n  stroke: #4a4a4a;\n}\n\n.kloudi-query-category.Command {\n  background: rgb(67, 130, 207);\n}\n.kloudi-query-category.Navigate {\n  background: rgb(165, 22, 134);\n}\n.kloudi-query-category.Network {\n  background: rgb(46, 41, 194);\n}\n.kloudi-query-category.System {\n  background: rgb(49, 177, 79);\n}\n.kloudi-query-category.Drawer {\n  background: rgb(206, 64, 206);\n}\n";
styleInject(css_248z$3);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function renderShortcuts(shortcut) {
  if (!!shortcut) {
    if (typeof shortcut === "string") shortcut = [shortcut];
    if (shortcut.length == 1) return /*#__PURE__*/React.createElement("div", {
      className: "kloudi-query-shortcut"
    }, /*#__PURE__*/React.createElement("kbd", null, shortcut[0]));else {
      var data = [];

      var _iterator = _createForOfIteratorHelper(shortcut.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = slicedToArray(_step.value, 2),
              i = _step$value[0],
              item = _step$value[1];

          data.push( /*#__PURE__*/React.createElement("kbd", {
            key: i
          }, item));
          if (i != shortcut.length - 1) data.push( /*#__PURE__*/React.createElement("span", {
            key: "".concat(i, "-span"),
            className: "kloudi-query-shortcut-text"
          }, " then"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "kloudi-query-shortcut"
      }, data);
    }
  }
}

function QuerySuggestions(suggestion) {
  var name = suggestion.name,
      highlight = suggestion.highlight,
      icon = suggestion.icon,
      shortcut = suggestion.shortcut;
  return /*#__PURE__*/React.createElement("div", {
    className: "kloudi-query-item"
  }, icon ? /*#__PURE__*/React.createElement("object", {
    className: "kloudi-query-icon",
    type: "image/svg+xml",
    data: icon
  }) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "search",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("span", {
    className: "kloudi-query-text",
    dangerouslySetInnerHTML: {
      __html: highlight || name
    }
  }), renderShortcuts(shortcut));
}

var DEFAULT_SUGGESTIONS = [{
  id: 1,
  mode: "SEARCH",
  name: "Mark as done",
  command: function command() {}
}, {
  id: 2,
  name: "View breadcrumbs",
  mode: "SEARCH",
  command: function command() {}
}, {
  id: 2,
  name: "Assign to",
  mode: "SEARCH",
  command: function command() {}
}, {
  id: 3,
  name: "Mark as released",
  mode: "SEARCH",
  command: function command() {}
}, {
  id: 4,
  name: "Mark as Done",
  mode: "QUICK_SEARCH",
  shortcut: ["M", "D"],
  command: function command() {}
}, {
  id: 5,
  name: "Mark as Released",
  mode: "QUICK_SEARCH",
  shortcut: ["M", "R"],
  command: function command() {}
}, {
  id: 6,
  name: "Mark as ",
  mode: "QUICK_SEARCH",
  shortcut: ["M"],
  command: function command() {}
}, {
  id: 7,
  name: "clone",
  mode: "GIT",
  shortcut: ["c", "l"],
  command: function command() {}
}, {
  id: 8,
  name: "comment",
  mode: "GIT",
  shortcut: ["c", "o"],
  command: function command() {}
}, {
  id: 9,
  name: "Pull Request",
  mode: "GIT",
  shortcut: ["p", "r"],
  command: function command() {}
}, {
  id: 10,
  name: "Create a new PR",
  mode: "GIT",
  shortcut: ["c", "p", "r"],
  command: function command() {}
}, {
  id: 11,
  name: "Create a ",
  mode: "GIT",
  shortcut: ["c", "r"],
  command: function command() {}
}, {
  id: 11,
  name: "Create a new comment",
  mode: "GIT",
  command: function command() {}
}, {
  id: 12,
  name: "Quick Search Mode",
  mode: "MODE",
  shortcut: ["command", "shift", "k"],
  command: function command() {}
}, {
  id: 13,
  name: "Git Mode",
  mode: "MODE",
  shortcut: ["command", "shift", "g"],
  command: function command() {}
}];

var DEFAULT_HOTKEYS = [
	"command+k",
	"ctrl+k",
	"command+alt+k",
	"control+alt+k",
	"command+alt+g",
	"control+alt+g"
];

var DEFAULT_GIT_MODE_HOTKEYS = [
	"command+alt+g",
	"control+alt+g",
	"c o",
	"c l",
	"c r",
	"P R",
	"p r",
	"p R",
	"P r",
	"c p r"
];

var DEFAULT_QUICK_SEARCH_HOTKEYS = [
	"command+alt+k",
	"control+alt+k",
	"M",
	"m d",
	"m D",
	"m r",
	"m R"
];

function ModalCommandPanel(props) {
  var _useState = useState(DEFAULT_SUGGESTIONS.filter(function (item) {
    return ["SEARCH", "MODE"].indexOf(item.mode) >= 0;
  })),
      _useState2 = slicedToArray(_useState, 2),
      commands = _useState2[0],
      setCommands = _useState2[1];

  var _useState3 = useState(props.closeOnSelect || false),
      _useState4 = slicedToArray(_useState3, 2),
      closeOnSelect = _useState4[0],
      setCloseOnSelect = _useState4[1];

  var _useState5 = useState(DEFAULT_HOTKEYS),
      _useState6 = slicedToArray(_useState5, 2),
      hotkeys = _useState6[0],
      setHotkeys = _useState6[1];

  var _useState7 = useState("SEARCH"),
      _useState8 = slicedToArray(_useState7, 2),
      mode = _useState8[0],
      setMode = _useState8[1];

  var _useState9 = useState(props.showSpinnerOnSelect || false),
      _useState10 = slicedToArray(_useState9, 2),
      showSpinnerOnSelect = _useState10[0],
      setShowSpinnerOnSelect = _useState10[1];

  var handleCommandPanelModeChaned = function handleCommandPanelModeChaned(mode, prevMode) {
    setMode(mode);
    setCommands(DEFAULT_SUGGESTIONS.filter(function (item) {
      if (!mode) return item;else if (item.mode === mode) return item;
    }));
    if (mode === "QUICK_SEARCH") setHotkeys(DEFAULT_QUICK_SEARCH_HOTKEYS);else if (mode === "GIT") setHotkeys(DEFAULT_GIT_MODE_HOTKEYS);else setHotkeys(DEFAULT_HOTKEYS);
  };

  return /*#__PURE__*/React.createElement(CommandPalette, {
    commands: commands,
    closeOnSelect: closeOnSelect,
    header: ModalCommandPanelHeader(mode),
    highlightFirstSuggestion: true,
    hotKeys: hotkeys,
    maxDisplayed: 100,
    mode: mode,
    onCommandPanelModeChanged: handleCommandPanelModeChaned,
    onSelect: function onSelect(command) {
      alert("A suggested command was selected: \n\n      ".concat(JSON.stringify(command), "\n      "));
    },
    placeholder: "Type your query",
    renderCommand: QuerySuggestions,
    resetInputOnClose: true,
    showSpinnerOnSelect: showSpinnerOnSelect,
    theme: ModalCommandPanelTheme
  });
}

export default ModalCommandPanel;
//# sourceMappingURL=main.es.js.map