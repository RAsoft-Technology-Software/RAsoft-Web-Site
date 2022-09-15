"use strict";
exports.id = 7332;
exports.ids = [7332];
exports.modules = {

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_form)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/sections/form-info.json
const form_info_namespaceObject = JSON.parse('{"TN":"Bize Ulaşın.","Do":"bilgi@rasoft.com.tr","m7":"+90 541 356 64 34","xh":{"P":"Tatlısu Mah. Şenol Güneş Bul. Şerifali No:2/A,","E":"Ümraniye, İSTANBUL"}}');
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Contact-form/contact-form.jsx






const ContactForm = () => {
  const messageRef = external_react_default().useRef(null);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "contact section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "\u0130leti\u015Fime Ge\xE7in."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
              initialValues: {
                name: "",
                email: "",
                message: ""
              },
              onSubmit: async values => {
                //TODO mesajı RAsoft gmaile bağla
                await sendMessage(500);
                alert(JSON.stringify(values, null, 2)); // show message

                messageRef.current.innerText = "Mesajınız başarıyla gönderildi. Yakında sizinle iletişime geçeceğim."; // Reset the values 

                values.name = "";
                values.email = "";
                values.message = ""; // clear message

                setTimeout(() => {
                  messageRef.current.innerText = '';
                }, 2000);
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
                id: "contact-form",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "messages",
                  ref: messageRef
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "controls",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      id: "form_name",
                      type: "text",
                      name: "name",
                      placeholder: "\u0130sim",
                      required: "required"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      validate: validateEmail,
                      id: "form_email",
                      type: "email",
                      name: "email",
                      placeholder: "Email",
                      required: "required"
                    }), errors.email && touched.email && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: errors.email
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-group",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                    as: "textarea",
                    id: "form_message",
                    name: "message",
                    placeholder: "Mesaj",
                    rows: "4",
                    required: "required"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  className: "butn bord",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Mesaj\u0131 G\xF6nderin"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 offset-lg-1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cont-info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "Bize Ula\u015F\u0131n."
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: form_info_namespaceObject.TN
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item mb-40",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: form_info_namespaceObject.Do
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: form_info_namespaceObject.m7
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: "Adres."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                children: [form_info_namespaceObject.xh.P, /*#__PURE__*/jsx_runtime_.jsx("br", {}), form_info_namespaceObject.xh.E]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "social mt-50",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://wa.me/905413566434",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-whatsapp"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/rasoft.sosyal/",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-facebook-f"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.instagram.com/",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-instagram"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.linkedin.com/company/rasoft-sosyal/",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-linkedin"
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const contact_form = (ContactForm);

/***/ }),

/***/ 2107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/config/particle-config.js
var particle_config = __webpack_require__(4746);
// EXTERNAL MODULE: ./src/config/pr-s-black.js
var pr_s_black = __webpack_require__(6066);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
;// CONCATENATED MODULE: ./src/data/sections/contact-header.json
const contact_header_namespaceObject = JSON.parse('{"T":{"P":"Projeniz","E":"hakkında konuşalım."},"k":"Feel free to ask me any question or let’s do to talk about our future collaboration."}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Contact-header/contact-header.jsx








const ContactHeader = ({
  sliderRef,
  blackStar
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    ref: sliderRef,
    className: "pages-header circle-bg valign position-re",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-9 col-md-11",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "capt",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                className: "color-font mb-10 fw-700",
                children: [contact_header_namespaceObject.T.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), contact_header_namespaceObject.T.E]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: contact_header_namespaceObject.k
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_tsparticles_default()), {
      id: "particles-js",
      options: blackStar ? pr_s_black/* default */.Z : particle_config/* default */.Z
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "circle-color",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "gradient-circle"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "gradient-circle two"
      })]
    })]
  });
};

/* harmony default export */ const contact_header = (ContactHeader);

/***/ })

};
;