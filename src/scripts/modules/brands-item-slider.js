export const getSliders = () => {
	if(document.querySelector('.brands-item__wrap')) {
		const imgItemSlider = document.querySelector('.js-top-slider');
		const thumbSlider = document.querySelector('.js-thumbs-slider');
		const mobileSlider = document.querySelector('.js-mob-slider');
		const contentSliderMob = document.querySelector('.js-content-slider');
		const contentSliderWrap = contentSliderMob.querySelector('.js-content-wrap');
		const contentSlides = contentSliderMob.querySelectorAll('.js-content-slide');

		const gThumbSlider = new Swiper(thumbSlider, {
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			slideToClickedSlide: true,
		})

		const getMobSlider = new Swiper(contentSliderMob, {
			init: false,
			slidesPerView: 'auto',
			allowTouchMove: true,
			navigation: {
				nextEl: document.querySelector('.js-mob-next-btn'),
				prevEl: document.querySelector('.js-mob-prev-btn'),
			}
		})

		if(window.innerWidth <= 640){
			contentSliderMob.classList.add('swiper');
			contentSliderWrap.classList.add('swiper-wrapper');
			contentSlides.forEach(e => e.classList.add('swiper-slide'));
			getMobSlider.init();
		}

		window.addEventListener('resize', () => {
			if(window.innerWidth <= 640){
				contentSliderMob.classList.add('swiper');
				contentSliderWrap.classList.add('swiper-wrapper');
				contentSlides.forEach(e => e.classList.add('swiper-slide'));
				getMobSlider.init();
			}else{
				contentSliderMob.classList.remove('swiper');
				contentSliderWrap.classList.remove('swiper-wrapper');
				contentSlides.forEach(e => e.classList.remove('swiper-slide'));
			}
		})

		const sliders = new Swiper('.js-b-item-slider', {
			slidesPerView: 1,
			allowTouchMove: false,
			slideToClickedSlide: false,
			breakpoints: {
				768: {
					allowTouchMove: true
				},

				769: {
					navigation: {
						nextEl: document.querySelector('.js-item-next'),
						prevEl: document.querySelector('.js-item-prev'),
					},
				},
			},
		});

		const sliderBottle = new Swiper(imgItemSlider, {
			slidesPerView: 1,
			allowTouchMove: false,
			slideToClickedSlide: false,
			breakpoints: {
				768: {
					navigation: {
						nextEl: document.querySelector('.js-item-next'),
						prevEl: document.querySelector('.js-item-prev'),
					},
				},
			},

			thumbs: {
				swiper: gThumbSlider,
				watchSlidesProgress: true,
			},
		})

		sliders.forEach(element => {
			sliderBottle.on('slideChange', () => {
				element.slideToLoop(sliderBottle.realIndex);
			})
		});

		// wip on touch devices
		// if(window.innerWidth <= 768) {
		// 	sliders.forEach(el => {
		// 		el.on('slideChange', () => {
		// 			el.slideToLoop(el.realIndex);
		// 		})
		// 	})
		// }

		if(document.querySelector('.js-scroll') && window.innerWidth >= 575) {
			const scrollItems = document.querySelectorAll('.js-scroll-item');
			const scroll = document.querySelector('.js-scroll');
			const targetRectX = (evt) => evt.currentTarget.getBoundingClientRect().x;
			const parrentRectLeft = (evt) => evt.currentTarget.parentNode.getBoundingClientRect().left;
			const slideBtns = document.querySelectorAll('.js-slide-btn');

			scroll.style.width = `${scrollItems[0].offsetWidth}px`

			scrollItems.forEach(item => {
				item.addEventListener('click', (evt) => {
					scroll.style.left = `${targetRectX(evt) - parrentRectLeft(evt)}px`;
				})
			})

			slideBtns.forEach(e => {
				e.addEventListener('click', () => {
					for(let item of scrollItems) {
						if(item.classList.contains('swiper-slide-thumb-active')){
							scroll.style.left = `${item.getBoundingClientRect().x - item.parentNode.getBoundingClientRect().left}px`;
						}
					}
				})
			})
		}
	}
}
