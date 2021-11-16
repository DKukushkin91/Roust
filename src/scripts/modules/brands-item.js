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

		const onScrollAnim = () => {
			animItems.forEach(i => {
				const animItem = i;
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = getOffset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if(animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if((scrollY > animItemOffset - animItemPoint) || scrollY < (animItemOffset + animItemHeight)){
					opacityItems.forEach(e => e.classList.add('animate__opacity'))
					animItem.classList.add('brands-item__wrap--active');
					header.classList.add('header__active');
					imgSize.classList.add('top__picture--animate');
					scrollBtn.classList.add('top__scroll-btn--animate');
					main.classList.add('main--animate');
					animText.forEach(e => e.classList.add('brands-item__text-block--animate'));
				}

				if(scrollY == 0){
					main.classList.remove('main--animate');
					opacityItems.forEach(e => e.classList.remove('animate__opacity'))
					animItem.classList.remove('brands-item__wrap--active');
					header.classList.remove('header__active');
					imgSize.classList.remove('top__picture--animate');
					scrollBtn.classList.remove('top__scroll-btn--animate');
					animText.forEach(e => e.classList.remove('brands-item__text-block--animate'));
				}
			})
		}

		const scrollToMain = () => window.scrollBy(0, 80);
		if(window.innerWidth >= 1280) {
			scrollBtn.addEventListener('click', scrollToMain);
			window.addEventListener('scroll', onScrollAnim);
		}
	}
}
