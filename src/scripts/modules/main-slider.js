export const getMainSlider = () => {
	const slider = document.querySelector('.js-main-slider');
	const subSlider = document.querySelector('.js-preview-slider')

	if(slider){
		const subSwiper = new Swiper(subSlider, {
			slidesPerView: 6,
			watchSlidesProgress: true,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					watchSlidesProgress: true,
				},
				575: {
					slidesPerView: 'auto',
					watchSlidesProgress: true,
				},
				768: {
					slidesPerView: 6
				}
			}
		})

		const swiper = new Swiper(slider, {
			thumbs: {
				swiper: subSwiper,
			},
			navigation: {
				nextEl: '.js-main-slider-next',
				prevEl: '.js-main-slider-prev',
			},
		})
	}
}
