export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const items = document.querySelectorAll('.js-animate-bottle');
		// const mainItem = document.querySelector('.js-main-bottle');
		const itemsArray = Array.from(items);
		const anchor = document.querySelector('.js-anchor-bottle')

		const val = 0.5

		let flag = null;

		history.scrollRestoration = 'manual';
		window.scrollTo(0,0);

		const moveElements = () => {
			const evenIndexs = itemsArray.filter((x, index) => index % 2 === 0);
			const oddIndexs = itemsArray.filter((x, index) => index % 2 !== 0 );

			if(flag === 1){
				evenIndexs.forEach((el, index) => {
					const value = (anchor.getBoundingClientRect().top <= 0 ? anchor.getBoundingClientRect().top : 0) * ((index + 1.12) * val);
					el.style.right = `${value}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})

				oddIndexs.forEach((el, index) => {
					const value = (anchor.getBoundingClientRect().top <= 0 ? anchor.getBoundingClientRect().top : 0) * ((index + 1.12) * val);
					el.style.left = `${value}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})
			}
		}

		const onScrollAnimation = () => {
			// let targetPosition = {
			// 	top: window.scrollY + mainItem.getBoundingClientRect().top,
			// 	bottom: window.scrollY + mainItem.getBoundingClientRect().bottom
			// };
			// let windowPosition = {
			// 	top: window.scrollY,
			// 	bottom: window.scrollY + document.documentElement.clientHeight
			// }

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
				console.log(entries);
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
