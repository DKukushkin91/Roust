export const getItemAnimation = () => {
	if(document.querySelector('.js-anchor-bottle')) {
		const items = document.querySelectorAll('.js-animate-bottle');
		const itemsArray = Array.from(items);
		const firstItem = items[0];
		const anchor = document.querySelector('.js-anchor-bottle');
		const val = 0.01

		const moveElements = (elements) => {
			const evenIndexs = elements.filter((x, index) => index % 2 === 0 && index !== 0);
			const oddIndexs = elements.filter((x, index) => index % 2 !== 0 );

      evenIndexs.forEach((el, index) => {
        const value = window.scrollY * (index * val);
        el.style.transform = `translate(${value}px)`;
      })

			oddIndexs.forEach((el, index) => {
        const value = window.scrollY * (index * val);
        el.style.transform = `translate(-${value}px)`;
      })
		}

		const onScrollAnimation = () => {
			let targetPosition = {
				top: window.scrollY + firstItem.getBoundingClientRect().top,
				bottom: window.scrollY + firstItem.getBoundingClientRect().bottom
			};
			let windowPosition = {
				top: window.scrollY,
				bottom: window.scrollY + document.documentElement.clientHeight
			}

			if(targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
				moveElements(itemsArray)
			}
		}

		window.addEventListener('scroll', onScrollAnimation);
	}
}
