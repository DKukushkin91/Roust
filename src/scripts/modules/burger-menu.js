export const burgerMenuHandler = () => {
	if(document.querySelector('.js-burger-btn')){
		const button = document.querySelector('.js-burger-btn');
		const body = document.querySelector('body');

		button.addEventListener('click', () => {
			button.classList.toggle('header__burger-btn--active');
			body.classList.toggle('background-burger');
		})
	}
}
