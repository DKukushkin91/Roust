import {getScrollTo} from '../utils/utils';

export const getTop = () => {
	const btn = document.querySelector('.js-btn-top')

	if(btn){
		btn.addEventListener('click', (evt) => {
			evt.preventDefault();
			getScrollTo(0, 400);
		})
	}
}
