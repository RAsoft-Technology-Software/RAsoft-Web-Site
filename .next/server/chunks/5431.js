"use strict";
exports.id = 5431;
exports.ids = [5431];
exports.modules = {

/***/ 5431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/handleAccordion.js
const handleAccordion = container => {
  document.querySelectorAll(".accordion .item").forEach(item => {
    item.classList.remove("active");
  });
  document.querySelectorAll(".accordion-info").forEach(item => {
    item.classList.remove("active");
  });
  container.closest(".item").classList.add("active");
  /** Slide down. */

  if (!container.classList.contains("active")) {
    /** Show the container. */
    container.classList.add("active");
    container.style.height = "auto";
    /** Get the computed height of the container. */

    var height = container.clientHeight + "px";
    /** Set the height of the content as 0px, */

    /** so we can trigger the slide down animation. */

    container.style.height = "0px";
    /** Do this after the 0px has applied. */

    /** It's like a delay or something. MAGIC! */

    setTimeout(() => {
      container.style.height = height;
    }, 0);
    /** Slide up. */
  } else {
    /** Set the height as 0px to trigger the slide up animation. */
    container.style.height = "0px";
    /** Remove the `active` class when the animation ends. */

    container.addEventListener("transitionend", () => {
      container.classList.remove("active");
    }, {
      once: true
    });
  }
};

/* harmony default export */ const common_handleAccordion = (handleAccordion);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Faq/faq.jsx





const Faq = () => {
  //   $(".accordion").on("click", ".title", function () {
  //     $(this).next().slideDown();
  //     $(".accordion-info").not($(this).next()).slideUp();
  //   });
  //   $(".accordion").on("click", ".item", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //   });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "app-faq section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content md-mb50",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
              className: "stit mb-30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "left"
              }), " Faqs"]
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "mb-30",
              children: "Have Any Questions on Minds? Frequently Asked Questions"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Sed perspiciatis unde omnis natus error sit voluptatem accus doloremque laudantium totarem aperiam eaqupsa quae abillo inventore veritatis quasi architecto"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              className: "butn-bord-red rounded buton mt-30",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Get Free 7 Days Trial"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "content",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "accordion shadwo",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item mb-30",
                onClick: e => common_handleAccordion(e.currentTarget.querySelector(".accordion-info")),
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "title",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: ["Everything You Want Know About Creating ?", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "icon pe-7s-angle-right"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "accordion-info",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item active mb-30",
                onClick: e => common_handleAccordion(e.currentTarget.querySelector(".accordion-info")),
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "title",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: ["Frameworks Solve And Without Them ?", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "icon pe-7s-angle-right"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "accordion-info active",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item mb-30",
                onClick: e => common_handleAccordion(e.currentTarget.querySelector(".accordion-info")),
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "title",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: ["Getting Started With CSS Cascade Layers ?", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "icon pe-7s-angle-right"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "accordion-info",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                onClick: e => common_handleAccordion(e.currentTarget.querySelector(".accordion-info")),
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "title",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                    children: ["Designing Better Links Websites Guideline ?", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "icon pe-7s-angle-right"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "accordion-info",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer"
                  })
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const faq = (Faq);

/***/ })

};
;