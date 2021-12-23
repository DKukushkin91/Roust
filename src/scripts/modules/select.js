export const selectHandler = (template) => {
	const elSelectNative = template.querySelectorAll('.js-select-native');
	const elSelectCustom = template.querySelectorAll('.js-select-custom');

	let optionChecked = '';
	let optionHoveredIndex = -1;

	// // Toggle custom select visibility when clicking the box
	elSelectCustom.forEach(el => {
		el.addEventListener('click', (evt) => {
			const target = evt.currentTarget;
			const isClosed = !target.classList.contains('m-select__custom-wrap--active');

			if (isClosed) {
				openSelectCustom(target);
			} else {
				closeSelectCustom();
			}
		});
	})

	const openSelectCustom = (target) => {
		target.classList.add('m-select__custom-wrap--active');
		target.setAttribute('aria-hidden', false);

		if (optionChecked) {
			const customOptsList = Array.from(target.querySelectorAll('.js-custom-option'))
			const optionCheckedIndex = customOptsList.findIndex(
				(el) => el.getAttribute('data-value') === optionChecked
			);
			updateCustomSelectHovered(optionCheckedIndex);
		}

		document.addEventListener('click', watchClickOutside);
  	// document.addEventListener('keydown', supportKeyboardNavigation);
	}

	const closeSelectCustom = () => {
		elSelectCustom.forEach(el => {
			el.classList.remove('m-select__custom-wrap--active');
			el.setAttribute('aria-hidden', true);
		})

		updateCustomSelectHovered(-1);

		document.removeEventListener('click', watchClickOutside);
  	// document.removeEventListener('keydown', supportKeyboardNavigation);
	}

	const updateCustomSelectHovered = (newIndex) => {
		elSelectCustom.forEach(el => {
			if(el.classList.contains('m-select__custom-wrap--active')) {
				const customOptions = el.querySelector('.js-custom-options');
				const prevOption = customOptions.children[optionHoveredIndex];
				const option = customOptions.children[newIndex];

				if (prevOption) {
					prevOption.classList.remove('m-select__custom-option--hover');
				}
				if (option) {
					option.classList.add('m-select__custom-option--hover');
				}

				if(option) {
					optionHoveredIndex = newIndex;
				}
			}
		})
	}

	const updateCustomSelectChecked = (value, text) => {
		elSelectCustom.forEach((el, index) => {
			const prevValue = optionChecked;
			const elCustomOptions = el.querySelector('.js-custom-options');
			const elCustomBox = el.querySelector('.js-custom-box');
			const elPrevOption = elCustomOptions.querySelector(`[data-value='${prevValue}'`);
			const elOption = elCustomOptions.querySelector(`[data-value='${value}'`);

			if (elPrevOption) {
				elPrevOption.classList.remove('m-select__custom-wrap--active');
			}

			if (elOption) {
				elOption.classList.add('m-select__custom-wrap--active');
			}

			elSelectNative.forEach((e, i) => {
				if (el.classList.contains('m-select__custom-wrap--active') || (e.classList.contains('inFocus') && index === i)) {
					elCustomBox.textContent = text;
					optionChecked = value;
				}
			})
		})
	}

	const watchClickOutside = (evt) => {
		elSelectCustom.forEach(el => {
			if(el.classList.contains('m-select__custom-wrap--active') && !el.contains(evt.target)){
				closeSelectCustom();
			}
		})
	}

	// const supportKeyboardNavigation = (evt) => {
	// 	[...elSelectCustom].filter(el => {
	// 		if(el.classList.contains('m-select__custom-wrap--active')) {
	// 			// press down -> go next
	// 			if (evt.key === 40 && optionHoveredIndex < optionsCount - 1) {
	// 				evt.preventDefault(); // prevent page scrolling
	// 				updateCustomSelectHovered(optionHoveredIndex + 1);
	// 			}

	// 			// press up -> go previous
	// 			if (evt.key === 38 && optionHoveredIndex > 0) {
	// 				evt.preventDefault(); // prevent page scrolling
	// 				updateCustomSelectHovered(optionHoveredIndex - 1);
	// 			}

	// 			// press Enter or space -> select the option
	// 			if (evt.key === 13 || evt.key === 32) {
	// 				evt.preventDefault();
	// 				elSelectCustom.forEach((el, index) => {
	// 					const option = el.querySelector('.js-custom-options').children[optionHoveredIndex];
	// 					const value = option && option.getAttribute('data-value');

	// 					if (value) {
	// 						elSelectNative.forEach((e, i) => {
	// 							if(index === i) {
	// 								e.value = value;
	// 								updateCustomSelectChecked(value, option.textContent);
	// 							}
	// 						})
	// 					}
	// 				})

	// 				closeSelectCustom();
	// 			}
	// 		}
	// 	})
	// }

	//// Update selectCustom value when selectNative is changed.
	elSelectCustom.forEach((e, index) => {
		[...elSelectNative].filter((el, i) => {
			if(index === i) {
				el.addEventListener('focus', (evt) => {
					evt.currentTarget.classList.add('inFocus');

					if(evt.currentTarget.classList.contains('inFocus')){
						closeSelectCustom();
						el.addEventListener('change', (evt) => {
							const elCustomOptions = e.querySelector('.js-custom-options');
							const value = evt.currentTarget.value;
							const elRespectiveCustomOption = elCustomOptions.querySelectorAll(`[data-value='${value}']`)[0];

							updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
						});
					}
				});

				el.addEventListener('blur', (evt) => evt.currentTarget.classList.remove('inFocus'));
			}
		});
	})

	//// Update selectCustom value when an option is clicked or hovered
	elSelectCustom.forEach((el, i) => {
		el.addEventListener('click', (evt) => {
			const customOptsList = Array.from(evt.currentTarget.querySelectorAll('.js-custom-option'));

			customOptsList.forEach((elOption, indexList) => {
				elOption.addEventListener('click', (evt) => {

					const value = evt.currentTarget.getAttribute('data-value');

					//Sync native select to have the same value
					elSelectNative.forEach((element, index) => {
						if(index === i) {
							element.value = value;
							updateCustomSelectChecked(value, evt.currentTarget.textContent);
							closeSelectCustom();
						}
					})
				});

				if(el.classList.contains('m-select__custom-wrap--active')) {
					elOption.addEventListener('mouseenter', (evt) => {
						updateCustomSelectHovered(indexList);
					});
				}
			});
		})
	})
}
