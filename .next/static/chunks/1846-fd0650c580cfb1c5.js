(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1846],{7942:function(e,a,s){"use strict";var n=s(63038);a.default=void 0;var l,r=(l=s(67294))&&l.__esModule?l:{default:l},t=s(64957),i=s(69898),c=s(90639);var o={};function d(e,a,s,n){if(e&&t.isLocalURL(a)){e.prefetch(a,s,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[a+"%"+s+(l?"%"+l:"")]=!0}}var u=function(e){var a,s=!1!==e.prefetch,l=i.useRouter(),u=r.default.useMemo((function(){var a=t.resolveHref(l,e.href,!0),s=n(a,2),r=s[0],i=s[1];return{href:r,as:e.as?t.resolveHref(l,e.as):i||r}}),[l,e.href,e.as]),h=u.href,f=u.as,m=e.children,p=e.replace,j=e.shallow,x=e.scroll,v=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var g=(a=r.default.Children.only(m))&&"object"===typeof a&&a.ref,N=c.useIntersection({rootMargin:"200px"}),b=n(N,2),y=b[0],w=b[1],k=r.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);r.default.useEffect((function(){var e=w&&s&&t.isLocalURL(h),a="undefined"!==typeof v?v:l&&l.locale,n=o[h+"%"+f+(a?"%"+a:"")];e&&!n&&d(l,h,f,{locale:a})}),[f,h,w,v,s,l]);var E={ref:k,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,s,n,l,r,i,c){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(s))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),a[l?"replace":"push"](s,n,{shallow:r,locale:c,scroll:i}))}(e,l,h,f,p,j,x,v)},onMouseEnter:function(e){t.isLocalURL(h)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(l,h,f,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var C="undefined"!==typeof v?v:l&&l.locale,L=l&&l.isLocaleDomain&&t.getDomainLocale(f,C,l&&l.locales,l&&l.domainLocales);E.href=L||t.addBasePath(t.addLocale(f,C,l&&l.defaultLocale))}return r.default.cloneElement(a,E)};a.default=u},90639:function(e,a,s){"use strict";var n=s(63038);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,s=e.disabled||!t,c=l.useRef(),o=l.useState(!1),d=n(o,2),u=d[0],h=d[1],f=l.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||u||e&&e.tagName&&(c.current=function(e,a,s){var n=function(e){var a=e.rootMargin||"",s=i.get(a);if(s)return s;var n=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var a=n.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;a&&s&&a(s)}))}),e);return i.set(a,s={id:a,observer:l,elements:n}),s}(s),l=n.id,r=n.observer,t=n.elements;return t.set(e,a),r.observe(e),function(){t.delete(e),r.unobserve(e),0===t.size&&(r.disconnect(),i.delete(l))}}(e,(function(e){return e&&h(e)}),{rootMargin:a}))}),[s,a,u]);return l.useEffect((function(){if(!t&&!u){var e=r.requestIdleCallback((function(){return h(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[u]),[f,u]};var l=s(67294),r=s(26286),t="undefined"!==typeof IntersectionObserver;var i=new Map},57420:function(e,a){"use strict";a.Z=function(e){var a=[];if(!e.parentNode)return a;for(var s=e.parentNode.firstChild;s;)1===s.nodeType&&s!==e&&a.push(s),s=s.nextSibling;return a}},81108:function(e,a,s){"use strict";s.d(a,{z:function(){return l},_:function(){return r}});var n=s(57420),l=function(e){(0,n.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},r=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,a,s){"use strict";var n=s(67294),l=s(41664),r=s(82806),t=s(85893);a.Z=function(e){var a=e.hideBGCOLOR,s=(0,n.useState)(""),i=s[0],c=s[1];return(0,t.jsx)("footer",{className:"".concat(a?"":"sub-bg"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"Bize Ula\u015f\u0131n"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Adres"}),(0,t.jsx)("p",{children:"Tatl\u0131su Mah. \u015eenol G\xfcne\u015f Bul. \u015eerifali No:2/A, \xdcmraniye, \u0130STANBUL"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-mail"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Email"}),(0,t.jsx)("p",{children:"bilgi@rasoft.com.tr"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-call"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Telefon"}),(0,t.jsx)("p",{children:"+90 541 356 64 34"})]})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"Blog"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("div",{className:"img",children:(0,t.jsx)(l.default,{href:"/blog-details/blog-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/blog/1-demo.jpg",alt:""})})})}),(0,t.jsxs)("div",{className:"sm-post",children:[(0,t.jsx)(l.default,{href:"/blog-details/blog-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,t.jsx)(l.default,{href:"/blog/blog-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("div",{className:"img",children:(0,t.jsx)(l.default,{href:"/blog-details/blog-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/blog/2-demo.jpg",alt:""})})})}),(0,t.jsxs)("div",{className:"sm-post",children:[(0,t.jsx)(l.default,{href:"/blog-details/blog-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,t.jsx)(l.default,{href:"/blog/blog-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"subscribe",children:[(0,t.jsx)("input",{type:"text",id:"email",name:"email",onChange:function(e){return c(e.target.value)},placeholder:"Emailinizi Giriniz"}),(0,t.jsx)("button",{className:"subs pe-7s-paper-plane",onClick:function(e){e.preventDefault(),console.log("abone olduk ",i)}})]})})]})]})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:r.E8,alt:""})}),(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)("a",{href:"https://wa.me/905413566434",className:"icon",children:(0,t.jsx)("i",{className:"fab fa-whatsapp"})}),(0,t.jsx)("a",{href:"https://www.facebook.com/rasoft.sosyal/",className:"icon",children:(0,t.jsx)("i",{className:"fab fa-facebook-f"})}),(0,t.jsx)("a",{href:"https://www.instagram.com/",className:"icon",children:(0,t.jsx)("i",{className:"fab fa-instagram"})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/company/rasoft-sosyal/",className:"icon",children:(0,t.jsx)("i",{className:"fab fa-linkedin"})})]}),(0,t.jsx)("div",{className:"copy-right",children:(0,t.jsxs)("p",{children:["\xa9 2022, RAsoft. Made with lots of\xa0",(0,t.jsx)("img",{draggable:"false",role:"img",className:"emoji",alt:"\u2764",src:"https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"}),"\xa0and\xa0",(0,t.jsx)("img",{draggable:"false",role:"img",className:"emoji",alt:"\u2615",src:"https://s.w.org/images/core/emoji/14.0.0/svg/2615.svg"}),"\xa0in\xa0",(0,t.jsx)(l.default,{href:"https://goo.gl/maps/ifFkUfUokGgViwqQ9",children:(0,t.jsx)("a",{target:"_blank",children:"Istanbul, TURKEY"})}),"."]})})]})})]})})})}},30015:function(e,a,s){"use strict";s(67294);var n=s(41664),l=s(82806),r=s(81108),t=s(85893);a.Z=function(e){var a=e.lr,s=e.nr,i=e.theme;return(0,t.jsx)("nav",{ref:s,className:"navbar navbar-expand-lg change ".concat("themeL"===i?"light":""),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(n.default,{href:"/",children:(0,t.jsx)("a",{className:"logo",children:i&&"themeL"===i?(0,t.jsx)("img",{ref:a,src:l.Q1,alt:"logo"}):(0,t.jsx)("img",{ref:a,src:l.E8,alt:"logo"})})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button",onClick:r._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"icon-bar",children:(0,t.jsx)("i",{className:"fas fa-bars"})})}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/hakkimizda",children:(0,t.jsx)("a",{className:"nav-link",children:"Hakk\u0131m\u0131zda"})})}),(0,t.jsxs)("li",{className:"nav-item dropdown",onClick:r.z,children:[(0,t.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"\xc7al\u0131\u015fma Alan\u0131m\u0131z"}),(0,t.jsxs)("div",{className:"dropdown-menu",children:[(0,t.jsx)(n.default,{href:"/web-uygulamalari-gelistirme",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Web Uygulamalar\u0131 Geli\u015ftirme"})}),(0,t.jsx)(n.default,{href:"/mobil-uygulama-gelistirme",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Mobil Uygulama Geli\u015ftirme"})}),(0,t.jsx)(n.default,{href:"/e-ticaret-entegrasyon-sistemleri",children:(0,t.jsx)("a",{className:"dropdown-item",children:"E-Ticaret Entegrasyon Sistemleri"})}),(0,t.jsx)(n.default,{href:"/dijital-pazarlama",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Dijital Pazarlama"})}),(0,t.jsx)(n.default,{href:"/it-hizmet-cozumleri",children:(0,t.jsx)("a",{className:"dropdown-item",children:"IT Hizmet & \xc7\xf6z\xfcmleri"})})]})]}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/projelerimiz",children:(0,t.jsx)("a",{className:"nav-link",children:"Projelerimiz"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/blog",children:(0,t.jsx)("a",{className:"nav-link",children:"Blog"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/iletisim",children:(0,t.jsx)("a",{className:"nav-link",children:"\u0130leti\u015fim"})})})]})})]})})}},78494:function(e,a,s){"use strict";s(67294);var n=s(85893);a.Z=function(e){var a=e.projectDescriptionData;return(0,n.jsx)("section",{className:"intro-section section-padding",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,n.jsx)("div",{className:"htit",children:(0,n.jsxs)("h4",{children:[(0,n.jsx)("span",{children:"02 "})," Description"]})})}),(0,n.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,n.jsx)("div",{className:"text js-scroll__content",children:(0,n.jsx)("p",{className:"extra-text",children:a.content})})})]})})})}},63476:function(e,a,s){"use strict";var n=s(77625),l=s(67294),r=s(61239),t=(s(45607),s(85893));a.Z=function(e){var a=e.projectVideoDate;console.clear();var s=l.useState(!1),i=(0,n.Z)(s,2),c=i[0],o=i[1];return(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(".concat(a.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,t.jsxs)("div",{className:"full-width text-center",children:[(0,t.jsx)(r.Z,{channel:"vimeo",autoplay:!0,isOpen:c,videoId:"127203262",onClose:function(){return o(!1)}}),(0,t.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),o(!0)},children:(0,t.jsx)("div",{className:"vid-butn",children:(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},41664:function(e,a,s){e.exports=s(7942)},77625:function(e,a,s){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,n=new Array(a);s<a;s++)n[s]=e[s];return n}function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,l,r=[],t=!0,i=!1;try{for(s=s.call(e);!(t=(n=s.next()).done)&&(r.push(n.value),!a||r.length!==a);t=!0);}catch(c){i=!0,l=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw l}}return r}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.d(a,{Z:function(){return l}})}}]);