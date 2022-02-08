export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const items = document.querySelectorAll('.js-animate-bottle');
		// const mainItem = document.querySelector('.js-main-bottle');
		const itemsArray = Array.from(items);
		const anchor = document.querySelector('.js-anchor-bottle')

		const val = 0.12

		let flag = null;

		history.scrollRestoration = 'manual';
		window.scrollTo(0,0);

		const moveElements = () => {
			const evenIndexs = itemsArray.filter((x, index) => index % 2 === 0);
			const oddIndexs = itemsArray.filter((x, index) => index % 2 !== 0 );

			if(flag === 1){
				evenIndexs.forEach((el, index) => {
					const value = Math.floor((anchor.getBoundingClientRect().top <= 0 ? anchor.getBoundingClientRect().top : 0) * ((index + 1) * val));
					el.style.right = `${value}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})

				oddIndexs.forEach((el, index) => {
					const value = Math.floor((anchor.getBoundingClientRect().top <= 0 ? anchor.getBoundingClientRect().top : 0) * ((index + 1) * val));
					el.style.left = `${value}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})
			}
		}

		const onScrollAnimation = () => {
			flag = 1;
			window.requestAnimationFrame(moveElements);
		}

		window.addEventListener('scroll', onScrollAnimation);

		const scrollTrigger = (selector) => {
			let els = document.querySelectorAll(selector)
			els = Array.from(els)

			els.forEach(el => {
				addObserver(el)
			})
		}

		const addObserver = (el) =>{
			let observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if(entry.isIntersecting) {
						window.addEventListener('scroll', onScrollAnimation);
						observer.unobserve(entry.target)
					}
				})
			})
			observer.observe(el)
		}

		scrollTrigger('.js-anchor-bottle');
	}
}
