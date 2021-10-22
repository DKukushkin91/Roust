"use strict";

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
      spaceBetween: 30
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

    scrollBtn.addEventListener('click', scrollToMain);
    window.addEventListener('scroll', onScrollAnim);
  }
};

var getSliders = function getSliders() {
  if (document.querySelector('.brands-item__wrap')) {
    var imgSlider = document.querySelector('.js-img-slider');
    var textSlider = document.querySelector('.js-text-slider');
    var imgItemSlider = document.querySelector('.js-top-slider');
    var thumbSlider = document.querySelector('.js-thumbs-slider');
    var sliderArray = [imgSlider, textSlider, imgItemSlider];
    var gThumbSlider = new Swiper(thumbSlider, {
      slidesPerView: 1,
      watchSlidesProgress: true
    });
    var sliders = sliderArray.map(function (el) {
      var slider = new Swiper(el, {
        slidesPerView: 1,
        allowTouchMove: false,
        // navigation: {
        // 	nextEl: el.querySelector('.swiper-button-next'),
        // 	prevEl: el.querySelector('.swiper-button-prev'),
        // },
        on: {
          slideChange: function slideChange() {
            var _this = this;

            sliders.filter(function (n) {
              return n !== slider;
            }).forEach(function (n) {
              return n.slideToLoop(_this.realIndex);
            });
          }
        },
        thumbs: {
          swiper: gThumbSlider
        }
      });
      return slider;
    });
  }
};

var getScrollElement = function getScrollElement() {
  if (document.querySelector('.js-scroll')) {
    var scrollItems = document.querySelectorAll('.js-scroll-item');
    var scroll = document.querySelector('.js-scroll');

    var targetRectX = function targetRectX(evt) {
      return evt.currentTarget.getBoundingClientRect().x;
    };

    var parrentRectLeft = function parrentRectLeft(evt) {
      return evt.currentTarget.parentNode.getBoundingClientRect().left;
    };

    scroll.style.width = "".concat(scrollItems[0].offsetWidth, "px");
    scrollItems.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        scroll.style.left = "".concat(targetRectX(evt) - parrentRectLeft(evt), "px");
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {
  getTop();
  getMainSlider();
  getNewsSlider();
  getBrandsList();
  getScrollItem();
  getSliders();
  getScrollElement();
});