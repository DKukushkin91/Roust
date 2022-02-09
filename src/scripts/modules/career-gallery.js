import {changeActiveClass, createElement} from '../utils/utils';

export const getGallery = () => {
	if(document.querySelector('.js-open-gallery')){

		if(document.querySelector('.js-gallery-counter')) {
			const calcImg = (i) => {
				const pictureAll = document.querySelectorAll('.project__img-several img')
				const pictureLast = pictureAll[i]
				const pictureOther = `<a class="project__img-link" href="#">
											<div class="project__img-text">
												<div class="project__img-number"></div>фотографий
											</div>
											${pictureAll[i].outerHTML}
										</a>`
				pictureLast.outerHTML = pictureOther

				const pictureNumder = document.querySelector('.project__img-number')
				pictureNumder.innerHTML = '+' + (pictureAll.length - i)

			}
			if (document.body.clientWidth > 959.9) {
				calcImg(3)
			}
			else if (document.body.clientWidth <= 574.9) {
				calcImg(1)
			}
			else if (document.body.clientWidth <= 959.9) {
				calcImg(2)
			}
		}

		const body = document.querySelector('body')
		const buttons = document.querySelectorAll('.js-open-gallery');
		const elementTemplate = document.querySelector('.js-gallery-template')
			.content
			.querySelector('.js-gallery-container');
		const listElementsTemplate = document.querySelector('.js-g-list-template')
			.content
			.querySelectorAll('.js-g-list')

		const getSlider = (element, next, prev) => new Swiper(element, {
				slidesPerView: 1,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
			})

		const escPressHandler = (evt) => {
			if (evt.key === 'Escape') {
				evt.preventDefault();
				elementRemoveHandler();
			}
		};

		const elementRemoveHandler = () => {
			const galleryContainer = document.querySelector('.js-gallery-container');

			if (galleryContainer) {
				galleryContainer.remove();
				document.removeEventListener('keydown', escPressHandler);
			}

			body.classList.remove('lock-scroll');
		};

		const getElements = (template) => template.cloneNode(true);

		const appendElements = (container, template, i) => {
			const fragment = document.createDocumentFragment();

			template.forEach((e, index) => {
				if(index === i){
					const element = getElements(e);
					fragment.appendChild(element);
				}
			})

			createElement(container, fragment);
			body.classList.add('lock-scroll');
		}

		const getElement = (index) => {
			const template = elementTemplate.cloneNode(true);
			const closeBtn = template.querySelector('.js-close-btn');
			const sliderWrap = template.querySelector('.js-gallery-slider');
			const prevBtn = template.querySelector('.js-g-btn-prev');
			const nextBtn = template.querySelector('.js-g-btn-next');

			appendElements(sliderWrap, listElementsTemplate, index);
			getSlider(sliderWrap, nextBtn, prevBtn);
			closeBtn.addEventListener('click', elementRemoveHandler);
			return template;
		}

		const appendElement = (index) => {
			const fragment = document.createDocumentFragment();
			const element = getElement(index);

			fragment.appendChild(element);
			document.addEventListener('keydown', escPressHandler);
			createElement(body, fragment);
			body.classList.add('lock-scroll');

			const sliderWrap = document.querySelector('.js-gallery-slider');

			setTimeout(()=>changeActiveClass(sliderWrap, 'g-template'));
		}

		buttons.forEach((button, index) => {
			button.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement(index);
			})
		})
	}
}
