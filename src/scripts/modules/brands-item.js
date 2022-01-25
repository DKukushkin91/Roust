import {getScrollTo} from '../utils/utils';

export const getScrollItem = () => {
	if(document.querySelector('.js-anim-items')){
		const animItems = document.querySelectorAll('.js-anim-items');
		const header = document.querySelector('.js-animate-header');
		const opacityItems = document.querySelectorAll('.js-opacity');
		const imgSize = document.querySelector('.js-anim-size');
		const scrollBtn = document.querySelector('.js-scroll-btn');
		const main = document.querySelector('.main');
		const animText = document.querySelectorAll('.js-anim-text');
		const itemContainer = document.querySelector('.top__content--brands-item');

		const isSeen = () => itemContainer.getBoundingClientRect().bottom + 45 <= window.innerHeight

		const removeClass = () => {
			main.classList.remove('main--animate');
			opacityItems.forEach(e => e.classList.remove('animate__opacity'))
			animItems.forEach(e => e.classList.remove('brands-item__wrap--active'))
			header.classList.remove('header__active');
			scrollBtn.classList.remove('top__scroll-btn--animate');
			animText.forEach(e => e.classList.remove('brands-item__text-block--animate'));
			setTimeout(() => imgSize.classList.remove('top__picture--animate'), 100)
		}

		const addClass = () => {
			opacityItems.forEach(e => e.classList.add('animate__opacity'))
			animItems.forEach(e => e.classList.add('brands-item__wrap--active'))
			header.classList.add('header__active');
			imgSize.classList.add('top__picture--animate');
			scrollBtn.classList.add('top__scroll-btn--animate');
			animText.forEach(e => e.classList.add('brands-item__text-block--animate'));
			main.classList.add('main--animate');
		}

		const onScrollAnim = () => {
			if(isSeen()){
				addClass();
			}

			if(scrollY === 0){
				removeClass();
			}
		}

		if(window.innerWidth >= 1279.9) {
			scrollBtn.addEventListener('click', () => {
				addClass();
				window.scrollBy(0, window.innerWidth / 13)
			});
			window.addEventListener('scroll', onScrollAnim);
		}
	}
}
