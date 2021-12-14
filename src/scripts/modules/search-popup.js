import {createElement} from '../utils/utils'

export const getSearchPopup = () => {
	if(document.querySelector('.js-search-btn')) {
		const body = document.querySelector('body');
		const createPopupButton = document.querySelector('.js-search-btn');
		const popupTemplate = document.querySelector('.js-search-template')
			.content
			.querySelector('.js-search-popup');

		const escPressHandler = (evt) => {
			if (evt.key === 'Escape') {
				evt.preventDefault();
				elementRemoveHandler();
			}
		};

		const elementRemoveHandler = () => {
			const wrap = document.querySelector('.js-search-popup');

			if (wrap) {
				wrap.remove();
				document.removeEventListener('keydown', escPressHandler);
			}

			body.classList.remove('lock-scroll');
		};

		const getElement = () => {
			const template = popupTemplate.cloneNode(true);
			const closeBtn = template.querySelector('.js-close-btn');

			closeBtn.addEventListener('click', elementRemoveHandler);
			return template
		}

		const appendElement = () => {
			const fragment = document.createDocumentFragment();
			const element = getElement();

			fragment.appendChild(element);
			document.addEventListener('keydown', escPressHandler);
			createElement(body, fragment);
			body.classList.add('lock-scroll');
		}

		createPopupButton.addEventListener('click', appendElement);
	}
}
