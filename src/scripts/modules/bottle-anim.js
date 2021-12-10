export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const bottles = document.querySelectorAll('.js-animate-bottle');
		const anchor = document.querySelector('.js-anchor-bottle');

		const onScrollAnimation = () => {
			let targetPosition = {
				top: window.scrollY + anchor.getBoundingClientRect().top,
				bottom: window.scrollY + anchor.getBoundingClientRect().bottom
			};
			let windowPosition = {
				top: window.scrollY,
				bottom: window.scrollY + document.documentElement.clientHeight
			}

			if(targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
				console.log('scroll')
				bottles.forEach(e => e.classList.add('screen__img-animate--on'))
			} else {
				bottles.forEach(e => e.classList.remove('screen__img-animate--on'))
			}
		}

		window.addEventListener('scroll', onScrollAnimation);
	}
}
