import {createElement} from '../utils/utils.js';

export const getCatalogList = () => {
	if(document.querySelector('.js-list-wrap')) {
		const listWrapper = document.querySelector('.js-list-wrap');
		const list = document.querySelector('.js-catalog-template')
			.content
			.querySelectorAll('.js-catalog-list');

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
		createItemsList(list, 0);
	}
}