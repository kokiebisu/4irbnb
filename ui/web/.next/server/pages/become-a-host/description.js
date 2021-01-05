module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FKr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"w--privacy": "button_w--privacy__3Zhsj",
	"bg__paginate": "button_bg__paginate__2qhr4",
	"hover__auth": "button_hover__auth__2Odn_",
	"hover__close": "button_hover__close__18I_3",
	"hover__filter": "button_hover__filter__ugdXA"
};


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KakI");


/***/ }),

/***/ "18ll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Bullet; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// CONCATENATED MODULE: ./components/atoms/bullet/bullet.amenity.tsx



/** styles */




/** vectors */


/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */

const AmenityBullet = ({
  amenityType = "kitchen",
  removed = false
}) => {
  const amenityTypes = {
    smoke: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["Z" /* SmokeAlarm */], {
        width: 24
      }),
      description: "Smoke alarm"
    },
    tv: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["eb" /* TV */], {
        width: 24
      }),
      description: "TV"
    },
    kitchen: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["J" /* Kitchen */], {
        width: 24
      }),
      description: "Kitchen"
    },
    heating: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["F" /* Heating */], {
        width: 24
      }),
      description: "Heating"
    },
    entrance: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["T" /* PrivateEntrance */], {
        width: 24
      }),
      description: "Private entrance"
    },
    carbon: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["f" /* CarbonMonoxideAlarm */], {
        width: 24
      }),
      description: "Carbon monoxide alarm"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["p--4"], shape_module_default.a["w--50p"]].join(" "),
    children: [amenityTypes[amenityType].icon, removed ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("s", {
      className: [space_module_default.a["m-l--16"], font_module_default.a["weight--100"]].join(" "),
      children: amenityTypes[amenityType].description
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: [space_module_default.a["m-l--16"], font_module_default.a["weight--100"]].join(" "),
      children: amenityTypes[amenityType].description
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.bring.tsx



/** styles **/


/** vectors */


/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */

const BringBullet = ({
  title = "Description here"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["i" /* CheckInverse */], {
        width: 24
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: title
      })
    })]
  });
};
// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// CONCATENATED MODULE: ./helper/time.ts
const displayDuration = time => {
  if (time % 60 !== 0) {
    return `${time} mins`;
  }

  if (time / 60 > 1) {
    return `${time / 60} hours`;
  }

  return '1 hour';
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.characteristics.tsx



/** styles **/




/** vectors */


/** Helpers */


/**
 * Renders the characteristic bullet
 * @param {string} characteristic - Type of characteristics
 * @param {number} time - Time it takes for the experience
 * @param {string[]} devices - Devices allowed for the experience
 * @param {number} people - Number of people that can join
 * @param {group} group - Number of people that can join a private group
 * @param {string[]} languages - Languages the host can speak
 */

const CharacteristicBullet = ({
  characteristic = "house",
  time = 60,
  devices = ["computer", "smartphone"],
  people = 10,
  group = 100,
  languages = ["English", "Chinese"]
}) => {
  const characteristics = {
    house: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["I" /* House */], {
        width: 24
      }),
      title: "Entire home",
      description: "You’ll have the farm stay to yourself."
    },
    sparkle: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["bb" /* Sparkle */], {
        width: 24
      }),
      title: "Enhanced Clean",
      description: "This host committed to Airbnb's 5-step enhanced cleaning process."
    },
    door: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["v" /* Door */], {
        width: 24
      }),
      title: "Self check-in",
      description: "You can check in with the doorman."
    },
    calendar: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["e" /* Calendar */], {
        width: 24
      }),
      title: "Cancellation policy",
      description: "Add your trip dates to get the cancellation details for this stay."
    },
    guidelines: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["D" /* Guidelines */], {
        width: 24
      }),
      title: "House rules",
      description: "The host doesn’t allow pets, parties, or smoking."
    },
    time: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["fb" /* Time */], {
        width: 32
      }),
      title: displayDuration(time)
    },
    devices: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["s" /* Devices */], {
        width: 32
      }),
      title: `Join from your ${devices}`
    },
    people: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["Q" /* People */], {
        width: 32
      }),
      title: `Up to ${people} people. Private groups available for up to ${group}`
    },
    language: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["K" /* Language */], {
        width: 32
      }),
      title: `Hosted in ${languages} (Simplified)`
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], space_module_default.a["m-v--8"], layout_module_default.a["items-center"], space_module_default.a["p-r--8"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--14"]].join(" "),
      children: characteristics[characteristic].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [characteristics[characteristic].description ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["ls--3"], space_module_default.a["m-b--4"], color_module_default.a["c--gray__3"], font_module_default.a["size--16"], font_module_default.a["weight--500"]].join(" "),
        children: characteristics[characteristic].title
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: characteristics[characteristic].title
      }), characteristics[characteristic].description && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], font_module_default.a["size--14"]].join(" "),
        children: characteristics[characteristic].description
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.check.tsx



/** styles */




/** vectors */


const CheckBullet = ({
  title = "Title here"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["j" /* CheckPlain */], {
        width: 24,
        strokeWidth: 2,
        stroke: "green"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--18"], color_module_default.a["c--gray__1"]].join(" "),
        children: title
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.experience.tsx



/** vectors */

/** styles **/




/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */

const ExperienceBullet = ({
  experience = "hosts"
}) => {
  const experiences = {
    hosts: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["H" /* Host */], {
        width: 36
      }),
      title: "Thoughtful hosts",
      description: "Get to know hosts who share their expertise and a window to their world."
    },
    activities: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["a" /* Activities */], {
        width: 36
      }),
      title: "Small group activities",
      description: "Meet people from all over the world while learning something new together."
    },
    global: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["q" /* Computer */], {
        width: 36
      }),
      title: "Simple and global",
      description: "Join easily and participate from home without a lot of prep."
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--16"]].join(" "),
      children: experiences[experience].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--16"]].join(" "),
          children: experiences[experience].title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: experiences[experience].description
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.help.tsx



/** vectors */

/** styles **/




/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */

const HelpBullet = ({
  help = "support"
}) => {
  const helps = {
    support: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["r" /* CustomerService */], {
        width: 28
      }),
      title: "24/7 customer support",
      description: "From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way."
    },
    tools: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["gb" /* ToolBox */], {
        width: 28
      }),
      title: "Tools to help you succeed",
      description: "Our tools make it easy to set the right prices, manage reservations, message with guests, receive payments, track earnings, and more."
    },
    insights: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["b" /* Analytics */], {
        width: 28
      }),
      title: "Personalized insights",
      description: "We'll share local travel trends and suggest ways to improve to help you earn great reviews and grow your business."
    },
    education: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["x" /* Education */], {
        width: 28
      }),
      title: "Education and training",
      description: "Find guidance in the Resource Centre, join a free webinar on hosting basics, and connect with other hosts in our Community Centre."
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--16"]].join(" "),
      children: helps[help].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--6"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: helps[help].title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--16"], font_module_default.a["lh--15"]].join(" "),
          children: helps[help].description
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.host.tsx



/** styles **/



/** vectors */


/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */

const HostBullet = ({
  categoryType = "review",
  total = 100
}) => {
  const categories = {
    review: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
        width: 16
      }),
      description: `${total} Reviews`
    },
    verified: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["ib" /* Verified */], {
        width: 16
      }),
      description: "Identity verified"
    },
    superhost: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["db" /* Superhost */], {
        width: 16
      }),
      description: "Superhost"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["m-r--18"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--8"]].join(" "),
      children: categories[categoryType].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: [font_module_default.a["weight--100"]].join(" "),
      children: categories[categoryType].description
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.know.tsx



/** vectors */

/** styles **/




/**
 * Renders the know bullet
 * @param {string} categoryType - Type of know bullet
 * @param {Object[]} checkin - Time range for checkin
 * @param {string} checkout - Time for checkin
 */

const KnowBullet = ({
  categoryType = "checkin",
  checkin = {
    min: "3:00 p.m.",
    max: "12:00 a.m."
  },
  checkout = "11:00 a.m."
}) => {
  const categories = {
    checkin: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["o" /* Clock */], {
        width: 14
      }),
      description: `Check-in: ${checkin.min}–${checkin.max}`
    },
    checkout: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["o" /* Clock */], {
        width: 14
      }),
      description: `Checkout: ${checkout}`
    },
    self: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["l" /* Checkin */], {
        width: 14
      }),
      description: "Self check-in with lockbox"
    },
    children: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["m" /* Children */], {
        width: 14
      }),
      description: "Not suitable for children and infants"
    },
    smoking: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["ab" /* Smoking */], {
        width: 14
      }),
      description: "No smoking"
    },
    pets: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["R" /* Pets */], {
        width: 14
      }),
      description: "No pets"
    },
    parties: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["P" /* Parties */], {
        width: 14
      }),
      description: "No parties or events"
    },
    cleaning: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["n" /* Cleaning */], {
        width: 14
      }),
      description: "Committed to Airbnb's enhanced cleaning process."
    },
    distancing: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["u" /* Distancing */], {
        width: 14
      }),
      description: "Airbnb's social-distancing and other COVID-19-related guidelines apply"
    },
    caution: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["g" /* Caution */], {
        width: 14
      }),
      description: "Nearby lake, river, other body of water"
    },
    check: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["h" /* Check */], {
        width: 14
      }),
      description: "Carbon monoxide alarm"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--12"]].join(" "),
      children: categories[categoryType].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["weight--100"], font_module_default.a["size--16"]].join(" "),
        children: categories[categoryType].description
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.onlinehost.tsx



/** vectors */

/** styles **/



const bullet_onlinehost_types = {
  home: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["G" /* Home */], {}),
    title: "Host from home",
    description: "Share your expertise and a window to your world"
  },
  global: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["A" /* Global */], {}),
    title: "Meet global guests",
    description: "Make the world feel a little smaller and a lot friendlier."
  },
  business: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["L" /* Lightening */], {}),
    title: "Build a business",
    description: "Earn money doing something you love with support from Airbnb."
  },
  resources: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      style: {
        width: 40
      },
      src: "https://a0.muscache.com/pictures/6fccb4f8-e134-40a9-9863-b0d42923db62.jpg"
    }),
    title: "Resources",
    description: "Guidelines, tips, and tricks for hosting successful online experiences."
  },
  events: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      style: {
        width: 40
      },
      src: "https://a0.muscache.com/pictures/11f05488-4ea5-4b54-a1a2-755c006e803f.jpg"
    }),
    title: "Online events",
    description: "Learn to master the art of hosting, online and otherwise."
  },
  community: {
    icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      style: {
        width: 40
      },
      src: "https://a0.muscache.com/pictures/639bef93-4cc4-4676-9d83-705093a3d2e6.jpg"
    }),
    title: "Community support",
    description: "Connect with other hosts through Facebook groups and meetups."
  }
};
const OnlineHostBullet = ({
  type = "home"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: bullet_onlinehost_types[type].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: bullet_onlinehost_types[type].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [font_module_default.a["size--14"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: bullet_onlinehost_types[type].description
      })
    })]
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// CONCATENATED MODULE: ./components/atoms/bullet/bullet.priority.tsx



/** vectors */


/** components */


/** styles **/



/**
 * Renders the priority bullet
 * @param {string} priority - Type of priority bullet
 */

const PriorityBullet = ({
  priority = "protection"
}) => {
  const categories = {
    protection: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["V" /* Protection */], {
        width: 40
      }),
      title: "Host insurance and protection",
      description: "To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.",
      link: "How you're protected while hosting"
    },
    guidance: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["C" /* Guidance */], {
        width: 40
      }),
      title: "COVID-19 safety guidance and support",
      description: "To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
      link: "Explore the enhanced cleaning process"
    },
    requirements: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["W" /* Requirements */], {
        width: 40
      }),
      title: "Requirements for all guests",
      description: "To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.",
      link: "Steps we take to help hosts feel confident"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: categories[priority].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--24"]].join(" "),
        children: categories[priority].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--32"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: categories[priority].description
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        onClick: () => router_default.a.push("/"),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: categories[priority].link
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.question.tsx


/** styles */



const QuestionBullet = ({
  title = "Question here",
  answer = "Answer here"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [space_module_default.a["p-v--16"], color_module_default.a["b-b--white__1"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--17"], color_module_default.a["c--darkgreen__3"]].join(" "),
        children: title
      })
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.rating.tsx



/** vectors */

/** styles **/





/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */

const RatingBullet = ({
  ratings = 5,
  reviews = 100
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
        height: 14
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: [space_module_default.a["p-l--4"], color_module_default.a["c--g__2"], font_module_default.a["size--14"]].join(" "),
      children: ratings
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: [space_module_default.a["p-l--4"], color_module_default.a["c--gray__1"], font_module_default.a["size--14"], font_module_default.a["weight--100"]].join(" "),
      children: ["(", reviews, ")"]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.required.tsx



/** vectors */

/** styles **/





const RequiredBullet = ({
  message
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--4"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["z" /* Exclamation */], {
        width: 16,
        stroke: "#C54A32",
        strokeWidth: 2
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--12"], color_module_default.a["c--warning"]].join(" "),
        children: message
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.score.tsx



/** styles **/





/**
 * Renders the score bullet
 * @param {string} category - Type of score bullet
 * @param {number} average - Average score
 */

const ScoreBullet = ({
  category = "Aspect",
  average = 5.0
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p-v--2"], layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"], space_module_default.a["w--50p"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: [font_module_default.a["weight--300"]].join(" "),
      children: category
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["w-full"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [color_module_default.a["bg--white__3"], layout_module_default.a["relative"], space_module_default.a["h__4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: [layout_module_default.a["absolute"], layout_module_default.a["t--0"], layout_module_default.a["l--0"], layout_module_default.a["b--0"], layout_module_default.a["bg--black"], space_module_default.a["w--50p"]].join(" ")
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [space_module_default.a["p-r--16"], font_module_default.a["size--12"]].join(" "),
        children: average
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/bullet.scenario.tsx



/** styles */


const ScenarioBullet = ({
  type = "available"
}) => {
  const types = {
    available: {
      imgUrl: "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png",
      title: "You're available to host starting Dec. 21",
      description: "Lou is planning her trip and thinks your listing is perfect."
    },
    requirements: {
      imgUrl: "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-arrival-534375c0dfd3291d3073949a00555d3c.png",
      title: "Guests who meet Airbnb requirements can instantly book.",
      description: "In addition to meeting guest requirements, Lou agrees to your House Rules"
    },
    confirmation: {
      imgUrl: "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png",
      title: "Guests send a message with their booking confirmation.",
      description: "Lou says she'll be in town for work and she'd love to stay with you."
    },
    welcome: {
      imgUrl: "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-keys-illo-11711142d4585a536643dddb8234bf3f.png",
      title: "Welcome guests to your space",
      description: "Before Lou arrives, coordinate details like check-in time and key exchange."
    },
    paid: {
      imgUrl: "https://a0.muscache.com/airbnb/static/list_your_space/Illustration_WomanLaptop-6645d479058f6ae5d5aabb66a6fa5e2e.png",
      title: "Get paid",
      description: "The day after Lou checks in, you’ll receive your money, minus a 3% service fee. You can add or change your preferred payout method in your Account Settings."
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          width: 150
        },
        src: types[type].imgUrl,
        alt: "scenario img"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: types[type].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: types[type].description
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/bullet/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** components */
















/**
 * Bundles the bullet components
 * @param {string} extendsTo - Adds custom styyling to the bullet component
 * @param {string} variant - Specify the variant of the bullet
 */
const Bullet = (_ref) => {
  let {
    extendsTo,
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, ["extendsTo", "variant"]);

  const variants = {
    characteristic: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CharacteristicBullet, _objectSpread({}, props)),
    amenity: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AmenityBullet, _objectSpread({}, props)),
    score: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScoreBullet, _objectSpread({}, props)),
    host: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HostBullet, _objectSpread({}, props)),
    know: /*#__PURE__*/Object(jsx_runtime_["jsx"])(KnowBullet, _objectSpread({}, props)),
    rating: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RatingBullet, _objectSpread({}, props)),
    bring: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BringBullet, _objectSpread({}, props)),
    experience: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExperienceBullet, _objectSpread({}, props)),
    priority: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PriorityBullet, _objectSpread({}, props)),
    help: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HelpBullet, _objectSpread({}, props)),
    required: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RequiredBullet, _objectSpread({}, props)),
    onlinehost: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OnlineHostBullet, _objectSpread({}, props)),
    question: /*#__PURE__*/Object(jsx_runtime_["jsx"])(QuestionBullet, _objectSpread({}, props)),
    check: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckBullet, _objectSpread({}, props)),
    scenario: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScenarioBullet, _objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-bullet--atom`,
    className: extendsTo,
    children: variants[variant]
  });
};

/***/ }),

/***/ "1CHd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"c--white": "color_c--white__u8iXF",
	"c__placeholder--white": "color_c__placeholder--white__1H796",
	"bg--white": "color_bg--white__3ZWok",
	"b--white": "color_b--white__14VuE",
	"b-2--white": "color_b-2--white__h_Q-O",
	"b-t--white": "color_b-t--white__2lsS5",
	"b-b--white": "color_b-b--white__3etCt",
	"b-l--white": "color_b-l--white__2a8Hz",
	"b-r--white": "color_b-r--white__2c7Ar",
	"c--white__1": "color_c--white__1__PuA4s",
	"c__placeholder--white__1": "color_c__placeholder--white__1__2nkXt",
	"bg--white__1": "color_bg--white__1__21YEP",
	"b--white__1": "color_b--white__1__2eIev",
	"b-2--white__1": "color_b-2--white__1__rDtb6",
	"b-t--white__1": "color_b-t--white__1__wxUWX",
	"b-b--white__1": "color_b-b--white__1__3HJlO",
	"b-l--white__1": "color_b-l--white__1__1wp9s",
	"b-r--white__1": "color_b-r--white__1__qsEZf",
	"c--white__2": "color_c--white__2__1pyO4",
	"c__placeholder--white__2": "color_c__placeholder--white__2__1q-0T",
	"bg--white__2": "color_bg--white__2__3G8pg",
	"b--white__2": "color_b--white__2__2HoOu",
	"b-2--white__2": "color_b-2--white__2__3oj-L",
	"b-t--white__2": "color_b-t--white__2__8XxVM",
	"b-b--white__2": "color_b-b--white__2__LVeC6",
	"b-l--white__2": "color_b-l--white__2__s3Bi6",
	"b-r--white__2": "color_b-r--white__2__1LwvX",
	"c--white__3": "color_c--white__3__xERtC",
	"c__placeholder--white__3": "color_c__placeholder--white__3__11Ar6",
	"bg--white__3": "color_bg--white__3__2SnS-",
	"b--white__3": "color_b--white__3__tKZJW",
	"b-2--white__3": "color_b-2--white__3__3pNzQ",
	"b-t--white__3": "color_b-t--white__3__3XYMB",
	"b-b--white__3": "color_b-b--white__3__29Yaf",
	"b-l--white__3": "color_b-l--white__3__2_acp",
	"b-r--white__3": "color_b-r--white__3__2J8kA",
	"c--gray__0": "color_c--gray__0__3eF30",
	"c__placeholder--gray__0": "color_c__placeholder--gray__0__2Sbh4",
	"bg--gray__0": "color_bg--gray__0__2Jfiz",
	"b--gray__0": "color_b--gray__0__1QSEe",
	"b-2--gray__0": "color_b-2--gray__0__3QhZE",
	"b-t--gray__0": "color_b-t--gray__0__3p-ee",
	"b-b--gray__0": "color_b-b--gray__0__2hRUe",
	"b-l--gray__0": "color_b-l--gray__0__SSb9X",
	"b-r--gray__0": "color_b-r--gray__0__1TIL4",
	"c--gray__1": "color_c--gray__1__13Al5",
	"c__placeholder--gray__1": "color_c__placeholder--gray__1__1nc-Y",
	"bg--gray__1": "color_bg--gray__1__3PjuP",
	"b--gray__1": "color_b--gray__1__1PyZm",
	"b-2--gray__1": "color_b-2--gray__1__2l53q",
	"b-t--gray__1": "color_b-t--gray__1__3XuCz",
	"b-b--gray__1": "color_b-b--gray__1__2cjeK",
	"b-l--gray__1": "color_b-l--gray__1__3kDor",
	"b-r--gray__1": "color_b-r--gray__1__12YG4",
	"c--gray__2": "color_c--gray__2__1-P_7",
	"c__placeholder--gray__2": "color_c__placeholder--gray__2__3JJDt",
	"bg--gray__2": "color_bg--gray__2__3pZaR",
	"b--gray__2": "color_b--gray__2__26XBU",
	"b-2--gray__2": "color_b-2--gray__2__3PaoJ",
	"b-t--gray__2": "color_b-t--gray__2__4YbnK",
	"b-b--gray__2": "color_b-b--gray__2__3r8Yl",
	"b-l--gray__2": "color_b-l--gray__2__3N7oL",
	"b-r--gray__2": "color_b-r--gray__2__2VY2K",
	"c--gray__3": "color_c--gray__3__3-hdD",
	"c__placeholder--gray__3": "color_c__placeholder--gray__3__1kwsL",
	"bg--gray__3": "color_bg--gray__3__AUhKA",
	"b--gray__3": "color_b--gray__3__GsNuh",
	"b-2--gray__3": "color_b-2--gray__3__KZe-N",
	"b-t--gray__3": "color_b-t--gray__3__2H-TE",
	"b-b--gray__3": "color_b-b--gray__3__3p7M-",
	"b-l--gray__3": "color_b-l--gray__3__2_IHw",
	"b-r--gray__3": "color_b-r--gray__3__yUMis",
	"c--gray__4": "color_c--gray__4__2UXCX",
	"c__placeholder--gray__4": "color_c__placeholder--gray__4__2VZjP",
	"bg--gray__4": "color_bg--gray__4__UYrVZ",
	"b--gray__4": "color_b--gray__4__1KmR-",
	"b-2--gray__4": "color_b-2--gray__4__2QIak",
	"b-t--gray__4": "color_b-t--gray__4__2pX1y",
	"b-b--gray__4": "color_b-b--gray__4__1BqN2",
	"b-l--gray__4": "color_b-l--gray__4__3eBHU",
	"b-r--gray__4": "color_b-r--gray__4__1CN4q",
	"c--lightred__0": "color_c--lightred__0__3UFS3",
	"c__placeholder--lightred__0": "color_c__placeholder--lightred__0__1y51u",
	"bg--lightred__0": "color_bg--lightred__0__1x8zK",
	"b--lightred__0": "color_b--lightred__0__14hTn",
	"b-2--lightred__0": "color_b-2--lightred__0__2Jlpb",
	"b-t--lightred__0": "color_b-t--lightred__0__H_zL9",
	"b-b--lightred__0": "color_b-b--lightred__0__1lwjd",
	"b-l--lightred__0": "color_b-l--lightred__0__2MS_-",
	"b-r--lightred__0": "color_b-r--lightred__0__32xUA",
	"c--warning": "color_c--warning__1yHG_",
	"c__placeholder--warning": "color_c__placeholder--warning__35cWN",
	"bg--warning": "color_bg--warning__2C8ya",
	"b--warning": "color_b--warning__DJkfX",
	"b-2--warning": "color_b-2--warning__2Pljv",
	"b-t--warning": "color_b-t--warning__3BE0I",
	"b-b--warning": "color_b-b--warning__RFbvO",
	"b-l--warning": "color_b-l--warning__2qsny",
	"b-r--warning": "color_b-r--warning__IeZS0",
	"c--red__2": "color_c--red__2__1fOkg",
	"c__placeholder--red__2": "color_c__placeholder--red__2__1nn-W",
	"bg--red__2": "color_bg--red__2__3UUnU",
	"b--red__2": "color_b--red__2__KY-eb",
	"b-2--red__2": "color_b-2--red__2__2srRr",
	"b-t--red__2": "color_b-t--red__2__18ejJ",
	"b-b--red__2": "color_b-b--red__2__1cdD6",
	"b-l--red__2": "color_b-l--red__2__RHz4g",
	"b-r--red__2": "color_b-r--red__2__DGdQ6",
	"c--black": "color_c--black__1GUy3",
	"c__placeholder--black": "color_c__placeholder--black__37EJ9",
	"bg--black": "color_bg--black__jvptH",
	"b--black": "color_b--black__2Ejvi",
	"b-2--black": "color_b-2--black__BCAZ6",
	"b-t--black": "color_b-t--black__2nVmD",
	"b-b--black": "color_b-b--black__QrQ_N",
	"b-l--black": "color_b-l--black__2Kdmy",
	"b-r--black": "color_b-r--black__2K7nc",
	"c--darkgreen__3": "color_c--darkgreen__3__cA9qa",
	"c__placeholder--darkgreen__3": "color_c__placeholder--darkgreen__3__3txnO",
	"bg--darkgreen__3": "color_bg--darkgreen__3__2Tose",
	"b--darkgreen__3": "color_b--darkgreen__3__3DEhl",
	"b-2--darkgreen__3": "color_b-2--darkgreen__3__1ZuLv",
	"b-t--darkgreen__3": "color_b-t--darkgreen__3__29mkM",
	"b-b--darkgreen__3": "color_b-b--darkgreen__3__3OaCU",
	"b-l--darkgreen__3": "color_b-l--darkgreen__3__1lfAq",
	"b-r--darkgreen__3": "color_b-r--darkgreen__3__1lt6t",
	"c--green__1": "color_c--green__1__4MefH",
	"c__placeholder--green__1": "color_c__placeholder--green__1__1O7fk",
	"bg--green__1": "color_bg--green__1__3Wl1R",
	"b--green__1": "color_b--green__1__1iW0M",
	"b-2--green__1": "color_b-2--green__1__z3eX_",
	"b-t--green__1": "color_b-t--green__1__RYzdw",
	"b-b--green__1": "color_b-b--green__1__ICAeL",
	"b-l--green__1": "color_b-l--green__1__1oWy9",
	"b-r--green__1": "color_b-r--green__1__1UQvo",
	"c--transparent": "color_c--transparent__3sqLJ",
	"c__placeholder--transparent": "color_c__placeholder--transparent__1en_G",
	"bg--transparent": "color_bg--transparent__XGplj",
	"b--transparent": "color_b--transparent__3H6Bv",
	"b-2--transparent": "color_b-2--transparent__VpjfS",
	"b-t--transparent": "color_b-t--transparent__1IhSZ",
	"b-b--transparent": "color_b-b--transparent__2MCGV",
	"b-l--transparent": "color_b-l--transparent__qMccM",
	"b-r--transparent": "color_b-r--transparent__3WYVf",
	"b--0": "color_b--0__1KwQK",
	"bg--primary": "color_bg--primary__k9GW_"
};


/***/ }),

/***/ "1cX2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"br--1": "shape_br--1__1QZ5Z",
	"btr--1": "shape_btr--1__2Hxi6",
	"bbr--1": "shape_bbr--1__AhYWC",
	"blr--1": "shape_blr--1__2tYev",
	"brr--1": "shape_brr--1__x2G4c",
	"btlr--1": "shape_btlr--1__1yb5H",
	"bblr--1": "shape_bblr--1__1SAQ5",
	"btrr--1": "shape_btrr--1__3Jybl",
	"bbrr--1": "shape_bbrr--1__3zSVS",
	"w--1": "shape_w--1__2s-ui",
	"max-w--1": "shape_max-w--1__20Gik",
	"min-w--1": "shape_min-w--1__2aaeC",
	"h--1": "shape_h--1__19NHz",
	"min-h--1": "shape_min-h--1__OeJO9",
	"br--3": "shape_br--3__1jQKd",
	"btr--3": "shape_btr--3__105cr",
	"bbr--3": "shape_bbr--3__1ZvYs",
	"blr--3": "shape_blr--3__4pTri",
	"brr--3": "shape_brr--3__230am",
	"btlr--3": "shape_btlr--3__2p2Z_",
	"bblr--3": "shape_bblr--3__3wogo",
	"btrr--3": "shape_btrr--3__MWInb",
	"bbrr--3": "shape_bbrr--3__19VeK",
	"w--3": "shape_w--3__17usd",
	"max-w--3": "shape_max-w--3__oqpM8",
	"min-w--3": "shape_min-w--3__2YHKu",
	"h--3": "shape_h--3__3rZ-6",
	"min-h--3": "shape_min-h--3__2Y3i8",
	"br--4": "shape_br--4__2sVX5",
	"btr--4": "shape_btr--4__1h0Ri",
	"bbr--4": "shape_bbr--4__2jweT",
	"blr--4": "shape_blr--4__37p9x",
	"brr--4": "shape_brr--4__3XN-_",
	"btlr--4": "shape_btlr--4__2EXpM",
	"bblr--4": "shape_bblr--4__1VSFD",
	"btrr--4": "shape_btrr--4__tyXew",
	"bbrr--4": "shape_bbrr--4__cydGp",
	"w--4": "shape_w--4__38BLD",
	"max-w--4": "shape_max-w--4__3U1Xn",
	"min-w--4": "shape_min-w--4__49J9V",
	"h--4": "shape_h--4__2J256",
	"min-h--4": "shape_min-h--4__3wjIf",
	"br--5": "shape_br--5__2-0V3",
	"btr--5": "shape_btr--5__31gLl",
	"bbr--5": "shape_bbr--5__g8HHN",
	"blr--5": "shape_blr--5__1yky5",
	"brr--5": "shape_brr--5__27tJY",
	"btlr--5": "shape_btlr--5__31wCS",
	"bblr--5": "shape_bblr--5__17BsW",
	"btrr--5": "shape_btrr--5__16EKE",
	"bbrr--5": "shape_bbrr--5__1PZ7g",
	"w--5": "shape_w--5__1VS5Z",
	"max-w--5": "shape_max-w--5__Pk4Xh",
	"min-w--5": "shape_min-w--5__1oF2D",
	"h--5": "shape_h--5__seSpg",
	"min-h--5": "shape_min-h--5__wwICH",
	"br--6": "shape_br--6__3acKt",
	"btr--6": "shape_btr--6__254X0",
	"bbr--6": "shape_bbr--6__4SSzR",
	"blr--6": "shape_blr--6__mVUXU",
	"brr--6": "shape_brr--6__3dJMP",
	"btlr--6": "shape_btlr--6__2S5kB",
	"bblr--6": "shape_bblr--6__37DIP",
	"btrr--6": "shape_btrr--6__RIevF",
	"bbrr--6": "shape_bbrr--6__vU3RG",
	"w--6": "shape_w--6__3Rrkb",
	"max-w--6": "shape_max-w--6__3xhWC",
	"min-w--6": "shape_min-w--6__aJbAf",
	"h--6": "shape_h--6__1sCqv",
	"min-h--6": "shape_min-h--6__2Ajj6",
	"br--8": "shape_br--8__3Gxho",
	"btr--8": "shape_btr--8__3_7tx",
	"bbr--8": "shape_bbr--8__2s5vr",
	"blr--8": "shape_blr--8__oTRSP",
	"brr--8": "shape_brr--8__F-8ou",
	"btlr--8": "shape_btlr--8__2v8z_",
	"bblr--8": "shape_bblr--8__2P3S7",
	"btrr--8": "shape_btrr--8__3uG4m",
	"bbrr--8": "shape_bbrr--8__1lzPz",
	"w--8": "shape_w--8__399MR",
	"max-w--8": "shape_max-w--8__JPGSv",
	"min-w--8": "shape_min-w--8__3xPUI",
	"h--8": "shape_h--8__3Piex",
	"min-h--8": "shape_min-h--8__30FpN",
	"br--10": "shape_br--10__2WA7I",
	"btr--10": "shape_btr--10__mSuhk",
	"bbr--10": "shape_bbr--10__2Ge9H",
	"blr--10": "shape_blr--10__12Hj5",
	"brr--10": "shape_brr--10__3-PSG",
	"btlr--10": "shape_btlr--10__jGjmJ",
	"bblr--10": "shape_bblr--10__1AyOH",
	"btrr--10": "shape_btrr--10__QTTDF",
	"bbrr--10": "shape_bbrr--10__O1gl9",
	"w--10": "shape_w--10__1QcCS",
	"max-w--10": "shape_max-w--10__1Hf8W",
	"min-w--10": "shape_min-w--10__3xbhG",
	"h--10": "shape_h--10__2CH59",
	"min-h--10": "shape_min-h--10__2q0Q1",
	"br--12": "shape_br--12__1wLMX",
	"btr--12": "shape_btr--12__2xOlM",
	"bbr--12": "shape_bbr--12__x3h8u",
	"blr--12": "shape_blr--12__27cXN",
	"brr--12": "shape_brr--12__2WA4c",
	"btlr--12": "shape_btlr--12__3OK5z",
	"bblr--12": "shape_bblr--12__3AvaD",
	"btrr--12": "shape_btrr--12__6zVoP",
	"bbrr--12": "shape_bbrr--12__ZUfyS",
	"w--12": "shape_w--12__3nWaB",
	"max-w--12": "shape_max-w--12__1BqQc",
	"min-w--12": "shape_min-w--12__2BSuU",
	"h--12": "shape_h--12__3IiPA",
	"min-h--12": "shape_min-h--12__P_43V",
	"br--13": "shape_br--13__2zz9t",
	"btr--13": "shape_btr--13__2skjw",
	"bbr--13": "shape_bbr--13__2RBW8",
	"blr--13": "shape_blr--13__289GB",
	"brr--13": "shape_brr--13__3SSQs",
	"btlr--13": "shape_btlr--13__28pN9",
	"bblr--13": "shape_bblr--13__2REVP",
	"btrr--13": "shape_btrr--13__1PsIh",
	"bbrr--13": "shape_bbrr--13__1AMHS",
	"w--13": "shape_w--13__396Mu",
	"max-w--13": "shape_max-w--13__1sXnp",
	"min-w--13": "shape_min-w--13__hl7xq",
	"h--13": "shape_h--13__eVq-s",
	"min-h--13": "shape_min-h--13__3Giy6",
	"br--14": "shape_br--14__1w_yf",
	"btr--14": "shape_btr--14__2wH6l",
	"bbr--14": "shape_bbr--14__271Ir",
	"blr--14": "shape_blr--14__elT-g",
	"brr--14": "shape_brr--14__1nWqw",
	"btlr--14": "shape_btlr--14__6LaHz",
	"bblr--14": "shape_bblr--14__3-uAO",
	"btrr--14": "shape_btrr--14__2jLzW",
	"bbrr--14": "shape_bbrr--14__1CtAh",
	"w--14": "shape_w--14__3Pviv",
	"max-w--14": "shape_max-w--14__2vkf_",
	"min-w--14": "shape_min-w--14__10_B7",
	"h--14": "shape_h--14__1J4ko",
	"min-h--14": "shape_min-h--14__1xB5D",
	"br--15": "shape_br--15__13Ncd",
	"btr--15": "shape_btr--15__1XVKa",
	"bbr--15": "shape_bbr--15__VIcaO",
	"blr--15": "shape_blr--15__DR5UX",
	"brr--15": "shape_brr--15__3Xp_T",
	"btlr--15": "shape_btlr--15__Y0cdi",
	"bblr--15": "shape_bblr--15__3tFQb",
	"btrr--15": "shape_btrr--15__JOYjd",
	"bbrr--15": "shape_bbrr--15__2ImkJ",
	"w--15": "shape_w--15__39jff",
	"max-w--15": "shape_max-w--15__7HX7K",
	"min-w--15": "shape_min-w--15__3giih",
	"h--15": "shape_h--15__1fkGm",
	"min-h--15": "shape_min-h--15__R_q_Y",
	"br--16": "shape_br--16__1YYlo",
	"btr--16": "shape_btr--16__97Mb0",
	"bbr--16": "shape_bbr--16__2jfgX",
	"blr--16": "shape_blr--16__UPaii",
	"brr--16": "shape_brr--16__2HzxP",
	"btlr--16": "shape_btlr--16__LwQO5",
	"bblr--16": "shape_bblr--16__3R6dH",
	"btrr--16": "shape_btrr--16__TaMtb",
	"bbrr--16": "shape_bbrr--16__3c444",
	"w--16": "shape_w--16__24BwH",
	"max-w--16": "shape_max-w--16__vgVL_",
	"min-w--16": "shape_min-w--16__36q84",
	"h--16": "shape_h--16__7bFxR",
	"min-h--16": "shape_min-h--16__2fJAx",
	"br--17": "shape_br--17__AIApt",
	"btr--17": "shape_btr--17__3yIBz",
	"bbr--17": "shape_bbr--17__nK5TI",
	"blr--17": "shape_blr--17__1Awas",
	"brr--17": "shape_brr--17__1mgGE",
	"btlr--17": "shape_btlr--17__j6VXH",
	"bblr--17": "shape_bblr--17___AylE",
	"btrr--17": "shape_btrr--17__muaQ3",
	"bbrr--17": "shape_bbrr--17__2SdFQ",
	"w--17": "shape_w--17__39qdt",
	"max-w--17": "shape_max-w--17__SntkE",
	"min-w--17": "shape_min-w--17__29sXi",
	"h--17": "shape_h--17__24-m6",
	"min-h--17": "shape_min-h--17__2AscC",
	"br--18": "shape_br--18__F-tu9",
	"btr--18": "shape_btr--18__1Zi-Q",
	"bbr--18": "shape_bbr--18__3Id1O",
	"blr--18": "shape_blr--18__kRpZf",
	"brr--18": "shape_brr--18__1B_fA",
	"btlr--18": "shape_btlr--18__1BJOc",
	"bblr--18": "shape_bblr--18__2qB6V",
	"btrr--18": "shape_btrr--18__3CFdD",
	"bbrr--18": "shape_bbrr--18__2_2M1",
	"w--18": "shape_w--18__1fa-9",
	"max-w--18": "shape_max-w--18__6bfzJ",
	"min-w--18": "shape_min-w--18__2Z2JG",
	"h--18": "shape_h--18__1L82O",
	"min-h--18": "shape_min-h--18__3hhQF",
	"br--19": "shape_br--19__2DVwt",
	"btr--19": "shape_btr--19__3Z2Qw",
	"bbr--19": "shape_bbr--19__2SgWL",
	"blr--19": "shape_blr--19__1h46n",
	"brr--19": "shape_brr--19__iuUFC",
	"btlr--19": "shape_btlr--19__1MKNv",
	"bblr--19": "shape_bblr--19__6EaqY",
	"btrr--19": "shape_btrr--19__28xaQ",
	"bbrr--19": "shape_bbrr--19__1LDf-",
	"w--19": "shape_w--19__3i2Xl",
	"max-w--19": "shape_max-w--19__33IxC",
	"min-w--19": "shape_min-w--19__1cp5j",
	"h--19": "shape_h--19__VyjwV",
	"min-h--19": "shape_min-h--19__1FvYk",
	"br--20": "shape_br--20__1I36U",
	"btr--20": "shape_btr--20__Mw723",
	"bbr--20": "shape_bbr--20__23KYx",
	"blr--20": "shape_blr--20__15yBw",
	"brr--20": "shape_brr--20__umk73",
	"btlr--20": "shape_btlr--20__2-5Nr",
	"bblr--20": "shape_bblr--20__NUY9_",
	"btrr--20": "shape_btrr--20__2bf5J",
	"bbrr--20": "shape_bbrr--20__3lBW9",
	"w--20": "shape_w--20__IJK_p",
	"max-w--20": "shape_max-w--20__3NolT",
	"min-w--20": "shape_min-w--20__3Um7R",
	"h--20": "shape_h--20__133y6",
	"min-h--20": "shape_min-h--20__3afTU",
	"br--25": "shape_br--25__2kpsq",
	"btr--25": "shape_btr--25__1nNNt",
	"bbr--25": "shape_bbr--25__2xJuB",
	"blr--25": "shape_blr--25__3lSua",
	"brr--25": "shape_brr--25__3s2Ym",
	"btlr--25": "shape_btlr--25__2YhMz",
	"bblr--25": "shape_bblr--25__3nIIS",
	"btrr--25": "shape_btrr--25__2WKqQ",
	"bbrr--25": "shape_bbrr--25__p9j_d",
	"w--25": "shape_w--25__1gWmP",
	"max-w--25": "shape_max-w--25__2pHPp",
	"min-w--25": "shape_min-w--25__2jUHk",
	"h--25": "shape_h--25__2G8ZA",
	"min-h--25": "shape_min-h--25__3sZDX",
	"br--30": "shape_br--30__nNbLk",
	"btr--30": "shape_btr--30__2lDnL",
	"bbr--30": "shape_bbr--30__3u4Zq",
	"blr--30": "shape_blr--30__cC3eq",
	"brr--30": "shape_brr--30__1T-DD",
	"btlr--30": "shape_btlr--30__2xKaV",
	"bblr--30": "shape_bblr--30__169N6",
	"btrr--30": "shape_btrr--30__3HWge",
	"bbrr--30": "shape_bbrr--30__2Tcto",
	"w--30": "shape_w--30__2PCGu",
	"max-w--30": "shape_max-w--30__1LZyv",
	"min-w--30": "shape_min-w--30__YhWHL",
	"h--30": "shape_h--30__1pAev",
	"min-h--30": "shape_min-h--30__3E8oS",
	"br--32": "shape_br--32__2uV9w",
	"btr--32": "shape_btr--32__1zMG0",
	"bbr--32": "shape_bbr--32__1sR5p",
	"blr--32": "shape_blr--32__egaO7",
	"brr--32": "shape_brr--32__2YYSX",
	"btlr--32": "shape_btlr--32__A9mey",
	"bblr--32": "shape_bblr--32__sl7VO",
	"btrr--32": "shape_btrr--32__CKH4y",
	"bbrr--32": "shape_bbrr--32__3mEAG",
	"w--32": "shape_w--32__2HL4H",
	"max-w--32": "shape_max-w--32__3IiFw",
	"min-w--32": "shape_min-w--32__3k-_T",
	"h--32": "shape_h--32__2gA5J",
	"min-h--32": "shape_min-h--32__3h-Id",
	"br--35": "shape_br--35__1HJL-",
	"btr--35": "shape_btr--35___6-yS",
	"bbr--35": "shape_bbr--35__1apGD",
	"blr--35": "shape_blr--35__1Pcnn",
	"brr--35": "shape_brr--35__pws-K",
	"btlr--35": "shape_btlr--35__2SDip",
	"bblr--35": "shape_bblr--35__SiOXm",
	"btrr--35": "shape_btrr--35__1pfVv",
	"bbrr--35": "shape_bbrr--35__9U_At",
	"w--35": "shape_w--35__3cw0K",
	"max-w--35": "shape_max-w--35__3yWYB",
	"min-w--35": "shape_min-w--35__3AfJq",
	"h--35": "shape_h--35__2up7R",
	"min-h--35": "shape_min-h--35__19FJQ",
	"br--40": "shape_br--40__36ojN",
	"btr--40": "shape_btr--40__vAb1r",
	"bbr--40": "shape_bbr--40__1-uFb",
	"blr--40": "shape_blr--40__2C0By",
	"brr--40": "shape_brr--40__3msr-",
	"btlr--40": "shape_btlr--40__1jh8D",
	"bblr--40": "shape_bblr--40__1pK5u",
	"btrr--40": "shape_btrr--40__3Cb_T",
	"bbrr--40": "shape_bbrr--40__1PcoY",
	"w--40": "shape_w--40__2gpWF",
	"max-w--40": "shape_max-w--40__1j-SO",
	"min-w--40": "shape_min-w--40__3hvvy",
	"h--40": "shape_h--40__2k7X8",
	"min-h--40": "shape_min-h--40__3o_qa",
	"br--45": "shape_br--45__1ybgj",
	"btr--45": "shape_btr--45__hHBoP",
	"bbr--45": "shape_bbr--45__3QP_G",
	"blr--45": "shape_blr--45__3dPfY",
	"brr--45": "shape_brr--45__1VSAO",
	"btlr--45": "shape_btlr--45__2B_tO",
	"bblr--45": "shape_bblr--45__tc6e9",
	"btrr--45": "shape_btrr--45__15ftb",
	"bbrr--45": "shape_bbrr--45__30bki",
	"w--45": "shape_w--45__3sCPa",
	"max-w--45": "shape_max-w--45__1xyVD",
	"min-w--45": "shape_min-w--45__3lRlv",
	"h--45": "shape_h--45__2nh6i",
	"min-h--45": "shape_min-h--45__b8UZF",
	"br--50": "shape_br--50__3ZUNk",
	"btr--50": "shape_btr--50__24OeC",
	"bbr--50": "shape_bbr--50__1F1vc",
	"blr--50": "shape_blr--50__2x2l4",
	"brr--50": "shape_brr--50__3AR8N",
	"btlr--50": "shape_btlr--50__qYBo8",
	"bblr--50": "shape_bblr--50__IPXqd",
	"btrr--50": "shape_btrr--50__HPdZ8",
	"bbrr--50": "shape_bbrr--50__1SYes",
	"w--50": "shape_w--50__1pA7E",
	"max-w--50": "shape_max-w--50__3l2rz",
	"min-w--50": "shape_min-w--50__3poIu",
	"h--50": "shape_h--50__1uB9E",
	"min-h--50": "shape_min-h--50__ySVkq",
	"br--55": "shape_br--55__1Alf-",
	"btr--55": "shape_btr--55__3xfP1",
	"bbr--55": "shape_bbr--55__24OHa",
	"blr--55": "shape_blr--55__VBzWu",
	"brr--55": "shape_brr--55__2154T",
	"btlr--55": "shape_btlr--55__2wDhh",
	"bblr--55": "shape_bblr--55__3uCuT",
	"btrr--55": "shape_btrr--55__3kPdK",
	"bbrr--55": "shape_bbrr--55__2-ylC",
	"w--55": "shape_w--55__1QHFV",
	"max-w--55": "shape_max-w--55__2pStQ",
	"min-w--55": "shape_min-w--55__1fFQ8",
	"h--55": "shape_h--55__14rtD",
	"min-h--55": "shape_min-h--55__bBOT5",
	"br--60": "shape_br--60__30aux",
	"btr--60": "shape_btr--60__1eepG",
	"bbr--60": "shape_bbr--60__3npdm",
	"blr--60": "shape_blr--60__1iF6_",
	"brr--60": "shape_brr--60__35RHR",
	"btlr--60": "shape_btlr--60__11NKO",
	"bblr--60": "shape_bblr--60__23ZpR",
	"btrr--60": "shape_btrr--60__tT6Vz",
	"bbrr--60": "shape_bbrr--60__2egxo",
	"w--60": "shape_w--60__1OtRx",
	"max-w--60": "shape_max-w--60__2qbu_",
	"min-w--60": "shape_min-w--60__3sWr_",
	"h--60": "shape_h--60__CMFzc",
	"min-h--60": "shape_min-h--60__24S-b",
	"br--65": "shape_br--65__29cUK",
	"btr--65": "shape_btr--65___x7fF",
	"bbr--65": "shape_bbr--65__3SILL",
	"blr--65": "shape_blr--65__DtJP8",
	"brr--65": "shape_brr--65__3PQs0",
	"btlr--65": "shape_btlr--65__3xUXs",
	"bblr--65": "shape_bblr--65__18axk",
	"btrr--65": "shape_btrr--65__UE_xP",
	"bbrr--65": "shape_bbrr--65__38oNT",
	"w--65": "shape_w--65__2v3ej",
	"max-w--65": "shape_max-w--65__1QeHZ",
	"min-w--65": "shape_min-w--65__12tRz",
	"h--65": "shape_h--65__2yyup",
	"min-h--65": "shape_min-h--65__1MnMa",
	"br--75": "shape_br--75__2vVnP",
	"btr--75": "shape_btr--75__1rV6O",
	"bbr--75": "shape_bbr--75__8WFpd",
	"blr--75": "shape_blr--75__3e1qI",
	"brr--75": "shape_brr--75__SZ05a",
	"btlr--75": "shape_btlr--75__3ik6c",
	"bblr--75": "shape_bblr--75__1hTTc",
	"btrr--75": "shape_btrr--75__1TbSn",
	"bbrr--75": "shape_bbrr--75__1aS0F",
	"w--75": "shape_w--75__1CxBn",
	"max-w--75": "shape_max-w--75__3OiAA",
	"min-w--75": "shape_min-w--75__2p1lT",
	"h--75": "shape_h--75__3WSZJ",
	"min-h--75": "shape_min-h--75__3R6-I",
	"br--100": "shape_br--100__23bez",
	"btr--100": "shape_btr--100__1gIl3",
	"bbr--100": "shape_bbr--100__Zjoht",
	"blr--100": "shape_blr--100__1xlv3",
	"brr--100": "shape_brr--100__1nYum",
	"btlr--100": "shape_btlr--100__1TXcn",
	"bblr--100": "shape_bblr--100__1Q5JQ",
	"btrr--100": "shape_btrr--100__3LfuZ",
	"bbrr--100": "shape_bbrr--100__2rlvM",
	"w--100": "shape_w--100__3bQmw",
	"max-w--100": "shape_max-w--100__yC1Bt",
	"min-w--100": "shape_min-w--100__11LK8",
	"h--100": "shape_h--100__3SfAb",
	"min-h--100": "shape_min-h--100__1kNor",
	"br--130": "shape_br--130__yPddX",
	"btr--130": "shape_btr--130__xIZVs",
	"bbr--130": "shape_bbr--130__1SHxu",
	"blr--130": "shape_blr--130__2QzF1",
	"brr--130": "shape_brr--130__1a1dp",
	"btlr--130": "shape_btlr--130__1UW2C",
	"bblr--130": "shape_bblr--130__2n_AE",
	"btrr--130": "shape_btrr--130__2I5FS",
	"bbrr--130": "shape_bbrr--130__2mVUk",
	"w--130": "shape_w--130__OsNxw",
	"max-w--130": "shape_max-w--130__2d3yo",
	"min-w--130": "shape_min-w--130__2ktLY",
	"h--130": "shape_h--130__3pU9g",
	"min-h--130": "shape_min-h--130__WXAbM",
	"br--140": "shape_br--140__2_I2d",
	"btr--140": "shape_btr--140__2C3oG",
	"bbr--140": "shape_bbr--140__WLJw9",
	"blr--140": "shape_blr--140__1xAHd",
	"brr--140": "shape_brr--140__20I3V",
	"btlr--140": "shape_btlr--140__1kjHY",
	"bblr--140": "shape_bblr--140__23seN",
	"btrr--140": "shape_btrr--140__-ART8",
	"bbrr--140": "shape_bbrr--140__2QYLQ",
	"w--140": "shape_w--140__1GAIH",
	"max-w--140": "shape_max-w--140__1uDa5",
	"min-w--140": "shape_min-w--140__10t8r",
	"h--140": "shape_h--140__15kIQ",
	"min-h--140": "shape_min-h--140__1hRC_",
	"br--200": "shape_br--200__S_0jA",
	"btr--200": "shape_btr--200__3EZcb",
	"bbr--200": "shape_bbr--200__1x9sE",
	"blr--200": "shape_blr--200__1t_ZV",
	"brr--200": "shape_brr--200__19mFA",
	"btlr--200": "shape_btlr--200__3-Sxj",
	"bblr--200": "shape_bblr--200__3Tnnr",
	"btrr--200": "shape_btrr--200__3Eyp8",
	"bbrr--200": "shape_bbrr--200__XvB3Q",
	"w--200": "shape_w--200__WNuai",
	"max-w--200": "shape_max-w--200__20ISt",
	"min-w--200": "shape_min-w--200__7haBj",
	"h--200": "shape_h--200__RCuy5",
	"min-h--200": "shape_min-h--200__1K0hj",
	"br--210": "shape_br--210__1mRZD",
	"btr--210": "shape_btr--210__cSnOb",
	"bbr--210": "shape_bbr--210__2hPN0",
	"blr--210": "shape_blr--210__1YSSj",
	"brr--210": "shape_brr--210__3EVr1",
	"btlr--210": "shape_btlr--210__htZEh",
	"bblr--210": "shape_bblr--210__3-mPv",
	"btrr--210": "shape_btrr--210__3Pffj",
	"bbrr--210": "shape_bbrr--210__P1LVg",
	"w--210": "shape_w--210__wcmfK",
	"max-w--210": "shape_max-w--210__6fqvQ",
	"min-w--210": "shape_min-w--210__3-XHB",
	"h--210": "shape_h--210__2VtuZ",
	"min-h--210": "shape_min-h--210__2RD0Z",
	"br--230": "shape_br--230__2zIT5",
	"btr--230": "shape_btr--230__3rTBb",
	"bbr--230": "shape_bbr--230__2flS0",
	"blr--230": "shape_blr--230__2KbKW",
	"brr--230": "shape_brr--230__2UEVd",
	"btlr--230": "shape_btlr--230__1jvrI",
	"bblr--230": "shape_bblr--230__3QHZv",
	"btrr--230": "shape_btrr--230__2HUOh",
	"bbrr--230": "shape_bbrr--230__2R8s7",
	"w--230": "shape_w--230__3EyDL",
	"max-w--230": "shape_max-w--230__3eu80",
	"min-w--230": "shape_min-w--230__14U7J",
	"h--230": "shape_h--230__3LvE7",
	"min-h--230": "shape_min-h--230__3xqUE",
	"br--300": "shape_br--300__pjg1g",
	"btr--300": "shape_btr--300__3XaYX",
	"bbr--300": "shape_bbr--300__3UXMB",
	"blr--300": "shape_blr--300__1R5wP",
	"brr--300": "shape_brr--300__25xkJ",
	"btlr--300": "shape_btlr--300__19TRj",
	"bblr--300": "shape_bblr--300__3A7DE",
	"btrr--300": "shape_btrr--300__OGO4R",
	"bbrr--300": "shape_bbrr--300__3QUij",
	"w--300": "shape_w--300__2jqgj",
	"max-w--300": "shape_max-w--300__2mKFT",
	"min-w--300": "shape_min-w--300__9h66j",
	"h--300": "shape_h--300__2pfHl",
	"min-h--300": "shape_min-h--300__yWdRW",
	"br--325": "shape_br--325__3cbxv",
	"btr--325": "shape_btr--325__1GCDR",
	"bbr--325": "shape_bbr--325__39n5G",
	"blr--325": "shape_blr--325__10yMG",
	"brr--325": "shape_brr--325__3Paq-",
	"btlr--325": "shape_btlr--325__3MU4I",
	"bblr--325": "shape_bblr--325__X4Nte",
	"btrr--325": "shape_btrr--325__2gs7f",
	"bbrr--325": "shape_bbrr--325__2tNaG",
	"w--325": "shape_w--325__26Ful",
	"max-w--325": "shape_max-w--325__DKFMD",
	"min-w--325": "shape_min-w--325__38W8s",
	"h--325": "shape_h--325__1QLxT",
	"min-h--325": "shape_min-h--325__ocsWi",
	"br--400": "shape_br--400__jB230",
	"btr--400": "shape_btr--400__1__Wn",
	"bbr--400": "shape_bbr--400__Lr5kF",
	"blr--400": "shape_blr--400__3Xzez",
	"brr--400": "shape_brr--400__3llph",
	"btlr--400": "shape_btlr--400__IK0Jp",
	"bblr--400": "shape_bblr--400__2Ci2S",
	"btrr--400": "shape_btrr--400__3hQtD",
	"bbrr--400": "shape_bbrr--400__1wCCh",
	"w--400": "shape_w--400__XJJ45",
	"max-w--400": "shape_max-w--400__2y8Mh",
	"min-w--400": "shape_min-w--400__cAgYE",
	"h--400": "shape_h--400__2k3Fi",
	"min-h--400": "shape_min-h--400__2v6xL",
	"br--480": "shape_br--480__3l9T7",
	"btr--480": "shape_btr--480__2R3Sw",
	"bbr--480": "shape_bbr--480__3gtPm",
	"blr--480": "shape_blr--480__34gGt",
	"brr--480": "shape_brr--480__2GcSR",
	"btlr--480": "shape_btlr--480__3uV9E",
	"bblr--480": "shape_bblr--480__2hMvv",
	"btrr--480": "shape_btrr--480__3uLg_",
	"bbrr--480": "shape_bbrr--480__20vl4",
	"w--480": "shape_w--480__1CO4U",
	"max-w--480": "shape_max-w--480__cjrSw",
	"min-w--480": "shape_min-w--480__mVXSa",
	"h--480": "shape_h--480__2W2Um",
	"min-h--480": "shape_min-h--480__1ULip",
	"br--500": "shape_br--500__2kGLY",
	"btr--500": "shape_btr--500__2jIBO",
	"bbr--500": "shape_bbr--500__2zl_G",
	"blr--500": "shape_blr--500__3ELgS",
	"brr--500": "shape_brr--500__2MrjN",
	"btlr--500": "shape_btlr--500__sxvjj",
	"bblr--500": "shape_bblr--500__2qR6k",
	"btrr--500": "shape_btrr--500__xcYDO",
	"bbrr--500": "shape_bbrr--500__JjGxf",
	"w--500": "shape_w--500__1rGyR",
	"max-w--500": "shape_max-w--500__1_WOV",
	"min-w--500": "shape_min-w--500__1Jwwj",
	"h--500": "shape_h--500__1grzU",
	"min-h--500": "shape_min-h--500__3s31_",
	"br--720": "shape_br--720__ZXFWj",
	"btr--720": "shape_btr--720__3r-O7",
	"bbr--720": "shape_bbr--720__29qk8",
	"blr--720": "shape_blr--720__2jUhK",
	"brr--720": "shape_brr--720__3vPCr",
	"btlr--720": "shape_btlr--720__1gf5n",
	"bblr--720": "shape_bblr--720__2R87I",
	"btrr--720": "shape_btrr--720__1GugG",
	"bbrr--720": "shape_bbrr--720__2lTuf",
	"w--720": "shape_w--720__3zXDm",
	"max-w--720": "shape_max-w--720__3H3Jh",
	"min-w--720": "shape_min-w--720__3YpII",
	"h--720": "shape_h--720__2eNoJ",
	"min-h--720": "shape_min-h--720__1n1zz",
	"br--1100": "shape_br--1100__21Mrf",
	"btr--1100": "shape_btr--1100__wzvIg",
	"bbr--1100": "shape_bbr--1100__p9IFa",
	"blr--1100": "shape_blr--1100__3Uqjk",
	"brr--1100": "shape_brr--1100__2zKD-",
	"btlr--1100": "shape_btlr--1100__fVSNp",
	"bblr--1100": "shape_bblr--1100__2MqgZ",
	"btrr--1100": "shape_btrr--1100__2ymex",
	"bbrr--1100": "shape_bbrr--1100__L9PM2",
	"w--1100": "shape_w--1100__1HtQp",
	"max-w--1100": "shape_max-w--1100__2YaS8",
	"min-w--1100": "shape_min-w--1100__2mnha",
	"h--1100": "shape_h--1100__1uurY",
	"min-h--1100": "shape_min-h--1100__12NeT",
	"br--circle": "shape_br--circle__1zhio",
	"w--50p": "shape_w--50p__1mDw2",
	"h--50p": "shape_h--50p__33ex3",
	"w--75p": "shape_w--75p__3saZR",
	"h--75p": "shape_h--75p__1jn28",
	"h--full": "shape_h--full__o8AMH",
	"w--full": "shape_w--full__1_rVQ",
	"h--100v": "shape_h--100v__3qI6K",
	"h--fit": "shape_h--fit__PNY6K",
	"min-h--fullv": "shape_min-h--fullv__SxkpO",
	"w--inherit": "shape_w--inherit__13j1X",
	"min-w--150": "shape_min-w--150__3AivT",
	"shadow--sm": "shape_shadow--sm__1DNob",
	"shadow--lg": "shape_shadow--lg__33qFY",
	"hidden": "shape_hidden__aUJDJ",
	"outline--none": "shape_outline--none__30nOp",
	"background-cover": "shape_background-cover__1YS3v",
	"background-repeat": "shape_background-repeat__2tAib",
	"none": "shape_none__2Tahw",
	"from__md": "shape_from__md__2nGYV",
	"from__md--flex": "shape_from__md--flex__2IoVz",
	"only__sm": "shape_only__sm__2x973",
	"from__lg": "shape_from__lg__12dOi",
	"until__lg": "shape_until__lg__2A-r8",
	"z__80": "shape_z__80__3P8Dn"
};


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4lNj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container__active": "input_container__active__2fOEF",
	"container__inactive": "input_container__inactive__1MVA7",
	"container__error--active": "input_container__error--active__2RaIm",
	"container__error--inactive": "input_container__error--inactive__UoIXu",
	"label": "input_label__hjCpZ",
	"label__active": "input_label__active__2Pxic",
	"label__error": "input_label__error__34WNs",
	"input": "input_input__2tUcp",
	"input__active": "input_input__active__2OeXj",
	"input__inactive": "input_input__inactive__Lu0gV",
	"input__error--active": "input_input__error--active__75yZc",
	"input__error--inactive": "input_input__error--inactive__3wACT",
	"select-input": "input_select-input__3P1Nf",
	"select-input__active": "input_select-input__active__1xB4C",
	"select-input__inactive": "input_select-input__inactive__2v6oZ",
	"select-input__error--active": "input_select-input__error--active__3CcbW",
	"select-input__error--inactive": "input_select-input__error--inactive__3Ximo",
	"select-label": "input_select-label__Nogro",
	"select-label__active": "input_select-label__active__2l62j",
	"select-label__error": "input_select-label__error__1YT2L"
};


/***/ }),

/***/ "6ztO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Search */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ChevronTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Globe; });
/* unused harmony export MagnifyGlass */
/* unused harmony export Lock */
/* unused harmony export Saved */
/* unused harmony export Login */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Search = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    viewBox: "0 0 56.966 56.966",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"
    })
  });
};
const ChevronDown = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("polygon", {
          points: "225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 \t\t"
        })
      })
    })
  }));
};
const ChevronLeft = (_ref) => {
  let {
    stroke,
    strokeWidth
  } = _ref,
      props = _objectWithoutProperties(_ref, ["stroke", "strokeWidth"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        stroke: stroke,
        strokeWidth: strokeWidth,
        d: "m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
      })
    })
  }));
};
const ChevronRight = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"
      })
    })
  }));
};
const ChevronTop = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    stroke: "black",
    fill: "black"
  }, props), {}, {
    viewBox: "0 0 284.929 284.929",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285 C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854 c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848 c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566 C284.929,199.378,283.984,197.188,282.082,195.285z"
      })
    })
  }));
};
const Globe = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"
    })
  }));
};
const MagnifyGlass = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
      })
    })
  }));
};
const Lock = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M10.25 4a2.25 2.25 0 0 0-4.495-.154L5.75 4v2h-1.5V4a3.75 3.75 0 0 1 7.495-.2l.005.2v2H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.25V4z"
    })
  }));
};
const Saved = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
    })
  }));
};
const Login = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "12",
      cy: "12",
      r: "10.5"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4"
    })]
  }));
};

/***/ }),

/***/ "8K43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Input; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./components/atoms/input/input.module.scss
var input_module = __webpack_require__("4lNj");
var input_module_default = /*#__PURE__*/__webpack_require__.n(input_module);

// CONCATENATED MODULE: ./components/atoms/input/styling.text.ts

/**
 * Inputs
 * @param errors
 * @param fieldActive
 * @param value
 */

const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return [input_module_default.a["input__active"]].join(" ");
  }

  if (errors && value) {
    return [input_module_default.a["input__inactive"]].join(" ");
  }

  if (errors && fieldActive) {
    return [input_module_default.a["input__error--active"]].join(" ");
  }

  if (errors) {
    return [input_module_default.a["input__error--inactive"]].join(" ");
  }

  return "";
};
/**
 * Labels
 * @param errors
 * @param fieldActive
 * @param value
 */

const styleLabel = (errors, fieldActive, evaluate, value) => {
  if (errors && fieldActive && evaluate) {
    return [input_module_default.a["label__active"]].join(" ");
  }

  if (errors && fieldActive) {
    return [input_module_default.a["label__error"]].join(" ");
  }

  if (errors && evaluate) {
    return [input_module_default.a["label__active"]].join(" ");
  }

  if (errors) {
    return [input_module_default.a["label__error"]].join(" ");
  }

  if (fieldActive || value) {
    return [input_module_default.a["label__active"]].join(" ");
  }

  return "";
};
/**
 * Containers
 * @param errors
 * @param fieldActive
 * @param value
 */

const styleContainer = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return [input_module_default.a["container__active"]].join(" ");
  }

  if (errors && fieldActive) {
    return [input_module_default.a["container__error--active"]].join(" ");
  }

  if (errors && value) {
    return [input_module_default.a["container__inactive"]].join(" ");
  }

  if (errors) {
    return [input_module_default.a["container__error--inactive"]].join(" ");
  }

  if (fieldActive) {
    return [input_module_default.a["container__active"]].join(" ");
  }

  return "";
};
// EXTERNAL MODULE: ./helper/auth.ts + 1 modules
var auth = __webpack_require__("s6mq");

// CONCATENATED MODULE: ./components/atoms/input/input.email.tsx



/** styles */






/** styles */



/** helpers */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const EmailInput = ({
  handleChange,
  value,
  direction,
  errors = false
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 60
    },
    className: `${[input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${renderShape()} ${styleContainer(errors, fieldActive, Object(auth["a" /* checkEmail */])(value))}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: "email",
        name: "email",
        type: "text",
        onChange: handleChange,
        value: value,
        onFocus: activateField,
        onBlur: deactivateField,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], color_module_default.a["c__placeholder--black"], input_module_default.a["input"]].join(" ")} ${styleInput(errors, fieldActive, Object(auth["a" /* checkEmail */])(value))}`,
        placeholder: fieldActive ? "Email" : undefined
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "email",
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styleLabel(errors, fieldActive, Object(auth["a" /* checkEmail */])(value), value)}`,
        children: "Email"
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./components/atoms/button/button.stories.tsx
var button_stories = __webpack_require__("dOrH");

// CONCATENATED MODULE: ./components/atoms/input/input.password.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** styles **/







/** Styling */


/** components */


/** Helper */


/** stories */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const PasswordInput = ({
  handleChange,
  value,
  direction,
  errors = false
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);
  const {
    0: hide,
    1: setHide
  } = Object(external_react_["useState"])(true);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      height: 60
    },
    className: `${[input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" ")} ${renderShape()} ${styleContainer(errors, fieldActive, Object(auth["b" /* checkPassword */])(value))}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: "password",
        name: "password",
        type: hide ? "password" : "text",
        onChange: handleChange,
        value: value,
        onFocus: activateField,
        onBlur: deactivateField,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], color_module_default.a["c__placeholder--black"], input_module_default.a["input"]].join(" ")} ${styleInput(errors, fieldActive, Object(auth["b" /* checkPassword */])(value))}`,
        placeholder: fieldActive ? "Password" : undefined
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "password",
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styleLabel(errors, fieldActive, Object(auth["b" /* checkPassword */])(value), value)}`,
        children: "Password"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-center"], space_module_default.a["m-l--18"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], _objectSpread(_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
        onClick: () => setHide(prevHide => !prevHide),
        font: 13,
        title: hide ? "Show" : "Hide"
      }))
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.name.tsx



/** styles */








/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - Handles event triggered
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const NameInput = ({
  handleChange,
  value,
  direction,
  name = "firstname",
  errors = false
}) => {
  const names = {
    firstname: "First name",
    lastname: "Last name"
  };
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 60
    },
    className: `${[input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${renderShape()} ${styleContainer(errors, fieldActive, value)}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: name,
        name: name,
        type: "text",
        onChange: handleChange,
        value: value,
        onFocus: activateField,
        onBlur: deactivateField,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], color_module_default.a["c__placeholder--black"], input_module_default.a["input"]].join(" ")} ${styleInput(errors, fieldActive, value)}`,
        placeholder: fieldActive ? names[name] : undefined
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: name,
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styleLabel(errors, fieldActive, value, value)}`,
        children: names[name]
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/styling.select.ts


/**
 * Birthdate Input
 */

const styling_select_styleInput = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return [input_module_default.a["select-input__error--active"]].join(" ");
  }

  if (errors) {
    return [input_module_default.a["select-input__error--inactive"]].join(" ");
  }

  return [input_module_default.a["select-input__active"]].join(" ");
};
const styling_select_styleLabel = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return [input_module_default.a["select-label__error"]].join(" ");
  }

  if (errors) {
    return [input_module_default.a["select-label__error"]].join(" ");
  }

  return [input_module_default.a["select-label__active"]].join(" ");
};
const styling_select_styleContainer = (errors, fieldActive, direction) => {
  if (errors && fieldActive) {
    return [input_module_default.a["select-container__error--active"]].join(" ");
  }

  if (errors) {
    if (direction === "left") {
      return [input_module_default.a["select-container__error--inactive"], shape_module_default.a["blr--8"]].join(" ");
    }

    if (direction === "right") {
      return [input_module_default.a["select-container__error--inactive"], shape_module_default.a["brr--8"]].join(" ");
    }

    return [input_module_default.a["select-container__error--inactive"]].join(" ");
  }

  if (fieldActive) {
    return [input_module_default.a["select-container__active"]].join(" ");
  }
};
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.birthdate.ts


const birthdate = {
  year: "Year",
  month: "Month",
  day: "Day"
};
const logic_birthdate_renderShape = direction => {
  switch (direction) {
    case "left":
      return [color_module_default.a["b-r--white__3"]].join(" ");

    case "center":
      return [].join(" ");

    case "right":
      return [color_module_default.a["b-l--white__3"]].join(" ");

    default:
      return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
  }
};
// CONCATENATED MODULE: ./components/atoms/input/input.birthdate.tsx



/** styles **/







/** Styling */



/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const BirthdateInput = ({
  handleChange,
  value,
  direction,
  errors = false,
  dateType = "year"
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[shape_module_default.a["h--60"], layout_module_default.a["flex"], input_module_default.a["outside"], layout_module_default.a["relative"], layout_module_default.a["items-center"]].join(" ")} `,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${logic_birthdate_renderShape(direction)} ${styling_select_styleContainer(errors, fieldActive, direction)} ${[shape_module_default.a["h--full"], shape_module_default.a["w--full"], layout_module_default.a["relative"], space_module_default.a["p-h--15"]].join(" ")}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        id: dateType,
        name: dateType,
        onChange: handleChange,
        value: value,
        defaultValue: "",
        onFocus: () => setFieldActive(true),
        onBlur: () => setFieldActive(false),
        className: `${[shape_module_default.a["h--full"], shape_module_default.a["br--10"], space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], input_module_default.a["input"]].join(" ")} ${styling_select_styleInput(errors, fieldActive)}`,
        children: [dateType === "year" && new Array(99).fill(null).map((_, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: index + 1920,
            children: index + 1920
          }, index);
        }), dateType === "month" && new Array(12).fill(null).map((_, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: index + 1,
            children: index + 1
          }, index);
        }), dateType === "day" && new Array(31).fill(null).map((_, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: index + 1,
            children: index + 1
          }, index);
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: dateType,
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styling_select_styleLabel(errors, fieldActive)}`,
        children: birthdate[dateType]
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.region.ts


const logic_region_renderShape = direction => {
  switch (direction) {
    case "top":
      return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

    case "bottom":
      return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

    default:
      return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
  }
};
// CONCATENATED MODULE: ./components/atoms/input/input.region.tsx



/** styles **/







/** Styling */



/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const RegionInput = ({
  handleChange,
  value,
  direction,
  errors = false
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 60
    },
    className: `${[layout_module_default.a["flex"], input_module_default.a["outside"], layout_module_default.a["relative"], layout_module_default.a["items-center"]].join(" ")} `,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${logic_region_renderShape(direction)} ${styling_select_styleContainer(errors, fieldActive, value)}`,
      style: {
        padding: "0 12px",
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        style: {
          height: "100%"
        },
        id: "region",
        onChange: handleChange,
        value: value,
        onFocus: () => setFieldActive(true),
        onBlur: () => setFieldActive(false),
        className: `${[shape_module_default.a["br--10"], space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], input_module_default.a["input"]].join(" ")} ${styling_select_styleInput(errors, fieldActive)}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "canada",
          children: "Canada (+1)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "japan",
          children: "Afghanistan (+1)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "japan",
          children: "United States (+1)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "japan",
          children: "Korea (+1)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "japan",
          children: "Mexico (+1)"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "region",
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styling_select_styleLabel(errors, fieldActive)}`,
        children: "Country/Region"
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.phone.tsx



/** styles */







/** styles */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const PhoneNumberInput = ({
  handleChange,
  value,
  direction,
  errors = false
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 60
    },
    className: `${[input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${renderShape()} ${styleContainer(errors, fieldActive, value)}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: "tel",
        name: "tel",
        type: "text",
        onChange: handleChange,
        value: value,
        onFocus: activateField,
        onBlur: deactivateField,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"], color_module_default.a["c__placeholder--black"], input_module_default.a["input"]].join(" ")} ${styleInput(errors, fieldActive, value)}`,
        placeholder: fieldActive ? "090-999-9999" : undefined
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "tel",
        className: `${[layout_module_default.a["absolute"], font_module_default.a["size--12"], color_module_default.a["c--gray__1"], font_module_default.a["weight--100"], input_module_default.a["label"]].join(" ")} ${styleLabel(errors, fieldActive, value, value)}`,
        children: "Phone number"
      })]
    })
  });
};
// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// EXTERNAL MODULE: ./public/svg/regular.tsx
var regular = __webpack_require__("6ztO");

// EXTERNAL MODULE: ./hooks/useOnClickOutside.ts
var useOnClickOutside = __webpack_require__("Qx/D");

// CONCATENATED MODULE: ./components/atoms/input/input.place.tsx



/** styles **/







/** Styling */



/** hooks */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} changePlace - Change the place type
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const PlaceInput = ({
  value = "Entire place",
  direction,
  errors = false,
  changePlace
}) => {
  const containerRef = Object(external_react_["useRef"])();
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  Object(useOnClickOutside["a" /* default */])(containerRef, () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  });

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--10"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--10"]].join(" ");

      case "middle":
        return [color_module_default.a["b--white__3"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--10"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    ref: containerRef,
    style: {
      height: 50
    },
    className: `${[layout_module_default.a["flex"], input_module_default.a["outside"], layout_module_default.a["relative"], layout_module_default.a["items-center"]].join(" ")}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${renderShape()} ${expanded && [input_module_default.a["container__active"]].join(" ")}`,
      style: {
        position: "relative",
        height: "100%",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          height: "100%",
          padding: "0 12px"
        },
        onClick: () => setExpanded(!expanded),
        className: `${[layout_module_default.a["flex"], layout_module_default.a["justify-between"], layout_module_default.a["items-center"], color_module_default.a["bg--transparent"], space_module_default.a["p--0"], shape_module_default.a["w--full"], color_module_default.a["b--0"], font_module_default.a["size--16"], font_module_default.a["weight--300"]].join(" ")}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            style: {
              left: 0,
              top: 15,
              cursor: "pointer",
              padding: "0 12px"
            },
            htmlFor: "place",
            className: `${[layout_module_default.a["absolute"], font_module_default.a["size--14"], color_module_default.a["c--gray__3"], font_module_default.a["weight--100"]].join(" ")}`,
            children: value
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: expanded ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["d" /* ChevronTop */], {
            width: 13
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["a" /* ChevronDown */], {
            width: 13
          })
        })]
      }), expanded && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          top: 48,
          zIndex: 60
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            borderRadius: 6,
            backgroundColor: "white",
            border: "1px solid lightgray",
            padding: 16,
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important"
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              style: {
                padding: 12,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: "100%"
              },
              className: [color_module_default.a["bg--transparent"]].join(" "),
              onClick: () => {
                changePlace("Entire place");
                setExpanded(!expanded);
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: [font_module_default.a["text--left"], font_module_default.a["size--14"]].join(" "),
                    children: "Entire place"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: [font_module_default.a["size--13"], font_module_default.a["text--left"]].join(" "),
                    children: "Guests have the whole place to themselves--there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen and usually included."
                  })
                })]
              }), value === "Entire place" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["k" /* Checked */], {
                  width: 32
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              style: {
                padding: 12,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: "100%"
              },
              className: [color_module_default.a["bg--transparent"]].join(" "),
              onClick: () => {
                changePlace("Private room");
                setExpanded(!expanded);
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: [font_module_default.a["text--left"], font_module_default.a["size--14"]].join(" "),
                    children: "Private room"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: [font_module_default.a["size--13"], font_module_default.a["text--left"]].join(" "),
                    children: "Guests have their own private room for sleeping. Other areas could be shared."
                  })
                })]
              }), value === "Private room" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["k" /* Checked */], {
                  width: 32
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              style: {
                padding: 12,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: "100%"
              },
              className: [color_module_default.a["bg--transparent"]].join(" "),
              onClick: () => {
                changePlace("Shared room");
                setExpanded(!expanded);
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: [font_module_default.a["text--left"], font_module_default.a["size--14"]].join(" "),
                    children: "Shared room"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: [font_module_default.a["size--13"], font_module_default.a["text--left"]].join(" "),
                    children: "Guests sleep in a bedroom or a common area that could be shared with others."
                  })
                })]
              }), value === "Shared room" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["k" /* Checked */], {
                  width: 32
                })
              })]
            })
          })]
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.guests.tsx



/** styles **/







/** Styling */



/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const GuestsInput = ({
  handleChange,
  value,
  direction,
  errors = false
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--6"]].join(" ");

      case "bottom":
        return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--6"]].join(" ");

      default:
        return [color_module_default.a["b--white__3"], shape_module_default.a["br--8"]].join(" ");
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 50
    },
    className: `${[layout_module_default.a["flex"], input_module_default.a["outside"], layout_module_default.a["relative"], layout_module_default.a["items-center"]].join(" ")} `,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${renderShape()} ${styling_select_styleContainer(errors, fieldActive, value)}`,
      style: {
        padding: "0 12px",
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        style: {
          height: "100%",
          outline: "none"
        },
        id: "guests",
        onChange: handleChange,
        value: value,
        onFocus: () => setFieldActive(true),
        onBlur: () => setFieldActive(false),
        className: `${[layout_module_default.a["justify-between"], shape_module_default.a["br--4"], space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--14"], font_module_default.a["weight--300"]].join(" ")}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "1",
          children: "1 guest"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "2",
          children: "2 guests"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "3",
          children: "3 guests"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "4",
          children: "4 guests"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "5",
          children: "5 guests"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
        children: fieldActive ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["d" /* ChevronTop */], {
          width: 13
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["a" /* ChevronDown */], {
          width: 13
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.address.tsx


const logic_address_renderShape = direction => {
  switch (direction) {
    case "top":
      return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--8"]].join(" ");

    case "bottom":
      return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--8"]].join(" ");

    default:
      return [color_module_default.a["b--white__3"], shape_module_default.a["br--8"]].join(" ");
  }
};
// CONCATENATED MODULE: ./components/atoms/input/input.address.tsx


/** styles **/






/** props */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const AddressInput = ({
  handleChange,
  value,
  direction
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[shape_module_default.a["h--50"], input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${logic_address_renderShape(direction)}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: "address",
        name: "address",
        type: "text",
        onChange: handleChange,
        value: value,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--14"], font_module_default.a["weight--100"], color_module_default.a["c__placeholder--black"]].join(" ")}`,
        style: {
          outline: "none"
        },
        placeholder: "Address"
      })
    })
  });
};
// EXTERNAL MODULE: ./components/atoms/input/logic/logic.types.tsx + 12 modules
var logic_types = __webpack_require__("AHCq");

// CONCATENATED MODULE: ./components/atoms/input/logic/logic.select.tsx


const logic_select_renderShape = direction => {
  switch (direction) {
    case "top":
      return [color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["bbr--6"]].join(" ");

    case "bottom":
      return [color_module_default.a["b-t--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], shape_module_default.a["btr--6"]].join(" ");

    default:
      return [color_module_default.a["b--white__3"], shape_module_default.a["br--8"]].join(" ");
  }
};
// CONCATENATED MODULE: ./components/atoms/input/input.select.tsx



/** styles **/








/** vectors */


/** Options */



/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const SelectInput = ({
  handleChange,
  value,
  direction,
  errors = false,
  disabled = false,
  inputType = "Bed and breakfast"
}) => {
  const {
    0: fieldActive,
    1: setFieldActive
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[shape_module_default.a["h--50"], layout_module_default.a["flex"], input_module_default.a["outside"], layout_module_default.a["relative"], layout_module_default.a["items-center"]].join(" ")} `,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${logic_select_renderShape(direction)} ${styling_select_styleContainer(errors, fieldActive, value)}`,
      style: {
        borderColor: disabled ? "#EBEBEB" : "#B0B0B0",
        padding: "0 12px",
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: disabled ? "#F7F7F7" : "white"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        style: {
          height: "100%",
          outline: "none"
        },
        id: inputType,
        disabled: disabled,
        onChange: handleChange,
        value: value,
        onFocus: () => setFieldActive(true),
        onBlur: () => setFieldActive(false),
        className: `${[color_module_default.a["bg--transparent"], layout_module_default.a["justify-between"], shape_module_default.a["br--4"], space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--14"], font_module_default.a["weight--300"]].join(" ")}`,
        children: [logic_types["a" /* inputTypes */][inputType].default && /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          disabled: true,
          value: logic_types["a" /* inputTypes */][inputType].default,
          children: logic_types["a" /* inputTypes */][inputType].default
        }), logic_types["a" /* inputTypes */][inputType].options]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
        children: fieldActive ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["d" /* ChevronTop */], {
          width: 13
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["a" /* ChevronDown */], {
          width: 13,
          fill: disabled ? "#DDDDDD" : "black"
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// CONCATENATED MODULE: ./components/atoms/input/input.radio.tsx



/** styles */





const RadioInput = ({
  title = "title here",
  subtitle,
  selected = false,
  select
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "relative"
      },
      className: [space_module_default.a["m-r--12"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: [animation_module_default.a["hover-border--black"]].join(" "),
        style: {
          width: 20,
          height: 20,
          border: "1px solid lightgray",
          backgroundColor: selected ? "black" : "white",
          borderRadius: "50%"
        },
        onClick: () => select(title)
      }), selected && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          top: 7,
          left: 7,
          backgroundColor: "white",
          width: 6,
          height: 6,
          borderRadius: 9999
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"], color_module_default.a["c--black"]].join(" "),
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--13"], color_module_default.a["c--gray__0"]].join(" "),
          children: subtitle
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.counter.tsx



/** styles **/




/** vectors */


const CounterInput = ({
  title = "Counter",
  subtitle,
  value = 0,
  add = () => alert("add"),
  subtract = () => alert("subtract"),
  min = 1,
  max = 4,
  type = "create"
}) => {
  const types = {
    create: {
      borderWidth: 2,
      color: "#0B8A8F"
    },
    guests: {
      borderWidth: 1,
      color: "gray"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p-v--10"], layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--12"], color_module_default.a["c--gray__0"]].join(" "),
          children: subtitle
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          disabled: value === min,
          style: {
            backgroundColor: "white",
            border: `${types[type].borderWidth}px solid ${value === min ? "lightgray" : types[type].color}`,
            borderRadius: 9999,
            padding: 5
          },
          onClick: subtract,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["O" /* Minus */], {
            width: 15,
            stroke: value === min ? "lightgray" : types[type].color
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
        style: {
          width: 50
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: value < max ? value : `${value}+`
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          disabled: value === max,
          style: {
            backgroundColor: "white",
            border: `${types[type].borderWidth}px solid ${value === max ? "lightgray" : types[type].color}`,
            borderRadius: 9999,
            padding: 5
          },
          onClick: add,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["S" /* Plus */], {
            width: 15,
            stroke: value === max ? "lightgray" : types[type].color
          })
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.checkbox.tsx



/** styles */





/** vectors */


const CheckboxInput = ({
  check,
  checked = true,
  title = "Title here",
  description
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        onClick: check,
        style: {
          cursor: "pointer",
          height: 24,
          width: 24
        },
        className: `${[layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-center"], color_module_default.a["b--white__3"], shape_module_default.a["br--4"]].join(" ")} ${checked ? [color_module_default.a["bg--black"]].join(" ") : [color_module_default.a["bg--white"]].join(" ")}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [layout_module_default.a["relative"], layout_module_default.a["b--1"], space_module_default.a["p--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["j" /* CheckPlain */], {
            width: 15,
            stroke: "white",
            strokeWidth: 5
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["relative"], layout_module_default.a["t--2"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--14"], color_module_default.a["c--gray__0"]].join(" "),
          children: description
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.text.tsx


/** styles **/







/** logic */


/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const TextInput = ({
  name = "text",
  handleChange,
  value,
  direction,
  placeholder
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[shape_module_default.a["h--50"], input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${logic_address_renderShape(direction)} ${active ? [color_module_default.a["b-2--black"]].join(" ") : [color_module_default.a["b--white__3"]].join(" ")}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        autoFocus: true,
        id: name,
        name: name,
        type: "text",
        onChange: handleChange,
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        value: value,
        className: `${[space_module_default.a["p--0"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--14"], font_module_default.a["weight--100"], color_module_default.a["c__placeholder--black"]].join(" ")} `,
        style: {
          outline: "none"
        },
        placeholder: placeholder
      })
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.textarea.tsx



/** styles */







const TextAreaInput = ({
  value = "",
  handleChange,
  limit = 500
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return animation_module_default.a["border--warning"];
    }

    if (active) {
      return animation_module_default.a["focus-border--darkgreen__3"];
    }

    return "";
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      return animation_module_default.a["background--lightred__0"];
    }

    if (active) {
      return animation_module_default.a["background--white"];
    }

    return "";
  };

  const renderColor = () => {
    if (value.length >= limit) {
      return animation_module_default.a["c--warning"];
    }

    return animation_module_default.a["c--darkgreen__3"];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        minHeight: 300
      },
      className: [layout_module_default.a["relative"], shape_module_default.a["w--full"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
        spellCheck: true,
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        onChange: handleChange,
        className: `${[layout_module_default.a["relative"], font_module_default.a["weight--300"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"], font_module_default.a["size--15"], color_module_default.a["c--gray__2"], shape_module_default.a["h--full"], shape_module_default.a["w--full"], space_module_default.a["p--12"], animation_module_default.a["transition"]].join(" ")} ${renderBorder()} ${renderBackground()}`,
        style: {
          outline: "none",
          resize: "vertical",
          minHeight: 300
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["absolute"], layout_module_default.a["b--15"], layout_module_default.a["r--15"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: `${[font_module_default.a["size--12"]].join(" ")} ${renderColor()}`,
          children: limit - value.length
        })
      })]
    }), value.length >= limit && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--warning"]].join(" "),
        children: ["Please shorten your description to ", limit, " characters or less."]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.limit.tsx



/** styles */







const LimitInput = ({
  value = "",
  handleChange,
  limit = 50
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return animation_module_default.a["border--warning"];
    }

    if (active) {
      return animation_module_default.a["focus-border--darkgreen__3"];
    }

    return "";
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      return animation_module_default.a["background--lightred__0"];
    }

    if (active) {
      return animation_module_default.a["background--white"];
    }

    return "";
  };

  const renderColor = () => {
    if (value.length >= limit) {
      return animation_module_default.a["c--warning"];
    }

    return animation_module_default.a["c--darkgreen__3"];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        minHeight: 50
      },
      className: [layout_module_default.a["relative"], shape_module_default.a["w--full"], space_module_default.a["m-b--4"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        spellCheck: true,
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        onChange: handleChange,
        className: `${[layout_module_default.a["relative"], font_module_default.a["weight--300"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"], font_module_default.a["size--15"], color_module_default.a["c--gray__2"], shape_module_default.a["h--full"], shape_module_default.a["w--full"], space_module_default.a["p--12"], animation_module_default.a["transition"]].join(" ")} ${renderBorder()} ${renderBackground()}`,
        style: {
          outline: "none",
          minHeight: 50
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["absolute"], layout_module_default.a["b--15"], layout_module_default.a["r--15"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: `${[font_module_default.a["size--12"]].join(" ")} ${renderColor()}`,
          children: limit - value.length
        })
      })]
    }), value.length >= limit && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--warning"]].join(" "),
        children: ["Please shorten your title to ", limit, " characters or less."]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.verify.tsx



/** styles */







/** components */


const VerifyInput = ({
  value = "",
  handleChange
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);

  const renderBorder = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["border--warning"];
    // }
    if (active) {
      return animation_module_default.a["focus-border--darkgreen__3"];
    }

    return "";
  };

  const renderBackground = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["background--lightred__0"];
    // }
    if (active) {
      return animation_module_default.a["background--white"];
    }

    return "";
  };

  const renderColor = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["c--warning"];
    // }
    return animation_module_default.a["c--darkgreen__3"];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        minHeight: 50
      },
      className: [layout_module_default.a["relative"], shape_module_default.a["w--full"], space_module_default.a["m-b--4"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "tel",
        spellCheck: true,
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        onChange: handleChange,
        className: `${[layout_module_default.a["relative"], font_module_default.a["weight--300"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"], font_module_default.a["size--15"], color_module_default.a["c--gray__2"], shape_module_default.a["h--full"], shape_module_default.a["w--full"], space_module_default.a["p--12"], animation_module_default.a["transition"]].join(" ")} ${renderBorder()} ${renderBackground()}`,
        style: {
          outline: "none",
          minHeight: 50
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["absolute"], layout_module_default.a["b--15"], layout_module_default.a["r--15"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          onClick: () => alert("verify"),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: `${[font_module_default.a["size--16"]].join(" ")} ${renderColor()}`,
            children: "Verify"
          })
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.closed.tsx



function input_closed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function input_closed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_closed_ownKeys(Object(source), true).forEach(function (key) { input_closed_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_closed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function input_closed_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */



/** components */


const ClosedInput = ({
  title = "Title here",
  data = {
    value: false
  },
  selected = false,
  setData,
  value
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-r--12"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "closed",
          content: "close",
          onClick: () => setData(input_closed_objectSpread(input_closed_objectSpread({}, data), {}, {
            [value]: false
          })),
          selected: data[value] === false
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "closed",
          content: "check",
          onClick: () => setData(input_closed_objectSpread(input_closed_objectSpread({}, data), {}, {
            [value]: true
          })),
          selected: data[value] === true
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.price.tsx



/** styles **/







/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const PriceInput = ({
  name = "text",
  handleChange,
  handleKeyPress,
  value
}) => {
  const inputRef = Object(external_react_["useRef"])();
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${[shape_module_default.a["h--50"], input_module_default.a["outside"], layout_module_default.a["relative"], space_module_default.a["p-v--6"], space_module_default.a["p-h--12"], layout_module_default.a["items-center"]].join(" ")} ${[color_module_default.a["b--white__3"], shape_module_default.a["br--8"]].join(" ")} ${active ? [color_module_default.a["b-2--black"]].join(" ") : [color_module_default.a["b--white__3"]].join(" ")}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: inputRef,
        autoFocus: true,
        id: name,
        name: name,
        type: "text",
        pattern: "[0-9. -]*",
        onChange: handleChange,
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        value: value,
        onKeyPress: handleKeyPress,
        className: `${[space_module_default.a["p-l--12"], shape_module_default.a["w--full"], layout_module_default.a["block"], color_module_default.a["b--0"], font_module_default.a["size--14"], font_module_default.a["weight--100"], color_module_default.a["c__placeholder--black"]].join(" ")} `,
        style: {
          outline: "none"
        }
      })
    }), (active || value) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "absolute",
        top: 14,
        left: 7
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: "$"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.photo.tsx



/** styles **/






/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const PhotoInput = ({
  handleChange,
  value
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 350
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: [shape_module_default.a["h--full"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "file",
        id: "upload",
        style: {
          display: "none"
        },
        className: [shape_module_default.a["h--full"]].join(" "),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "upload",
        className: [shape_module_default.a["h--full"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            cursor: "pointer",
            padding: 15,
            border: "1px dashed lightgray"
          },
          className: [shape_module_default.a["h--full"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: "url(https://a0.muscache.com/airbnb/static/packages/upload-photos-ghosts.56fe723d.png)"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    style: {
                      padding: "14px 22px",
                      backgroundColor: "#FF5A5F",
                      borderRadius: 4
                    },
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: [space_module_default.a["m-r--8"]].join(" "),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["hb" /* Upload */], {
                          width: 20,
                          stroke: "white"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                          style: {
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            color: "white"
                          },
                          children: "Upload Photos"
                        })
                      })]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: [space_module_default.a["m-t--8"]].join(" "),
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: [font_module_default.a["size--15"], color_module_default.a["c--gray__0"]].join(" "),
                    children: "or drag them in"
                  })
                })]
              })
            })
          })
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/input.another.tsx



/** styles **/





/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */

const AnotherInput = ({
  handleChange,
  value
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: 130,
      padding: 15,
      border: "1px dashed lightgray"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: [shape_module_default.a["h--full"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "file",
        id: "upload",
        style: {
          display: "none"
        },
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "upload",
        className: [shape_module_default.a["h--full"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            cursor: "pointer"
          },
          className: [shape_module_default.a["h--full"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "100%"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["S" /* Plus */], {
                        width: 45,
                        fill: "#D8D8D8"
                      })
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: [font_module_default.a["size--14"], color_module_default.a["c--white__3"], font_module_default.a["no-wrap"]].join(" "),
                    children: "Add another"
                  })
                })]
              })
            })
          })
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/input/index.tsx


function input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_ownKeys(Object(source), true).forEach(function (key) { input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** components */




















/** styles **/




/**
 * Bundles the input components
 * @param {string} variant - Specifies the variant of input component
 */
const Input = (_ref) => {
  let {
    variant = "text",
    spread
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant", "spread"]);

  const variants = {
    email: /*#__PURE__*/Object(jsx_runtime_["jsx"])(EmailInput, input_objectSpread({}, props)),
    password: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PasswordInput, input_objectSpread({}, props)),
    name: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NameInput, input_objectSpread({}, props)),
    birthdate: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BirthdateInput, input_objectSpread({}, props)),
    phone: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhoneNumberInput, input_objectSpread({}, props)),
    region: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegionInput, input_objectSpread({}, props)),
    place: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PlaceInput, input_objectSpread({}, props)),
    guests: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GuestsInput, input_objectSpread({}, props)),
    address: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddressInput, input_objectSpread({}, props)),
    select: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SelectInput, input_objectSpread({}, props)),
    radio: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RadioInput, input_objectSpread({}, props)),
    counter: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CounterInput, input_objectSpread({}, props)),
    text: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextInput, input_objectSpread({}, props)),
    checkbox: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckboxInput, input_objectSpread({}, props)),
    textarea: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextAreaInput, input_objectSpread({}, props)),
    limit: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitInput, input_objectSpread({}, props)),
    verify: /*#__PURE__*/Object(jsx_runtime_["jsx"])(VerifyInput, input_objectSpread({}, props)),
    closed: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ClosedInput, input_objectSpread({}, props)),
    price: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PriceInput, input_objectSpread({}, props)),
    photo: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhotoInput, input_objectSpread({}, props)),
    another: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AnotherInput, input_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: spread && [shape_module_default.a["w--full"]].join(" "),
    "data-testid": `${variant}-input`,
    children: variants[variant]
  });
};

/***/ }),

/***/ "99zD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"paginate": "particle_paginate__2pqCu",
	"slider": "particle_slider__3Lcfp"
};


/***/ }),

/***/ "AHCq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ properties; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ inputTypes; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/atoms/input/logic/logic.guest.tsx

const Options = [1, 2, 3, 4, 5, 6, 7, 8].map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("option", {
    value: option,
    children: [option, " ", index > 0 ? "guests" : "guest"]
  });
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.place.tsx

const Properties = ["Apartment", "House", "Secondary unit", "Unique space", "Bed and breakfast", "Boutique hotel"];
const logic_place_Options = Properties.map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option,
    children: option
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.apartment.tsx

const logic_apartment_Properties = [{
  name: "Apartment",
  description: "Apartments and condominiums are typically located in a multi-unit residential building or complex where other people live."
}, {
  name: "Condominium",
  description: "Typically located in multi-unit residential buildings or complexes where other people live. Condos are often owned by individuals whereas apartments are rented."
}, {
  name: "Casa particular (Cuba)",
  description: "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast"
}, {
  name: "Loft",
  description: "A space with an open layout—usually an apartment or condo. Walls that separate interior rooms in a loft may not extend fully to the ceiling."
}, {
  name: "Serviced Apartment",
  description: "Apartments that offer hotel-like amenities, such as daily cleaning and a front desk, furnished and serviced by professional management companies"
}];
const logic_apartment_Options = logic_apartment_Properties.map(({
  name
}, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: name,
    children: name
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.bedbreakfast.tsx

const logic_bedbreakfast_Properties = [{
  name: "Bed and breakfast",
  description: "Professional hospitality businesses that offer breakfast for guests. A host usually lives on the property."
}, {
  name: "Casa particular (Cuba)",
  description: "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast"
}, {
  name: "Farm stay",
  description: "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts"
}, {
  name: "Minsu (Taiwan)",
  description: "Professionally managed accommodations in Taiwan that offer private rooms for guests"
}, {
  name: "Nature lodge",
  description: "Professional hospitality businesses located in natural settings like forests and mountains"
}, {
  name: "Ryokan (Japan)",
  description: "Ryokans are traditional Japanese inns that usually have a small number of professionally managed rooms and offer a cultural experience for guests."
}];
const logic_bedbreakfast_Options = logic_bedbreakfast_Properties.map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option.name,
    children: option.name
  }, index);
});

// CONCATENATED MODULE: ./components/atoms/input/logic/logic.house.tsx

const logic_house_Properties = [{
  name: "House",
  description: "Residential buildings that are usually stand-alone structures. Some, like duplexes, may share walls or outdoor areas with other houses."
}, {
  name: "Bungalow",
  description: "Houses with architectural features like a wide front porch and a sloping roof, usually single-level homes"
}, {
  name: "Cabin",
  description: "Houses built with natural materials like wood, often located in settings like forests and mountains"
}, {
  name: "Casa particular (Cuba)",
  description: "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast"
}, {
  name: "Chalet",
  description: "Houses that are usually made of wood and have a sloping roof. Many are in locations popular for skiing or summer getaways."
}, {
  name: "Cottage",
  description: "Cozy homes often located in rural areas or near a lake or beach"
}, {
  name: "Cycladic house",
  description: "Traditional whitewashed houses with flat roofs found on mountainsides in the Cycladic islands in Greece"
}, {
  name: "Dammuso",
  description: "Stone houses with wide walls and domed roofs found on the island of Pantelleria in Italy"
}, {
  name: "Done house",
  description: "Houses with a hemispherical roof or completely spherical construction, such as geodesic domes and bubble homes"
}, {
  name: "Earth house",
  description: "Homes that are built into the earth or constructed from natural materials like rammed earth"
}, {
  name: "Farm stay",
  description: "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts"
}, {
  name: "Houseboat",
  description: 'Boats that are more like homes and often set up as a primary residence. Choose "houseboat" if you have a floating home.'
}, {
  name: "Hut",
  description: "Homes made from simple materials like wood or mud and often have thatched roofs made of straw"
}, {
  name: "Lighthouse",
  description: "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water."
}, {
  name: "Pension (South Korea)",
  description: "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water."
}, {
  name: "Shepherd's hut",
  description: "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water."
}, {
  name: "Tiny house",
  description: "Stand-alone houses with compact interior living spaces, usually less than 400 square feet or 37 square metres"
}, {
  name: "Townhouse",
  description: "Private units, like row houses and terraced houses, that share walls and may share outdoor spaces with other units"
}, {
  name: "Trullo (Italy)",
  description: "A trullo is a round, stone house with a cone-shaped roof that originated in the Apulia region of Italy."
}, {
  name: "Villa",
  description: "Luxurious homes that tend to have indoor-outdoor spaces and large yards, gardens, or pools"
}];
const logic_house_Options = logic_house_Properties.map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option.name,
    children: option.name
  });
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.secondary.tsx

const logic_secondary_Properties = [{
  name: "Guesthouse",
  description: "A detached building, sometimes called a carriage house or coach house, that shares a property with another stand-alone structure like a house"
}, {
  name: "Guest suite",
  description: "Sometimes called an in-law, this separate space has a private entrance and is located inside or attached to a larger structure, like a house"
}, {
  name: "Farm stay",
  description: "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts"
}];
const logic_secondary_Options = logic_secondary_Properties.map(({
  name
}, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: name,
    children: name
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.unique.tsx

const logic_unique_Properties = [{
  name: "Barn",
  description: "Converted living spaces that may have been originally used for storing grain, livestock, or farming equipment"
}, {
  name: "Boat",
  description: "Range from sailboats to luxury yachts that are moored while guests are visiting. If you have a houseboat or floating home, choose “houseboat.”"
}, {
  name: "Bus",
  description: "Converted vehicles with creatively reimagined interiors"
}, {
  name: "Camper/RV",
  description: "Big or small motor homes that may be half-home and half-vehicle, or camping trailers with compact spaces"
}, {
  name: "Campsite",
  description: "An area of land where hosts can choose which type of accommodation guests may set up such as a tent, yurt, camper/RV, or tiny house"
}, {
  name: "Castle",
  description: "Majestic and often historical buildings with architectural features like towers, spires, and moats"
}, {
  name: "Cave",
  description: "Natural formations like underground caverns and dwellings carved into hillsides or nuzzled into a cliff"
}, {
  name: "Dome house",
  description: "Houses with a hemispherical roof or completely spherical construction, such as geodesic domes and bubble homes"
}, {
  name: "Earth house",
  description: "Homes that are built into the earth or constructed from natural materials like rammed earth"
}, {
  name: "Farm stay",
  description: "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts"
}, {
  name: "Houseboat",
  description: 'Boats that are more like homes and often set up as a primary residence. Choose "houseboat" if you have a floating home.'
}, {
  name: "Hut",
  description: "Homes made from simple materials like wood or mud and often have thatched roofs made of straw"
}, {
  name: "Igloo",
  description: "Dome-shaped structures made of snow and ice typically found in cold climates where they’re less likely to melt"
}, {
  name: "Island",
  description: "A piece of land completely surrounded by water, great for private getaways in paradise"
}, {
  name: "Lighthouse",
  description: "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water."
}, {
  name: "Pension (Sourth Korea)",
  description: "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water."
}, {
  name: "Plane",
  description: "Aircraft that were built for flight and have now been converted into living spaces"
}, {
  name: "Shepherd's hut",
  description: "Tiny wagons on wheels originally used by shepherds on the move with their sheep"
}, {
  name: "Tent",
  description: "Structures made of fabric and poles that are usually portable and collapsible. Some tents, like bedouin tents, are more permanent."
}, {
  name: "Tiny house",
  description: "Stand-alone houses with compact interior living spaces, usually less than 400 square feet or 37 square metres"
}, {
  name: "Tipi",
  description: "Cone-shaped tents supported by poles. They usually have a flap door and may have an opening at the top."
}, {
  name: "Train",
  description: "Cabooses, boxcars, and other railroad cars that have been converted into living spaces"
}, {
  name: "Treehouse",
  description: "Treehouses are built into the trunks or branches of trees. Nature-loving guests may climb a ladder or stairs to enjoy beautiful views."
}, {
  name: "Windmill",
  description: "Unique structures originally designed with blades to catch the wind that now double as a living space—some may still be fully functioning"
}, {
  name: "Yurt",
  description: "Rounded tents usually made from a collapsible wooden framework"
}];
const logic_unique_Options = logic_unique_Properties.map(({
  name
}, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: name,
    children: name
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.boutique.tsx

const logic_boutique_Properties = [{
  name: "Boutique hotel",
  description: "Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
}, {
  name: "Aparthotel",
  description: "Hotel-like accommodations with rooms that feel more like apartments and amenities similar to a hotel, including a front desk"
}, {
  name: "Heritage hotel (India)",
  description: "Historically significant buildings in India like palaces, havelis, and forts that have been converted into professionally managed accommodations"
}, {
  name: "Hostel",
  description: "Professional hospitality businesses that usually rent beds in shared dorms and private rooms for guests"
}, {
  name: "Hotel",
  description: "Professional hospitality businesses that offer accommodations like private rooms, suites, or unique stays for guests"
}, {
  name: "Nature lodge",
  description: "Professional hospitality businesses located in natural settings like forests and mountains"
}, {
  name: "Resort",
  description: "Professional hospitality businesses with accommodations ranging from hotel rooms to private rentals often with more services and amenities than hotels"
}, {
  name: "Serviced apartment",
  description: "Apartments that offer hotel-like amenities, such as daily cleaning and a front desk, furnished and serviced by professional management companies"
}, {
  name: "Kezhan (China)",
  description: "Small and medium-sized places to stay with local characteristics, offering sophisticated amenities, toiletries, simple dining, social spaces, and custom-tailored services."
}];
const logic_boutique_Options = logic_boutique_Properties.map(({
  name
}, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: name,
    children: name
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.bedrooms.tsx

const logic_bedrooms_Options = [1, 2, 3, 4, 5, 6, 7, 8].map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option,
    children: index > 0 ? `${option} ${index > 0 ? "guests" : "guest"}` : "Studio"
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.country.tsx

const logic_country_Properties = ["Canada", "Japan"];
const logic_country_Options = logic_country_Properties.map((name, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: name,
    children: name
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.checkin.tsx

const FromProperties = [{
  value: "flexible",
  display: "Flexible"
}, {
  value: 8,
  display: "8:00 a.m."
}, {
  value: 9,
  display: "9:00 a.m."
}, {
  value: 10,
  display: "10:00 a.m."
}, {
  value: 11,
  display: "11:00 a.m."
}, {
  value: 12,
  display: "12:00 p.m."
}, {
  value: 13,
  display: "1:00 p.m."
}, {
  value: 14,
  display: "2:00 p.m."
}, {
  value: 15,
  display: "3:00 p.m."
}, {
  value: 16,
  display: "4:00 p.m."
}, {
  value: 17,
  display: "5:00 p.m."
}, {
  value: 18,
  display: "6:00 p.m."
}, {
  value: 19,
  display: "7:00 p.m."
}, {
  value: 20,
  display: "8:00 p.m."
}, {
  value: 21,
  display: "9:00 p.m."
}, {
  value: 22,
  display: "10:00 p.m."
}, {
  value: 23,
  display: "11:00 p.m."
}, {
  value: 24,
  display: "12:00 p.m."
}, {
  value: 25,
  display: "1:00 a.m. (next day)"
}];
const FromOptions = FromProperties.map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option.value,
    children: option.display
  }, index);
});
const ToProperties = [{
  value: "flexible",
  display: "Flexible"
}, {
  value: 9,
  display: "9:00 a.m."
}, {
  value: 10,
  display: "10:00 a.m."
}, {
  value: 11,
  display: "11:00 a.m."
}, {
  value: 12,
  display: "12:00 p.m."
}, {
  value: 13,
  display: "1:00 p.m."
}, {
  value: 14,
  display: "2:00 p.m."
}, {
  value: 15,
  display: "3:00 p.m."
}, {
  value: 16,
  display: "4:00 p.m."
}, {
  value: 17,
  display: "5:00 p.m."
}, {
  value: 18,
  display: "6:00 p.m."
}, {
  value: 19,
  display: "7:00 p.m."
}, {
  value: 20,
  display: "8:00 p.m."
}, {
  value: 21,
  display: "9:00 p.m."
}, {
  value: 22,
  display: "10:00 p.m."
}, {
  value: 23,
  display: "11:00 p.m."
}, {
  value: 24,
  display: "12:00 p.m."
}, {
  value: 25,
  display: "1:00 a.m. (next day)"
}, {
  value: 26,
  display: "2:00 a.m. (next day)"
}];
const ToOptions = ToProperties.map((option, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: option.value,
    children: option.display
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.currency.tsx

const logic_currency_Properties = [{
  value: "USD",
  display: "USD United States dollar"
}];
const logic_currency_Options = logic_currency_Properties.map(({
  value,
  display
}, index) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: value,
    children: display
  }, index);
});
// CONCATENATED MODULE: ./components/atoms/input/logic/logic.types.tsx
/** components */












const properties = {
  place: Properties,
  Apartment: logic_apartment_Properties,
  "Bed and breakfast": logic_bedbreakfast_Properties,
  House: logic_house_Properties,
  "Secondary unit": logic_secondary_Properties,
  "Unique space": logic_unique_Properties,
  "Boutique hotel": logic_boutique_Properties
};
const inputTypes = {
  guest: Options,
  place: {
    default: "Select one",
    options: logic_place_Options
  },
  Apartment: {
    default: "Select property type",
    options: logic_apartment_Options
  },
  "Bed and breakfast": {
    default: "Select Property",
    options: logic_bedbreakfast_Options
  },
  "Secondary unit": {
    default: "Select property type",
    options: logic_secondary_Options
  },
  "Unique space": {
    default: "Select property type",
    options: logic_unique_Options
  },
  House: {
    default: "Select property type",
    options: logic_house_Options
  },
  "Boutique hotel": {
    default: "Select property type",
    options: logic_boutique_Options
  },
  bedrooms: {
    options: logic_bedrooms_Options
  },
  country: {
    options: logic_country_Options
  },
  checkinFrom: {
    default: "Select a time",
    options: FromOptions
  },
  checkinTo: {
    default: "Select a time",
    options: ToOptions
  },
  currency: {
    options: logic_currency_Options
  }
};

/***/ }),

/***/ "DUhU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// CONCATENATED MODULE: ./components/molecules/card/card.category.tsx



/** styles **/


 // import styles from "@card/card.module.scss";



/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */

const CategoryCard = ({
  imgUrl,
  title = "Title"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [layout_module_default.a["relative"]].join(" "),
      style: {
        paddingTop: "66.66%"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["absolute"], layout_module_default.a["t--0"], layout_module_default.a["b--0"], layout_module_default.a["r--0"], layout_module_default.a["l--0"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [shape_module_default.a["w--full"], shape_module_default.a["h--full"]].join(" "),
          children: imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: imgUrl,
            alt: "unique stays",
            className: [shape_module_default.a["br--8"]].join(" ")
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [shape_module_default.a["w--full"], shape_module_default.a["h--full"], shape_module_default.a["br--8"], color_module_default.a["bg--white__2"]].join(" ")
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-t--6"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"], color_module_default.a["c--gray__4"]].join(" "),
        children: title
      })
    })]
  });
};
{
  /* <div className={styles["category-section__card"]}>
  <div className={styles["category-section__card--img"]}>
  {imgUrl ? (
    <img src={imgUrl} alt="unique stays" />
  ) : (
    <div style={{ backgroundColor: "lightgray", width: "100%" }} />
  )}
  </div>
  <div>
  <h3
    className={[
      font["weight--500"],
      font["size--17"],
      color["c--gray__4"],
    ].join(" ")}
  >
    {title}
  </h3>
  </div>
  </div> */
}
// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./components/particles/particle.module.scss
var particle_module = __webpack_require__("99zD");
var particle_module_default = /*#__PURE__*/__webpack_require__.n(particle_module);

// EXTERNAL MODULE: ./components/atoms/button/button.stories.tsx
var button_stories = __webpack_require__("dOrH");

// CONCATENATED MODULE: ./components/particles/image.slider.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** components */


/** styles **/


/** stories */



const Dots = ({
  slides,
  activeSlide
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      position: "absolute",
      bottom: 25,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: slides.map((_, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      style: {
        transition: "all 0.2s ease-in",
        padding: 3,
        marginRight: 5,
        cursor: "pointer",
        borderRadius: "50%",
        background: `${activeSlide === index ? "white" : "lightgray"}`
      }
    }, index))
  });
};

const Slide = ({
  slide
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: "100%",
      width: "100%",
      backgroundImage: slide && `url(${slide})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundColor: !slide && "lightgray"
    }
  });
};

const ImageSlider = ({
  slides = [undefined, undefined, undefined]
}) => {
  const {
    0: style,
    1: setStyle
  } = Object(external_react_["useState"])({
    opacity: 0
  });
  const {
    0: width,
    1: setWidth
  } = Object(external_react_["useState"])(1000);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    activeSlide: 0,
    translate: 0,
    transition: 0.45
  });
  const containerRef = Object(external_react_["useRef"])();

  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  Object(external_react_["useLayoutEffect"])(() => {
    window.addEventListener("resize", handleRef);
    handleRef();
    return () => {
      window.removeEventListener("resize", handleRef);
    };
  });

  const previousSlide = () => {
    if (state.activeSlide === 0) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        translate: (slides.length - 1) * width,
        activeSlide: slides.length - 1
      }));
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width
    }));
  };

  const nextSlide = () => {
    if (state.activeSlide === slides.length - 1) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        translate: 0,
        activeSlide: 0
      }));
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width
    }));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    ref: containerRef,
    onMouseEnter: () => setStyle({
      opacity: 1
    }),
    onMouseLeave: () => setStyle({
      opacity: 0
    }),
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: 12,
      zIndex: 50
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        borderRadius: 12,
        transform: `translateX(-${state.translate}px)`,
        transition: `transform ease-out ${state.transition}s`,
        height: "100%",
        width: width * slides.length,
        display: "flex"
      },
      children: slides.map((slide, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide, {
          slide: slide
        }, index);
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: _objectSpread(_objectSpread({}, style), {}, {
        transition: "opacity 0.2s ease-out",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 10,
        zIndex: 60
      }),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], _objectSpread(_objectSpread({}, button_stories["g" /* Paginate */].args), {}, {
        animate: true,
        direction: "left",
        onClick: previousSlide
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: _objectSpread(_objectSpread({}, style), {}, {
        transition: "opacity 0.2s ease-out",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: 10,
        zIndex: 60
      }),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "paginate",
        animate: true,
        direction: "right",
        onClick: nextSlide
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: _objectSpread(_objectSpread({}, style), {}, {
        transition: "opacity 0.2s ease-out"
      }),
      className: [particle_module_default.a["dots"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dots, {
        slides: slides,
        activeSlide: state.activeSlide
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/logic/logic.horizontal.ts
const renderType = card => {
  if (card.type === "camper_rv") {
    return "Camper/RV";
  }

  return card.type;
};
// CONCATENATED MODULE: ./components/molecules/card/card.horizontal.tsx



/** styles **/





/** vectors */


/** Particles */


/** Logic */


/**
 * Renders the horizontal card component
 * @param {Object} card - Information about the card
 * @param {boolean} superhost - Whether if host is the superhost or not
 * @param {boolean} save - Whether if the card can be saved or not
 */

const HorizontalCard = ({
  card = {
    images: undefined,
    type: "Type of Stay",
    ratings: 5.0,
    location: "Location",
    title: "Title should be here",
    number_of_reviews: 100
  },
  superhost = false,
  save = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "relative",
        paddingTop: "66.6%"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            height: "100%"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [layout_module_default.a["relative"], shape_module_default.a["h--full"]].join(" "),
            children: [card.images ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [shape_module_default.a["br--12"], shape_module_default.a["h--full"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageSlider, {
                slides: card.images
              })
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                width: "100%",
                height: "100%",
                borderRadius: 12,
                backgroundColor: "lightgray"
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: [space_module_default.a["p-v--8"], space_module_default.a["p-h--10"], layout_module_default.a["at--0"], layout_module_default.a["flex"], layout_module_default.a["justify-between"], shape_module_default.a["w--full"]].join(" "),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  zIndex: 50
                },
                className: superhost ? [].join(" ") : [color_module_default.a["c--white"], shape_module_default.a["hidden"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: [space_module_default.a["p-h--8"], space_module_default.a["p-v--4"], color_module_default.a["bg--white__1"], shape_module_default.a["shadow--lg"], shape_module_default.a["br--3"]].join(" "),
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: [font_module_default.a["size--12"], font_module_default.a["uppercase"], font_module_default.a["ls--3"]].join(" "),
                    children: "Superhost"
                  })
                })
              }), save && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  zIndex: 50
                },
                className: [save ? [].join(" ") : [color_module_default.a["c--white"], shape_module_default.a["hidden"]].join(" ")].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["E" /* Heart */], {
                  fill: "rgba(0, 0, 0, 0.5)",
                  width: 24,
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: "flex",
        marginTop: 6
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-r--3"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          fill: "#F5385D",
          width: 14,
          viewBox: "0 0 1000 1000",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-r--3"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["weight--100"], font_module_default.a["size--13"]].join(" "),
          children: card.ratings.toFixed(2)
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["weight--100"], font_module_default.a["size--13"], color_module_default.a["c--gray__0"]].join(" "),
          children: `(${card.number_of_reviews})`
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            textTransform: "capitalize"
          },
          className: [font_module_default.a["ls--4"], font_module_default.a["weight--100"], font_module_default.a["size--15"], color_module_default.a["c--gray__4"]].join(" "),
          children: renderType(card)
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\xA0 \xB7 \xA0 "
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["ls--4"], font_module_default.a["weight--100"], font_module_default.a["size--15"], color_module_default.a["c--gray__4"]].join(" "),
          children: card.location
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: {
          maxHeight: 250,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        className: [font_module_default.a["ls--4"], font_module_default.a["weight--100"], font_module_default.a["size--15"], color_module_default.a["c--gray__4"]].join(" "),
        children: card.title
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/molecules/card/card.module.scss
var card_module = __webpack_require__("Jzoe");
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);

// CONCATENATED MODULE: ./components/molecules/card/card.vertical.tsx



/** styles **/






/** vectors */


/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */

const VerticalCard = ({
  imgUrl,
  superhost,
  ratings = 5.0,
  number_of_reviews = 100,
  save,
  country = "Country",
  title = "Title",
  cost = 10
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [card_module_default.a["w__vertical"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        paddingTop: "135%"
      },
      className: [layout_module_default.a["relative"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        children: [imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: [shape_module_default.a["br--12"]].join(" "),
          src: imgUrl
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [shape_module_default.a["br--12"]].join(" "),
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "lightgray"
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], space_module_default.a["p-v--8"], space_module_default.a["p-h--10"], layout_module_default.a["at--0"], layout_module_default.a["justify-between"], shape_module_default.a["w--full"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: superhost ? [].join(" ") : [color_module_default.a["c--white"], shape_module_default.a["hidden"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["p-h--8"], space_module_default.a["p-v--4"], color_module_default.a["bg--white__1"], shape_module_default.a["shadow--lg"], shape_module_default.a["br--3"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: [font_module_default.a["size--12"], font_module_default.a["uppercase"], font_module_default.a["ls--3"]].join(" "),
                children: "Superhost"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: save ? [color_module_default.a["c--white"]].join(" ") : [color_module_default.a["c--white"], shape_module_default.a["hidden"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["E" /* Heart */], {
              fill: "rgba(0, 0, 0, 0.5)",
              width: 24,
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-t--4"], layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-r--3"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
          width: 15
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-r--3"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["weight--100"], font_module_default.a["size--13"]].join(" "),
          children: ratings
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["weight--100"], font_module_default.a["size--13"], color_module_default.a["c--gray__0"]].join(" "),
          children: `(${number_of_reviews})`
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [color_module_default.a["c--gray__0"]].join(" "),
          children: "\xA0 \xB7 \xA0 "
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--13"], font_module_default.a["weight--100"], color_module_default.a["c--gray__0"]].join(" "),
          children: country
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["ls--4"], font_module_default.a["weight--100"], font_module_default.a["size--15"], color_module_default.a["c--gray__4"]].join(" "),
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: [font_module_default.a["weight--100"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: [font_module_default.a["weight--500"]].join(" "),
          children: ["From $", cost]
        }), "/person"]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.typestay.tsx



/** styles **/






/**
 * Renders the typestay card
 * @param {Object} card - Information about the card
 */

const TypeStayCard = ({
  card = {
    title: "Type",
    imgUrl: "https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=720"
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [layout_module_default.a["block"], shape_module_default.a["h--full"], shape_module_default.a["w--full"], space_module_default.a["m-r--8"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [shape_module_default.a["br--12"], shape_module_default.a["shadow--sm"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "relative",
          paddingTop: "66.6667%"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
              srcSet: card.imgUrl
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              decoding: "async",
              src: card.imgUrl,
              style: {
                objectFit: "cover",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
              }
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [card_module_default.a["h__card"]].join(" "),
        style: {
          padding: 16,
          backgroundColor: "white",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["weight--500"], font_module_default.a["size--14"], color_module_default.a["c--gray__3"]].join(" "),
          children: card.title
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.arrangements.tsx



/** styles **/



/** vectors */


/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */

const ArrangementsCard = ({
  card = {
    type: "Bedroom",
    beds: [{
      type: "double bed",
      count: 1
    }]
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [shape_module_default.a["w--48"], space_module_default.a["p-v--25"], color_module_default.a["b--white__2"], shape_module_default.a["br--15"], shape_module_default.a["w--200"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["p-l--14"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["p-t--4"], space_module_default.a["p-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["w" /* DoubleBed */], {
          width: 24
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [space_module_default.a["p-t--4"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Bedroom"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: card.beds.map((bed, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: [color_module_default.a["c--gray__2"]].join(" "),
            children: [bed.count, " ", bed.type]
          }, index);
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./public/svg/regular.tsx
var regular = __webpack_require__("6ztO");

// CONCATENATED MODULE: ./components/molecules/card/logic/logic.checkin.ts
function logic_checkin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function logic_checkin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { logic_checkin_ownKeys(Object(source), true).forEach(function (key) { logic_checkin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { logic_checkin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function logic_checkin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const checkInBorder = selected => {
  if (selected.checkin) {} else if (selected.checkout) {} else if (selected.guests) {
    return [shape_module_default.a["w--50p"], shape_module_default.a["btlr--6"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], color_module_default.a["b-t--white__3"], space_module_default.a["p-v--10"]].join(" ");
  }

  return [shape_module_default.a["w--50p"], shape_module_default.a["btlr--6"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], color_module_default.a["b-b--white__3"], color_module_default.a["b-t--white__3"], space_module_default.a["p-v--10"]].join(" ");
};
const checkOutBorder = selected => {
  if (selected.checkin) {} else if (selected.checkout) {} else if (selected.guests) {
    return [shape_module_default.a["w--50p"], shape_module_default.a["btrr--6"], color_module_default.a["b-r--white__3"], color_module_default.a["b-t--white__3"], space_module_default.a["p-v--10"]].join(" ");
  }

  return [shape_module_default.a["w--50p"], shape_module_default.a["btrr--6"], color_module_default.a["b-r--white__3"], color_module_default.a["b-b--white__3"], color_module_default.a["b-t--white__3"], space_module_default.a["p-v--10"]].join(" ");
};
const guestBorder = selected => {
  if (selected.checkin) {
    return [shape_module_default.a["h--full"], color_module_default.a["b-t--transparent"], color_module_default.a["b-b--transparent"], color_module_default.a["b-l--transparent"], color_module_default.a["b-r--transparent"], space_module_default.a["p-v--12"], shape_module_default.a["w--full"], shape_module_default.a["bbr--6"], color_module_default.a["bg--transparent"]].join(" ");
  } else if (selected.checkout) {} else if (selected.guests) {
    return [shape_module_default.a["h--full"], color_module_default.a["b--gray__3"], space_module_default.a["p-v--12"], shape_module_default.a["br--6"]].join(" ");
  }

  return [shape_module_default.a["h--full"], color_module_default.a["b-t--transparent"], color_module_default.a["b-b--transparent"], color_module_default.a["b-l--transparent"], color_module_default.a["b-r--transparent"], space_module_default.a["p-v--12"], shape_module_default.a["w--full"], shape_module_default.a["bbr--6"], color_module_default.a["bg--transparent"]].join(" ");
};
const useCheckin = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "guests":
        return logic_checkin_objectSpread(logic_checkin_objectSpread({}, state), {}, {
          guests: !state.guests
        });

      case "checkout":
        return logic_checkin_objectSpread(logic_checkin_objectSpread({}, state), {}, {
          checkout: !state.checkout
        });

      case "checkin":
        return logic_checkin_objectSpread(logic_checkin_objectSpread({}, state), {}, {
          checkin: !state.checkin
        });

      default:
        return state;
    }
  };

  const {
    0: selected,
    1: dispatchSelected
  } = Object(external_react_["useReducer"])(reducer, {
    checkin: false,
    checkout: false,
    guests: false
  });
  return [selected, dispatchSelected];
};
// CONCATENATED MODULE: ./components/molecules/card/card.checkin.tsx




/** styles **/






/** vectors */



/** logic */



/**
 * Renders the checkin card
 */

const CheckInCard = () => {
  const [selected, dispatchSelected] = useCheckin();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [card_module_default.a["display__checkin--wrapper"], card_module_default.a["position__checkin--wrapper"], shape_module_default.a["shadow--lg"], color_module_default.a["b--white__2"], card_module_default.a["w__checkin--wrapper"], space_module_default.a["p-v--22"]].join(" "),
      style: {
        backgroundColor: "white",
        zIndex: 50,
        borderRadius: 10
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["p-h--24"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["justify-between"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [space_module_default.a["p-v--10"], color_module_default.a["c--gray__2"], font_module_default.a["size--21"], font_module_default.a["weight--500"]].join(" "),
            children: "Add dates for prices"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              width: 100
            },
            className: [space_module_default.a["p-v--10"], color_module_default.a["c--gray__2"], font_module_default.a["size--21"], font_module_default.a["weight--500"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [layout_module_default.a["inline-block"], space_module_default.a["m-r--4"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
                width: 10
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: [layout_module_default.a["inline-block"], font_module_default.a["size--14"], space_module_default.a["m-r--4"]].join(" "),
              children: "4.93"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: [layout_module_default.a["inline-block"], font_module_default.a["size--14"], space_module_default.a["weight-100"], color_module_default.a["c--white__3"]].join(" "),
              children: "(248)"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [shape_module_default.a["br--8"], space_module_default.a["m-t--12"], color_module_default.a["b--white__2"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              height: 60
            },
            className: [layout_module_default.a["flex"], shape_module_default.a["w--full"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => {
                dispatchSelected({
                  type: "checkin"
                });
              },
              className: checkInBorder(selected),
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: [space_module_default.a["p-h--12"]].join(" "),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: [layout_module_default.a["block"], font_module_default.a["text--left"], font_module_default.a["size--10"], font_module_default.a["weight--700"], color_module_default.a["c--gray__3"]].join(" "),
                  children: "CHECK-IN"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: [shape_module_default.a["w--full"], font_module_default.a["weight--300"], font_module_default.a["size--14"], color_module_default.a["b--0"], shape_module_default.a["outline--none"]].join(" "),
                  placeholder: "Add date"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => {
                dispatchSelected({
                  type: "checkout"
                });
              },
              className: checkOutBorder(selected),
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: [space_module_default.a["p-h--12"]].join(" "),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: [layout_module_default.a["block"], font_module_default.a["text--left"], font_module_default.a["size--10"], font_module_default.a["weight--700"], color_module_default.a["c--gray__3"]].join(" "),
                  children: "CHECK-OUT"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  placeholder: "Add date",
                  className: [shape_module_default.a["w--full"], font_module_default.a["weight--300"], font_module_default.a["size--14"], color_module_default.a["b--0"], shape_module_default.a["outline--none"]].join(" ")
                })]
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            style: {
              height: 60
            },
            onClick: () => {
              dispatchSelected({
                type: "guests"
              });
            },
            className: selected.guests ? [color_module_default.a["b--gray__3"], shape_module_default.a["w--full"], color_module_default.a["bg--transparent"], shape_module_default.a["br--6"]].join(" ") : [color_module_default.a["b-t--transparent"], color_module_default.a["b-b--white__3"], color_module_default.a["b-l--white__3"], color_module_default.a["b-r--white__3"], color_module_default.a["bg--transparent"], shape_module_default.a["bbr--6"], shape_module_default.a["w--full"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: guestBorder(selected),
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: [space_module_default.a["p-h--12"], layout_module_default.a["flex"], layout_module_default.a["justify-between"], layout_module_default.a["items-center"]].join(" "),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                    className: [layout_module_default.a["block"], font_module_default.a["text--left"], font_module_default.a["size--10"], font_module_default.a["weight--700"], color_module_default.a["c--gray__3"]].join(" "),
                    children: "GUESTS"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: [font_module_default.a["weight--300"], font_module_default.a["size--14"]].join(" "),
                    children: "1 guest"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["a" /* ChevronDown */], {
                    width: 14
                  })
                })]
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--24"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: [shape_module_default.a["w--full"], space_module_default.a["p-v--14"], font_module_default.a["size--15"], shape_module_default.a["br--5"], color_module_default.a["bg--primary"], color_module_default.a["c--white"], font_module_default.a["weight--300"]].join(" "),
            children: "Check availability"
          })
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./components/molecules/card/logic/logic.review.ts
const renderDescription = description => {
  return `${description.split(" ").slice(0, 30).join(" ")}...`;
};
// CONCATENATED MODULE: ./components/molecules/card/card.review.tsx



/** styles **/






/** Logic */


/**
 * Renders the review card component
 * @param {string} imgUrl - Image of the review card
 * @param {string} description - Description of the review card
 */

const ReviewCard = ({
  imgUrl,
  user = "User",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  commentedDate = "Month, Year"
}) => {
  const {
    0: display,
    1: setDisplay
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p-v--12"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["p-b--8"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: 55,
          width: 55,
          borderRadius: 9999
        },
        children: imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: imgUrl,
          style: {
            borderRadius: 9999
          }
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [shape_module_default.a["w--full"], shape_module_default.a["h--full"], shape_module_default.a["br--circle"], color_module_default.a["bg--white__2"]].join(" ")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-l--12"], space_module_default.a["p-b--8"], layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["flex-col"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [color_module_default.a["c--gray__3"]].join(" "),
            children: user
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"], color_module_default.a["c--gray__1"], font_module_default.a["weight--300"]].join(" "),
            children: commentedDate
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: space_module_default.a["m-v--12"],
      children: display || description.split(" ").length < 75 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["weight--100"], font_module_default.a["lh--15"]].join(" "),
        children: description
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: [font_module_default.a["weight--100"], font_module_default.a["lh--15"]].join(" "),
        children: [renderDescription(description), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: [layout_module_default.a["inline-block"], space_module_default.a["m-l--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [color_module_default.a["bg--transparent"], font_module_default.a["size--16"]].join(" "),
            onClick: () => setDisplay(!display),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
              children: "read more"
            })
          })
        })]
      })
    })]
  });
};
// EXTERNAL MODULE: ./styles/responsive.module.scss
var responsive_module = __webpack_require__("SFqS");
var responsive_module_default = /*#__PURE__*/__webpack_require__.n(responsive_module);

// EXTERNAL MODULE: ./components/atoms/bullet/index.tsx + 16 modules
var bullet = __webpack_require__("18ll");

// CONCATENATED MODULE: ./components/molecules/card/card.stay.tsx



/** styles **/






/** vectors */


/** components */




/**
 * Renders the stay card component
 * @param {string[]} images - List of images to be displayed
 * @param {string} typeStay - Type of stay
 * @param {string} location - Location of the stay
 * @param {string} title - Title of the stay
 * @param {Object} accomodations - Information about the accomodations of the stay
 * @param {string[]} characteristics - List of characteristics
 */

const StayCard = ({
  images,
  typeStay = "Type of stay",
  location = "Location",
  title = "Title of stay",
  accomodations = {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1
  },
  characteristics = ["characteristic"]
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [responsive_module_default.a["b_to_n--sm"], space_module_default.a["m-b--32--sm"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card, {
        variant: "horizontal"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [responsive_module_default.a["n_to_b--sm"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["p-v--22"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["justify-between"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [layout_module_default.a["flex"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [shape_module_default.a["w--300"], shape_module_default.a["min-h--200"], space_module_default.a["m-r--15"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [shape_module_default.a["br--12"], shape_module_default.a["h--full"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageSlider, {
                  slides: images
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: [layout_module_default.a["flex"], layout_module_default.a["flex-col"], layout_module_default.a["justify-between"]].join(" "),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                  className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                  children: [typeStay, " in ", location]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                  className: [font_module_default.a["weight--300"], space_module_default.a["m-v--4"], font_module_default.a["size--17"]].join(" "),
                  children: title
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: [color_module_default.a["bg--white__2"], space_module_default.a["m-v--8"], shape_module_default.a["w--45"], shape_module_default.a["h--1"]].join(" ")
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [accomodations.guests, " guests"]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [" ", "\xB7", " "]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [accomodations.bedroom, " bedroom"]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [" ", "\xB7", " "]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [accomodations.beds, " beds"]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [" ", "\xB7", " "]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                    children: [accomodations.bath, " bath"]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  children: characteristics.map((characteristic, index) => {
                    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: [color_module_default.a["c--gray__1"], font_module_default.a["size--14"]].join(" "),
                      children: characteristic
                    }, index);
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
                  variant: "rating"
                })
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["E" /* Heart */], {
              fill: "white",
              width: 24,
              stroke: "black",
              strokeWidth: 2
            })
          })]
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/logic/logic.nearby.ts
const renderSize = (card, size) => {
  switch (size) {
    case "sm":
      return [card["w__nearby--sm"]].join(" ");

    case "lg":
      return [card["w__nearby--lg"]].join(" ");

    default:
      return;
  }
};
// CONCATENATED MODULE: ./components/molecules/card/card.nearby.tsx



/** styles **/




/** Logic */


/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */

const NearbyCard = ({
  imgUrl,
  city = "City",
  hours = 1,
  size = "sm"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${renderSize(card_module_default.a, size)} ${[space_module_default.a["m-r--12"]].join(" ")}`,
      children: imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: imgUrl,
        style: {
          borderRadius: 10
        }
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: 50,
          width: 50,
          borderRadius: 10,
          backgroundColor: "lightgray"
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--15"], space_module_default.a["m-b--4"]].join(" "),
        children: city
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: [hours, " hour drive"]
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.online.tsx



/** styles **/



/**
 * Renders the online card component
 * @param {string} small - Image with smaller pixels
 * @param {string} large - Image with larger pixels
 * @param {string} title - Title of the card
 * @param {boolean} inverse - Whether if the component takes the inverse styling or not
 */

const OnlineCard = ({
  small,
  large,
  title = "Learn to make soup dumplings in Shanghai",
  inverse = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      height: "100%",
      width: "100%",
      position: "relative"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        display: "inline-block",
        verticalAlign: "bottom",
        minHeight: 1,
        height: "100%",
        width: "100%"
      },
      children: small && large ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          srcSet: `${large}?im_w=480 1x, ${large}?im_w=960 2x`,
          media: "(min-width: 743.1px) and (max-width: 1127px)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          srcSet: `${large}?im_w=480 1x, ${large}?im_w=1200 2x`,
          media: "(min-width: 1127.1px) and (max-width: 1439px)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          srcSet: `${large}?im_w=720 1x, ${large}?im_w=1680 2x`,
          media: "(min-width: 1439.1px)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          style: {
            objectFit: "cover",
            verticalAlign: "bottom"
          },
          className: [shape_module_default.a["br--20"]].join(" "),
          "aria-hidden": "true",
          decoding: "async",
          src: `${small}?im_w=720`
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [shape_module_default.a["w--full"], color_module_default.a["bg--white__2"], shape_module_default.a["br--20"]].join(" "),
        style: {
          paddingTop: "100%"
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
      },
      className: `${inverse ? color_module_default.a["bg--gray__4"] : color_module_default.a["bg--white"]} ${[shape_module_default.a["bbr--15"], [shape_module_default.a["shadow--lg"]].join(" ")].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          padding: "15px 15px 0 15px",
          width: "100%",
          minHeight: 75,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: `${inverse ? color_module_default.a["c--white"] : font_module_default.a["weight--500"]} ${[font_module_default.a["size--15"]].join(" ")}`,
          children: title
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/logic/logic.participate.tsx



const getParticipateContent = () => {
  const types = {
    call: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["q" /* Computer */], {
        width: 32
      }),
      title: "Join a video call",
      description: "Download Zoom for free on a desktop or mobile device. After you book, you’ll receive an email with a link and details on how to join.",
      more: "Show more"
    },
    private: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["Q" /* People */], {
        width: 32
      }),
      title: "Book a private group",
      description: "Cici can host private groups of any size, up to 100 guests. Private group rates start at $340."
    },
    request: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["e" /* Calendar */], {
        width: 32
      }),
      title: "Request availability",
      description: "Can’t find a date that works? Cici can schedule and customize an experience based on your preferences.",
      more: "Contact Cici"
    }
  };
  return types;
};
// CONCATENATED MODULE: ./components/molecules/card/card.participate.tsx



/** styles **/




/** vectors */


/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */

const ParticipateCard = ({
  categoryType = "call"
}) => {
  const participates = getParticipateContent();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [shape_module_default.a["min-h--300"], shape_module_default.a["w--210"], shape_module_default.a["h--full"], space_module_default.a["p--16"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--12"]].join(" "),
      children: participates[categoryType].icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"]].join(" "),
        children: participates[categoryType].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: participates[categoryType].description
      })
    }), participates[categoryType].more && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
          children: participates[categoryType].more
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.available.tsx



/** components */

/** styles **/






/**
 * Renders the available card component
 * @param {string} date - The date which the experience is available
 * @param {string} from - The time which the experience starts
 * @param {string} to - The time which the experience ends
 * @param {string} standard - The time standard
 * @param {number} price - The price of the experience
 */

const AvailableCard = ({
  date = "Tue., Nov. 10",
  from = "1:00 a.m. ",
  to = "3:00 a.m. ",
  standard = "PST",
  price = 31
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p--24"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--6"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: date
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: [from, " - ", to, " ", standard]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: "Book for a private group"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-v--16"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("b", {
          children: ["$", price]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: " /person"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [layout_module_default.a["inline-block"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "primary",
        size: "sm",
        title: "Choose"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.host.tsx



/** styles **/





/** components */


/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */

const HostCard = ({
  imgUrl,
  host = "Host",
  stayType = "Type",
  location = "Location"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: [shape_module_default.a["br--20"]].join(" "),
        style: {
          objectFit: "cover",
          height: 434,
          width: 350
        },
        src: imgUrl
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [shape_module_default.a["br--20"], color_module_default.a["bg--white__2"]].join(" "),
        style: {
          height: 434,
          width: 350
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        marginTop: 6
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: host
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
        style: {
          textTransform: "capitalize"
        },
        className: [font_module_default.a["ls--4"], font_module_default.a["size--15"], color_module_default.a["c--gray__4"]].join(" "),
        children: ["Hosts a ", stayType, " in ", location]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        onClick: () => router_default.a.push("/"),
        variant: "underline",
        title: `Check out some ${stayType}s`
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.set.tsx



/** styles **/





/** vectors */


const SetCard = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [shape_module_default.a["br--15"], color_module_default.a["b--white__2"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [shape_module_default.a["w--full"], shape_module_default.a["btr--15"], shape_module_default.a["h--8"], color_module_default.a["bg--green__1"]].join(" ")
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["p--15"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-r--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["h" /* Check */], {
            width: 18,
            fill: "#268A04"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--4"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: [font_module_default.a["size--16"]].join(" "),
              children: "You're all set!"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: [font_module_default.a["size--14"], color_module_default.a["c--gray__1"]].join(" "),
              children: "This helps us keep your account secure"
            })
          })]
        })]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.again.tsx



/** styles **/





/** vectors */


const AgainCard = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [shape_module_default.a["br--15"], color_module_default.a["b--white__2"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["p--18"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-r--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["p--12"], shape_module_default.a["br--circle"], color_module_default.a["bg--red__2"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["jb" /* Warning */], {
              width: 18,
              fill: "white"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--4"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: [font_module_default.a["size--16"]].join(" "),
              children: "Let's try that again"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: [font_module_default.a["size--14"], color_module_default.a["c--gray__1"]].join(" "),
              children: "There isn\u2019t an account associated with this email address. Please try another email."
            })
          })]
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./components/molecules/card/logic/logic.work.ts
const getWorkContent = () => {
  const types = {
    design: {
      imgUrl: "https://a0.muscache.com/pictures/54019d2c-f00e-4d2b-9eb2-7b738e6b9eb8.jpg",
      title: "Design your experience",
      description: "All experiences start with our quality standards—expertise, access, and connection. But also think about how to engage with guests online, and minimize the supplies they might need to participate. When you have an idea, start the submission process."
    },
    share: {
      imgUrl: "https://a0.muscache.com/pictures/2130d5de-c676-41bf-88bf-ab4b8a1c4d74.jpg",
      title: "Share your idea",
      description: "Next, you'll need to describe your activity for both the application and your future experience page. We recommend sharing the value of what you’re offering in detail, starting with a lower price until you have some reviews, and setting the length to 90 minutes or less."
    },
    submit: {
      imgUrl: "https://a0.muscache.com/pictures/cd4bbcfc-b2f4-4eab-9634-13dcd41260b1.jpg",
      title: "Submit your experience",
      description: "You're almost there! When you get to the Location step, check the Yes, this is an online experience box. Once everything else is completed, you're ready to submit. Our team will read it over and let you know if it’s been approved in 2–4 weeks."
    },
    setup: {
      imgUrl: "https://a0.muscache.com/pictures/ec94d108-9dcc-49c3-91f3-921ba1826e54.jpg",
      title: "Set up and start hosting",
      description: "While you wait, you can choose a location that represents you and your activity and start planning for your camera set-up, lighting, and sound. You can also start getting to know the Zoom conference platform. Don't worry, before you start hosting we'll share lots of resources to set you up for success."
    }
  };
  return types;
};
// CONCATENATED MODULE: ./components/molecules/card/card.works.tsx



/** styles **/



/** Logic */


const WorksCard = ({
  work = "design"
}) => {
  const works = getWorkContent();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [card_module_default.a["display__works"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [card_module_default.a["w__works"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: works[work].imgUrl,
          alt: "works image"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [card_module_default.a["w__works"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: works[work].title
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--13"]].join(" "),
            children: works[work].description
          })
        })]
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.sharing.tsx



/** styles */



const SharingCard = ({
  sharing = "meditate"
}) => {
  const sharings = {
    meditate: {
      imgUrl: "https://a0.muscache.com/pictures/1f129c2b-4da0-463e-a918-ff3f9f8fa325.jpg",
      title: "Meditate with Sheep",
      description: "Mindfulness straight from a Scottish farm, accompanied by encounters with some fuzzy friends."
    },
    baking: {
      imgUrl: "https://a0.muscache.com/pictures/1f96d01b-e5c0-409f-a01f-5c83e2632987.jpg",
      title: "Family Baking Fun",
      description: "A good time in the kitchen for kids and grown-ups alike that ends with a batch of freshly baked cookies."
    },
    magic: {
      imgUrl: "https://a0.muscache.com/pictures/18518c4e-5c84-43f3-91b0-485207a931c0.jpg",
      title: "Secrets of Magic",
      description: "Part show and part masterclass, guests learn magic psychology and tricks they can do at home."
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: sharings[sharing].imgUrl
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: sharings[sharing].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], font_module_default.a["lh--15"]].join(" "),
        children: sharings[sharing].description
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--darkgreen__3"]].join(" "),
        children: "Go to experience"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.how.tsx



/** styles **/




/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */

const HowCard = ({
  how = "qualified"
}) => {
  const types = {
    qualified: {
      icon: "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png",
      title: "Qualified guests find your listing",
      description: "Anyone who wants to book with you needs to confirm their contact information, provide payment details, and tell you about their trip."
    },
    control: {
      icon: "https://a0.muscache.com/airbnb/static/list_your_space/ib_settings-0c6e8137f5559822d30e7af88f9d675a.png",
      title: "You control who can book",
      description: "To book available dates without having to send a request, guests must agree to your rules and meet all the requirements you set.",
      more: "I want to review every request"
    },
    notified: {
      icon: "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png",
      title: "Once a guest books, you'll be notified",
      description: "You’ll immediately get a confirmation email with information like why they’re coming, when they’re arriving, and who they’re coming with."
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      minHeight: 350
    },
    className: [shape_module_default.a["min-h--300"], shape_module_default.a["h--full"], space_module_default.a["p--22"], color_module_default.a["b--white__2"], shape_module_default.a["br--6"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        padding: "10px auto 20px",
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: 120,
          height: 100,
          backgroundImage: `url(${types[how].icon})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"]].join(" "),
        children: types[how].title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"]].join(" "),
        children: types[how].description
      })
    }), types[how].more && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--12"], color_module_default.a["c--darkgreen__3"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
          children: types[how].more
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/molecules/card/card.anywhere.tsx



/** styles **/


 // import styles from "@card/card.module.scss";



/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */

const AnywhereCard = ({
  imgUrl,
  title = "Title"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [layout_module_default.a["relative"]].join(" "),
      style: {
        paddingTop: "100%"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["absolute"], layout_module_default.a["t--0"], layout_module_default.a["b--0"], layout_module_default.a["r--0"], layout_module_default.a["l--0"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [shape_module_default.a["w--full"], shape_module_default.a["h--full"]].join(" "),
          children: imgUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: imgUrl,
            alt: "unique stays",
            className: [shape_module_default.a["br--8"]].join(" ")
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [shape_module_default.a["w--full"], shape_module_default.a["h--full"], shape_module_default.a["br--8"], color_module_default.a["bg--white__2"]].join(" ")
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-t--6"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"], color_module_default.a["c--gray__4"]].join(" "),
        children: title
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/molecules/card/card.hosting.tsx
var card_hosting = __webpack_require__("Yoz1");

// CONCATENATED MODULE: ./components/molecules/card/index.tsx


function card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_ownKeys(Object(source), true).forEach(function (key) { card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/** styles */




/** components */






















/**
 * Bundles the card components
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} variant - Specifies the variant of card component
 * @param {string} to - Redirects to the path when clicked
 */
const Card = (_ref) => {
  let {
    extendsTo,
    variant,
    to
  } = _ref,
      props = _objectWithoutProperties(_ref, ["extendsTo", "variant", "to"]);

  const variants = {
    category: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryCard, card_objectSpread({}, props)),
    horizontal: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HorizontalCard, card_objectSpread({}, props)),
    vertical: /*#__PURE__*/Object(jsx_runtime_["jsx"])(VerticalCard, card_objectSpread({}, props)),
    typestay: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TypeStayCard, card_objectSpread({}, props)),
    arrangements: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrangementsCard, card_objectSpread({}, props)),
    checkin: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckInCard, card_objectSpread({}, props)),
    review: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReviewCard, card_objectSpread({}, props)),
    stay: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StayCard, card_objectSpread({}, props)),
    nearby: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NearbyCard, card_objectSpread({}, props)),
    online: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OnlineCard, card_objectSpread({}, props)),
    participate: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipateCard, card_objectSpread({}, props)),
    available: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AvailableCard, card_objectSpread({}, props)),
    host: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HostCard, card_objectSpread({}, props)),
    set: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SetCard, card_objectSpread({}, props)),
    again: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AgainCard, card_objectSpread({}, props)),
    works: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WorksCard, card_objectSpread({}, props)),
    sharing: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SharingCard, card_objectSpread({}, props)),
    how: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HowCard, card_objectSpread({}, props)),
    anywhere: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AnywhereCard, card_objectSpread({}, props)),
    hosting: /*#__PURE__*/Object(jsx_runtime_["jsx"])(card_hosting["a" /* HostingCard */], card_objectSpread({}, props))
  };

  if (to) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        cursor: "pointer"
      },
      className: `${[font_module_default.a["text--left"], layout_module_default.a["block"], shape_module_default.a["h--full"], shape_module_default.a["w--full"]].join(" ")} ${extendsTo}`,
      "data-testid": `${variant}-card--molecule`,
      onClick: () => router_default.a.push(to),
      children: variants[variant]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-card`,
    className: extendsTo,
    children: variants[variant]
  });
};

/***/ }),

/***/ "DncH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuBarLogo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NameLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NoNameLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Google; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Apple; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MenuBarLogo = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({
    stroke: "#737373",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fillOpacity: 0
  }, props), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"
    })]
  }));
};
const NameLogo = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "30 0 36 36",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"
    })
  }));
};
const NoNameLogo = (_ref) => {
  let {
    fill
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 1000 1000",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: fill,
      d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
    })
  }));
};
const Facebook = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({
    style: {
      position: "relative",
      right: 2
    }
  }, props), {}, {
    viewBox: "126.445 2.281 589 589",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "420.945",
      cy: "296.781",
      r: "294.5",
      fill: "#1877F2"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z",
      fill: "#fff"
    })]
  }));
};
const Google = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        fill: "#EA4335",
        d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        fill: "#4285F4",
        d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        fill: "#FBBC05",
        d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        fill: "#34A853",
        d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "M0 0h18v18H0V0z"
      })]
    })
  }));
};
const Apple = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"
    })
  }));
};

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GV5G":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"flex": "modal_flex__2JE-2",
	"flex-wrap": "modal_flex-wrap__2X1XT",
	"flex-col": "modal_flex-col__1wRVv",
	"flex-col-reverse": "modal_flex-col-reverse__i69oK",
	"items-center": "modal_items-center__pMwUR",
	"justify-center": "modal_justify-center__rF6wz",
	"justify-end": "modal_justify-end__2EaF4",
	"justify-between": "modal_justify-between__WHv0T",
	"all-center": "modal_all-center__XFX6u",
	"block": "modal_block__1EU-2",
	"inline-block": "modal_inline-block__2Txq8",
	"text-center": "modal_text-center__1MhIu",
	"relative": "modal_relative__3yFUG",
	"absolute": "modal_absolute__xkFMl",
	"all-sides": "modal_all-sides__2YUHg",
	"fixed": "modal_fixed__1C9Nf",
	"sticky": "modal_sticky__2owVJ",
	"overflow-hidden": "modal_overflow-hidden__2_vrv",
	"hide-scrollbar": "modal_hide-scrollbar__3TxHL",
	"rt---240": "modal_rt---240__34PFT",
	"rb---240": "modal_rb---240__2yWv-",
	"rl---240": "modal_rl---240__owJC5",
	"rr---240": "modal_rr---240__1e-hz",
	"at---240": "modal_at---240__18tYm",
	"ab---240": "modal_ab---240__-LRGq",
	"al---240": "modal_al---240__Gpzt1",
	"ar---240": "modal_ar---240__3wjPf",
	"ft---240": "modal_ft---240__DYNmD",
	"fb---240": "modal_fb---240__2G0JP",
	"st---240": "modal_st---240__3qr9n",
	"t---240": "modal_t---240__38YG4",
	"r---240": "modal_r---240__3w10g",
	"b---240": "modal_b---240__3_Hlm",
	"l---240": "modal_l---240__1v-PX",
	"rt--210": "modal_rt--210__3dYCJ",
	"rb--210": "modal_rb--210__Xm0uW",
	"rl--210": "modal_rl--210__1Bxrn",
	"rr--210": "modal_rr--210__2vtdj",
	"at--210": "modal_at--210__17T_p",
	"ab--210": "modal_ab--210__3G1ml",
	"al--210": "modal_al--210__3vMkJ",
	"ar--210": "modal_ar--210__5ON5J",
	"ft--210": "modal_ft--210__261G2",
	"fb--210": "modal_fb--210__1kYhN",
	"st--210": "modal_st--210__2v9p0",
	"t--210": "modal_t--210__1hzuH",
	"r--210": "modal_r--210__eNGmY",
	"b--210": "modal_b--210__17tKT",
	"l--210": "modal_l--210__gHY2T",
	"rt---3": "modal_rt---3__MoTg-",
	"rb---3": "modal_rb---3__1Dfjj",
	"rl---3": "modal_rl---3__1wggO",
	"rr---3": "modal_rr---3__2-can",
	"at---3": "modal_at---3__1ymuD",
	"ab---3": "modal_ab---3__1eYMv",
	"al---3": "modal_al---3__3cXAI",
	"ar---3": "modal_ar---3__1R1J0",
	"ft---3": "modal_ft---3__21olp",
	"fb---3": "modal_fb---3__22zZ2",
	"st---3": "modal_st---3__3KiRZ",
	"t---3": "modal_t---3__UUiYk",
	"r---3": "modal_r---3__25OSv",
	"b---3": "modal_b---3__1gB8s",
	"l---3": "modal_l---3__2rSpM",
	"rt--0": "modal_rt--0__LnfC0",
	"rb--0": "modal_rb--0__3tID5",
	"rl--0": "modal_rl--0__8Ftak",
	"rr--0": "modal_rr--0__3ueOI",
	"at--0": "modal_at--0__1Q0_t",
	"ab--0": "modal_ab--0__3J3St",
	"al--0": "modal_al--0__V53q8",
	"ar--0": "modal_ar--0__3AuVK",
	"ft--0": "modal_ft--0__iN6yI",
	"fb--0": "modal_fb--0__3WlrH",
	"st--0": "modal_st--0__1WpYF",
	"t--0": "modal_t--0__2FVJ1",
	"r--0": "modal_r--0__15Rvt",
	"b--0": "modal_b--0__3HsRf",
	"l--0": "modal_l--0__GupPH",
	"rt--1": "modal_rt--1__26kYQ",
	"rb--1": "modal_rb--1__1e-yP",
	"rl--1": "modal_rl--1__1_azF",
	"rr--1": "modal_rr--1__C-Ney",
	"at--1": "modal_at--1__3n2gu",
	"ab--1": "modal_ab--1__3CSJx",
	"al--1": "modal_al--1__vieKW",
	"ar--1": "modal_ar--1__rMBQt",
	"ft--1": "modal_ft--1__1Gu9o",
	"fb--1": "modal_fb--1__2C-K4",
	"st--1": "modal_st--1__3qv5C",
	"t--1": "modal_t--1__3IWcM",
	"r--1": "modal_r--1__qYg35",
	"b--1": "modal_b--1__1Vjk8",
	"l--1": "modal_l--1__tjm1E",
	"rt--2": "modal_rt--2__3YeGb",
	"rb--2": "modal_rb--2__3OB-Y",
	"rl--2": "modal_rl--2__3Mm4f",
	"rr--2": "modal_rr--2__1fL-z",
	"at--2": "modal_at--2__1ePov",
	"ab--2": "modal_ab--2__1jfDw",
	"al--2": "modal_al--2__IMMXb",
	"ar--2": "modal_ar--2__2pc7v",
	"ft--2": "modal_ft--2__3arMY",
	"fb--2": "modal_fb--2__3s1vv",
	"st--2": "modal_st--2__2rtkm",
	"t--2": "modal_t--2__2atee",
	"r--2": "modal_r--2__1vEw2",
	"b--2": "modal_b--2__1zDmx",
	"l--2": "modal_l--2__W4pi4",
	"rt--3": "modal_rt--3__1wiFJ",
	"rb--3": "modal_rb--3__2cDCj",
	"rl--3": "modal_rl--3__1-_-1",
	"rr--3": "modal_rr--3__27uN5",
	"at--3": "modal_at--3__3z3Qx",
	"ab--3": "modal_ab--3__lnR1l",
	"al--3": "modal_al--3__67u1g",
	"ar--3": "modal_ar--3__1mqxi",
	"ft--3": "modal_ft--3__qAvXu",
	"fb--3": "modal_fb--3__2D6ZI",
	"st--3": "modal_st--3__3m7SD",
	"t--3": "modal_t--3__3Og-y",
	"r--3": "modal_r--3__1jg0G",
	"b--3": "modal_b--3__33LnQ",
	"l--3": "modal_l--3__2kEC1",
	"rt--4": "modal_rt--4__34Pkz",
	"rb--4": "modal_rb--4__1Q0_n",
	"rl--4": "modal_rl--4__hVPop",
	"rr--4": "modal_rr--4__351gS",
	"at--4": "modal_at--4__1ZU5n",
	"ab--4": "modal_ab--4__1H1sN",
	"al--4": "modal_al--4__1YBP-",
	"ar--4": "modal_ar--4__7kDVY",
	"ft--4": "modal_ft--4__z8uX9",
	"fb--4": "modal_fb--4__1zK6d",
	"st--4": "modal_st--4__1xkP_",
	"t--4": "modal_t--4__1fdUx",
	"r--4": "modal_r--4__23UsK",
	"b--4": "modal_b--4__1tUFc",
	"l--4": "modal_l--4__1JRjW",
	"rt--5": "modal_rt--5__2W6wj",
	"rb--5": "modal_rb--5__3WYWC",
	"rl--5": "modal_rl--5__1XDUS",
	"rr--5": "modal_rr--5__3xmoH",
	"at--5": "modal_at--5__20Y_J",
	"ab--5": "modal_ab--5__2GR8z",
	"al--5": "modal_al--5__1B_Z0",
	"ar--5": "modal_ar--5__3PT2B",
	"ft--5": "modal_ft--5__2N6Vc",
	"fb--5": "modal_fb--5__20rew",
	"st--5": "modal_st--5__1p-jM",
	"t--5": "modal_t--5__34gih",
	"r--5": "modal_r--5__Q2XVA",
	"b--5": "modal_b--5__1g5BI",
	"l--5": "modal_l--5__VeI07",
	"rt--6": "modal_rt--6__3y8Sb",
	"rb--6": "modal_rb--6__N_oUS",
	"rl--6": "modal_rl--6__l_bje",
	"rr--6": "modal_rr--6__1In79",
	"at--6": "modal_at--6__2v7RU",
	"ab--6": "modal_ab--6__3fLGP",
	"al--6": "modal_al--6__3Bg_7",
	"ar--6": "modal_ar--6__2EjWK",
	"ft--6": "modal_ft--6__1NwYy",
	"fb--6": "modal_fb--6__DJmz2",
	"st--6": "modal_st--6__16QTy",
	"t--6": "modal_t--6__2_XSZ",
	"r--6": "modal_r--6__OvKV8",
	"b--6": "modal_b--6__1GZ6X",
	"l--6": "modal_l--6__3EFib",
	"rt--7": "modal_rt--7__3wgZb",
	"rb--7": "modal_rb--7__1rdRq",
	"rl--7": "modal_rl--7__2g48y",
	"rr--7": "modal_rr--7__3zUYm",
	"at--7": "modal_at--7__2HlVy",
	"ab--7": "modal_ab--7__vLHiH",
	"al--7": "modal_al--7__kVwfZ",
	"ar--7": "modal_ar--7__UrLFO",
	"ft--7": "modal_ft--7__OB8og",
	"fb--7": "modal_fb--7__3XPA7",
	"st--7": "modal_st--7__32z8L",
	"t--7": "modal_t--7__2adyE",
	"r--7": "modal_r--7__3OyvP",
	"b--7": "modal_b--7__12lJ-",
	"l--7": "modal_l--7__xEhlW",
	"rt--8": "modal_rt--8__2nT7J",
	"rb--8": "modal_rb--8__3Aw42",
	"rl--8": "modal_rl--8__2LjOf",
	"rr--8": "modal_rr--8__14eIP",
	"at--8": "modal_at--8__Gf1nK",
	"ab--8": "modal_ab--8__tNiJi",
	"al--8": "modal_al--8__1UEBt",
	"ar--8": "modal_ar--8__h2gEv",
	"ft--8": "modal_ft--8__dknmu",
	"fb--8": "modal_fb--8__21j4b",
	"st--8": "modal_st--8__1KBeB",
	"t--8": "modal_t--8__15_ko",
	"r--8": "modal_r--8__oY2Ba",
	"b--8": "modal_b--8__3U_uF",
	"l--8": "modal_l--8__2C3qF",
	"rt--9": "modal_rt--9__WSoZ0",
	"rb--9": "modal_rb--9__jVOKy",
	"rl--9": "modal_rl--9__3_PEU",
	"rr--9": "modal_rr--9__1R7QY",
	"at--9": "modal_at--9__yrhIo",
	"ab--9": "modal_ab--9__30nnx",
	"al--9": "modal_al--9__JMp5C",
	"ar--9": "modal_ar--9__1ZKPe",
	"ft--9": "modal_ft--9__3HzME",
	"fb--9": "modal_fb--9__2hpbN",
	"st--9": "modal_st--9__3h1Rp",
	"t--9": "modal_t--9__16M8y",
	"r--9": "modal_r--9__3jmWG",
	"b--9": "modal_b--9__1G2GE",
	"l--9": "modal_l--9__1p7hD",
	"rt--10": "modal_rt--10__iepIz",
	"rb--10": "modal_rb--10__17WSN",
	"rl--10": "modal_rl--10__2EiEr",
	"rr--10": "modal_rr--10__3ewXq",
	"at--10": "modal_at--10__2wflo",
	"ab--10": "modal_ab--10__3q8At",
	"al--10": "modal_al--10__3lVyc",
	"ar--10": "modal_ar--10__22Osk",
	"ft--10": "modal_ft--10__M2DOg",
	"fb--10": "modal_fb--10__11H6L",
	"st--10": "modal_st--10__1nr9D",
	"t--10": "modal_t--10__sfhc_",
	"r--10": "modal_r--10__2IPIL",
	"b--10": "modal_b--10__22Qdx",
	"l--10": "modal_l--10__3HYcl",
	"rt--15": "modal_rt--15__GQh9i",
	"rb--15": "modal_rb--15__2BiQ9",
	"rl--15": "modal_rl--15__38waW",
	"rr--15": "modal_rr--15__2MBkd",
	"at--15": "modal_at--15__mPGXt",
	"ab--15": "modal_ab--15__1FWI-",
	"al--15": "modal_al--15__1-yun",
	"ar--15": "modal_ar--15__33Ack",
	"ft--15": "modal_ft--15__1gpMs",
	"fb--15": "modal_fb--15__2NfD3",
	"st--15": "modal_st--15__1Z0oK",
	"t--15": "modal_t--15__34d2g",
	"r--15": "modal_r--15__2Mp81",
	"b--15": "modal_b--15__3pm6R",
	"l--15": "modal_l--15__1BC9S",
	"rt--55": "modal_rt--55__2DFFL",
	"rb--55": "modal_rb--55__1CV9n",
	"rl--55": "modal_rl--55__2tH8i",
	"rr--55": "modal_rr--55__WM5Zy",
	"at--55": "modal_at--55__2YRNa",
	"ab--55": "modal_ab--55___PO6c",
	"al--55": "modal_al--55__37swO",
	"ar--55": "modal_ar--55__CBVos",
	"ft--55": "modal_ft--55__2px9J",
	"fb--55": "modal_fb--55__2MSss",
	"st--55": "modal_st--55__3713u",
	"t--55": "modal_t--55__3eN2D",
	"r--55": "modal_r--55__71K-e",
	"b--55": "modal_b--55__2PEJX",
	"l--55": "modal_l--55__1Jw5i",
	"rt--80": "modal_rt--80__1ZIrB",
	"rb--80": "modal_rb--80__xI1if",
	"rl--80": "modal_rl--80__2mKd-",
	"rr--80": "modal_rr--80__1pa_h",
	"at--80": "modal_at--80__1xLhl",
	"ab--80": "modal_ab--80__2b9kH",
	"al--80": "modal_al--80__22F53",
	"ar--80": "modal_ar--80__1lnMI",
	"ft--80": "modal_ft--80__1_x-k",
	"fb--80": "modal_fb--80__1C-_o",
	"st--80": "modal_st--80__1HgTD",
	"t--80": "modal_t--80__2FMgP",
	"r--80": "modal_r--80__3ohxF",
	"b--80": "modal_b--80__1yobH",
	"l--80": "modal_l--80__6jRT9",
	"z--50": "modal_z--50__3U1H9",
	"z--9999": "modal_z--9999__1sBzD",
	"grid-c--1": "modal_grid-c--1__3LjVr",
	"grid-r--1": "modal_grid-r--1__3vY_3",
	"grid-c--2": "modal_grid-c--2__2rL62",
	"grid-r--2": "modal_grid-r--2__2438i",
	"grid-c--3": "modal_grid-c--3__8dN7O",
	"grid-r--3": "modal_grid-r--3__2A_9-",
	"grid-c--4": "modal_grid-c--4__2l_yy",
	"grid-r--4": "modal_grid-r--4__3h3TE",
	"grid-c--5": "modal_grid-c--5__3xYpV",
	"grid-r--5": "modal_grid-r--5__Wgw15",
	"grid-c--6": "modal_grid-c--6__2Fsud",
	"grid-r--6": "modal_grid-r--6__25eD4",
	"grid-c--7": "modal_grid-c--7__1qIYv",
	"grid-r--7": "modal_grid-r--7__2Q7Ly",
	"container": "modal_container__3xGWc",
	"container__modal": "modal_container__modal__3cL4E",
	"container--spread": "modal_container--spread__1rVFa",
	"container--shrink": "modal_container--shrink__9p0T0",
	"font__section--title": "modal_font__section--title__aezql",
	"font__section--subtitle": "modal_font__section--subtitle__3vFwk",
	"font__onlinehost--title": "modal_font__onlinehost--title__2biqc",
	"font__onlinehost--subtitle": "modal_font__onlinehost--subtitle__1q3Ad",
	"flex__privacy--content": "modal_flex__privacy--content__1cmP0",
	"flex__privacy--buttons": "modal_flex__privacy--buttons__ZkiQb",
	"m-r--privacy": "modal_m-r--privacy__3Sp-P",
	"ba": "modal_ba__2hKmy",
	"position__booking": "modal_position__booking__pXdJf",
	"w__auth": "modal_w__auth__3sguX",
	"modal__privacy": "modal_modal__privacy__GCK93"
};


/***/ }),

/***/ "H/O+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Modal; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./hooks/useOnClickOutside.ts
var useOnClickOutside = __webpack_require__("Qx/D");

// CONCATENATED MODULE: ./hooks/useLockBodyScroll.ts

/**
 * A custom hook which disables scrolling
 */

const useLockBodyScroll = () => {
  Object(external_react_["useLayoutEffect"])(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = originalStyle;
  }, []);
};
// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./context/auth.tsx
var auth = __webpack_require__("M0WP");

// EXTERNAL MODULE: ./context/toggle.tsx
var toggle = __webpack_require__("m4+O");

// EXTERNAL MODULE: ./api/client.ts + 1 modules
var api_client = __webpack_require__("qV2M");

// CONCATENATED MODULE: ./hooks/usePost.ts

/**
 * Fetches based on the given request method and body (optional)
 * @param {string} url - Url to send the request to
 * @param {string} method - HTTP method (GET|POST|PUT|DELETE)
 * @param {Object} body - Options you want to pass to the request
 * @param {function} triggerLoading - Callback triggered when the request is being sent. (Usage: Loading Animations)
 * @param {function} onSuccess - Callback triggered when the request is successful
 * @param {function} onFail - Callback triggered when the request is not successful
 */

const usePost = ({
  url,
  body,
  triggerLoading,
  onSuccess,
  onFail
}) => {
  const doFetch = async () => {
    try {
      if (triggerLoading) {
        triggerLoading(true);
      }

      const client = Object(api_client["a" /* APIClient */])();
      const {
        data
      } = await client.post(url, body);

      if (onSuccess) {
        onSuccess(data);
      }

      return {
        data
      };
    } catch (err) {
      setTimeout(() => {
        if (triggerLoading) {
          triggerLoading(false);
        }

        if (onFail) {
          onFail();
        }
      }, 2000);
    }
  };

  return doFetch;
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/atoms/button/content/content.option.tsx




const getOptionContents = () => {
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();
  const options = {
    messages: {
      name: "Messages",
      handleClick: () => {
        alert("messages button clicked");
      }
    },
    notifications: {
      name: "Notifications",
      handleClick: () => {
        alert("notifications button clicked");
      }
    },
    trips: {
      name: "Trips",
      handleClick: () => {
        alert("trips button clicked");
      }
    },
    saved: {
      name: "Saved",
      handleClick: () => {
        alert("saved button clicked");
      }
    },
    refer: {
      name: "Refer a host",
      handleClick: () => {
        alert("refer button clicked");
      }
    },
    account: {
      name: "Account",
      handleClick: () => {
        alert("account button clicked");
      }
    },
    signup: {
      name: "Sign up",
      handleClick: () => {
        toggleDispatch({
          type: "toggle_auth"
        });
        authDispatch({
          type: "auth_signup"
        });
      }
    },
    login: {
      name: "Log in",
      handleClick: () => {
        authDispatch({
          type: "auth_login"
        });
        toggleDispatch({
          type: "toggle_auth"
        });
      }
    },
    home: {
      name: "Host your home",
      handleClick: () => {
        router_default.a.push("/host/homes");
      }
    },
    experience: {
      name: "Host an experience",
      handleClick: () => {
        router_default.a.push("/host/experiences");
      }
    },
    help: {
      name: "Help",
      handleClick: () => {
        alert("help button clicked");
      }
    },
    logout: {
      name: "Logout",
      handleClick: async () => {
        const submit = usePost({
          url: "/api/users/signout",
          body: {},
          onSuccess: () => router_default.a.reload()
        });
        await submit();
      }
    }
  };
  return options;
};
// EXTERNAL MODULE: ./components/atoms/button/button.stories.tsx
var button_stories = __webpack_require__("dOrH");

// CONCATENATED MODULE: ./components/organisms/modal/modal.menu.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */


/** components */


/** contents */


/** stories */



const Options = ({
  params
}) => {
  const options = getOptionContents();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: params.map(({
      kind,
      bold
    }, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], _objectSpread(_objectSpread({}, button_stories["f" /* Option */].args), {}, {
        bold: bold,
        onClick: options[kind].handleClick,
        name: options[kind].name
      }))
    }, index))
  });
};
/**
 * Renders the menu modal
 */


const MenuModal = ({
  authenticated = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [shape_module_default.a["w--full"], space_module_default.a["p-v--15"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [shape_module_default.a["w--inherit"]].join(" "),
      children: [authenticated ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Options, {
        params: [// { kind: "messages", bold: true },
        // { kind: "notifications", bold: false },
        {
          kind: "trips",
          bold: false
        }, {
          kind: "saved",
          bold: false
        }]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Options, {
        params: [{
          kind: "signup",
          bold: true
        }, {
          kind: "login",
          bold: false
        }]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: "100%",
          height: 1,
          backgroundColor: "lightgray",
          margin: "6px 0"
        }
      }), authenticated ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Options, {
        params: [{
          kind: "home",
          bold: false
        } // { kind: "experience", bold: false },
        // { kind: "refer", bold: false },
        // { kind: "account", bold: false },
        ]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Options, {
        params: [{
          kind: "home",
          bold: false
        } // { kind: "experience", bold: false },
        // { kind: "help", bold: false },
        ]
      }), authenticated && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "100%",
            height: 1,
            backgroundColor: "lightgray",
            margin: "6px 0"
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Options, {
          params: [// { kind: "help", bold: false },
          {
            kind: "logout",
            bold: false
          }]
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/responsive.module.scss
var responsive_module = __webpack_require__("SFqS");
var responsive_module_default = /*#__PURE__*/__webpack_require__.n(responsive_module);

// EXTERNAL MODULE: ./components/organisms/modal/modal.module.scss
var modal_module = __webpack_require__("GV5G");
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);

// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// CONCATENATED MODULE: ./components/organisms/modal/modal.privacy.tsx



/** styles */







/** components */


/** vectors */


/** contexts */


/**
 * Renders the privacy modal
 */

const PrivacyModal = () => {
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();

  const handleSave = () => {
    // add cookie
    console.log("entered");
    return toggleDispatch({
      type: "toggle_privacy"
    });
  };

  const handleSettings = () => {
    // open settings
    return toggleDispatch({
      type: "toggle_privacy"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [modal_module_default.a["flex__privacy--content"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["m-t--6"], space_module_default.a["m-b--6"], space_module_default.a["m-l--0"], space_module_default.a["m-r--0"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: space_module_default.a["m-r--10"],
            children: "Your Privacy"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: space_module_default.a["r-t--1"],
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["M" /* Lock */], {
              width: 16,
              fill: "#428BFF"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: space_module_default.a["m-b--30"],
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: [font_module_default.a["size--14"], font_module_default.a["weight--300"], font_module_default.a["lh--15"], color_module_default.a["c--gray__0"]].join(" "),
            children: ["We use cookies to help personalize content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information on and off Airbnb. Read our", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                children: "Cookie Policy"
              })
            }), " ", "to learn more or go to Cookie Preferences to manage your settings."]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: modal_module_default.a["flex__privacy--buttons"],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"], space_module_default.a["m-b--6"], space_module_default.a["m-l--0"], modal_module_default.a["m-r--privacy"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "privacy",
            extendsTo: [shape_module_default.a["w--full"], responsive_module_default.a["b_to_f--sm"], font_module_default.a["text--center"]].join(" "),
            title: "Save",
            onClick: handleSave
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"], space_module_default.a["m-b--6"], space_module_default.a["m-l--0"], space_module_default.a["m-r--0"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "privacy",
            extendsTo: [shape_module_default.a["w--full"], responsive_module_default.a["b_to_f--sm"], font_module_default.a["text--center"]].join(" "),
            title: "Cookie Preferences",
            inverse: true,
            onClick: handleSettings
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/atoms/input/index.tsx + 27 modules
var input = __webpack_require__("8K43");

// EXTERNAL MODULE: ./public/svg/logo.tsx
var logo = __webpack_require__("DncH");

// CONCATENATED MODULE: ./components/atoms/button/content/content.auth.tsx


/** contexts */


/** vectors */



const getAuthContents = () => {
  const authState = Object(auth["c" /* useAuthState */])();
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const auths = {
    email: {
      name: "Email",
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["y" /* Email */], {
        width: 17
      }),

      handleClick() {
        if (authState.title === "Log in") {
          return authDispatch({
            type: "login"
          });
        }

        return authDispatch({
          type: "signup"
        });
      }

    },
    facebook: {
      name: "Facebook",
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["b" /* Facebook */], {
        width: 19
      }),

      handleClick() {
        alert("clicked facebook");
      }

    },
    google: {
      name: "Google",
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["c" /* Google */], {
        width: 17
      }),

      handleClick() {
        alert("clicked google");
      }

    },
    apple: {
      name: "Apple",
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["a" /* Apple */], {
        width: 17
      }),

      handleClick() {
        alert("clicked apple");
      }

    }
  };
  return auths;
};
// EXTERNAL MODULE: ./helper/auth.ts + 1 modules
var helper_auth = __webpack_require__("s6mq");

// CONCATENATED MODULE: ./components/prototype/auth/prototype.auth.tsx



function prototype_auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function prototype_auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { prototype_auth_ownKeys(Object(source), true).forEach(function (key) { prototype_auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { prototype_auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function prototype_auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** contexts */


/** styles **/







/** components */




/** Helpers */


/** stories */


/**
 * Renders the auth template component
 */

const AuthPrototype = () => {
  const auths = getAuthContents();
  const authState = Object(auth["c" /* useAuthState */])();
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const methods = ["email", "facebook", "google", "apple"];
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      region: "",
      phone: ""
    },
    validate: helper_auth["c" /* validateAuth */],

    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      return authDispatch({
        type: "auth_signup"
      });
    }

    return authDispatch({
      type: "auth_login"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [space_module_default.a["p--24"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [shape_module_default.a["w--full"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: formik.handleSubmit,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "region",
              direction: "bottom",
              handleChange: formik.handleChange,
              value: formik.values.region,
              errors: formik.errors.region
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "phone",
              direction: "top",
              handleChange: formik.handleChange,
              value: formik.values.phone,
              errors: formik.errors.phone
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["weight--100"], color_module_default.a["c--gray__0"], font_module_default.a["size--12"]].join(" "),
            children: "We\u2019ll call or text you to confirm your number. Standard message and data rates apply."
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--18"], space_module_default.a["m-b--18"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "primary",
            title: "Continue",
            block: true
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          zIndex: 1
        },
        className: [modal_module_default.a["ba"], font_module_default.a["text--center"], layout_module_default.a["relative"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          style: {
            zIndex: 3
          },
          className: [layout_module_default.a["relative"], space_module_default.a["p-h--4"], color_module_default.a["bg--white"], font_module_default.a["weight--100"], color_module_default.a["c--gray__0"], font_module_default.a["size--12"]].join(" "),
          children: "or"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: methods.map((method, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-v--14"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_auth_objectSpread(prototype_auth_objectSpread({}, button_stories["a" /* Auth */].args), {}, {
              auth: method,
              onClick: auths[method].handleClick,
              icon: auths[method].icon,
              name: auths[method].name
            }))
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-t--4"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [layout_module_default.a["inline-block"], space_module_default.a["m-r--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"], font_module_default.a["weight--300"], color_module_default.a["c--gray__1"]].join(" "),
            children: authState.title === "Log in" ? "Don't have an account?" : "Already have an account?"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_auth_objectSpread(prototype_auth_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
          onClick: switchAuth,
          title: authState.title === "Log in" ? "Sign up" : "Log in"
        }))]
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/atoms/bullet/index.tsx + 16 modules
var bullet = __webpack_require__("18ll");

// EXTERNAL MODULE: ./components/molecules/card/index.tsx + 26 modules
var card = __webpack_require__("DUhU");

// CONCATENATED MODULE: ./components/prototype/auth/prototype.login.tsx



function prototype_login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function prototype_login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { prototype_login_ownKeys(Object(source), true).forEach(function (key) { prototype_login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { prototype_login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function prototype_login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** contexts */


/** styles **/




/** components */





/** Helper */


/** hooks */


/** stories */


/**
 * Renders the login template component
 */

const LoginTemplate = () => {
  const authState = Object(auth["c" /* useAuthState */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])("pending");
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      email: "",
      password: ""
    },
    validate: helper_auth["f" /* validateLogin */],
    onSubmit: values => {
      const submit = usePost({
        url: "/api/users/signin",
        body: values,

        triggerLoading(state) {
          setLoading(state);
        },

        onSuccess() {
          router_default.a.reload();
        },

        onFail() {
          setStatus("fail");
        }

      });
      submit();
    }
  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      return authDispatch({
        type: "auth_signup"
      });
    }

    return authDispatch({
      type: "auth_login"
    });
  };

  const switchBack = () => {
    return authDispatch({
      type: "auth_login"
    });
  };

  const redirectTo = () => {
    return authDispatch({
      type: "forgot_password"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p--24"]].join(" "),
    children: [status === "fail" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(card["a" /* Card */], {
        variant: "again"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "email",
            direction: "bottom",
            handleChange: formik.handleChange,
            value: formik.values.email,
            errors: formik.errors.email !== undefined
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "password",
            direction: "top",
            handleChange: formik.handleChange,
            value: formik.values.password,
            errors: formik.errors.password !== undefined
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.email !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.email
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.password !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.password
            })
          })
        }), status === "success" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(card["a" /* Card */], {
            variant: "set"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "primary",
          title: "Log in",
          loading: loading,
          block: true
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_login_objectSpread(prototype_login_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
          title: "Forgot password?",
          onClick: redirectTo
        }))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_login_objectSpread(prototype_login_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
          title: "More login options",
          onClick: switchBack
        }))
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"], space_module_default.a["m-r--8"]].join(" "),
          children: "Don't have an account?"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_login_objectSpread(prototype_login_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
          title: "Sign up",
          onClick: switchAuth
        }))]
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/auth/prototype.signup.tsx





/** styles **/





/** components */




/** Helper */


/** hooks */


/** contexts */


/**
 * Renders the signup template component
 */

const SignupTemplate = () => {
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      firstname: "",
      lastname: "",
      day: "",
      month: "",
      year: "",
      email: "",
      password: ""
    },
    validate: helper_auth["g" /* validateSignup */],
    onSubmit: async values => {
      const submit = await usePost({
        url: "/api/users/signup",
        body: values,
        triggerLoading: state => {
          setLoading(state);
        },
        onSuccess: () => {
          router_default.a.reload();
        },
        onFail: () => {
          authDispatch({
            type: "exists"
          });
        }
      });
      await submit();
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
    onSubmit: formik.handleSubmit,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["p--24"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "name",
          direction: "bottom",
          name: "firstname",
          errors: formik.errors.firstname !== undefined,
          handleChange: formik.handleChange,
          value: formik.values.firstname
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "name",
          direction: "top",
          name: "lastname",
          errors: formik.errors.lastname !== undefined,
          handleChange: formik.handleChange,
          value: formik.values.lastname
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.firstname !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.firstname
            })
          }) : null
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.lastname !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.lastname
            })
          }) : null
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.firstname === undefined && formik.errors.lastname === undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [space_module_default.a["m-t--8"], font_module_default.a["size--11"], color_module_default.a["c--gray__1"]].join(" "),
            children: "Make sure it matches the name on your government ID."
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-t--22"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            border: "1px solid gray",
            borderRadius: 14
          },
          className: [layout_module_default.a["flex"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            spread: true,
            dateType: "day",
            variant: "birthdate",
            direction: "left",
            handleChange: formik.handleChange,
            value: formik.values.day,
            errors: formik.errors.year !== undefined
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            spread: true,
            dateType: "month",
            variant: "birthdate",
            direction: "center",
            handleChange: formik.handleChange,
            value: formik.values.month,
            errors: formik.errors.year !== undefined
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            spread: true,
            dateType: "year",
            variant: "birthdate",
            direction: "right",
            handleChange: formik.handleChange,
            value: formik.values.year,
            errors: formik.errors.year !== undefined
          })]
        }), formik.errors.day !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
            variant: "required",
            message: formik.errors.day
          })
        }), formik.errors.month !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
            variant: "required",
            message: formik.errors.month
          })
        }), formik.errors.year !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
            variant: "required",
            message: formik.errors.year
          })
        })]
      }), formik.errors.day !== undefined && formik.errors.month !== undefined && formik.errors.year !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [space_module_default.a["m-t--8"], font_module_default.a["size--11"], color_module_default.a["c--gray__1"]].join(" "),
        children: "To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-t--22"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "email",
            handleChange: formik.handleChange,
            value: formik.values.email,
            errors: formik.errors.email !== undefined
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.email !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.email
            })
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [space_module_default.a["m-t--8"], font_module_default.a["size--11"], color_module_default.a["c--gray__1"]].join(" "),
            children: "We'll email you trip confirmations and receipts"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-t--22"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "password",
            handleChange: formik.handleChange,
            value: formik.values.password,
            errors: formik.errors.password !== undefined
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formik.errors.password !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--6"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "required",
              message: formik.errors.password
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: [space_module_default.a["m-t--22"], font_module_default.a["size--11"], color_module_default.a["c--gray__1"]].join(" "),
          children: ["By selecting ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
            children: "Agree and continue"
          }), " below, I agree to Airbnb's", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            className: [font_module_default.a["weight--500"]].join(" "),
            style: {
              color: "#1B4CC4"
            },
            children: "Terms of Service"
          }), ",", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            className: [font_module_default.a["weight--500"]].join(" "),
            style: {
              color: "#1B4CC4"
            },
            children: "Payments Terms of Service"
          }), ",", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            className: [font_module_default.a["weight--500"]].join(" "),
            style: {
              color: "#1B4CC4"
            },
            children: "Privacy Policy"
          }), ", and", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            className: [font_module_default.a["weight--500"]].join(" "),
            style: {
              color: "#1B4CC4"
            },
            children: "Nondiscrimination Policy"
          }), "."]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "primary",
          title: "Agree and continue",
          loading: loading,
          block: true
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/auth/prototype.forgot.tsx



/** styles **/



/** components */




/** Helpers */


/**
 * Renders the login template component
 */

const ForgotPasswordPrototype = () => {
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      email: ""
    },
    validate: helper_auth["e" /* validateForgotPassword */],
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [space_module_default.a["p--24"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
      onSubmit: formik.handleSubmit,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          height: 300
        },
        className: [layout_module_default.a["flex"], layout_module_default.a["flex-col"], layout_module_default.a["justify-between"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--16"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Enter the email address associated with your account, and we\u2019ll email you a link to reset your password."
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "email",
                handleChange: formik.handleChange,
                value: formik.values.email,
                errors: formik.errors.email !== undefined
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: formik.errors.email !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [space_module_default.a["m-t--6"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
                  variant: "required",
                  message: formik.errors.email
                })
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "primary",
            size: "md",
            fill: "black",
            title: "Send reset link",
            block: true
          })
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/auth/prototype.exists.tsx



function prototype_exists_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function prototype_exists_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { prototype_exists_ownKeys(Object(source), true).forEach(function (key) { prototype_exists_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { prototype_exists_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function prototype_exists_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** components */




/** Helpers */


/** hooks */


/** styles **/





/** stories */


const ExistsPrototype = ({
  data = {
    imgUrl: "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
    firstname: "Kenichi",
    email: "a01056715@gmail.com"
  }
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      password: ""
    },
    validate: helper_auth["d" /* validateExists */],
    onSubmit: values => {
      const submit = usePost({
        url: "/api/users/signin",
        body: values,

        triggerLoading(state) {
          setLoading(state);
        },

        onSuccess() {
          router_default.a.reload();
        }

      });
      submit();
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [space_module_default.a["p--24"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["flex-col"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--13"], font_module_default.a["text--center"]].join(" "),
          children: "Looks like you already have an account. Please log in instead."
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          style: {
            width: 120
          },
          className: [shape_module_default.a["br--circle"]].join(" "),
          src: data.imgUrl
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-v--8"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--13"], font_module_default.a["text--center"]].join(" "),
            children: data.firstname
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--13"], font_module_default.a["text--center"]].join(" "),
            children: data.email
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "password",
          handleChange: formik.handleChange,
          value: formik.values.password,
          errors: formik.errors.password !== undefined
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "primary",
          loading: loading,
          title: "Log in"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: formik.errors.password !== undefined && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--6"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
            variant: "required",
            message: formik.errors.password
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_exists_objectSpread(prototype_exists_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
        title: "Login with a different account",
        onClick: () => alert("button pressed")
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], prototype_exists_objectSpread(prototype_exists_objectSpread({}, button_stories["h" /* Underline */].args), {}, {
        title: "Forgot password?",
        onClick: () => alert("button pressed")
      }))
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/auth/index.tsx


function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** auth templates */





const auth_Prototype = (_ref) => {
  let {
    variant = "login"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  const variants = {
    login: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginTemplate, auth_objectSpread({}, props)),
    signup: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SignupTemplate, auth_objectSpread({}, props)),
    auth: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthPrototype, auth_objectSpread({}, props)),
    forgotpassword: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ForgotPasswordPrototype, auth_objectSpread({}, props)),
    exists: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExistsPrototype, auth_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-auth-prototype`,
    children: variants[variant]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/modal.auth.tsx



/** styles */





/** components */



/** contexts */



/**
 * Renders the auth modal
 */

const AuthModal = () => {
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();
  const authDispatch = Object(auth["b" /* useAuthDispatch */])();
  const authState = Object(auth["c" /* useAuthState */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        height: 60
      },
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], color_module_default.a["b-b--white__2"], space_module_default.a["p-h--24"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["relative"], shape_module_default.a["w--full"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [layout_module_default.a["al--0"], layout_module_default.a["t---3"], color_module_default.a["bg--transparent"]].join(" "),
          children: authState.title === "Forgot password" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "modal",
            modal: "back",
            onClick: () => authDispatch({
              type: "auth_login"
            })
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "modal",
            modal: "close",
            onClick: () => toggleDispatch({
              type: "close_register"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [layout_module_default.a["all-center"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [font_module_default.a["size--16"]].join(" "),
            children: authState.title
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(auth_Prototype, {
      variant: authState.display
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/modal.booking.tsx



function modal_booking_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modal_booking_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_booking_ownKeys(Object(source), true).forEach(function (key) { modal_booking_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_booking_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_booking_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */







/** components */



/**
 * Renders the booking modal
 * @param {Object[]} availables - Lists all the available dates
 */

const BookingModal = ({
  availables = [{
    date: "Tue., Nov. 10",
    from: "1:00 a.m. ",
    to: "3:00 a.m. ",
    standard: "PST",
    price: 31
  }, {
    date: "Tue., Nov. 10",
    from: "1:00 a.m. ",
    to: "3:00 a.m. ",
    standard: "PST",
    price: 31
  }, {
    date: "Tue., Nov. 10",
    from: "1:00 a.m. ",
    to: "3:00 a.m. ",
    standard: "PST",
    price: 31
  }]
}) => {
  const displayingAvailables = [...availables].splice(0, 3);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [shape_module_default.a["w--full"], layout_module_default.a["inline-block"], modal_module_default.a["position__checkin--wrapper"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: [space_module_default.a["p-v--10"], font_module_default.a["size--21"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
              className: [font_module_default.a["weight--500"], space_module_default.a["p-v--10"], font_module_default.a["size--21"]].join(" "),
              children: "From $31"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " /person"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            className: [font_module_default.a["size--14"], font_module_default.a["weight--100"], color_module_default.a["c--gray__1"]].join(" "),
            children: "Show all prices"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: "input"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [].join(" "),
        children: displayingAvailables.map((available, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [responsive_module_default.a["b_to_f--lg"], layout_module_default.a["justify-between"], space_module_default.a["m-t--16"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [space_module_default.a["m-b--6"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  className: [font_module_default.a["size--15"]].join(" "),
                  children: available.date
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                  className: [font_module_default.a["size--12"]].join(" "),
                  children: [available.from, " - ", available.to, " ", available.standard]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
                  className: [font_module_default.a["size--12"]].join(" "),
                  children: "Book for a private group"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: [space_module_default.a["m-v--4"]].join(" "),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: [font_module_default.a["size--13"]].join(" "),
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("b", {
                    children: ["$", available.price]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  className: [font_module_default.a["size--13"]].join(" "),
                  children: [" ", "/person"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                  variant: "primary",
                  size: "sm",
                  title: "Choose",
                  spread: true
                })
              })]
            })]
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--24"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], modal_booking_objectSpread(modal_booking_objectSpread({}, button_stories["c" /* Border */].args), {}, {
            size: "md",
            title: "See more dates",
            block: true
          }))
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/globe/prototype.language.tsx



/** components */

/** styles */




const Layout = ({
  items,
  type = "suggested"
}) => {
  const titles = {
    suggested: "Suggested languages and regions",
    choose: "Choose a language and region"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--18"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--20"]].join(" "),
        children: titles[type]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: 15,
        rowGap: 15,
        padding: 10
      },
      children: items.map(({
        language,
        region
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "globe",
            language: language,
            region: region,
            extendsTo: [font_module_default.a["text--left"]].join(" "),
            block: true,
            selected: index === 0 && type === "choose"
          })
        }, index);
      })
    })]
  });
};

const LanguagePrototype = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
        type: "choose",
        items: [{
          language: "English",
          region: "Canada"
        }]
      })
    })
  });
};
// EXTERNAL MODULE: ./components/layout/index.tsx + 7 modules
var layout = __webpack_require__("lQQX");

// CONCATENATED MODULE: ./components/prototype/globe/prototype.currency.tsx


/** components */

/** styles */


const CurrencyPrototype = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--24"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "currency",
        title: "Choose a currency",
        items: [{
          name: "Canadian dollar",
          abbreviation: "CAD",
          symbol: "$"
        }]
      })
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/globe/index.tsx


function globe_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function globe_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { globe_ownKeys(Object(source), true).forEach(function (key) { globe_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { globe_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function globe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function globe_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = globe_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function globe_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** globe templates */


const globe_Prototype = (_ref) => {
  let {
    variant = "nearby",
    city = "Paris",
    stayType = "house",
    characteristics
  } = _ref,
      props = globe_objectWithoutProperties(_ref, ["variant", "city", "stayType", "characteristics"]);

  const variants = {
    language: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LanguagePrototype, globe_objectSpread({}, props)),
    currency: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencyPrototype, globe_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-globe-template`,
    children: variants[variant]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/modal.globe.tsx



/** components */


/** styles */



/** Prototypes */


/** contexts */


const GlobeModal = () => {
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();
  const {
    0: Prototype,
    1: setPrototype
  } = Object(external_react_["useState"])("language");
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "modal",
          modal: "close",
          onClick: () => toggleDispatch({
            type: "toggle_globe"
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["m-b--50"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-r--32"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "underline",
            title: "Language and region",
            font: 16,
            bold: true,
            unselected: Prototype !== "language",
            onClick: () => setPrototype("language")
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "underline",
            title: "Currency",
            font: 16,
            bold: true,
            unselected: Prototype !== "currency",
            onClick: () => setPrototype("currency")
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(globe_Prototype, {
        variant: Prototype
      })]
    })]
  });
};
// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// CONCATENATED MODULE: ./components/organisms/modal/modal.location.tsx



function modal_location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modal_location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_location_ownKeys(Object(source), true).forEach(function (key) { modal_location_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_location_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */



/** components */



const LocationModal = () => {
  const recentLocations = [{
    location: "Chilliwack",
    from: "Jan. 7",
    to: "Jan. 21",
    guests: 4
  }, {
    location: "Tofino"
  }, {
    location: "Nanaimo"
  }];
  const nearbyLocations = ["Whistler", "Victora", "Tofino", "Kelowna", "Uclulet", "Chilliwack", "Sooke", "Pemberton"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "location",
        type: "explore",
        extendsTo: [space_module_default.a["p-h--25"], animation_module_default.a["hover-background--white__1"]].join(" "),
        block: true
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "location",
        title: "Recent Searches",
        content: recentLocations.map(recentLocations => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], modal_location_objectSpread(modal_location_objectSpread({
              variant: "location",
              type: "recent"
            }, recentLocations), {}, {
              extendsTo: [space_module_default.a["p-h--25"], animation_module_default.a["hover-background--white__1"]].join(" "),
              block: true
            }))
          });
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "location",
        title: "Nearby Getaways",
        content: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            position: "relative",
            right: 3
          },
          className: [space_module_default.a["m-h--25"], layout_module_default.a["flex"], layout_module_default.a["flex-wrap"]].join(" "),
          children: nearbyLocations.map(nearbyLocation => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "nearby",
                label: nearbyLocation,
                onClick: () => alert(`clicked ${nearbyLocation}`)
              })
            });
          })
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/modal.guests.tsx



/** components */

/** styles */

const GuestsModal = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "counter",
        type: "guests",
        title: "Adults",
        subtitle: "Ages 13 or above"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        height: 1,
        width: "100%",
        backgroundColor: "#EBEBEB"
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "counter",
        type: "guests",
        title: "Children",
        subtitle: "Ages 2 - 12"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        height: 1,
        width: "100%",
        backgroundColor: "#EBEBEB"
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "counter",
        type: "guests",
        title: "Infants",
        subtitle: "Under 2"
      })
    })]
  });
};
// EXTERNAL MODULE: ./public/svg/regular.tsx
var regular = __webpack_require__("6ztO");

// CONCATENATED MODULE: ./components/organisms/modal/modal.check.tsx



/** styles */




/** vectors */


/** components */


const CheckModal = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        columnGap: 50
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Calendar, {
          previous: () => alert("previous")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Calendar, {
          next: () => alert("next")
        })
      })]
    })
  });
};

const Calendar = ({
  next,
  previous
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      width: 294
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"], layout_module_default.a["items-center"], layout_module_default.a["relative"], space_module_default.a["m-t--8"], space_module_default.a["m-b--16"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          left: 0
        },
        children: previous && /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["b" /* ChevronLeft */], {
          width: 12,
          stroke: "black",
          strokeWidth: 3
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: "December 2020"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          right: 0
        },
        children: next && /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["c" /* ChevronRight */], {
          width: 12,
          stroke: "black",
          strokeWidth: 3
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [shape_module_default.a["w--full"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "table",
          tableLayout: "fixed"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell",
                width: 42
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                  className: [font_module_default.a["size--10"]].join(" "),
                  children: day
                })
              })
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--4"]].join(" "),
          children: [1, 2, 3, 4, 5, 6, 7].map(number => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "calendar",
                number: number
              })
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--4"]].join(" "),
          children: [8, 9, 10, 11, 12, 13, 14].map(number => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "calendar",
                number: number
              })
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--4"]].join(" "),
          children: [15, 16, 17, 18, 19, 20, 21].map(number => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "calendar",
                number: number
              })
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--4"]].join(" "),
          children: [22, 23, 24, 25, 26, 27, 28].map(number => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "calendar",
                number: number
              })
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--4"]].join(" "),
          children: [29, 30, 31, null, null, null, null].map(number => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: "table-cell"
              },
              children: number && /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "calendar",
                number: number
              })
            });
          })
        })]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/modal.listing.tsx



/** components */


/** vectors */


/** styles */




const ListingModal = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--24"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--16"]].join(" "),
        children: "To get started, tell us more about your place"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "address",
        direction: "bottom"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "place",
        direction: "middle"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        variant: "guests",
        direction: "top"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-t--20"], space_module_default.a["m-b--45"], layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["S" /* Plus */], {
          width: 15,
          height: 15,
          fill: "black"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: "Let us know any special spaces guests can access"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "primary",
        fill: "black",
        block: true,
        title: "Start your listing"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/modal/index.tsx


function modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_ownKeys(Object(source), true).forEach(function (key) { modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/** hooks */



/** components */










/** contexts */


/** styles */






/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
const Modal = (_ref) => {
  let {
    variant,
    extendsTo,
    dispatch,
    animate = "default",
    lock = false,
    noPadding = false
  } = _ref,
      props = modal_objectWithoutProperties(_ref, ["variant", "extendsTo", "dispatch", "animate", "lock", "noPadding"]);

  const {
    criteria
  } = props;
  const containerRef = Object(external_react_["useRef"])();
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();

  if (lock) {
    useLockBodyScroll();
  }

  Object(useOnClickOutside["a" /* default */])(containerRef, () => toggleDispatch({
    type: `${dispatch}`
  }));
  const animation = {
    slideup: {
      initial: {
        y: 400,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    default: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };
  const variants = {
    privacy: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrivacyModal, modal_objectSpread({}, props)),
      extendsTo: [modal_module_default.a["modal__privacy"], shape_module_default.a["br--8"], space_module_default.a["p--25"]].join(" ")
    },
    menu: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["w--200"], shape_module_default.a["br--16"]].join(" ")
    },
    auth: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthModal, modal_objectSpread({}, props)),
      extendsTo: [modal_module_default.a["w__auth"], shape_module_default.a["br--16"]].join(" ")
    },
    booking: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BookingModal, modal_objectSpread({}, props)),
      extendsTo: [space_module_default.a["p--24"], color_module_default.a["b--white__2"], shape_module_default.a["br--10"]].join(" ")
    },
    globe: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobeModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--720"], space_module_default.a["p--25"], shape_module_default.a["h--fit"], shape_module_default.a["br--16"]].join(" ")
    },
    location: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--400"], shape_module_default.a["br--16"], space_module_default.a["p-v--25"]].join(" ")
    },
    guests: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GuestsModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--325"], shape_module_default.a["br--32"], space_module_default.a["p--25"]].join(" ")
    },
    checkin: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--720"], shape_module_default.a["br--32"], space_module_default.a["p-h--45"], space_module_default.a["p-v--30"]].join(" ")
    },
    checkout: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--720"], shape_module_default.a["br--32"], space_module_default.a["p-h--45"], space_module_default.a["p-v--30"]].join(" ")
    },
    listing: {
      component: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListingModal, modal_objectSpread({}, props)),
      extendsTo: [shape_module_default.a["max-w--500"], space_module_default.a["p--25"], shape_module_default.a["br--20"]].join(" ")
    }
  };

  if (criteria !== undefined) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["AnimatePresence"], {
      children: criteria && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
        "data-testid": `${variant}-modal`,
        exit: {
          opacity: 0
        },
        initial: animation[animate].initial,
        animate: animation[animate].animate,
        transition: animation[animate].transition,
        ref: containerRef,
        className: `${[shape_module_default.a["shadow--sm"], color_module_default.a["bg--white"], shape_module_default.a["w--full"]].join(" ")}  ${variants[variant].extendsTo} ${extendsTo}`,
        children: variants[variant].component
      })
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    ref: containerRef,
    className: `${[shape_module_default.a["shadow--sm"], color_module_default.a["bg--white"], shape_module_default.a["w--full"]].join(" ")}  ${variants[variant].extendsTo} ${extendsTo}`,
    "data-testid": `${variant}-modal`,
    children: variants[variant].component
  });
};

/***/ }),

/***/ "IByY":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"weight--100": "font_weight--100__2vw-H",
	"weight--300": "font_weight--300__T4vtx",
	"weight--500": "font_weight--500__2djgT",
	"weight--700": "font_weight--700__2pvZ2",
	"weight--900": "font_weight--900__1gn_U",
	"size--5": "font_size--5__3Tf3m",
	"size--6": "font_size--6__11JEz",
	"size--7": "font_size--7__2hUsI",
	"size--8": "font_size--8___p46u",
	"size--9": "font_size--9__1x0uE",
	"size--10": "font_size--10__pi5L5",
	"size--11": "font_size--11__1pHoe",
	"size--12": "font_size--12__3p-HP",
	"size--13": "font_size--13__36cik",
	"size--14": "font_size--14__1IzvV",
	"size--15": "font_size--15__3OXQB",
	"size--16": "font_size--16__1m6H-",
	"size--17": "font_size--17__2GQ6A",
	"size--18": "font_size--18__z_Ic_",
	"size--19": "font_size--19__Micyl",
	"size--20": "font_size--20__3BCLj",
	"size--21": "font_size--21__ipxkd",
	"size--22": "font_size--22__337aC",
	"size--23": "font_size--23__vlDCD",
	"size--24": "font_size--24__o-DXf",
	"size--25": "font_size--25__2Yego",
	"size--26": "font_size--26__-QnMS",
	"size--27": "font_size--27__3NBk5",
	"size--28": "font_size--28__VXzlo",
	"size--30": "font_size--30__2TDth",
	"size--32": "font_size--32__1iAoF",
	"size--35": "font_size--35__3166B",
	"size--40": "font_size--40__1PX-R",
	"size--42": "font_size--42__3K_g4",
	"size--45": "font_size--45__3twai",
	"size--47": "font_size--47__1D-xM",
	"size--50": "font_size--50__2Q9C5",
	"size--64": "font_size--64__3kMbB",
	"size--75": "font_size--75__1ODMV",
	"size--100": "font_size--100__1BevH",
	"ls--1": "font_ls--1__2UBq8",
	"ls--3": "font_ls--3__1QCTs",
	"ls--4": "font_ls--4__2zhVG",
	"ls--5": "font_ls--5__epryF",
	"ls--15": "font_ls--15__1kKZk",
	"lh--10": "font_lh--10__3N6Ti",
	"lh--15": "font_lh--15__1RzV6",
	"lh--20": "font_lh--20__2Mgv9",
	"text--left": "font_text--left__16QgO",
	"text--center": "font_text--center__2Nval",
	"no-wrap": "font_no-wrap__2FM8c",
	"uppercase": "font_uppercase__E04Mo"
};


/***/ }),

/***/ "JV+2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Button; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// CONCATENATED MODULE: ./components/atoms/button/button.auth.tsx



/** styles */



/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */

const AuthButton = ({
  icon,
  name = "Email"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["relative"], layout_module_default.a["all-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [layout_module_default.a["al--0"]].join(" "),
      children: icon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: ["Continue with ", name]
      })
    })]
  });
};
// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// CONCATENATED MODULE: ./components/atoms/button/button.menu.tsx



/** styles */





/** vectors */

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */

const MenuButton = ({
  authenticated = false,
  data = {
    imgUrl: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
  },
  inverse = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${inverse ? [color_module_default.a["b-2--transparent"]].join(" ") : [color_module_default.a["b-2--white__2"]].join(" ")} ${[layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["p-v--4"], space_module_default.a["p-l--10"], space_module_default.a["p-r--6"], color_module_default.a["bg--white"], shape_module_default.a["br--30"]].join(" ")}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--10"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["d" /* Bars */], {
        fill: "black",
        width: 12
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: authenticated && data ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: [shape_module_default.a["br--circle"], shape_module_default.a["w--30"], layout_module_default.a["vertical--bottom"]].join(" "),
        style: {
          width: 30,
          verticalAlign: "bottom"
        },
        src: data.imgUrl
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["c" /* Avatar */], {
        width: 30,
        fill: "gray"
      })
    })]
  });
};
// EXTERNAL MODULE: ./styles/responsive.module.scss
var responsive_module = __webpack_require__("SFqS");
var responsive_module_default = /*#__PURE__*/__webpack_require__.n(responsive_module);

// CONCATENATED MODULE: ./components/atoms/button/button.privacy.tsx


/** styles **/






/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */

const PrivacyButton = ({
  title = "Button",
  inverse = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[responsive_module_default.a["b_to_f--sm"], font_module_default.a["no-wrap"], space_module_default.a["p-v--13"], space_module_default.a["p-h--18"], font_module_default.a["weight--500"], shape_module_default.a["br--8"], shape_module_default.a["w--full"], shape_module_default.a["min-w--150"], font_module_default.a["size--15"], layout_module_default.a["justify-center"]].join(" ")} ${inverse ? [color_module_default.a["bg--gray__4"], color_module_default.a["b--transparent"]].join(" ") : [color_module_default.a["bg--transparent"], color_module_default.a["b--black"]].join(" ")}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: inverse ? [color_module_default.a["c--white"]].join(" ") : [color_module_default.a["c--black"]].join(" "),
      children: title
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.border.tsx


/** styles **/




/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */

const BorderButton = ({
  title = "Button",
  inverse = false,
  size = "md",
  bold = true
}) => {
  const renderBorder = () => {
    if (inverse && bold) {
      return [color_module_default.a["b-2--white"]].join(" ");
    }

    if (inverse) {
      return [color_module_default.a["b--white"]].join(" ");
    }

    if (bold) {
      return [color_module_default.a["b-2--black"]].join(" ");
    }

    return [color_module_default.a["b--black"]].join(" ");
  };

  const styles = {
    common: [font_module_default.a["text--center"], shape_module_default.a["br--6"], font_module_default.a["no-wrap"]].join(" "),
    sm: [font_module_default.a["size--14"], space_module_default.a["p-t--6"], space_module_default.a["p-b--6"], space_module_default.a["p-l--14"], space_module_default.a["p-r--14"]].join(" "),
    md: [font_module_default.a["size--16"], space_module_default.a["p-t--10"], space_module_default.a["p-b--10"], space_module_default.a["p-l--18"], space_module_default.a["p-r--18"]].join(" "),
    lg: [font_module_default.a["size--18"], space_module_default.a["p-t--12"], space_module_default.a["p-b--12"], space_module_default.a["p-l--22"], space_module_default.a["p-r--22"]].join(" ")
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${styles["common"]} ${styles[size]} ${renderBorder()}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: inverse ? color_module_default.a["c--white"] : undefined,
      children: title
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.banner.tsx


/** styles */




/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */

const BannerButton = ({
  title = "Button"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [color_module_default.a["bg--white"], space_module_default.a["p-h--16"], space_module_default.a["p-v--8"], shape_module_default.a["br--6"], font_module_default.a["size--14"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: title
    })
  });
};
// EXTERNAL MODULE: ./components/animation/animation.component.tsx + 1 modules
var animation_component = __webpack_require__("tonS");

// CONCATENATED MODULE: ./components/atoms/button/button.primary.tsx


/** styles */





/** components */


/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disable - Shows gray appearance and disabled users from pressing
 */

const PrimaryButton = ({
  title = "Button",
  size = "md",
  fill,
  loading = false,
  disable = false
}) => {
  const renderBackgroundColor = () => {
    if (disable) {
      return [color_module_default.a["bg--white__3"]].join(" ");
    }

    return !fill && !disable && [color_module_default.a["bg--primary"]].join(" ");
  };

  const styles = {
    common: [color_module_default.a["c--white"], shape_module_default.a["w--full"], shape_module_default.a["br--8"]].join(" "),
    sm: [font_module_default.a["size--14"], space_module_default.a["p-v--8"], space_module_default.a["p-h--14"]].join(" "),
    md: [font_module_default.a["size--16"], space_module_default.a["p-v--14"], space_module_default.a["p-h--20"]].join(" "),
    lg: [font_module_default.a["size--16"], space_module_default.a["p-v--14"], space_module_default.a["p-h--20"]].join(" ")
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      backgroundColor: !disable && fill
    },
    className: `${styles["common"]} ${styles[size]} ${renderBackgroundColor()}`,
    children: loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(animation_component["a" /* Animation */], {
        extendsTo: [layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-center"]].join(" "),
        type: "loading"
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: [color_module_default.a["c--white"]].join(" "),
      children: title
    })
  });
};
// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// CONCATENATED MODULE: ./components/atoms/button/button.searchbar.tsx




/** styles */







/** vectors */


/**
 * Renders the searchbar button component
 * @param {boolean} mini - Whether if the button is the minified version or not
 */

const SearchbarButton = ({
  mini = false
}) => {
  const handlePress = () => {
    alert("searchbar button clicked");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: mini ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        width: "100%",
        height: 45
      },
      className: [space_module_default.a["p-v--15"], space_module_default.a["p-l--18"], space_module_default.a["p-r--8"], layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"], color_module_default.a["b--white__3"], shape_module_default.a["br--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["no-wrap"], font_module_default.a["size--14"], font_module_default.a["weight--500"]].join(" "),
          children: "Start your search"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [color_module_default.a["bg--primary"], layout_module_default.a["all-center"]].join(" "),
          style: {
            borderRadius: "50%",
            height: 30,
            width: 30
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["N" /* MagnifyGlass */], {
            width: 12,
            height: 12,
            stroke: "white",
            strokeWidth: 6
          })
        })
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].button, {
      whileTap: {
        scale: 0.98
      },
      "data-testid": "button",
      className: [shape_module_default.a["w--full"], shape_module_default.a["br--25"], color_module_default.a["bg--white"], color_module_default.a["b--white__2"], animation_module_default.a["hover-shadow--sm"], shape_module_default.a["shadow--sm"]].join(" "),
      onClick: handlePress,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["p-v--12"], space_module_default.a["p-l--18"], space_module_default.a["p-r--8"], layout_module_default.a["all-center"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-r--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["N" /* MagnifyGlass */], {
            width: 15,
            stroke: "black",
            strokeWidth: 4
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [font_module_default.a["weight--100"], font_module_default.a["size--15"], color_module_default.a["c--gray__0"]].join(" "),
          children: "Search stays"
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./components/atoms/button/button.module.scss
var button_module = __webpack_require__("+FKr");
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);

// EXTERNAL MODULE: ./public/svg/regular.tsx
var regular = __webpack_require__("6ztO");

// CONCATENATED MODULE: ./components/atoms/button/button.paginate.tsx



/** styles **/




/** vectors */


/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */

const PaginateButton = ({
  direction = "left",
  disable = false
}) => {
  const icons = {
    left: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["b" /* ChevronLeft */], {
      width: 10,
      stroke: `${disable ? "lightgray" : "black"}`,
      strokeWidth: 5
    }),
    right: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["c" /* ChevronRight */], {
      width: 10,
      stroke: `${disable ? "lightgray" : "black"}`,
      strokeWidth: 5
    })
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [button_module_default.a["bg__paginate"], space_module_default.a["p--8"], color_module_default.a["b--white__2"], shape_module_default.a["br--circle"]].join(" "),
      children: icons[direction]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.expand.tsx



/** styles */


/** vectors */


/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */

const ExpandButton = ({
  title = "Button"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
          className: [font_module_default.a["size--15"], font_module_default.a["weight--500"]].join(" "),
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["c" /* ChevronRight */], {
          width: 14,
          stroke: "black",
          strokeWidth: 5
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.option.tsx


/** styles */





/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */

const OptionButton = ({
  name = "Option",
  bold = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[font_module_default.a["text--left"], font_module_default.a["size--13"], color_module_default.a["bg--white"], space_module_default.a["p-h--14"], space_module_default.a["p-v--10"], layout_module_default.a["block"], animation_module_default.a["hover-background--white__1"]].join(" ")} ${bold ? [font_module_default.a["weight--500"]].join(" ") : [font_module_default.a["weight--300"]].join(" ")}`,
    children: name
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.underline.tsx


/** styles */


/**
 * Renders the underline button component
 * @param {function} onClick - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */

const UnderlineButton = ({
  title = "Title here",
  font = 14,
  bold = false,
  unselected = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [layout_module_default.a["inline-block"], color_module_default.a["bg--transparent"]].join(" "),
    children: bold ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      style: {
        fontSize: font
      },
      className: unselected ? [color_module_default.a["c--white__3"]].join(" ") : undefined,
      children: unselected ? title : /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
        children: title
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      style: {
        fontSize: font
      },
      className: unselected && [color_module_default.a["c--white__3"]].join(" "),
      children: unselected ? title : /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
        children: title
      })
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.filter.tsx


/** styles **/





/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */

const FilterButton = ({
  name = "Cancellation flexibility"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [button_module_default.a["hover__filter"], space_module_default.a["p-v--8"], space_module_default.a["p-h--14"], shape_module_default.a["br--20"], color_module_default.a["bg--transparent"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: [font_module_default.a["size--15"]].join(" "),
      children: name
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.modal.tsx


/** vectors */


/** styles **/





/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */

const ModalButton = ({
  modal = "close"
}) => {
  const types = {
    close: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["p" /* Close */], {
      width: 16,
      height: 16,
      stroke: "black",
      strokeWidth: 2
    }),
    back: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["b" /* ChevronLeft */], {
      width: 16,
      height: 16,
      stroke: "black",
      strokeWidth: 4
    })
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [color_module_default.a["bg--transparent"], space_module_default.a["p--8"], shape_module_default.a["br--circle"], button_module_default.a["hover__close"]].join(" "),
    children: types[modal]
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.back.tsx



/** styles */



/** vectors */


const BackButton = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], color_module_default.a["bg--transparent"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["b" /* ChevronLeft */], {
        width: 20,
        stroke: "#61AFB2",
        strokeWidth: 3
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--15"], color_module_default.a["c--darkgreen__3"]].join(" "),
        children: "Back"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.closed.tsx


/** vectors */

const ClosedButton = ({
  content = "close",
  selected = false
}) => {
  const contents = {
    close: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["p" /* Close */], {
      width: 16,
      fill: selected,
      stroke: selected ? "white" : "black",
      strokeWidth: 2
    }),
    check: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["j" /* CheckPlain */], {
      width: 16,
      fill: selected,
      stroke: selected ? "white" : "black",
      strokeWidth: 2
    })
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      borderRadius: 9999,
      backgroundColor: selected ? "black" : "white",
      border: `1px solid ${selected ? "black" : "lightgray"}`
    },
    children: contents[content]
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.transparent.tsx


/** styles **/





/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */

const TransparentButton = ({
  inverse = false,
  content
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[shape_module_default.a["br--30"], layout_module_default.a["flex"], layout_module_default.a["items-center"], color_module_default.a["bg--transparent"], space_module_default.a["p-v--10"], space_module_default.a["p-h--12"]].join(" ")} ${inverse ? [animation_module_default.a["hover-background--white__transparent"]].join(" ") : [animation_module_default.a["hover-background--white__1"]].join(" ")}`,
    children: content
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.globe.tsx



/** styles */





const GlobeButton = ({
  language = "Language",
  region = "Region",
  selected = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${[space_module_default.a["p--12"], shape_module_default.a["br--8"], animation_module_default.a["hover-background--white__1"]].join(" ")} ${selected && color_module_default.a["b--black"]}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--black"]].join(" "),
        children: language
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__1"]].join(" "),
        children: region
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.link.tsx


/** styles */

const LinkButton = ({
  title
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: [font_module_default.a["size--14"]].join(" "),
      children: title
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.search.tsx



/** vectors */

/** styles */





const SearchButton = ({
  expand = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], color_module_default.a["bg--primary"]].join(" "),
    style: {
      transitionDelay: expand ? "0s" : "0.25s",
      transition: "0.25s all ease",
      width: expand ? 95 : 40,
      height: 40,
      borderRadius: 50
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${[space_module_default.a["p-l--14"]].join(" ")} ${[space_module_default.a["m-r--4"]].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["N" /* MagnifyGlass */], {
        width: 13,
        height: 13,
        stroke: "white",
        strokeWidth: 4
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        transition: "0.25s all ease",
        transitionDelay: expand ? "0.25s" : "0s",
        opacity: expand ? 1 : 0,
        visibility: expand ? "visible" : "hidden"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--15"], color_module_default.a["c--white"]].join(" "),
        children: "Search"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.location.tsx



/** styles */




const LocationButton = ({
  type = "explore",
  location,
  from,
  to,
  guests
}) => {
  const types = {
    explore: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          borderRadius: 5,
          verticalAlign: "bottom"
        },
        src: "https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
      }),
      title: "Explore nearby destinations"
    },
    recent: {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          borderRadius: 5,
          backgroundColor: "lightgray",
          width: "100%",
          height: "100%"
        }
      }),
      title: `${location} · Stays`
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["flex"], layout_module_default.a["items-center"], space_module_default.a["p-v--8"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-r--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: 40,
          height: 40
        },
        children: types[type].icon
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["text--left"], font_module_default.a["size--15"]].join(" "),
          children: types[type].title
        })
      }), type === "recent" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
          className: [font_module_default.a["text--left"], font_module_default.a["size--10"], color_module_default.a["c--gray__0"]].join(" "),
          children: [from ? from : "", to ? ` - ${to}` : "", guests ? guests > 0 ? ` · ${guests} guests` : ` · ${guests} guest` : ""]
        })
      })]
    })]
  });
};
// EXTERNAL MODULE: ./public/svg/logo.tsx
var logo = __webpack_require__("DncH");

// CONCATENATED MODULE: ./components/atoms/button/button.logo.tsx


/** styles */

/** vectors */

const LogoButton = ({
  noName = false,
  fill = "#F5385D"
}) => {
  return noName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["e" /* NoNameLogo */], {
    fill: fill,
    width: 30,
    height: 32
  }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["d" /* NameLogo */], {
    fill: fill,
    width: 102,
    height: 32
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.nearby.tsx


/** styles */





const NearbyButton = ({
  label = "Nearby"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [space_module_default.a["p--3"], animation_module_default.a["hover-border--gray__4"], color_module_default.a["b--transparent"], shape_module_default.a["br--10"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [color_module_default.a["b--white__3"], space_module_default.a["p-h--15"], space_module_default.a["p-v--10"], shape_module_default.a["br--10"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--12"]].join(" "),
        children: label
      })
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/button.calendar.tsx


/** styles */





const CalendarButton = ({
  disabled = false,
  number
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      width: 42,
      height: 42
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        height: "100%",
        width: "100%"
      },
      className: `${[layout_module_default.a["flex"], layout_module_default.a["justify-center"], layout_module_default.a["items-center"], shape_module_default.a["br--circle"],,].join(" ")} ${disabled && animation_module_default.a["hover-border--black"]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: `${disabled ? [color_module_default.a["c--black"]].join(" ") : [color_module_default.a["c--white__2"]].join(" ")} ${[font_module_default.a["size--12"]].join(" ")}`,
        children: number
      })
    })
  });
};
// CONCATENATED MODULE: ./components/atoms/button/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/** components */
























/** styles **/





/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
const Button = (_ref) => {
  let {
    extendsTo = "",
    variant,
    children,
    onClick,
    to,
    block,
    animate
  } = _ref,
      props = _objectWithoutProperties(_ref, ["extendsTo", "variant", "children", "onClick", "to", "block", "animate"]);

  const {
    disable
  } = props;
  const variants = {
    auth: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthButton, _objectSpread({}, props)),
    menu: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuButton, _objectSpread({}, props)),
    privacy: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrivacyButton, _objectSpread({}, props)),
    border: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BorderButton, _objectSpread({}, props)),
    banner: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BannerButton, _objectSpread({}, props)),
    primary: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrimaryButton, _objectSpread({}, props)),
    // searchbar: <SearchbarButton {...props} />,
    paginate: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PaginateButton, _objectSpread({}, props)),
    expand: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExpandButton, _objectSpread({}, props)),
    option: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OptionButton, _objectSpread({}, props)),
    underline: /*#__PURE__*/Object(jsx_runtime_["jsx"])(UnderlineButton, _objectSpread({}, props)),
    filter: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, _objectSpread({}, props)),
    modal: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalButton, _objectSpread({}, props)),
    back: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BackButton, _objectSpread({}, props)),
    transparent: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TransparentButton, _objectSpread({}, props)),
    globe: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobeButton, _objectSpread({}, props)),
    link: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkButton, _objectSpread({}, props)),
    closed: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ClosedButton, _objectSpread({}, props)),
    search: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchButton, _objectSpread({}, props)),
    location: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationButton, _objectSpread({}, props)),
    nearby: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NearbyButton, _objectSpread({}, props)),
    calendar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CalendarButton, _objectSpread({}, props)),
    searchbar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchbarButton, _objectSpread({}, props)),
    logo: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoButton, _objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].button, {
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    },
    whileTap: {
      scale: disable || !animate ? 1 : 0.995
    },
    whileHover: {
      scale: disable || !animate ? 1 : 1.005
    },
    "data-testid": `${variant}-button--atom`,
    className: `${extendsTo} ${block ? [layout_module_default.a["block"], shape_module_default.a["w--full"]].join(" ") : layout_module_default.a["inline-block"]} ${[animation_module_default.a["transition"]].join(" ")}`,
    onClick: !disable ? onClick : undefined,
    disabled: disable,
    style: {
      cursor: disable ? "default" : "pointer"
    },
    children: variant ? variants[variant] : children
  });
};

/***/ }),

/***/ "Jzoe":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"w__horizontal": "card_w__horizontal__35uR6",
	"w__vertical": "card_w__vertical__34aF1",
	"w__checkin--wrapper": "card_w__checkin--wrapper__3VN_Z",
	"w__nearby--sm": "card_w__nearby--sm__1D5bp",
	"w__nearby--lg": "card_w__nearby--lg__21di4",
	"w__works": "card_w__works__1sKRh",
	"h__card": "card_h__card__1xdcO",
	"m__checkin--wrapper": "card_m__checkin--wrapper__172de",
	"display__checkin--wrapper": "card_display__checkin--wrapper__1z2B1",
	"display__works": "card_display__works__32LW_",
	"position__checkin--wrapper": "card_position__checkin--wrapper__1D5BG",
	"p__checkin--wrapper": "card_p__checkin--wrapper__2fC9X",
	"p__checkin--button": "card_p__checkin--button__242nb",
	"shadow": "card_shadow__2kRnc",
	"category-section__carousel": "card_category-section__carousel__ZC09Y",
	"category-section__card": "card_category-section__card__24k_a",
	"category-section__card--img": "card_category-section__card--img__VL9t0",
	"category-section__card--space": "card_category-section__card--space__1ZFaU",
	"hosting": "card_hosting__1F18N"
};


/***/ }),

/***/ "KakI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lQQX");
/* harmony import */ var _prototype_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fOdF");
/* harmony import */ var _context_stay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pl4W");



/** components */



/** contexts */



const DescriptionPage = () => {
  const stayDispatch = Object(_context_stay__WEBPACK_IMPORTED_MODULE_5__[/* useStayDispatch */ "b"])();
  const {
    description
  } = Object(_context_stay__WEBPACK_IMPORTED_MODULE_5__[/* useStayState */ "c"])();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    description
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data
    });
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/become-a-host/title");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/become-a-host/spaces");
    }, 500);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_layout__WEBPACK_IMPORTED_MODULE_3__[/* Layout */ "a"], {
    variant: "create",
    left: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_prototype_create__WEBPACK_IMPORTED_MODULE_4__[/* Prototype */ "a"], {
      title: "Description and title",
      variant: "description",
      data: data,
      setData: setData
    }),
    percentage: 60,
    next: proceed,
    back: revert,
    criteria: data.description.length === 0 || data.description.length >= 500
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DescriptionPage);

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

/***/ "MS2y":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hover-transparent": "animation_hover-transparent__W41J9",
	"hover-shadow--sm": "animation_hover-shadow--sm__SRXFW",
	"hover-shadow--md": "animation_hover-shadow--md__2hscR",
	"hover-shadow--lg": "animation_hover-shadow--lg__3Gok_",
	"hover-background--white__transparent": "animation_hover-background--white__transparent__1dUU3",
	"hover-border--white__transparent": "animation_hover-border--white__transparent__26S1j",
	"background--white__transparent": "animation_background--white__transparent__2ishy",
	"c--white__transparent": "animation_c--white__transparent__1ertA",
	"border--white__transparent": "animation_border--white__transparent__FKMXB",
	"focus-border--white__transparent": "animation_focus-border--white__transparent__24bL1",
	"hover-background--white": "animation_hover-background--white__1Q18E",
	"hover-border--white": "animation_hover-border--white__1siWs",
	"background--white": "animation_background--white__369Ym",
	"c--white": "animation_c--white__1PWlW",
	"border--white": "animation_border--white__1rmcM",
	"focus-border--white": "animation_focus-border--white__3GVpy",
	"hover-background--white__1": "animation_hover-background--white__1__G1Apg",
	"hover-border--white__1": "animation_hover-border--white__1__2L1rz",
	"background--white__1": "animation_background--white__1__1OpTd",
	"c--white__1": "animation_c--white__1__3QIPZ",
	"border--white__1": "animation_border--white__1__aK3Vi",
	"focus-border--white__1": "animation_focus-border--white__1__3UsBi",
	"hover-background--white__2": "animation_hover-background--white__2__2evQG",
	"hover-border--white__2": "animation_hover-border--white__2__w8IvU",
	"background--white__2": "animation_background--white__2__1PouA",
	"c--white__2": "animation_c--white__2__2wdDx",
	"border--white__2": "animation_border--white__2__2LGG1",
	"focus-border--white__2": "animation_focus-border--white__2__1Nsky",
	"hover-background--gray__0": "animation_hover-background--gray__0__2oru5",
	"hover-border--gray__0": "animation_hover-border--gray__0__1WRwL",
	"background--gray__0": "animation_background--gray__0__3MNHZ",
	"c--gray__0": "animation_c--gray__0__haPVj",
	"border--gray__0": "animation_border--gray__0__2YjDq",
	"focus-border--gray__0": "animation_focus-border--gray__0__2bni9",
	"hover-background--gray__1": "animation_hover-background--gray__1__2uBHg",
	"hover-border--gray__1": "animation_hover-border--gray__1__1O6jK",
	"background--gray__1": "animation_background--gray__1__1Hpz7",
	"c--gray__1": "animation_c--gray__1__T1Wdi",
	"border--gray__1": "animation_border--gray__1___BQh0",
	"focus-border--gray__1": "animation_focus-border--gray__1__29ST_",
	"hover-background--gray__4": "animation_hover-background--gray__4__waDjo",
	"hover-border--gray__4": "animation_hover-border--gray__4__2Tihp",
	"background--gray__4": "animation_background--gray__4__30heV",
	"c--gray__4": "animation_c--gray__4__1MYrQ",
	"border--gray__4": "animation_border--gray__4__1K8MR",
	"focus-border--gray__4": "animation_focus-border--gray__4__2gwgS",
	"hover-background--black": "animation_hover-background--black__3lG9M",
	"hover-border--black": "animation_hover-border--black__1tAmg",
	"background--black": "animation_background--black__rVglG",
	"c--black": "animation_c--black__2cajZ",
	"border--black": "animation_border--black__2-ZWW",
	"focus-border--black": "animation_focus-border--black__213aR",
	"hover-background--lightred__0": "animation_hover-background--lightred__0__1aZ07",
	"hover-border--lightred__0": "animation_hover-border--lightred__0__33Z4S",
	"background--lightred__0": "animation_background--lightred__0__10jlj",
	"c--lightred__0": "animation_c--lightred__0__36a3w",
	"border--lightred__0": "animation_border--lightred__0__207lw",
	"focus-border--lightred__0": "animation_focus-border--lightred__0__1mGbE",
	"hover-background--warning": "animation_hover-background--warning__2BiZ4",
	"hover-border--warning": "animation_hover-border--warning__2BYo_",
	"background--warning": "animation_background--warning__tmHC5",
	"c--warning": "animation_c--warning__3vfxN",
	"border--warning": "animation_border--warning__2Q4IF",
	"focus-border--warning": "animation_focus-border--warning__3ykUt",
	"hover-background--darkgreen__3": "animation_hover-background--darkgreen__3__2pooQ",
	"hover-border--darkgreen__3": "animation_hover-border--darkgreen__3__LRh6M",
	"background--darkgreen__3": "animation_background--darkgreen__3__1J32z",
	"c--darkgreen__3": "animation_c--darkgreen__3__3PA3b",
	"border--darkgreen__3": "animation_border--darkgreen__3__3QiKS",
	"focus-border--darkgreen__3": "animation_focus-border--darkgreen__3__iyjMF",
	"hover-background--transparent": "animation_hover-background--transparent__2sSAC",
	"hover-border--transparent": "animation_hover-border--transparent__3HcIF",
	"background--transparent": "animation_background--transparent__3yEAh",
	"c--transparent": "animation_c--transparent___Z26U",
	"border--transparent": "animation_border--transparent__-gIgr",
	"focus-border--transparent": "animation_focus-border--transparent__3wdxT",
	"transition": "animation_transition__2V4bn",
	"transition--fast": "animation_transition--fast__2RqhK"
};


/***/ }),

/***/ "OODI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Bars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return MagnifyGlass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return Lock; });
/* unused harmony export Saved */
/* unused harmony export Login */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Globe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Heart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return Star; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return Superhost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return House; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return Sparkle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Door; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return Guidelines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return DoubleBed; });
/* unused harmony export Flag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SmokeAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return TV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return Kitchen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Heating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return PrivateEntrance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CarbonMonoxideAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return Verified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Shield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Checkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return Smoking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return Pets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Parties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Cleaning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Distancing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Caution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CheckInverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CheckPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Checked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Devices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DevicesInverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return People; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Computer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return Protection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Guidance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return Requirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CustomerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return ToolBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Analytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Exclamation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Lightening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return Minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Protected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return Upload; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Avatar = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
    })
  }));
};
const Bars = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 448 512",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    })
  }));
};
const MagnifyGlass = (_ref) => {
  let {
    stroke,
    strokeWidth
  } = _ref,
      props = _objectWithoutProperties(_ref, ["stroke", "strokeWidth"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      fill: "none",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        stroke: stroke,
        strokeWidth: strokeWidth,
        d: "m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
      })
    })
  }));
};
const Lock = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M10.25 4a2.25 2.25 0 0 0-4.495-.154L5.75 4v2h-1.5V4a3.75 3.75 0 0 1 7.495-.2l.005.2v2H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.25V4z"
    })
  }));
};
const Saved = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
    })
  }));
};
const Login = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "12",
      cy: "12",
      r: "10.5"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4"
    })]
  }));
};
const Globe = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"
    })
  }));
};
const Heart = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
    })
  }));
};
const Close = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m6 6 20 20"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m26 6-20 20"
    })]
  }));
};
const Email = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z",
      fillRule: "evenodd"
    })
  }));
};
const Star = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    style: {
      fill: "#E61E4D",
      marginBottom: 1
    },
    viewBox: "0 0 37.286 37.287",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382\nc-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15\nc-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05\nc0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116\nc0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361\nC37.425,15.013,37.226,15.808,36.683,16.339z"
      })
    })
  }));
};
const Superhost = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 511.999 511.999",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      fill: "#E61E4D",
      clipRule: "evenodd",
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z"
      })]
    })
  }));
};
const Share = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 512 512.00578",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0"
    })]
  }));
};
const House = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z"
    })
  }));
};
const Sparkle = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"
    })
  }));
};
const Door = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm-4 2H7l-.001 26H21zm4 0h-2v26h1.999zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const Calendar = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z"
    })
  }));
};
const Guidelines = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M28.477 1.07a2 2 0 0 1 2.515 1.754L31 3v23.04a2 2 0 0 1-1.34 1.888l-.153.047-13 3.41a2 2 0 0 1-.813.041l-.201-.041-13-3.41a2 2 0 0 1-1.487-1.776L1 26.04V3a2 2 0 0 1 2.35-1.969l.173.039L16 4.448zM29 3L16.523 6.378a2 2 0 0 1-.873.039l-.173-.039L3 3v23.04l13 3.41 13-3.41zm-2 17.984v2l-9 2.5v-2zm0-7v2l-9 2.5v-2zm0-7v2l-9 2.5v-2z"
    })
  }));
};
const DoubleBed = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 480 480",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328\nc3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16\nH99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672\nC41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112\nc0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8\nv-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16\ns-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368\nv112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16\nc0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64\nc-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64\nc-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16\nc0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
        })
      })
    })]
  }));
};
const Flag = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M22.39 5.798c-.088-.208-1.252-2.89-1.759-4.018a228.077 228.077 0 0 0-.677-1.49.5.5 0 0 0-.838-.11 7.236 7.236 0 0 1-.407.435 10.66 10.66 0 0 1-1.134.985C16.404 2.479 15.187 3 14 3c-1.21 0-1.995-.133-3.309-.483l-.4-.107C9.194 2.121 8.47 2 7.5 2a6.35 6.35 0 0 0-1.186.12c-.87.165-1.786.49-2.715.928-.48.225-.932.467-1.345.708l-.112.068-.171-.49a.5.5 0 1 0-.944.331l7 20a.5.5 0 0 0 .944-.33l-2.986-8.531a21.773 21.773 0 0 1 1.77-.843c.73-.307 1.44-.556 2.102-.724.61-.155 1.163-.237 1.642-.237.869 0 1.515.108 2.536.377l.398.106c1.39.371 2.255.517 3.566.517 2.853 0 5.29-1.786 5.974-3.842a.5.5 0 0 0 0-.316c-.324-.974-.87-2.355-1.584-4.044z"
    })
  }));
};
const SmokeAlarm = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm-4.9 14a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const TV = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
    })
  }));
};
const Kitchen = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"
    })
  }));
};
const Heating = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
    })
  }));
};
const PrivateEntrance = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const CarbonMonoxideAlarm = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const Verified = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 512.02797 512",
    className: "h-3 w-3",
    style: {
      fill: "#E61E4D"
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m441.644531 247.59375-11.457031-32.554688-123.582031 123.585938c-12.074219 12.097656-28.160157 18.75-45.25 18.75-17.085938 0-33.171875-6.652344-45.246094-18.75l-90.667969-90.667969c-12.097656-12.074219-18.753906-28.160156-18.753906-45.246093 0-17.089844 6.65625-33.175782 18.753906-45.25 12.074219-12.09375 28.160156-18.75 45.246094-18.75 17.089844 0 33.175781 6.65625 45.25 18.75l45.417969 45.398437 121.6875-121.683594-8.195313-23.253906-3.773437-22.570313c-2.367188-14.464843-11.90625-26.453124-25.453125-32.066406-13.609375-5.652344-28.796875-3.902344-40.722656 4.652344l-59.285157 42.921875-59.949219-43.03125c-12.03125-8.488281-27.261718-10.175781-40.789062-4.5-13.4375 5.632813-22.890625 17.601563-25.257812 31.980469l-11.605469 72.253906-72.683594 12.074219c-14.441406 2.371093-26.429687 11.90625-32.0625 25.453125-5.632813 13.589844-3.882813 28.820312 4.671875 40.746094l42.902344 59.285156-43.03125 59.945312c-8.46875 12.03125-10.175782 27.285156-4.5 40.789063 5.652344 13.441406 17.597656 22.890625 31.976562 25.261719l72.257813 11.625 12.074219 72.660156c2.347656 14.421875 11.820312 26.390625 25.257812 32.023437 13.546875 5.671875 28.800781 3.988281 40.941406-4.609375l59.285156-42.921875 59.796876 42.921875c7.316406 5.226563 15.828124 7.914063 24.46875 7.914063 5.480468 0 10.984374-1.066407 16.253906-3.261719 13.570312-5.632812 23.085937-17.621094 25.453125-32.023438l11.625-72.253906 72.660156-12.074218c14.421875-2.371094 26.371094-11.820313 32.023437-25.261719 5.675782-13.503907 3.988282-28.757813-4.609374-40.9375zm0 0"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m261.355469 314.710938c-5.460938 0-10.921875-2.089844-15.082031-6.25l-90.667969-90.667969c-8.339844-8.339844-8.339844-21.824219 0-30.164063 8.34375-8.34375 21.824219-8.34375 30.167969 0l75.582031 75.582032 214.25-214.25c8.34375-8.339844 21.824219-8.339844 30.167969 0 8.339843 8.339843 8.339843 21.824218 0 30.164062l-229.335938 229.335938c-4.160156 4.160156-9.621094 6.25-15.082031 6.25zm0 0"
    })]
  }));
};
const Shield = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "rgb(255, 180, 0)",
      d: "m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "#484848",
      d: "m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
    })]
  }));
};
const Clock = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB80\uDC25"
  }));
};
const Checkin = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB80\uDD04"
  }));
};
const Children = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB86\uDD04"
  }));
};
const Smoking = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB86\uDD08"
  }));
};
const Pets = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB86\uDD06"
  }));
};
const Parties = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB86\uDD02"
  }));
};
const Cleaning = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDBA4\uDC01"
  }));
};
const Distancing = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M5 5v.414l4 4v3.172L4.464 17.12C3.527 18.06 3 18.674 3 20v9c0 1.644 1.356 2.982 3 3 6.645-.012 10.645-.012 12 0 1.657.014 3-1 3-3v-9c0-1.351-.547-2.126-1.516-3.067L15 12.577V9a2.99 2.99 0 0 1 2.083-2.842 8.957 8.957 0 0 0 2.17 4.798l1.499-1.324A6.959 6.959 0 0 1 19.078 6H23V0H10a5 5 0 0 0-5 5zm14-3h2v2h-2zm-1.032 22.686h.004c.348 0 .69-.034 1.028-.084v2.02c-.34.039-.682.064-1.028.064h-.004a8.946 8.946 0 0 1-6.362-2.636A6.948 6.948 0 0 0 6.659 22h-.003A7.07 7.07 0 0 0 5 22.204v-2.048c.54-.1 1.093-.156 1.655-.156h.005a8.94 8.94 0 0 1 6.36 2.636 6.956 6.956 0 0 0 4.948 2.05zM11 10h2v2h-2zm17-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    })
  }));
};
const Caution = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", _objectSpread(_objectSpread({}, props), {}, {
    children: "\uDB86\uDC03"
  }));
};
const Check = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1zm-2.5 22.621L6.879 17 9 14.879l4.5 4.5 9.5-9.5L25.121 12 13.5 23.621z"
    })
  }));
};
const CheckInverse = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13zm7 7.5857864 1.4142136 1.4142136-10.9142136 10.9142136-5.91421356-5.9142136 1.41421356-1.4142136 4.5 4.4992136z"
    })
  }));
};
const CheckPlain = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "none",
      d: "m4 16.5 8 8 16-16"
    })
  }));
};
const Checked = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    fillOpacity: 0,
    stroke: "black",
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 52 52",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m19.1 25.2 4.7 6.2 12.1-11.2"
    })
  }));
};
const Time = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17.08 5.104v10.421l9.026 5.213-1 1.732-10.027-5.79V5.105zM7.5 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm20 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM11 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const Devices = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M26 3a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2H9v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3zm-7 22h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-3-3zM5 11c5.43 0 9.848 4.327 9.996 9.72L15 21h-2a8 8 0 0 0-7.75-7.996L5 13zm0 4a6 6 0 0 1 5.996 5.775L11 21H9a4 4 0 0 0-3.8-3.995L5 17zm0 4a2 2 0 0 1 1.995 1.85L7 21H5z"
    })
  }));
};
const DevicesInverse = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M13.5 1a2.5 2.5 0 0 1 2.495 2.336L16 3.5v7a2.5 2.5 0 0 1-2.336 2.495L13.5 13h-2.25v1.5H13V16H3v-1.5h1.75V13H2.5a2.5 2.5 0 0 1-2.495-2.336L0 10.5v-7a2.5 2.5 0 0 1 2.336-2.495L2.5 1h11zM9.75 13h-3.5v1.5h3.5V13zm-7-6.5c-.172 0-.34.012-.506.034L2 6.575v1.553a2.25 2.25 0 0 1 2.927 2.693l-.054.18h1.553A3.75 3.75 0 0 0 2.75 6.5zm0-3c-.169 0-.337.006-.503.018L2 3.541v1.512a5.25 5.25 0 0 1 5.977 5.7l-.03.248h1.512A6.75 6.75 0 0 0 2.75 3.5zm0 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"
    })
  }));
};
const People = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m22 7c2.7614237 0 5 2.23857625 5 5 0 1.4483542-.6158223 2.7528755-1.5999105 3.6660075 3.2075261 1.3080072 5.4902937 4.4154553 5.5960734 8.0686302l.0038371.2653623h-2c0-3.5261219-2.6071882-6.4433024-5.9989899-6.9289666l-.0001094-2.2420576c1.1647219-.4120906 1.9990993-1.5230936 1.9990993-2.8289758 0-1.6568542-1.3431458-3-3-3-1.5976809 0-2.9036609 1.24892-2.9949073 2.8237272l-.0050927.1762728.0819616.0625271c1.1677123.9152829 1.9180384 2.3387539 1.9180384 3.9374729 0 1.4479059-.615441 2.7520678-1.5989966 3.6651593 3.207085 1.309499 5.4893907 4.4166818 5.5951595 8.0694784l.0038371.2653623h-2c0-3.5261219-2.6071882-6.4433024-5.9989899-6.9289666l-.0001094-2.2420576c1.1647219-.4120906 1.9990993-1.5230936 1.9990993-2.8289758 0-1.6568542-1.3431458-3-3-3s-3 1.3431458-3 3c0 1.3062521.8348501 2.4175144 2.0000889 2.8293257l-.0000889 2.2415643c-3.3148214.4741509-5.8804754 3.2706475-5.99594098 6.6884602l-.00405902.2406498h-2c0-3.7671593 2.31452169-6.9937332 5.5991096-8.335266-.9836686-.9126662-1.5991096-2.2168281-1.5991096-3.664734 0-1.598719.7503261-3.02219 1.9180384-3.9374729l.0819616-.0625271c0-1.6568542-1.3431458-3-3-3-1.65685425 0-3 1.3431458-3 3 0 1.3062521.8348501 2.4175144 2.00008893 2.8293257l-.00008893 2.2415643c-3.31482137.4741509-5.8804754 3.2706475-5.99594098 6.6884602l-.00405902.2406498h-2c0-3.7671593 2.31452169-6.9937332 5.5991096-8.335266-.98366859-.9126662-1.5991096-2.2168281-1.5991096-3.664734 0-2.76142375 2.23857625-5 5-5 2.4601119 0 4.505252 1.77670575 4.9222714 4.1169685.3461998-.0766772.707259-.1169685 1.0777286-.1169685s.7315288.0402913 1.0790344.1167309c.4156259-2.33994891 2.4608009-4.1167309 4.9209656-4.1167309z"
    })
  }));
};
const Language = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16.00049,31.0791,11.84326,26H6a5.00588,5.00588,0,0,1-5-5V7A5.00588,5.00588,0,0,1,6,2H26a5.00588,5.00588,0,0,1,5,5V21a5.00588,5.00588,0,0,1-5,5H20.1543ZM6,4A3.00328,3.00328,0,0,0,3,7V21a3.00328,3.00328,0,0,0,3,3h6.79053l3.209,3.9209L19.207,24H26a3.00328,3.00328,0,0,0,3-3V7a3.00328,3.00328,0,0,0-3-3Z"
    })
  }));
};
const Computer = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M27 3a2 2 0 0 1 1.995 1.85L29 5l-.001 14.816 2.43 6.482a2 2 0 0 1-.881 2.44l-.145.074-.144.06a2 2 0 0 1-.523.12l-.179.008H2.443a2 2 0 0 1-1.928-2.532l.055-.17L3 19.819 3 5a2 2 0 0 1 1.697-1.977l.154-.018L5 3zm.306 18H4.692l-2.249 6h27.114zM19 23v2h-6v-2zm8-18H5l-.001 14h22zM16 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  }));
};
const Host = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16.7597838 18.236214c2.9023982.9912096 4.8547348 2.9095164 5.2334132 5.1815865.0453975.2723852-.1386123.5299989-.4109975.5753965-.2723852.0453975-.5299989-.1386123-.5753965-.4109975-.2434308-1.4605852-1.3196462-2.7852247-3.006803-3.7148829v3.6326834c0 .2761424-.2238576.500078-.5.500078s-.5-.2239356-.5-.500078v-4.1073852c-.3178327-.1291113-.6515089-.245905-1-.3491799v3.4565651c0 .2761424-.2238576.5-.5.5h-7c-.27614237 0-.5-.2238576-.5-.5v-3.4837989c-.34920291.0996989-.68279767.2128777-1 .3384673v4.1453316c0 .2761424-.22385763.500078-.5.500078s-.5-.2239356-.5-.500078v-3.6797858c-1.69506802.9212223-2.7555773 2.2546309-3.00680304 3.7619853-.04539752.2723852-.30301129.456395-.57539645.4109975-.27238516-.0453976-.456395-.3030113-.41099747-.5753965.38616693-2.3170016 2.2930421-4.2301789 5.20614625-5.2044819-.35823846-.3013528-.6950518-.6373923-1.00654353-1.0054553-.37573893.1651947-.78491908.2525379-1.20640576.2525379-1.65685425 0-3-1.3431458-3-3 0-.3027309.04502163-.5995648.1321259-.8828028-.71244196-.6542578-1.1321259-1.5812644-1.1321259-2.5775984 0-1.46793141.91006526-2.74734578 2.22575914-3.26095339-.14814337-.39130626-.22575914-.80974601-.22575914-1.23904661 0-1.93299662 1.56700338-3.5 3.5-3.5.29654618 0 .58825457.03700764.86986971.1090644.75569118-1.85180097 2.56963834-3.1090644 4.63013029-3.1090644 2.0604919 0 3.8744391 1.25726343 4.6301303 3.1090644.2816151-.07205676.5733235-.1090644.8698697-.1090644 1.9329966 0 3.5 1.56700338 3.5 3.5 0 .4293006-.0776158.84774035-.2257591 1.23904661 1.3156938.51360761 2.2257591 1.79302198 2.2257591 3.26095339 0 .996334-.4196839 1.9233406-1.1321259 2.5775984.0871043.283238.1321259.5800719.1321259.8828028 0 1.6568542-1.3431458 3-3 3-.4214675 0-.8306297-.0873353-1.2063546-.2525154-.3192893.3773198-.6653138.7210707-1.0338616 1.0283282zm-7.7597838 1.110018v2.653768h6v-2.6538008c-.9359992.425507-1.9509207.6538008-3 .6538008-1.0488055 0-2.0637377-.228128-3-.653768zm-2.16119825-2.9433234c1.31794986 1.6438816 3.17400865 2.5970914 5.16119825 2.5970914 1.9884133 0 3.8447911-.954764 5.1611622-2.5969798.0135699-.0419726.0329643-.0828358.0584159-.1214735.402034-.610322.7447971-1.2877825 1.0189462-2.0156674-1.3238875-.5107719-2.2385243-1.7945385-2.2385243-3.2658793 0-.4294038.0776531-.8479416.225866-1.23932884-.4488995-.1755314-.8563284-.44228731-1.1970469-.78204121-.8602044.65605286-1.9163511 1.02137005-3.0288191 1.02137005s-2.16861468-.36531719-3.02881906-1.02137005c-.3407185.3397539-.74814739.60650981-1.19704694.78204121.1482129.39138734.225866.80992504.225866 1.23932884 0 1.4713408-.91463679 2.7551074-2.2385243 3.2658793.27414913.7278849.61691218 1.4053454 1.01894615 2.0156674.02542905.0386034.04481169.0794284.0583799.1213619zm12.16119825.0574926c1.1045695 0 2-.8954305 2-2 0-.2917161-.0621791-.573685-.1807516-.8323254-.0988468-.215613-.0326037-.4710039.1585815-.6113886.6381817-.4686084 1.0221701-1.2101574 1.0221701-2.0166872 0-1.20457942-.8584553-2.23190311-2.0269705-2.45540423-.3423492-.0654809-.5143359-.45235494-.333586-.75038207.2347346-.38703911.3605565-.83077809.3605565-1.2942137 0-1.38071187-1.1192881-2.5-2.5-2.5-.3425741 0-.6746455.06865643-.9820556.20012585-.2758963.11799202-.5928572-.03190503-.6766961-.32002295-.4926984-1.69318965-2.0507952-2.8801029-3.8412483-2.8801029s-3.34854995 1.18691325-3.84124827 2.8801029c-.08383893.28811792-.40079982.43801497-.67669615.32002295-.30741003-.13146942-.63948151-.20012585-.98205558-.20012585-1.38071187 0-2.5 1.11928813-2.5 2.5 0 .46343561.12582189.90717459.36055652 1.2942137.18074993.29802713.0087632.68490117-.33358598.75038207-1.1685152.22350112-2.02697054 1.25082481-2.02697054 2.45540423 0 .8065298.38398841 1.5480788 1.02217013 2.0166872.19118513.1403847.25742822.3957756.15858148.6113886-.11857248.2586404-.18075161.5406093-.18075161.8323254 0 1.1045695.8954305 2 2 2 .22416468 0 .4424599-.0367809.64834795-.1072621-.40607285-.6949771-.74490529-1.454694-1.00750995-2.261808-.092082-.2830135.08193433-.583311.37326785-.644143 1.14894855-.2399065 1.98589415-1.2580044 1.98589415-2.4471881 0-.4634356-.12582189-.9071746-.36055652-1.2942137-.18074993-.29802713-.0087632-.68490117.33358598-.75038207.61922765-.11843925 1.16871021-.46870406 1.54120119-.97423467.17788399-.2414174.52679294-.27303797.74518013-.06753344.73723387.69374448 1.70747812 1.08636388 2.74058922 1.08636388s2.0033554-.3926194 2.7405892-1.08636388c.2183872-.20550453.5672962-.17388396.7451802.06753344.3724909.50553061.9219735.85579542 1.5412011.97423467.3423492.0654809.5143359.45235494.333586.75038207-.2347346.3870391-.3605565.8307781-.3605565 1.2942137 0 1.1891837.8369456 2.2072816 1.9858942 2.4471881.2913335.060832.4653498.3611295.3732678.644143-.2626047.807114-.6014371 1.5668309-1.00751 2.261808.2058881.0704812.4241833.1072621.648348.1072621zm-5.4994991-.9834994c.0072117-.1532986.0846601-.3012677.222149-.3929269.2297643-.1531763.540199-.0910893.6933752.138675l.5.75c.1531763.2297643.0910893.540199-.138675.6933752-.2297643.1531763-.540199.0910893-.6933752-.138675l-.084603-.1269044c-.471871.4035626-1.1480328.5995543-1.9993719.5995543s-1.5275009-.1959917-1.9993719-.5995543l-.08460295.1269044c-.15317623.2297643-.4636109.2918513-.69337525.138675-.22976434-.1531762-.29185128-.4636109-.13867505-.6933752l.5-.75c.15317623-.2297643.46361095-.2918513.69337525-.138675.1374889.0916592.2149373.2396283.222149.3929269.2539524.3412073.7351995.5230982 1.5005009.5230982s1.2465485-.1818909 1.5005009-.5230982zm-5.41652605-2.754305c.31798843-.4769827.80932294-.7226499 1.41602515-.7226499.6067022 0 1.0980367.2456672 1.4160251.7226499.1531763.2297643.0910893.540199-.138675.6933752s-.540199.0910893-.6933752-.138675c-.12645606-.1896841-.30178822-.2773501-.5839749-.2773501s-.45751884.087666-.58397485.2773501c-.15317623.2297643-.4636109.2918512-.69337525.138675-.22976434-.1531762-.29185128-.4636109-.13867505-.6933752zm5.00000005 0c.3179884-.4769827.8093229-.7226499 1.4160251-.7226499s1.0980367.2456672 1.4160251.7226499c.1531763.2297643.0910893.540199-.138675.6933752s-.540199.0910893-.6933752-.138675c-.1264561-.1896841-.3017882-.2773501-.5839749-.2773501s-.4575188.087666-.5839749.2773501c-.1531762.2297643-.4636109.2918512-.6933752.138675s-.2918513-.4636109-.138675-.6933752z"
    })
  }));
};
const Activities = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M17.481 2.921a3.07 3.07 0 0 1 .949 3.983 5.68 5.68 0 0 0 .52-.62c.44-.606.79-1.307.98-1.93a.98.98 0 0 1 .717-.655c.306-.07.736.004.947.417a5.43 5.43 0 0 1 .606 2.49c0 1.81-.897 3.416-2.287 4.495l.001 9.88c0 .862-1.131 1.183-1.583.449l-2.401-3.9a.253.253 0 0 0-.431 0l-2.402 3.9c-.308.501-.935.51-1.3.191-.284.034-.646-.055-.855-.387L8.53 17.398a.253.253 0 0 0-.428 0l-2.413 3.836c-.229.363-.639.435-.93.375-.288-.06-.672-.304-.672-.78v-9.728C2.698 10.022 1.8 8.415 1.8 6.606c0-.89.217-1.734.606-2.49.21-.41.637-.489.946-.415.3.072.607.303.705.676.186.71.542 1.555.992 2.282.46.743.971 1.286 1.434 1.492a.486.486 0 0 1-.396.887C5.352 8.71 4.713 7.962 4.223 7.17a9.887 9.887 0 0 1-1.061-2.385 4.443 4.443 0 0 0-.39 1.82c0 1.544.8 2.938 2.082 3.857.168.12.242.335.183.533a.49.49 0 0 1 .02.138v9.28L7.28 16.88a1.225 1.225 0 0 1 2.072 0l2.163 3.438-.002-6.623a4.404 4.404 0 0 0-.676 1.373c-.208.749-1.27 1.016-1.653.253a5.052 5.052 0 0 1-.54-2.268c0-1.9 1.062-3.567 2.677-4.567H8.71a3.07 3.07 0 1 1 1.856-.972h2.896a3.07 3.07 0 0 1 4.02-4.593zm3.342 1.83a7.819 7.819 0 0 1-1.088 2.104c-.408.56-.905 1.078-1.457 1.418.12.082.237.17.348.262a.486.486 0 1 1-.624.744 3.517 3.517 0 0 0-1.972-.78 3.158 3.158 0 0 1-.714-.013l-.347.001a.502.502 0 0 1-.112.013c-2.892 0-5.214 2.053-5.214 4.553 0 .453.076.897.223 1.32l.076.2.007-.022c.281-.829.802-1.626 1.496-2.303l.213-.2a.5.5 0 0 1 .828.446l.059 7.98 2.127-3.453a1.224 1.224 0 0 1 2.085 0l2.186 3.55v-9.396c0-.273-.05-.537-.14-.785a.486.486 0 0 1 .893-.379c.957-.895 1.533-2.097 1.533-3.405a4.45 4.45 0 0 0-.406-1.855zM8.343 3.344l-.157.002a2.1 2.1 0 0 0-.02 4.191l.074-.017.075-.006h.325a2.1 2.1 0 0 0-.296-4.17zm7.413-.002a2.1 2.1 0 0 0-.369 4.172h.327c.1 0 .197.003.295.009a2.1 2.1 0 0 0-.253-4.18zm-15.13.292l.085.017.084.033.74.37a.5.5 0 0 1-.365.928l-.084-.033-.739-.37a.5.5 0 0 1 .278-.945zm23.29.274a.5.5 0 0 1-.146.624l-.077.047-.739.37a.5.5 0 0 1-.524-.847l.077-.047.738-.37a.5.5 0 0 1 .671.223zm-1.333-2.07a.5.5 0 0 1 .257.587l-.032.084-.368.738a.5.5 0 0 1-.928-.361l.032-.084.368-.74a.5.5 0 0 1 .67-.224zM2.02 1.92l.059.066.047.076.369.739a.5.5 0 0 1-.847.523L1.6 3.247l-.368-.738a.5.5 0 0 1 .788-.589z"
    })
  }));
};
const Protection = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    fill: "rgb(227, 28, 95)",
    stroke: "currentcolor"
  }, props), {}, {
    viewBox: "0 0 48 48",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        stroke: "none",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          fillOpacity: 0.2,
          d: "M28 5l.585.005c4.29.076 8.837.984 13.645 2.737l.77.288V35.4l-.008.13a1 1 0 0 1-.47.724l-.116.06L28 42.716l-2-.216V31.414L14.707 19.707 13 19V8.029l.77-.286c4.797-1.75 9.336-2.658 13.62-2.737L28 5z"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M28 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L47 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097L28 47h-3l-1.853-1H25a1 1 0 0 0 1-1h2l15.218-6.858a3 3 0 0 0 1.757-2.351l.019-.194.006-.196V6.669l-.692-.278C38.557 4.128 33.121 3 28 3S17.443 4.128 11.692 6.391L11 6.67 10.999 22 9 23.999V6.669a2 2 0 0 1 1.098-1.786l.147-.067C16.483 2.275 22.401 1 28 1z"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        fill: "none",
        strokeWidth: 2,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M2 31.414V45a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V31.414a1 1 0 0 0-.293-.707l-11-11a1 1 0 0 0-1.414 0l-11 11a1 1 0 0 0-.293.707z"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M10 46V35a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11"
        })]
      })]
    })
  }));
};
const Guidance = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    fill: "rgb(227, 28, 95)",
    stroke: "currentcolor",
    viewBox: "0 0 48 48",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        stroke: "none",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          fillOpacity: 0.2,
          d: "M26.928 16h-1.857l-4.523 11.942c1.55.107 2.7.793 3.452 2.058 1.237 2.081 2.737 6.414 4.5 13h7.208a1 1 0 0 0 .97-1.243l-.035-.111L26.928 16z"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M41 1v8h-5.878a10.118 10.118 0 0 0 2.387 5.07l.224.25-1.466 1.36C34.533 13.81 33.428 11.493 33.1 9H33a3 3 0 0 0-2.995 2.824L30 12v.816l10.383 27.413a5 5 0 0 1-4.373 6.762l-.302.009H29.5v-2h6.208a3 3 0 0 0 2.863-3.896l-.058-.167L28.309 14H23.69l-5.44 14.362-1.87-.709 5.455-14.403L17 8.414V6a5 5 0 0 1 4.783-4.995L22 1h19zm-8 2H22a3 3 0 0 0-2.995 2.824L19 6v1.585L23.415 12H28a5 5 0 0 1 4.563-4.981l.22-.014L33 7V3zm14 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-8-3h-4v4h4V3zm5 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        fill: "none",
        strokeWidth: 2,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M30 47l-1.587-5M1 42v5m4-5v5m4-5v5m4-5v5m4-5v5m4-5v5m4-5v5m-3.954-19a4 4 0 0 1 3.759 2.632l.064.192L28.413 42H1v-5a1 1 0 0 1 .883-.993L2 36h11.283l1.519-4H1v-4h20.046z"
        })
      })]
    })
  }));
};
const Requirements = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 48 48",
    fill: "rgb(227, 28, 95)",
    stroke: "currentcolor",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        stroke: "none",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          fillOpacity: 0.2,
          d: "M26 6c9.941 0 18 8.059 18 18s-8.059 18-18 18c-1.277 0-2.524-.133-3.726-.386A11.944 11.944 0 0 0 25 34c0-6.627-5.373-12-12-12-1.775 0-3.46.386-4.977 1.077C8.503 13.565 16.368 6 26 6z"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M26 2c12.15 0 22 9.85 22 22s-9.85 22-22 22c-2.643 0-5.177-.466-7.524-1.32a11.978 11.978 0 0 0 2.147-1.412A19.97 19.97 0 0 0 26 44a19.941 19.941 0 0 0 14.368-6.088 17.01 17.01 0 0 0-11.15-7.608l-.383-.069-.835-.14v-2.314l.667-.236a8 8 0 1 0-9.864-4.049 11.822 11.822 0 0 0-2.495-1.034 9.9 9.9 0 0 1-.304-2.172L16 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 3.592-1.911 6.82-4.876 8.59l-.129.074.09.025a19.03 19.03 0 0 1 10.65 7.657A19.91 19.91 0 0 0 46 24c0-11.046-8.954-20-20-20S6 12.954 6 24l.003.25a12.068 12.068 0 0 0-1.917 1.716A22.461 22.461 0 0 1 4 24C4 11.85 13.85 2 26 2z"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
          cx: 13,
          cy: 34,
          r: 12
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          d: "M7 35L11 39 19 31"
        })]
      })]
    })
  }));
};
const CustomerService = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 1c5.046 0 9.298 3.397 10.594 8.03a6 6 0 0 1-.33 11.964 11.01 11.01 0 0 1-7.531 6.695l.2-.053a3.001 3.001 0 1 1-.264-2.008A9.003 9.003 0 0 0 25 17.031V12a9 9 0 0 0-17.996-.265L7 12v9H6a6 6 0 0 1-.594-11.971C6.702 4.397 10.954 1 16 1zm0 25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM5 11.126l-.155.043a4.002 4.002 0 0 0 0 7.662l.155.042v-7.747zm22 0v7.747l.155-.042a4.002 4.002 0 0 0 0-7.662L27 11.126z"
    })
  }));
};
const ToolBox = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m20 2c1.0543618 0 1.9181651.81587779 1.9945143 1.85073766l.0054857.14926234v2h4c2.6887547 0 4.8818181 2.12230671 4.9953805 4.7831104l.0046195.2168896v14c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-20c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-14c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951h4v-2c0-1.0543618.8158778-1.91816512 1.8507377-1.99451426l.1492623-.00548574zm-17 23c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h20c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-6h-7v2h-2v-2h-8v2h-2v-2h-7zm23-17h-20c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.8237272l-.00509269.1762728v6h7v-2h2v2h8v-2h2v2h7v-6c0-1.65685425-1.3431458-3-3-3zm-6-4h-8v2h8z"
    })
  }));
};
const Analytics = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m27 5h-4a2.00229 2.00229 0 0 0 -2 2v4h-4v-8a2.002 2.002 0 0 0 -2-2h-4a2.002 2.002 0 0 0 -2 2v8h-4a2.002 2.002 0 0 0 -2 2v16a2.00229 2.00229 0 0 0 2 2h22a2.0026 2.0026 0 0 0 2-2v-22a2.00229 2.00229 0 0 0 -2-2zm-18 24h-4l-.00146-16h4.00146zm6 0h-4v-16l-.00092-.00891-.00054-9.99109h4.00146zm6 0h-4v-16h4zm6 0h-4v-16l-.00073-.007-.00027-5.993h4.001z"
    })
  }));
};
const Education = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16 1c5.96 0 10.832 4.747 10.996 10.706L27 12c0 3.7-2.03 7.136-5.998 10.297L21 29.333c0 .92-.746 1.667-1.667 1.667h-6.666c-.92 0-1.667-.746-1.667-1.667v-7.035c-3.848-3.064-5.874-6.387-5.995-9.978L5 12C5 5.925 9.925 1 16 1zm2.999 26h-6v2h6v-2zm0-4h-6v2h6v-2zM16 3c-4.97 0-9 4.03-9 8.983l.005.286c.097 2.9 1.794 5.7 5.17 8.408l.412.323.412-.001.001-9.666a3 3 0 0 1 6 0L18.999 21h.412l.432-.337c3.356-2.696 5.046-5.482 5.152-8.36l.005-.288-.003-.266A9 9 0 0 0 16 3zm0 7.333l-.117.007a1 1 0 0 0-.883.993L14.999 21h2L17 11.333a1 1 0 0 0-1-1z"
    })
  }));
};
const Exclamation = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 32 32",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "16",
      cy: "16",
      r: "14",
      fill: "none"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m16 8v10",
      fill: "none"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: "16",
      cy: "22.5",
      fill: "#000",
      r: ".5"
    })]
  }));
};
const Warning = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m8 12c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm1.6-12v9.6h-3.2v-9.6z"
    })
  }));
};
const Home = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    style: {
      width: 40
    },
    src: "https://a0.muscache.com/pictures/b0fe7d1b-2c8b-48ba-9310-5cbeb3f25a32.jpg",
    alt: "home"
  });
};
const Global = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    style: {
      width: 40
    },
    src: "https://a0.muscache.com/pictures/eba31c9e-9c99-4a7e-bb58-bc1dd3c58dd5.jpg",
    alt: "global"
  });
};
const Lightening = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    style: {
      width: 40
    },
    src: "https://a0.muscache.com/pictures/70888c58-8a67-4b03-9b07-3beed0f97275.jpg",
    alt: "lightening"
  });
};
const Minus = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
      height: "2",
      rx: "1",
      width: "12",
      x: "6",
      y: "11"
    })
  }));
};
const Plus = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
      height: "2",
      rx: "1",
      width: "12",
      x: "6",
      y: "11"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
      height: "12",
      rx: "1",
      width: "2",
      x: "11",
      y: "6"
    })]
  }));
};
const Protected = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 48 48",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "#64DEE2",
      d: "M25 5c-4.462 0-9.204.909-14.23 2.743l-.77.286V27l4.5-7 4.5 1 9.05 20.361 11.356-5.047a1 1 0 0 0 .586-.783L40 35.4V8.03l-.082-.032c-5.062-1.921-9.839-2.913-14.333-2.993L25 5z"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "#222",
      d: "M22.872 47c-.247 0-.495-.015-.743-.044-.965-.112-1.897-.428-2.85-.966-1.084-.612-2.134-1.48-3.28-2.708-1.144 1.229-2.195 2.096-3.28 2.708-.952.538-1.884.854-2.85.966a6.247 6.247 0 0 1-3.086-.411 6.103 6.103 0 0 1-3.721-4.776c-.145-1.02-.035-2.027.337-3.078.113-.319.245-.635.409-1.008.204-.467.423-.942.634-1.402l.913-1.972.642-1.365L6 6.67a2 2 0 0 1 1.245-1.853C13.483 2.275 19.401 1 25 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L44 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097-15.043 6.685c-.659.23-1.655.345-2.988.345l.175-.007c-.1.005-.202.007-.303.007zM16 21c-.854 0-1.608.357-2.182 1.032-.307.361-.54.78-.773 1.213l-.33.63-.414.804a318.107 318.107 0 0 0-5.199 10.616l-.833 1.8c-.21.457-.426.928-.63 1.393l-.194.453c-.059.143-.112.28-.16.417-.266.751-.343 1.427-.243 2.128a4.097 4.097 0 0 0 2.497 3.207 4.238 4.238 0 0 0 2.1.277c.697-.081 1.383-.317 2.097-.72.988-.56 1.99-1.418 3.115-2.676-1.792-2.224-2.912-4.274-3.326-6.1-.19-.835-.23-1.624-.12-2.347.107-.698.352-1.33.728-1.882.839-1.228 2.284-1.914 3.867-1.914 1.582 0 3.027.686 3.866 1.914.376.551.58 1.058.687 1.755.11.722.07 1.511-.118 2.346-.415 1.827-1.494 4.003-3.287 6.228 1.126 1.258 2.127 2.116 3.116 2.675.713.404 1.4.64 2.096.72a4.239 4.239 0 0 0 2.1-.276 4.096 4.096 0 0 0 2.498-3.207c.1-.701.022-1.377-.243-2.127a12.53 12.53 0 0 0-.354-.872l-.308-.687-.34-.742a315.525 315.525 0 0 0-5.118-10.616l-.98-1.926a80.888 80.888 0 0 0-.66-1.27c-.233-.433-.466-.853-.773-1.214C17.608 21.357 16.853 21 16 21zm9-18C19.879 3 14.443 4.128 8.692 6.391L8 6.67l-.002 22.126a362.24 362.24 0 0 1 1.471-2.958l1.141-2.244c.2-.388.374-.728.545-1.051l.127-.24c.273-.51.576-1.052 1.012-1.566C13.246 19.616 14.562 19 16 19c1.438 0 2.754.617 3.706 1.737.435.514.738 1.055 1.012 1.566l.336.638.425.829a319.459 319.459 0 0 1 5.229 10.676l.895 1.935c.196.428.398.867.588 1.299l.224.528c.068.166.129.325.185.484.372 1.051.483 2.057.338 3.076a6.07 6.07 0 0 1-.475 1.636l.02-.046 11.735-5.216a3 3 0 0 0 1.776-2.545l.006-.196V6.669l-.692-.278C35.557 4.128 30.121 3 25 3zm-9 28.331c-.956 0-1.763.38-2.215 1.041a2.543 2.543 0 0 0-.403 1.058c-.072.473-.041 1.012.093 1.6.315 1.388 1.163 2.99 2.523 4.767 1.273-1.689 2.15-3.407 2.487-4.893.133-.59.164-1.128.09-1.6a1.959 1.959 0 0 0-.361-.931c-.445-.652-1.273-1.042-2.214-1.042z"
    })]
  }));
};
const Upload = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      fill: "white",
      d: "m24 14.5c0 3.12-2.55 5.5-5.5 5.5h-4a .5.5 0 0 1 0-1h4c2.41 0 4.5-1.95 4.5-4.5 0-1.17-.41-2.08-1.1-2.77a3.98 3.98 0 0 0 -.76-.6 2.54 2.54 0 0 0 -.32-.17l-.31-.13v-.33c0-3.95-2.96-6.5-7-6.5-1.62 0-3.01.61-4.17 1.63-.41.36-.76.75-1.06 1.13-.17.23-.29.4-.34.49l-.28.49-.46-.34a2.83 2.83 0 0 0 -.5-.28c-.96-.43-1.95-.43-2.9.28-.45.34-.74.74-.9 1.21-.2.59-.19 1.24-.04 1.86.04.17.08.29.1.35l.17.43-.41.21c-.2.1-.52.33-.85.7-.54.6-.87 1.38-.87 2.34 0 2.83 1.91 4.5 5.5 4.5h2a .5.5 0 1 1 0 1h-2c-4.12 0-6.5-2.08-6.5-5.5 0-1.22.42-2.23 1.13-3.02.27-.31.54-.53.78-.7-.01-.03-.01-.05-.02-.08-.19-.79-.21-1.62.06-2.42a3.5 3.5 0 0 1 1.25-1.68c1.28-.96 2.65-.96 3.91-.39.09.04.16.08.23.12.04-.06.08-.11.13-.18.33-.44.73-.87 1.19-1.28 1.35-1.16 2.96-1.87 4.84-1.87 4.45 0 7.82 2.83 7.98 7.18.33.18.73.45 1.12.85.87.87 1.4 2.03 1.4 3.48zm-9.15-.65a.5.5 0 0 0 0-.71l-2.96-2.96a.56.56 0 0 0 -.79 0l-2.96 2.96a.5.5 0 1 0 .71.71l2.15-2.14v11.79a.5.5 0 0 0 1 0v-11.79l2.15 2.15a.5.5 0 0 0 .71 0z"
    })
  }));
};

/***/ }),

/***/ "QYpW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./components/organisms/header/header.module.scss
var header_module = __webpack_require__("TLTr");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./hooks/useHandleScroll.ts
var useHandleScroll = __webpack_require__("cAue");

// CONCATENATED MODULE: ./components/organisms/header/header.details.tsx



/** styles */







/** vectors */


/** components */


/** hooks */


/**
 * Renders the details header
 * @param {stirng} layoutType - Type of layout
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */

const DetailsHeader = ({
  layoutType = "room",
  spread = false
}) => {
  const scrollPosition = Object(useHandleScroll["a" /* useHandleScroll */])();
  const items = layoutType === "experience" ? [{
    name: "Photos"
  }, {
    name: "Amenities"
  }, {
    name: "Reviews"
  }, {
    name: "Location"
  }] : [{
    name: "Overview"
  }, {
    name: "The host"
  }, {
    name: "Reviews"
  }, {
    name: "Availability"
  }];
  const displayHeight = layoutType === "room" ? 1000 : 1600;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    style: {
      height: 80
    },
    className: `${[color_module_default.a["bg--white"], shape_module_default.a["shadow--sm"]].join(" ")}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${spread ? [layout_module_default.a["container--spread"]].join(" ") : [layout_module_default.a["container"]].join(" ")} ${[shape_module_default.a["h--full"]].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [shape_module_default.a["h--full"], header_module_default.a["display__transparent--md"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"], layout_module_default.a["relative"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
          children: items.map((item, index) => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["m-r--16"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                style: {
                  display: "block"
                },
                className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
                onClick: () => alert("hello"),
                children: item.name
              })
            }, index);
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["AnimatePresence"], {
          children: scrollPosition > displayHeight && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            exit: {
              opacity: 0
            },
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            className: [layout_module_default.a["items-center"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: [space_module_default.a["m-r--16"]].join(" "),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  className: [color_module_default.a["c--gray__2"], font_module_default.a["size--16"], font_module_default.a["weight--500"]].join(" "),
                  children: "Add dates for prices"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  style: {
                    width: 100
                  },
                  className: [color_module_default.a["c--gray__2"], font_module_default.a["size--21"], font_module_default.a["weight--500"]].join(" "),
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: [layout_module_default.a["inline-block"], space_module_default.a["m-r--4"]].join(" "),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
                      width: 10
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: [layout_module_default.a["inline-block"], font_module_default.a["size--12"], space_module_default.a["m-r--4"]].join(" "),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                      children: "4.93"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: [layout_module_default.a["inline-block"], font_module_default.a["size--12"], space_module_default.a["weight-100"], color_module_default.a["c--white__3"]].join(" "),
                    children: "(248)"
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                  variant: "primary",
                  title: "Check availability"
                })
              })]
            })
          })
        })]
      })
    })
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/organisms/header/header.experiences.tsx



/** styles */




/** components */


/**
 * Renders the experiences header
 */

const ExperiencesHeader = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    style: {
      height: 80
    },
    className: [space_module_default.a["p-h--0"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        padding: 20
      },
      className: `${[layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"], shape_module_default.a["h--full"]].join(" ")}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "logo",
          fill: "black",
          noName: true,
          extendsTo: [layout_module_default.a["inline-block"]].join(" "),
          onClick: () => {
            console.log("he");
            router_default.a.push("/");
          }
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "English (CA)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "$ CAD"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "Become a host"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "Help"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "Sign up"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--8"]].join(" "),
          children: "Log in"
        })]
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/header/header.homes.tsx


/** styles */





/** vectors */

/** components */

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */

const HomesHeader = ({
  spread = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    style: {
      height: 80
    },
    className: [space_module_default.a["p-h--0"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        padding: 20
      },
      className: ` ${[shape_module_default.a["h--full"]].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "logo",
          extendsTo: [layout_module_default.a["inline-block"], header_module_default.a["hover__logo"], space_module_default.a["p--14"], shape_module_default.a["br--circle"]].join(" "),
          onClick: () => router_default.a.push("/"),
          noName: true,
          fill: "black"
        })
      })
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/header/header.onlinehost.tsx


/** styles */





/** components */


const OnlineHostHeader = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    style: {
      height: 80
    },
    className: [space_module_default.a["p-h--0"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        padding: 20
      },
      className: ` ${[shape_module_default.a["h--full"]].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "logo",
          noName: true,
          fill: "black",
          extendsTo: [layout_module_default.a["inline-block"], header_module_default.a["hover__logo"], space_module_default.a["p--14"], shape_module_default.a["br--circle"]].join(" "),
          onClick: () => router_default.a.push("/")
        })
      })
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/header/header.stay.tsx



/** styles */






/** vectors */

/** components */

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */

const StayHeader = ({
  title
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    style: {
      height: 65
    },
    className: [space_module_default.a["p-h--0"], color_module_default.a["bg--white"], shape_module_default.a["shadow--sm"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "logo",
          noName: true,
          fill: "##008489",
          onClick: () => router_default.a.push("/"),
          extendsTo: [layout_module_default.a["inline-block"], space_module_default.a["p--14"], shape_module_default.a["br--circle"]].join(" ")
        })
      }), title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["relative"], layout_module_default.a["b--2"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--16"], color_module_default.a["c--gray__1"]].join(" "),
          children: title
        })
      })]
    })
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./styles/index.module.scss
var index_module = __webpack_require__("d/HE");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// EXTERNAL MODULE: ./styles/responsive.module.scss
var responsive_module = __webpack_require__("SFqS");
var responsive_module_default = /*#__PURE__*/__webpack_require__.n(responsive_module);

// EXTERNAL MODULE: ./components/organisms/modal/index.tsx + 22 modules
var modal = __webpack_require__("H/O+");

// EXTERNAL MODULE: ./context/toggle.tsx
var toggle = __webpack_require__("m4+O");

// EXTERNAL MODULE: ./components/organisms/bar/index.tsx + 7 modules
var bar = __webpack_require__("xu40");

// EXTERNAL MODULE: ./hooks/useOnClickOutside.ts
var useOnClickOutside = __webpack_require__("Qx/D");

// CONCATENATED MODULE: ./components/prototype/searchbar/searchbar.stay.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** styles */




/** context */


/** components */



/** hooks */


const StayPrototype = ({
  category,
  setCategory,
  transparent = false,
  expanded,
  setExpanded
}) => {
  const toggleState = Object(toggle["c" /* useToggleState */])();
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(null);
  const containerRef = Object(external_react_["useRef"])();
  Object(useOnClickOutside["b" /* useOnClickOutside */])(containerRef, () => {
    if (selected) {
      setSelected(!selected);
    }

    if (expanded) {
      setExpanded(!expanded);
    }
  });
  const contents = {
    location: {
      styles: {
        left: 0,
        maxWidth: 400
      }
    },
    checkin: {
      styles: {
        left: 0,
        maxWidth: 780
      }
    },
    checkout: {
      styles: {
        left: 0,
        maxWidth: 780
      }
    },
    guests: {
      styles: {
        right: 0,
        maxWidth: 325,
        display: "flex",
        justifyContent: "flex-end"
      }
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: layout_module_default.a["relative"],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bar["a" /* Bar */], {
      variant: "search",
      selected: selected,
      setSelected: setSelected,
      category: category,
      setCategory: setCategory,
      extendsTo: [space_module_default.a["p-h--12"]].join(" "),
      transparent: transparent
    }), Object.keys(contents).map((content, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: _objectSpread({
          position: "absolute",
          top: 60,
          zIndex: 80,
          width: "100%"
        }, contents[content].styles),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [shape_module_default.a["w--full"]].join(" "),
          ref: containerRef,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(modal["a" /* Modal */], {
            variant: content,
            dispatch: `toggle_${content}`,
            extendsTo: [shape_module_default.a["w--full"]].join(" "),
            criteria: toggleState[content]
          })
        })
      }, index);
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/searchbar/index.tsx


function searchbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function searchbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { searchbar_ownKeys(Object(source), true).forEach(function (key) { searchbar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { searchbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Prototype = (_ref) => {
  let {
    variant = "stay"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  const variants = {
    stay: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StayPrototype, searchbar_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-searchbar-prototype`,
    children: variants[variant]
  });
};
// EXTERNAL MODULE: ./public/svg/logo.tsx
var logo = __webpack_require__("DncH");

// EXTERNAL MODULE: ./public/svg/regular.tsx
var regular = __webpack_require__("6ztO");

// CONCATENATED MODULE: ./components/atoms/button/content/content.transparent.tsx



/** vectors */


/** styles */





const Content = ({
  kind = "globe",
  inverse = false
}) => {
  const kinds = {
    globe: /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [layout_module_default.a["items-center"], space_module_default.a["m-r--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["e" /* Globe */], {
          width: 14,
          fill: inverse ? "white" : "#363636"
        })
      })
    }),
    host: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: `${[font_module_default.a["size--12"]].join(" ")} ${inverse ? color_module_default.a["c--white"] : color_module_default.a["c--gray__4"]}`,
      children: "Become a host"
    })
  };
  return kinds[kind];
};
// CONCATENATED MODULE: ./components/organisms/header/header.landing.tsx





/** styles */









/** components */




/** vectors */


/** contexts */


/** contents */


/** hooks */


/**
 * Renders the transparent header
 */

const TransparentHeader = ({
  data,
  category,
  setCategory,
  criteria
}) => {
  const toggleState = Object(toggle["c" /* useToggleState */])();
  const searchbarRef = Object(external_react_["useRef"])();
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();
  Object(useOnClickOutside["b" /* useOnClickOutside */])(searchbarRef, () => {
    toggleDispatch({
      type: "toggle_reset"
    });
    setExpanded(!expanded);
  });
  const types = {
    stay: {
      title: "Places to stay"
    },
    experiences: {
      title: "Experiences"
    },
    online: {
      title: "Online Experiences"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: `${expanded ? [space_module_default.a["p-t--16"], space_module_default.a["p-b--100"]].join(" ") : [space_module_default.a["p-v--16"]].join(" ")} ${[animation_module_default.a["transition--fast"], layout_module_default.a["relative"], layout_module_default.a["container--spread"]].join(" ")}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [header_module_default.a["display__transparent--md"], layout_module_default.a["justify-between"], layout_module_default.a["relative"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [responsive_module_default.a["b_to_n--lg"], space_module_default.a["m-t--4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["e" /* NoNameLogo */], {
            fill: criteria ? "white" : "red",
            width: 30,
            height: 32
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [responsive_module_default.a["n_to_b--lg"], space_module_default.a["m-t--4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["d" /* NameLogo */], {
            fill: criteria ? "white" : "red",
            width: 102,
            height: 32
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [index_module_default.a["searchbar__host"], space_module_default.a["m-h--2"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "transparent",
            content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
              kind: "host",
              inverse: criteria
            }),
            inverse: criteria,
            animate: true,
            onClick: () => router_default.a.push("/host/homes")
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-h--2"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "transparent",
            content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
              kind: "globe",
              inverse: criteria
            }),
            inverse: criteria,
            onClick: () => toggleDispatch({
              type: "toggle_globe"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-l--4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "menu",
            extendsTo: [animation_module_default.a["hover-shadow--lg"], shape_module_default.a["br--30"]].join(" "),
            inverse: criteria,
            authenticated: data,
            onClick: () => toggleDispatch({
              type: "toggle_menu"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          zIndex: 70
        },
        className: [layout_module_default.a["absolute"], layout_module_default.a["r--0"], layout_module_default.a["t--55"], color_module_default.a["bg--transparent"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(modal["a" /* Modal */], {
          variant: "menu",
          authenticated: data,
          criteria: toggleState.menu,
          dispatch: "toggle_menu"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [responsive_module_default.a["n_to_b--sm"], space_module_default.a["p-h--20"], responsive_module_default.a["t--80p_to_20p--sm"]].join(" "),
      style: {
        position: "absolute",
        width: "100%",
        maxWidth: 760,
        left: "50%",
        bottom: 0,
        zIndex: 50,
        transform: "translate(-50%, 0)",
        height: "fit-content"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["AnimatePresence"], {
        children: criteria ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
          exit: {
            y: 0,
            scale: 0.3,
            width: 500,
            opacity: 0
          },
          transition: {
            type: "tween",
            duration: 0.2
          },
          initial: {
            y: -100,
            scale: 0.3,
            opacity: 0,
            width: 500
          },
          animate: {
            y: 0,
            scale: 1,
            opacity: 1,
            width: "auto"
          },
          style: {
            position: "relative"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [layout_module_default.a["relative"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["m-b--16"], space_module_default.a["m-t--12"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
                children: Object.keys(types).map((type, index) => {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: [space_module_default.a["m-h--16"]].join(" "),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                      onClick: () => setCategory("stay"),
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: [space_module_default.a["p-b--8"]].join(" "),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                          className: `${[color_module_default.a["c--white"]].join(" ")} ${[responsive_module_default.a["size__12_to_14--md"], responsive_module_default.a["weight__500_to_300--md"]].join(" ")}`,
                          children: types[type].title
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
                        children: category === type && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
                          initial: {
                            width: 3
                          },
                          animate: {
                            width: 15
                          },
                          style: {
                            height: 2,
                            backgroundColor: "white"
                          }
                        })
                      })]
                    })
                  }, index);
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Prototype, {
              variant: "stay",
              transparent: true
            })]
          })
        }, "transparentmodal") : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: expanded ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            exit: {
              opacity: 0,
              y: -20
            },
            initial: {
              opacity: 0,
              y: -20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            style: {
              position: "relative"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: [layout_module_default.a["relative"]].join(" "),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: [space_module_default.a["m-b--16"], space_module_default.a["m-t--12"]].join(" "),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
                  children: Object.keys(types).map((type, index) => {
                    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: [space_module_default.a["m-h--16"]].join(" "),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                        onClick: () => setCategory("stay"),
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: [space_module_default.a["p-b--8"]].join(" "),
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                            className: `${expanded ? [color_module_default.a["c--black"]].join(" ") : [color_module_default.a["c--white"]].join(" ")} ${[responsive_module_default.a["size__12_to_14--md"], responsive_module_default.a["weight__500_to_300--md"]].join(" ")}`,
                            children: types[type].title
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: [layout_module_default.a["flex"], layout_module_default.a["justify-center"]].join(" "),
                          children: category === type && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
                            initial: {
                              width: 3
                            },
                            animate: {
                              width: 15
                            },
                            style: {
                              height: 2,
                              backgroundColor: "white"
                            }
                          })
                        })]
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                ref: searchbarRef,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Prototype, {
                  variant: category
                })
              })]
            })
          }, "modal") : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            className: [responsive_module_default.a["justify--start_to_center--md"], responsive_module_default.a["t__-45_to_0--md"]].join(" "),
            style: {
              position: "absolute",
              width: "100%",
              display: "flex"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
              className: [layout_module_default.a["relative"], responsive_module_default.a["l__30_to_0--md"]].join(" "),
              exit: {
                width: 0,
                y: 50,
                opacity: 0
              } // transition={{ type: "spring", stiffness: 30, duration: 0.03 }}
              ,
              initial: {
                width: 0,
                y: 50,
                opacity: 0
              },
              animate: {
                width: 240,
                y: 0,
                opacity: 1
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "searchbar",
                mini: true,
                onClick: () => setExpanded(!expanded),
                extendsTo: [shape_module_default.a["w--full"]].join(" ")
              })
            })
          }, "minimodal")
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/atoms/button/button.stories.tsx
var button_stories = __webpack_require__("dOrH");

// CONCATENATED MODULE: ./components/organisms/header/header.white.tsx



function header_white_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_white_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_white_ownKeys(Object(source), true).forEach(function (key) { header_white_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_white_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_white_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** styles */






/** components */



/** contexts */


/** vectors */


/** stories */


/** contents */


/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */

const WhiteHeader = ({
  spread = false,
  data
}) => {
  const toggleState = Object(toggle["c" /* useToggleState */])();
  const toggleDispatch = Object(toggle["b" /* useToggleDispatch */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    className: `${[space_module_default.a["p-v--16"], color_module_default.a["bg--white"], shape_module_default.a["shadow--sm"]].join(" ")}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: spread ? [layout_module_default.a["container--spread"]].join(" ") : [layout_module_default.a["container"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [shape_module_default.a["from__md--flex"], layout_module_default.a["relative"], layout_module_default.a["justify-between"], layout_module_default.a["items-center"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [index_module_default.a["searchbar__logo--md"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "logo",
            noName: true,
            onClick: () => router_default.a.push("/")
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [index_module_default.a["searchbar__logo--lg"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "logo",
            onClick: () => router_default.a.push("/")
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [index_module_default.a["searchbar__host"], space_module_default.a["m-h--2"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
              variant: "transparent",
              animate: true,
              content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
                kind: "host"
              }),
              onClick: () => router_default.a.push("/host/homes")
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-h--2"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
              variant: "transparent",
              content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
                kind: "globe"
              }),
              onClick: () => toggleDispatch({
                type: "toggle_globe"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-l--4"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], header_white_objectSpread(header_white_objectSpread({}, button_stories["e" /* Menu */].args), {}, {
              authenticated: data,
              inverse: true,
              onClick: () => toggleDispatch({
                type: "toggle_menu"
              })
            }))
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 70
          },
          className: [layout_module_default.a["absolute"], layout_module_default.a["r--0"], layout_module_default.a["t--55"], color_module_default.a["bg--transparent"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(modal["a" /* Modal */], {
            variant: "menu",
            authenticated: data,
            criteria: toggleState.menu,
            dispatch: "toggle_menu"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [shape_module_default.a["only__sm"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["all-center"], index_module_default.a["container"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              width: 30
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(regular["b" /* ChevronLeft */], {
              width: 12
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              width: "100%",
              flexGrow: 1
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
              variant: "searchbar",
              onClick: () => console.log("pressed")
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              width: 30,
              visibility: "hidden"
            }
          })]
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/header/index.tsx


function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(Object(source), true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** components */








/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
const Header = (_ref) => {
  let {
    variant,
    extendsTo
  } = _ref,
      props = header_objectWithoutProperties(_ref, ["variant", "extendsTo"]);

  const variants = {
    landing: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TransparentHeader, header_objectSpread({}, props)),
    white: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WhiteHeader, header_objectSpread({}, props)),
    details: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DetailsHeader, header_objectSpread({}, props)),
    homes: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HomesHeader, header_objectSpread({}, props)),
    experiences: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExperiencesHeader, header_objectSpread({}, props)),
    onlinehost: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OnlineHostHeader, header_objectSpread({}, props)),
    stay: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StayHeader, header_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: extendsTo,
    "data-testid": `${variant}-header`,
    children: variants[variant]
  });
};

/***/ }),

/***/ "Qx/D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom hook which allows modals to close when clicked outside of itself
 * @param ref
 * @param handler
 */

const useOnClickOutside = (ref, handler) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
};
/* harmony default export */ __webpack_exports__["a"] = (useOnClickOutside);

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "SFqS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"b_to_b--xs": "responsive_b_to_b--xs__3J_6R",
	"b_to_i--xs": "responsive_b_to_i--xs__3g8sY",
	"b_to_f--xs": "responsive_b_to_f--xs__1lb6m",
	"b_to_n--xs": "responsive_b_to_n--xs__33NtV",
	"b_to_g--xs": "responsive_b_to_g--xs__15Qt5",
	"i_to_b--xs": "responsive_i_to_b--xs__yhW2D",
	"i_to_i--xs": "responsive_i_to_i--xs__15P7u",
	"i_to_f--xs": "responsive_i_to_f--xs__7r25e",
	"i_to_n--xs": "responsive_i_to_n--xs__24o-N",
	"i_to_g--xs": "responsive_i_to_g--xs__2P4dB",
	"f_to_b--xs": "responsive_f_to_b--xs__3PO-L",
	"f_to_i--xs": "responsive_f_to_i--xs__2KKU1",
	"f_to_f--xs": "responsive_f_to_f--xs__2fNDF",
	"f_to_n--xs": "responsive_f_to_n--xs__2kioU",
	"f_to_g--xs": "responsive_f_to_g--xs__v5aZe",
	"n_to_b--xs": "responsive_n_to_b--xs__3a1jg",
	"n_to_i--xs": "responsive_n_to_i--xs__2E2uT",
	"n_to_f--xs": "responsive_n_to_f--xs__3b5rp",
	"n_to_n--xs": "responsive_n_to_n--xs__3KOmG",
	"n_to_g--xs": "responsive_n_to_g--xs__3s0FS",
	"g_to_b--xs": "responsive_g_to_b--xs__3cABA",
	"g_to_i--xs": "responsive_g_to_i--xs__2wgke",
	"g_to_f--xs": "responsive_g_to_f--xs__qnIzG",
	"g_to_n--xs": "responsive_g_to_n--xs__3LXcK",
	"g_to_g--xs": "responsive_g_to_g--xs__2fTuZ",
	"w50p_to_100--xs": "responsive_w50p_to_100--xs__1i2ka",
	"w100p_to_50p--xs": "responsive_w100p_to_50p--xs__25wZC",
	"maxw100p_to_50p--xs": "responsive_maxw100p_to_50p--xs__1vEo4",
	"w55p_to_100--xs": "responsive_w55p_to_100--xs__34220",
	"w100p_to_55p--xs": "responsive_w100p_to_55p--xs__3mn7f",
	"maxw100p_to_55p--xs": "responsive_maxw100p_to_55p--xs__2vD9p",
	"full_to_maxw550--xs": "responsive_full_to_maxw550--xs__1s-x3",
	"b_to_b--sm": "responsive_b_to_b--sm__3e58n",
	"b_to_i--sm": "responsive_b_to_i--sm__cwMfD",
	"b_to_f--sm": "responsive_b_to_f--sm__k5IWM",
	"b_to_n--sm": "responsive_b_to_n--sm__1EK8e",
	"b_to_g--sm": "responsive_b_to_g--sm__XEM7Q",
	"i_to_b--sm": "responsive_i_to_b--sm__3DOzC",
	"i_to_i--sm": "responsive_i_to_i--sm__2bvfN",
	"i_to_f--sm": "responsive_i_to_f--sm__1rsYt",
	"i_to_n--sm": "responsive_i_to_n--sm__3R_6u",
	"i_to_g--sm": "responsive_i_to_g--sm__12bA2",
	"f_to_b--sm": "responsive_f_to_b--sm__2oCPi",
	"f_to_i--sm": "responsive_f_to_i--sm__1ezPc",
	"f_to_f--sm": "responsive_f_to_f--sm__26mP6",
	"f_to_n--sm": "responsive_f_to_n--sm__3p9M3",
	"f_to_g--sm": "responsive_f_to_g--sm__2imo9",
	"n_to_b--sm": "responsive_n_to_b--sm__1HE3Z",
	"n_to_i--sm": "responsive_n_to_i--sm__ra9zR",
	"n_to_f--sm": "responsive_n_to_f--sm__1Oxgp",
	"n_to_n--sm": "responsive_n_to_n--sm__3dTl6",
	"n_to_g--sm": "responsive_n_to_g--sm__1xZ87",
	"g_to_b--sm": "responsive_g_to_b--sm__rLC2N",
	"g_to_i--sm": "responsive_g_to_i--sm__3vVaI",
	"g_to_f--sm": "responsive_g_to_f--sm__sGwRj",
	"g_to_n--sm": "responsive_g_to_n--sm__17gxF",
	"g_to_g--sm": "responsive_g_to_g--sm__2ABhy",
	"w50p_to_100--sm": "responsive_w50p_to_100--sm__AIfR9",
	"w100p_to_50p--sm": "responsive_w100p_to_50p--sm__1Vw7o",
	"maxw100p_to_50p--sm": "responsive_maxw100p_to_50p--sm__MGDSj",
	"w55p_to_100--sm": "responsive_w55p_to_100--sm__2J6zf",
	"w100p_to_55p--sm": "responsive_w100p_to_55p--sm__1sQl2",
	"maxw100p_to_55p--sm": "responsive_maxw100p_to_55p--sm__3DbAc",
	"full_to_maxw550--sm": "responsive_full_to_maxw550--sm__1j-6i",
	"b_to_b--md": "responsive_b_to_b--md__3oF19",
	"b_to_i--md": "responsive_b_to_i--md__3nh6I",
	"b_to_f--md": "responsive_b_to_f--md__1rnxS",
	"b_to_n--md": "responsive_b_to_n--md__PGbSk",
	"b_to_g--md": "responsive_b_to_g--md__3eU9T",
	"i_to_b--md": "responsive_i_to_b--md__3LOKd",
	"i_to_i--md": "responsive_i_to_i--md__gpNGo",
	"i_to_f--md": "responsive_i_to_f--md__2zHoa",
	"i_to_n--md": "responsive_i_to_n--md__1U_HQ",
	"i_to_g--md": "responsive_i_to_g--md__3gAQo",
	"f_to_b--md": "responsive_f_to_b--md__2l_u5",
	"f_to_i--md": "responsive_f_to_i--md__3iUHK",
	"f_to_f--md": "responsive_f_to_f--md__2XC-f",
	"f_to_n--md": "responsive_f_to_n--md__3kAoP",
	"f_to_g--md": "responsive_f_to_g--md__2jE-f",
	"n_to_b--md": "responsive_n_to_b--md__UiHR2",
	"n_to_i--md": "responsive_n_to_i--md__ja1VQ",
	"n_to_f--md": "responsive_n_to_f--md__P3oVz",
	"n_to_n--md": "responsive_n_to_n--md__G7nWk",
	"n_to_g--md": "responsive_n_to_g--md__1z3af",
	"g_to_b--md": "responsive_g_to_b--md__5kHFI",
	"g_to_i--md": "responsive_g_to_i--md__377T_",
	"g_to_f--md": "responsive_g_to_f--md__1vUIl",
	"g_to_n--md": "responsive_g_to_n--md__1CBd0",
	"g_to_g--md": "responsive_g_to_g--md__1DtXd",
	"w50p_to_100--md": "responsive_w50p_to_100--md__3SayC",
	"w100p_to_50p--md": "responsive_w100p_to_50p--md__1qEtO",
	"maxw100p_to_50p--md": "responsive_maxw100p_to_50p--md__2eZbo",
	"w55p_to_100--md": "responsive_w55p_to_100--md__2xoTr",
	"w100p_to_55p--md": "responsive_w100p_to_55p--md__3hEZu",
	"maxw100p_to_55p--md": "responsive_maxw100p_to_55p--md__39DxV",
	"full_to_maxw550--md": "responsive_full_to_maxw550--md__2CYH2",
	"b_to_b--lg": "responsive_b_to_b--lg__2ucRa",
	"b_to_i--lg": "responsive_b_to_i--lg__3XBZS",
	"b_to_f--lg": "responsive_b_to_f--lg__3e4S5",
	"b_to_n--lg": "responsive_b_to_n--lg__2bfXx",
	"b_to_g--lg": "responsive_b_to_g--lg__1V8_I",
	"i_to_b--lg": "responsive_i_to_b--lg__2tzOV",
	"i_to_i--lg": "responsive_i_to_i--lg__HZmWF",
	"i_to_f--lg": "responsive_i_to_f--lg__37CpZ",
	"i_to_n--lg": "responsive_i_to_n--lg__2ueSb",
	"i_to_g--lg": "responsive_i_to_g--lg__3m5M-",
	"f_to_b--lg": "responsive_f_to_b--lg__3ZyN7",
	"f_to_i--lg": "responsive_f_to_i--lg__2gq-t",
	"f_to_f--lg": "responsive_f_to_f--lg__1Upr-",
	"f_to_n--lg": "responsive_f_to_n--lg__1Ddo3",
	"f_to_g--lg": "responsive_f_to_g--lg__wGUOk",
	"n_to_b--lg": "responsive_n_to_b--lg__L0_M3",
	"n_to_i--lg": "responsive_n_to_i--lg__Hi_7z",
	"n_to_f--lg": "responsive_n_to_f--lg__1EMEE",
	"n_to_n--lg": "responsive_n_to_n--lg__QFXjR",
	"n_to_g--lg": "responsive_n_to_g--lg__2pHiQ",
	"g_to_b--lg": "responsive_g_to_b--lg__1gsZv",
	"g_to_i--lg": "responsive_g_to_i--lg__3gQdE",
	"g_to_f--lg": "responsive_g_to_f--lg__3GtsC",
	"g_to_n--lg": "responsive_g_to_n--lg__1fKSX",
	"g_to_g--lg": "responsive_g_to_g--lg__1pjPa",
	"w50p_to_100--lg": "responsive_w50p_to_100--lg__jvgpU",
	"w100p_to_50p--lg": "responsive_w100p_to_50p--lg__12nE5",
	"maxw100p_to_50p--lg": "responsive_maxw100p_to_50p--lg__2QUIF",
	"w55p_to_100--lg": "responsive_w55p_to_100--lg__18m67",
	"w100p_to_55p--lg": "responsive_w100p_to_55p--lg__2lL0y",
	"maxw100p_to_55p--lg": "responsive_maxw100p_to_55p--lg__2560f",
	"full_to_maxw550--lg": "responsive_full_to_maxw550--lg__1c3kh",
	"justify--center_to_end--xs": "responsive_justify--center_to_end--xs__iGouq",
	"justify--start_to_end--sm": "responsive_justify--start_to_end--sm__3EPAI",
	"justify--start_to_center--md": "responsive_justify--start_to_center--md__m3754",
	"p-l--24_to_64--sm": "responsive_p-l--24_to_64--sm__21v7H",
	"t--80p_to_20p--sm": "responsive_t--80p_to_20p--sm__1SBdJ",
	"t__-45_to_0--md": "responsive_t__-45_to_0--md__2oot3",
	"l__30_to_0--md": "responsive_l__30_to_0--md__2dtYw",
	"size__12_to_14--md": "responsive_size__12_to_14--md__18lUl",
	"weight__500_to_300--md": "responsive_weight__500_to_300--md__2jANq"
};


/***/ }),

/***/ "TKLJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hover__paginate": "bar_hover__paginate__2TDNG",
	"menubar": "bar_menubar__37340",
	"menubar__item": "bar_menubar__item__334gI",
	"menubar__item--logo": "bar_menubar__item--logo__3aow7",
	"menubar__item--text": "bar_menubar__item--text__OvNTC",
	"selected": "bar_selected__1Vi0b"
};


/***/ }),

/***/ "TLTr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"display__transparent--sm": "header_display__transparent--sm__362X6",
	"display__transparent--md": "header_display__transparent--md__1uFEC",
	"hover__logo": "header_hover__logo__2WW16"
};


/***/ }),

/***/ "Yoz1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostingCard; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IByY");
/* harmony import */ var _styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("u7m8");
/* harmony import */ var _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_space_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jzoe");
/* harmony import */ var _card_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_card_module_scss__WEBPACK_IMPORTED_MODULE_3__);





const types = {
  requirements: {
    imgUrl: "https://a0.muscache.com/im/pictures/969a398f-5131-4c7c-af87-62fbf39f9854.jpg?im_q=highq&im_w=480",
    title: "Choose your requirements",
    description: "Decide how many people can stay and for how long. Set house rules that guests must follow when staying at your place."
  },
  decide: {
    imgUrl: "https://a0.muscache.com/im/pictures/d04921d2-6064-440e-a18a-488406a2d3d4.jpg?im_q=highq&im_w=480",
    title: "Decide when to host",
    description: "Block off dates on your calendar whenever you like—there’s no minimum time that your place needs to be available."
  },
  prices: {
    imgUrl: "https://a0.muscache.com/im/pictures/0d2e1b83-db57-4e75-952c-9b53eec0c46b.jpg?im_q=highq&im_w=480",
    title: "Set your own prices",
    description: "What you charge is up to you. Our tools and insights can help you set nightly prices that are competitive for your area."
  },
  help: {
    imgUrl: "https://a0.muscache.com/im/pictures/66f93645-d028-4983-b739-235cd667c60c.jpg?im_q=highq&im_w=480",
    title: "Help guests feel welcome",
    description: "Follow our amenity and performance guidelines to create comfortable stays and earn great reviews."
  }
};
const HostingCard = ({
  type
}) => {
  var _types$type, _types$type2, _types$type3, _types$type4;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: [_card_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["hosting"]].join(" "),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: ((_types$type = types[type]) === null || _types$type === void 0 ? void 0 : _types$type.imgUrl) ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          height: 160
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: (_types$type2 = types[type]) === null || _types$type2 === void 0 ? void 0 : _types$type2.imgUrl,
          style: {
            objectFit: "cover",
            borderRadius: 8
          }
        })
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          width: 260,
          height: 160,
          backgroundColor: "lightgray",
          borderRadius: 8
        }
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: [_styles_space_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["m-v--16"]].join(" "),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        className: [_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["size--22"]].join(" "),
        children: ((_types$type3 = types[type]) === null || _types$type3 === void 0 ? void 0 : _types$type3.title) || "Title here"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        style: {
          lineHeight: 1.6
        },
        className: [_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["size--16"]].join(" "),
        children: ((_types$type4 = types[type]) === null || _types$type4 === void 0 ? void 0 : _types$type4.description) || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: [_styles_space_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["m-v--18"]].join(" "),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("u", {
        className: [_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["size--14"]].join(" "),
        children: "Learn more"
      })
    })]
  });
};

/***/ }),

/***/ "cAue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHandleScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom hook which calculates the scroll position
 */

const useHandleScroll = () => {
  const {
    0: scrollPosition,
    1: setScrollPosition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollPosition;
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d/HE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"banner": "styles_banner__1rqPT",
	"banner__background--picture": "styles_banner__background--picture__1Dw_1",
	"header__wrapper--sm": "styles_header__wrapper--sm__3HbWZ",
	"searchbar__sm": "styles_searchbar__sm__fg_x3",
	"searchbar__logo--md": "styles_searchbar__logo--md__3dy95",
	"searchbar__logo--lg": "styles_searchbar__logo--lg__1ikBy",
	"menubar": "styles_menubar__1UiX3",
	"menubar__item": "styles_menubar__item__8L6Wm",
	"menubar__item--logo": "styles_menubar__item--logo__HoSJm",
	"menubar__item--text": "styles_menubar__item--text__zsR9x",
	"selected": "styles_selected__1VZUS",
	"container": "styles_container__3yd9V",
	"container--carousel": "styles_container--carousel__3N_Vc",
	"flex__explore": "styles_flex__explore__15AJm",
	"flex__blm--content": "styles_flex__blm--content__191LT",
	"flex__footer--section": "styles_flex__footer--section__2fKqw",
	"flex__footer--others": "styles_flex__footer--others__v2tiO",
	"justify__explore--button": "styles_justify__explore--button__XSRgA",
	"m__footer--item": "styles_m__footer--item__2bq9f",
	"p-b__footer--section": "styles_p-b__footer--section__19VHg",
	"w__explore--subtitle": "styles_w__explore--subtitle__3bxc4",
	"w__blm--content": "styles_w__blm--content__V_nha",
	"w__footer--section": "styles_w__footer--section___Z2OI",
	"w__modal": "styles_w__modal__1ERUW",
	"grid__footer--items": "styles_grid__footer--items__336cq",
	"block__footer--dot": "styles_block__footer--dot__1am59",
	"none__menubar": "styles_none__menubar__1cbXx",
	"size__explore--subtitle": "styles_size__explore--subtitle__28txG",
	"size__blm--title": "styles_size__blm--title__h-49r",
	"text__explore--subtitle": "styles_text__explore--subtitle__3-vuM",
	"p__category--spread": "styles_p__category--spread__3xR5p",
	"modal__auth": "styles_modal__auth__29_LJ",
	"m__privacy": "styles_m__privacy__3BK13"
};


/***/ }),

/***/ "dOrH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Transparent */
/* unused harmony export Globe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Menu; });
/* unused harmony export Privacy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Banner; });
/* unused harmony export Primary */
/* unused harmony export Searchbar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Paginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Underline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Filter; });
/* unused harmony export Modal */
/* unused harmony export Back */
/* unused harmony export Link */
/* unused harmony export Search */
/* unused harmony export Expand */
/* unused harmony export Location */
/* unused harmony export Nearby */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JV+2");
/* harmony import */ var _button_button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+FKr");
/* harmony import */ var _button_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_font_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IByY");
/* harmony import */ var _styles_font_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1CHd");
/* harmony import */ var _styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wepW");
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1cX2");
/* harmony import */ var _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("u7m8");
/* harmony import */ var _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_space_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("MS2y");
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** components */

/** styles */








/* unused harmony default export */ var _unused_webpack_default_export = ({
  title: "Atoms/Button",
  component: _button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"],
  argTypes: {
    inverse: {
      control: "boolean"
    },
    variant: {
      control: {
        disable: true
      }
    },
    icon: {
      control: {
        disable: true
      }
    },
    to: {
      control: {
        disable: true
      }
    },
    extendsTo: {
      control: {
        disable: true
      }
    }
  }
});
const disableInverse = {
  inverse: {
    control: {
      disable: true
    }
  }
};
const disableTitle = {
  title: {
    control: {
      disable: true
    }
  }
};

const TemplateStory = args => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], _objectSpread({}, args));

const Transparent = TemplateStory.bind({});
Transparent.args = {
  variant: "transparent",
  content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
    className: [_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["size--15"]].join(" "),
    children: "Button"
  })
};
const Globe = TemplateStory.bind({});
Globe.args = {
  variant: "globe",
  extendsTo: [_styles_font_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["text--left"]].join(" ")
};
Globe.argTypes = {
  selected: {
    control: "boolean"
  }
};
const Menu = TemplateStory.bind({});
Menu.args = {
  variant: "menu",
  extendsTo: [_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["hover-shadow--lg"], _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["br--30"]].join(" ")
};
Menu.argTypes = _objectSpread(_objectSpread({}, disableTitle), {}, {
  user: {
    control: "boolean"
  }
});
const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: "privacy"
};
Privacy.decorators = [Story => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  style: {
    width: 300
  },
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Story, {})
})];
const Border = TemplateStory.bind({});
Border.args = {
  variant: "border",
  extendsTo: [_styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["bg--transparent"]].join(" ")
};
Border.argTypes = {
  size: {
    control: {
      type: "select",
      options: ["sm", "md", "lg"]
    }
  },
  bold: {
    control: "boolean"
  }
};
const Banner = TemplateStory.bind({});
Banner.args = {
  variant: "banner",
  extendsTo: [_styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["bg--white"], _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["br--6"]].join(" ")
};
Banner.argTypes = _objectSpread({}, disableInverse);
Banner.decorators = [Story => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  style: {
    width: 200
  },
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Story, {})
})];
const Primary = TemplateStory.bind({});
Primary.args = {
  variant: "primary"
};
Primary.decorators = [Story => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  style: {
    width: 300
  },
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Story, {})
})];
Primary.argTypes = _objectSpread(_objectSpread({}, disableInverse), {}, {
  loading: {
    control: "boolean"
  }
});
const Searchbar = TemplateStory.bind({});
Searchbar.args = {
  variant: "searchbar"
};
Searchbar.argTypes = _objectSpread(_objectSpread({}, disableInverse), {}, {
  mini: {
    control: "boolean"
  }
});
const Auth = TemplateStory.bind({});
Auth.args = {
  variant: "auth",
  extendsTo: [_button_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["hover__auth"], _styles_color_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["bg--transparent"], _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a["block"], _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["w--full"], _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a["p-h--12"], _styles_space_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a["p-v--12"], _styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["br--8"]].join(" ")
};
Auth.decorators = [Story => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  style: {
    width: 300
  },
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Story, {})
})];
Auth.argTypes = {
  auth: {
    control: {
      type: "select",
      options: ["email", "facebook", "google", "apple"]
    }
  }
};
const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: "paginate"
};
Paginate.argTypes = {
  direction: {
    control: {
      type: "select",
      options: ["left", "right"]
    }
  }
};
const Option = TemplateStory.bind({});
Option.args = {
  variant: "option",
  extendsTo: [_styles_shape_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["w--full"]].join(" ")
};
const Underline = TemplateStory.bind({});
Underline.args = {
  variant: "underline"
};
const Filter = TemplateStory.bind({});
Filter.args = {
  variant: "filter"
};
const Modal = TemplateStory.bind({});
Modal.args = {
  variant: "modal"
};
Modal.argTypes = {
  modalType: {
    control: {
      type: "select",
      options: ["close", "back"]
    }
  }
};
const Back = TemplateStory.bind({});
Back.args = {
  variant: "back"
};
const Link = TemplateStory.bind({});
Link.args = {
  variant: "link"
};
const Search = TemplateStory.bind({});
Search.args = {
  variant: "search"
};
Search.argTypes = {
  expand: {
    control: "boolean"
  }
};
const Expand = TemplateStory.bind({});
Expand.args = {
  variant: "expand"
};
const Location = TemplateStory.bind({});
Location.args = {
  variant: "location"
};
Location.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["explore", "recent"]
    }
  }
};
const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: "nearby"
};

/***/ }),

/***/ "fOdF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Prototype; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./components/atoms/input/index.tsx + 27 modules
var input = __webpack_require__("8K43");

// EXTERNAL MODULE: ./components/layout/index.tsx + 7 modules
var layout = __webpack_require__("lQQX");

// CONCATENATED MODULE: ./components/prototype/create/create.advance.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */




/** components */


const AdvanceCreate = ({
  setData,
  data = {
    advance: 0
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: 300
      },
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "How far in advance can guests book?",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [space_module_default.a["m-t--22"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "radio",
              title: "Any time",
              selected: data.advance === 0,
              select: () => setData(_objectSpread(_objectSpread({}, data), {}, {
                advance: 0
              }))
            })
          }), [{
            months: 3
          }, {
            months: 6
          }, {
            months: 9
          }, {
            months: 12
          }].map(({
            months
          }, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "radio",
              title: `${months === 12 ? 1 : months} ${months === 12 ? "year" : "months in advance"}`,
              selected: data.advance === months,
              select: () => setData(_objectSpread(_objectSpread({}, data), {}, {
                advance: months
              }))
            })
          }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "radio",
              title: "Dates unavailable by default",
              subtitle: "Your entire calendar will be blocked by default, which means you\u2019ll have to manually unblock dates to get booked.",
              selected: data.advance === "unavailable",
              select: () => setData(_objectSpread(_objectSpread({}, data), {}, {
                advance: "unavailable"
              }))
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        maxWidth: 300
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
        className: [font_module_default.a["size--13"], color_module_default.a["c--gray__1"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: [color_module_default.a["c--darkgreen__3"], font_module_default.a["weight--300"]].join(" "),
          children: ["Tip:", " "]
        }), "Most hosts can keep their calendars updated up to 6 months out."]
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.amenities.tsx



function create_amenities_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_amenities_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_amenities_ownKeys(Object(source), true).forEach(function (key) { create_amenities_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_amenities_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_amenities_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */

/** styles **/




const AmenitiesCreate = ({
  data = {
    amenities: ["essentials"],
    safeties: ["kit"]
  },
  setData
}) => {
  const modify = (type, params) => {
    if (data[type].includes(params)) {
      setData(create_amenities_objectSpread(create_amenities_objectSpread({}, data), {}, {
        [type]: [...data[type]].filter(element => element !== params)
      }));
    } else {
      setData(create_amenities_objectSpread(create_amenities_objectSpread({}, data), {}, {
        [type]: [...data[type], params]
      }));
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "What amenities do you offer?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--16"], color_module_default.a["c--gray__2"]].join(" "),
        children: "These are just the amenities guests usually expect, but you can add even more after publishing."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--50"]].join(" "),
      children: [{
        title: "Essentials",
        item: "essentials",
        description: "Towels, bed sheets, soap, toilet papaer, and pillows"
      }, {
        title: "Wifi",
        item: "wifi"
      }, {
        title: "TV",
        item: "tv"
      }, {
        title: "Heat",
        item: "heat"
      }, {
        title: "Air conditioning",
        item: "conditioning"
      }, {
        title: "Iron",
        item: "iron"
      }, {
        title: "Shampoo",
        item: "shampoo"
      }, {
        title: "Hair dryer",
        item: "dryer"
      }, {
        title: "Breakfast, coffee, tea",
        item: "breakfast"
      }, {
        title: "Desk/workspace",
        item: "workspace"
      }, {
        title: "Fireplace",
        item: "fireplace"
      }, {
        title: "Closet / drawers",
        item: "closet"
      }, {
        title: "Private entrance",
        item: "entrance"
      }].map(({
        title,
        item,
        description
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            check: () => modify("amenities", item),
            checked: data.amenities.includes(item),
            variant: "checkbox",
            title: title,
            description: description
          })
        }, index);
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--32"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--45"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--28"], color_module_default.a["c--gray__1"]].join(" "),
          children: "Safety amenities"
        })
      }), [{
        title: "Smoke detector",
        item: "smoke",
        description: "Check your local laws, which may rquire a working smoke detector in every room"
      }, {
        title: "Carbon monoxide detector",
        item: "carbon",
        description: "Check your local laws, which may require a working carbon monoxide detector in every room"
      }, {
        title: "First aid kit",
        item: "kit"
      }, {
        title: "Fire extinguisher",
        item: "fire"
      }, {
        title: "Lock on bedroom door",
        item: "lock"
      }].map(({
        title,
        item,
        description
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            check: () => modify("safeties", item),
            checked: data.safeties.includes(item),
            variant: "checkbox",
            title: title,
            description: description
          })
        }, index);
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.bathrooms.tsx



function create_bathrooms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_bathrooms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_bathrooms_ownKeys(Object(source), true).forEach(function (key) { create_bathrooms_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_bathrooms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_bathrooms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */

/** styles **/




const BathroomsCreate = ({
  data = {
    bathrooms: 0
  },
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "How many bathrooms?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Count bathrooms that don't have a shower or bathtub as a half bathroom."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: 300
      },
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          title: "Bathrooms",
          variant: "counter",
          value: data.bathrooms,
          add: () => setData(create_bathrooms_objectSpread(create_bathrooms_objectSpread({}, data), {}, {
            bathrooms: data.bathrooms + 1
          })),
          subtract: () => setData(create_bathrooms_objectSpread(create_bathrooms_objectSpread({}, data), {}, {
            bathrooms: data.bathrooms - 1
          })),
          min: 1,
          max: 15
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.bedrooms.tsx



function create_bedrooms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_bedrooms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_bedrooms_ownKeys(Object(source), true).forEach(function (key) { create_bedrooms_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_bedrooms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_bedrooms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */


/** styles **/




const BedroomsCreate = ({
  data = {
    guests: 0
  },
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "How many guests can your place accommodate?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Check that you have enough beds to accomodate all your guests comfortably."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: 300
      },
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          title: "Guests",
          variant: "counter",
          value: data.guests,
          add: () => setData(create_bedrooms_objectSpread(create_bedrooms_objectSpread({}, data), {}, {
            guests: data.guests + 1
          })),
          subtract: () => setData(create_bedrooms_objectSpread(create_bedrooms_objectSpread({}, data), {}, {
            guests: data.guests - 1
          })),
          min: 1,
          max: 16
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--32"]].join(" "),
      style: {
        width: 300
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "How many bedrooms can guests use?",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "select",
            inputType: "bedrooms",
            value: data.bedrooms,
            handleChange: e => setData(create_bedrooms_objectSpread(create_bedrooms_objectSpread({}, data), {}, {
              bedrooms: e.target.value
            }))
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      style: {
        width: 300
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "How many beds can guests use?",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            title: "Beds",
            variant: "counter",
            value: data.beds,
            add: () => setData(create_bedrooms_objectSpread(create_bedrooms_objectSpread({}, data), {}, {
              beds: data.beds + 1
            })),
            subtract: () => setData(create_bedrooms_objectSpread(create_bedrooms_objectSpread({}, data), {}, {
              beds: data.beds - 1
            })),
            min: 1,
            max: 50
          })
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.checkin.tsx



function create_checkin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_checkin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_checkin_ownKeys(Object(source), true).forEach(function (key) { create_checkin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_checkin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_checkin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */




/** components */


const CheckInCreate = ({
  setData,
  data = {
    notice: 0
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: 300
      },
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "How much notice do you need before a guest arrives?",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [space_module_default.a["m-t--22"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "radio",
              title: "Same day",
              selected: data.notice === 0,
              select: () => setData(create_checkin_objectSpread(create_checkin_objectSpread({}, data), {}, {
                notice: 0
              }))
            })
          }), [{
            day: 1
          }, {
            day: 2
          }, {
            day: 3
          }, {
            day: 7
          }].map(({
            day
          }, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "radio",
              title: `${day} ${day > 1 ? "days" : "day"}`,
              selected: data.notice === day,
              select: () => setData(create_checkin_objectSpread(create_checkin_objectSpread({}, data), {}, {
                notice: day
              }))
            })
          }, index))]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        maxWidth: 300
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
        className: [font_module_default.a["size--13"], color_module_default.a["c--gray__1"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: [color_module_default.a["c--darkgreen__3"], font_module_default.a["weight--300"]].join(" "),
          children: ["Tip:", " "]
        }), "Letting guests book same-day reservations can help you get guests who book last-minute trips."]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [color_module_default.a["bg--white__2"], space_module_default.a["m-v--32"]].join(" "),
      style: {
        width: "100%",
        height: 1
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--12"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          children: "When can guests check in?"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 10
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--8"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              className: [color_module_default.a["c--gray__0"], font_module_default.a["size--13"]].join(" "),
              children: ["From:", " "]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "select",
              inputType: "checkinFrom",
              value: data.checkinFrom,
              handleChange: e => setData(create_checkin_objectSpread(create_checkin_objectSpread({}, data), {}, {
                checkinFrom: e.target.value
              }))
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--8"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              className: [color_module_default.a["c--gray__0"], font_module_default.a["size--13"]].join(" "),
              children: ["To:", " "]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "select",
              inputType: "checkinTo",
              value: data.checkinTo,
              handleChange: e => setData(create_checkin_objectSpread(create_checkin_objectSpread({}, data), {}, {
                checkinTo: e.target.value
              }))
            })
          })]
        })]
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.description.tsx



function create_description_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_description_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_description_ownKeys(Object(source), true).forEach(function (key) { create_description_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_description_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_description_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */


/** styles **/



const DescriptionCreate = ({
  data = {
    description: "Description here"
  },
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Describe your place to guests"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighbourhood."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "textarea",
          limit: 500,
          value: data.description,
          handleChange: e => setData(create_description_objectSpread(create_description_objectSpread({}, data), {}, {
            description: e.target.value
          }))
        })
      })
    })]
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./context/stay.tsx
var context_stay = __webpack_require__("pl4W");

// CONCATENATED MODULE: ./components/prototype/create/create.getstarted.tsx





/** styles **/




/** components */



/** contexts */


/**
 * Renders the /become-a-host/get-started page content
 */

const GetStartedCreate = () => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: stay,
    1: setStay
  } = Object(external_react_["useState"])("Entire place");
  const dispatchStay = Object(context_stay["b" /* useStayDispatch */])();
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      guests: 1,
      address: ""
    },
    onSubmit: async ({
      guests,
      address
    }) => {
      setLoading(true);
      dispatchStay({
        type: "add",
        payload: {
          stay,
          guests,
          address
        }
      });
      setTimeout(() => {
        router_default.a.push("/become-a-host/room");
      }, 2000);
    }
  });
  Object(external_react_["useEffect"])(() => {
    dispatchStay({
      type: "reset",
      payload: {
        place: "Entire place",
        guests: 0,
        address: ""
      }
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--24"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
          children: "Hi, Kenichi! Let's get started listing your space."
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: [font_module_default.a["size--12"], color_module_default.a["c--gray__1"]].join(" "),
          children: "STEP 1"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--22"], color_module_default.a["c--gray__2"]].join(" "),
          children: "What kind of place do you have?"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--10"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
          onSubmit: formik.handleSubmit,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [space_module_default.a["m-b--10"]].join(" "),
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 130px",
              columnGap: 10
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "place",
                value: stay,
                changePlace: setStay
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "guests",
                handleChange: formik.handleChange,
                value: formik.values.guests
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
              variant: "address",
              handleChange: formik.handleChange,
              value: formik.values.address
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-t--16"]].join(" "),
            style: {
              width: 150
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                width: "100%"
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
                variant: "primary",
                title: "Continue",
                size: "sm",
                loading: loading
              })
            })
          })]
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.location.tsx



function create_location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_location_ownKeys(Object(source), true).forEach(function (key) { create_location_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_location_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */


/** styles **/




/**
 * Renders the /become-a-host/location page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const LocationCreate = ({
  data,
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Where's your place located?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Guests will only get your exact address once they've booked a reservation."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        columnGap: 15
      },
      className: [space_module_default.a["m-t--32"], space_module_default.a["m-b--18"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Country"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "select",
          handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
            country: e.target.value
          })),
          value: data === null || data === void 0 ? void 0 : data.country,
          inputType: "country"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Postal Code"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          name: "postal",
          variant: "text",
          handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
            postal: e.target.value
          })),
          value: data === null || data === void 0 ? void 0 : data.postal
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: "Street"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          name: "street",
          variant: "text",
          handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
            street: e.target.value
          })),
          value: data === null || data === void 0 ? void 0 : data.street
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--4"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--10"]].join(" "),
          children: "e.g. 111108 108th Avenue"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: "Apt, Suite (optional)"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          name: "apt",
          variant: "text",
          handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
            apt: e.target.value
          })),
          value: data === null || data === void 0 ? void 0 : data.apt
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--4"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--10"]].join(" "),
          children: "e.g. Suite #7"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        columnGap: 15
      },
      className: [space_module_default.a["m-t--32"], space_module_default.a["m-b--18"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "City"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "text",
            handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
              city: e.target.value
            })),
            value: data === null || data === void 0 ? void 0 : data.city,
            inputType: "city"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--10"]].join(" "),
            children: "e.g. Edmonton"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "State"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            name: "state",
            variant: "text",
            handleChange: e => setData(create_location_objectSpread(create_location_objectSpread({}, data), {}, {
              state: e.target.value
            })),
            value: data === null || data === void 0 ? void 0 : data.state
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-t--4"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--10"]].join(" "),
            children: "e.g. Alberta"
          })
        })]
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.phone.tsx



function create_phone_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_phone_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_phone_ownKeys(Object(source), true).forEach(function (key) { create_phone_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_phone_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_phone_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */


/** styles **/



/**
 * Renders the /become-a-host/phone page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */

const PhoneCreate = ({
  data = {
    phone: "000-000-0000"
  },
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Add your mobile number"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "We'll send you booking requests, reminders, and other notifications. This number should be able to receive texts or calls."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "verify",
          value: data.phone,
          handleChange: e => setData(create_phone_objectSpread(create_phone_objectSpread({}, data), {}, {
            phone: e.target.value
          }))
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/atoms/bullet/index.tsx + 16 modules
var bullet = __webpack_require__("18ll");

// CONCATENATED MODULE: ./components/prototype/create/create.requirements.tsx



/** components */

/** styles **/




/**
 * Renders the /become-a-host/requirements page content
 */

const RequirementsCreate = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Review Airbnb's guest requirements"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Airbnb has requirements that all guests must meet before they book."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--18"]].join(" "),
          children: "All Airbnb guests must provide:"
        })
      }), ["Email address", "Confirmed phone number", "Payment information"].map((content, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
            variant: "check",
            title: content
          })
        }, index);
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: "100%",
        height: 1
      },
      className: [color_module_default.a["bg--white__2"], space_module_default.a["m-b--30"]].join(" ")
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--16"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: [font_module_default.a["size--18"]].join(" "),
        children: "Before booking your home, each guest must:"
      })
    }), ["Agree to your House Rules", "Message you about their trip", "Let you know how many guests are coming", "Confirm their check-in time if they're arriving within 2 days"].map((content, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
          variant: "check",
          title: content
        })
      }, index);
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.room.tsx



function create_room_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_room_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_room_ownKeys(Object(source), true).forEach(function (key) { create_room_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_room_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_room_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */


/** styles **/




/**
 * Renders the /become-a-host/room page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */

const RoomCreate = ({
  data,
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "What kind of place are you listing?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: 250
      },
      className: [space_module_default.a["m-b--22"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "First, let's narrow things down",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          inputType: "place",
          variant: "select",
          value: data === null || data === void 0 ? void 0 : data.place,
          handleChange: e => {
            setData(create_room_objectSpread(create_room_objectSpread({}, data), {}, {
              place: e.target.value
            }));
          }
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      style: {
        width: 250
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
        variant: "input",
        title: "Now choose a property type",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          disabled: !(data === null || data === void 0 ? void 0 : data.place),
          inputType: data === null || data === void 0 ? void 0 : data.place,
          variant: "select",
          value: data === null || data === void 0 ? void 0 : data.property,
          handleChange: e => {
            setData(create_room_objectSpread(create_room_objectSpread({}, data), {}, {
              property: e.target.value
            }));
          }
        })
      })
    }), (data === null || data === void 0 ? void 0 : data.property) && (data === null || data === void 0 ? void 0 : data.description) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: [font_module_default.a["size--14"], color_module_default.a["c--gray__0"]].join(" "),
          children: data.description
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--32"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* Layout */], {
          variant: "input",
          title: "What will guests have?",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: [space_module_default.a["m-t--22"]].join(" "),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["m-b--22"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "radio",
                title: "Entire place",
                subtitle: "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
                selected: data.stay === "Entire place",
                select: () => setData(create_room_objectSpread(create_room_objectSpread({}, data), {}, {
                  stay: "Entire place"
                }))
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["m-b--22"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "radio",
                title: "Private place",
                subtitle: "Guests have their own private room for sleeping. Other areas could be shared.",
                selected: data.stay === "Private place",
                select: () => setData(create_room_objectSpread(create_room_objectSpread({}, data), {}, {
                  stay: "Private place"
                }))
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: [space_module_default.a["m-b--22"]].join(" "),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "radio",
                title: "Shared room",
                subtitle: "Guests sleep in a bedroom or a common area that could be shared with others.",
                selected: data.stay === "Shared room",
                select: () => setData(create_room_objectSpread(create_room_objectSpread({}, data), {}, {
                  stay: "Shared room"
                }))
              })
            })]
          })
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.rules.tsx



function create_rules_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_rules_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_rules_ownKeys(Object(source), true).forEach(function (key) { create_rules_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_rules_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_rules_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */

/** styles **/




/**
 * Renders the /become-a-host/rules page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */

const RulesCreate = ({
  data = {
    details: []
  },
  setData
}) => {
  const modify = (type, params) => {
    if (data[type].includes(params)) {
      setData(create_rules_objectSpread(create_rules_objectSpread({}, data), {}, {
        [type]: [...data[type]].filter(element => element !== params)
      }));
    } else {
      setData(create_rules_objectSpread(create_rules_objectSpread({}, data), {}, {
        [type]: [...data[type], params]
      }));
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Set house rules for your guests"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--15"]].join(" "),
        children: "Guests must agree to your house rules before they book."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--22"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--12"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "closed",
          title: "Smoking allowed",
          data: data,
          setData: setData,
          value: "smoking"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--12"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "closed",
          title: "Events allowed",
          data: data,
          setData: setData,
          value: "event"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--50"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-v--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Details guests must know about your home"
        })
      }), [{
        title: "Must climb stairs",
        item: "stairs"
      }, {
        title: "Potential for noise",
        item: "noise"
      }, {
        title: "Pet(s) live on property",
        item: "pets"
      }].map(({
        title,
        item
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            check: () => modify("details", item),
            checked: data.details.includes(item),
            variant: "checkbox",
            title: title
          })
        }, index);
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.spaces.tsx



function create_spaces_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_spaces_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_spaces_ownKeys(Object(source), true).forEach(function (key) { create_spaces_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_spaces_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_spaces_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */

/** styles **/




/**
 * Renders the /become-a-host/spaces page content
 */

const SpacesCreate = ({
  data = {
    spaces: []
  },
  setData
}) => {
  const modify = (type, params) => {
    if (data[type].includes(params)) {
      setData(create_spaces_objectSpread(create_spaces_objectSpread({}, data), {}, {
        [type]: [...data[type]].filter(element => element !== params)
      }));
    } else {
      setData(create_spaces_objectSpread(create_spaces_objectSpread({}, data), {}, {
        [type]: [...data[type], params]
      }));
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "What spaces can guests use?"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--16"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Include common areas, but don\u2019t add spaces that aren\u2019t on your property."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--50"]].join(" "),
      children: [{
        title: "Kitchen",
        item: "kitchen"
      }, {
        title: "Laundry - washer",
        item: "washer"
      }, {
        title: "Laundry - dryer",
        item: "dryer"
      }, {
        title: "Parking",
        item: "parking"
      }, {
        title: "Gym",
        item: "gym"
      }, {
        title: "Pool",
        item: "Hot tub"
      }].map(({
        title,
        item
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--16"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            check: () => modify("spaces", item),
            checked: data.spaces.includes(item),
            variant: "checkbox",
            title: title
          })
        }, index);
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.title.tsx



function create_title_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_title_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_title_ownKeys(Object(source), true).forEach(function (key) { create_title_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_title_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_title_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** components */

/** styles **/




/**
 * Renders the /become-a-host/title
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */

const TitleCreate = ({
  data = {
    title: "Title here"
  },
  setData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Create a title for your listing"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Catch guests' attention with a listing title that highlights what makes your place special."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "limit",
          limit: 50,
          value: data.title,
          handleChange: e => setData(create_title_objectSpread(create_title_objectSpread({}, data), {}, {
            title: e.target.value
          }))
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.period.tsx



function create_period_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_period_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_period_ownKeys(Object(source), true).forEach(function (key) { create_period_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_period_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_period_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */



/** components */

const PeriodCreate = ({
  setData,
  data = {
    min: 0,
    max: 0
  }
}) => {
  console.log("data max", data.max);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "How long can guests stay?"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: [font_module_default.a["size--14"]].join(" "),
          children: "Short trips can mean more reservations, but you'll turn over your space more often."
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          width: 300
        },
        className: [space_module_default.a["m-t--22"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "counter",
            title: "nights min",
            min: 1,
            max: 100,
            value: data.min,
            subtract: () => setData(create_period_objectSpread(create_period_objectSpread({}, data), {}, {
              min: data.min - 1
            })),
            add: () => setData(create_period_objectSpread(create_period_objectSpread({}, data), {}, {
              min: data.min + 1
            }))
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--12"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "counter",
            title: "nights max",
            min: 1,
            max: 100,
            value: data.max,
            subtract: () => setData(create_period_objectSpread(create_period_objectSpread({}, data), {}, {
              max: data.max - 1
            })),
            add: () => setData(create_period_objectSpread(create_period_objectSpread({}, data), {}, {
              max: data.max + 1
            }))
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// CONCATENATED MODULE: ./components/prototype/create/create.price.tsx



function create_price_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_price_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_price_ownKeys(Object(source), true).forEach(function (key) { create_price_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_price_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_price_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** styles */




/** components */


const PriceCreate = ({
  setData,
  data = {
    basePrice: undefined,
    currency: "USD"
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--24"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Price your space"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--24"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Increase your chances of getting booked"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Set up Smart Pricing to automativally keep your nightly prices competitive as demand in your area changes."
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--24"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-r--4"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: [font_module_default.a["size--16"]].join(" "),
              children: "Set up the same base price for each night"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["p--3"], font_module_default.a["size--9"], color_module_default.a["bg--white__2"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "RECOMMENDED"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--11"]].join(" "),
            children: "A 14% guest service fee is added to every host's price--but sometimes the amount will vary, depending on the length of the trip."
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--12"], color_module_default.a["c--darkgreen__3"]].join(" "),
            children: "Learn what fees pay for"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["m-b--24"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Base price"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["size--13"]].join(" "),
            children: "This will be your default price."
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "price",
            title: "Base price",
            subtitle: "This will be your default price gor days when you decide to turn off Smart Pricing.",
            tip: 17,
            name: "basePrice",
            value: data.basePrice,
            handleChange: e => {
              const onlyNumbers = /^[0-9\b]+$/;

              if (e.target.value == "" || onlyNumbers.test(e.target.value)) {
                setData(create_price_objectSpread(create_price_objectSpread({}, data), {}, {
                  basePrice: e.target.value
                }));
              }
            }
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-v--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: [color_module_default.a["c--darkgreen__3"], font_module_default.a["size--16"]].join(" "),
            children: "Tip: $21"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--8"]].join(" "),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [font_module_default.a["size--14"]].join(" "),
            children: "Currency"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
            variant: "select",
            inputType: "currency"
          })
        })]
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.scenarios.tsx



/** styles */


const ScenariosCreate = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--45"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Based on your settings, here's what you could expect"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: ["available", "requirements", "confirmation", "welcome", "paid"].map((type, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["m-b--32"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bullet["a" /* Bullet */], {
              variant: "scenario",
              type: type
            })
          }, index);
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/prototype/create/create.photos.tsx



function create_photos_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_photos_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_photos_ownKeys(Object(source), true).forEach(function (key) { create_photos_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_photos_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_photos_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** styles */




/** components */


const PhotosCreate = ({
  data,
  setData
}) => {
  const {
    0: preview,
    1: setPreview
  } = Object(external_react_["useState"])([]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--12"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--28"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Liven up your listing with photos"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--45"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--14"], color_module_default.a["c--gray__2"]].join(" "),
        children: "Take photos using a phone or camera. Upload at least one photo to publish your listing\u2014you can always add more or edit later."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--30"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-b--8"]].join(" "),
        children: preview.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: preview[0]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              columnGap: 10
            },
            className: [space_module_default.a["m-t--16"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
                variant: "another",
                handleChange: e => {
                  setData(create_photos_objectSpread(create_photos_objectSpread({}, data), {}, {
                    photo: [...data.photos, e.target.files[0]]
                  }));
                  setPreview([...preview, URL.createObjectURL(e.target.files[0])]);
                }
              })
            })
          })]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          variant: "photo",
          handleChange: e => {
            setData(create_photos_objectSpread(create_photos_objectSpread({}, data), {}, {
              photos: [...data.photos, e.target.files[0]]
            }));
            setPreview([...preview, URL.createObjectURL(e.target.files[0])]);
          }
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/prototype/create/index.tsx


function create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_ownKeys(Object(source), true).forEach(function (key) { create_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** components */


















const Prototype = (_ref) => {
  let {
    variant = "getstarted"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  const variants = {
    getstarted: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GetStartedCreate, create_objectSpread({}, props)),
    room: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RoomCreate, create_objectSpread({}, props)),
    bedrooms: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BedroomsCreate, create_objectSpread({}, props)),
    bathrooms: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BathroomsCreate, create_objectSpread({}, props)),
    location: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationCreate, create_objectSpread({}, props)),
    amenities: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AmenitiesCreate, create_objectSpread({}, props)),
    spaces: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SpacesCreate, create_objectSpread({}, props)),
    description: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DescriptionCreate, create_objectSpread({}, props)),
    title: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TitleCreate, create_objectSpread({}, props)),
    phone: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhoneCreate, create_objectSpread({}, props)),
    requirements: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RequirementsCreate, create_objectSpread({}, props)),
    rules: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RulesCreate, create_objectSpread({}, props)),
    checkin: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckInCreate, create_objectSpread({}, props)),
    advance: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AdvanceCreate, create_objectSpread({}, props)),
    period: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PeriodCreate, create_objectSpread({}, props)),
    price: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PriceCreate, create_objectSpread({}, props)),
    scenarios: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScenariosCreate, create_objectSpread({}, props)),
    photos: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhotosCreate, create_objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-create-prototype`,
    children: variants[variant]
  });
};

/***/ }),

/***/ "lQQX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// CONCATENATED MODULE: ./components/layout/layout.input.tsx



/** styles **/



/**
 * Renders the Input which appears in the /become-a-host
 * @param {string} title - Title of the group
 */

const InputLayout = ({
  title = "Title here",
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--8"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--16"], color_module_default.a["c--gray__0"]].join(" "),
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: children
    })]
  });
};
// EXTERNAL MODULE: ./components/organisms/bar/index.tsx + 7 modules
var bar = __webpack_require__("xu40");

// EXTERNAL MODULE: ./components/organisms/header/index.tsx + 10 modules
var header = __webpack_require__("QYpW");

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/responsive.module.scss
var responsive_module = __webpack_require__("SFqS");
var responsive_module_default = /*#__PURE__*/__webpack_require__.n(responsive_module);

// CONCATENATED MODULE: ./components/layout/layout.create.tsx



/** components */


/** styles **/




const CreateLayout = ({
  title = "Property and guests",
  left,
  right,
  next,
  back,
  criteria = false,
  percentage
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "sticky",
        zIndex: 9999,
        top: 0
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(header["a" /* Header */], {
          variant: "stay",
          title: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bar["a" /* Bar */], {
          variant: "progress",
          percentage: percentage
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"]].join(" "),
      style: {
        overflowY: "auto",
        minHeight: "calc(100vh - 75px)"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [responsive_module_default.a["w100p_to_55p--xs"], layout_module_default.a["flex"], layout_module_default.a["justify-end"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [responsive_module_default.a["full_to_maxw550--xs"]].join(" "),
          style: {
            paddingBottom: 100
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: [space_module_default.a["p-t--64"], space_module_default.a["p-h--32"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                zIndex: 1
              },
              children: left
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [responsive_module_default.a["maxw100p_to_55p--xs"], responsive_module_default.a["justify--center_to_end--xs"]].join(" "),
          style: {
            backgroundColor: "white",
            width: "100%",
            position: "fixed",
            bottom: 0,
            zIndex: 60,
            display: "flex"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              width: "100%",
              maxWidth: 550
            },
            className: [space_module_default.a["p-h--32"]].join(" "),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bar["a" /* Bar */], {
              variant: "create",
              next: next,
              back: back,
              criteria: criteria
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [responsive_module_default.a["n_to_b--xs"]].join(" "),
        style: {
          width: "45%",
          backgroundColor: "#FAFAFA"
        },
        children: right
      })]
    })]
  });
};
// CONCATENATED MODULE: ./components/layout/section/layout.homes.tsx



/** styles */


const HomesLayout = ({
  title = "Title here",
  children,
  spread = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [space_module_default.a["p-v--32"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: [space_module_default.a["m-b--32"]].join(" "),
          children: title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: `${[font_module_default.a["size--40"]].join(" ")} `,
            children: title
          })
        }), children]
      })
    })
  });
};
// EXTERNAL MODULE: ./styles/index.module.scss
var index_module = __webpack_require__("d/HE");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./components/layout/section/layout.landing.tsx



/** styles */




const LandingLayout = ({
  title,
  subtitle,
  children,
  dark = false,
  spread = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${[space_module_default.a["p-v--25"], index_module_default.a["p__category"]].join(" ")} ${dark ? [color_module_default.a["bg--black"]].join() : [].join()}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${spread ? [layout_module_default.a["container--spread"]].join(" ") : [layout_module_default.a["container"]].join(" ")}  ${dark ? [color_module_default.a["bg--black"]].join(" ") : [].join(" ")}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [space_module_default.a["p-v--16"]].join(" "),
        children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: `${[layout_module_default.a["font__section--title"]].join(" ")} ${dark ? [color_module_default.a["c--white"]].join(" ") : [].join(" ")}`,
          children: title
        }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: 450
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: `${[layout_module_default.a["font__section--subtitle"]].join(" ")} ${dark ? [color_module_default.a["c--white"]].join(" ") : [].join(" ")}`,
            children: subtitle
          })
        })]
      }), children]
    })
  });
};
// CONCATENATED MODULE: ./components/layout/section/layout.onlinehost.tsx



/** styles */




const OnlineHostLayout = ({
  title,
  subtitle,
  children,
  dark = false,
  spread = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [responsive_module_default.a["b_to_f--sm"], layout_module_default.a["flex-col"], layout_module_default.a["items-center"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [responsive_module_default.a["b_to_f--sm"], layout_module_default.a["flex-col"], layout_module_default.a["items-center"], space_module_default.a["p-v--16"]].join(" "),
      children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: `${[layout_module_default.a["font__onlinehost--title"]].join(" ")} ${dark ? [color_module_default.a["c--white"]].join(" ") : [].join(" ")}`,
          children: title
        })
      }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-t--16"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: `${[layout_module_default.a["font__onlinehost--subtitle"]].join(" ")} ${dark ? [color_module_default.a["c--white"]].join(" ") : [].join(" ")}`,
          children: subtitle
        })
      })]
    }), children]
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// CONCATENATED MODULE: ./components/layout/layout.currency.tsx



/** components */


/** styles */






/**
 * Layout for Currency modal
 * @param {Object[]} items - Currency type
 * @param {string} title - Title of the Template
 */

const CurrencyLayout = ({
  items = [],
  title = "Title here"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-b--18"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: [font_module_default.a["size--20"]].join(" "),
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: 15,
        rowGap: 15,
        padding: 10
      },
      children: items === null || items === void 0 ? void 0 : items.map(({
        name,
        abbreviation,
        symbol
      }, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            extendsTo: [font_module_default.a["text--left"]].join(" "),
            block: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: [space_module_default.a["p--12"], shape_module_default.a["br--8"], animation_module_default.a["hover-background--white__1"]].join(" "),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: [font_module_default.a["size--14"], color_module_default.a["c--black"]].join(" "),
                  children: name
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                  className: [font_module_default.a["size--14"], color_module_default.a["c--gray__1"]].join(" "),
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: abbreviation
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: " - "
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: symbol
                  })]
                })
              })]
            })
          })
        }, index);
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/layout/modal/layout.location.tsx



/** styles */




const LocationLayout = ({
  title = "Recent Searches",
  content = /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: "Content here"
  })
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-v--8"], space_module_default.a["m-h--25"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: [font_module_default.a["size--10"], font_module_default.a["uppercase"], color_module_default.a["c--gray__3"]].join(" "),
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: content
    })]
  });
};
// CONCATENATED MODULE: ./components/layout/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** layouts */








/**
 * Bundles the Layout components
 * @param {string} extendsTo - Customize the component wrapper
 * @param {string} variant - Specify the variant of the component
 */
const Layout = (_ref) => {
  let {
    extendsTo,
    variant = "input"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["extendsTo", "variant"]);

  const variants = {
    input: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputLayout, _objectSpread({}, props)),
    create: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateLayout, _objectSpread({}, props)),
    homes: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HomesLayout, _objectSpread({}, props)),
    landing: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingLayout, _objectSpread({}, props)),
    onlinehost: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OnlineHostLayout, _objectSpread({}, props)),
    currency: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencyLayout, _objectSpread({}, props)),
    location: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationLayout, _objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: extendsTo,
    "data-testid": `${variant}-layout`,
    children: variants[variant]
  });
};

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

/***/ "qV2M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ APIClient; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./config/index.ts
const config = {
  HOST: true ? "www.nextbnb.dev" : undefined,
  SERVER_BASEURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
  CLIENT_BASEURL: "/"
};
// CONCATENATED MODULE: ./api/client.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const APIClient = context => {
  if (true) {
    return external_axios_default.a.create({
      baseURL: config.SERVER_BASEURL,
      headers: _objectSpread(_objectSpread({}, context.req.headers), {}, {
        Host: config.HOST
      })
    });
  } else {}
};

/***/ }),

/***/ "s6mq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ checkEmail; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ checkPassword; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ validateAuth; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ validateSignup; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ validateLogin; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ validateExists; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ validateForgotPassword; });

// CONCATENATED MODULE: ./helper/regex.ts
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// CONCATENATED MODULE: ./helper/auth.ts

const checkEmail = value => {
  const re = emailRegex;
  return re.test(String(value).toLowerCase());
};
const checkPassword = value => {
  if (value && value.length && value.length > 8) {
    return true;
  }

  return false;
};
const validateAuth = values => {
  const errors = {};

  if (!values.phone) {
    errors.phone = 'Phone number is required';
  }

  if (!values.region) {
    errors.region = 'Region is required';
  }

  return errors;
};
const validateSignup = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }

  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }

  if (!values.lastname) {
    errors.lastname = 'Last name is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (parseInt(values.year) > 2002) {
    errors.year = 'You must be older that 18';
  }

  return errors;
};
const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
const validateExists = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
const validateForgotPassword = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }

  return errors;
};

/***/ }),

/***/ "tonS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Animation; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/animation/animation.module.scss
var animation_module = __webpack_require__("zppD");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// CONCATENATED MODULE: ./components/animation/animation.loading.tsx



/** styles */



/**
 * Renders the loading animation
 */

const LoadingAnimation = ({
  dark
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [animation_module_default.a["circle__wrapper"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `${[animation_module_default.a["circle__content"], animation_module_default.a["circle__1"]].join(" ")} ${dark ? color_module_default.a["bg--black"] : color_module_default.a["bg--white"]}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `${[animation_module_default.a["circle__content"], animation_module_default.a["circle__2"]].join(" ")} ${dark ? color_module_default.a["bg--black"] : color_module_default.a["bg--white"]}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `${[animation_module_default.a["circle__content"], animation_module_default.a["circle__3"]].join(" ")} ${dark ? color_module_default.a["bg--black"] : color_module_default.a["bg--white"]}`
    })]
  });
};
// CONCATENATED MODULE: ./components/animation/animation.component.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/** components */



/**
 * Bundles the animation components
 * @param {string} type - Specifies the type of animation component
 */
const Animation = (_ref) => {
  let {
    type = "loading",
    extendsTo
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "extendsTo"]);

  const types = {
    loading: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoadingAnimation, _objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": "animation",
    className: extendsTo,
    children: types[type]
  });
};

/***/ }),

/***/ "u7m8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"m--0": "space_m--0__3yYyq",
	"m-h--0": "space_m-h--0__CIWWh",
	"m-v--0": "space_m-v--0__2HS-O",
	"p--0": "space_p--0__2B-D_",
	"p-h--0": "space_p-h--0__1sskP",
	"p-v--0": "space_p-v--0__KO76A",
	"nf-m--0": "space_nf-m--0__3XOmt",
	"nf-p--0": "space_nf-p--0__1J0qJ",
	"nf-m-t--0": "space_nf-m-t--0__tR7lJ",
	"nf-p-t--0": "space_nf-p-t--0__SJnKR",
	"m-t--0": "space_m-t--0__CYge0",
	"p-t--0": "space_p-t--0__3mAm7",
	"m-t--0--sm": "space_m-t--0--sm__2VOWN",
	"m-t--0--sm-": "space_m-t--0--sm-__3MoKY",
	"p-t--0--sm": "space_p-t--0--sm__eajFn",
	"p-t--0--sm-": "space_p-t--0--sm-__1j7qA",
	"m-t--0--md": "space_m-t--0--md__2bDJk",
	"m-t--0--md-": "space_m-t--0--md-__2SQle",
	"p-t--0--md": "space_p-t--0--md__2rBG9",
	"p-t--0--md-": "space_p-t--0--md-__Y-wZg",
	"m-t--0--lg": "space_m-t--0--lg__2Qd6W",
	"m-t--0--lg-": "space_m-t--0--lg-__jUas4",
	"p-t--0--lg": "space_p-t--0--lg__34B_R",
	"p-t--0--lg-": "space_p-t--0--lg-__1G9sa",
	"nf-m-b--0": "space_nf-m-b--0__3TR8Q",
	"nf-p-b--0": "space_nf-p-b--0__6rnW2",
	"m-b--0": "space_m-b--0__2U10i",
	"p-b--0": "space_p-b--0__1YPgw",
	"m-b--0--sm": "space_m-b--0--sm__Jkdon",
	"m-b--0--sm-": "space_m-b--0--sm-__2LEQc",
	"p-b--0--sm": "space_p-b--0--sm__1V2hE",
	"p-b--0--sm-": "space_p-b--0--sm-__34TQ6",
	"m-b--0--md": "space_m-b--0--md__2OYBA",
	"m-b--0--md-": "space_m-b--0--md-__39iao",
	"p-b--0--md": "space_p-b--0--md__1TXck",
	"p-b--0--md-": "space_p-b--0--md-__eJdGY",
	"m-b--0--lg": "space_m-b--0--lg__29NxM",
	"m-b--0--lg-": "space_m-b--0--lg-__2Yn1-",
	"p-b--0--lg": "space_p-b--0--lg__297nf",
	"p-b--0--lg-": "space_p-b--0--lg-__37a4V",
	"nf-m-l--0": "space_nf-m-l--0__2EUjL",
	"nf-p-l--0": "space_nf-p-l--0__2sRQI",
	"m-l--0": "space_m-l--0__2SX1A",
	"p-l--0": "space_p-l--0__7VRuS",
	"m-l--0--sm": "space_m-l--0--sm__2mLv8",
	"m-l--0--sm-": "space_m-l--0--sm-__2u7d7",
	"p-l--0--sm": "space_p-l--0--sm__3lZzu",
	"p-l--0--sm-": "space_p-l--0--sm-__35uwX",
	"m-l--0--md": "space_m-l--0--md__28UAS",
	"m-l--0--md-": "space_m-l--0--md-__1zQY3",
	"p-l--0--md": "space_p-l--0--md__2qKMp",
	"p-l--0--md-": "space_p-l--0--md-__1UUQP",
	"m-l--0--lg": "space_m-l--0--lg__11FyK",
	"m-l--0--lg-": "space_m-l--0--lg-__3wySA",
	"p-l--0--lg": "space_p-l--0--lg__3Qmku",
	"p-l--0--lg-": "space_p-l--0--lg-__1cML6",
	"nf-m-r--0": "space_nf-m-r--0__11kah",
	"nf-p-r--0": "space_nf-p-r--0__LQOAd",
	"m-r--0": "space_m-r--0__lzXpM",
	"p-r--0": "space_p-r--0__1LoTN",
	"m-r--0--sm": "space_m-r--0--sm__2u2op",
	"m-r--0--sm-": "space_m-r--0--sm-__2z7Es",
	"p-r--0--sm": "space_p-r--0--sm__1vKPp",
	"p-r--0--sm-": "space_p-r--0--sm-__NrWtf",
	"m-r--0--md": "space_m-r--0--md__3kDxF",
	"m-r--0--md-": "space_m-r--0--md-__XBwR2",
	"p-r--0--md": "space_p-r--0--md__3qNdQ",
	"p-r--0--md-": "space_p-r--0--md-__dRhdN",
	"m-r--0--lg": "space_m-r--0--lg__2wLy7",
	"m-r--0--lg-": "space_m-r--0--lg-__24puu",
	"p-r--0--lg": "space_p-r--0--lg__1EqjM",
	"p-r--0--lg-": "space_p-r--0--lg-__2n6Go",
	"m--3": "space_m--3__3hbLc",
	"m-h--3": "space_m-h--3__2PZ_5",
	"m-v--3": "space_m-v--3__1hp2Z",
	"p--3": "space_p--3__Lb3cy",
	"p-h--3": "space_p-h--3__31sZA",
	"p-v--3": "space_p-v--3__1PG5Q",
	"nf-m--3": "space_nf-m--3__2KRz8",
	"nf-p--3": "space_nf-p--3__kjQxg",
	"nf-m-t--3": "space_nf-m-t--3__3OGXb",
	"nf-p-t--3": "space_nf-p-t--3__359No",
	"m-t--3": "space_m-t--3__1fLiv",
	"p-t--3": "space_p-t--3__1-OeH",
	"m-t--3--sm": "space_m-t--3--sm__3A_eA",
	"m-t--3--sm-": "space_m-t--3--sm-__2oYqx",
	"p-t--3--sm": "space_p-t--3--sm__13m6B",
	"p-t--3--sm-": "space_p-t--3--sm-__2XQ7V",
	"m-t--3--md": "space_m-t--3--md__2oL2P",
	"m-t--3--md-": "space_m-t--3--md-__MmJJT",
	"p-t--3--md": "space_p-t--3--md__O4ob9",
	"p-t--3--md-": "space_p-t--3--md-__2Ki1B",
	"m-t--3--lg": "space_m-t--3--lg__3ndaf",
	"m-t--3--lg-": "space_m-t--3--lg-__3HMb3",
	"p-t--3--lg": "space_p-t--3--lg__1-NTH",
	"p-t--3--lg-": "space_p-t--3--lg-__1VLX9",
	"nf-m-b--3": "space_nf-m-b--3__G8f2S",
	"nf-p-b--3": "space_nf-p-b--3__1vzJR",
	"m-b--3": "space_m-b--3__1X1n-",
	"p-b--3": "space_p-b--3__3t84F",
	"m-b--3--sm": "space_m-b--3--sm__1ASJp",
	"m-b--3--sm-": "space_m-b--3--sm-__43EL8",
	"p-b--3--sm": "space_p-b--3--sm__3hIG3",
	"p-b--3--sm-": "space_p-b--3--sm-__8-ZVH",
	"m-b--3--md": "space_m-b--3--md__26goK",
	"m-b--3--md-": "space_m-b--3--md-__1bHhd",
	"p-b--3--md": "space_p-b--3--md__3P27n",
	"p-b--3--md-": "space_p-b--3--md-__OGgK0",
	"m-b--3--lg": "space_m-b--3--lg__17yDt",
	"m-b--3--lg-": "space_m-b--3--lg-__jQTuX",
	"p-b--3--lg": "space_p-b--3--lg__xh_04",
	"p-b--3--lg-": "space_p-b--3--lg-__yphhH",
	"nf-m-l--3": "space_nf-m-l--3__3jpFM",
	"nf-p-l--3": "space_nf-p-l--3__2KQ_V",
	"m-l--3": "space_m-l--3__P55vm",
	"p-l--3": "space_p-l--3__3vnxw",
	"m-l--3--sm": "space_m-l--3--sm__2iOUJ",
	"m-l--3--sm-": "space_m-l--3--sm-__1BdLG",
	"p-l--3--sm": "space_p-l--3--sm__2e-Ox",
	"p-l--3--sm-": "space_p-l--3--sm-__x80Zj",
	"m-l--3--md": "space_m-l--3--md__2_r9j",
	"m-l--3--md-": "space_m-l--3--md-__Uz6bu",
	"p-l--3--md": "space_p-l--3--md__sDHcv",
	"p-l--3--md-": "space_p-l--3--md-__3-80O",
	"m-l--3--lg": "space_m-l--3--lg__1b0FQ",
	"m-l--3--lg-": "space_m-l--3--lg-__ofnQi",
	"p-l--3--lg": "space_p-l--3--lg__1WJ_Y",
	"p-l--3--lg-": "space_p-l--3--lg-__qM8zI",
	"nf-m-r--3": "space_nf-m-r--3__2y3-y",
	"nf-p-r--3": "space_nf-p-r--3__1kvQ6",
	"m-r--3": "space_m-r--3__qf_IY",
	"p-r--3": "space_p-r--3__2NBOs",
	"m-r--3--sm": "space_m-r--3--sm__3K9uK",
	"m-r--3--sm-": "space_m-r--3--sm-__2gSDo",
	"p-r--3--sm": "space_p-r--3--sm__3DNNM",
	"p-r--3--sm-": "space_p-r--3--sm-__1rp1s",
	"m-r--3--md": "space_m-r--3--md__2TmIf",
	"m-r--3--md-": "space_m-r--3--md-__1ZMkV",
	"p-r--3--md": "space_p-r--3--md__84PzW",
	"p-r--3--md-": "space_p-r--3--md-__ARyRu",
	"m-r--3--lg": "space_m-r--3--lg__37XAo",
	"m-r--3--lg-": "space_m-r--3--lg-__3FTIb",
	"p-r--3--lg": "space_p-r--3--lg__HNnLH",
	"p-r--3--lg-": "space_p-r--3--lg-__3ObT9",
	"m--4": "space_m--4__2RQT-",
	"m-h--4": "space_m-h--4__1YDVZ",
	"m-v--4": "space_m-v--4__2vEzC",
	"p--4": "space_p--4__2OWnd",
	"p-h--4": "space_p-h--4__2-mgU",
	"p-v--4": "space_p-v--4__mli_B",
	"nf-m--4": "space_nf-m--4__1LVjn",
	"nf-p--4": "space_nf-p--4__2-ZdO",
	"nf-m-t--4": "space_nf-m-t--4__2JOxc",
	"nf-p-t--4": "space_nf-p-t--4__HHbcB",
	"m-t--4": "space_m-t--4__2J7Wl",
	"p-t--4": "space_p-t--4__119QO",
	"m-t--4--sm": "space_m-t--4--sm__2EXiq",
	"m-t--4--sm-": "space_m-t--4--sm-__2iXfK",
	"p-t--4--sm": "space_p-t--4--sm__Y_caq",
	"p-t--4--sm-": "space_p-t--4--sm-__xCmrH",
	"m-t--4--md": "space_m-t--4--md__1C9ey",
	"m-t--4--md-": "space_m-t--4--md-__2uwm1",
	"p-t--4--md": "space_p-t--4--md__2oNiq",
	"p-t--4--md-": "space_p-t--4--md-__10Na2",
	"m-t--4--lg": "space_m-t--4--lg__3l6n5",
	"m-t--4--lg-": "space_m-t--4--lg-__1iImm",
	"p-t--4--lg": "space_p-t--4--lg__3Uwji",
	"p-t--4--lg-": "space_p-t--4--lg-__cDGfR",
	"nf-m-b--4": "space_nf-m-b--4__1WJjF",
	"nf-p-b--4": "space_nf-p-b--4__1Sd7v",
	"m-b--4": "space_m-b--4__3B0sS",
	"p-b--4": "space_p-b--4__2rpsa",
	"m-b--4--sm": "space_m-b--4--sm__1RUNY",
	"m-b--4--sm-": "space_m-b--4--sm-__3H4wF",
	"p-b--4--sm": "space_p-b--4--sm__1q3sr",
	"p-b--4--sm-": "space_p-b--4--sm-__tp9U-",
	"m-b--4--md": "space_m-b--4--md__2cRlU",
	"m-b--4--md-": "space_m-b--4--md-___XTn3",
	"p-b--4--md": "space_p-b--4--md__33f73",
	"p-b--4--md-": "space_p-b--4--md-__1smE6",
	"m-b--4--lg": "space_m-b--4--lg__NCRyq",
	"m-b--4--lg-": "space_m-b--4--lg-__1uro6",
	"p-b--4--lg": "space_p-b--4--lg__4yY4w",
	"p-b--4--lg-": "space_p-b--4--lg-__16d9e",
	"nf-m-l--4": "space_nf-m-l--4__1I0p3",
	"nf-p-l--4": "space_nf-p-l--4__2RRHX",
	"m-l--4": "space_m-l--4__2eT2k",
	"p-l--4": "space_p-l--4__1xNo7",
	"m-l--4--sm": "space_m-l--4--sm__N4XA4",
	"m-l--4--sm-": "space_m-l--4--sm-__2BQtO",
	"p-l--4--sm": "space_p-l--4--sm__1Qp5v",
	"p-l--4--sm-": "space_p-l--4--sm-__wVMnL",
	"m-l--4--md": "space_m-l--4--md__3ATtY",
	"m-l--4--md-": "space_m-l--4--md-__2QYxd",
	"p-l--4--md": "space_p-l--4--md__ZjLmc",
	"p-l--4--md-": "space_p-l--4--md-__b0ISx",
	"m-l--4--lg": "space_m-l--4--lg__e55zA",
	"m-l--4--lg-": "space_m-l--4--lg-__CEGHO",
	"p-l--4--lg": "space_p-l--4--lg__1nXNe",
	"p-l--4--lg-": "space_p-l--4--lg-__2r7-i",
	"nf-m-r--4": "space_nf-m-r--4__2eAgU",
	"nf-p-r--4": "space_nf-p-r--4__3eIep",
	"m-r--4": "space_m-r--4__146N3",
	"p-r--4": "space_p-r--4__1UpUd",
	"m-r--4--sm": "space_m-r--4--sm__bMMCN",
	"m-r--4--sm-": "space_m-r--4--sm-__2pF_i",
	"p-r--4--sm": "space_p-r--4--sm__3jnyu",
	"p-r--4--sm-": "space_p-r--4--sm-__z2P0u",
	"m-r--4--md": "space_m-r--4--md__1Iphu",
	"m-r--4--md-": "space_m-r--4--md-__GJ0Gm",
	"p-r--4--md": "space_p-r--4--md__2yTW_",
	"p-r--4--md-": "space_p-r--4--md-__VYkG1",
	"m-r--4--lg": "space_m-r--4--lg__qrIjO",
	"m-r--4--lg-": "space_m-r--4--lg-__3IrQF",
	"p-r--4--lg": "space_p-r--4--lg__3yu8E",
	"p-r--4--lg-": "space_p-r--4--lg-__vBNNj",
	"m--5": "space_m--5__p2aqK",
	"m-h--5": "space_m-h--5__21gyn",
	"m-v--5": "space_m-v--5__2zZeZ",
	"p--5": "space_p--5__esfz5",
	"p-h--5": "space_p-h--5__3Ptvp",
	"p-v--5": "space_p-v--5__14FCE",
	"nf-m--5": "space_nf-m--5__qAt_F",
	"nf-p--5": "space_nf-p--5__3n2rO",
	"nf-m-t--5": "space_nf-m-t--5__3ayBL",
	"nf-p-t--5": "space_nf-p-t--5__2Tbav",
	"m-t--5": "space_m-t--5__3fmRB",
	"p-t--5": "space_p-t--5__1H4MG",
	"m-t--5--sm": "space_m-t--5--sm__3HxDn",
	"m-t--5--sm-": "space_m-t--5--sm-__DxZ3n",
	"p-t--5--sm": "space_p-t--5--sm__1yjrM",
	"p-t--5--sm-": "space_p-t--5--sm-__ugApe",
	"m-t--5--md": "space_m-t--5--md__3SgP-",
	"m-t--5--md-": "space_m-t--5--md-__3rBOk",
	"p-t--5--md": "space_p-t--5--md__U8DGV",
	"p-t--5--md-": "space_p-t--5--md-__2-l75",
	"m-t--5--lg": "space_m-t--5--lg__14F13",
	"m-t--5--lg-": "space_m-t--5--lg-__2epIb",
	"p-t--5--lg": "space_p-t--5--lg__1Bazk",
	"p-t--5--lg-": "space_p-t--5--lg-__25GNi",
	"nf-m-b--5": "space_nf-m-b--5__3_-OB",
	"nf-p-b--5": "space_nf-p-b--5__hGAo1",
	"m-b--5": "space_m-b--5__vT99V",
	"p-b--5": "space_p-b--5__1r00Q",
	"m-b--5--sm": "space_m-b--5--sm__37Ho9",
	"m-b--5--sm-": "space_m-b--5--sm-__25NCt",
	"p-b--5--sm": "space_p-b--5--sm__16amo",
	"p-b--5--sm-": "space_p-b--5--sm-__3cGmy",
	"m-b--5--md": "space_m-b--5--md__289PD",
	"m-b--5--md-": "space_m-b--5--md-__2Of8r",
	"p-b--5--md": "space_p-b--5--md__8ptoP",
	"p-b--5--md-": "space_p-b--5--md-__1BZ4U",
	"m-b--5--lg": "space_m-b--5--lg__1Psnl",
	"m-b--5--lg-": "space_m-b--5--lg-__RE7kf",
	"p-b--5--lg": "space_p-b--5--lg__2ARq3",
	"p-b--5--lg-": "space_p-b--5--lg-__1yEfI",
	"nf-m-l--5": "space_nf-m-l--5__2UGnj",
	"nf-p-l--5": "space_nf-p-l--5__21qkE",
	"m-l--5": "space_m-l--5__21WFv",
	"p-l--5": "space_p-l--5__2yGfh",
	"m-l--5--sm": "space_m-l--5--sm__3j_zJ",
	"m-l--5--sm-": "space_m-l--5--sm-__3-ES0",
	"p-l--5--sm": "space_p-l--5--sm__1XMGh",
	"p-l--5--sm-": "space_p-l--5--sm-__3tcMz",
	"m-l--5--md": "space_m-l--5--md__1rkQK",
	"m-l--5--md-": "space_m-l--5--md-__2otZW",
	"p-l--5--md": "space_p-l--5--md__23YGU",
	"p-l--5--md-": "space_p-l--5--md-__1ViDQ",
	"m-l--5--lg": "space_m-l--5--lg__2H9Pm",
	"m-l--5--lg-": "space_m-l--5--lg-__3ij1L",
	"p-l--5--lg": "space_p-l--5--lg__1Oi0r",
	"p-l--5--lg-": "space_p-l--5--lg-__1HpNF",
	"nf-m-r--5": "space_nf-m-r--5__31rQn",
	"nf-p-r--5": "space_nf-p-r--5__3OHUO",
	"m-r--5": "space_m-r--5__3r3QZ",
	"p-r--5": "space_p-r--5__2ZTIE",
	"m-r--5--sm": "space_m-r--5--sm__3Q-0r",
	"m-r--5--sm-": "space_m-r--5--sm-__BY7iQ",
	"p-r--5--sm": "space_p-r--5--sm__3-Rb-",
	"p-r--5--sm-": "space_p-r--5--sm-__2ghrl",
	"m-r--5--md": "space_m-r--5--md__Abi_Y",
	"m-r--5--md-": "space_m-r--5--md-__3Sk7h",
	"p-r--5--md": "space_p-r--5--md__2H2f0",
	"p-r--5--md-": "space_p-r--5--md-__11V-9",
	"m-r--5--lg": "space_m-r--5--lg__1YmZu",
	"m-r--5--lg-": "space_m-r--5--lg-__18_Id",
	"p-r--5--lg": "space_p-r--5--lg__1XwvB",
	"p-r--5--lg-": "space_p-r--5--lg-__jcwha",
	"m--6": "space_m--6__TtA37",
	"m-h--6": "space_m-h--6__2A94N",
	"m-v--6": "space_m-v--6__2l9ss",
	"p--6": "space_p--6__2YlmG",
	"p-h--6": "space_p-h--6__H6oK8",
	"p-v--6": "space_p-v--6__3aBiO",
	"nf-m--6": "space_nf-m--6__33LG1",
	"nf-p--6": "space_nf-p--6__3gLTA",
	"nf-m-t--6": "space_nf-m-t--6__1UwJF",
	"nf-p-t--6": "space_nf-p-t--6__3o3Zx",
	"m-t--6": "space_m-t--6__4rQPa",
	"p-t--6": "space_p-t--6__3-Aee",
	"m-t--6--sm": "space_m-t--6--sm__EyWQv",
	"m-t--6--sm-": "space_m-t--6--sm-__3MdO7",
	"p-t--6--sm": "space_p-t--6--sm__2uELd",
	"p-t--6--sm-": "space_p-t--6--sm-__RK_8d",
	"m-t--6--md": "space_m-t--6--md__gb0Oa",
	"m-t--6--md-": "space_m-t--6--md-__9QD1x",
	"p-t--6--md": "space_p-t--6--md__13gz3",
	"p-t--6--md-": "space_p-t--6--md-__38zN5",
	"m-t--6--lg": "space_m-t--6--lg__2ocoM",
	"m-t--6--lg-": "space_m-t--6--lg-__QnO4E",
	"p-t--6--lg": "space_p-t--6--lg__37-23",
	"p-t--6--lg-": "space_p-t--6--lg-__3EJJo",
	"nf-m-b--6": "space_nf-m-b--6__2aKBw",
	"nf-p-b--6": "space_nf-p-b--6__pgUG-",
	"m-b--6": "space_m-b--6__1UAol",
	"p-b--6": "space_p-b--6__1PMIo",
	"m-b--6--sm": "space_m-b--6--sm__105Mb",
	"m-b--6--sm-": "space_m-b--6--sm-__1-997",
	"p-b--6--sm": "space_p-b--6--sm__2WtuS",
	"p-b--6--sm-": "space_p-b--6--sm-__2F_Np",
	"m-b--6--md": "space_m-b--6--md__3yJ8Z",
	"m-b--6--md-": "space_m-b--6--md-__RZHLV",
	"p-b--6--md": "space_p-b--6--md__2ecTi",
	"p-b--6--md-": "space_p-b--6--md-__9FUJw",
	"m-b--6--lg": "space_m-b--6--lg__2GALJ",
	"m-b--6--lg-": "space_m-b--6--lg-__2WlRM",
	"p-b--6--lg": "space_p-b--6--lg__2eWxV",
	"p-b--6--lg-": "space_p-b--6--lg-__1VN1r",
	"nf-m-l--6": "space_nf-m-l--6__30mKJ",
	"nf-p-l--6": "space_nf-p-l--6__2is1p",
	"m-l--6": "space_m-l--6__2H9_8",
	"p-l--6": "space_p-l--6__15_JW",
	"m-l--6--sm": "space_m-l--6--sm__1ofHY",
	"m-l--6--sm-": "space_m-l--6--sm-__3Ontx",
	"p-l--6--sm": "space_p-l--6--sm__2WO2w",
	"p-l--6--sm-": "space_p-l--6--sm-__2zlp_",
	"m-l--6--md": "space_m-l--6--md__W5pkW",
	"m-l--6--md-": "space_m-l--6--md-__32dOs",
	"p-l--6--md": "space_p-l--6--md__qzZm6",
	"p-l--6--md-": "space_p-l--6--md-__21ssd",
	"m-l--6--lg": "space_m-l--6--lg__1nlrZ",
	"m-l--6--lg-": "space_m-l--6--lg-__s62XI",
	"p-l--6--lg": "space_p-l--6--lg__142hx",
	"p-l--6--lg-": "space_p-l--6--lg-__36Xaz",
	"nf-m-r--6": "space_nf-m-r--6__1_Grn",
	"nf-p-r--6": "space_nf-p-r--6__1-eoy",
	"m-r--6": "space_m-r--6__3WaS1",
	"p-r--6": "space_p-r--6__1kNN0",
	"m-r--6--sm": "space_m-r--6--sm__2zOI0",
	"m-r--6--sm-": "space_m-r--6--sm-__55h9x",
	"p-r--6--sm": "space_p-r--6--sm__3kA5V",
	"p-r--6--sm-": "space_p-r--6--sm-__XqoNG",
	"m-r--6--md": "space_m-r--6--md__31SqN",
	"m-r--6--md-": "space_m-r--6--md-__1FdYU",
	"p-r--6--md": "space_p-r--6--md__3cHkm",
	"p-r--6--md-": "space_p-r--6--md-__3O-qG",
	"m-r--6--lg": "space_m-r--6--lg__1B-no",
	"m-r--6--lg-": "space_m-r--6--lg-__lgX3a",
	"p-r--6--lg": "space_p-r--6--lg__2PDCg",
	"p-r--6--lg-": "space_p-r--6--lg-__3c4MR",
	"m--8": "space_m--8__1kMLP",
	"m-h--8": "space_m-h--8__2O2Qm",
	"m-v--8": "space_m-v--8__nVmDP",
	"p--8": "space_p--8__2ON2Q",
	"p-h--8": "space_p-h--8__3Xhx0",
	"p-v--8": "space_p-v--8__2BXPi",
	"nf-m--8": "space_nf-m--8__12IC9",
	"nf-p--8": "space_nf-p--8__22aMK",
	"nf-m-t--8": "space_nf-m-t--8__3kV3G",
	"nf-p-t--8": "space_nf-p-t--8__1QPGc",
	"m-t--8": "space_m-t--8__Nkkk1",
	"p-t--8": "space_p-t--8__2sBU-",
	"m-t--8--sm": "space_m-t--8--sm__2bq-8",
	"m-t--8--sm-": "space_m-t--8--sm-__Ib5PV",
	"p-t--8--sm": "space_p-t--8--sm__3CJx3",
	"p-t--8--sm-": "space_p-t--8--sm-__2n1mk",
	"m-t--8--md": "space_m-t--8--md__1Er52",
	"m-t--8--md-": "space_m-t--8--md-__3BV9I",
	"p-t--8--md": "space_p-t--8--md__3b2vm",
	"p-t--8--md-": "space_p-t--8--md-__VCc_l",
	"m-t--8--lg": "space_m-t--8--lg__3rCQf",
	"m-t--8--lg-": "space_m-t--8--lg-__1NcAE",
	"p-t--8--lg": "space_p-t--8--lg__3Winp",
	"p-t--8--lg-": "space_p-t--8--lg-__1TCv0",
	"nf-m-b--8": "space_nf-m-b--8__1cgKc",
	"nf-p-b--8": "space_nf-p-b--8__1A6IV",
	"m-b--8": "space_m-b--8__yU9zl",
	"p-b--8": "space_p-b--8__6mqgu",
	"m-b--8--sm": "space_m-b--8--sm__2v3eq",
	"m-b--8--sm-": "space_m-b--8--sm-__3gkvk",
	"p-b--8--sm": "space_p-b--8--sm__3nyqY",
	"p-b--8--sm-": "space_p-b--8--sm-__3uzkC",
	"m-b--8--md": "space_m-b--8--md__2F_Mm",
	"m-b--8--md-": "space_m-b--8--md-__24qF8",
	"p-b--8--md": "space_p-b--8--md__W7iME",
	"p-b--8--md-": "space_p-b--8--md-__3UQ0q",
	"m-b--8--lg": "space_m-b--8--lg__1ydWa",
	"m-b--8--lg-": "space_m-b--8--lg-__bUEd7",
	"p-b--8--lg": "space_p-b--8--lg__3XWiS",
	"p-b--8--lg-": "space_p-b--8--lg-__wSm2K",
	"nf-m-l--8": "space_nf-m-l--8__LBbmU",
	"nf-p-l--8": "space_nf-p-l--8__1vkaW",
	"m-l--8": "space_m-l--8__10_XU",
	"p-l--8": "space_p-l--8__2DB0s",
	"m-l--8--sm": "space_m-l--8--sm__1IQfI",
	"m-l--8--sm-": "space_m-l--8--sm-__3nYz1",
	"p-l--8--sm": "space_p-l--8--sm__2gO8g",
	"p-l--8--sm-": "space_p-l--8--sm-__fTs1Q",
	"m-l--8--md": "space_m-l--8--md__QigUa",
	"m-l--8--md-": "space_m-l--8--md-__2CUzh",
	"p-l--8--md": "space_p-l--8--md__1wKc6",
	"p-l--8--md-": "space_p-l--8--md-__Sb_sQ",
	"m-l--8--lg": "space_m-l--8--lg__uxdbJ",
	"m-l--8--lg-": "space_m-l--8--lg-__2qbJD",
	"p-l--8--lg": "space_p-l--8--lg__1HAbW",
	"p-l--8--lg-": "space_p-l--8--lg-__1dN5D",
	"nf-m-r--8": "space_nf-m-r--8__8Bqlm",
	"nf-p-r--8": "space_nf-p-r--8__227BW",
	"m-r--8": "space_m-r--8__2TX1h",
	"p-r--8": "space_p-r--8__2ruZa",
	"m-r--8--sm": "space_m-r--8--sm__nRXrv",
	"m-r--8--sm-": "space_m-r--8--sm-__2IemP",
	"p-r--8--sm": "space_p-r--8--sm__2FXev",
	"p-r--8--sm-": "space_p-r--8--sm-__1HKfX",
	"m-r--8--md": "space_m-r--8--md__11dVz",
	"m-r--8--md-": "space_m-r--8--md-__aApQs",
	"p-r--8--md": "space_p-r--8--md__2T_PC",
	"p-r--8--md-": "space_p-r--8--md-__1IgWd",
	"m-r--8--lg": "space_m-r--8--lg__3LMmj",
	"m-r--8--lg-": "space_m-r--8--lg-__3aknE",
	"p-r--8--lg": "space_p-r--8--lg__puwkw",
	"p-r--8--lg-": "space_p-r--8--lg-__2IQRP",
	"m--10": "space_m--10__3Nm5z",
	"m-h--10": "space_m-h--10__2Xat7",
	"m-v--10": "space_m-v--10__3b2ks",
	"p--10": "space_p--10__3jMsf",
	"p-h--10": "space_p-h--10__2R50b",
	"p-v--10": "space_p-v--10__sb2pv",
	"nf-m--10": "space_nf-m--10__Kbn0j",
	"nf-p--10": "space_nf-p--10__3LXFX",
	"nf-m-t--10": "space_nf-m-t--10__2sOYv",
	"nf-p-t--10": "space_nf-p-t--10__11asf",
	"m-t--10": "space_m-t--10__YMEF1",
	"p-t--10": "space_p-t--10__1HYnT",
	"m-t--10--sm": "space_m-t--10--sm__2kZFi",
	"m-t--10--sm-": "space_m-t--10--sm-__6l3It",
	"p-t--10--sm": "space_p-t--10--sm__26RVn",
	"p-t--10--sm-": "space_p-t--10--sm-__1oK3h",
	"m-t--10--md": "space_m-t--10--md__12ALc",
	"m-t--10--md-": "space_m-t--10--md-__PHZyd",
	"p-t--10--md": "space_p-t--10--md__mAGCs",
	"p-t--10--md-": "space_p-t--10--md-__WCWsS",
	"m-t--10--lg": "space_m-t--10--lg__5zzPs",
	"m-t--10--lg-": "space_m-t--10--lg-__3X_n7",
	"p-t--10--lg": "space_p-t--10--lg__x_xQt",
	"p-t--10--lg-": "space_p-t--10--lg-__1iTnS",
	"nf-m-b--10": "space_nf-m-b--10__1Q5EY",
	"nf-p-b--10": "space_nf-p-b--10__3IKsU",
	"m-b--10": "space_m-b--10__9TTOl",
	"p-b--10": "space_p-b--10__1h-GT",
	"m-b--10--sm": "space_m-b--10--sm__2AP8A",
	"m-b--10--sm-": "space_m-b--10--sm-__3P_L4",
	"p-b--10--sm": "space_p-b--10--sm__22kMA",
	"p-b--10--sm-": "space_p-b--10--sm-__1QnR_",
	"m-b--10--md": "space_m-b--10--md__1MpSL",
	"m-b--10--md-": "space_m-b--10--md-__24gYm",
	"p-b--10--md": "space_p-b--10--md__1NpNd",
	"p-b--10--md-": "space_p-b--10--md-__10-A0",
	"m-b--10--lg": "space_m-b--10--lg__23MDE",
	"m-b--10--lg-": "space_m-b--10--lg-__2drNY",
	"p-b--10--lg": "space_p-b--10--lg__2tvKq",
	"p-b--10--lg-": "space_p-b--10--lg-__2-zqi",
	"nf-m-l--10": "space_nf-m-l--10__1BD0u",
	"nf-p-l--10": "space_nf-p-l--10__H7tbS",
	"m-l--10": "space_m-l--10__fvtgD",
	"p-l--10": "space_p-l--10__3G-q5",
	"m-l--10--sm": "space_m-l--10--sm__3XYOn",
	"m-l--10--sm-": "space_m-l--10--sm-__LsF0R",
	"p-l--10--sm": "space_p-l--10--sm__3KrZG",
	"p-l--10--sm-": "space_p-l--10--sm-__35jfv",
	"m-l--10--md": "space_m-l--10--md__27taw",
	"m-l--10--md-": "space_m-l--10--md-__3I_KV",
	"p-l--10--md": "space_p-l--10--md__1LwHK",
	"p-l--10--md-": "space_p-l--10--md-__2-eH0",
	"m-l--10--lg": "space_m-l--10--lg__2K620",
	"m-l--10--lg-": "space_m-l--10--lg-__3sHrU",
	"p-l--10--lg": "space_p-l--10--lg__1SjGE",
	"p-l--10--lg-": "space_p-l--10--lg-__3ZF3y",
	"nf-m-r--10": "space_nf-m-r--10__1ZseW",
	"nf-p-r--10": "space_nf-p-r--10__2h_TN",
	"m-r--10": "space_m-r--10__3xoUO",
	"p-r--10": "space_p-r--10__1rD9d",
	"m-r--10--sm": "space_m-r--10--sm__B---k",
	"m-r--10--sm-": "space_m-r--10--sm-__3XuzB",
	"p-r--10--sm": "space_p-r--10--sm__2IgLL",
	"p-r--10--sm-": "space_p-r--10--sm-__16qPL",
	"m-r--10--md": "space_m-r--10--md__MVvCd",
	"m-r--10--md-": "space_m-r--10--md-__3rb1n",
	"p-r--10--md": "space_p-r--10--md__1cD6R",
	"p-r--10--md-": "space_p-r--10--md-__2scAu",
	"m-r--10--lg": "space_m-r--10--lg__1fpfO",
	"m-r--10--lg-": "space_m-r--10--lg-__2Cm5R",
	"p-r--10--lg": "space_p-r--10--lg__30qC8",
	"p-r--10--lg-": "space_p-r--10--lg-__rHwtu",
	"m--11": "space_m--11__2-WXV",
	"m-h--11": "space_m-h--11__3v3ZM",
	"m-v--11": "space_m-v--11__14RpW",
	"p--11": "space_p--11__31qJZ",
	"p-h--11": "space_p-h--11__3ZS_v",
	"p-v--11": "space_p-v--11__165Er",
	"nf-m--11": "space_nf-m--11__2vZ99",
	"nf-p--11": "space_nf-p--11__OxfGc",
	"nf-m-t--11": "space_nf-m-t--11__2bn8m",
	"nf-p-t--11": "space_nf-p-t--11__19PES",
	"m-t--11": "space_m-t--11__1gOk4",
	"p-t--11": "space_p-t--11__33uBG",
	"m-t--11--sm": "space_m-t--11--sm__RtOJ8",
	"m-t--11--sm-": "space_m-t--11--sm-__TC-Lz",
	"p-t--11--sm": "space_p-t--11--sm__3G0c5",
	"p-t--11--sm-": "space_p-t--11--sm-__wMD3_",
	"m-t--11--md": "space_m-t--11--md__7YVan",
	"m-t--11--md-": "space_m-t--11--md-__QzYCw",
	"p-t--11--md": "space_p-t--11--md__6qg_L",
	"p-t--11--md-": "space_p-t--11--md-__2IXWo",
	"m-t--11--lg": "space_m-t--11--lg__29Y_b",
	"m-t--11--lg-": "space_m-t--11--lg-__3h5WT",
	"p-t--11--lg": "space_p-t--11--lg__3UyCi",
	"p-t--11--lg-": "space_p-t--11--lg-__1SYPG",
	"nf-m-b--11": "space_nf-m-b--11__21hFQ",
	"nf-p-b--11": "space_nf-p-b--11__1kka2",
	"m-b--11": "space_m-b--11__E89hA",
	"p-b--11": "space_p-b--11__2_Y9q",
	"m-b--11--sm": "space_m-b--11--sm__I_4kI",
	"m-b--11--sm-": "space_m-b--11--sm-__3sRPz",
	"p-b--11--sm": "space_p-b--11--sm__1tAw-",
	"p-b--11--sm-": "space_p-b--11--sm-__3YZY-",
	"m-b--11--md": "space_m-b--11--md__CZ4ex",
	"m-b--11--md-": "space_m-b--11--md-__16z5M",
	"p-b--11--md": "space_p-b--11--md__2xgyp",
	"p-b--11--md-": "space_p-b--11--md-__2PzxX",
	"m-b--11--lg": "space_m-b--11--lg__3W2Qk",
	"m-b--11--lg-": "space_m-b--11--lg-__1ulbN",
	"p-b--11--lg": "space_p-b--11--lg__37R0g",
	"p-b--11--lg-": "space_p-b--11--lg-__3e-bK",
	"nf-m-l--11": "space_nf-m-l--11__MAoLy",
	"nf-p-l--11": "space_nf-p-l--11__jGX4F",
	"m-l--11": "space_m-l--11__2gc2y",
	"p-l--11": "space_p-l--11__1mnVI",
	"m-l--11--sm": "space_m-l--11--sm__3GVsh",
	"m-l--11--sm-": "space_m-l--11--sm-__3iiNg",
	"p-l--11--sm": "space_p-l--11--sm__1ftY8",
	"p-l--11--sm-": "space_p-l--11--sm-__3i0aU",
	"m-l--11--md": "space_m-l--11--md__1SV-W",
	"m-l--11--md-": "space_m-l--11--md-__3dUuG",
	"p-l--11--md": "space_p-l--11--md__1nMvd",
	"p-l--11--md-": "space_p-l--11--md-__3W8C_",
	"m-l--11--lg": "space_m-l--11--lg__2coej",
	"m-l--11--lg-": "space_m-l--11--lg-__3aE_P",
	"p-l--11--lg": "space_p-l--11--lg__UyfGM",
	"p-l--11--lg-": "space_p-l--11--lg-__1KSRg",
	"nf-m-r--11": "space_nf-m-r--11__2S4XT",
	"nf-p-r--11": "space_nf-p-r--11__hQ4Z-",
	"m-r--11": "space_m-r--11__WM2_4",
	"p-r--11": "space_p-r--11__tMcBV",
	"m-r--11--sm": "space_m-r--11--sm__1DS4e",
	"m-r--11--sm-": "space_m-r--11--sm-__2Jjbn",
	"p-r--11--sm": "space_p-r--11--sm__1XnaS",
	"p-r--11--sm-": "space_p-r--11--sm-__VODwD",
	"m-r--11--md": "space_m-r--11--md__39ysw",
	"m-r--11--md-": "space_m-r--11--md-__1HBcA",
	"p-r--11--md": "space_p-r--11--md__1f4Ih",
	"p-r--11--md-": "space_p-r--11--md-__3sWrj",
	"m-r--11--lg": "space_m-r--11--lg__3cdX8",
	"m-r--11--lg-": "space_m-r--11--lg-__1kR0Z",
	"p-r--11--lg": "space_p-r--11--lg__mMLJA",
	"p-r--11--lg-": "space_p-r--11--lg-__383ql",
	"m--12": "space_m--12__2HLyd",
	"m-h--12": "space_m-h--12__1jGAm",
	"m-v--12": "space_m-v--12__1DgaC",
	"p--12": "space_p--12__cLs_q",
	"p-h--12": "space_p-h--12__3MnQP",
	"p-v--12": "space_p-v--12__Fsnvt",
	"nf-m--12": "space_nf-m--12__20-6i",
	"nf-p--12": "space_nf-p--12__2sa3V",
	"nf-m-t--12": "space_nf-m-t--12__f3dzT",
	"nf-p-t--12": "space_nf-p-t--12__25ynV",
	"m-t--12": "space_m-t--12__3WHDM",
	"p-t--12": "space_p-t--12__1Smi1",
	"m-t--12--sm": "space_m-t--12--sm__3bZNQ",
	"m-t--12--sm-": "space_m-t--12--sm-__1BP4E",
	"p-t--12--sm": "space_p-t--12--sm__2Qx2l",
	"p-t--12--sm-": "space_p-t--12--sm-__yupZ4",
	"m-t--12--md": "space_m-t--12--md__3S_OO",
	"m-t--12--md-": "space_m-t--12--md-__2yKVN",
	"p-t--12--md": "space_p-t--12--md__ul-Vc",
	"p-t--12--md-": "space_p-t--12--md-__2cSkH",
	"m-t--12--lg": "space_m-t--12--lg__gzh3s",
	"m-t--12--lg-": "space_m-t--12--lg-__2MHjg",
	"p-t--12--lg": "space_p-t--12--lg__3hkC2",
	"p-t--12--lg-": "space_p-t--12--lg-__ujynL",
	"nf-m-b--12": "space_nf-m-b--12__SyrTq",
	"nf-p-b--12": "space_nf-p-b--12__2W9vo",
	"m-b--12": "space_m-b--12__kSzBE",
	"p-b--12": "space_p-b--12__UOcqN",
	"m-b--12--sm": "space_m-b--12--sm__3TPex",
	"m-b--12--sm-": "space_m-b--12--sm-__1RVtw",
	"p-b--12--sm": "space_p-b--12--sm__JtDvV",
	"p-b--12--sm-": "space_p-b--12--sm-__1Rfxv",
	"m-b--12--md": "space_m-b--12--md__1gpe1",
	"m-b--12--md-": "space_m-b--12--md-__1gJeu",
	"p-b--12--md": "space_p-b--12--md__1mbjy",
	"p-b--12--md-": "space_p-b--12--md-__3BYX9",
	"m-b--12--lg": "space_m-b--12--lg__1TEGp",
	"m-b--12--lg-": "space_m-b--12--lg-__3DcB9",
	"p-b--12--lg": "space_p-b--12--lg__31QJ4",
	"p-b--12--lg-": "space_p-b--12--lg-__1rcgC",
	"nf-m-l--12": "space_nf-m-l--12__1KBpO",
	"nf-p-l--12": "space_nf-p-l--12__2Ux3Q",
	"m-l--12": "space_m-l--12__1wQ7F",
	"p-l--12": "space_p-l--12__1umVm",
	"m-l--12--sm": "space_m-l--12--sm__3-A_i",
	"m-l--12--sm-": "space_m-l--12--sm-__1Mhky",
	"p-l--12--sm": "space_p-l--12--sm__233-k",
	"p-l--12--sm-": "space_p-l--12--sm-__QKo6h",
	"m-l--12--md": "space_m-l--12--md__q1D5T",
	"m-l--12--md-": "space_m-l--12--md-__1ZLKK",
	"p-l--12--md": "space_p-l--12--md__2KOn5",
	"p-l--12--md-": "space_p-l--12--md-__29h9z",
	"m-l--12--lg": "space_m-l--12--lg__1PTvD",
	"m-l--12--lg-": "space_m-l--12--lg-__3cdSc",
	"p-l--12--lg": "space_p-l--12--lg__kR08r",
	"p-l--12--lg-": "space_p-l--12--lg-__3RYmD",
	"nf-m-r--12": "space_nf-m-r--12__2Eim3",
	"nf-p-r--12": "space_nf-p-r--12__hs9HH",
	"m-r--12": "space_m-r--12__sYWT0",
	"p-r--12": "space_p-r--12__2Y0WX",
	"m-r--12--sm": "space_m-r--12--sm__lkORp",
	"m-r--12--sm-": "space_m-r--12--sm-__1Z57j",
	"p-r--12--sm": "space_p-r--12--sm__2Nyce",
	"p-r--12--sm-": "space_p-r--12--sm-__151sg",
	"m-r--12--md": "space_m-r--12--md__FIDuj",
	"m-r--12--md-": "space_m-r--12--md-__3c-Pe",
	"p-r--12--md": "space_p-r--12--md__3hzbw",
	"p-r--12--md-": "space_p-r--12--md-__3QRPb",
	"m-r--12--lg": "space_m-r--12--lg__2Qv6Q",
	"m-r--12--lg-": "space_m-r--12--lg-__3etoW",
	"p-r--12--lg": "space_p-r--12--lg__1H9ll",
	"p-r--12--lg-": "space_p-r--12--lg-__1QGBP",
	"m--13": "space_m--13__2tz-6",
	"m-h--13": "space_m-h--13__1PYx9",
	"m-v--13": "space_m-v--13__2yw3E",
	"p--13": "space_p--13__1nePA",
	"p-h--13": "space_p-h--13__3dXRM",
	"p-v--13": "space_p-v--13__UF7Hn",
	"nf-m--13": "space_nf-m--13__20C_J",
	"nf-p--13": "space_nf-p--13__1bnih",
	"nf-m-t--13": "space_nf-m-t--13__V14fy",
	"nf-p-t--13": "space_nf-p-t--13__1pqXk",
	"m-t--13": "space_m-t--13__BeB1x",
	"p-t--13": "space_p-t--13__1SycC",
	"m-t--13--sm": "space_m-t--13--sm__2WNAL",
	"m-t--13--sm-": "space_m-t--13--sm-__1ur_g",
	"p-t--13--sm": "space_p-t--13--sm__3dmkr",
	"p-t--13--sm-": "space_p-t--13--sm-__1Ufap",
	"m-t--13--md": "space_m-t--13--md__2EGla",
	"m-t--13--md-": "space_m-t--13--md-__pTpZO",
	"p-t--13--md": "space_p-t--13--md__qZECt",
	"p-t--13--md-": "space_p-t--13--md-__3yeMZ",
	"m-t--13--lg": "space_m-t--13--lg__2WC0W",
	"m-t--13--lg-": "space_m-t--13--lg-__2sAEI",
	"p-t--13--lg": "space_p-t--13--lg__1ONFc",
	"p-t--13--lg-": "space_p-t--13--lg-__2AkEj",
	"nf-m-b--13": "space_nf-m-b--13__32MEG",
	"nf-p-b--13": "space_nf-p-b--13__1rwZm",
	"m-b--13": "space_m-b--13__219NC",
	"p-b--13": "space_p-b--13__12vyT",
	"m-b--13--sm": "space_m-b--13--sm__7_7n9",
	"m-b--13--sm-": "space_m-b--13--sm-__16CXr",
	"p-b--13--sm": "space_p-b--13--sm__35hif",
	"p-b--13--sm-": "space_p-b--13--sm-__19eg7",
	"m-b--13--md": "space_m-b--13--md__1Evfb",
	"m-b--13--md-": "space_m-b--13--md-__7eodv",
	"p-b--13--md": "space_p-b--13--md__VZAgs",
	"p-b--13--md-": "space_p-b--13--md-__2F7XT",
	"m-b--13--lg": "space_m-b--13--lg__38_Q8",
	"m-b--13--lg-": "space_m-b--13--lg-__39PXf",
	"p-b--13--lg": "space_p-b--13--lg__2_9MI",
	"p-b--13--lg-": "space_p-b--13--lg-__2RwpL",
	"nf-m-l--13": "space_nf-m-l--13__2qN7l",
	"nf-p-l--13": "space_nf-p-l--13__VW3tg",
	"m-l--13": "space_m-l--13__13zPb",
	"p-l--13": "space_p-l--13__2-beE",
	"m-l--13--sm": "space_m-l--13--sm__2gvFQ",
	"m-l--13--sm-": "space_m-l--13--sm-__3mCAx",
	"p-l--13--sm": "space_p-l--13--sm__3Oy3x",
	"p-l--13--sm-": "space_p-l--13--sm-__3MIeS",
	"m-l--13--md": "space_m-l--13--md__aQPFN",
	"m-l--13--md-": "space_m-l--13--md-__CM0J7",
	"p-l--13--md": "space_p-l--13--md__3xn0O",
	"p-l--13--md-": "space_p-l--13--md-__1A508",
	"m-l--13--lg": "space_m-l--13--lg__2eADd",
	"m-l--13--lg-": "space_m-l--13--lg-__e7wzQ",
	"p-l--13--lg": "space_p-l--13--lg__2xmdq",
	"p-l--13--lg-": "space_p-l--13--lg-__3O4Rg",
	"nf-m-r--13": "space_nf-m-r--13__2hhTV",
	"nf-p-r--13": "space_nf-p-r--13__3WDYy",
	"m-r--13": "space_m-r--13__dosqq",
	"p-r--13": "space_p-r--13__2pz2K",
	"m-r--13--sm": "space_m-r--13--sm__21of2",
	"m-r--13--sm-": "space_m-r--13--sm-___m6y6",
	"p-r--13--sm": "space_p-r--13--sm__3Ns7O",
	"p-r--13--sm-": "space_p-r--13--sm-___0BzA",
	"m-r--13--md": "space_m-r--13--md__3Sf1g",
	"m-r--13--md-": "space_m-r--13--md-__yYWFo",
	"p-r--13--md": "space_p-r--13--md__9ZcIV",
	"p-r--13--md-": "space_p-r--13--md-__3GNVe",
	"m-r--13--lg": "space_m-r--13--lg__scEzV",
	"m-r--13--lg-": "space_m-r--13--lg-__23NuB",
	"p-r--13--lg": "space_p-r--13--lg__G3q-I",
	"p-r--13--lg-": "space_p-r--13--lg-__5PWV0",
	"m--14": "space_m--14__3CM90",
	"m-h--14": "space_m-h--14__3lHzZ",
	"m-v--14": "space_m-v--14__5aHHm",
	"p--14": "space_p--14__1RvxB",
	"p-h--14": "space_p-h--14__1NU-7",
	"p-v--14": "space_p-v--14__28zN2",
	"nf-m--14": "space_nf-m--14__1_MoQ",
	"nf-p--14": "space_nf-p--14__39SWr",
	"nf-m-t--14": "space_nf-m-t--14__1vJGx",
	"nf-p-t--14": "space_nf-p-t--14__2A6aw",
	"m-t--14": "space_m-t--14__35Bpe",
	"p-t--14": "space_p-t--14__3MN5h",
	"m-t--14--sm": "space_m-t--14--sm__2Qftf",
	"m-t--14--sm-": "space_m-t--14--sm-__1ngPu",
	"p-t--14--sm": "space_p-t--14--sm__mTs4X",
	"p-t--14--sm-": "space_p-t--14--sm-__1sK0b",
	"m-t--14--md": "space_m-t--14--md__24BrM",
	"m-t--14--md-": "space_m-t--14--md-__12sfY",
	"p-t--14--md": "space_p-t--14--md__Xbj-r",
	"p-t--14--md-": "space_p-t--14--md-__3_65W",
	"m-t--14--lg": "space_m-t--14--lg___Q913",
	"m-t--14--lg-": "space_m-t--14--lg-__31tn5",
	"p-t--14--lg": "space_p-t--14--lg__1LZjc",
	"p-t--14--lg-": "space_p-t--14--lg-__3dBJH",
	"nf-m-b--14": "space_nf-m-b--14__2kVD5",
	"nf-p-b--14": "space_nf-p-b--14__3cyyg",
	"m-b--14": "space_m-b--14__3Lw2X",
	"p-b--14": "space_p-b--14__u1uQ7",
	"m-b--14--sm": "space_m-b--14--sm__2PSgR",
	"m-b--14--sm-": "space_m-b--14--sm-__3M9jg",
	"p-b--14--sm": "space_p-b--14--sm__x33t_",
	"p-b--14--sm-": "space_p-b--14--sm-__wBJ4c",
	"m-b--14--md": "space_m-b--14--md__3QQ-K",
	"m-b--14--md-": "space_m-b--14--md-__2nbPR",
	"p-b--14--md": "space_p-b--14--md__2_6c4",
	"p-b--14--md-": "space_p-b--14--md-__1nFlz",
	"m-b--14--lg": "space_m-b--14--lg__32HfI",
	"m-b--14--lg-": "space_m-b--14--lg-__yBWtY",
	"p-b--14--lg": "space_p-b--14--lg__i_k7B",
	"p-b--14--lg-": "space_p-b--14--lg-__309AM",
	"nf-m-l--14": "space_nf-m-l--14__1VdP5",
	"nf-p-l--14": "space_nf-p-l--14__2qDVd",
	"m-l--14": "space_m-l--14__32Obt",
	"p-l--14": "space_p-l--14__h4FdB",
	"m-l--14--sm": "space_m-l--14--sm__ub9PU",
	"m-l--14--sm-": "space_m-l--14--sm-__2O8e8",
	"p-l--14--sm": "space_p-l--14--sm__zmKqa",
	"p-l--14--sm-": "space_p-l--14--sm-__26SaQ",
	"m-l--14--md": "space_m-l--14--md__3QzrM",
	"m-l--14--md-": "space_m-l--14--md-__vwiEy",
	"p-l--14--md": "space_p-l--14--md__fjQt5",
	"p-l--14--md-": "space_p-l--14--md-__2yDfM",
	"m-l--14--lg": "space_m-l--14--lg__KWzRM",
	"m-l--14--lg-": "space_m-l--14--lg-__t_U6g",
	"p-l--14--lg": "space_p-l--14--lg__-W1oX",
	"p-l--14--lg-": "space_p-l--14--lg-__3piNx",
	"nf-m-r--14": "space_nf-m-r--14__3yHZq",
	"nf-p-r--14": "space_nf-p-r--14__1soAK",
	"m-r--14": "space_m-r--14__1C1eH",
	"p-r--14": "space_p-r--14__3tSoz",
	"m-r--14--sm": "space_m-r--14--sm__qphVM",
	"m-r--14--sm-": "space_m-r--14--sm-__31WpE",
	"p-r--14--sm": "space_p-r--14--sm__2DI6Y",
	"p-r--14--sm-": "space_p-r--14--sm-__3F9qB",
	"m-r--14--md": "space_m-r--14--md__1MaRf",
	"m-r--14--md-": "space_m-r--14--md-__3Coul",
	"p-r--14--md": "space_p-r--14--md__SuSNb",
	"p-r--14--md-": "space_p-r--14--md-__2uth7",
	"m-r--14--lg": "space_m-r--14--lg__1_PIF",
	"m-r--14--lg-": "space_m-r--14--lg-__34YZo",
	"p-r--14--lg": "space_p-r--14--lg__3zvGL",
	"p-r--14--lg-": "space_p-r--14--lg-__2NSO_",
	"m--15": "space_m--15__ikFJV",
	"m-h--15": "space_m-h--15__2QXgs",
	"m-v--15": "space_m-v--15__1yO_H",
	"p--15": "space_p--15__tLnbN",
	"p-h--15": "space_p-h--15__2vENI",
	"p-v--15": "space_p-v--15__3GvTX",
	"nf-m--15": "space_nf-m--15__39J3K",
	"nf-p--15": "space_nf-p--15__1Tm6X",
	"nf-m-t--15": "space_nf-m-t--15__27WQx",
	"nf-p-t--15": "space_nf-p-t--15__1TiOd",
	"m-t--15": "space_m-t--15__GL8EF",
	"p-t--15": "space_p-t--15__2quW_",
	"m-t--15--sm": "space_m-t--15--sm__2iHPx",
	"m-t--15--sm-": "space_m-t--15--sm-__1d2a8",
	"p-t--15--sm": "space_p-t--15--sm__BG5Jo",
	"p-t--15--sm-": "space_p-t--15--sm-__1jH9l",
	"m-t--15--md": "space_m-t--15--md__2Exr3",
	"m-t--15--md-": "space_m-t--15--md-__2xUXR",
	"p-t--15--md": "space_p-t--15--md__1UU8m",
	"p-t--15--md-": "space_p-t--15--md-__3fKet",
	"m-t--15--lg": "space_m-t--15--lg__2mlwj",
	"m-t--15--lg-": "space_m-t--15--lg-__1Jkgw",
	"p-t--15--lg": "space_p-t--15--lg__17X3W",
	"p-t--15--lg-": "space_p-t--15--lg-__f8u0W",
	"nf-m-b--15": "space_nf-m-b--15__2ir3B",
	"nf-p-b--15": "space_nf-p-b--15__mCXxn",
	"m-b--15": "space_m-b--15__4R3Kp",
	"p-b--15": "space_p-b--15__2rFv1",
	"m-b--15--sm": "space_m-b--15--sm__3ldGa",
	"m-b--15--sm-": "space_m-b--15--sm-__Pg9I7",
	"p-b--15--sm": "space_p-b--15--sm__3LQ6C",
	"p-b--15--sm-": "space_p-b--15--sm-__d9QOT",
	"m-b--15--md": "space_m-b--15--md__3fj7R",
	"m-b--15--md-": "space_m-b--15--md-__2vFvh",
	"p-b--15--md": "space_p-b--15--md__eAs-T",
	"p-b--15--md-": "space_p-b--15--md-__3Th5L",
	"m-b--15--lg": "space_m-b--15--lg__Q12r_",
	"m-b--15--lg-": "space_m-b--15--lg-__1NDkJ",
	"p-b--15--lg": "space_p-b--15--lg__3d-zO",
	"p-b--15--lg-": "space_p-b--15--lg-__ju9ad",
	"nf-m-l--15": "space_nf-m-l--15__1Kkyj",
	"nf-p-l--15": "space_nf-p-l--15__7BZXZ",
	"m-l--15": "space_m-l--15__3sQBj",
	"p-l--15": "space_p-l--15__KEAx1",
	"m-l--15--sm": "space_m-l--15--sm__WBLf2",
	"m-l--15--sm-": "space_m-l--15--sm-__1LYeA",
	"p-l--15--sm": "space_p-l--15--sm__2acxS",
	"p-l--15--sm-": "space_p-l--15--sm-__34EG9",
	"m-l--15--md": "space_m-l--15--md__3CtLm",
	"m-l--15--md-": "space_m-l--15--md-__1te9a",
	"p-l--15--md": "space_p-l--15--md__ju1Xz",
	"p-l--15--md-": "space_p-l--15--md-__2t5z4",
	"m-l--15--lg": "space_m-l--15--lg__1f9bT",
	"m-l--15--lg-": "space_m-l--15--lg-__666RP",
	"p-l--15--lg": "space_p-l--15--lg__CuXqS",
	"p-l--15--lg-": "space_p-l--15--lg-__XxtKH",
	"nf-m-r--15": "space_nf-m-r--15__c1Lgb",
	"nf-p-r--15": "space_nf-p-r--15__2duV3",
	"m-r--15": "space_m-r--15__27P0P",
	"p-r--15": "space_p-r--15__KdWlZ",
	"m-r--15--sm": "space_m-r--15--sm__1L12A",
	"m-r--15--sm-": "space_m-r--15--sm-__STUlG",
	"p-r--15--sm": "space_p-r--15--sm__1_GXe",
	"p-r--15--sm-": "space_p-r--15--sm-__2lHIQ",
	"m-r--15--md": "space_m-r--15--md__16saQ",
	"m-r--15--md-": "space_m-r--15--md-__3DCtz",
	"p-r--15--md": "space_p-r--15--md__ZzpkB",
	"p-r--15--md-": "space_p-r--15--md-__1jN-Z",
	"m-r--15--lg": "space_m-r--15--lg__1VxIj",
	"m-r--15--lg-": "space_m-r--15--lg-__1eXzE",
	"p-r--15--lg": "space_p-r--15--lg__3OShR",
	"p-r--15--lg-": "space_p-r--15--lg-__hkEqQ",
	"m--16": "space_m--16__3ZMXz",
	"m-h--16": "space_m-h--16__25yIU",
	"m-v--16": "space_m-v--16___UXgP",
	"p--16": "space_p--16__3akJg",
	"p-h--16": "space_p-h--16__3KAOx",
	"p-v--16": "space_p-v--16__AtYiE",
	"nf-m--16": "space_nf-m--16__3igqp",
	"nf-p--16": "space_nf-p--16__27ug3",
	"nf-m-t--16": "space_nf-m-t--16__1vFtp",
	"nf-p-t--16": "space_nf-p-t--16__2Ocis",
	"m-t--16": "space_m-t--16__MStMJ",
	"p-t--16": "space_p-t--16__1Tva2",
	"m-t--16--sm": "space_m-t--16--sm__9Ncu5",
	"m-t--16--sm-": "space_m-t--16--sm-__2Ton4",
	"p-t--16--sm": "space_p-t--16--sm__8ykEc",
	"p-t--16--sm-": "space_p-t--16--sm-__6glx6",
	"m-t--16--md": "space_m-t--16--md__MzM_g",
	"m-t--16--md-": "space_m-t--16--md-__9Tp2Q",
	"p-t--16--md": "space_p-t--16--md__1mdhc",
	"p-t--16--md-": "space_p-t--16--md-__2afEu",
	"m-t--16--lg": "space_m-t--16--lg__1k0ni",
	"m-t--16--lg-": "space_m-t--16--lg-__1YF06",
	"p-t--16--lg": "space_p-t--16--lg__tG3v4",
	"p-t--16--lg-": "space_p-t--16--lg-__2s7a1",
	"nf-m-b--16": "space_nf-m-b--16__hu7LL",
	"nf-p-b--16": "space_nf-p-b--16__ZNCj-",
	"m-b--16": "space_m-b--16__7ZlwL",
	"p-b--16": "space_p-b--16__3N1F3",
	"m-b--16--sm": "space_m-b--16--sm__-E-zr",
	"m-b--16--sm-": "space_m-b--16--sm-__3XjFn",
	"p-b--16--sm": "space_p-b--16--sm__3P3JK",
	"p-b--16--sm-": "space_p-b--16--sm-__YD0kc",
	"m-b--16--md": "space_m-b--16--md__5Ffc4",
	"m-b--16--md-": "space_m-b--16--md-__3OxeM",
	"p-b--16--md": "space_p-b--16--md__27DME",
	"p-b--16--md-": "space_p-b--16--md-__1v3Yf",
	"m-b--16--lg": "space_m-b--16--lg__3Nrea",
	"m-b--16--lg-": "space_m-b--16--lg-__1WYfz",
	"p-b--16--lg": "space_p-b--16--lg__2M9ry",
	"p-b--16--lg-": "space_p-b--16--lg-__2OyAr",
	"nf-m-l--16": "space_nf-m-l--16__1cwRj",
	"nf-p-l--16": "space_nf-p-l--16__2Jto7",
	"m-l--16": "space_m-l--16__lbn3H",
	"p-l--16": "space_p-l--16__QYO45",
	"m-l--16--sm": "space_m-l--16--sm__3puoY",
	"m-l--16--sm-": "space_m-l--16--sm-__2iqkv",
	"p-l--16--sm": "space_p-l--16--sm__3ZCdk",
	"p-l--16--sm-": "space_p-l--16--sm-__3yKC1",
	"m-l--16--md": "space_m-l--16--md__1wq1K",
	"m-l--16--md-": "space_m-l--16--md-__1QtwW",
	"p-l--16--md": "space_p-l--16--md__2d0M9",
	"p-l--16--md-": "space_p-l--16--md-__1KfXR",
	"m-l--16--lg": "space_m-l--16--lg__2Lqft",
	"m-l--16--lg-": "space_m-l--16--lg-__GHvQa",
	"p-l--16--lg": "space_p-l--16--lg__dyeNE",
	"p-l--16--lg-": "space_p-l--16--lg-__3a2Ex",
	"nf-m-r--16": "space_nf-m-r--16__1sJsM",
	"nf-p-r--16": "space_nf-p-r--16__2N7sa",
	"m-r--16": "space_m-r--16__2Mk_S",
	"p-r--16": "space_p-r--16__3MUA3",
	"m-r--16--sm": "space_m-r--16--sm__1vtkS",
	"m-r--16--sm-": "space_m-r--16--sm-__1qeSY",
	"p-r--16--sm": "space_p-r--16--sm__395zk",
	"p-r--16--sm-": "space_p-r--16--sm-__2Q-fv",
	"m-r--16--md": "space_m-r--16--md__1S5m8",
	"m-r--16--md-": "space_m-r--16--md-__1xK6U",
	"p-r--16--md": "space_p-r--16--md__3LXh0",
	"p-r--16--md-": "space_p-r--16--md-__1EtR3",
	"m-r--16--lg": "space_m-r--16--lg__3w7GJ",
	"m-r--16--lg-": "space_m-r--16--lg-__FguI3",
	"p-r--16--lg": "space_p-r--16--lg__2lZOW",
	"p-r--16--lg-": "space_p-r--16--lg-__14xT1",
	"m--18": "space_m--18__c42q_",
	"m-h--18": "space_m-h--18__2hGyp",
	"m-v--18": "space_m-v--18__1Cx03",
	"p--18": "space_p--18__W8603",
	"p-h--18": "space_p-h--18__OemmQ",
	"p-v--18": "space_p-v--18__2g6mr",
	"nf-m--18": "space_nf-m--18__2Wg--",
	"nf-p--18": "space_nf-p--18__1tHvy",
	"nf-m-t--18": "space_nf-m-t--18__2ha_U",
	"nf-p-t--18": "space_nf-p-t--18__33fUZ",
	"m-t--18": "space_m-t--18__2k-Ho",
	"p-t--18": "space_p-t--18__3DSBC",
	"m-t--18--sm": "space_m-t--18--sm__2viUv",
	"m-t--18--sm-": "space_m-t--18--sm-__1MfBc",
	"p-t--18--sm": "space_p-t--18--sm__16qcf",
	"p-t--18--sm-": "space_p-t--18--sm-__-K7Yp",
	"m-t--18--md": "space_m-t--18--md__3wGcZ",
	"m-t--18--md-": "space_m-t--18--md-__1o87y",
	"p-t--18--md": "space_p-t--18--md__pl808",
	"p-t--18--md-": "space_p-t--18--md-__31IHl",
	"m-t--18--lg": "space_m-t--18--lg__11wBl",
	"m-t--18--lg-": "space_m-t--18--lg-__2doXv",
	"p-t--18--lg": "space_p-t--18--lg__3eGPP",
	"p-t--18--lg-": "space_p-t--18--lg-__1Aahc",
	"nf-m-b--18": "space_nf-m-b--18__2J0Ss",
	"nf-p-b--18": "space_nf-p-b--18__3JZdQ",
	"m-b--18": "space_m-b--18__3I7q3",
	"p-b--18": "space_p-b--18__2UPDW",
	"m-b--18--sm": "space_m-b--18--sm__2qBwV",
	"m-b--18--sm-": "space_m-b--18--sm-__1Lgmx",
	"p-b--18--sm": "space_p-b--18--sm__drxQN",
	"p-b--18--sm-": "space_p-b--18--sm-__3eYoi",
	"m-b--18--md": "space_m-b--18--md__2d42R",
	"m-b--18--md-": "space_m-b--18--md-__1WqHz",
	"p-b--18--md": "space_p-b--18--md__1IXXR",
	"p-b--18--md-": "space_p-b--18--md-__3kfZ9",
	"m-b--18--lg": "space_m-b--18--lg__Vc98p",
	"m-b--18--lg-": "space_m-b--18--lg-__3BYGw",
	"p-b--18--lg": "space_p-b--18--lg__2qzqU",
	"p-b--18--lg-": "space_p-b--18--lg-__35YQ0",
	"nf-m-l--18": "space_nf-m-l--18__2PZ9g",
	"nf-p-l--18": "space_nf-p-l--18__k9aX5",
	"m-l--18": "space_m-l--18__ZicJn",
	"p-l--18": "space_p-l--18__15r47",
	"m-l--18--sm": "space_m-l--18--sm__ma6qY",
	"m-l--18--sm-": "space_m-l--18--sm-__2ZbiE",
	"p-l--18--sm": "space_p-l--18--sm__2oJAx",
	"p-l--18--sm-": "space_p-l--18--sm-__1cBUv",
	"m-l--18--md": "space_m-l--18--md__3l_7O",
	"m-l--18--md-": "space_m-l--18--md-__34tFk",
	"p-l--18--md": "space_p-l--18--md__3c8c8",
	"p-l--18--md-": "space_p-l--18--md-__3mFF3",
	"m-l--18--lg": "space_m-l--18--lg__26zfn",
	"m-l--18--lg-": "space_m-l--18--lg-__3letN",
	"p-l--18--lg": "space_p-l--18--lg__1hc_5",
	"p-l--18--lg-": "space_p-l--18--lg-__9mAwM",
	"nf-m-r--18": "space_nf-m-r--18__E86kF",
	"nf-p-r--18": "space_nf-p-r--18__1HuD-",
	"m-r--18": "space_m-r--18__2quLk",
	"p-r--18": "space_p-r--18__1PcES",
	"m-r--18--sm": "space_m-r--18--sm__Y4GVv",
	"m-r--18--sm-": "space_m-r--18--sm-__6rS5h",
	"p-r--18--sm": "space_p-r--18--sm__3hIRM",
	"p-r--18--sm-": "space_p-r--18--sm-__1vXaC",
	"m-r--18--md": "space_m-r--18--md__1Pkqf",
	"m-r--18--md-": "space_m-r--18--md-__2_iQ5",
	"p-r--18--md": "space_p-r--18--md__2_LLR",
	"p-r--18--md-": "space_p-r--18--md-__3rwZw",
	"m-r--18--lg": "space_m-r--18--lg__2cYTF",
	"m-r--18--lg-": "space_m-r--18--lg-__3FGwT",
	"p-r--18--lg": "space_p-r--18--lg__2ySzr",
	"p-r--18--lg-": "space_p-r--18--lg-__11obq",
	"m--19": "space_m--19__2rs1y",
	"m-h--19": "space_m-h--19__3Gnhm",
	"m-v--19": "space_m-v--19__3dpwC",
	"p--19": "space_p--19__GSnpv",
	"p-h--19": "space_p-h--19__DOu2v",
	"p-v--19": "space_p-v--19__1sw-r",
	"nf-m--19": "space_nf-m--19__3HWgX",
	"nf-p--19": "space_nf-p--19__10tDl",
	"nf-m-t--19": "space_nf-m-t--19__XMdlG",
	"nf-p-t--19": "space_nf-p-t--19__2wOT2",
	"m-t--19": "space_m-t--19__3Bvs1",
	"p-t--19": "space_p-t--19__eayz0",
	"m-t--19--sm": "space_m-t--19--sm__3Ekve",
	"m-t--19--sm-": "space_m-t--19--sm-__1nhx3",
	"p-t--19--sm": "space_p-t--19--sm__2jsIl",
	"p-t--19--sm-": "space_p-t--19--sm-__-s9sr",
	"m-t--19--md": "space_m-t--19--md__2aEjt",
	"m-t--19--md-": "space_m-t--19--md-__Xyz-w",
	"p-t--19--md": "space_p-t--19--md__Sks2d",
	"p-t--19--md-": "space_p-t--19--md-__3r3jT",
	"m-t--19--lg": "space_m-t--19--lg__24jRI",
	"m-t--19--lg-": "space_m-t--19--lg-__YVd-v",
	"p-t--19--lg": "space_p-t--19--lg__1-Iw-",
	"p-t--19--lg-": "space_p-t--19--lg-__1BwWb",
	"nf-m-b--19": "space_nf-m-b--19__3xWWl",
	"nf-p-b--19": "space_nf-p-b--19__2aCHZ",
	"m-b--19": "space_m-b--19__1HGbx",
	"p-b--19": "space_p-b--19__34uGp",
	"m-b--19--sm": "space_m-b--19--sm__3Xo5O",
	"m-b--19--sm-": "space_m-b--19--sm-__2KaDW",
	"p-b--19--sm": "space_p-b--19--sm__10Y8c",
	"p-b--19--sm-": "space_p-b--19--sm-__3c5Yv",
	"m-b--19--md": "space_m-b--19--md__ibmOD",
	"m-b--19--md-": "space_m-b--19--md-__1FEhZ",
	"p-b--19--md": "space_p-b--19--md__2QAkl",
	"p-b--19--md-": "space_p-b--19--md-__1zYlB",
	"m-b--19--lg": "space_m-b--19--lg__3Wlfm",
	"m-b--19--lg-": "space_m-b--19--lg-__3xXov",
	"p-b--19--lg": "space_p-b--19--lg__3G31B",
	"p-b--19--lg-": "space_p-b--19--lg-__39YIa",
	"nf-m-l--19": "space_nf-m-l--19__31wRt",
	"nf-p-l--19": "space_nf-p-l--19__3iZ_0",
	"m-l--19": "space_m-l--19__BZr8m",
	"p-l--19": "space_p-l--19__HbLZq",
	"m-l--19--sm": "space_m-l--19--sm__2dd5_",
	"m-l--19--sm-": "space_m-l--19--sm-__LNa0g",
	"p-l--19--sm": "space_p-l--19--sm__3d8CL",
	"p-l--19--sm-": "space_p-l--19--sm-__3rTj7",
	"m-l--19--md": "space_m-l--19--md__3b2P6",
	"m-l--19--md-": "space_m-l--19--md-__3OX2n",
	"p-l--19--md": "space_p-l--19--md__14LWV",
	"p-l--19--md-": "space_p-l--19--md-__xnHcv",
	"m-l--19--lg": "space_m-l--19--lg__RdTsN",
	"m-l--19--lg-": "space_m-l--19--lg-__CRKmO",
	"p-l--19--lg": "space_p-l--19--lg__2fDix",
	"p-l--19--lg-": "space_p-l--19--lg-__3KlIg",
	"nf-m-r--19": "space_nf-m-r--19__1ODZt",
	"nf-p-r--19": "space_nf-p-r--19__e3-pl",
	"m-r--19": "space_m-r--19__3VJXl",
	"p-r--19": "space_p-r--19__KLkA3",
	"m-r--19--sm": "space_m-r--19--sm__35RNe",
	"m-r--19--sm-": "space_m-r--19--sm-__2OAlJ",
	"p-r--19--sm": "space_p-r--19--sm__2EATL",
	"p-r--19--sm-": "space_p-r--19--sm-__Fq6gG",
	"m-r--19--md": "space_m-r--19--md__3WMYe",
	"m-r--19--md-": "space_m-r--19--md-__2AAJQ",
	"p-r--19--md": "space_p-r--19--md__1UCt5",
	"p-r--19--md-": "space_p-r--19--md-__TYdUF",
	"m-r--19--lg": "space_m-r--19--lg__gzH1-",
	"m-r--19--lg-": "space_m-r--19--lg-__1HUze",
	"p-r--19--lg": "space_p-r--19--lg__1DiOZ",
	"p-r--19--lg-": "space_p-r--19--lg-__2a1fp",
	"m--20": "space_m--20__WkAnm",
	"m-h--20": "space_m-h--20__23L_p",
	"m-v--20": "space_m-v--20__3tPSR",
	"p--20": "space_p--20__uL0Io",
	"p-h--20": "space_p-h--20__1jPPR",
	"p-v--20": "space_p-v--20__3ZP2W",
	"nf-m--20": "space_nf-m--20__1J60M",
	"nf-p--20": "space_nf-p--20__2JZ3-",
	"nf-m-t--20": "space_nf-m-t--20__1sDev",
	"nf-p-t--20": "space_nf-p-t--20__2ZRTD",
	"m-t--20": "space_m-t--20__3jkCh",
	"p-t--20": "space_p-t--20__3PMvM",
	"m-t--20--sm": "space_m-t--20--sm__10dBd",
	"m-t--20--sm-": "space_m-t--20--sm-__Nmwq2",
	"p-t--20--sm": "space_p-t--20--sm__1Ykf4",
	"p-t--20--sm-": "space_p-t--20--sm-__2QuUa",
	"m-t--20--md": "space_m-t--20--md__2pVqC",
	"m-t--20--md-": "space_m-t--20--md-__2ySkF",
	"p-t--20--md": "space_p-t--20--md__2JkgZ",
	"p-t--20--md-": "space_p-t--20--md-__29eoB",
	"m-t--20--lg": "space_m-t--20--lg__2MuI5",
	"m-t--20--lg-": "space_m-t--20--lg-__3JUnm",
	"p-t--20--lg": "space_p-t--20--lg__3XJZ8",
	"p-t--20--lg-": "space_p-t--20--lg-__2KBqs",
	"nf-m-b--20": "space_nf-m-b--20__BlEAM",
	"nf-p-b--20": "space_nf-p-b--20__2CCOZ",
	"m-b--20": "space_m-b--20__3uTAS",
	"p-b--20": "space_p-b--20__5eZdh",
	"m-b--20--sm": "space_m-b--20--sm__1SiFQ",
	"m-b--20--sm-": "space_m-b--20--sm-__3OOmp",
	"p-b--20--sm": "space_p-b--20--sm__1tHCr",
	"p-b--20--sm-": "space_p-b--20--sm-__-wJmS",
	"m-b--20--md": "space_m-b--20--md__Hf2Oz",
	"m-b--20--md-": "space_m-b--20--md-__2Sgee",
	"p-b--20--md": "space_p-b--20--md__2CXZM",
	"p-b--20--md-": "space_p-b--20--md-__3ZIw-",
	"m-b--20--lg": "space_m-b--20--lg__2AoLl",
	"m-b--20--lg-": "space_m-b--20--lg-__2pVa7",
	"p-b--20--lg": "space_p-b--20--lg__2I2oD",
	"p-b--20--lg-": "space_p-b--20--lg-__3b-s6",
	"nf-m-l--20": "space_nf-m-l--20__2D4Ro",
	"nf-p-l--20": "space_nf-p-l--20__3c0GQ",
	"m-l--20": "space_m-l--20__pZcyI",
	"p-l--20": "space_p-l--20__2XZsU",
	"m-l--20--sm": "space_m-l--20--sm__1TtmS",
	"m-l--20--sm-": "space_m-l--20--sm-__3-h7x",
	"p-l--20--sm": "space_p-l--20--sm__AAf0A",
	"p-l--20--sm-": "space_p-l--20--sm-__QTfEU",
	"m-l--20--md": "space_m-l--20--md__15JCu",
	"m-l--20--md-": "space_m-l--20--md-__26bpB",
	"p-l--20--md": "space_p-l--20--md__2gK7z",
	"p-l--20--md-": "space_p-l--20--md-__uFtcH",
	"m-l--20--lg": "space_m-l--20--lg__1_ntx",
	"m-l--20--lg-": "space_m-l--20--lg-__2R2UD",
	"p-l--20--lg": "space_p-l--20--lg__-Sjkh",
	"p-l--20--lg-": "space_p-l--20--lg-__1ArKW",
	"nf-m-r--20": "space_nf-m-r--20__3GCkE",
	"nf-p-r--20": "space_nf-p-r--20__29wNj",
	"m-r--20": "space_m-r--20__1T6f4",
	"p-r--20": "space_p-r--20__23lgW",
	"m-r--20--sm": "space_m-r--20--sm__3ScBl",
	"m-r--20--sm-": "space_m-r--20--sm-__1E6eP",
	"p-r--20--sm": "space_p-r--20--sm__3B6gr",
	"p-r--20--sm-": "space_p-r--20--sm-__4cauL",
	"m-r--20--md": "space_m-r--20--md__1WxPU",
	"m-r--20--md-": "space_m-r--20--md-__-3NUB",
	"p-r--20--md": "space_p-r--20--md__2ra--",
	"p-r--20--md-": "space_p-r--20--md-__1G-QY",
	"m-r--20--lg": "space_m-r--20--lg__2S6G6",
	"m-r--20--lg-": "space_m-r--20--lg-__1eVwu",
	"p-r--20--lg": "space_p-r--20--lg__2DNDG",
	"p-r--20--lg-": "space_p-r--20--lg-__1gyEN",
	"m--22": "space_m--22__1DYFO",
	"m-h--22": "space_m-h--22__2YoGO",
	"m-v--22": "space_m-v--22__d7P7y",
	"p--22": "space_p--22__2EUGk",
	"p-h--22": "space_p-h--22__1Oex0",
	"p-v--22": "space_p-v--22__EZlX1",
	"nf-m--22": "space_nf-m--22__11aqU",
	"nf-p--22": "space_nf-p--22__2Cxen",
	"nf-m-t--22": "space_nf-m-t--22__AkkRS",
	"nf-p-t--22": "space_nf-p-t--22__1Ygj3",
	"m-t--22": "space_m-t--22__S9clY",
	"p-t--22": "space_p-t--22__3fjHT",
	"m-t--22--sm": "space_m-t--22--sm__1lF8p",
	"m-t--22--sm-": "space_m-t--22--sm-__wSIi7",
	"p-t--22--sm": "space_p-t--22--sm__vUnEN",
	"p-t--22--sm-": "space_p-t--22--sm-__1wkbP",
	"m-t--22--md": "space_m-t--22--md__1vOsX",
	"m-t--22--md-": "space_m-t--22--md-__1VWye",
	"p-t--22--md": "space_p-t--22--md__ZNIkJ",
	"p-t--22--md-": "space_p-t--22--md-__3J9Qi",
	"m-t--22--lg": "space_m-t--22--lg__30Mca",
	"m-t--22--lg-": "space_m-t--22--lg-__2S4Mg",
	"p-t--22--lg": "space_p-t--22--lg__1D8sa",
	"p-t--22--lg-": "space_p-t--22--lg-__2uCH-",
	"nf-m-b--22": "space_nf-m-b--22__1kogH",
	"nf-p-b--22": "space_nf-p-b--22__1FJVJ",
	"m-b--22": "space_m-b--22__16bJY",
	"p-b--22": "space_p-b--22__1NsK8",
	"m-b--22--sm": "space_m-b--22--sm__1aM4o",
	"m-b--22--sm-": "space_m-b--22--sm-__2ZX1k",
	"p-b--22--sm": "space_p-b--22--sm__3n8_O",
	"p-b--22--sm-": "space_p-b--22--sm-__3a_dT",
	"m-b--22--md": "space_m-b--22--md__3Ue_W",
	"m-b--22--md-": "space_m-b--22--md-__2EZy3",
	"p-b--22--md": "space_p-b--22--md__1L9Es",
	"p-b--22--md-": "space_p-b--22--md-__3UsG5",
	"m-b--22--lg": "space_m-b--22--lg__2RlfI",
	"m-b--22--lg-": "space_m-b--22--lg-__1QRmZ",
	"p-b--22--lg": "space_p-b--22--lg__EY_BU",
	"p-b--22--lg-": "space_p-b--22--lg-__3y49G",
	"nf-m-l--22": "space_nf-m-l--22__28551",
	"nf-p-l--22": "space_nf-p-l--22__3B-L0",
	"m-l--22": "space_m-l--22__5Vd1i",
	"p-l--22": "space_p-l--22__3gB8J",
	"m-l--22--sm": "space_m-l--22--sm__1QIot",
	"m-l--22--sm-": "space_m-l--22--sm-__2fFBu",
	"p-l--22--sm": "space_p-l--22--sm__DPdJg",
	"p-l--22--sm-": "space_p-l--22--sm-__2Lqo6",
	"m-l--22--md": "space_m-l--22--md__H9z0z",
	"m-l--22--md-": "space_m-l--22--md-__3AZZ7",
	"p-l--22--md": "space_p-l--22--md__2sfmR",
	"p-l--22--md-": "space_p-l--22--md-__YcfRa",
	"m-l--22--lg": "space_m-l--22--lg__2iRBO",
	"m-l--22--lg-": "space_m-l--22--lg-__1E3rS",
	"p-l--22--lg": "space_p-l--22--lg__2N23Y",
	"p-l--22--lg-": "space_p-l--22--lg-__2U3yP",
	"nf-m-r--22": "space_nf-m-r--22__azj2a",
	"nf-p-r--22": "space_nf-p-r--22__2uXQ7",
	"m-r--22": "space_m-r--22__3ovXf",
	"p-r--22": "space_p-r--22__GzYeK",
	"m-r--22--sm": "space_m-r--22--sm__3AJcI",
	"m-r--22--sm-": "space_m-r--22--sm-__35MO8",
	"p-r--22--sm": "space_p-r--22--sm__3pZhy",
	"p-r--22--sm-": "space_p-r--22--sm-__2kGj8",
	"m-r--22--md": "space_m-r--22--md__3zl70",
	"m-r--22--md-": "space_m-r--22--md-__WfDnD",
	"p-r--22--md": "space_p-r--22--md__1idu-",
	"p-r--22--md-": "space_p-r--22--md-__37z0p",
	"m-r--22--lg": "space_m-r--22--lg__26GYw",
	"m-r--22--lg-": "space_m-r--22--lg-___EHcP",
	"p-r--22--lg": "space_p-r--22--lg__xsnP-",
	"p-r--22--lg-": "space_p-r--22--lg-__3Eyq5",
	"m--24": "space_m--24__1UdN3",
	"m-h--24": "space_m-h--24__1rgGt",
	"m-v--24": "space_m-v--24__1Cedf",
	"p--24": "space_p--24__3hBmx",
	"p-h--24": "space_p-h--24__Dpx-P",
	"p-v--24": "space_p-v--24__XHz72",
	"nf-m--24": "space_nf-m--24__EjQFY",
	"nf-p--24": "space_nf-p--24__2gBaP",
	"nf-m-t--24": "space_nf-m-t--24__1d4oJ",
	"nf-p-t--24": "space_nf-p-t--24__1nkW5",
	"m-t--24": "space_m-t--24__2OrTW",
	"p-t--24": "space_p-t--24__2j58x",
	"m-t--24--sm": "space_m-t--24--sm__2Azzg",
	"m-t--24--sm-": "space_m-t--24--sm-__jjTaM",
	"p-t--24--sm": "space_p-t--24--sm__1Vwh7",
	"p-t--24--sm-": "space_p-t--24--sm-__w91z8",
	"m-t--24--md": "space_m-t--24--md__3FT4g",
	"m-t--24--md-": "space_m-t--24--md-__-WymK",
	"p-t--24--md": "space_p-t--24--md__1bIpR",
	"p-t--24--md-": "space_p-t--24--md-__2b0f4",
	"m-t--24--lg": "space_m-t--24--lg__2wi5N",
	"m-t--24--lg-": "space_m-t--24--lg-__eWYGz",
	"p-t--24--lg": "space_p-t--24--lg__37482",
	"p-t--24--lg-": "space_p-t--24--lg-__3LRpg",
	"nf-m-b--24": "space_nf-m-b--24__3q2M8",
	"nf-p-b--24": "space_nf-p-b--24__1-R_E",
	"m-b--24": "space_m-b--24__1Vvrn",
	"p-b--24": "space_p-b--24__JgEGJ",
	"m-b--24--sm": "space_m-b--24--sm__22_Mr",
	"m-b--24--sm-": "space_m-b--24--sm-__2WsDt",
	"p-b--24--sm": "space_p-b--24--sm__rpPhL",
	"p-b--24--sm-": "space_p-b--24--sm-__VxuqL",
	"m-b--24--md": "space_m-b--24--md__1shjL",
	"m-b--24--md-": "space_m-b--24--md-__3HpQT",
	"p-b--24--md": "space_p-b--24--md__1nT9p",
	"p-b--24--md-": "space_p-b--24--md-__2FLTM",
	"m-b--24--lg": "space_m-b--24--lg__3ONqZ",
	"m-b--24--lg-": "space_m-b--24--lg-__1AiZs",
	"p-b--24--lg": "space_p-b--24--lg__3jQcf",
	"p-b--24--lg-": "space_p-b--24--lg-__3DOo6",
	"nf-m-l--24": "space_nf-m-l--24__23L3_",
	"nf-p-l--24": "space_nf-p-l--24__1hTyw",
	"m-l--24": "space_m-l--24__17Z3Z",
	"p-l--24": "space_p-l--24__fV4DA",
	"m-l--24--sm": "space_m-l--24--sm__2NeDf",
	"m-l--24--sm-": "space_m-l--24--sm-__1P0H2",
	"p-l--24--sm": "space_p-l--24--sm___YjCb",
	"p-l--24--sm-": "space_p-l--24--sm-__3Ck4S",
	"m-l--24--md": "space_m-l--24--md__1gz8-",
	"m-l--24--md-": "space_m-l--24--md-__2Ydv4",
	"p-l--24--md": "space_p-l--24--md__3wXBw",
	"p-l--24--md-": "space_p-l--24--md-__6p_kh",
	"m-l--24--lg": "space_m-l--24--lg__eFIAN",
	"m-l--24--lg-": "space_m-l--24--lg-__3mIqw",
	"p-l--24--lg": "space_p-l--24--lg__wGg6i",
	"p-l--24--lg-": "space_p-l--24--lg-__35veX",
	"nf-m-r--24": "space_nf-m-r--24__1lEh5",
	"nf-p-r--24": "space_nf-p-r--24__2_Dcd",
	"m-r--24": "space_m-r--24__24JNv",
	"p-r--24": "space_p-r--24__347L0",
	"m-r--24--sm": "space_m-r--24--sm__1Nygk",
	"m-r--24--sm-": "space_m-r--24--sm-__3PRr7",
	"p-r--24--sm": "space_p-r--24--sm__3emz0",
	"p-r--24--sm-": "space_p-r--24--sm-__3NsE3",
	"m-r--24--md": "space_m-r--24--md__PXRoY",
	"m-r--24--md-": "space_m-r--24--md-__17QSu",
	"p-r--24--md": "space_p-r--24--md__3xknF",
	"p-r--24--md-": "space_p-r--24--md-__2760h",
	"m-r--24--lg": "space_m-r--24--lg__33jhU",
	"m-r--24--lg-": "space_m-r--24--lg-__1MQf5",
	"p-r--24--lg": "space_p-r--24--lg__84XjL",
	"p-r--24--lg-": "space_p-r--24--lg-__2sZpe",
	"m--25": "space_m--25__2Q5jo",
	"m-h--25": "space_m-h--25__2E94Z",
	"m-v--25": "space_m-v--25__26y8d",
	"p--25": "space_p--25__24nNw",
	"p-h--25": "space_p-h--25__35ki3",
	"p-v--25": "space_p-v--25__1h4aq",
	"nf-m--25": "space_nf-m--25__p5khC",
	"nf-p--25": "space_nf-p--25__2AzHc",
	"nf-m-t--25": "space_nf-m-t--25__3W6Au",
	"nf-p-t--25": "space_nf-p-t--25__A7mkY",
	"m-t--25": "space_m-t--25__3w8QI",
	"p-t--25": "space_p-t--25__uMNZh",
	"m-t--25--sm": "space_m-t--25--sm__16NjT",
	"m-t--25--sm-": "space_m-t--25--sm-__2EEvg",
	"p-t--25--sm": "space_p-t--25--sm__7zkGQ",
	"p-t--25--sm-": "space_p-t--25--sm-__1y5RM",
	"m-t--25--md": "space_m-t--25--md__3He0P",
	"m-t--25--md-": "space_m-t--25--md-__x8Og5",
	"p-t--25--md": "space_p-t--25--md__1CJjh",
	"p-t--25--md-": "space_p-t--25--md-__5ouA7",
	"m-t--25--lg": "space_m-t--25--lg__3y7aw",
	"m-t--25--lg-": "space_m-t--25--lg-__2zdSE",
	"p-t--25--lg": "space_p-t--25--lg__3kPvb",
	"p-t--25--lg-": "space_p-t--25--lg-__3kZqL",
	"nf-m-b--25": "space_nf-m-b--25__14Wt_",
	"nf-p-b--25": "space_nf-p-b--25__3wmZc",
	"m-b--25": "space_m-b--25__2oGs5",
	"p-b--25": "space_p-b--25__31cla",
	"m-b--25--sm": "space_m-b--25--sm__1EvTr",
	"m-b--25--sm-": "space_m-b--25--sm-__18lr3",
	"p-b--25--sm": "space_p-b--25--sm__34hJh",
	"p-b--25--sm-": "space_p-b--25--sm-__1J6rO",
	"m-b--25--md": "space_m-b--25--md__2Q9MQ",
	"m-b--25--md-": "space_m-b--25--md-__1n6uq",
	"p-b--25--md": "space_p-b--25--md__3bQBE",
	"p-b--25--md-": "space_p-b--25--md-__Hjm0q",
	"m-b--25--lg": "space_m-b--25--lg__2c7Ax",
	"m-b--25--lg-": "space_m-b--25--lg-__3ETzh",
	"p-b--25--lg": "space_p-b--25--lg__25mO8",
	"p-b--25--lg-": "space_p-b--25--lg-__2qbnV",
	"nf-m-l--25": "space_nf-m-l--25__2hysQ",
	"nf-p-l--25": "space_nf-p-l--25__rVvkp",
	"m-l--25": "space_m-l--25__3Kf7R",
	"p-l--25": "space_p-l--25__2nGeB",
	"m-l--25--sm": "space_m-l--25--sm__2sOaj",
	"m-l--25--sm-": "space_m-l--25--sm-__1MCpa",
	"p-l--25--sm": "space_p-l--25--sm__3sAzy",
	"p-l--25--sm-": "space_p-l--25--sm-__2GZMK",
	"m-l--25--md": "space_m-l--25--md__2-23a",
	"m-l--25--md-": "space_m-l--25--md-__3N0ic",
	"p-l--25--md": "space_p-l--25--md__22yXG",
	"p-l--25--md-": "space_p-l--25--md-__2nGWT",
	"m-l--25--lg": "space_m-l--25--lg__3vLS7",
	"m-l--25--lg-": "space_m-l--25--lg-__1wpAw",
	"p-l--25--lg": "space_p-l--25--lg__30xVC",
	"p-l--25--lg-": "space_p-l--25--lg-__r5OHV",
	"nf-m-r--25": "space_nf-m-r--25__1VS6T",
	"nf-p-r--25": "space_nf-p-r--25__3o8oM",
	"m-r--25": "space_m-r--25__2KNfn",
	"p-r--25": "space_p-r--25__1t2l-",
	"m-r--25--sm": "space_m-r--25--sm__3uBAu",
	"m-r--25--sm-": "space_m-r--25--sm-__1iykG",
	"p-r--25--sm": "space_p-r--25--sm__SNB_u",
	"p-r--25--sm-": "space_p-r--25--sm-__2hzBH",
	"m-r--25--md": "space_m-r--25--md__bSiV7",
	"m-r--25--md-": "space_m-r--25--md-__1bwNw",
	"p-r--25--md": "space_p-r--25--md__24LEa",
	"p-r--25--md-": "space_p-r--25--md-__1kIpO",
	"m-r--25--lg": "space_m-r--25--lg__1wmAM",
	"m-r--25--lg-": "space_m-r--25--lg-__3-sJT",
	"p-r--25--lg": "space_p-r--25--lg__1hQeq",
	"p-r--25--lg-": "space_p-r--25--lg-__3nxXq",
	"m--28": "space_m--28__1vYWa",
	"m-h--28": "space_m-h--28__-ko1S",
	"m-v--28": "space_m-v--28__2bPfY",
	"p--28": "space_p--28__1Drpx",
	"p-h--28": "space_p-h--28__2pskD",
	"p-v--28": "space_p-v--28__1iJ__",
	"nf-m--28": "space_nf-m--28__1z74a",
	"nf-p--28": "space_nf-p--28___FW3h",
	"nf-m-t--28": "space_nf-m-t--28__orMd_",
	"nf-p-t--28": "space_nf-p-t--28__bLBSx",
	"m-t--28": "space_m-t--28__1cvzr",
	"p-t--28": "space_p-t--28__2Gsz5",
	"m-t--28--sm": "space_m-t--28--sm__2URyd",
	"m-t--28--sm-": "space_m-t--28--sm-__1aoUT",
	"p-t--28--sm": "space_p-t--28--sm__4Kw02",
	"p-t--28--sm-": "space_p-t--28--sm-__434yq",
	"m-t--28--md": "space_m-t--28--md__2eCcv",
	"m-t--28--md-": "space_m-t--28--md-__3YlpN",
	"p-t--28--md": "space_p-t--28--md__lcljc",
	"p-t--28--md-": "space_p-t--28--md-__2Hsrv",
	"m-t--28--lg": "space_m-t--28--lg__1XIyM",
	"m-t--28--lg-": "space_m-t--28--lg-__1KfSx",
	"p-t--28--lg": "space_p-t--28--lg__37DNd",
	"p-t--28--lg-": "space_p-t--28--lg-__qqo_b",
	"nf-m-b--28": "space_nf-m-b--28__OsNNl",
	"nf-p-b--28": "space_nf-p-b--28__21HUU",
	"m-b--28": "space_m-b--28__Gzfbq",
	"p-b--28": "space_p-b--28__x2Dib",
	"m-b--28--sm": "space_m-b--28--sm__2bK87",
	"m-b--28--sm-": "space_m-b--28--sm-__1GZhT",
	"p-b--28--sm": "space_p-b--28--sm__dpAV_",
	"p-b--28--sm-": "space_p-b--28--sm-__3HQGu",
	"m-b--28--md": "space_m-b--28--md__2ueRw",
	"m-b--28--md-": "space_m-b--28--md-__20vAV",
	"p-b--28--md": "space_p-b--28--md__3Nz__",
	"p-b--28--md-": "space_p-b--28--md-__EeVJG",
	"m-b--28--lg": "space_m-b--28--lg__3I4CK",
	"m-b--28--lg-": "space_m-b--28--lg-__2GuoF",
	"p-b--28--lg": "space_p-b--28--lg__2u0VH",
	"p-b--28--lg-": "space_p-b--28--lg-__2vvQ3",
	"nf-m-l--28": "space_nf-m-l--28__3rLX4",
	"nf-p-l--28": "space_nf-p-l--28__1qRBe",
	"m-l--28": "space_m-l--28__3tsxj",
	"p-l--28": "space_p-l--28__2m4Os",
	"m-l--28--sm": "space_m-l--28--sm__2Zi4R",
	"m-l--28--sm-": "space_m-l--28--sm-__DPRg6",
	"p-l--28--sm": "space_p-l--28--sm__gTWfi",
	"p-l--28--sm-": "space_p-l--28--sm-__2tgqk",
	"m-l--28--md": "space_m-l--28--md__2yy_g",
	"m-l--28--md-": "space_m-l--28--md-__1NACH",
	"p-l--28--md": "space_p-l--28--md__3HX-E",
	"p-l--28--md-": "space_p-l--28--md-__1dT6f",
	"m-l--28--lg": "space_m-l--28--lg__dotdi",
	"m-l--28--lg-": "space_m-l--28--lg-__1kpSC",
	"p-l--28--lg": "space_p-l--28--lg__1_dU2",
	"p-l--28--lg-": "space_p-l--28--lg-__3lSwa",
	"nf-m-r--28": "space_nf-m-r--28__3SeBb",
	"nf-p-r--28": "space_nf-p-r--28__28A-9",
	"m-r--28": "space_m-r--28__1Iqww",
	"p-r--28": "space_p-r--28__1Giqj",
	"m-r--28--sm": "space_m-r--28--sm__rP_Md",
	"m-r--28--sm-": "space_m-r--28--sm-__1L4P2",
	"p-r--28--sm": "space_p-r--28--sm__3MkEJ",
	"p-r--28--sm-": "space_p-r--28--sm-__1qGTe",
	"m-r--28--md": "space_m-r--28--md__3yjQ4",
	"m-r--28--md-": "space_m-r--28--md-__1_AOS",
	"p-r--28--md": "space_p-r--28--md__r7j19",
	"p-r--28--md-": "space_p-r--28--md-___9iFB",
	"m-r--28--lg": "space_m-r--28--lg__1KRKz",
	"m-r--28--lg-": "space_m-r--28--lg-__W9gFO",
	"p-r--28--lg": "space_p-r--28--lg__bqYXK",
	"p-r--28--lg-": "space_p-r--28--lg-__276yv",
	"m--30": "space_m--30__6jBi1",
	"m-h--30": "space_m-h--30__1NVly",
	"m-v--30": "space_m-v--30__1VU-T",
	"p--30": "space_p--30__1VIw9",
	"p-h--30": "space_p-h--30__KYZPS",
	"p-v--30": "space_p-v--30__SLVJi",
	"nf-m--30": "space_nf-m--30__8b3WL",
	"nf-p--30": "space_nf-p--30__9teOh",
	"nf-m-t--30": "space_nf-m-t--30__c6gBu",
	"nf-p-t--30": "space_nf-p-t--30__3HWpg",
	"m-t--30": "space_m-t--30__bF6-m",
	"p-t--30": "space_p-t--30__2gibZ",
	"m-t--30--sm": "space_m-t--30--sm__YG39p",
	"m-t--30--sm-": "space_m-t--30--sm-__1oZiP",
	"p-t--30--sm": "space_p-t--30--sm__2QfCC",
	"p-t--30--sm-": "space_p-t--30--sm-__1TEeJ",
	"m-t--30--md": "space_m-t--30--md__1HJgo",
	"m-t--30--md-": "space_m-t--30--md-__205IF",
	"p-t--30--md": "space_p-t--30--md__8jYMm",
	"p-t--30--md-": "space_p-t--30--md-__1dzlU",
	"m-t--30--lg": "space_m-t--30--lg__O-fCu",
	"m-t--30--lg-": "space_m-t--30--lg-__39b8b",
	"p-t--30--lg": "space_p-t--30--lg__3e4NR",
	"p-t--30--lg-": "space_p-t--30--lg-__Xsn2B",
	"nf-m-b--30": "space_nf-m-b--30__3EijG",
	"nf-p-b--30": "space_nf-p-b--30__2jQZd",
	"m-b--30": "space_m-b--30__1pbXe",
	"p-b--30": "space_p-b--30__2BK6A",
	"m-b--30--sm": "space_m-b--30--sm__2o78o",
	"m-b--30--sm-": "space_m-b--30--sm-__lJ1EE",
	"p-b--30--sm": "space_p-b--30--sm__2kZVA",
	"p-b--30--sm-": "space_p-b--30--sm-__3mR1h",
	"m-b--30--md": "space_m-b--30--md__FbBBn",
	"m-b--30--md-": "space_m-b--30--md-__3cHbZ",
	"p-b--30--md": "space_p-b--30--md__3KXLw",
	"p-b--30--md-": "space_p-b--30--md-__3HH2M",
	"m-b--30--lg": "space_m-b--30--lg__36BjF",
	"m-b--30--lg-": "space_m-b--30--lg-__1AE_c",
	"p-b--30--lg": "space_p-b--30--lg__1h4Rz",
	"p-b--30--lg-": "space_p-b--30--lg-__x-_el",
	"nf-m-l--30": "space_nf-m-l--30__OJdJN",
	"nf-p-l--30": "space_nf-p-l--30__WS82Q",
	"m-l--30": "space_m-l--30__1kpxL",
	"p-l--30": "space_p-l--30__10e7t",
	"m-l--30--sm": "space_m-l--30--sm__2ZPO5",
	"m-l--30--sm-": "space_m-l--30--sm-__vQVBM",
	"p-l--30--sm": "space_p-l--30--sm__UNjgv",
	"p-l--30--sm-": "space_p-l--30--sm-__NTQk0",
	"m-l--30--md": "space_m-l--30--md__2x_HS",
	"m-l--30--md-": "space_m-l--30--md-__1FzkY",
	"p-l--30--md": "space_p-l--30--md__vxVdR",
	"p-l--30--md-": "space_p-l--30--md-__204bz",
	"m-l--30--lg": "space_m-l--30--lg__2ga7c",
	"m-l--30--lg-": "space_m-l--30--lg-__2mv3H",
	"p-l--30--lg": "space_p-l--30--lg__2CbZN",
	"p-l--30--lg-": "space_p-l--30--lg-__3Xvx_",
	"nf-m-r--30": "space_nf-m-r--30__18x5R",
	"nf-p-r--30": "space_nf-p-r--30__rl6yN",
	"m-r--30": "space_m-r--30__1gIbu",
	"p-r--30": "space_p-r--30__2lWaj",
	"m-r--30--sm": "space_m-r--30--sm__yVpcV",
	"m-r--30--sm-": "space_m-r--30--sm-__2IUOA",
	"p-r--30--sm": "space_p-r--30--sm__3C-yA",
	"p-r--30--sm-": "space_p-r--30--sm-__3d1GH",
	"m-r--30--md": "space_m-r--30--md__db-1e",
	"m-r--30--md-": "space_m-r--30--md-__RXhLs",
	"p-r--30--md": "space_p-r--30--md__23WIm",
	"p-r--30--md-": "space_p-r--30--md-__fOPAT",
	"m-r--30--lg": "space_m-r--30--lg__3EEBg",
	"m-r--30--lg-": "space_m-r--30--lg-__2zMxo",
	"p-r--30--lg": "space_p-r--30--lg__1Sx1j",
	"p-r--30--lg-": "space_p-r--30--lg-__2L6Ji",
	"m--32": "space_m--32__3ci6B",
	"m-h--32": "space_m-h--32__3h1wq",
	"m-v--32": "space_m-v--32__2mXQ9",
	"p--32": "space_p--32__2HUkL",
	"p-h--32": "space_p-h--32__QtU0D",
	"p-v--32": "space_p-v--32__1zIJM",
	"nf-m--32": "space_nf-m--32__27D8i",
	"nf-p--32": "space_nf-p--32__ev_6y",
	"nf-m-t--32": "space_nf-m-t--32__158AY",
	"nf-p-t--32": "space_nf-p-t--32__gCycc",
	"m-t--32": "space_m-t--32__DUc_3",
	"p-t--32": "space_p-t--32__3Cmru",
	"m-t--32--sm": "space_m-t--32--sm__po9HS",
	"m-t--32--sm-": "space_m-t--32--sm-__3hYFI",
	"p-t--32--sm": "space_p-t--32--sm__3xi7j",
	"p-t--32--sm-": "space_p-t--32--sm-__2oHmP",
	"m-t--32--md": "space_m-t--32--md__h6qA5",
	"m-t--32--md-": "space_m-t--32--md-__EIqVu",
	"p-t--32--md": "space_p-t--32--md__1jTgY",
	"p-t--32--md-": "space_p-t--32--md-__gyLFC",
	"m-t--32--lg": "space_m-t--32--lg__2yzpU",
	"m-t--32--lg-": "space_m-t--32--lg-__3mcHR",
	"p-t--32--lg": "space_p-t--32--lg__27F6J",
	"p-t--32--lg-": "space_p-t--32--lg-__3l1Q6",
	"nf-m-b--32": "space_nf-m-b--32__2rFRF",
	"nf-p-b--32": "space_nf-p-b--32__1TI5X",
	"m-b--32": "space_m-b--32__3IgSa",
	"p-b--32": "space_p-b--32__3yPO7",
	"m-b--32--sm": "space_m-b--32--sm__3B43e",
	"m-b--32--sm-": "space_m-b--32--sm-__2O16Z",
	"p-b--32--sm": "space_p-b--32--sm__3Vr9j",
	"p-b--32--sm-": "space_p-b--32--sm-__2G4LH",
	"m-b--32--md": "space_m-b--32--md__1Wcbg",
	"m-b--32--md-": "space_m-b--32--md-__zaENH",
	"p-b--32--md": "space_p-b--32--md__fl1W6",
	"p-b--32--md-": "space_p-b--32--md-__22LTj",
	"m-b--32--lg": "space_m-b--32--lg__3psDE",
	"m-b--32--lg-": "space_m-b--32--lg-__2_OsP",
	"p-b--32--lg": "space_p-b--32--lg__2mgxL",
	"p-b--32--lg-": "space_p-b--32--lg-__2t2b0",
	"nf-m-l--32": "space_nf-m-l--32__3ONy7",
	"nf-p-l--32": "space_nf-p-l--32__21LyR",
	"m-l--32": "space_m-l--32__2d4gO",
	"p-l--32": "space_p-l--32__SYLNO",
	"m-l--32--sm": "space_m-l--32--sm__25po2",
	"m-l--32--sm-": "space_m-l--32--sm-__2G467",
	"p-l--32--sm": "space_p-l--32--sm__2YtCk",
	"p-l--32--sm-": "space_p-l--32--sm-__2UUXy",
	"m-l--32--md": "space_m-l--32--md__e30nJ",
	"m-l--32--md-": "space_m-l--32--md-__73Ali",
	"p-l--32--md": "space_p-l--32--md__2pOQu",
	"p-l--32--md-": "space_p-l--32--md-__1udeI",
	"m-l--32--lg": "space_m-l--32--lg__6GrSD",
	"m-l--32--lg-": "space_m-l--32--lg-__2yJPa",
	"p-l--32--lg": "space_p-l--32--lg__3bBLS",
	"p-l--32--lg-": "space_p-l--32--lg-__1rv0D",
	"nf-m-r--32": "space_nf-m-r--32__bSBHa",
	"nf-p-r--32": "space_nf-p-r--32__jPXPW",
	"m-r--32": "space_m-r--32__1kglf",
	"p-r--32": "space_p-r--32__1YNnL",
	"m-r--32--sm": "space_m-r--32--sm__3116o",
	"m-r--32--sm-": "space_m-r--32--sm-__cCgzp",
	"p-r--32--sm": "space_p-r--32--sm__3nuBE",
	"p-r--32--sm-": "space_p-r--32--sm-__26pS5",
	"m-r--32--md": "space_m-r--32--md__x5SuN",
	"m-r--32--md-": "space_m-r--32--md-__1BBeH",
	"p-r--32--md": "space_p-r--32--md__1lRGl",
	"p-r--32--md-": "space_p-r--32--md-__3cRoG",
	"m-r--32--lg": "space_m-r--32--lg__1DFdE",
	"m-r--32--lg-": "space_m-r--32--lg-__1yn1I",
	"p-r--32--lg": "space_p-r--32--lg__cm8hD",
	"p-r--32--lg-": "space_p-r--32--lg-__uR7Ya",
	"m--35": "space_m--35__zd39S",
	"m-h--35": "space_m-h--35__gxpSs",
	"m-v--35": "space_m-v--35__X-v4i",
	"p--35": "space_p--35__36ve-",
	"p-h--35": "space_p-h--35__2moda",
	"p-v--35": "space_p-v--35__2hDwu",
	"nf-m--35": "space_nf-m--35__1VAy3",
	"nf-p--35": "space_nf-p--35__G0EBR",
	"nf-m-t--35": "space_nf-m-t--35__3WE3-",
	"nf-p-t--35": "space_nf-p-t--35__3eZ8A",
	"m-t--35": "space_m-t--35__2bdyN",
	"p-t--35": "space_p-t--35__1pxp8",
	"m-t--35--sm": "space_m-t--35--sm__1QENg",
	"m-t--35--sm-": "space_m-t--35--sm-__JgEs2",
	"p-t--35--sm": "space_p-t--35--sm__2YZij",
	"p-t--35--sm-": "space_p-t--35--sm-__29u5Y",
	"m-t--35--md": "space_m-t--35--md__2-cKk",
	"m-t--35--md-": "space_m-t--35--md-__1ROgM",
	"p-t--35--md": "space_p-t--35--md__3_hKj",
	"p-t--35--md-": "space_p-t--35--md-__D3dxh",
	"m-t--35--lg": "space_m-t--35--lg__38zsx",
	"m-t--35--lg-": "space_m-t--35--lg-__EAZQ3",
	"p-t--35--lg": "space_p-t--35--lg__1qqPZ",
	"p-t--35--lg-": "space_p-t--35--lg-__1Vhq4",
	"nf-m-b--35": "space_nf-m-b--35__2yVzO",
	"nf-p-b--35": "space_nf-p-b--35__32TT8",
	"m-b--35": "space_m-b--35__3k7zW",
	"p-b--35": "space_p-b--35__2FQn9",
	"m-b--35--sm": "space_m-b--35--sm__3CV4a",
	"m-b--35--sm-": "space_m-b--35--sm-__17aqA",
	"p-b--35--sm": "space_p-b--35--sm__34yvO",
	"p-b--35--sm-": "space_p-b--35--sm-__3dvEF",
	"m-b--35--md": "space_m-b--35--md__1Pd-I",
	"m-b--35--md-": "space_m-b--35--md-__8Jn3y",
	"p-b--35--md": "space_p-b--35--md__3cS6c",
	"p-b--35--md-": "space_p-b--35--md-__KvtJG",
	"m-b--35--lg": "space_m-b--35--lg__6ad0p",
	"m-b--35--lg-": "space_m-b--35--lg-__1Fmx3",
	"p-b--35--lg": "space_p-b--35--lg__lV7u6",
	"p-b--35--lg-": "space_p-b--35--lg-__2deyH",
	"nf-m-l--35": "space_nf-m-l--35__3U9Yq",
	"nf-p-l--35": "space_nf-p-l--35__1yhKC",
	"m-l--35": "space_m-l--35__2Q2BX",
	"p-l--35": "space_p-l--35__8GBCJ",
	"m-l--35--sm": "space_m-l--35--sm__2ur8N",
	"m-l--35--sm-": "space_m-l--35--sm-__2_bkI",
	"p-l--35--sm": "space_p-l--35--sm__1E7p8",
	"p-l--35--sm-": "space_p-l--35--sm-__2KWvy",
	"m-l--35--md": "space_m-l--35--md__orkEd",
	"m-l--35--md-": "space_m-l--35--md-__3Ek-x",
	"p-l--35--md": "space_p-l--35--md__Zzc7t",
	"p-l--35--md-": "space_p-l--35--md-__1UfcM",
	"m-l--35--lg": "space_m-l--35--lg__2uEAo",
	"m-l--35--lg-": "space_m-l--35--lg-__1rjwZ",
	"p-l--35--lg": "space_p-l--35--lg__1CBKN",
	"p-l--35--lg-": "space_p-l--35--lg-__vqgiY",
	"nf-m-r--35": "space_nf-m-r--35__3k_JQ",
	"nf-p-r--35": "space_nf-p-r--35__3Mqib",
	"m-r--35": "space_m-r--35__I6met",
	"p-r--35": "space_p-r--35__2HkEi",
	"m-r--35--sm": "space_m-r--35--sm__1tnIQ",
	"m-r--35--sm-": "space_m-r--35--sm-__1JmgS",
	"p-r--35--sm": "space_p-r--35--sm__1Ql0Q",
	"p-r--35--sm-": "space_p-r--35--sm-__2maBJ",
	"m-r--35--md": "space_m-r--35--md__2Eu3E",
	"m-r--35--md-": "space_m-r--35--md-__3PzWi",
	"p-r--35--md": "space_p-r--35--md__3l9Vl",
	"p-r--35--md-": "space_p-r--35--md-__2gSNY",
	"m-r--35--lg": "space_m-r--35--lg__F8y8X",
	"m-r--35--lg-": "space_m-r--35--lg-__2Ij-o",
	"p-r--35--lg": "space_p-r--35--lg__2R2Uf",
	"p-r--35--lg-": "space_p-r--35--lg-__sOdH6",
	"m--38": "space_m--38__Fiaoo",
	"m-h--38": "space_m-h--38__10ZLx",
	"m-v--38": "space_m-v--38__1OfDl",
	"p--38": "space_p--38__37AU9",
	"p-h--38": "space_p-h--38__2E2fs",
	"p-v--38": "space_p-v--38__216Uo",
	"nf-m--38": "space_nf-m--38__2wl3n",
	"nf-p--38": "space_nf-p--38__esMPZ",
	"nf-m-t--38": "space_nf-m-t--38__3JAnf",
	"nf-p-t--38": "space_nf-p-t--38__2I2k_",
	"m-t--38": "space_m-t--38__JiGXH",
	"p-t--38": "space_p-t--38__2Yu7N",
	"m-t--38--sm": "space_m-t--38--sm__VBHz2",
	"m-t--38--sm-": "space_m-t--38--sm-__R88hv",
	"p-t--38--sm": "space_p-t--38--sm__2XeWp",
	"p-t--38--sm-": "space_p-t--38--sm-__qx68I",
	"m-t--38--md": "space_m-t--38--md__d1mOV",
	"m-t--38--md-": "space_m-t--38--md-__2GOuX",
	"p-t--38--md": "space_p-t--38--md__BJPRY",
	"p-t--38--md-": "space_p-t--38--md-__1YE31",
	"m-t--38--lg": "space_m-t--38--lg__aLFHb",
	"m-t--38--lg-": "space_m-t--38--lg-__3psF3",
	"p-t--38--lg": "space_p-t--38--lg__167Mh",
	"p-t--38--lg-": "space_p-t--38--lg-__1YTgf",
	"nf-m-b--38": "space_nf-m-b--38__3vmft",
	"nf-p-b--38": "space_nf-p-b--38__3210-",
	"m-b--38": "space_m-b--38__235NF",
	"p-b--38": "space_p-b--38__3k5d1",
	"m-b--38--sm": "space_m-b--38--sm__2haeC",
	"m-b--38--sm-": "space_m-b--38--sm-__3X8kB",
	"p-b--38--sm": "space_p-b--38--sm__3_NbN",
	"p-b--38--sm-": "space_p-b--38--sm-__3qdvt",
	"m-b--38--md": "space_m-b--38--md__1Z90n",
	"m-b--38--md-": "space_m-b--38--md-__1y_8d",
	"p-b--38--md": "space_p-b--38--md__2dHX_",
	"p-b--38--md-": "space_p-b--38--md-__2v8MY",
	"m-b--38--lg": "space_m-b--38--lg__3IzfU",
	"m-b--38--lg-": "space_m-b--38--lg-__3saeA",
	"p-b--38--lg": "space_p-b--38--lg__24zyC",
	"p-b--38--lg-": "space_p-b--38--lg-__sy8Fe",
	"nf-m-l--38": "space_nf-m-l--38__aaKFv",
	"nf-p-l--38": "space_nf-p-l--38__39IOL",
	"m-l--38": "space_m-l--38__jINcb",
	"p-l--38": "space_p-l--38__p07n6",
	"m-l--38--sm": "space_m-l--38--sm__1AGDV",
	"m-l--38--sm-": "space_m-l--38--sm-__1E0NV",
	"p-l--38--sm": "space_p-l--38--sm__205Ci",
	"p-l--38--sm-": "space_p-l--38--sm-__3rity",
	"m-l--38--md": "space_m-l--38--md__OIL0F",
	"m-l--38--md-": "space_m-l--38--md-__3Wabw",
	"p-l--38--md": "space_p-l--38--md__1ZAwj",
	"p-l--38--md-": "space_p-l--38--md-__1Bnyx",
	"m-l--38--lg": "space_m-l--38--lg__3LrVD",
	"m-l--38--lg-": "space_m-l--38--lg-__1BW-U",
	"p-l--38--lg": "space_p-l--38--lg__1TPar",
	"p-l--38--lg-": "space_p-l--38--lg-__1b_V6",
	"nf-m-r--38": "space_nf-m-r--38__2Jz1O",
	"nf-p-r--38": "space_nf-p-r--38__CIVEr",
	"m-r--38": "space_m-r--38__3dS5z",
	"p-r--38": "space_p-r--38__4f-kY",
	"m-r--38--sm": "space_m-r--38--sm__2NOOK",
	"m-r--38--sm-": "space_m-r--38--sm-__30vBG",
	"p-r--38--sm": "space_p-r--38--sm__1pwBO",
	"p-r--38--sm-": "space_p-r--38--sm-__27yCi",
	"m-r--38--md": "space_m-r--38--md__2sTfD",
	"m-r--38--md-": "space_m-r--38--md-__1cUko",
	"p-r--38--md": "space_p-r--38--md__xDJNQ",
	"p-r--38--md-": "space_p-r--38--md-__8Gkw1",
	"m-r--38--lg": "space_m-r--38--lg__Mjb2z",
	"m-r--38--lg-": "space_m-r--38--lg-__24Msn",
	"p-r--38--lg": "space_p-r--38--lg__2ropw",
	"p-r--38--lg-": "space_p-r--38--lg-__3Z8Vp",
	"m--40": "space_m--40__2MBbM",
	"m-h--40": "space_m-h--40__2wGM2",
	"m-v--40": "space_m-v--40__3kJ_P",
	"p--40": "space_p--40__2o4uS",
	"p-h--40": "space_p-h--40__1DZZZ",
	"p-v--40": "space_p-v--40__3nN3N",
	"nf-m--40": "space_nf-m--40__2i9_4",
	"nf-p--40": "space_nf-p--40__3_ca6",
	"nf-m-t--40": "space_nf-m-t--40__3i4O9",
	"nf-p-t--40": "space_nf-p-t--40__3bEEr",
	"m-t--40": "space_m-t--40__2UxpP",
	"p-t--40": "space_p-t--40__VNnH8",
	"m-t--40--sm": "space_m-t--40--sm__3eiDW",
	"m-t--40--sm-": "space_m-t--40--sm-__22XY1",
	"p-t--40--sm": "space_p-t--40--sm__1Iyb1",
	"p-t--40--sm-": "space_p-t--40--sm-__DhuDI",
	"m-t--40--md": "space_m-t--40--md__sP5al",
	"m-t--40--md-": "space_m-t--40--md-__KEBzX",
	"p-t--40--md": "space_p-t--40--md__1XNTi",
	"p-t--40--md-": "space_p-t--40--md-__3yLL5",
	"m-t--40--lg": "space_m-t--40--lg__33Y6q",
	"m-t--40--lg-": "space_m-t--40--lg-__210za",
	"p-t--40--lg": "space_p-t--40--lg__DvggE",
	"p-t--40--lg-": "space_p-t--40--lg-__2RENJ",
	"nf-m-b--40": "space_nf-m-b--40__3BjNf",
	"nf-p-b--40": "space_nf-p-b--40__3IRLy",
	"m-b--40": "space_m-b--40__35mXP",
	"p-b--40": "space_p-b--40__s7nTI",
	"m-b--40--sm": "space_m-b--40--sm___3s2N",
	"m-b--40--sm-": "space_m-b--40--sm-__28P0T",
	"p-b--40--sm": "space_p-b--40--sm__2yxSn",
	"p-b--40--sm-": "space_p-b--40--sm-__2hicf",
	"m-b--40--md": "space_m-b--40--md__3jEYB",
	"m-b--40--md-": "space_m-b--40--md-__1xHPM",
	"p-b--40--md": "space_p-b--40--md__1nk-z",
	"p-b--40--md-": "space_p-b--40--md-__UrRZH",
	"m-b--40--lg": "space_m-b--40--lg__nw3rX",
	"m-b--40--lg-": "space_m-b--40--lg-__1Z1Ru",
	"p-b--40--lg": "space_p-b--40--lg__MnELi",
	"p-b--40--lg-": "space_p-b--40--lg-__1XDM1",
	"nf-m-l--40": "space_nf-m-l--40__3I84o",
	"nf-p-l--40": "space_nf-p-l--40__Fa8B2",
	"m-l--40": "space_m-l--40__2oFSp",
	"p-l--40": "space_p-l--40__2g3jl",
	"m-l--40--sm": "space_m-l--40--sm__3zeJG",
	"m-l--40--sm-": "space_m-l--40--sm-__3o9oQ",
	"p-l--40--sm": "space_p-l--40--sm__2G4d7",
	"p-l--40--sm-": "space_p-l--40--sm-__2buRN",
	"m-l--40--md": "space_m-l--40--md__3W87a",
	"m-l--40--md-": "space_m-l--40--md-__3Cn12",
	"p-l--40--md": "space_p-l--40--md__3ANGx",
	"p-l--40--md-": "space_p-l--40--md-__1uI1R",
	"m-l--40--lg": "space_m-l--40--lg__31htH",
	"m-l--40--lg-": "space_m-l--40--lg-__257xf",
	"p-l--40--lg": "space_p-l--40--lg__365AZ",
	"p-l--40--lg-": "space_p-l--40--lg-__3y8sS",
	"nf-m-r--40": "space_nf-m-r--40__1PfDQ",
	"nf-p-r--40": "space_nf-p-r--40__oTtj_",
	"m-r--40": "space_m-r--40__2-kbA",
	"p-r--40": "space_p-r--40__vptzi",
	"m-r--40--sm": "space_m-r--40--sm__vo-o6",
	"m-r--40--sm-": "space_m-r--40--sm-__8PVki",
	"p-r--40--sm": "space_p-r--40--sm__3R1of",
	"p-r--40--sm-": "space_p-r--40--sm-__2pPU1",
	"m-r--40--md": "space_m-r--40--md__1ktX5",
	"m-r--40--md-": "space_m-r--40--md-__2AB0v",
	"p-r--40--md": "space_p-r--40--md__3ryKC",
	"p-r--40--md-": "space_p-r--40--md-__3iDlW",
	"m-r--40--lg": "space_m-r--40--lg__25Jld",
	"m-r--40--lg-": "space_m-r--40--lg-__2Y4cN",
	"p-r--40--lg": "space_p-r--40--lg__z9Ro0",
	"p-r--40--lg-": "space_p-r--40--lg-__2A4M9",
	"m--45": "space_m--45__19tDF",
	"m-h--45": "space_m-h--45__aAkLO",
	"m-v--45": "space_m-v--45__TVmjo",
	"p--45": "space_p--45__2g8FE",
	"p-h--45": "space_p-h--45__38KBo",
	"p-v--45": "space_p-v--45__E5tFH",
	"nf-m--45": "space_nf-m--45__Hyaqs",
	"nf-p--45": "space_nf-p--45__1ABEq",
	"nf-m-t--45": "space_nf-m-t--45__33NJO",
	"nf-p-t--45": "space_nf-p-t--45__2O5IB",
	"m-t--45": "space_m-t--45__aoXKT",
	"p-t--45": "space_p-t--45__3q0ma",
	"m-t--45--sm": "space_m-t--45--sm__3jLxR",
	"m-t--45--sm-": "space_m-t--45--sm-__2KGnb",
	"p-t--45--sm": "space_p-t--45--sm__2uazc",
	"p-t--45--sm-": "space_p-t--45--sm-__I_k7z",
	"m-t--45--md": "space_m-t--45--md__30AUH",
	"m-t--45--md-": "space_m-t--45--md-__2aPb9",
	"p-t--45--md": "space_p-t--45--md__2dW_t",
	"p-t--45--md-": "space_p-t--45--md-__3HfEP",
	"m-t--45--lg": "space_m-t--45--lg__16n0b",
	"m-t--45--lg-": "space_m-t--45--lg-__1mK8y",
	"p-t--45--lg": "space_p-t--45--lg__2mLCn",
	"p-t--45--lg-": "space_p-t--45--lg-__1--R4",
	"nf-m-b--45": "space_nf-m-b--45__1N-W3",
	"nf-p-b--45": "space_nf-p-b--45__LZTio",
	"m-b--45": "space_m-b--45__30amI",
	"p-b--45": "space_p-b--45__3hSS5",
	"m-b--45--sm": "space_m-b--45--sm__1VrC6",
	"m-b--45--sm-": "space_m-b--45--sm-__JcTFe",
	"p-b--45--sm": "space_p-b--45--sm__FyXnB",
	"p-b--45--sm-": "space_p-b--45--sm-__3fbGC",
	"m-b--45--md": "space_m-b--45--md__3QIK3",
	"m-b--45--md-": "space_m-b--45--md-__LPxf4",
	"p-b--45--md": "space_p-b--45--md__3tvql",
	"p-b--45--md-": "space_p-b--45--md-__3DXwq",
	"m-b--45--lg": "space_m-b--45--lg__3lSxr",
	"m-b--45--lg-": "space_m-b--45--lg-__3Uj8d",
	"p-b--45--lg": "space_p-b--45--lg__Tpa7x",
	"p-b--45--lg-": "space_p-b--45--lg-__2Xpwi",
	"nf-m-l--45": "space_nf-m-l--45__2RDv-",
	"nf-p-l--45": "space_nf-p-l--45__w6KwE",
	"m-l--45": "space_m-l--45__1XV1A",
	"p-l--45": "space_p-l--45__5R82-",
	"m-l--45--sm": "space_m-l--45--sm__3HU_1",
	"m-l--45--sm-": "space_m-l--45--sm-__3KJjo",
	"p-l--45--sm": "space_p-l--45--sm__2aCCQ",
	"p-l--45--sm-": "space_p-l--45--sm-__28PyG",
	"m-l--45--md": "space_m-l--45--md__3f6ur",
	"m-l--45--md-": "space_m-l--45--md-__1eWpS",
	"p-l--45--md": "space_p-l--45--md__20_B9",
	"p-l--45--md-": "space_p-l--45--md-__1fZh9",
	"m-l--45--lg": "space_m-l--45--lg__3b9TE",
	"m-l--45--lg-": "space_m-l--45--lg-__R1TMr",
	"p-l--45--lg": "space_p-l--45--lg__2EaL8",
	"p-l--45--lg-": "space_p-l--45--lg-__21BQy",
	"nf-m-r--45": "space_nf-m-r--45__3q3c4",
	"nf-p-r--45": "space_nf-p-r--45__64wL8",
	"m-r--45": "space_m-r--45__1OUm5",
	"p-r--45": "space_p-r--45__b-Kh4",
	"m-r--45--sm": "space_m-r--45--sm__3C_3T",
	"m-r--45--sm-": "space_m-r--45--sm-__MfyjD",
	"p-r--45--sm": "space_p-r--45--sm__UKPcf",
	"p-r--45--sm-": "space_p-r--45--sm-__3AbuS",
	"m-r--45--md": "space_m-r--45--md__2KC3Y",
	"m-r--45--md-": "space_m-r--45--md-__3Q02a",
	"p-r--45--md": "space_p-r--45--md__12d7b",
	"p-r--45--md-": "space_p-r--45--md-__hLKlb",
	"m-r--45--lg": "space_m-r--45--lg__qBLh0",
	"m-r--45--lg-": "space_m-r--45--lg-__10QRe",
	"p-r--45--lg": "space_p-r--45--lg__nEMN_",
	"p-r--45--lg-": "space_p-r--45--lg-__UvFiq",
	"m--50": "space_m--50__3n3jj",
	"m-h--50": "space_m-h--50__2Zk0k",
	"m-v--50": "space_m-v--50__2iUq4",
	"p--50": "space_p--50__1Rx98",
	"p-h--50": "space_p-h--50__16XUo",
	"p-v--50": "space_p-v--50__1GM3y",
	"nf-m--50": "space_nf-m--50__1_5Pc",
	"nf-p--50": "space_nf-p--50__3zvNa",
	"nf-m-t--50": "space_nf-m-t--50__1k-NG",
	"nf-p-t--50": "space_nf-p-t--50__2LyUU",
	"m-t--50": "space_m-t--50__2_szk",
	"p-t--50": "space_p-t--50__3KAae",
	"m-t--50--sm": "space_m-t--50--sm__1hhE3",
	"m-t--50--sm-": "space_m-t--50--sm-__2txgK",
	"p-t--50--sm": "space_p-t--50--sm__6U4e_",
	"p-t--50--sm-": "space_p-t--50--sm-__1uWE1",
	"m-t--50--md": "space_m-t--50--md__jhgtq",
	"m-t--50--md-": "space_m-t--50--md-__2Ofl6",
	"p-t--50--md": "space_p-t--50--md__tRcGk",
	"p-t--50--md-": "space_p-t--50--md-__36OTp",
	"m-t--50--lg": "space_m-t--50--lg__R1Dpn",
	"m-t--50--lg-": "space_m-t--50--lg-__29AT5",
	"p-t--50--lg": "space_p-t--50--lg__Xu40H",
	"p-t--50--lg-": "space_p-t--50--lg-__3oiZU",
	"nf-m-b--50": "space_nf-m-b--50__h6kEw",
	"nf-p-b--50": "space_nf-p-b--50__1H7HP",
	"m-b--50": "space_m-b--50__cV1p_",
	"p-b--50": "space_p-b--50__2u_df",
	"m-b--50--sm": "space_m-b--50--sm__Zjg4J",
	"m-b--50--sm-": "space_m-b--50--sm-__a99eP",
	"p-b--50--sm": "space_p-b--50--sm__1O2kE",
	"p-b--50--sm-": "space_p-b--50--sm-__2aE4O",
	"m-b--50--md": "space_m-b--50--md__1UfU_",
	"m-b--50--md-": "space_m-b--50--md-__17kw4",
	"p-b--50--md": "space_p-b--50--md__2t0Wc",
	"p-b--50--md-": "space_p-b--50--md-__2DKTp",
	"m-b--50--lg": "space_m-b--50--lg__1xJbv",
	"m-b--50--lg-": "space_m-b--50--lg-__aSSfN",
	"p-b--50--lg": "space_p-b--50--lg__2iHOY",
	"p-b--50--lg-": "space_p-b--50--lg-__1SHPw",
	"nf-m-l--50": "space_nf-m-l--50__2snml",
	"nf-p-l--50": "space_nf-p-l--50__2RI6O",
	"m-l--50": "space_m-l--50__3C0GZ",
	"p-l--50": "space_p-l--50__24I5h",
	"m-l--50--sm": "space_m-l--50--sm__ntp_L",
	"m-l--50--sm-": "space_m-l--50--sm-__2lj2Y",
	"p-l--50--sm": "space_p-l--50--sm__5EOdz",
	"p-l--50--sm-": "space_p-l--50--sm-__PdJGj",
	"m-l--50--md": "space_m-l--50--md__13qNQ",
	"m-l--50--md-": "space_m-l--50--md-__303pt",
	"p-l--50--md": "space_p-l--50--md__2E6tC",
	"p-l--50--md-": "space_p-l--50--md-__3HOyX",
	"m-l--50--lg": "space_m-l--50--lg__2Vkw7",
	"m-l--50--lg-": "space_m-l--50--lg-__1n9qE",
	"p-l--50--lg": "space_p-l--50--lg__q62r-",
	"p-l--50--lg-": "space_p-l--50--lg-__1TZ7y",
	"nf-m-r--50": "space_nf-m-r--50__30oMZ",
	"nf-p-r--50": "space_nf-p-r--50__2N8rL",
	"m-r--50": "space_m-r--50__31asT",
	"p-r--50": "space_p-r--50__1IDFy",
	"m-r--50--sm": "space_m-r--50--sm__36QL0",
	"m-r--50--sm-": "space_m-r--50--sm-__1Np7f",
	"p-r--50--sm": "space_p-r--50--sm__2Arv7",
	"p-r--50--sm-": "space_p-r--50--sm-__cwk8t",
	"m-r--50--md": "space_m-r--50--md__axLEW",
	"m-r--50--md-": "space_m-r--50--md-__3xSwl",
	"p-r--50--md": "space_p-r--50--md__1swbf",
	"p-r--50--md-": "space_p-r--50--md-__xb6Ye",
	"m-r--50--lg": "space_m-r--50--lg__3J7mp",
	"m-r--50--lg-": "space_m-r--50--lg-__1c8p7",
	"p-r--50--lg": "space_p-r--50--lg__nJzu6",
	"p-r--50--lg-": "space_p-r--50--lg-__3vyGd",
	"m--64": "space_m--64__FTTSu",
	"m-h--64": "space_m-h--64__1QMTs",
	"m-v--64": "space_m-v--64__1sO3W",
	"p--64": "space_p--64__1osc3",
	"p-h--64": "space_p-h--64__3IERK",
	"p-v--64": "space_p-v--64__j9vvq",
	"nf-m--64": "space_nf-m--64__2ixBN",
	"nf-p--64": "space_nf-p--64__3gN6S",
	"nf-m-t--64": "space_nf-m-t--64__BzOXb",
	"nf-p-t--64": "space_nf-p-t--64__ROZNg",
	"m-t--64": "space_m-t--64__2Tij0",
	"p-t--64": "space_p-t--64__FiuYP",
	"m-t--64--sm": "space_m-t--64--sm__kVX9O",
	"m-t--64--sm-": "space_m-t--64--sm-__1g9y9",
	"p-t--64--sm": "space_p-t--64--sm__3j7Wg",
	"p-t--64--sm-": "space_p-t--64--sm-__RauGU",
	"m-t--64--md": "space_m-t--64--md__2Rl13",
	"m-t--64--md-": "space_m-t--64--md-__3_vdr",
	"p-t--64--md": "space_p-t--64--md__2t0kQ",
	"p-t--64--md-": "space_p-t--64--md-__1dNE7",
	"m-t--64--lg": "space_m-t--64--lg__n9HMX",
	"m-t--64--lg-": "space_m-t--64--lg-__1wjEV",
	"p-t--64--lg": "space_p-t--64--lg__cHWzk",
	"p-t--64--lg-": "space_p-t--64--lg-__vzdvR",
	"nf-m-b--64": "space_nf-m-b--64__296Ar",
	"nf-p-b--64": "space_nf-p-b--64__1wyMn",
	"m-b--64": "space_m-b--64__2pNFG",
	"p-b--64": "space_p-b--64__zzPlw",
	"m-b--64--sm": "space_m-b--64--sm__2OH5G",
	"m-b--64--sm-": "space_m-b--64--sm-__20FDu",
	"p-b--64--sm": "space_p-b--64--sm__1wWXI",
	"p-b--64--sm-": "space_p-b--64--sm-__15bey",
	"m-b--64--md": "space_m-b--64--md__2CCpg",
	"m-b--64--md-": "space_m-b--64--md-__3BpOC",
	"p-b--64--md": "space_p-b--64--md__131M9",
	"p-b--64--md-": "space_p-b--64--md-__1X0h-",
	"m-b--64--lg": "space_m-b--64--lg__1Rmzq",
	"m-b--64--lg-": "space_m-b--64--lg-__vtk2U",
	"p-b--64--lg": "space_p-b--64--lg__R3h9l",
	"p-b--64--lg-": "space_p-b--64--lg-__1yj2w",
	"nf-m-l--64": "space_nf-m-l--64__z3vp2",
	"nf-p-l--64": "space_nf-p-l--64__1GyZ1",
	"m-l--64": "space_m-l--64__1oLQJ",
	"p-l--64": "space_p-l--64__d45YS",
	"m-l--64--sm": "space_m-l--64--sm__3ZwC1",
	"m-l--64--sm-": "space_m-l--64--sm-__3CUZx",
	"p-l--64--sm": "space_p-l--64--sm__3XAAw",
	"p-l--64--sm-": "space_p-l--64--sm-__3r2gE",
	"m-l--64--md": "space_m-l--64--md__QQWQZ",
	"m-l--64--md-": "space_m-l--64--md-__Qgpfi",
	"p-l--64--md": "space_p-l--64--md__2CVEX",
	"p-l--64--md-": "space_p-l--64--md-__3MXvx",
	"m-l--64--lg": "space_m-l--64--lg__LRTrY",
	"m-l--64--lg-": "space_m-l--64--lg-__332wx",
	"p-l--64--lg": "space_p-l--64--lg__1V1cE",
	"p-l--64--lg-": "space_p-l--64--lg-__2_1j-",
	"nf-m-r--64": "space_nf-m-r--64__SQPDx",
	"nf-p-r--64": "space_nf-p-r--64__1kyTQ",
	"m-r--64": "space_m-r--64__33MoH",
	"p-r--64": "space_p-r--64__3mrot",
	"m-r--64--sm": "space_m-r--64--sm__2W5ax",
	"m-r--64--sm-": "space_m-r--64--sm-__25O6S",
	"p-r--64--sm": "space_p-r--64--sm__1ZERr",
	"p-r--64--sm-": "space_p-r--64--sm-__3cf5v",
	"m-r--64--md": "space_m-r--64--md__oeR7G",
	"m-r--64--md-": "space_m-r--64--md-__3V5va",
	"p-r--64--md": "space_p-r--64--md__2cLD3",
	"p-r--64--md-": "space_p-r--64--md-__3tAAt",
	"m-r--64--lg": "space_m-r--64--lg__2Pl_9",
	"m-r--64--lg-": "space_m-r--64--lg-__3TP6r",
	"p-r--64--lg": "space_p-r--64--lg__YrlWW",
	"p-r--64--lg-": "space_p-r--64--lg-__1oTLs",
	"m--75": "space_m--75__39MPY",
	"m-h--75": "space_m-h--75__28UQ-",
	"m-v--75": "space_m-v--75__sP2zm",
	"p--75": "space_p--75__28eP1",
	"p-h--75": "space_p-h--75__1wcfU",
	"p-v--75": "space_p-v--75__3OLcp",
	"nf-m--75": "space_nf-m--75__2iAXn",
	"nf-p--75": "space_nf-p--75__1KM4V",
	"nf-m-t--75": "space_nf-m-t--75__3J6pt",
	"nf-p-t--75": "space_nf-p-t--75__2EWna",
	"m-t--75": "space_m-t--75__27cKW",
	"p-t--75": "space_p-t--75__3esQ8",
	"m-t--75--sm": "space_m-t--75--sm__2aOr_",
	"m-t--75--sm-": "space_m-t--75--sm-__beWn4",
	"p-t--75--sm": "space_p-t--75--sm__hJiKh",
	"p-t--75--sm-": "space_p-t--75--sm-__1SI85",
	"m-t--75--md": "space_m-t--75--md__2EIdZ",
	"m-t--75--md-": "space_m-t--75--md-__wI4hZ",
	"p-t--75--md": "space_p-t--75--md__1YMhq",
	"p-t--75--md-": "space_p-t--75--md-__3qY44",
	"m-t--75--lg": "space_m-t--75--lg__srH-V",
	"m-t--75--lg-": "space_m-t--75--lg-__3WgJM",
	"p-t--75--lg": "space_p-t--75--lg__1TsoM",
	"p-t--75--lg-": "space_p-t--75--lg-__240xG",
	"nf-m-b--75": "space_nf-m-b--75__3u8Su",
	"nf-p-b--75": "space_nf-p-b--75__3Yowo",
	"m-b--75": "space_m-b--75__1ATqR",
	"p-b--75": "space_p-b--75__3s3hK",
	"m-b--75--sm": "space_m-b--75--sm__3i0yI",
	"m-b--75--sm-": "space_m-b--75--sm-__tGfbZ",
	"p-b--75--sm": "space_p-b--75--sm__2E5Kb",
	"p-b--75--sm-": "space_p-b--75--sm-__2HFD4",
	"m-b--75--md": "space_m-b--75--md__3mHOa",
	"m-b--75--md-": "space_m-b--75--md-__3IFL0",
	"p-b--75--md": "space_p-b--75--md__21sIn",
	"p-b--75--md-": "space_p-b--75--md-__nsLj3",
	"m-b--75--lg": "space_m-b--75--lg__RdmnM",
	"m-b--75--lg-": "space_m-b--75--lg-__39JiC",
	"p-b--75--lg": "space_p-b--75--lg__2ZBaF",
	"p-b--75--lg-": "space_p-b--75--lg-__1kBSY",
	"nf-m-l--75": "space_nf-m-l--75__1EKb6",
	"nf-p-l--75": "space_nf-p-l--75__rj_YK",
	"m-l--75": "space_m-l--75__SOvXH",
	"p-l--75": "space_p-l--75___KtFM",
	"m-l--75--sm": "space_m-l--75--sm__29TQz",
	"m-l--75--sm-": "space_m-l--75--sm-__37WS4",
	"p-l--75--sm": "space_p-l--75--sm__2rzLf",
	"p-l--75--sm-": "space_p-l--75--sm-__34xc_",
	"m-l--75--md": "space_m-l--75--md__3TZoQ",
	"m-l--75--md-": "space_m-l--75--md-__3PZe1",
	"p-l--75--md": "space_p-l--75--md__16SAR",
	"p-l--75--md-": "space_p-l--75--md-__3s24W",
	"m-l--75--lg": "space_m-l--75--lg__3MCiX",
	"m-l--75--lg-": "space_m-l--75--lg-__3HQ58",
	"p-l--75--lg": "space_p-l--75--lg__3WH1E",
	"p-l--75--lg-": "space_p-l--75--lg-__1rJb0",
	"nf-m-r--75": "space_nf-m-r--75__17hNL",
	"nf-p-r--75": "space_nf-p-r--75__1VdAN",
	"m-r--75": "space_m-r--75__10ydR",
	"p-r--75": "space_p-r--75__3NNUl",
	"m-r--75--sm": "space_m-r--75--sm__2oagB",
	"m-r--75--sm-": "space_m-r--75--sm-__1IVy-",
	"p-r--75--sm": "space_p-r--75--sm__2-ma0",
	"p-r--75--sm-": "space_p-r--75--sm-__2jsA0",
	"m-r--75--md": "space_m-r--75--md__I1-bH",
	"m-r--75--md-": "space_m-r--75--md-__sHE_p",
	"p-r--75--md": "space_p-r--75--md__3u3ky",
	"p-r--75--md-": "space_p-r--75--md-__1DRU9",
	"m-r--75--lg": "space_m-r--75--lg__26ihD",
	"m-r--75--lg-": "space_m-r--75--lg-__3S8N8",
	"p-r--75--lg": "space_p-r--75--lg__21QVd",
	"p-r--75--lg-": "space_p-r--75--lg-__28Y_o",
	"m--100": "space_m--100__1T-JO",
	"m-h--100": "space_m-h--100__2rA2c",
	"m-v--100": "space_m-v--100__1c6Pp",
	"p--100": "space_p--100__DXuib",
	"p-h--100": "space_p-h--100__UuPfc",
	"p-v--100": "space_p-v--100__2eZjL",
	"nf-m--100": "space_nf-m--100__TWCe4",
	"nf-p--100": "space_nf-p--100__wKx_p",
	"nf-m-t--100": "space_nf-m-t--100__3sQwm",
	"nf-p-t--100": "space_nf-p-t--100__1tfxE",
	"m-t--100": "space_m-t--100__1d4SI",
	"p-t--100": "space_p-t--100__3-o7_",
	"m-t--100--sm": "space_m-t--100--sm__8wYYf",
	"m-t--100--sm-": "space_m-t--100--sm-__11UHZ",
	"p-t--100--sm": "space_p-t--100--sm__1K5Oz",
	"p-t--100--sm-": "space_p-t--100--sm-__wLmfW",
	"m-t--100--md": "space_m-t--100--md__15cBz",
	"m-t--100--md-": "space_m-t--100--md-__1w38C",
	"p-t--100--md": "space_p-t--100--md__35isZ",
	"p-t--100--md-": "space_p-t--100--md-__Xa6S3",
	"m-t--100--lg": "space_m-t--100--lg__3E55l",
	"m-t--100--lg-": "space_m-t--100--lg-__1b2Wz",
	"p-t--100--lg": "space_p-t--100--lg__1wbJb",
	"p-t--100--lg-": "space_p-t--100--lg-__370x8",
	"nf-m-b--100": "space_nf-m-b--100__74sxt",
	"nf-p-b--100": "space_nf-p-b--100__3Lg8a",
	"m-b--100": "space_m-b--100__1Zzqy",
	"p-b--100": "space_p-b--100__2pfO_",
	"m-b--100--sm": "space_m-b--100--sm__1Ve-M",
	"m-b--100--sm-": "space_m-b--100--sm-__GmJXg",
	"p-b--100--sm": "space_p-b--100--sm__7jvm1",
	"p-b--100--sm-": "space_p-b--100--sm-__1klN1",
	"m-b--100--md": "space_m-b--100--md__cKnMN",
	"m-b--100--md-": "space_m-b--100--md-__2Ft5j",
	"p-b--100--md": "space_p-b--100--md__2DsVW",
	"p-b--100--md-": "space_p-b--100--md-__1EQz5",
	"m-b--100--lg": "space_m-b--100--lg__elb24",
	"m-b--100--lg-": "space_m-b--100--lg-__2kzMd",
	"p-b--100--lg": "space_p-b--100--lg__22Qsa",
	"p-b--100--lg-": "space_p-b--100--lg-__2oZ6T",
	"nf-m-l--100": "space_nf-m-l--100__3YphR",
	"nf-p-l--100": "space_nf-p-l--100__1Acp6",
	"m-l--100": "space_m-l--100__2-ZAX",
	"p-l--100": "space_p-l--100__kz1-T",
	"m-l--100--sm": "space_m-l--100--sm__rM6PD",
	"m-l--100--sm-": "space_m-l--100--sm-__2CIlc",
	"p-l--100--sm": "space_p-l--100--sm__1oZFn",
	"p-l--100--sm-": "space_p-l--100--sm-__w5GU1",
	"m-l--100--md": "space_m-l--100--md__2O7Sv",
	"m-l--100--md-": "space_m-l--100--md-__JgrIu",
	"p-l--100--md": "space_p-l--100--md__1wAq2",
	"p-l--100--md-": "space_p-l--100--md-__1UteV",
	"m-l--100--lg": "space_m-l--100--lg__5YsqG",
	"m-l--100--lg-": "space_m-l--100--lg-__3-a5P",
	"p-l--100--lg": "space_p-l--100--lg__3yYUS",
	"p-l--100--lg-": "space_p-l--100--lg-__NgG3K",
	"nf-m-r--100": "space_nf-m-r--100__2ull_",
	"nf-p-r--100": "space_nf-p-r--100__yqmHr",
	"m-r--100": "space_m-r--100__d713d",
	"p-r--100": "space_p-r--100__2eSfd",
	"m-r--100--sm": "space_m-r--100--sm__1JmKF",
	"m-r--100--sm-": "space_m-r--100--sm-__3rO4k",
	"p-r--100--sm": "space_p-r--100--sm__3F4Ki",
	"p-r--100--sm-": "space_p-r--100--sm-__3no2y",
	"m-r--100--md": "space_m-r--100--md__2Zjtl",
	"m-r--100--md-": "space_m-r--100--md-__2Wcvz",
	"p-r--100--md": "space_p-r--100--md__1OlQk",
	"p-r--100--md-": "space_p-r--100--md-__1fMaA",
	"m-r--100--lg": "space_m-r--100--lg__1uRWR",
	"m-r--100--lg-": "space_m-r--100--lg-__1u1MS",
	"p-r--100--lg": "space_p-r--100--lg__ybpgy",
	"p-r--100--lg-": "space_p-r--100--lg-__1ppto",
	"p__homes": "space_p__homes__GX-Pb"
};


/***/ }),

/***/ "wepW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"flex": "layout_flex__15rsj",
	"flex-wrap": "layout_flex-wrap__2x_Ow",
	"flex-col": "layout_flex-col__1Yacd",
	"flex-col-reverse": "layout_flex-col-reverse__17mPg",
	"items-center": "layout_items-center__3r36O",
	"justify-center": "layout_justify-center__eWVkO",
	"justify-end": "layout_justify-end__2o9kH",
	"justify-between": "layout_justify-between__1t4pi",
	"all-center": "layout_all-center__2Ft3b",
	"block": "layout_block__3A_Bk",
	"inline-block": "layout_inline-block__2tjJf",
	"text-center": "layout_text-center__2Ibyh",
	"relative": "layout_relative__1KHRC",
	"absolute": "layout_absolute__1fe6u",
	"all-sides": "layout_all-sides__33FvG",
	"fixed": "layout_fixed__3Yazi",
	"sticky": "layout_sticky__3Ol_o",
	"overflow-hidden": "layout_overflow-hidden__VC2uG",
	"hide-scrollbar": "layout_hide-scrollbar__32Bjb",
	"rt---240": "layout_rt---240__3BcEO",
	"rb---240": "layout_rb---240__3dWUu",
	"rl---240": "layout_rl---240__12uL6",
	"rr---240": "layout_rr---240__1SJzV",
	"at---240": "layout_at---240__3MGN9",
	"ab---240": "layout_ab---240__14MIS",
	"al---240": "layout_al---240__OtxBQ",
	"ar---240": "layout_ar---240__23Cmw",
	"ft---240": "layout_ft---240__SL1Pl",
	"fb---240": "layout_fb---240__1O5Qb",
	"st---240": "layout_st---240__PoUfa",
	"t---240": "layout_t---240__1LYsw",
	"r---240": "layout_r---240__pINUY",
	"b---240": "layout_b---240__Ke3wo",
	"l---240": "layout_l---240__2VdT2",
	"rt--210": "layout_rt--210__jU-7P",
	"rb--210": "layout_rb--210__ErTsJ",
	"rl--210": "layout_rl--210__VB_L9",
	"rr--210": "layout_rr--210__8SNfG",
	"at--210": "layout_at--210__1JaFN",
	"ab--210": "layout_ab--210__1Rzs6",
	"al--210": "layout_al--210__2eVzc",
	"ar--210": "layout_ar--210__dOHEh",
	"ft--210": "layout_ft--210__oJp9m",
	"fb--210": "layout_fb--210__1skNb",
	"st--210": "layout_st--210__1Dm3j",
	"t--210": "layout_t--210__23g__",
	"r--210": "layout_r--210__1Qdfn",
	"b--210": "layout_b--210__2btYn",
	"l--210": "layout_l--210__1Nycf",
	"rt---3": "layout_rt---3__2pcvG",
	"rb---3": "layout_rb---3__3SZdp",
	"rl---3": "layout_rl---3__33Tkh",
	"rr---3": "layout_rr---3__2r8RZ",
	"at---3": "layout_at---3__zwsu7",
	"ab---3": "layout_ab---3__3r_fb",
	"al---3": "layout_al---3__2j4_g",
	"ar---3": "layout_ar---3__30mw1",
	"ft---3": "layout_ft---3__gTQKS",
	"fb---3": "layout_fb---3__3k7SB",
	"st---3": "layout_st---3__kGRwx",
	"t---3": "layout_t---3__2XObG",
	"r---3": "layout_r---3__23vYM",
	"b---3": "layout_b---3__hGFkI",
	"l---3": "layout_l---3__1F8TA",
	"rt--0": "layout_rt--0__4SYZX",
	"rb--0": "layout_rb--0__2Ml6t",
	"rl--0": "layout_rl--0__1ozRM",
	"rr--0": "layout_rr--0__3bDzC",
	"at--0": "layout_at--0__2bhyp",
	"ab--0": "layout_ab--0__3iDhZ",
	"al--0": "layout_al--0__BzIq8",
	"ar--0": "layout_ar--0__AIZZ2",
	"ft--0": "layout_ft--0__3Fu_l",
	"fb--0": "layout_fb--0__2ziYg",
	"st--0": "layout_st--0__2U7jH",
	"t--0": "layout_t--0__QBgT-",
	"r--0": "layout_r--0__3fTrL",
	"b--0": "layout_b--0__3-1Kl",
	"l--0": "layout_l--0__3YYWT",
	"rt--1": "layout_rt--1__1-vTE",
	"rb--1": "layout_rb--1__2eUgT",
	"rl--1": "layout_rl--1__3RAeo",
	"rr--1": "layout_rr--1__84dBy",
	"at--1": "layout_at--1__1PWR9",
	"ab--1": "layout_ab--1__1Wud2",
	"al--1": "layout_al--1__ZDEBV",
	"ar--1": "layout_ar--1__2gHRb",
	"ft--1": "layout_ft--1__25Mki",
	"fb--1": "layout_fb--1__1RjeX",
	"st--1": "layout_st--1__1ovcw",
	"t--1": "layout_t--1__2q_CW",
	"r--1": "layout_r--1__3bjbv",
	"b--1": "layout_b--1__11fYG",
	"l--1": "layout_l--1__ZUYwk",
	"rt--2": "layout_rt--2__2vk8P",
	"rb--2": "layout_rb--2__wkqe5",
	"rl--2": "layout_rl--2__1WP-k",
	"rr--2": "layout_rr--2__1lvqc",
	"at--2": "layout_at--2__2nf_M",
	"ab--2": "layout_ab--2__2btzj",
	"al--2": "layout_al--2__1Abz4",
	"ar--2": "layout_ar--2__1FuU5",
	"ft--2": "layout_ft--2__2hpeT",
	"fb--2": "layout_fb--2__1I11c",
	"st--2": "layout_st--2__Qn_pQ",
	"t--2": "layout_t--2__AjeL0",
	"r--2": "layout_r--2__3CJEj",
	"b--2": "layout_b--2__tojzW",
	"l--2": "layout_l--2__3t-7K",
	"rt--3": "layout_rt--3__3kJsG",
	"rb--3": "layout_rb--3__qeqkc",
	"rl--3": "layout_rl--3__VYC3K",
	"rr--3": "layout_rr--3__2IG0A",
	"at--3": "layout_at--3__1h07y",
	"ab--3": "layout_ab--3__1VDn3",
	"al--3": "layout_al--3__1iPZ1",
	"ar--3": "layout_ar--3__32pZc",
	"ft--3": "layout_ft--3__1VXBe",
	"fb--3": "layout_fb--3__1SjUy",
	"st--3": "layout_st--3__1Ms-D",
	"t--3": "layout_t--3__1DiqJ",
	"r--3": "layout_r--3__3eDrX",
	"b--3": "layout_b--3__3zRMO",
	"l--3": "layout_l--3__1hn_i",
	"rt--4": "layout_rt--4__W0B59",
	"rb--4": "layout_rb--4__1wRov",
	"rl--4": "layout_rl--4__ZYI4t",
	"rr--4": "layout_rr--4__u2sWb",
	"at--4": "layout_at--4__1EKvg",
	"ab--4": "layout_ab--4__ZLnP6",
	"al--4": "layout_al--4__1VdB7",
	"ar--4": "layout_ar--4__pwwUm",
	"ft--4": "layout_ft--4__31YvX",
	"fb--4": "layout_fb--4__34Vmk",
	"st--4": "layout_st--4__2prCo",
	"t--4": "layout_t--4__nHho2",
	"r--4": "layout_r--4__3Vjap",
	"b--4": "layout_b--4__DDJDi",
	"l--4": "layout_l--4__1B8wt",
	"rt--5": "layout_rt--5__1uY-0",
	"rb--5": "layout_rb--5__2ZjwJ",
	"rl--5": "layout_rl--5__375LI",
	"rr--5": "layout_rr--5__Ql5NK",
	"at--5": "layout_at--5__e3TfS",
	"ab--5": "layout_ab--5__PzXgI",
	"al--5": "layout_al--5__1GBxS",
	"ar--5": "layout_ar--5__CSMeo",
	"ft--5": "layout_ft--5__1o66N",
	"fb--5": "layout_fb--5__DcAIR",
	"st--5": "layout_st--5__1otd4",
	"t--5": "layout_t--5__1DvfR",
	"r--5": "layout_r--5__1iaJl",
	"b--5": "layout_b--5__3fRxD",
	"l--5": "layout_l--5__sxqsA",
	"rt--6": "layout_rt--6__3ADtB",
	"rb--6": "layout_rb--6__3jxos",
	"rl--6": "layout_rl--6__3odIs",
	"rr--6": "layout_rr--6__1PacH",
	"at--6": "layout_at--6__37uDx",
	"ab--6": "layout_ab--6__TwnSG",
	"al--6": "layout_al--6__3GF8A",
	"ar--6": "layout_ar--6__2_SXH",
	"ft--6": "layout_ft--6__1sRdk",
	"fb--6": "layout_fb--6__1eTZI",
	"st--6": "layout_st--6__3tIUN",
	"t--6": "layout_t--6__10Rjm",
	"r--6": "layout_r--6__2xvfX",
	"b--6": "layout_b--6__36htK",
	"l--6": "layout_l--6__2CotB",
	"rt--7": "layout_rt--7__3ZgLt",
	"rb--7": "layout_rb--7__9gqFN",
	"rl--7": "layout_rl--7__2Oozo",
	"rr--7": "layout_rr--7__1J_MJ",
	"at--7": "layout_at--7__963-k",
	"ab--7": "layout_ab--7__1RLYV",
	"al--7": "layout_al--7__1nBxz",
	"ar--7": "layout_ar--7__1XyR7",
	"ft--7": "layout_ft--7__2Or1X",
	"fb--7": "layout_fb--7__3oZ2R",
	"st--7": "layout_st--7__tLFOS",
	"t--7": "layout_t--7__K552y",
	"r--7": "layout_r--7__2ZweA",
	"b--7": "layout_b--7__4Book",
	"l--7": "layout_l--7__fTDly",
	"rt--8": "layout_rt--8__ysxt3",
	"rb--8": "layout_rb--8__3Y2AB",
	"rl--8": "layout_rl--8__2r7kt",
	"rr--8": "layout_rr--8__1tsDh",
	"at--8": "layout_at--8__2qNiT",
	"ab--8": "layout_ab--8__2NHc0",
	"al--8": "layout_al--8__1aih9",
	"ar--8": "layout_ar--8__1lReZ",
	"ft--8": "layout_ft--8__ZkacU",
	"fb--8": "layout_fb--8__1wTr5",
	"st--8": "layout_st--8__2LMqm",
	"t--8": "layout_t--8__3qFpb",
	"r--8": "layout_r--8__1X8VR",
	"b--8": "layout_b--8__24IQf",
	"l--8": "layout_l--8__3SjCk",
	"rt--9": "layout_rt--9__N_aEA",
	"rb--9": "layout_rb--9__2QicJ",
	"rl--9": "layout_rl--9__3emO5",
	"rr--9": "layout_rr--9__3qUR_",
	"at--9": "layout_at--9__2wQzG",
	"ab--9": "layout_ab--9__2v0qs",
	"al--9": "layout_al--9__2396O",
	"ar--9": "layout_ar--9__18EnL",
	"ft--9": "layout_ft--9__2u76b",
	"fb--9": "layout_fb--9__30mnw",
	"st--9": "layout_st--9__1g6zW",
	"t--9": "layout_t--9__1qYaf",
	"r--9": "layout_r--9__2_eNm",
	"b--9": "layout_b--9__2Dznc",
	"l--9": "layout_l--9__2pt-X",
	"rt--10": "layout_rt--10__CagpF",
	"rb--10": "layout_rb--10__2KcF-",
	"rl--10": "layout_rl--10__1GRmn",
	"rr--10": "layout_rr--10__2S3jn",
	"at--10": "layout_at--10__2UcW8",
	"ab--10": "layout_ab--10__1TXtb",
	"al--10": "layout_al--10__5Y4pm",
	"ar--10": "layout_ar--10__1XKSE",
	"ft--10": "layout_ft--10__3J3mY",
	"fb--10": "layout_fb--10__1JY2N",
	"st--10": "layout_st--10__2hVl6",
	"t--10": "layout_t--10__3sQ1_",
	"r--10": "layout_r--10__2_nL2",
	"b--10": "layout_b--10__2WNhC",
	"l--10": "layout_l--10__3HR_A",
	"rt--15": "layout_rt--15__1hZPx",
	"rb--15": "layout_rb--15__2r0wb",
	"rl--15": "layout_rl--15__HuFLu",
	"rr--15": "layout_rr--15__3W_W_",
	"at--15": "layout_at--15__1VR68",
	"ab--15": "layout_ab--15__2QM7O",
	"al--15": "layout_al--15__7LRlA",
	"ar--15": "layout_ar--15__TptDc",
	"ft--15": "layout_ft--15__je3CB",
	"fb--15": "layout_fb--15__N4Zav",
	"st--15": "layout_st--15__1RU09",
	"t--15": "layout_t--15__3Fw-f",
	"r--15": "layout_r--15__1lb8M",
	"b--15": "layout_b--15__2ah6P",
	"l--15": "layout_l--15__1niYD",
	"rt--55": "layout_rt--55__2Iv64",
	"rb--55": "layout_rb--55__3d2BB",
	"rl--55": "layout_rl--55__2abj_",
	"rr--55": "layout_rr--55__2tR5Z",
	"at--55": "layout_at--55__3Bg3N",
	"ab--55": "layout_ab--55__1nyCY",
	"al--55": "layout_al--55__3zPJO",
	"ar--55": "layout_ar--55__1AAbE",
	"ft--55": "layout_ft--55__1Prxq",
	"fb--55": "layout_fb--55__1INZh",
	"st--55": "layout_st--55__22gwr",
	"t--55": "layout_t--55__etG8m",
	"r--55": "layout_r--55__1Y5CY",
	"b--55": "layout_b--55__7fiWZ",
	"l--55": "layout_l--55__1ssF2",
	"rt--80": "layout_rt--80__3rnD5",
	"rb--80": "layout_rb--80__1ToFs",
	"rl--80": "layout_rl--80__3AG9S",
	"rr--80": "layout_rr--80__ZXYIO",
	"at--80": "layout_at--80__2Y7jq",
	"ab--80": "layout_ab--80__28LKH",
	"al--80": "layout_al--80__18x9n",
	"ar--80": "layout_ar--80__27fQC",
	"ft--80": "layout_ft--80__1pGnn",
	"fb--80": "layout_fb--80__QCmAI",
	"st--80": "layout_st--80__3Yl8u",
	"t--80": "layout_t--80__2EIDx",
	"r--80": "layout_r--80__3bdg8",
	"b--80": "layout_b--80__2tEid",
	"l--80": "layout_l--80__20Iiy",
	"z--50": "layout_z--50__1yX7V",
	"z--9999": "layout_z--9999__2lRQv",
	"grid-c--1": "layout_grid-c--1__3_GpS",
	"grid-r--1": "layout_grid-r--1__2lIgZ",
	"grid-c--2": "layout_grid-c--2__2aoz7",
	"grid-r--2": "layout_grid-r--2__3HLwA",
	"grid-c--3": "layout_grid-c--3__7_Rro",
	"grid-r--3": "layout_grid-r--3__2Oi2e",
	"grid-c--4": "layout_grid-c--4__20wZN",
	"grid-r--4": "layout_grid-r--4__Hkwws",
	"grid-c--5": "layout_grid-c--5__23FgR",
	"grid-r--5": "layout_grid-r--5__1BXLR",
	"grid-c--6": "layout_grid-c--6__3eBUX",
	"grid-r--6": "layout_grid-r--6__1smnc",
	"grid-c--7": "layout_grid-c--7__2S3ve",
	"grid-r--7": "layout_grid-r--7__2ax9S",
	"container": "layout_container__3H2Qg",
	"container__modal": "layout_container__modal__HWtsT",
	"container--spread": "layout_container--spread__3l4sP",
	"container--shrink": "layout_container--shrink__bTiVL",
	"font__section--title": "layout_font__section--title__1s1zT",
	"font__section--subtitle": "layout_font__section--subtitle__2v7Pm",
	"font__onlinehost--title": "layout_font__onlinehost--title__3eTgr",
	"font__onlinehost--subtitle": "layout_font__onlinehost--subtitle__30UMS"
};


/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xu40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Bar; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/atoms/button/index.tsx + 23 modules
var atoms_button = __webpack_require__("JV+2");

// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__("wepW");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./styles/space.module.scss
var space_module = __webpack_require__("u7m8");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: ./styles/color.module.scss
var color_module = __webpack_require__("1CHd");
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);

// EXTERNAL MODULE: ./styles/shape.module.scss
var shape_module = __webpack_require__("1cX2");
var shape_module_default = /*#__PURE__*/__webpack_require__.n(shape_module);

// EXTERNAL MODULE: ./components/organisms/bar/bar.module.scss
var bar_module = __webpack_require__("TKLJ");
var bar_module_default = /*#__PURE__*/__webpack_require__.n(bar_module);

// EXTERNAL MODULE: ./styles/font.module.scss
var font_module = __webpack_require__("IByY");
var font_module_default = /*#__PURE__*/__webpack_require__.n(font_module);

// CONCATENATED MODULE: ./components/organisms/bar/bar.paginate.tsx




/** components */


/** styles **/







/**
 * Renders paginate bar component
 * @param {number} page - Current page
 * @param {number} total - Total number of pages
 */

const PaginateBar = ({
  page = 1,
  total = 15
}) => {
  const displayContent = () => {
    if (page > 4 && page + 3 < total) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          },
          className: `${page === 1 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [layout_module_default.a["relative"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" "),
          children: "..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          },
          className: `${[bar_module_default.a["hover__paginate"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          onClick: () => router_default.a.push(`/s/homes/${page - 1}`),
          children: page - 1
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          },
          className: `${[color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: page
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          },
          className: `${[bar_module_default.a["hover__paginate"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          onClick: () => router_default.a.push(`/s/homes/${page + 1}`),
          children: page + 1
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [layout_module_default.a["relative"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" "),
          children: "..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/${total}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [bar_module_default.a["hover__paginate"], space_module_default.a["m-h--12"], layout_module_default.a["inline-block"]].join(" "),
          children: total
        })]
      });
    } else if (page < 5 && total > 7) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/1`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === 1 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/2`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === 2 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/3`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === 3 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "3"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/4`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === 4 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "4"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/5`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === 5 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: "5"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [layout_module_default.a["relative"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" "),
          children: "..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          onClick: () => router_default.a.push(`/s/homes/${total}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [bar_module_default.a["hover__paginate"], space_module_default.a["m-h--12"], layout_module_default.a["inline-block"]].join(" "),
          children: total
        })]
      });
    } else if (page + 3 >= total) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/1`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [bar_module_default.a["hover__paginate"], space_module_default.a["m-h--12"], layout_module_default.a["inline-block"]].join(" "),
          children: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push("/"),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: [bar_module_default.a["hover__paginate"], layout_module_default.a["relative"], space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" "),
          children: "..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/${total - 3}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === total - 3 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: total - 3
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/${total - 2}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === total - 2 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: total - 2
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/${total - 1}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === total - 1 ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: total - 1
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => router_default.a.push(`/s/homes/${total}`),
          style: {
            width: 36,
            height: 36,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 4
          },
          className: `${page === total ? [color_module_default.a["bg--black"], color_module_default.a["c--white"], shape_module_default.a["br--circle"]].join(" ") : [bar_module_default.a["hover__paginate"]].join(" ")} ${[space_module_default.a["m-h--6"], layout_module_default.a["inline-block"]].join(" ")}`,
          children: total
        })]
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["inline-block"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
      children: [page !== 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "paginate",
        animate: true,
        direction: "left",
        onClick: () => router_default.a.push(`/s/homes/page/${page - 1}`)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: [space_module_default.a["m-h--8"]].join(" "),
        children: displayContent()
      }), page !== total && /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "paginate",
        animate: true,
        direction: "right",
        onClick: () => router_default.a.push(`/s/homes/page/${page + 1}`)
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-t--14"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [layout_module_default.a["text-center"]].join(" "),
        children: "61 \u2013 80 of 300+ places to stay"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [space_module_default.a["m-t--28"]].join(" "),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--12"], layout_module_default.a["text-center"], color_module_default.a["c--gray__1"]].join(" "),
        children: "Enter dates to see full pricing. Additional fees apply. Taxes may be added."
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/bar/bar.progress.tsx



/**
 * Renders the Progress Bar
 * @param {number} percentage - percentage of the progress bar
 */
const ProgressBar = ({
  percentage = 50
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 10,
      backgroundColor: "#EDEFED",
      zIndex: 1
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        width: "100%",
        height: 10,
        display: "flex",
        zIndex: 500
      },
      children: [Array.from(Array(24).keys()).map((_, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "10%",
            height: 10,
            backgroundColor: "transparent",
            borderRight: index === 23 ? "none" : "1px solid #DCE0E0"
          }
        }, index);
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          position: "absolute",
          height: "100%",
          width: `${percentage}%`,
          borderTopRightRadius: 9999,
          borderBottomRightRadius: 9999,
          backgroundColor: "#278489",
          zIndex: 60
        }
      })]
    })
  });
};
// EXTERNAL MODULE: ./styles/animation.module.scss
var animation_module = __webpack_require__("MS2y");
var animation_module_default = /*#__PURE__*/__webpack_require__.n(animation_module);

// EXTERNAL MODULE: ./context/toggle.tsx
var toggle = __webpack_require__("m4+O");

// CONCATENATED MODULE: ./components/organisms/bar/bar.search.tsx



/** styles */





/** vectors */



/**
 * Renders the Searchbar
 */

const SearchBar = ({
  selected = null,
  setSelected = () => console.log("clicked"),
  transparent
}) => {
  const dispatchToggle = Object(toggle["b" /* useToggleDispatch */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: transparent ? [shape_module_default.a["shadow--sm"]].join(" ") : null,
    style: {
      border: "1px solid lightgray",
      display: "grid",
      gridTemplateColumns: `1.5fr 1px 1fr 1px  1fr 1px ${!selected ? "1.5fr" : "2fr"}`,
      borderRadius: 50,
      backgroundColor: "white"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
      title: "Where are you going?",
      subtitle: "Location",
      selected: selected,
      setSelected: setSelected,
      name: "location"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Seperator, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
      title: "Add dates",
      subtitle: "Check in",
      selected: selected,
      setSelected: setSelected,
      name: "checkin"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Seperator, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
      title: "Add dates",
      subtitle: "Check out",
      selected: selected,
      setSelected: setSelected,
      name: "checkout"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Seperator, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      style: {
        display: "block",
        padding: "5px 8px 5px 24px",
        borderRadius: "50px"
      },
      className: `${selected === "guests" && [shape_module_default.a["shadow--lg"]].join(" ")} ${[animation_module_default.a["hover-background--white__1"]].join(" ")}`,
      onClick: () => {
        setSelected("guests");
        dispatchToggle({
          type: "toggle_guests"
        });
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: selected === "guests" && 50
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${[layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" ")}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: [font_module_default.a["text--left"], font_module_default.a["no-wrap"], font_module_default.a["size--12"]].join(" "),
                children: "Guests"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: [font_module_default.a["text--left"], font_module_default.a["no-wrap"], font_module_default.a["size--12"]].join(" "),
                children: "Add guests"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
            variant: "search",
            onClick: () => alert("hello"),
            expand: selected
          })
        })]
      })
    })]
  });
};

const Seperator = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: [color_module_default.a["bg--white__2"]].join(" "),
      style: {
        width: "100%",
        height: 25
      }
    })
  });
};

const Option = ({
  name,
  subtitle,
  title,
  selected,
  setSelected
}) => {
  const dispatchToggle = Object(toggle["b" /* useToggleDispatch */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
    className: `${selected === name && [shape_module_default.a["shadow--lg"]].join(" ")} ${[animation_module_default.a["hover-background--white__1"]].join(" ")}`,
    style: {
      display: "block",
      padding: "5px 24px",
      borderRadius: "50px"
    },
    onClick: () => {
      setSelected(name);
      dispatchToggle({
        type: `toggle_${name}`
      });
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${[layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" ")}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: [font_module_default.a["text--left"], font_module_default.a["size--12"]].join(" "),
            children: title
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: [font_module_default.a["text--left"], font_module_default.a["size--12"]].join(" "),
            children: subtitle
          })
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/bar/bar.covid.tsx


/** styles */




const CovidBar = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("aside", {
    className: [font_module_default.a["size--14"], color_module_default.a["bg--black"], layout_module_default.a["text-center"], space_module_default.a["p-v--20"], space_module_default.a["p-h--24"], layout_module_default.a["z--9999"]].join(" "),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: [font_module_default.a["size--12"], color_module_default.a["c--white"]].join(" "),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
          children: "Get the latest on our COVID-19 response"
        })
      })
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/bar/bar.create.tsx



/** styles */




/** components */


const CreateBar = ({
  next = () => alert("next button pressed"),
  back = () => alert("back button pressed"),
  criteria = true
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: [color_module_default.a["b-t--white__1"], space_module_default.a["p-v--16"]].join(" "),
    style: {
      width: "100%"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [shape_module_default.a["w-full"], layout_module_default.a["flex"], layout_module_default.a["items-center"], layout_module_default.a["justify-between"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "back",
          onClick: back
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "primary",
          title: "Next",
          size: "md",
          fill: "#018489",
          onClick: next
        })
      })]
    })
  });
};
// CONCATENATED MODULE: ./components/organisms/bar/bar.menu.tsx


/** styles */

/** components */


/**
 * Renders the menubar component
 */

const MenuBar = () => {
  const items = ["explore", "saved", "login"];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: bar_module_default.a["menubar"],
    children: items.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
          variant: "bar",
          type: item
        })
      }, index);
    })
  });
};
// EXTERNAL MODULE: ./public/svg/original.tsx
var original = __webpack_require__("OODI");

// CONCATENATED MODULE: ./components/organisms/bar/bar.availability.tsx



/** components */

/** styles */





/** vectors */


/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */

const AvailabilityBar = ({
  ratings = 4.99,
  reviews = 271
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: [layout_module_default.a["items-center"], layout_module_default.a["justify-between"], layout_module_default.a["flex"], color_module_default.a["b-t--white__2"]].join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [space_module_default.a["p-v--16"]].join(" "),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Add dates for prices"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: [layout_module_default.a["flex"], layout_module_default.a["items-center"]].join(" "),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(original["cb" /* Star */], {
            width: 12
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: [layout_module_default.a["inline-block"], font_module_default.a["size--12"], space_module_default.a["m-l--4"]].join(" "),
            children: ratings
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: [layout_module_default.a["inline-block"], font_module_default.a["size--12"], color_module_default.a["c--white__3"], space_module_default.a["m-l--4"]].join(" "),
            children: ["(", reviews, ")"]
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(atoms_button["a" /* Button */], {
        variant: "primary",
        title: "Check availability"
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/organisms/bar/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** components */








/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
const Bar = (_ref) => {
  let {
    variant = "paginate"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  const variants = {
    availability: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AvailabilityBar, _objectSpread({}, props)),
    paginate: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PaginateBar, _objectSpread({}, props)),
    covid: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CovidBar, _objectSpread({}, props)),
    progress: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProgressBar, _objectSpread({}, props)),
    search: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBar, _objectSpread({}, props)),
    create: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateBar, _objectSpread({}, props)),
    menu: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuBar, _objectSpread({}, props))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    "data-testid": `${variant}-bar`,
    children: variants[variant]
  });
};

/***/ }),

/***/ "zppD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"circle__wrapper": "animation_circle__wrapper__1FoOS",
	"circle__content": "animation_circle__content__kFbmS",
	"circle__1": "animation_circle__1__1FmTj",
	"colors": "animation_colors__1rnA0",
	"circle__2": "animation_circle__2__1-FC0",
	"circle__3": "animation_circle__3__qxT_Z"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });