export const getAboutUsSlider = () => {
	if(document.querySelector('.js-about-us-slider')) {
		const aboutUsSlider = document.querySelector('.js-about-us-slider');

		new Swiper(aboutUsSlider, {
			spaceBetween: 20,
			breakpoints: {
				320: {
					pagination: {
						el: '.js-about-pagination'
					},
					slidesPerView: 'auto',
					watchSlidesProgress: true
				},

				1280: {
					pagination: false,
					slidesPerView: 1,
				}
			}
		})
	}
}
