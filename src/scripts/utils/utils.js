// Функция прокрутки с контролем скорости
export const getScrollTo = (to, duration = 700) => {
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

//вычесление позиции относительно верха страницы
export const getOffset = (el) => {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft,
		bottom: rect.bottom + window.scrollY
	}
}

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
