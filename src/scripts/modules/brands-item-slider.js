export const getSliders = () => {
	if(document.querySelector('.brands-item__wrap')) {
		const imgSlider = document.querySelector('.js-img-slider');
		const textSlider = document.querySelector('.js-text-slider');
		const imgItemSlider = document.querySelector('.js-top-slider');
		const thumbSlider = document.querySelector('.js-thumbs-slider');
		const mobileSlider = document.querySelector('.js-mob-slider');

		const sliderArray = [imgSlider, textSlider, imgItemSlider, mobileSlider];

		const gThumbSlider = new Swiper(thumbSlider, {
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			breakpoints: {
				1366: {
					navigation: {
						nextEl: document.querySelector('.js-item-next'),
						prevEl: document.querySelector('.js-item-prev'),
					},
				}
			},
		})

		const sliders = sliderArray.map(el => {
			const slider = new Swiper(el, {
				slidesPerView: 1,
				allowTouchMove: false,
				on: {
					slideChange() {
						sliders
							.filter(n => n !== slider)
							.forEach(n => n.slideToLoop(this.realIndex));
					},
				},
				breakpoints: {
					1366: {
						navigation: {
							nextEl: document.querySelector('.js-item-next'),
							prevEl: document.querySelector('.js-item-prev'),
						},
					}
				},
				thumbs: {
					swiper: gThumbSlider,
					watchSlidesProgress: true,
				},
			});

			return slider;
		});
	}
}

export const getScrollElement = () => {
	if(document.querySelector('.js-scroll')) {
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
