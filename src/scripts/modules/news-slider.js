export const getNewsSlider = () => {
	const slider = document.querySelector('.js-news-slider');

	if(slider){
		const newsSlider = new Swiper(slider, {
			slidesPerView: 3,
			spaceBetween: 40,
			navigation: {
				nextEl: '.js-news-slider-next',
				prevEl: '.js-news-slider-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					pagination: {
						el: ".swiper-pagination",
					},
				},
				960: {
					pagination: false
				}
			}
		})
	}
}
