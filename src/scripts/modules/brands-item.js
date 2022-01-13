import {getOffset} from '../utils/utils';

export const getScrollItem = () => {
	if(document.querySelector('.js-anim-items')){
		const animItems = document.querySelectorAll('.js-anim-items');
		const header = document.querySelector('.js-animate-header');
		const opacityItems = document.querySelectorAll('.js-opacity');
		const imgSize = document.querySelector('.js-anim-size');
		const scrollBtn = document.querySelector('.js-scroll-btn');
		const main = document.querySelector('.main');
		const animText = document.querySelectorAll('.js-anim-text');
		const itemContainer = document.querySelector('.js-brands-item-container');
		const isSeen = () => itemContainer.getBoundingClientRect().bottom + 45 <= window.innerHeight

		const onScrollAnim = () => {
			if(isSeen()){
				opacityItems.forEach(e => e.classList.add('animate__opacity'))
				animItems.forEach(e => e.classList.add('brands-item__wrap--active'))
				header.classList.add('header__active');
				imgSize.classList.add('top__picture--animate');
				scrollBtn.classList.add('top__scroll-btn--animate');
				animText.forEach(e => e.classList.add('brands-item__text-block--animate'));
			}

			if(scrollY === 0){
				main.classList.remove('main--animate');
				opacityItems.forEach(e => e.classList.remove('animate__opacity'))
				animItems.forEach(e => e.classList.remove('brands-item__wrap--active'))
				header.classList.remove('header__active');
				imgSize.classList.remove('top__picture--animate');
				scrollBtn.classList.remove('top__scroll-btn--animate');
				animText.forEach(e => e.classList.remove('brands-item__text-block--animate'));
			}
		}

		const scrollToMain = () => window.scrollBy(0, 80);

		if(window.innerWidth >= 1279.9) {
			scrollBtn.addEventListener('click', scrollToMain);
			window.addEventListener('scroll', onScrollAnim);
		}
	}
}
