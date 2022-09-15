"use strict";
exports.id = 8763;
exports.ids = [8763];
exports.modules = {

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shop)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Shop-sidebar/shop-sidebar.jsx




const ShopSidebar = () => {
  const tooltipRef = external_react_default().useRef(),
        setValue = range => {
    const newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
          newPosition = 16 - newValue * 0.32;
    tooltipRef.current.innerHTML = `<span>${range.value}</span>`;
    tooltipRef.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    let a = range.value;
    range.value = a;
  };

  external_react_default().useEffect(() => {
    setValue(document.querySelector("#range"));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sidebar md-mb50",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-12 col-md-6",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "search mb-30",
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            action: "",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "shop-search",
                placeholder: "Search"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "icon pe-7s-search"
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-12 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box gat mb-30",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "title mb-30",
            children: "Category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["App Design ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "05"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Development ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "03"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Web Design ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "07"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Dashboard ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "04"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Logo Design ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "09"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Branding ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "14"
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-12 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box filter-price mb-30",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "title mb-30",
            children: "Filter By Price"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "range-slider mb-30",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "tooltip",
              ref: tooltipRef
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              onInput: e => setValue(e.currentTarget),
              id: "range",
              type: "range",
              step: "10",
              min: "5",
              max: "800"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "start-pointe",
              children: "$ 5"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-12 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box tags",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "title mb-30",
            children: "Popular Tags"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Branding"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Software"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Development"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              children: "Web"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const shop_sidebar = (ShopSidebar);
;// CONCATENATED MODULE: ./src/components/Shop-store/shop-store.jsx




const ShopStore = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "store",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "top-area",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 valign",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "result-text",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Showing 1 - 12 of 30 Results"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 d-flex justify-content-end",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "filter-select",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              className: "form-select",
              "aria-label": "Default select example",
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                defaultValue: true,
                children: "Open this select menu"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "1",
                children: "One"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "2",
                children: "Two"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "3",
                children: "Three"
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/1.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/2.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/3.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/4.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/5.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/6.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/7.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/8.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/shop/9.jpg",
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "tag",
              children: "Apps"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "add",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#0",
                children: ["Add To Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-angle-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Mobile Apps Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "$1253"
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const shop_store = (ShopStore);
;// CONCATENATED MODULE: ./src/components/Shop/shop.jsx






const Shop = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "shop section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3",
          children: /*#__PURE__*/jsx_runtime_.jsx(shop_sidebar, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-9",
          children: /*#__PURE__*/jsx_runtime_.jsx(shop_store, {})
        })]
      })
    })
  });
};

/* harmony default export */ const shop = (Shop);

/***/ })

};
;