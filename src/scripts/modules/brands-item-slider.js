export const getSliders = () => {
	if(document.querySelector('.brands-item__wrap')) {
		const imgItemSlider = document.querySelector('.js-top-slider');
		const thumbSlider = document.querySelector('.js-thumbs-slider');
		const mobileSlider = document.querySelector('.js-mob-slider');
		const contentSliderMob = document.querySelector('.js-content-slider');
		const contentSliderWrap = contentSliderMob.querySelector('.js-content-wrap');
		const contentSlides = contentSliderMob.querySelectorAll('.js-content-slide');

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

		const mobBottleSlider = new Swiper (mobileSlider, {
			slidesPerView: 1,
			allowTouchMove: true,
			slideToClickedSlide: false,
		})

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

		if(window.innerWidth <= 1279) {
			onSlideChange(mobBottleSlider, sliderBottle);
			onSlideChange(sliderBottle, mobBottleSlider);
		}

		sliders.forEach(element => {
			onSlideChange(sliderBottle, element)
		});

		if(window.innerWidth <= 768) {
			sliders.forEach(el => {
				onSlideChange(mobBottleSlider, el);
			})
		}

		if(document.querySelector('.js-scroll') && window.innerWidth >= 575) {
			const scrollItems = document.querySelectorAll('.js-scroll-item');
			const scroll = document.querySelector('.js-scroll');
			const targetRectX = (evt) => evt.currentTarget.getBoundingClientRect().x;
			const parrentRectLeft = (evt) => evt.currentTarget.parentNode.getBoundingClientRect().left;

			scroll.style.width = `${scrollItems[0].offsetWidth}px`

			scrollItems.forEach(item => {
				item.addEventListener('click', (evt) => {
					scroll.style.left = `${targetRectX(evt) - parrentRectLeft(evt)}px`;
				})
			})

			let observer = new MutationObserver ((mutations) => {
				for (let mutation of mutations) {
					if (mutation.type === 'attributes') {
						scrollItems.forEach(el => {
							if (el.classList.contains('swiper-slide-thumb-active')) {
								scroll.style.left = `${el.getBoundingClientRect().x - el.parentNode.getBoundingClientRect().left}px`;
								scroll.style.left = `${el.getBoundingClientRect().x + window.scrollX - el.parentNode.getBoundingClientRect().left}px`;
							}
						})
					}
				}
			});

			observer.observe(document.querySelector('.js-scroll-item'), {attributes: true});
		}
	}
}
