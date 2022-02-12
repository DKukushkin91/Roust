"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var getScrollTo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700,n=document.scrollingElement||document.documentElement,r=n.scrollTop,o=e-r,i=+new Date,a=function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},s=function s(){var c=+new Date-i;n.scrollTop=parseInt(a(c,r,o,t)),c<t?requestAnimationFrame(s):n.scrollTop=e};s()},createElement=function(e,t){return e.appendChild(t)},removeChilds=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},render=function(e,t,n){e.insertAdjacentHTML(n,t)},changeActiveClass=function(e,t){return e?e.classList.add("".concat(t,"__wrap--active")):""},getTop=function(){var e=document.querySelector(".js-btn-top");e&&e.addEventListener("click",(function(e){e.preventDefault(),getScrollTo(0,400)}))},getMainSlider=function(){var e=document.querySelector(".js-main-slider"),t=document.querySelector(".js-preview-slider");if(e){var n=new Swiper(t,{slidesPerView:6,watchSlidesProgress:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:"auto",watchSlidesProgress:!0},575:{slidesPerView:"auto",watchSlidesProgress:!0},768:{slidesPerView:6}}});new Swiper(e,{thumbs:{swiper:n},navigation:{nextEl:".js-main-slider-next",prevEl:".js-main-slider-prev"}});window.addEventListener("scroll",(function(){var t=document.querySelector(".js-video-container");e.getBoundingClientRect().top<=0?t.style.display="none":t.style.display="block"}))}},getNewsSlider=function(){var e=document.querySelector(".js-news-slider");e&&new Swiper(e,{slidesPerView:3,pagination:{el:".swiper-pagination"},spaceBetween:40,navigation:{nextEl:".js-news-slider-next",prevEl:".js-news-slider-prev"},breakpoints:{320:{slidesPerView:"auto"},960:{slidesPerView:"auto",watchSlidesProgress:!0},1280:{pagination:!1}}})},getBrandsList=function(){if(document.querySelector(".js-btns-wrap")){var e=document.querySelector(".js-btns-wrap"),t=document.querySelector(".js-list-wrap"),n=e.querySelectorAll(".js-brands-btn"),r=document.querySelector(".js-brands-template").content.querySelectorAll(".js-brands-list"),o=function(e,n){var r=document.createDocumentFragment();e.forEach((function(e,t){if(n===t){var o=function(e){return e.cloneNode(!0)}(e);r.appendChild(o)}})),createElement(t,r)};n.forEach((function(e,i){e.addEventListener("click",(function(a){a.preventDefault(),n.forEach((function(e){return e.classList.remove("brands__btn--active")})),e.classList.add("brands__btn--active"),removeChilds(t),o(r,i)}))})),n.forEach((function(e,t){0===t&&e.classList.add("brands__btn--active")})),o(r,0)}},getCatalogList=function(){if(document.querySelector(".catalog-brands")){var e=document.querySelector(".catalog-brands").querySelector(".js-list-wrap"),t=document.querySelector(".js-catalog-template").content.querySelectorAll(".js-catalog-list");n=t,r=0,o=document.createDocumentFragment(),n.forEach((function(e,t){if(r===t){var n=function(e){return e.cloneNode(!0)}(e);o.appendChild(n)}})),createElement(e,o)}var n,r,o},getScrollItem=function(){if(document.querySelector(".js-anim-items")){var e=document.querySelectorAll(".js-anim-items"),t=document.querySelector(".js-animate-header"),n=document.querySelectorAll(".js-opacity"),r=document.querySelector(".js-anim-size"),o=document.querySelector(".js-scroll-btn"),i=document.querySelector(".main"),a=document.querySelectorAll(".js-anim-text"),s=document.querySelector(".top__content--brands-item"),c=(document.querySelector(".js-product-slider"),function(){n.forEach((function(e){return e.classList.add("animate__opacity")})),e.forEach((function(e){return e.classList.add("brands-item__wrap--active")})),t.classList.add("header__active"),r.classList.add("top__picture--animate"),o.classList.add("top__scroll-btn--animate"),a.forEach((function(e){return e.classList.add("brands-item__text-block--animate")})),i.classList.add("main--animate")});window.innerWidth>=1279.9&&(o.addEventListener("click",(function(){c(),window.scrollBy(0,window.innerWidth/13)})),window.addEventListener("scroll",(function(){s.getBoundingClientRect().bottom+45<=window.innerHeight&&c(),0===scrollY&&(i.classList.remove("main--animate"),n.forEach((function(e){return e.classList.remove("animate__opacity")})),e.forEach((function(e){return e.classList.remove("brands-item__wrap--active")})),t.classList.remove("header__active"),o.classList.remove("top__scroll-btn--animate"),a.forEach((function(e){return e.classList.remove("brands-item__text-block--animate")})),r.classList.remove("top__picture--animate"))})))}},getSliders=function(){if(document.querySelector(".brands-item__wrap")){var e=document.querySelector(".js-thumbs-slider"),t=document.querySelector(".js-thumbs-wrapper"),n=document.querySelector(".js-content-slider"),r=n.querySelector(".js-content-wrap"),o=n.querySelectorAll(".js-content-slide"),i=document.querySelector(".js-product-slider"),a=new Swiper(e,{slidesPerView:"auto",watchSlidesProgress:!0,slideToClickedSlide:!0}),s=new Swiper(n,{init:!1,slidesPerView:"auto",allowTouchMove:!1,navigation:{nextEl:document.querySelector(".js-mob-next-btn"),prevEl:document.querySelector(".js-mob-prev-btn")}});window.innerWidth<=640&&(n.classList.add("swiper"),r.classList.add("swiper-wrapper"),o.forEach((function(e){return e.classList.add("swiper-slide")})),s.init()),window.addEventListener("resize",(function(){window.innerWidth<=640?(n.classList.add("swiper"),r.classList.add("swiper-wrapper"),o.forEach((function(e){return e.classList.add("swiper-slide")})),s.init()):(n.classList.remove("swiper"),r.classList.remove("swiper-wrapper"),o.forEach((function(e){return e.classList.remove("swiper-slide")})))}));var c=new Swiper(i,{slidesPerView:1,slideToClickedSlide:!1,breakpoints:{961:{allowTouchMove:!1},960:{allowTouchMove:!0}},navigation:{nextEl:document.querySelector(".js-item-next"),prevEl:document.querySelector(".js-item-prev")},thumbs:{swiper:a,watchSlidesProgress:!0}});if(new Swiper(".js-b-item-slider",{slidesPerView:1,allowTouchMove:!1,slideToClickedSlide:!1}).forEach((function(e){var t,n;n=e,(t=c).on("slideChange",(function(){n.slideToLoop(t.realIndex)}))})),document.querySelector(".js-scroll")&&window.innerWidth>=575){var l=document.querySelectorAll(".js-scroll-item"),u=document.querySelector(".js-scroll"),d=document.querySelector(".js-rect-point"),m={attributes:!0};u.style.width="".concat(l[0].offsetWidth,"px");var p=new MutationObserver((function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){"attributes"===t.value.type&&l.forEach((function(e){window.innerWidth<1280&&e.classList.contains("swiper-slide-thumb-active")?u.style.left="".concat(e.getBoundingClientRect().x,"px"):window.innerWidth>=1280&&e.classList.contains("swiper-slide-thumb-active")&&(u.style.left="".concat(e.getBoundingClientRect().x-e.parentNode.getBoundingClientRect().left,"px"))}))}}catch(e){n.e(e)}finally{n.f()}}));new MutationObserver((function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){"attributes"===t.value.type&&l.forEach((function(e){window.innerWidth<1280&&e.classList.contains("swiper-slide-thumb-active")?u.style.left="".concat(e.getBoundingClientRect().x,"px"):window.innerWidth>=1280&&e.classList.contains("swiper-slide-thumb-active")&&(u.style.left="".concat(e.getBoundingClientRect().x-d.getBoundingClientRect().right,"px"))}))}}catch(e){n.e(e)}finally{n.f()}})).observe(t,m),p.observe(document.querySelector(".js-scroll-item"),m)}}},getGallery=function(){if(document.querySelector(".js-open-gallery")){if(document.querySelector(".js-gallery-counter")){var e=function(e){var t=document.querySelectorAll(".project__img-several img"),n=t[e],r='<a class="project__img-link" href="#">\n\t\t\t\t\t\t\t\t\t\t\t<div class="project__img-text">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="project__img-number"></div>фотографий\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t'.concat(t[e].outerHTML,"\n\t\t\t\t\t\t\t\t\t\t</a>");n.outerHTML=r,document.querySelector(".project__img-number").innerHTML="+"+(t.length-e)};document.body.clientWidth>959.9?e(3):document.body.clientWidth<=574.9?e(1):document.body.clientWidth<=959.9&&e(2)}var t=document.querySelector("body"),n=document.querySelectorAll(".js-open-gallery"),r=document.querySelector(".js-gallery-template").content.querySelector(".js-gallery-container"),o=document.querySelector(".js-g-list-template").content.querySelectorAll(".js-g-list"),i=function(e){"Escape"===e.key&&(e.preventDefault(),a())},a=function(){var e=document.querySelector(".js-gallery-container");e&&(e.remove(),document.removeEventListener("keydown",i)),t.classList.remove("lock-scroll")},s=function(e){var n=r.cloneNode(!0),i=n.querySelector(".js-close-btn"),s=n.querySelector(".js-gallery-slider"),c=n.querySelector(".js-g-btn-prev"),l=n.querySelector(".js-g-btn-next");return function(e,n,r){var o=document.createDocumentFragment();n.forEach((function(e,t){if(t===r){var n=function(e){return e.cloneNode(!0)}(e);o.appendChild(n)}})),createElement(e,o),t.classList.add("lock-scroll")}(s,o,e),new Swiper(s,{slidesPerView:1,navigation:{nextEl:l,prevEl:c}}),i.addEventListener("click",a),n};n.forEach((function(e,n){e.addEventListener("click",(function(e){e.preventDefault(),function(e){var n=document.createDocumentFragment(),r=s(e);n.appendChild(r),document.addEventListener("keydown",i),createElement(t,n),t.classList.add("lock-scroll");var o=document.querySelector(".js-gallery-slider");setTimeout((function(){return changeActiveClass(o,"g-template")}))}(n)}))}))}},selectHandler=function(e){var t=e.querySelectorAll(".js-select-native"),n=e.querySelectorAll(".js-select-custom"),r="",o=-1;n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget;!t.classList.contains("m-select__custom-wrap--active")?i(t):a()}))}));var i=function(e){if(e.classList.add("m-select__custom-wrap--active"),e.setAttribute("aria-hidden",!1),r){var t=Array.from(e.querySelectorAll(".js-custom-option")).findIndex((function(e){return e.getAttribute("data-value")===r}));s(t)}document.addEventListener("click",l)},a=function(){n.forEach((function(e){e.classList.remove("m-select__custom-wrap--active"),e.setAttribute("aria-hidden",!0)})),s(-1),document.removeEventListener("click",l)},s=function(e){n.forEach((function(t){if(t.classList.contains("m-select__custom-wrap--active")){var n=t.querySelector(".js-custom-options"),r=n.children[o],i=n.children[e];r&&r.classList.remove("m-select__custom-option--hover"),i&&i.classList.add("m-select__custom-option--hover"),i&&(o=e)}}))},c=function(e,o){n.forEach((function(n,i){var a=r,s=n.querySelector(".js-custom-options"),c=n.querySelector(".js-custom-box"),l=s.querySelector("[data-value='".concat(a,"'")),u=s.querySelector("[data-value='".concat(e,"'"));l&&l.classList.remove("m-select__custom-wrap--active"),u&&u.classList.add("m-select__custom-wrap--active"),t.forEach((function(t,a){(n.classList.contains("m-select__custom-wrap--active")||t.classList.contains("inFocus")&&i===a)&&(c.textContent=o,r=e)}))}))},l=function(e){n.forEach((function(t){t.classList.contains("m-select__custom-wrap--active")&&!t.contains(e.target)&&a()}))};n.forEach((function(e,n){_toConsumableArray(t).filter((function(t,r){n===r&&(t.addEventListener("focus",(function(n){n.currentTarget.classList.add("inFocus"),n.currentTarget.classList.contains("inFocus")&&(a(),t.addEventListener("change",(function(t){var n=e.querySelector(".js-custom-options"),r=t.currentTarget.value,o=n.querySelectorAll("[data-value='".concat(r,"']"))[0];c(r,o.textContent)})))})),t.addEventListener("blur",(function(e){return e.currentTarget.classList.remove("inFocus")})))}))})),n.forEach((function(e,n){e.addEventListener("click",(function(r){Array.from(r.currentTarget.querySelectorAll(".js-custom-option")).forEach((function(r,o){r.addEventListener("click",(function(e){var r=e.currentTarget.getAttribute("data-value");e.stopPropagation(),t.forEach((function(t,o){o===n&&(t.value=r,c(r,e.currentTarget.textContent),a())}))})),e.classList.contains("m-select__custom-wrap--active")&&r.addEventListener("mouseenter",(function(e){s(o)}))}))}))}))},getPopup=function(){(document.querySelector(".js-btn-form")||document.querySelector(".js-subscribe-btn"))&&function(){var e,t=document.querySelector("body"),n=document.querySelectorAll(".js-btn-form"),r=document.querySelector(".js-popup-form-template").content.querySelector(".js-popup-wrap"),o=document.querySelector(".js-popup-form-template").content.querySelector(".js-subscribe-popup"),i=function(e){"Escape"===e.key&&(e.preventDefault(),a())},a=function(){var e=document.querySelector(".js-popup-wrap")||document.querySelector(".js-subscribe-popup");e&&(e.remove(),document.removeEventListener("keydown",i)),t.classList.remove("lock-scroll")},s=function(e){var n=document.createDocumentFragment(),r=function(e){var t=e.cloneNode(!0);return t.querySelector(".js-close-btn").addEventListener("click",a),selectHandler(t),t}(e);n.appendChild(r),document.addEventListener("keydown",i),createElement(t,n),t.classList.add("lock-scroll");var o=document.querySelector(".js-popup-form");setTimeout((function(){return changeActiveClass(o,"popup-form")})),o.noValidate=!0;o.addEventListener("submit",(function(e){var t=e.target,n=Array.from(t.elements);if(n.forEach((function(e){e.setCustomValidity(""),e.parentElement.classList.remove("invalid")})),document.querySelector(".js-select-native")){var r=Array.from(document.querySelectorAll(".js-select-native"));r.forEach((function(e){e.setCustomValidity(""),e.parentElement.parentElement.classList.remove("invalid")})),r.forEach((function(t){"select"===t.options[t.selectedIndex].value&&(e.preventDefault(),e.stopImmediatePropagation(),t.parentElement.parentElement.classList.add("invalid"))}))}t.checkValidity()||(e.preventDefault(),e.stopImmediatePropagation(),n.forEach((function(e){e.checkValidity()||e.parentElement.classList.add("invalid")})))}))},c=_createForOfIteratorHelper(n);try{for(c.s();!(e=c.n()).done;){e.value.addEventListener("click",(function(e){e.preventDefault(),s(r)}))}}catch(e){c.e(e)}finally{c.f()}document.querySelector(".js-subscribe-btn")&&document.querySelector(".js-subscribe-btn").addEventListener("click",(function(e){e.preventDefault(),s(o)}))}()},burgerMenuHandler=function(){if(document.querySelector(".js-burger-btn")){var e=document.querySelector(".js-burger-btn"),t=document.querySelector("body");e.addEventListener("click",(function(){e.classList.toggle("header__burger-btn--active"),t.classList.toggle("background-burger")}))}},getAboutUsSlider=function(){if(document.querySelector(".js-about-us-slider")){var e=document.querySelector(".js-about-us-slider");new Swiper(e,{spaceBetween:20,breakpoints:{320:{pagination:{el:".js-about-pagination"},slidesPerView:"auto",watchSlidesProgress:!0},1280:{pagination:!1,slidesPerView:1,navigation:{prevEl:".js-about-prev",nextEl:".js-about-next"}}}})}},cardsMocks=[{name:"Roustam Tariko",text:'"Welcome to Roust. We are a group of consumer-focused companies with market-leading brands in 86 countries markets around the world, including UK, USA, Germany, France, Italy, Russia, Poland and Hungary. It is with great pride that I personally ensure that Roust products are of the highest quality and offer the best possible consumer experience."'},{name:"Igor Kosarev",text:"Our goal is to build a global company of leading brands. Through consumer insight, we have a deep understanding of what our consumers need and desire. Through innovation, we create products and services that start new trends."},{name:"Pavel Merkul",text:"Pavel joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program."},{name:"Alessandro Picchi",text:"Alessandro joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program."},{name:"Yaroslav Zakharov",text:"Yaroslav joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program."},{name:"Ilya Blinov",text:"Ilya joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program."},{name:"Mariusz Chrobot",text:"Mariusz joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program."}],productionMocks=[{name:"Parliament Production Distillery",text:"One of the most technologically advanced distilleries of Roust Group. Built and commissioned in 1991. Investments in the modernization of the plant since 2011 amount to over 270 million rubles. Production capacity of 6.61 million 9l cases per year (vodka and spirits)."}],getSideBlock=function(){if(document.querySelector(".js-side-block")){var e=document.querySelectorAll(".js-side-block"),t=document.querySelectorAll(".js-card-title"),n=document.querySelector("body"),r=document.querySelector(".js-about-template").content.querySelector(".side"),o=function(e){"Escape"===e.key&&(e.preventDefault(),i())},i=function(){var e=document.querySelector(".side");n.classList.contains("lock-scroll")&&n.classList.remove("lock-scroll"),e&&(e.remove(),document.removeEventListener("keydown",o))};t.forEach((function(e){e.setAttribute("data-name","".concat(e.textContent))}));var a=function(e,t,a,s){var c=document.createDocumentFragment(),l=function(e,t,o,a){var s=r.cloneNode(!0),c=s.querySelector(".js-back-btn"),l=s.querySelector(".js-side-title"),u=s.querySelector(".js-side-subTitle"),d=s.querySelector(".js-side-img"),m=s.querySelector(".js-side-text");return d.src=o.src,l.textContent=e,u.textContent=t.textContent,cardsMocks.map((function(e){return e.name===l.textContent?m.textContent=e.text:""})),a.currentTarget.closest(".js-about-card")&&(l.classList.add("side__title--order"),l.parentNode.classList.add("side__texts-wrap--order"),u.classList.add("side__sub-title--order"),d.parentNode.classList.add("side__img--order"),productionMocks.map((function(e){return e.name===l.textContent?m.textContent=e.text:""}))),n.classList.add("lock-scroll"),c.addEventListener("click",i),s}(e,t,a,s);c.appendChild(l),document.addEventListener("keydown",o),createElement(n,c)};e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=e.currentTarget.parentNode.querySelector(".js-card-title").getAttribute("data-name"),n=e.currentTarget.parentNode.querySelector(".js-card-text"),r=e.currentTarget.parentNode.parentNode.querySelector(".js-card-img");a(t,n,r,e);var o=document.querySelector(".js-side-wrap");setTimeout((function(){return changeActiveClass(o,"side")}))}))}))}},getItemAnimation=function(){if(document.querySelector(".js-anchor-bottle")){var e,t,n=document.querySelectorAll(".js-animate-bottle"),r=(document.querySelector(".js-main-bottle"),Array.from(n)),o=document.querySelector(".js-anchor-bottle"),i=r.filter((function(e,t){return t%2==0})),a=r.filter((function(e,t){return t%2!=0})),s=function(e){return Math.floor((o.getBoundingClientRect().top-o.getBoundingClientRect().height/2)*(.24*(0===e?e+1.111:e+1.2)))};history.scrollRestoration="manual",window.scrollTo(0,0);var c=function(){1===t&&(i.forEach((function(t,n){e=n,t.style.right="".concat(s(e)>=0?0:s(e),"px"),t.offsetLeft<=5&&window.removeEventListener("scroll",l)})),a.forEach((function(t,n){e=n,t.style.left="".concat(s(e)>=0?0:s(e),"px"),t.offsetLeft<=5&&window.removeEventListener("scroll",l)})))},l=function(){t=1,window.requestAnimationFrame(c)},u=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(window.addEventListener("scroll",l),t.unobserve(e.target))}))})).observe(e)};d=".js-main-bottle",m=document.querySelectorAll(d),(m=Array.from(m)).forEach((function(e){u(e)}))}var d,m},getInvestorsSlider=function(){if(document.querySelector(".js-investors-slider")){var e=document.querySelector(".js-investors-slider"),t=document.querySelector(".js-investors-wrap"),n=document.querySelectorAll(".js-investors-slide"),r=new Swiper(e,{init:!1,slidesPerView:"auto",watchSlidesProgress:!0,spaceBetween:5,pagination:{el:".js-investors-pagination",type:"bullets"}});window.innerWidth<=640&&(e.classList.add("swiper"),t.classList.add("swiper-wrapper"),n.forEach((function(e){return e.classList.add("swiper-slide")})),r.init()),window.addEventListener("resize",(function(){window.innerWidth<=640?(e.classList.add("swiper"),t.classList.add("swiper-wrapper"),n.forEach((function(e){return e.classList.add("swiper-slide")})),r.init()):(e.classList.remove("swiper"),t.classList.remove("swiper-wrapper"),n.forEach((function(e){return e.classList.remove("swiper-slide")})))}))}},getSearchPopup=function(){if(document.querySelector(".js-search-btn")){var e=document.querySelector("body"),t=document.querySelector(".js-search-btn"),n=document.querySelector(".js-search-template").content.querySelector(".js-search-popup"),r=function(e){"Escape"===e.key&&(e.preventDefault(),o())},o=function(){var t=document.querySelector(".js-search-popup");t&&(t.remove(),document.removeEventListener("keydown",r)),e.classList.remove("lock-scroll")};t.addEventListener("click",(function(){var t,i=document.createDocumentFragment(),a=((t=n.cloneNode(!0)).querySelector(".js-close-btn").addEventListener("click",o),t);i.appendChild(a),document.addEventListener("keydown",r),createElement(e,i),e.classList.add("lock-scroll");var s=document.querySelector(".js-search-wrap");setTimeout((function(){return changeActiveClass(s,"search-popup")}))}))}},getVideoSrc=function(){if(document.querySelector(".js-video-container")){var e=document.querySelector(".js-video-container"),t={MOBILE:574.9,TABLET:1279.9},n=function(e){return'<video class="screen__video-item js-video-bg" preload="auto" autoplay muted loop playsinline>\n      <source src="/f/video/'.concat(e,'bg-video.webm" type="video/webm">\n      <source src="/f/video/').concat(e,'bg-video.mp4" type="video/mp4">\n    </video>')},r=function(){window.innerWidth<=t.MOBILE&&(removeChilds(e),render(e,n("m-"),"beforeend")),window.innerWidth<=t.TABLET&&window.innerWidth>=t.MOBILE&&(removeChilds(e),render(e,n("t-"),"beforeend")),window.innerWidth>t.TABLET&&(removeChilds(e),render(e,n(""),"beforeend"))};r(),window.addEventListener("resize",r)}},getCareerSlider=function(){if(document.querySelector(".js-career-slider")){var e=document.querySelector(".js-career-slider");new Swiper(e,{slidesPerView:"auto",spaceBetween:35,navigation:{nextEl:".js-career-btn-next",prevEl:".js-career-btn-prev"}})}};document.addEventListener("DOMContentLoaded",(function(){getTop(),burgerMenuHandler(),getMainSlider(),getNewsSlider(),getBrandsList(),getCatalogList(),getScrollItem(),getSliders(),getGallery(),getPopup(),getAboutUsSlider(),getSideBlock(),getItemAnimation(),getInvestorsSlider(),getSearchPopup(),getVideoSrc(),getCareerSlider()}));
"use strict";$(".select").each((function(){var e=$(this),t=e.find("option"),s=t.length;t.filter(":selected");e.hide(),e.wrap('<div class="select"></div>'),$("<div>",{class:"new-select",text:e.children("option:disabled").text()}).insertAfter(e);var l=e.next(".new-select");$("<div>",{class:"new-select__list"}).insertAfter(l);for(var i=l.next(".new-select__list"),n=1;n<s;n++)$("<div>",{class:"new-select__item",html:$("<span>",{text:t.eq(n).text()})}).attr("data-value",t.eq(n).val()).appendTo(i);var a=i.find(".new-select__item");i.slideUp(0),l.on("click",(function(){$(this).hasClass("on")?($(this).removeClass("on"),i.slideUp(350)):($(this).addClass("on"),i.slideDown(350),a.on("click",(function(){var e=$(this).data("value");$("select").val(e).attr("selected","selected"),l.text($(this).find("span").text()),i.slideUp(350),l.removeClass("on")})))}))}));
//# sourceMappingURL=main.js.map
