export const getCareerSlider = () => {
	if(document.querySelector('.js-career-slider')) {
		const slider = document.querySelector('.js-career-slider');

		new Swiper(slider, {
			slidesPerView: 1,
			pagination: {
				el: ".js-office-pagination",
			},
			spaceBetween: 35,
			navigation: {
				nextEl: '.js-career-btn-next',
				prevEl: '.js-career-btn-prev'
			},
		})
	}
}
