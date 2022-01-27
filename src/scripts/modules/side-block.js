import {changeActiveClass, createElement} from '../utils/utils'
import {cardsMocks, productionMocks} from './mocks';

export const getSideBlock = () => {
	if(document.querySelector('.js-side-block')){
		const buttons = document.querySelectorAll('.js-side-block');
		const cardsTitle = document.querySelectorAll('.js-card-title');
		const body = document.querySelector('body');
		const template = document.querySelector('.js-about-template')
			.content
			.querySelector('.side');

		const escPressHandler = (evt) => {
			if (evt.key === 'Escape') {
				evt.preventDefault();
				elementRemoveHandler();
			}
		};

		const elementRemoveHandler = () => {
			const wrap = document.querySelector('.side');

			if(body.classList.contains('lock-scroll')){
				body.classList.remove('lock-scroll');
			}

			if (wrap) {
				wrap.remove();
				document.removeEventListener('keydown', escPressHandler);
			}
		};

		cardsTitle.forEach(el => {
			el.setAttribute('data-name', `${el.textContent}`);
		});

		const getElement = (cardTitle, cardSubtitle, cardImage, evt) => {
			const templateClone = template.cloneNode(true);
			const backBtn = templateClone.querySelector('.js-back-btn');
			const title = templateClone.querySelector('.js-side-title');
			const subTitle = templateClone.querySelector('.js-side-subTitle');
			const image = templateClone.querySelector('.js-side-img');
			const text = templateClone.querySelector('.js-side-text');

			image.src = cardImage.src;
			title.textContent = cardTitle;
			subTitle.textContent = cardSubtitle.textContent;

			cardsMocks.map(e => e.name === title.textContent ? text.textContent = e.text : '');

			if(evt.currentTarget.closest('.js-about-card')){
				title.classList.add('side__title--order');
				title.parentNode.classList.add('side__texts-wrap--order');
				subTitle.classList.add('side__sub-title--order');
				image.parentNode.classList.add('side__img--order');

				productionMocks.map(e => e.name === title.textContent ? text.textContent = e.text : '');
			};

			body.classList.add('lock-scroll')
			backBtn.addEventListener('click', elementRemoveHandler);
			return templateClone
		}

		const appendElement = (cardTitle, cardSubtitle, cardImage, evt) => {
			const fragment = document.createDocumentFragment();
			const element = getElement(cardTitle, cardSubtitle, cardImage, evt);

			fragment.appendChild(element);
			document.addEventListener('keydown', escPressHandler);
			createElement(body, fragment);
		}

		buttons.forEach(el => {
			el.addEventListener('click', (evt) => {
				evt.preventDefault();
				const title = evt.currentTarget.parentNode.querySelector('.js-card-title').getAttribute("data-name");
				const subTitle = evt.currentTarget.parentNode.querySelector('.js-card-text');
				const cardImage = evt.currentTarget.parentNode.parentNode.querySelector('.js-card-img');

				appendElement(title, subTitle, cardImage, evt);

				const contentWrap = document.querySelector('.js-side-wrap');

				setTimeout(()=>changeActiveClass(contentWrap, 'side'));
			})
		})
	}
}
