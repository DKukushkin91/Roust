export const getSliders = () => {
	if(document.querySelector('.brands-item__wrap')) {
		const thumbSlider = document.querySelector('.js-thumbs-slider');
		const thumbsWrapper = document.querySelector('.js-thumbs-wrapper');
		const contentSliderMob = document.querySelector('.js-content-slider');
		const contentSliderWrap = contentSliderMob.querySelector('.js-content-wrap');
		const contentSlides = contentSliderMob.querySelectorAll('.js-content-slide');
		const productSlider = document.querySelector('.js-product-slider');

		const onSlideChange = (onElement, moveElement) => {
			onElement.on('slideChange', () => {
				moveElement.slideToLoop(onElement.realIndex);
			})
		}

		const gThumbSlider = new Swiper(thumbSlider, {
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			slideToClickedSlide: true,
		})

		const getMobSlider = new Swiper(contentSliderMob, {
			init: false,
			slidesPerView: 'auto',
			allowTouchMove: false,
			navigation: {
				nextEl: document.querySelector('.js-mob-next-btn'),
				prevEl: document.querySelector('.js-mob-prev-btn'),
			},
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

		const getSlider = new Swiper(productSlider, {
			slidesPerView: 1,
			slideToClickedSlide: false,
			breakpoints: {
				961: {
					allowTouchMove:false
				},
				960: {
					allowTouchMove: true
				},
			},

			navigation: {
				nextEl: document.querySelector('.js-item-next'),
				prevEl: document.querySelector('.js-item-prev'),
			},

			thumbs: {
				swiper: gThumbSlider,
				watchSlidesProgress: true,
			},
		})

		const sliders = new Swiper('.js-b-item-slider', {
			slidesPerView: 1,
			allowTouchMove: false,
			slideToClickedSlide: false,
		});

		sliders.forEach(element => {
			onSlideChange(getSlider, element)
		});

		if(document.querySelector('.js-scroll') && window.innerWidth >= 575) {
			const scrollItems = document.querySelectorAll('.js-scroll-item');
			const scroll = document.querySelector('.js-scroll');
			const rectPoint = document.querySelector('.js-rect-point');
			const configObserver = {attributes: true};

			scroll.style.width = `${scrollItems[0].offsetWidth}px`;

			const observer = new MutationObserver ((mutations) => {
				for (const mutation of mutations){
					if (mutation.type === 'attributes'){
						scrollItems.forEach(el => {
							if (window.innerWidth < 1280 && el.classList.contains('swiper-slide-thumb-active')) {
								scroll.style.left = `${el.getBoundingClientRect().x}px`;
							} else if (window.innerWidth >= 1280 && el.classList.contains('swiper-slide-thumb-active')) {
								scroll.style.left = `${el.getBoundingClientRect().x - el.parentNode.getBoundingClientRect().left}px`;
							}
						})
					}
				}
			});

			const transformObserver = new MutationObserver ((mutations) => {
				for (const mutation of mutations) {
					if (mutation.type === 'attributes'){
						scrollItems.forEach(el => {
							if (window.innerWidth < 1280 && el.classList.contains('swiper-slide-thumb-active')) {
								scroll.style.left = `${el.getBoundingClientRect().x}px`;
							} else if (window.innerWidth >= 1280 && el.classList.contains('swiper-slide-thumb-active')) {
								scroll.style.left = `${el.getBoundingClientRect().x - rectPoint.getBoundingClientRect().right}px`;
							}
						})
					}
				}
			})

			transformObserver.observe(thumbsWrapper, configObserver);
			observer.observe(document.querySelector('.js-scroll-item'), configObserver);
		}
	}
}
