"use strict";
exports.id = 5625;
exports.ids = [5625];
exports.modules = {

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us2)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
;// CONCATENATED MODULE: ./src/data/sections/about-us2.json
const about_us2_namespaceObject = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"About Us","TN":{"P":"We are more than just","E":"a digital agency."},"kQ":"We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi masvitp","R2":[{"id":1,"icon":"gleam","name":{"first":"Pixel","second":"Perfect"},"wowDelay":".3s"},{"id":2,"icon":"paint-bucket","name":{"first":"Creative","second":"Design"},"wowDelay":".5s"},{"id":3,"icon":"medal","name":{"first":"Heigh","second":"Perfomance"},"wowDelay":".8s"}]}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-us2/about-us2.jsx
/* eslint-disable @next/next/no-img-element */






const AboutUs2 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "about section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img-mons sm-mb30",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-5 cmd-padding valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "img1 wow imago",
                  "data-wow-delay": ".5s",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: about_us2_namespaceObject.wp,
                    alt: ""
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-md-7 cmd-padding",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "img2 wow imago",
                  "data-wow-delay": ".3s",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: about_us2_namespaceObject.Lx,
                    alt: ""
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "img3 wow imago",
                  "data-wow-delay": ".8s",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: about_us2_namespaceObject._g,
                    alt: ""
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "container",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-md-6"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-md-6"
                    })]
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "sub-title",
              children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: about_us2_namespaceObject.bH
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: "words chars splitting main-title wow",
                "data-splitting": true,
                children: [about_us2_namespaceObject.TN.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", about_us2_namespaceObject.TN.E]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "words chars splitting wow txt",
                "data-splitting": true,
                children: about_us2_namespaceObject.kQ
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ftbox mt-30",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: about_us2_namespaceObject.R2.map(feature => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: `wow fadeIn ${feature.id == 2 ? "space" : ""}`,
                  "data-wow-delay": feature.wowDelay,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: `icon color-font pe-7s-${feature.icon}`
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: [feature.name.first, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", feature.name.second]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "dots",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                  })]
                }, feature.id))
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const about_us2 = (AboutUs2);

/***/ }),

/***/ 2804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8004);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1514);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */






const Clients2 = ({
  theme
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "clients sub-bg pt-50 pb-50",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
      style: {
        display: "none"
      },
      children: "\xA0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "row",
            children: _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_1__.slice(0, 4).map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "col-lg-3 brands",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "item no-bord wow fadeIn",
                "data-wow-delay": ".3s",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "img",
                  children: [theme === "light" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: item.lightImage,
                    alt: ""
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: item.darkImage,
                    alt: ""
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                      href: "#0",
                      className: "link words chars splitting",
                      "data-splitting": true,
                      children: item.url
                    })
                  })]
                })
              })
            }, item.id))
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients2);

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Split extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "target", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());

    _defineProperty(this, "split", () => {
      if (this.target.current) {
        Splitting({
          target: this.target.current
        });
      }
    });

    _defineProperty(this, "componentDidMount", this.split);

    _defineProperty(this, "componentDidUpdate", this.split);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      ref: this.target,
      children: this.props.children
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);

/***/ })

};
;