import {getTop} from './modules/btn-top';
import {getMainSlider} from './modules/main-slider';
import {getNewsSlider} from './modules/news-slider';
import {getBrandsList} from './modules/brands-list';
import {getCatalogList} from './modules/catalog-list';
import {getScrollItem} from './modules/brands-item';
import {getSliders, getScrollElement} from './modules/brands-item-slider';

document.addEventListener('DOMContentLoaded', () => {
	getTop();
	getMainSlider();
	getNewsSlider();
	getBrandsList();
	getCatalogList();
	getScrollItem();
	getSliders();
	getScrollElement();
});
