export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const items = document.querySelectorAll('.js-animate-bottle');
		const mainItem = document.querySelector('.js-main-bottle');
		const itemsArray = Array.from(items);
		// const anchor = document.querySelector('.js-anchor-bottle');
		const val = 0.06

		let flag = null;

		const moveElements = (elements) => {
			const evenIndexs = elements.filter((x, index) => index % 2 === 0);
			const oddIndexs = elements.filter((x, index) => index % 2 !== 0 );


			if(flag === 1){
				evenIndexs.forEach((el, index) => {
					const value = window.scrollY * ((index + 1) * val);
					el.style.left = `${value}px`;
				})

				oddIndexs.forEach((el, index) => {
					const value = window.scrollY * ((index + 1) * val);
					el.style.right = `${value}px`;
				})
			} else {
				evenIndexs.forEach(el => {
					el.style.left = 0;
				})

				oddIndexs.forEach(el => {
					el.style.right = 0;
				})
			}
		}

		const onScrollAnimation = () => {
			let targetPosition = {
				top: window.scrollY + mainItem.getBoundingClientRect().top,
				bottom: window.scrollY + mainItem.getBoundingClientRect().bottom
			};
			let windowPosition = {
				top: window.scrollY,
				bottom: window.scrollY + document.documentElement.clientHeight
			}

			if(targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
				flag = 1;
				moveElements(itemsArray);
			} else {
				window.removeEventListener('scroll', onScrollAnimation);
			}
		}

		function scrollTrigger(selector){
			let els = document.querySelectorAll(selector)
			els = Array.from(els)
			els.forEach(el => {
				addObserver(el)
			})
		}

		function addObserver(el){
				// We are creating a new IntersectionObserver instance
				let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
					entries.forEach(entry => {
						// `entry.isIntersecting` will be true if the element is visible
					if(entry.isIntersecting) {
						window.addEventListener('scroll', onScrollAnimation);
						// We are removing the observer from the element after adding the active class
						observer.unobserve(entry.target)
					}
				})
			})
			// Adding the observer to the element
			observer.observe(el)
		}
		// Example usage
		scrollTrigger('.js-main-bottle')
	}
}
