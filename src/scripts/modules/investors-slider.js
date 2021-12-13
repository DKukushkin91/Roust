export const getInvestorsSlider = () => {
	if(document.querySelector('.js-investors-slider')) {
		const slider = document.querySelector('.js-investors-slider');
		const sliderWrap = document.querySelector('.js-investors-wrap');
		const slides = document.querySelectorAll('.js-investors-slide');

		const createSlider = new Swiper(slider, {
			init: false,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			spaceBetween: 5,
			pagination: {
				el: '.js-investors-pagination',
				type: 'bullets',
			},
		})

		if(window.innerWidth <= 640){
			slider.classList.add('swiper');
			sliderWrap.classList.add('swiper-wrapper');
			slides.forEach(e => e.classList.add('swiper-slide'));
			createSlider.init();
		}

		window.addEventListener('resize', () => {
			if(window.innerWidth <= 640){
				slider.classList.add('swiper');
				sliderWrap.classList.add('swiper-wrapper');
				slides.forEach(e => e.classList.add('swiper-slide'));
				createSlider.init();
			}else{
				slider.classList.remove('swiper');
				sliderWrap.classList.remove('swiper-wrapper');
				slides.forEach(e => e.classList.remove('swiper-slide'));
			}
		})
	}
}
