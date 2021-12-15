import {createElement} from '../utils/utils';
import {selectHandler} from './select';

export const getPopup = () => {
	if(document.querySelector('.js-btn-form')){
		const body = document.querySelector('body')
		const buttons = document.querySelectorAll('.js-btn-form');
		const popupTemplate = document.querySelector('.js-popup-form')
			.content
			.querySelector('.js-popup-wrap')

		const escPressHandler = (evt) => {
			if (evt.key === 'Escape') {
				evt.preventDefault();
				elementRemoveHandler();
			}
		};

		const elementRemoveHandler = () => {
			const wrap = document.querySelector('.js-popup-wrap');

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
			selectHandler(template)
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

		for(let button of buttons){
			button.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement();
			})
		}
	}
}
