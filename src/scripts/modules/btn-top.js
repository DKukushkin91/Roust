import {scrollTo} from '../utils/utils';

export const getTop = () => {
	const btn = document.querySelector('.js-btn-top')

	if(btn){
		btn.addEventListener('click', (evt) => {
			evt.preventDefault();
			scrollTo(0, 400);
		})
	}
}
