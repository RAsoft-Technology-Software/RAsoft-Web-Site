"use strict";
exports.id = 7397;
exports.ids = [7397];
exports.modules = {

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ team)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Ramazan Ertunç","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Yusuf Özden","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/2.jpg","title":"Necip Yolcu","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"Uygulama Geliştirme","value":"95%"},{"id":2,"text":"UI / UX Tasarım","value":"85%"},{"id":3,"text":"Dijital Pazarlama","value":"90%"}]}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Team/team.jsx
/* eslint-disable @next/next/no-img-element */







const Team = () => {
  external_react_default().useEffect(() => {
    common_teamSkillsProgress();
    setTimeout(() => {
      (0,tooltipEffect/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "team-crv section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content wow fadeInUp md-mb30",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sub-title",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "RAsoft Team"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "co-tit mb-15",
              children: "G\xFC\xE7l\xFCy\xFCz, \xE7\xFCnk\xFC ba\u011F\u0131ms\u0131z beyinlere ve ba\u011F\u0131ms\u0131z bir kimli\u011Fe sahibiz."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "RAsoft olarak; \xF6zg\xFCn web siteleri, dikkat \xE7ekici markalar ve son teknoloji uygulamalar geli\u015Ftiriyoruz."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "skills-box mt-40",
              children: team_namespaceObject.n.map(skill =>
              /*#__PURE__*/

              /* TODO skills ekle/çıkar düzenle team.json */
              (0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "custom-font",
                  children: skill.text
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": skill.value
                  })
                })]
              }, skill.id))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img-box",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toright",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width",
                  children: team_namespaceObject.f.slice(0, 2).map((team, index) =>
                  /*#__PURE__*/

                  /* TODO team.json */
                  jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(0, 2).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                        /* team.json düzenle */

                      })
                    })
                  }, team.id))
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toleft valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width text-left",
                  children: team_namespaceObject.f.slice(2, 4).map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(2, 4).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                        /* TODO css ekle eğer avatar eklencekse, yoksa 500x700 foto ekle. */

                      })
                    })
                  }, team.id))
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const team = (Team);

/***/ })

};
;