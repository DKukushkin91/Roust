import {getOffset} from '../utils/utils';

export const getScrollItem = () => {
	if(document.querySelector('.js-anim-items')){
		const animItems = document.querySelectorAll('.js-anim-items');
		const header = document.querySelector('.js-animate-header');
		const opacityItems = document.querySelectorAll('.js-opacity');

		const onScrollAnim = () => {
			animItems.forEach(i => {
				const animItem = i;
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = getOffset(animItem).top;
				const main = document.querySelector('main');
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if(animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if((scrollY > animItemOffset - animItemPoint) || (scrollY > 0)){
					opacityItems.forEach(e => e.classList.add('animate__opacity'))
					animItem.classList.add('brands-item__wrap--active');
					header.classList.add('header__active');
				}else{
					opacityItems.forEach(e => e.classList.remove('animate__opacity'))
					animItem.classList.remove('brands-item__wrap--active');
					header.classList.remove('header__active');
				}
			})
		}

		window.addEventListener('scroll', onScrollAnim);
	}
}
