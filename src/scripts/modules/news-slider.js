export const getNewsSlider = () => {
	const slider = document.querySelector('.js-news-slider');

	if(slider){
		new Swiper(slider, {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
			},
			spaceBetween: 40,
			navigation: {
				nextEl: '.js-news-slider-next',
				prevEl: '.js-news-slider-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
				},
				960: {
					slidesPerView: 'auto',
					watchSlidesProgress: true,
				},
				1280: {
					pagination: false,
				}
			}
		})
	}
}
