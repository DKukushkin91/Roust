import {getTop} from './modules/btn-top';
import {getMainSlider} from './modules/main-slider';
import {getNewsSlider} from './modules/news-slider';
import {getBrandsList} from './modules/brands-list';
import {getScrollItem} from './modules/brands-item';

document.addEventListener('DOMContentLoaded', () => {
	getTop();
	getMainSlider();
	getNewsSlider();
	getBrandsList();
	getScrollItem();
});
