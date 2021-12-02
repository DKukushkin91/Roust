export const getAboutUsSlider = () => {
	if(document.querySelector('.js-about-us-slider')) {
		const aboutUsSlider = document.querySelector('.js-about-us-slider');

		new Swiper(aboutUsSlider, {
			slidesPerView: 1,
			spaceBetween: 20,
			breakpoints: {
				320: {
					pagination: {
						el: '.js-about-pagination'
					}
				},

				960: {
					pagination: false
				}
			}
		})
	}
}
