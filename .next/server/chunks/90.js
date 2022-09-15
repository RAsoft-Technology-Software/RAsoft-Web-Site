"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_style2)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(5032);
;// CONCATENATED MODULE: ./src/data/projelerimiz.json
const projelerimiz_namespaceObject = JSON.parse('[{"id":1,"title":"Art Masterclass Mosaic Lamp","image":"/img/portfolio/portfolio/1/1-demo.png","url":"https://www.artmasterclass.com.au/","tags":["web","powerbi"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Ahmet Ayazbey","image":"/img/portfolio/portfolio/1/1-demo.png","url":"ahmetayazbey.com","tags":["web"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Art Masterclass Mosaic Lamp","image":"/img/portfolio/portfolio/1/1-demo.png","url":"https://www.artmasterclass.com.au/","tags":["powerbi"],"date":{"day":"07","month":"August"}}]');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Works-style2/works-style2.jsx
/* eslint-disable @next/next/no-img-element */







const WorksStyle2 = ({
  grid,
  hideFilter,
  filterPosition
}) => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,initIsotope/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: `${grid ? grid === 3 ? "three-column" : null : null} portfolio section-padding pb-70`,
    children: [!hideFilter && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["Our Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [!hideFilter && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "filter",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "T\xFCm\xFC"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".web",
              children: "Web Geli\u015Ftirme"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".powerbi",
              children: "Power BI"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "gallery full-width",
          children: projelerimiz_namespaceObject.map((proje, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items ${proje.tags.map((tag, index2) => tag + " ")} wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: proje.url,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: proje.image,
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: proje.title
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: proje.tags.map((tag, index2) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/works3/works3-dark",
                  children: tag
                }, index2))
              })]
            })]
          }, index))
        })]
      })
    })]
  });
};

/* harmony default export */ const works_style2 = (WorksStyle2);

/***/ })

};
;