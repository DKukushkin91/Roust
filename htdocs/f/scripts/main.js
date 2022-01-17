"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Функция прокрутки с контролем скорости
var getScrollTo = function getScrollTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;

  var element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
  // b = start value
  // c = change in value
  // d = duration
  easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },
      animateScroll = function animateScroll() {
    var currentDate = +new Date();
    var currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };

  animateScroll();
}; //создание елемента из template


var createElement = function createElement(element, fragment) {
  return element.appendChild(fragment);
}; //удаление всех дочерних элементов


var removeChilds = function removeChilds(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}; //вычесление позиции относительно верха страницы


var render = function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
};

var getTop = function getTop() {
  var btn = document.querySelector('.js-btn-top');

  if (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      getScrollTo(0, 400);
    });
  }
};

var getMainSlider = function getMainSlider() {
  var slider = document.querySelector('.js-main-slider');
  var subSlider = document.querySelector('.js-preview-slider');

  if (slider) {
    var subSwiper = new Swiper(subSlider, {
      slidesPerView: 6,
      watchSlidesProgress: true,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          watchSlidesProgress: true
        },
        575: {
          slidesPerView: 'auto',
          watchSlidesProgress: true
        },
        768: {
          slidesPerView: 6
        }
      }
    });
    var swiper = new Swiper(slider, {
      thumbs: {
        swiper: subSwiper
      },
      navigation: {
        nextEl: '.js-main-slider-next',
        prevEl: '.js-main-slider-prev'
      }
    });
  }
};

var getNewsSlider = function getNewsSlider() {
  var slider = document.querySelector('.js-news-slider');

  if (slider) {
    new Swiper(slider, {
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination"
      },
      spaceBetween: 40,
      navigation: {
        nextEl: '.js-news-slider-next',
        prevEl: '.js-news-slider-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto'
        },
        960: {
          slidesPerView: 'auto',
          watchSlidesProgress: true
        },
        1280: {
          pagination: false
        }
      }
    });
  }
};

var getBrandsList = function getBrandsList() {
  if (document.querySelector('.js-btns-wrap')) {
    var btnsWrapper = document.querySelector('.js-btns-wrap');
    var listWrapper = document.querySelector('.js-list-wrap');
    var buttons = btnsWrapper.querySelectorAll('.js-brands-btn');
    var list = document.querySelector('.js-brands-template').content.querySelectorAll('.js-brands-list');

    var getItems = function getItems(template) {
      return template.cloneNode(true);
    };

    var createItemsList = function createItemsList(template, i) {
      var fragment = document.createDocumentFragment();
      template.forEach(function (e, index) {
        if (i === index) {
          var element = getItems(e);
          fragment.appendChild(element);
        }
      });
      createElement(listWrapper, fragment);
    };

    buttons.forEach(function (e, index) {
      e.addEventListener('click', function (evt) {
        evt.preventDefault();
        buttons.forEach(function (e) {
          return e.classList.remove('brands__btn--active');
        });
        e.classList.add('brands__btn--active');
        removeChilds(listWrapper);
        createItemsList(list, index);
      });
    });
    buttons.forEach(function (e, index) {
      if (index === 0) {
        e.classList.add('brands__btn--active');
      }
    });
    createItemsList(list, 0);
  }
};

var getCatalogList = function getCatalogList() {
  if (document.querySelector('.catalog-brands')) {
    var catalogWrap = document.querySelector('.catalog-brands');
    var listWrapper = catalogWrap.querySelector('.js-list-wrap');
    var list = document.querySelector('.js-catalog-template').content.querySelectorAll('.js-catalog-list');

    var getItems = function getItems(template) {
      return template.cloneNode(true);
    };

    var createItemsList = function createItemsList(template, i) {
      var fragment = document.createDocumentFragment();
      template.forEach(function (e, index) {
        if (i === index) {
          var element = getItems(e);
          fragment.appendChild(element);
        }
      });
      createElement(listWrapper, fragment);
    };

    createItemsList(list, 0);
  }
};

var getScrollItem = function getScrollItem() {
  if (document.querySelector('.js-anim-items')) {
    var animItems = document.querySelectorAll('.js-anim-items');
    var header = document.querySelector('.js-animate-header');
    var opacityItems = document.querySelectorAll('.js-opacity');
    var imgSize = document.querySelector('.js-anim-size');
    var scrollBtn = document.querySelector('.js-scroll-btn');
    var main = document.querySelector('.main');
    var animText = document.querySelectorAll('.js-anim-text');
    var itemContainer = document.querySelector('.top__content--brands-item');

    var isSeen = function isSeen() {
      return itemContainer.getBoundingClientRect().bottom + 45 <= window.innerHeight;
    };

    var removeClass = function removeClass() {
      main.classList.remove('main--animate');
      opacityItems.forEach(function (e) {
        return e.classList.remove('animate__opacity');
      });
      animItems.forEach(function (e) {
        return e.classList.remove('brands-item__wrap--active');
      });
      header.classList.remove('header__active');
      imgSize.classList.remove('top__picture--animate');
      scrollBtn.classList.remove('top__scroll-btn--animate');
      animText.forEach(function (e) {
        return e.classList.remove('brands-item__text-block--animate');
      });
    };

    var addClass = function addClass() {
      opacityItems.forEach(function (e) {
        return e.classList.add('animate__opacity');
      });
      animItems.forEach(function (e) {
        return e.classList.add('brands-item__wrap--active');
      });
      header.classList.add('header__active');
      imgSize.classList.add('top__picture--animate');
      scrollBtn.classList.add('top__scroll-btn--animate');
      animText.forEach(function (e) {
        return e.classList.add('brands-item__text-block--animate');
      });
      main.classList.add('main--animate');
    };

    var onScrollAnim = function onScrollAnim() {
      if (isSeen()) {
        addClass();
      }

      if (scrollY === 0) {
        removeClass();
      }
    };

    if (window.innerWidth >= 1279.9) {
      scrollBtn.addEventListener('click', function () {
        addClass();
        window.scrollBy(0, window.innerWidth / 13);
      });
      window.addEventListener('scroll', onScrollAnim);
    }
  }
};

var getSliders = function getSliders() {
  if (document.querySelector('.brands-item__wrap')) {
    var imgSlider = document.querySelector('.js-img-slider');
    var textSlider = document.querySelector('.js-text-slider');
    var imgItemSlider = document.querySelector('.js-top-slider');
    var thumbSlider = document.querySelector('.js-thumbs-slider');
    var mobileSlider = document.querySelector('.js-mob-slider');
    var contentSliderMob = document.querySelector('.js-content-slider');
    var contentSliderWrap = contentSliderMob.querySelector('.js-content-wrap');
    var contentSlides = contentSliderMob.querySelectorAll('.js-content-slide');
    var sliderArray = [imgSlider, textSlider, imgItemSlider, mobileSlider];
    var gThumbSlider = new Swiper(thumbSlider, {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      slideToClickedSlide: true
    });
    var getMobSlider = new Swiper(contentSliderMob, {
      init: false,
      slidesPerView: 'auto',
      allowTouchMove: true,
      navigation: {
        nextEl: document.querySelector('.js-mob-next-btn'),
        prevEl: document.querySelector('.js-mob-prev-btn')
      }
    });

    if (window.innerWidth <= 640) {
      contentSliderMob.classList.add('swiper');
      contentSliderWrap.classList.add('swiper-wrapper');
      contentSlides.forEach(function (e) {
        return e.classList.add('swiper-slide');
      });
      getMobSlider.init();
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth <= 640) {
        contentSliderMob.classList.add('swiper');
        contentSliderWrap.classList.add('swiper-wrapper');
        contentSlides.forEach(function (e) {
          return e.classList.add('swiper-slide');
        });
        getMobSlider.init();
      } else {
        contentSliderMob.classList.remove('swiper');
        contentSliderWrap.classList.remove('swiper-wrapper');
        contentSlides.forEach(function (e) {
          return e.classList.remove('swiper-slide');
        });
      }
    });
    var sliders = sliderArray.map(function (el) {
      return new Swiper(el, {
        slidesPerView: 1,
        allowTouchMove: false,
        slideToClickedSlide: false,
        on: {
          slideChange: function slideChange() {
            var _this = this;

            sliders.filter(function (n) {
              return n !== el;
            }).forEach(function (n) {
              return n.slideToLoop(_this.realIndex);
            });
          }
        },
        breakpoints: {
          1366: {
            navigation: {
              nextEl: document.querySelector('.js-item-next'),
              prevEl: document.querySelector('.js-item-prev')
            }
          }
        },
        thumbs: {
          swiper: gThumbSlider,
          watchSlidesProgress: true
        }
      });
    });
  }
};

var getScrollElement = function getScrollElement() {
  if (document.querySelector('.js-scroll') && window.innerWidth >= 575) {
    var scrollItems = document.querySelectorAll('.js-scroll-item');
    var scroll = document.querySelector('.js-scroll');

    var targetRectX = function targetRectX(evt) {
      return evt.currentTarget.getBoundingClientRect().x;
    };

    var parrentRectLeft = function parrentRectLeft(evt) {
      return evt.currentTarget.parentNode.getBoundingClientRect().left;
    };

    var slideBtns = document.querySelectorAll('.js-slide-btn');
    scroll.style.width = "".concat(scrollItems[0].offsetWidth, "px");
    scrollItems.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        scroll.style.left = "".concat(targetRectX(evt) - parrentRectLeft(evt), "px");
      });
    });
    slideBtns.forEach(function (e) {
      e.addEventListener('click', function () {
        var _iterator = _createForOfIteratorHelper(scrollItems),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.classList.contains('swiper-slide-thumb-active')) {
              scroll.style.left = "".concat(item.getBoundingClientRect().x - item.parentNode.getBoundingClientRect().left, "px");
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    });
  }
};

var getGallery = function getGallery() {
  if (document.querySelector('.js-open-gallery')) {
    var body = document.querySelector('body');
    var buttons = document.querySelectorAll('.js-open-gallery');
    var elementTemplate = document.querySelector('.js-gallery-template').content.querySelector('.js-gallery-container');
    var listElementsTemplate = document.querySelector('.js-g-list-template').content.querySelectorAll('.js-g-list');

    var getSlider = function getSlider(element, next, prev) {
      return new Swiper(element, {
        slidesPerView: 1,
        navigation: {
          nextEl: next,
          prevEl: prev
        }
      });
    };

    var escPressHandler = function escPressHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        elementRemoveHandler();
      }
    };

    var elementRemoveHandler = function elementRemoveHandler() {
      var galleryContainer = document.querySelector('.js-gallery-container');

      if (galleryContainer) {
        galleryContainer.remove();
        document.removeEventListener('keydown', escPressHandler);
      }

      body.classList.remove('lock-scroll');
    };

    var getElements = function getElements(template) {
      return template.cloneNode(true);
    };

    var appendElements = function appendElements(container, template, i) {
      var fragment = document.createDocumentFragment();
      template.forEach(function (e, index) {
        if (index === i) {
          var element = getElements(e);
          fragment.appendChild(element);
        }
      });
      createElement(container, fragment);
      body.classList.add('lock-scroll');
    };

    var getElement = function getElement(index) {
      var template = elementTemplate.cloneNode(true);
      var closeBtn = template.querySelector('.js-close-btn');
      var sliderWrap = template.querySelector('.js-gallery-slider');
      var prevBtn = template.querySelector('.js-g-btn-prev');
      var nextBtn = template.querySelector('.js-g-btn-next');
      appendElements(sliderWrap, listElementsTemplate, index);
      getSlider(sliderWrap, nextBtn, prevBtn);
      closeBtn.addEventListener('click', elementRemoveHandler);
      return template;
    };

    var appendElement = function appendElement(index) {
      var fragment = document.createDocumentFragment();
      var element = getElement(index);
      fragment.appendChild(element);
      document.addEventListener('keydown', escPressHandler);
      createElement(body, fragment);
      body.classList.add('lock-scroll');
    };

    buttons.forEach(function (button, index) {
      button.addEventListener('click', function (evt) {
        evt.preventDefault();
        appendElement(index);
      });
    });
  }
};

var selectHandler = function selectHandler(template) {
  var elSelectNative = template.querySelectorAll('.js-select-native');
  var elSelectCustom = template.querySelectorAll('.js-select-custom');
  var optionChecked = '';
  var optionHoveredIndex = -1; // // Toggle custom select visibility when clicking the box

  elSelectCustom.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      var target = evt.currentTarget;
      var isClosed = !target.classList.contains('m-select__custom-wrap--active');

      if (isClosed) {
        openSelectCustom(target);
      } else {
        closeSelectCustom();
      }
    });
  });

  var openSelectCustom = function openSelectCustom(target) {
    target.classList.add('m-select__custom-wrap--active');
    target.setAttribute('aria-hidden', false);

    if (optionChecked) {
      var customOptsList = Array.from(target.querySelectorAll('.js-custom-option'));
      var optionCheckedIndex = customOptsList.findIndex(function (el) {
        return el.getAttribute('data-value') === optionChecked;
      });
      updateCustomSelectHovered(optionCheckedIndex);
    }

    document.addEventListener('click', watchClickOutside); // document.addEventListener('keydown', supportKeyboardNavigation);
  };

  var closeSelectCustom = function closeSelectCustom() {
    elSelectCustom.forEach(function (el) {
      el.classList.remove('m-select__custom-wrap--active');
      el.setAttribute('aria-hidden', true);
    });
    updateCustomSelectHovered(-1);
    document.removeEventListener('click', watchClickOutside); // document.removeEventListener('keydown', supportKeyboardNavigation);
  };

  var updateCustomSelectHovered = function updateCustomSelectHovered(newIndex) {
    elSelectCustom.forEach(function (el) {
      if (el.classList.contains('m-select__custom-wrap--active')) {
        var customOptions = el.querySelector('.js-custom-options');
        var prevOption = customOptions.children[optionHoveredIndex];
        var option = customOptions.children[newIndex];

        if (prevOption) {
          prevOption.classList.remove('m-select__custom-option--hover');
        }

        if (option) {
          option.classList.add('m-select__custom-option--hover');
        }

        if (option) {
          optionHoveredIndex = newIndex;
        }
      }
    });
  };

  var updateCustomSelectChecked = function updateCustomSelectChecked(value, text) {
    elSelectCustom.forEach(function (el, index) {
      var prevValue = optionChecked;
      var elCustomOptions = el.querySelector('.js-custom-options');
      var elCustomBox = el.querySelector('.js-custom-box');
      var elPrevOption = elCustomOptions.querySelector("[data-value='".concat(prevValue, "'"));
      var elOption = elCustomOptions.querySelector("[data-value='".concat(value, "'"));

      if (elPrevOption) {
        elPrevOption.classList.remove('m-select__custom-wrap--active');
      }

      if (elOption) {
        elOption.classList.add('m-select__custom-wrap--active');
      }

      elSelectNative.forEach(function (e, i) {
        if (el.classList.contains('m-select__custom-wrap--active') || e.classList.contains('inFocus') && index === i) {
          elCustomBox.textContent = text;
          optionChecked = value;
        }
      });
    });
  };

  var watchClickOutside = function watchClickOutside(evt) {
    elSelectCustom.forEach(function (el) {
      if (el.classList.contains('m-select__custom-wrap--active') && !el.contains(evt.target)) {
        closeSelectCustom();
      }
    });
  }; // const supportKeyboardNavigation = (evt) => {
  // 	[...elSelectCustom].filter(el => {
  // 		if(el.classList.contains('m-select__custom-wrap--active')) {
  // 			// press down -> go next
  // 			if (evt.key === 40 && optionHoveredIndex < optionsCount - 1) {
  // 				evt.preventDefault(); // prevent page scrolling
  // 				updateCustomSelectHovered(optionHoveredIndex + 1);
  // 			}
  // 			// press up -> go previous
  // 			if (evt.key === 38 && optionHoveredIndex > 0) {
  // 				evt.preventDefault(); // prevent page scrolling
  // 				updateCustomSelectHovered(optionHoveredIndex - 1);
  // 			}
  // 			// press Enter or space -> select the option
  // 			if (evt.key === 13 || evt.key === 32) {
  // 				evt.preventDefault();
  // 				elSelectCustom.forEach((el, index) => {
  // 					const option = el.querySelector('.js-custom-options').children[optionHoveredIndex];
  // 					const value = option && option.getAttribute('data-value');
  // 					if (value) {
  // 						elSelectNative.forEach((e, i) => {
  // 							if(index === i) {
  // 								e.value = value;
  // 								updateCustomSelectChecked(value, option.textContent);
  // 							}
  // 						})
  // 					}
  // 				})
  // 				closeSelectCustom();
  // 			}
  // 		}
  // 	})
  // }
  //// Update selectCustom value when selectNative is changed.


  elSelectCustom.forEach(function (e, index) {
    _toConsumableArray(elSelectNative).filter(function (el, i) {
      if (index === i) {
        el.addEventListener('focus', function (evt) {
          evt.currentTarget.classList.add('inFocus');

          if (evt.currentTarget.classList.contains('inFocus')) {
            closeSelectCustom();
            el.addEventListener('change', function (evt) {
              var elCustomOptions = e.querySelector('.js-custom-options');
              var value = evt.currentTarget.value;
              var elRespectiveCustomOption = elCustomOptions.querySelectorAll("[data-value='".concat(value, "']"))[0];
              updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
            });
          }
        });
        el.addEventListener('blur', function (evt) {
          return evt.currentTarget.classList.remove('inFocus');
        });
      }
    });
  }); //// Update selectCustom value when an option is clicked or hovered

  elSelectCustom.forEach(function (el, i) {
    el.addEventListener('click', function (evt) {
      var customOptsList = Array.from(evt.currentTarget.querySelectorAll('.js-custom-option'));
      customOptsList.forEach(function (elOption, indexList) {
        elOption.addEventListener('click', function (evt) {
          var value = evt.currentTarget.getAttribute('data-value');
          evt.stopPropagation(); //Sync native select to have the same value

          elSelectNative.forEach(function (element, index) {
            if (index === i) {
              element.value = value;
              updateCustomSelectChecked(value, evt.currentTarget.textContent);
              closeSelectCustom();
            }
          });
        });

        if (el.classList.contains('m-select__custom-wrap--active')) {
          elOption.addEventListener('mouseenter', function (evt) {
            updateCustomSelectHovered(indexList);
          });
        }
      });
    });
  });
};

var getPopup = function getPopup() {
  if (document.querySelector('.js-btn-form')) {
    (function () {
      var body = document.querySelector('body');
      var buttons = document.querySelectorAll('.js-btn-form');
      var popupTemplate = document.querySelector('.js-popup-form').content.querySelector('.js-popup-wrap');

      var escPressHandler = function escPressHandler(evt) {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          elementRemoveHandler();
        }
      };

      var elementRemoveHandler = function elementRemoveHandler() {
        var wrap = document.querySelector('.js-popup-wrap');

        if (wrap) {
          wrap.remove();
          document.removeEventListener('keydown', escPressHandler);
        }

        body.classList.remove('lock-scroll');
      };

      var getElement = function getElement() {
        var template = popupTemplate.cloneNode(true);
        var closeBtn = template.querySelector('.js-close-btn');
        closeBtn.addEventListener('click', elementRemoveHandler);
        selectHandler(template);
        return template;
      };

      var appendElement = function appendElement() {
        var fragment = document.createDocumentFragment();
        var element = getElement();
        fragment.appendChild(element);
        document.addEventListener('keydown', escPressHandler);
        createElement(body, fragment);
        body.classList.add('lock-scroll');
      };

      var _iterator2 = _createForOfIteratorHelper(buttons),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var button = _step2.value;
          button.addEventListener('click', function (evt) {
            evt.preventDefault();
            appendElement();
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    })();
  }
};

var burgerMenuHandler = function burgerMenuHandler() {
  if (document.querySelector('.js-burger-btn')) {
    var button = document.querySelector('.js-burger-btn');
    var body = document.querySelector('body');
    button.addEventListener('click', function () {
      button.classList.toggle('header__burger-btn--active');
      body.classList.toggle('background-burger');
    });
  }
};

var getAboutUsSlider = function getAboutUsSlider() {
  if (document.querySelector('.js-about-us-slider')) {
    var aboutUsSlider = document.querySelector('.js-about-us-slider');
    new Swiper(aboutUsSlider, {
      spaceBetween: 20,
      breakpoints: {
        320: {
          pagination: {
            el: '.js-about-pagination'
          },
          slidesPerView: 'auto',
          watchSlidesProgress: true
        },
        1280: {
          pagination: false,
          slidesPerView: 1,
          navigation: {
            prevEl: '.js-about-prev',
            nextEl: '.js-about-next'
          }
        }
      }
    });
  }
};

var cardsMocks = [{
  name: 'Roustam Tariko',
  text: '"Welcome to Roust. We are a group of consumer-focused companies with market-leading brands in 86 countries markets around the world, including UK, USA, Germany, France, Italy, Russia, Poland and Hungary. It is with great pride that I personally ensure that Roust products are of the highest quality and offer the best possible consumer experience."'
}, {
  name: 'Igor Kosarev',
  text: 'Our goal is to build a global company of leading brands. Through consumer insight, we have a deep understanding of what our consumers need and desire. Through innovation, we create products and services that start new trends.'
}, {
  name: 'Pavel Merkul',
  text: 'Pavel joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program.'
}, {
  name: 'Alessandro Picchi',
  text: 'Alessandro joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program.'
}, {
  name: 'Yaroslav Zakharov',
  text: 'Yaroslav joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program.'
}, {
  name: 'Ilya Blinov',
  text: 'Ilya joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program.'
}, {
  name: 'Mariusz Chrobot',
  text: 'Mariusz joined Roust Group in October 2017 as Roust Russia CFO. In December 2017, he was appointed Roust Group Global CFO. In this role, Yaroslav is responsible for the financial management of all Roust Group companies and production sites. Yaroslav began his career in 1995 joining the multinational FMCG giant PepsiCo. In 2001, he moved to AB InBev, a world leading brewer, where he worked his way up from a finance controller to the Finance Director responsible for Strategic Planning & Business Performance Management in Central & Eastern Europe. During his tenure at AB InBev, he also had direct commercial experience, successfully running Sales in the capacity of Regional Sales Director and National On-Trade Channel Director. In 2014, Yaroslav continued his career as CFO for Russia, India, the Middle East, Turkey and Africa at Kraft Heinz. Yaroslav received his MSc in Economics and Business Management from Sochi State University, and his Executive MBA from INSEAD/Wharton Leadership Program.'
}];
var productionMocks = [{
  name: 'Parliament Production Distillery',
  text: 'One of the most technologically advanced distilleries of Roust Group. Built and commissioned in 1991. Investments in the modernization of the plant since 2011 amount to over 270 million rubles. Production capacity of 6.61 million 9l cases per year (vodka and spirits).'
}];

var getSideBlock = function getSideBlock() {
  if (document.querySelector('.js-side-block')) {
    var buttons = document.querySelectorAll('.js-side-block');
    var body = document.querySelector('body');
    var template = document.querySelector('.js-about-template').content.querySelector('.side');

    var escPressHandler = function escPressHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        elementRemoveHandler();
      }
    };

    var elementRemoveHandler = function elementRemoveHandler() {
      var wrap = document.querySelector('.side');

      if (body.classList.contains('lock-scroll')) {
        body.classList.remove('lock-scroll');
      }

      if (wrap) {
        wrap.remove();
        document.removeEventListener('keydown', escPressHandler);
      }
    };

    var getElement = function getElement(cardTitle, cardSubtitle, cardImage, evt) {
      var templateClone = template.cloneNode(true);
      var backBtn = templateClone.querySelector('.js-back-btn');
      var title = templateClone.querySelector('.js-side-title');
      var subTitle = templateClone.querySelector('.js-side-subTitle');
      var image = templateClone.querySelector('.js-side-img');
      var text = templateClone.querySelector('.js-side-text');
      var contentWrap = templateClone.querySelector('.js-side-wrap');
      image.src = cardImage.src;
      title.textContent = cardTitle.textContent;
      subTitle.textContent = cardSubtitle.textContent;
      cardsMocks.map(function (e) {
        return e.name === title.textContent ? text.textContent = e.text : '';
      });

      if (evt.target.closest('.js-about-card')) {
        title.classList.add('side__title--order');
        title.parentNode.classList.add('side__texts-wrap--order');
        subTitle.classList.add('side__sub-title--order');
        image.parentNode.classList.add('side__img--order');
        productionMocks.map(function (e) {
          return e.name === title.textContent ? text.textContent = e.text : '';
        });
      }

      body.classList.add('lock-scroll');
      backBtn.addEventListener('click', elementRemoveHandler);
      return templateClone;
    };

    var appendElement = function appendElement(cardTitle, cardSubtitle, cardImage, evt) {
      var fragment = document.createDocumentFragment();
      var element = getElement(cardTitle, cardSubtitle, cardImage, evt);
      fragment.appendChild(element);
      document.addEventListener('keydown', escPressHandler);
      createElement(body, fragment);
    };

    buttons.forEach(function (el) {
      el.addEventListener('click', function (evt) {
        evt.preventDefault();
        var title = evt.target.parentNode.querySelector('.js-card-title');
        var subTitle = evt.target.parentNode.querySelector('.js-card-text');
        var cardImage = evt.target.parentNode.parentNode.querySelector('.js-card-img');
        appendElement(title, subTitle, cardImage, evt);
        var contentWrap = document.querySelector('.js-side-wrap');

        var changeClass = function changeClass() {
          return contentWrap ? contentWrap.classList.add('side__wrap--active') : '';
        };

        setTimeout(changeClass);
      });
    });
  }
};

var getItemAnimation = function getItemAnimation() {
  if (document.querySelector('.js-anchor-bottle')) {
    var items = document.querySelectorAll('.js-animate-bottle');
    var mainItem = document.querySelector('.js-main-bottle');
    var itemsArray = Array.from(items); // const anchor = document.querySelector('.js-anchor-bottle');

    var val = 0.06;
    var flag = null;

    var moveElements = function moveElements(elements) {
      var evenIndexs = elements.filter(function (x, index) {
        return index % 2 === 0;
      });
      var oddIndexs = elements.filter(function (x, index) {
        return index % 2 !== 0;
      });

      if (flag === 1) {
        evenIndexs.forEach(function (el, index) {
          var value = window.scrollY * ((index + 1) * val);
          el.style.left = "".concat(value, "px");
        });
        oddIndexs.forEach(function (el, index) {
          var value = window.scrollY * ((index + 1) * val);
          el.style.right = "".concat(value, "px");
        });
      } else {
        evenIndexs.forEach(function (el) {
          el.style.left = 0;
        });
        oddIndexs.forEach(function (el) {
          el.style.right = 0;
        });
      }
    };

    var onScrollAnimation = function onScrollAnimation() {
      var targetPosition = {
        top: window.scrollY + mainItem.getBoundingClientRect().top,
        bottom: window.scrollY + mainItem.getBoundingClientRect().bottom
      };
      var windowPosition = {
        top: window.scrollY,
        bottom: window.scrollY + document.documentElement.clientHeight
      };

      if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
        flag = 1;
        moveElements(itemsArray);
      } else {
        flag = null;
        moveElements(itemsArray);
      }
    };

    window.addEventListener('scroll', onScrollAnimation);
  }
};

var getInvestorsSlider = function getInvestorsSlider() {
  if (document.querySelector('.js-investors-slider')) {
    var slider = document.querySelector('.js-investors-slider');
    var sliderWrap = document.querySelector('.js-investors-wrap');
    var slides = document.querySelectorAll('.js-investors-slide');
    var createSlider = new Swiper(slider, {
      init: false,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      spaceBetween: 5,
      pagination: {
        el: '.js-investors-pagination',
        type: 'bullets'
      }
    });

    if (window.innerWidth <= 640) {
      slider.classList.add('swiper');
      sliderWrap.classList.add('swiper-wrapper');
      slides.forEach(function (e) {
        return e.classList.add('swiper-slide');
      });
      createSlider.init();
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth <= 640) {
        slider.classList.add('swiper');
        sliderWrap.classList.add('swiper-wrapper');
        slides.forEach(function (e) {
          return e.classList.add('swiper-slide');
        });
        createSlider.init();
      } else {
        slider.classList.remove('swiper');
        sliderWrap.classList.remove('swiper-wrapper');
        slides.forEach(function (e) {
          return e.classList.remove('swiper-slide');
        });
      }
    });
  }
};

var getSearchPopup = function getSearchPopup() {
  if (document.querySelector('.js-search-btn')) {
    var body = document.querySelector('body');
    var createPopupButton = document.querySelector('.js-search-btn');
    var popupTemplate = document.querySelector('.js-search-template').content.querySelector('.js-search-popup');

    var escPressHandler = function escPressHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        elementRemoveHandler();
      }
    };

    var elementRemoveHandler = function elementRemoveHandler() {
      var wrap = document.querySelector('.js-search-popup');

      if (wrap) {
        wrap.remove();
        document.removeEventListener('keydown', escPressHandler);
      }

      body.classList.remove('lock-scroll');
    };

    var getElement = function getElement() {
      var template = popupTemplate.cloneNode(true);
      var closeBtn = template.querySelector('.js-close-btn');
      closeBtn.addEventListener('click', elementRemoveHandler);
      return template;
    };

    var appendElement = function appendElement() {
      var fragment = document.createDocumentFragment();
      var element = getElement();
      fragment.appendChild(element);
      document.addEventListener('keydown', escPressHandler);
      createElement(body, fragment);
      body.classList.add('lock-scroll');
    };

    createPopupButton.addEventListener('click', appendElement);
  }
};

var getVideoSrc = function getVideoSrc() {
  if (document.querySelector('.js-video-container')) {
    var container = document.querySelector('.js-video-container');
    var breakpoints = {
      MOBILE: 574.9,
      TABLET: 1279.9
    };

    var template = function template(e) {
      return "<video class=\"screen__video-item js-video-bg\" preload=\"auto\" autoplay muted loop playsinline>\n      <source src=\"/f/video/".concat(e, "bg-video.webm\" type=\"video/webm\">\n      <source src=\"/f/video/").concat(e, "bg-video.mp4\" type=\"video/mp4\">\n    </video>");
    };

    var getResizeVideo = function getResizeVideo() {
      if (window.innerWidth <= breakpoints.MOBILE) {
        removeChilds(container);
        render(container, template("m-"), 'beforeend');
      }

      if (window.innerWidth <= breakpoints.TABLET && window.innerWidth >= breakpoints.MOBILE) {
        removeChilds(container);
        render(container, template("t-"), 'beforeend');
      }

      if (window.innerWidth > breakpoints.TABLET) {
        removeChilds(container);
        render(container, template(''), 'beforeend');
      }
    };

    getResizeVideo();
    window.addEventListener('resize', getResizeVideo);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  getTop();
  burgerMenuHandler();
  getMainSlider();
  getNewsSlider();
  getBrandsList();
  getCatalogList();
  getScrollItem();
  getSliders();
  getScrollElement();
  getGallery();
  getPopup();
  getAboutUsSlider();
  getSideBlock();
  getItemAnimation();
  getInvestorsSlider();
  getSearchPopup();
  getVideoSrc();
});
"use strict";

$('.select').each(function () {
  var _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 350; // длительность анимации 


  _this.hide();

  _this.wrap('<div class="select"></div>');

  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  var selectHead = _this.next('.new-select');

  $('<div>', {
    class: 'new-select__list'
  }).insertAfter(selectHead);
  var selectList = selectHead.next('.new-select__list');

  for (var i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
  }

  var selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);
      selectItem.on('click', function () {
        var chooseItem = $(this).data('value');
        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());
        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});