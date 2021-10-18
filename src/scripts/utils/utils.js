// Функция прокрутки с контролем скорости
export const scrollTo = (to, duration = 700) => {
	const
			element = document.scrollingElement || document.documentElement,
			start = element.scrollTop,
			change = to - start,
			startDate = +new Date(),
			// t = current time
			// b = start value
			// c = change in value
			// d = duration
			easeInOutQuad = function (t, b, c, d) {
					t /= d / 2;
					if (t < 1) return c / 2 * t * t + b;
					t--;
					return -c / 2 * (t * (t - 2) - 1) + b;
			},
			animateScroll = function () {
					const currentDate = +new Date();
					const currentTime = currentDate - startDate;
					element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
					if (currentTime < duration) {
							requestAnimationFrame(animateScroll);
					}
					else {
							element.scrollTop = to;
					}
			};
	animateScroll();
}

//создание елемента из template
export const createElement = (element, fragment) => element.appendChild(fragment);

//удаление всех дочерних элементов
export const removeChilds = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
