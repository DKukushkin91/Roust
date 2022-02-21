import {changeActiveClass, createElement} from '../utils/utils';
import {selectHandler} from './select';
import { telInputMask } from './tel-input-mask';

export const getPopup = () => {
	if(document.querySelector('.js-btn-form') || document.querySelector('.js-subscribe-btn') || document.querySelector('.js-questionnaire-btn')){
		const body = document.querySelector('body')
		const buttons = document.querySelectorAll('.js-btn-form');
		const popupTemplate = document.querySelector('.js-popup-form-template')
			.content
			.querySelector('.js-popup-wrap');
		const subscribePopupTemplate = document.querySelector('.js-popup-form-template')
			.content
			.querySelector('.js-subscribe-popup');
		const questionnairePopupTemplate = document.querySelector('.js-popup-form-template')
			.content
			.querySelector('.js-questionnaire-popup');

		const escPressHandler = (evt) => {
			if (evt.key === 'Escape') {
				evt.preventDefault();
				elementRemoveHandler();
			}
		};

		const elementRemoveHandler = () => {
			const wrap = document.querySelector('.js-popup-wrap') || document.querySelector('.js-subscribe-popup') || document.querySelector('.js-questionnaire-popup');

			if (wrap) {
				wrap.remove();
				document.removeEventListener('keydown', escPressHandler);
			}

			body.classList.remove('lock-scroll');
		};

		const getElement = (contentTemp) => {
			const template = contentTemp.cloneNode(true);
			const closeBtn = template.querySelector('.js-close-btn');

			closeBtn.addEventListener('click', elementRemoveHandler);
			selectHandler(template)
			return template
		}

		const appendElement = (contentTemp) => {
			const fragment = document.createDocumentFragment();
			const element = getElement(contentTemp);

			fragment.appendChild(element);
			document.addEventListener('keydown', escPressHandler);
			createElement(body, fragment);
			body.classList.add('lock-scroll');

			const popupForm = document.querySelector('.js-popup-form');

			setTimeout(()=>changeActiveClass(popupForm, 'popup-form'));

			popupForm.noValidate = true;

			const validateForm = (evt) => {
				const form = evt.target;
				const field = Array.from(form.elements);

				field.forEach(i => {
					i.setCustomValidity('');
					i.parentElement.classList.remove('invalid');
				});

				if(document.querySelector('.js-select-native')){
					const select = Array.from(document.querySelectorAll('.js-select-native'));
					select.forEach(i => {
						i.setCustomValidity('');
						i.parentElement.parentElement.classList.remove('invalid')
					});

					select.forEach(el => {
						if(el.options[el.selectedIndex].value === 'select') {
							evt.preventDefault();
							evt.stopImmediatePropagation();
							el.parentElement.parentElement.classList.add('invalid');
						}
					})
				}

				if(!form.checkValidity()){
					evt.preventDefault();
					evt.stopImmediatePropagation();

					field.forEach(i => {
						if(!i.checkValidity()){
							i.parentElement.classList.add('invalid');
						}
					})
				}
			}

			telInputMask(element.querySelector('.js-tel-input'));

			popupForm.addEventListener('submit', validateForm);
		}

		for(let button of buttons){
			button.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement(popupTemplate);
			})
		}

		if(document.querySelector('.js-subscribe-btn')){
			const subscribeBtn = document.querySelector('.js-subscribe-btn');
			subscribeBtn.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement(subscribePopupTemplate);
			})
		}

		if(document.querySelector('.js-questionnaire-btn')){
			const openFormBtn = document.querySelectorAll('.js-questionnaire-btn');

			openFormBtn.forEach(el => el.addEventListener('click', (evt) => {
				evt.preventDefault();
				appendElement(questionnairePopupTemplate);
			}))
		}
	}
}
