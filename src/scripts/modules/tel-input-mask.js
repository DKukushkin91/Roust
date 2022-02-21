export const telInputMask = (element) => {
	const MOB_INDEX = '+7 ';

	if(element) {
		const initMask = new Inputmask(`${MOB_INDEX} (999) 999 - 99 - 99`, {
			jitMasking: true
		});
		initMask.mask(element);
	}
}
