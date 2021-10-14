"use strict";

/*   --------------------------------------------------------------*/

/*  Функция для прокрутки с контролем скорости
/*  --------------------------------------------------------------*/
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

  if (slider) {
    var swiper = new Swiper(slider, {
      pagination: {
        el: '.screen__p-list',
        clickable: true,
        type: 'custom',
        bulletClass: 'screen__p-item'
      }
    });

    var changeClass = function changeClass() {
      var pagButtons = document.querySelectorAll('.screen__p-btn'); // const mainPage = document.querySelector('.main-page__screen');
      // const activeSlide = mainPage.querySelectorAll('.swiper-slide')

      pagButtons.forEach(function (e) {
        e.addEventListener('click', function (evt) {
          pagButtons.forEach(function (i) {
            i.classList.remove('screen__p-btn--active');
          });
          evt.currentTarget.classList.add('screen__p-btn--active');
        });
      });
    };

    changeClass();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  getTop();
  getMainSlider();
});