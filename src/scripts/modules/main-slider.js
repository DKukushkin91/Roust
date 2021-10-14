export const getMainSlider = () => {
	const slider = document.querySelector('.js-main-slider');

	if(slider){
		const swiper = new Swiper(slider, {
			pagination: {
				el: '.screen__p-list',
				clickable: true,
				type: 'custom',
				bulletClass: 'screen__p-item',
			}
		})

		const changeClass = () => {
			const pagButtons = document.querySelectorAll('.screen__p-btn');
			// const mainPage = document.querySelector('.main-page__screen');
			// const activeSlide = mainPage.querySelectorAll('.swiper-slide')

			pagButtons.forEach(e => {
				e.addEventListener('click', (evt) => {
						pagButtons.forEach(i => {
							i.classList.remove('screen__p-btn--active')
						})
						evt.currentTarget.classList.add('screen__p-btn--active');
				})
			})
		}

		changeClass();
	}
}
