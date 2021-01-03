module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "6Fm8":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "M0WP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuthDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const AuthStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);
const AuthDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);

const authReducer = (state, action) => {
  switch (action.type) {
    case "auth_login":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "auth",
        title: "Log in"
      });

    case "auth_signup":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "auth",
        title: "Sign in"
      });

    case "login":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "login",
        title: "Log in"
      });

    case "signup":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "signup",
        title: "Finish signing up"
      });

    case "forgot_password":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "forgot_password",
        title: "Forgot password"
      });

    case "exists":
      return _objectSpread(_objectSpread({}, state), {}, {
        display: "exists",
        title: "Account exists"
      });

    default:
      return state;
  }
};

const AuthProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(authReducer, {
    display: "auth",
    title: "Log in"
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthDispatchContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};

const useAuthState = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthStateContext);

  if (!context) {
    throw new Error("useAuthState must be used within a ToggleProvider");
  }

  return context;
};

const useAuthDispatch = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthDispatchContext);

  if (!context) {
    throw new Error("useAuthDispatch must be used within a ToggleProvider");
  }

  return context;
};



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/auth.tsx
var auth = __webpack_require__("M0WP");

// EXTERNAL MODULE: ./context/stay.tsx
var stay = __webpack_require__("pl4W");

// EXTERNAL MODULE: ./context/toggle.tsx
var toggle = __webpack_require__("m4+O");

// CONCATENATED MODULE: ./context/provider.tsx


/** Provider */



const ContextProvider = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(auth["a" /* AuthProvider */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(toggle["a" /* ToggleProvider */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(stay["a" /* StayProvider */], {
        children: children
      })
    })
  });
};
// EXTERNAL MODULE: ./styles/global.scss
var global = __webpack_require__("6Fm8");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Vacation Rentals, Homes, Experiences & Places - Airbnb"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContextProvider, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })]
  });
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const data = {}; // Can send requests for app
  // const client = APIClient(ctx);
  // const { data } = await client.get('...');

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return _objectSpread({
    pageProps
  }, data);
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "m4+O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useToggleDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useToggleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ToggleStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);
const ToggleDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);

const toggleReducer = (state, action) => {
  switch (action.type) {
    case "toggle_privacy":
      return _objectSpread(_objectSpread({}, state), {}, {
        privacy: !state.privacy
      });

    case "toggle_menu":
      return _objectSpread(_objectSpread({}, state), {}, {
        menu: !state.menu
      });

    case "toggle_auth":
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: !state.auth,
        menu: !state.menu
      });

    case "toggle_globe":
      return _objectSpread(_objectSpread({}, state), {}, {
        globe: !state.globe
      });

    case "toggle_location":
      return _objectSpread(_objectSpread({}, state), {}, {
        location: !state.location,
        guests: false,
        check: false
      });

    case "toggle_guests":
      return _objectSpread(_objectSpread({}, state), {}, {
        guests: !state.guests,
        location: false,
        check: false
      });

    case "toggle_checkin":
      return _objectSpread(_objectSpread({}, state), {}, {
        checkin: !state.checkin,
        checkout: false,
        location: false,
        guests: false
      });

    case "toggle_checkout":
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: !state.checkout,
        checkin: false,
        location: false,
        guests: false
      });

    case "close_register":
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: !state.auth
      });

    default:
      return state;
  }
};

const ToggleProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(toggleReducer, {
    privacy: true,
    menu: false,
    auth: false,
    globe: false,
    location: false,
    guests: false,
    checkin: false,
    checkout: false
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ToggleStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ToggleDispatchContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};

const useToggleState = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ToggleStateContext);

  if (!context) {
    throw new Error("useToggleState must be used within a ToggleProvider");
  }

  return context;
};

const useToggleDispatch = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ToggleDispatchContext);

  if (!context) {
    throw new Error("useToggleDispatch must be used within a ToggleProvider");
  }

  return context;
};



/***/ }),

/***/ "pl4W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useStayState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStayDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StayProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StayStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);
const StayDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);

const stayReducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case "reset":
      return _objectSpread(_objectSpread({}, state), {}, {
        place: undefined,
        guests: 1,
        address: "",
        property: undefined,
        stay: "Entire place",
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        country: "Canada",
        street: "",
        apt: "",
        city: "",
        state: "",
        postal: "",
        amenities: [],
        safeties: [],
        spaces: [],
        description: "",
        title: "",
        phone: 0,
        smoking: undefined,
        events: undefined,
        details: [],
        notice: 0,
        checkinFrom: 3,
        checkinTo: undefined,
        advance: 0,
        min: 1,
        max: 2,
        basePrice: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        currency: "USD",
        photos: []
      });

    case "add":
      return _objectSpread(_objectSpread({}, state), payload);

    default:
      return state;
  }
};

const StayProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(stayReducer, {
    place: undefined,
    guests: 1,
    address: "",
    property: undefined,
    stay: "Entire place",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    country: "Canada",
    street: "",
    apt: "",
    city: "",
    state: "",
    postal: "",
    amenities: [],
    safeties: [],
    spaces: [],
    description: "",
    title: "",
    phone: 0,
    smoking: undefined,
    events: undefined,
    details: [],
    notice: 0,
    checkinFrom: 3,
    checkinTo: undefined,
    advance: 0,
    min: 0,
    max: 0,
    photos: []
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StayStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StayDispatchContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};

const useStayState = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StayStateContext);

  if (!context) {
    throw new Error("useStayState must be used within a StayProvider");
  }

  return context;
};

const useStayDispatch = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StayDispatchContext);

  if (!context) {
    throw new Error("useStayDispatch must be used within a StayProvider");
  }

  return context;
};



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });