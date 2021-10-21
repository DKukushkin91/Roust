export const getSliders = () => {
	if(document.querySelector('.brands-item__wrap')) {
		const imgSlider = document.querySelector('.js-img-slider');
		const textSlider = document.querySelector('.js-text-slider');
		const imgItemSlider = document.querySelector('.js-top-slider');
		const thumbSlider = document.querySelector('.js-thumbs-slider');

		const sliderArray = [imgSlider, textSlider, imgItemSlider];

		const gThumbSlider = new Swiper(thumbSlider, {
			slidesPerView: 1,
			watchSlidesProgress: true,
		})

		const sliders = sliderArray.map(el => {
			const slider = new Swiper(el, {
				slidesPerView: 1,
				allowTouchMove: false,
				// navigation: {
				// 	nextEl: el.querySelector('.swiper-button-next'),
				// 	prevEl: el.querySelector('.swiper-button-prev'),
				// },
				on: {
					slideChange() {
						sliders
							.filter(n => n !== slider)
							.forEach(n => n.slideToLoop(this.realIndex));
					},
				},

				thumbs: {
					swiper: gThumbSlider,
				},
			});

			return slider;
		});
	}
}
