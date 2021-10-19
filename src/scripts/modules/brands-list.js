import {createElement, removeChilds} from '../utils/utils.js';

export const getBrandsList = () => {
	if(document.querySelector('.js-btns-wrap')) {
		const btnsWrapper = document.querySelector('.js-btns-wrap');
		const listWrapper = document.querySelector('.js-list-wrap');
		const buttons = btnsWrapper.querySelectorAll('.js-brands-btn')
		const list = document.querySelector('.js-brands-template')
			.content
			.querySelectorAll('.js-brands-list');

			const getItems = (template) => template.cloneNode(true);

			const createItemsList = (template, i) => {
				const fragment = document.createDocumentFragment();

				template.forEach((e, index) => {
					if(i === index) {
						const element = getItems(e);
						fragment.appendChild(element);
					}
				});

			createElement(listWrapper, fragment);
		}

		buttons.forEach((e, index) => {
			e.addEventListener('click', (evt) => {
				evt.preventDefault();

				buttons.forEach(e => e.classList.remove('brands__btn--active'));
				e.classList.add('brands__btn--active');

				removeChilds(listWrapper);
				createItemsList(list, index);
			})
		})

		buttons.forEach((e, index) => {
			if(index === 0) {
				e.classList.add('brands__btn--active');
			};
		})

		createItemsList(list, 0);
	}
}
