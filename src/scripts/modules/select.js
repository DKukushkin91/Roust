export const selectHandler = (template) => {
// const elSelectNative = template.getElementsByClassName('js-select-native')[0];
// const elSelectCustom = template.getElementsByClassName('js-select-custom')[0];
// const elSelectCustomBox = elSelectCustom.children[0];
// const elSelectCustomOpts = elSelectCustom.children[1];
// const customOptsList = Array.from(elSelectCustomOpts.children);
// const optionsCount = customOptsList.length;
// const defaultLabel = elSelectCustomBox.getAttribute('data-value');

// let optionChecked = '';
// let optionHoveredIndex = -1;

// // Toggle custom select visibility when clicking the box
// elSelectCustomBox.addEventListener('click', (e) => {
//   const isClosed = !elSelectCustom.classList.contains('m-select__custom-wrap--active');

//   if (isClosed) {
//     openSelectCustom();
//   } else {
//     closeSelectCustom();
//   }
// });

// function openSelectCustom() {
//   elSelectCustom.classList.add('m-select__custom-wrap--active');
//   // Remove aria-hidden in case this was opened by a user
//   // who uses AT (e.g. Screen Reader) and a mouse at the same time.
//   elSelectCustom.setAttribute('aria-hidden', false);

//   if (optionChecked) {
//     const optionCheckedIndex = customOptsList.findIndex(
//       (el) => el.getAttribute('data-value') === optionChecked
//     );
//     updateCustomSelectHovered(optionCheckedIndex);
//   }

//   // Add related event listeners
//   document.addEventListener('click', watchClickOutside);
//   document.addEventListener('keydown', supportKeyboardNavigation);
// }

// function closeSelectCustom() {
//   elSelectCustom.classList.remove('m-select__custom-wrap--active');

//   elSelectCustom.setAttribute('aria-hidden', true);

//   updateCustomSelectHovered(-1);

//   // Remove related event listeners
//   document.removeEventListener('click', watchClickOutside);
//   document.removeEventListener('keydown', supportKeyboardNavigation);
// }

// function updateCustomSelectHovered(newIndex) {
//   const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
//   const option = elSelectCustomOpts.children[newIndex];

//   if (prevOption) {
//     prevOption.classList.remove('m-select__custom-option--hover');
//   }
//   if (option) {
//     option.classList.add('m-select__custom-option--hover');
//   }

//   optionHoveredIndex = newIndex;
// }

// function updateCustomSelectChecked(value, text) {
//   const prevValue = optionChecked;

//   const elPrevOption = elSelectCustomOpts.querySelector(
//     `[data-value='${prevValue}'`
//   );
//   const elOption = elSelectCustomOpts.querySelector(`[data-value='${value}'`);

//   if (elPrevOption) {
//     elPrevOption.classList.remove('m-select__custom-wrap--active');
//   }

//   if (elOption) {
//     elOption.classList.add('m-select__custom-wrap--active');
//   }

//   elSelectCustomBox.textContent = text;
//   optionChecked = value;
// }

// function watchClickOutside(e) {
//   const didClickedOutside = !elSelectCustom.contains(event.target);
//   if (didClickedOutside) {
//     closeSelectCustom();
//   }
// }

// function supportKeyboardNavigation(e) {
//   // press down -> go next
//   if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
//     let index = optionHoveredIndex;
//     e.preventDefault(); // prevent page scrolling
//     updateCustomSelectHovered(optionHoveredIndex + 1);
//   }

//   // press up -> go previous
//   if (event.keyCode === 38 && optionHoveredIndex > 0) {
//     e.preventDefault(); // prevent page scrolling
//     updateCustomSelectHovered(optionHoveredIndex - 1);
//   }

//   // press Enter or space -> select the option
//   if (event.keyCode === 13 || event.keyCode === 32) {
//     e.preventDefault();

//     const option = elSelectCustomOpts.children[optionHoveredIndex];
//     const value = option && option.getAttribute('data-value');

//     if (value) {
//       elSelectNative.value = value;
//       updateCustomSelectChecked(value, option.textContent);
//     }
//     closeSelectCustom();
//   }

//   // press ESC -> close selectCustom
//   if (event.keyCode === 27) {
//     closeSelectCustom();
//   }
// }

// // Update selectCustom value when selectNative is changed.
// elSelectNative.addEventListener('change', (e) => {
//   const value = e.target.value;
//   const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
//     `[data-value='${value}']`
//   )[0];

//   updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
// });

// // Update selectCustom value when an option is clicked or hovered
// customOptsList.forEach(function (elOption, index) {
//   elOption.addEventListener('click', (e) => {
//     const value = e.target.getAttribute('data-value');

//     // Sync native select to have the same value
//     elSelectNative.value = value;
//     updateCustomSelectChecked(value, e.target.textContent);
//     closeSelectCustom();
//   });

//   elOption.addEventListener('mouseenter', (e) => {
//     updateCustomSelectHovered(index);
//   });

//   // TODO: Toggle these event listeners based on selectCustom visibility
// 	});

	const elSelectNative = template.querySelectorAll('.js-select-native');
	const elSelectCustom = template.querySelectorAll('.js-select-custom');
	const elSelectCustomBox = template.querySelectorAll('.js-custom-box');

	let optionChecked = '';
	let optionHoveredIndex = -1;
	// let currentElement;

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

			// currentElement = [...template.querySelectorAll('.js-select-custom')].findIndex(e => e === target);
			// console.log(currentElement);
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
	}

	const closeSelectCustom = () => {
		elSelectCustom.forEach(el => {
			el.classList.remove('m-select__custom-wrap--active');
			el.setAttribute('aria-hidden', true);
		})

		updateCustomSelectHovered(-1);
	}

	const updateCustomSelectHovered = (newIndex) => {
		elSelectCustom.forEach(el => {
			const customOptions = el.querySelector('.js-custom-options');
			const prevOption = customOptions.children[optionHoveredIndex];
			const option = customOptions.children[newIndex];

			if (prevOption) {
				prevOption.classList.remove('m-select__custom-option--hover');
			}
			if (option) {
				option.classList.add('m-select__custom-option--hover');
			}

			optionHoveredIndex = newIndex;
		})
	}

	const updateCustomSelectChecked = (value, text) => {
		elSelectCustom.forEach((el, index) => {
			[...elSelectNative].filter((e, i) => {

				if(index === i){
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

					elCustomBox.textContent = text;
					optionChecked = value;
				}

			})
		})
	}

	//// Update selectCustom value when selectNative is changed.
	elSelectCustom.forEach((e, index) => {
		[...elSelectNative].filter((el, i) => {
			if(index === i) {
				el.addEventListener('change', (evt) => {
					const elCustomOptions = e.querySelector('.js-custom-options');
					const value = evt.target.value;
					const elRespectiveCustomOption = elCustomOptions.querySelectorAll(`[data-value='${value}']`)[0];
					console.log(elRespectiveCustomOption)

					updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
				});
			}
		});
	})

	//// Update selectCustom value when an option is clicked or hovered
	elSelectCustom.forEach((el, i) => {
		el.addEventListener('click', (evt) => {
			const customOptsList = Array.from(evt.currentTarget.querySelectorAll('.js-custom-option'));
			customOptsList.forEach((elOption, indexList) => {
				elOption.addEventListener('click', (e) => {
					const value = e.target.getAttribute('data-value');

					//Sync native select to have the same value
					elSelectNative.forEach((element, index) => {
						if(index === i) {
							element.value = value;
							updateCustomSelectChecked(value, e.currentTarget.textContent);
							closeSelectCustom();
						}
					})
				});

					elOption.addEventListener('mouseenter', (e) => {
						updateCustomSelectHovered(indexList);
				});
			});
		})
	})
}
