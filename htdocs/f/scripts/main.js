"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Функция прокрутки с контролем скорости
var scrollTo = function scrollTo(to) {
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


var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};

var getTop = function getTop() {
  var btn = document.querySelector('.js-btn-top');

  if (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      scrollTo(0, 400);
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
    var newsSlider = new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: '.js-news-slider-next',
        prevEl: '.js-news-slider-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          pagination: {
            el: ".swiper-pagination"
          }
        },
        960: {
          pagination: false,
          watchSlidesProgress: true
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

    var onScrollAnim = function onScrollAnim() {
      animItems.forEach(function (i) {
        var animItem = i;
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = getOffset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (scrollY > animItemOffset - animItemPoint || scrollY < animItemOffset + animItemHeight) {
          opacityItems.forEach(function (e) {
            return e.classList.add('animate__opacity');
          });
          animItem.classList.add('brands-item__wrap--active');
          header.classList.add('header__active');
          imgSize.classList.add('top__picture--animate');
          scrollBtn.classList.add('top__scroll-btn--animate');
          main.classList.add('main--animate');
          animText.forEach(function (e) {
            return e.classList.add('brands-item__text-block--animate');
          });
        }

        if (scrollY == 0) {
          main.classList.remove('main--animate');
          opacityItems.forEach(function (e) {
            return e.classList.remove('animate__opacity');
          });
          animItem.classList.remove('brands-item__wrap--active');
          header.classList.remove('header__active');
          imgSize.classList.remove('top__picture--animate');
          scrollBtn.classList.remove('top__scroll-btn--animate');
          animText.forEach(function (e) {
            return e.classList.remove('brands-item__text-block--animate');
          });
        }
      });
    };

    var scrollToMain = function scrollToMain() {
      return window.scrollBy(0, 80);
    };

    if (window.innerWidth >= 1279.9) {
      scrollBtn.addEventListener('click', scrollToMain);
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
  var elSelectNative = template.getElementsByClassName("js-select-native")[0];
  var elSelectCustom = template.getElementsByClassName("js-select-custom")[0];
  var elSelectCustomBox = elSelectCustom.children[0];
  var elSelectCustomOpts = elSelectCustom.children[1];
  var customOptsList = Array.from(elSelectCustomOpts.children);
  var optionsCount = customOptsList.length;
  var defaultLabel = elSelectCustomBox.getAttribute("data-value");
  var optionChecked = "";
  var optionHoveredIndex = -1; // Toggle custom select visibility when clicking the box

  elSelectCustomBox.addEventListener("click", function (e) {
    var isClosed = !elSelectCustom.classList.contains("m-select__custom-wrap--active");

    if (isClosed) {
      openSelectCustom();
    } else {
      closeSelectCustom();
    }
  });

  function openSelectCustom() {
    elSelectCustom.classList.add("m-select__custom-wrap--active"); // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.

    elSelectCustom.setAttribute("aria-hidden", false);

    if (optionChecked) {
      var optionCheckedIndex = customOptsList.findIndex(function (el) {
        return el.getAttribute("data-value") === optionChecked;
      });
      updateCustomSelectHovered(optionCheckedIndex);
    } // Add related event listeners


    document.addEventListener("click", watchClickOutside);
    document.addEventListener("keydown", supportKeyboardNavigation);
  }

  function closeSelectCustom() {
    elSelectCustom.classList.remove("m-select__custom-wrap--active");
    elSelectCustom.setAttribute("aria-hidden", true);
    updateCustomSelectHovered(-1); // Remove related event listeners

    document.removeEventListener("click", watchClickOutside);
    document.removeEventListener("keydown", supportKeyboardNavigation);
  }

  function updateCustomSelectHovered(newIndex) {
    var prevOption = elSelectCustomOpts.children[optionHoveredIndex];
    var option = elSelectCustomOpts.children[newIndex];

    if (prevOption) {
      prevOption.classList.remove("m-select__custom-option--hover");
    }

    if (option) {
      option.classList.add("m-select__custom-option--hover");
    }

    optionHoveredIndex = newIndex;
  }

  function updateCustomSelectChecked(value, text) {
    var prevValue = optionChecked;
    var elPrevOption = elSelectCustomOpts.querySelector("[data-value=\"".concat(prevValue, "\""));
    var elOption = elSelectCustomOpts.querySelector("[data-value=\"".concat(value, "\""));

    if (elPrevOption) {
      elPrevOption.classList.remove("m-select__custom-wrap--active");
    }

    if (elOption) {
      elOption.classList.add("m-select__custom-wrap--active");
    }

    elSelectCustomBox.textContent = text;
    optionChecked = value;
  }

  function watchClickOutside(e) {
    var didClickedOutside = !elSelectCustom.contains(event.target);

    if (didClickedOutside) {
      closeSelectCustom();
    }
  }

  function supportKeyboardNavigation(e) {
    // press down -> go next
    if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
      e.preventDefault(); // prevent page scrolling

      updateCustomSelectHovered(optionHoveredIndex + 1);
    } // press up -> go previous


    if (event.keyCode === 38 && optionHoveredIndex > 0) {
      e.preventDefault(); // prevent page scrolling

      updateCustomSelectHovered(optionHoveredIndex - 1);
    } // press Enter or space -> select the option


    if (event.keyCode === 13 || event.keyCode === 32) {
      e.preventDefault();
      var option = elSelectCustomOpts.children[optionHoveredIndex];
      var value = option && option.getAttribute("data-value");

      if (value) {
        elSelectNative.value = value;
        updateCustomSelectChecked(value, option.textContent);
      }

      closeSelectCustom();
    } // press ESC -> close selectCustom


    if (event.keyCode === 27) {
      closeSelectCustom();
    }
  } // Update selectCustom value when selectNative is changed.


  elSelectNative.addEventListener("change", function (e) {
    var value = e.target.value;
    var elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll("[data-value=\"".concat(value, "\"]"))[0];
    updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
  }); // Update selectCustom value when an option is clicked or hovered

  customOptsList.forEach(function (elOption, index) {
    elOption.addEventListener("click", function (e) {
      var value = e.target.getAttribute("data-value"); // Sync native select to have the same value

      elSelectNative.value = value;
      updateCustomSelectChecked(value, e.target.textContent);
      closeSelectCustom();
    });
    elOption.addEventListener("mouseenter", function (e) {
      updateCustomSelectHovered(index);
    }); // TODO: Toggle these event listeners based on selectCustom visibility
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
    button.addEventListener('click', function () {
      button.classList.toggle('header__burger-btn--active');
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
          slidesPerView: 1
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
      var contentWrap = templateClone.querySelector('.js-side-wrap');
      var title = templateClone.querySelector('.js-side-title');
      var subTitle = templateClone.querySelector('.js-side-subTitle');
      var image = templateClone.querySelector('.js-side-img');
      var text = templateClone.querySelector('.js-side-text');
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

      contentWrap.classList.add('side__wrap--active');
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
      });
    });
  }
};

var getItemAnimation = function getItemAnimation() {
  if (document.querySelector('.js-anchor-bottle')) {
    var bottles = document.querySelectorAll('.js-animate-bottle');
    var anchor = document.querySelector('.js-anchor-bottle');

    var onScrollAnimation = function onScrollAnimation() {
      var targetPosition = {
        top: window.scrollY + anchor.getBoundingClientRect().top,
        bottom: window.scrollY + anchor.getBoundingClientRect().bottom
      };
      var windowPosition = {
        top: window.scrollY,
        bottom: window.scrollY + document.documentElement.clientHeight
      };

      if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
        console.log('scroll');
        bottles.forEach(function (e) {
          return e.classList.add('screen__img-animate--on');
        });
      } else {
        bottles.forEach(function (e) {
          return e.classList.remove('screen__img-animate--on');
        });
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