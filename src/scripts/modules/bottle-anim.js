export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const items = document.querySelectorAll('.js-animate-bottle');
		const itemsArray = Array.from(items);
		const anchor = document.querySelector('.js-anchor-bottle')
		const evenIndexs = itemsArray.filter((x, index) => index % 2 === 0);
		const oddIndexs = itemsArray.filter((x, index) => index % 2 !== 0 );

		const scrollSpeed = 0.12

		const getValue = (index) => {
			return Math.floor((anchor.getBoundingClientRect().top <= 0 ? anchor.getBoundingClientRect().top : 0) * ((index === 0 ? index + 1.111 : index + 1.2) * scrollSpeed));
		}

		let indexElement;
		let flag;

		history.scrollRestoration = 'manual';
		window.scrollTo(0,0);

		const moveElements = () => {
			if(flag === 1){
				evenIndexs.forEach((el, index) => {
					indexElement = index;
					el.style.right = `${getValue(indexElement)}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})

				oddIndexs.forEach((el, index) => {
					indexElement = index;
					el.style.left = `${getValue(indexElement)}px`;
					el.offsetLeft <= 5 ? window.removeEventListener('scroll', onScrollAnimation) : false;
				})
			}
		}

		const onScrollAnimation = () => {
			flag = 1;
			window.requestAnimationFrame(moveElements);
		}

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
