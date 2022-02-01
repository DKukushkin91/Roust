import {getTop} from './modules/btn-top';
import {getMainSlider} from './modules/main-slider';
import {getNewsSlider} from './modules/news-slider';
import {getBrandsList} from './modules/brands-list';
import {getCatalogList} from './modules/catalog-list';
import {getScrollItem} from './modules/brands-item';
import {getSliders} from './modules/brands-item-slider';
import {getGallery} from './modules/career-gallery';
import {getPopup} from './modules/popup-form';
import {burgerMenuHandler} from './modules/burger-menu';
import {getAboutUsSlider} from './modules/about-us-slider';
import {getSideBlock} from './modules/side-block';
import {getItemAnimation} from './modules/bottle-anim';
import {getInvestorsSlider} from './modules/investors-slider';
import {getSearchPopup} from './modules/search-popup';
import {getVideoSrc} from './modules/video-src';

document.addEventListener('DOMContentLoaded', () => {
	getTop();
	burgerMenuHandler();
	getMainSlider();
	getNewsSlider();
	getBrandsList();
	getCatalogList();
	getScrollItem();
	getSliders();
	getGallery();
	// getPopup(); WIP
	getAboutUsSlider();
	getSideBlock();
	getItemAnimation();
	getInvestorsSlider();
	getSearchPopup();
	getVideoSrc();
});
