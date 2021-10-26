import {createElement} from '../utils/utils';

export const getGallery = () => {
	if(document.querySelector('.js-open-gallery')){
		const body = document.querySelector('body')
		const buttons = document.querySelectorAll('.js-open-gallery');
		const elementTemplate = document.querySelector('.js-gallery-template')
			.content
			.querySelector('.js-gallery-container');
		const listElementsTemplate = document.querySelector('.js-g-list-template')
			.content
			.querySelector('.js-g-list')

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
		};

		const getElements = () => listElementsTemplate.cloneNode(true);

		const appendElements = (container) => {
			const fragment = document.createDocumentFragment();
			const element = getElements();

			fragment.appendChild(element);
			createElement(container, fragment);
		}

		const getElement = () => {
			const template = elementTemplate.cloneNode(true);
			const closeBtn = template.querySelector('.js-close-btn');
			const sliderWrap = template.querySelector('.js-gallery-slider');
			const prevBtn = template.querySelector('.js-g-btn-prev');
			const nextBtn = template.querySelector('.js-g-btn-next');

			appendElements(sliderWrap);
			getSlider(sliderWrap, nextBtn, prevBtn);
			closeBtn.addEventListener('click', elementRemoveHandler);
			return template;
		}

		const appendElement = () => {
			const fragment = document.createDocumentFragment();
			const element = getElement();

			fragment.appendChild(element);
			document.addEventListener('keydown', escPressHandler);
			createElement(body, fragment);
		}

		for(let button of buttons){
			button.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement();
			})
		}
	}
}
