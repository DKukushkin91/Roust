import {getTop} from './modules/btn-top';
import {getMainSlider} from './modules/main-slider';
import {getNewsSlider} from './modules/news-slider';
import {getBrandsList} from './modules/brands-list';
import {getCatalogList} from './modules/catalog-list';

document.addEventListener('DOMContentLoaded', () => {
	getTop();
	getMainSlider();
	getNewsSlider();
	getBrandsList();
	getCatalogList();
});
