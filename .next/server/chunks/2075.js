"use strict";
exports.id = 2075;
exports.ids = [2075];
exports.modules = {

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_full_menu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(7420);
;// CONCATENATED MODULE: ./src/common/animateElement.js
const animateElement = (el, to) => {
  function draw() {
    el.style.left = to;
  }

  draw();
};

/* harmony default export */ const common_animateElement = (animateElement);
;// CONCATENATED MODULE: ./src/common/delay.js
const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

/* harmony default export */ const common_delay = (delay);
;// CONCATENATED MODULE: ./src/common/initFullNavbarMenu.js





const initFullNavbarMenu = () => {
  function noScroll() {
    window.scrollTo(0, 0);
  }

  var open = false,
      navDark = document.querySelector(".topnav.dark"),
      logoChan = document.querySelector(".topnav.dark .logo img"),
      menuIcon = document.querySelector(".topnav .menu-icon");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      document.querySelector(".hamenu").classList.toggle("open");

      if (open) {
        common_animateElement(document.querySelector(".hamenu"), "0px");
        document.querySelector(".topnav .menu-icon .text ").classList.add("open");

        if (navDark) {
          navDark.classList.add("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* lightLogo */.E8);
        }

        window.addEventListener("scroll", noScroll);
      } else {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* darkLogo */.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      }
    });
    document.querySelectorAll(".main-menu a").forEach(item => {
      item.addEventListener("click", () => {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* darkLogo */.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      });
    });
  }

  document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item => {
    item.addEventListener("mouseenter", function () {
      this.style.opacity = "1";
      (0,getSiblings/* default */.Z)(this).forEach(item => {
        item.style.opacity = ".5";
      });
    });
    item.addEventListener("mouseleave", function () {
      document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item2 => {
        item2.style.opacity = "1";
      });
    });
  });

  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        (0,getSiblings/* default */.Z)(this.parentNode.parentNode).forEach(item => {
          item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
        });
        this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
      });
    });
  }

  if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.remove("gosub");
        document.querySelector(".main-menu").classList.remove("sub-open");
      });
    });
  }
};

/* harmony default export */ const common_initFullNavbarMenu = (initFullNavbarMenu);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar-full-menu/navbar.full-menu.jsx
/* eslint-disable @next/next/no-img-element */








const NavbarFullMenu = ({
  theme
}) => {
  external_react_default().useEffect(() => {
    common_initFullNavbarMenu();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "navi",
      className: `topnav ${theme ? theme === "light" ? "light" : "" : ""}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: theme ? theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: app/* darkLogo */.Q1,
                alt: "logo"
              }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: app/* lightLogo */.E8,
                alt: "logo"
              }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: app/* lightLogo */.E8,
                alt: "logo"
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "menu-icon",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "icon",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {}), /*#__PURE__*/jsx_runtime_.jsx("i", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text",
            "data-splitting": true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "menu-text word",
              children: "Men\xFC"
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hamenu",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9 col-md-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-links",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "main-menu",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: "link dmenu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "01."
                      }), "\xC7al\u0131\u015Fma Alan\u0131m\u0131z", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fas fa-angle-right"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "sub-menu",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: "sub-link back",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                              className: "pe-7s-angle-left"
                            }), " Geri"]
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/web-uygulamalari-gelistirme`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "01."
                              }), "Web Uygulamalar\u0131 Geli\u015Ftirme"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/mobil-uygulama-gelistirme`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "02."
                              }), "Mobil Uygulama Geli\u015Ftirme"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/e-ticaret-entegrasyon-sistemleri`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "03."
                              }), "E-Ticaret Entegrasyon Sistemleri"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/dijital-pazarlama`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "04."
                              }), "Dijital Pazarlama"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/microsoft-cozumleri`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "05."
                              }), "Microsoft \xC7\xF6z\xFCmleri"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/powerbi-powerapps`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "06."
                              }), "Power BI & PowerApps"]
                            })
                          })
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/hakkimizda`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "02."
                        }), "Hakk\u0131m\u0131zda"]
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/projelerimiz`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "03."
                        }), "Projelerimiz"]
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/blog`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "04."
                        }), "Blog"]
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/iletisim`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "05."
                        }), "\u0130leti\u015Fim"]
                      })
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont-info",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Tel :"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "tel:+905413566434",
                  children: "+90 541 356 64 34"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Adres :"
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "https://goo.gl/maps/ifFkUfUokGgViwqQ9",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    target: "_blank",
                    children: "Tatl\u0131su Mah. \u015Eenol G\xFCne\u015F Bul. \u015Eerifali No:2/A \xDCmraniye - \u0130STANBUL"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "E-Posta :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "mailto:bilgi@rasoft.com.tr",
                    children: "bilgi@rasoft.com.tr"
                  })
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const navbar_full_menu = (NavbarFullMenu);

/***/ }),

/***/ 265:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1-demo.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2-demo.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3-demo.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4-demo.jpg","sub":"Design"}]');

/***/ })

};
;