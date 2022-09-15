"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_tooltipEffect)
});

;// CONCATENATED MODULE: ./src/common/fadeInFadeOut.js
var opacity = 0;
var intervalID = 0;
const fadeIn = (el, time) => {
  setInterval(show(el), time);
};

function show(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));

  if (opacity < 1) {
    opacity = opacity + 1;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

const fadeOut = (el, time) => {
  setInterval(hide(el), time);
};

function hide(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));

  if (opacity > 0) {
    opacity = 0;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
;// CONCATENATED MODULE: ./src/common/tooltipEffect.js


const tooltipEffect = () => {
  let template1 = document.createElement("div");
  template1.classList.add("div-tooltip-tit");
  document.body.appendChild(template1);
  let template2 = document.createElement("div");
  template2.classList.add("div-tooltip-sub");
  document.body.appendChild(template2);
  document.querySelectorAll("[data-tooltip-tit]").forEach(item => {
    template1 = document.querySelector(".div-tooltip-tit");
    item.addEventListener("mouseover", () => {
      template1.innerText = item.getAttribute("data-tooltip-tit");
    });
    item.addEventListener("mousemove", e => {
      fadeIn(template1, 800);
      template1.style.top = e.pageY + 10 + "px";
      template1.style.left = e.pageX + 20 + "px";
      template1.style.padding = "0px 10px";
    });
    item.addEventListener("mouseleave", () => {
      fadeOut(template1, 800);
      template1.style.padding = 0;
    });
  });
  document.querySelectorAll("[data-tooltip-sub]").forEach(item => {
    template2 = document.querySelector(".div-tooltip-sub");
    item.addEventListener("mouseover", () => {
      template2.innerText = item.getAttribute("data-tooltip-sub");
    });
    item.addEventListener("mousemove", e => {
      fadeIn(template2, 800);
      template2.style.top = e.pageY - 15 + "px";
      template2.style.left = e.pageX + 30 + "px";
      template2.style.padding = "5px 10px";
    });
    item.addEventListener("mouseleave", () => {
      fadeOut(template2, 800);
      template2.style.padding = 0;
    });
  });
};

/* harmony default export */ const common_tooltipEffect = (tooltipEffect);

/***/ })

};
;