export const burgerMenuHandler = () => {
	if(document.querySelector('.js-burger-btn')){
		const button = document.querySelector('.js-burger-btn');

		button.addEventListener('click', () => {
			button.classList.toggle('header__burger-btn--active');
		})
	}
}
