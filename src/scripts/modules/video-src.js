import {removeChilds, render} from '../utils/utils';

export const getVideoSrc = () => {
	if(document.querySelector('.js-video-container')){
		const container = document.querySelector('.js-video-container');
		const breakpoints = {
			MOBILE: 574.9,
			TABLET: 1279.9
		}

		const template = (e) => {
			return `<video class="screen__video-item js-video-bg" preload="auto" autoplay muted loop playsinline>
      <source src="/f/video/${e}bg-video.webm" type="video/webm">
      <source src="/f/video/${e}bg-video.mp4" type="video/mp4">
    </video>`
		}

		const getResizeVideo = () => {
			if(window.innerWidth <= breakpoints.MOBILE) {
				removeChilds(container);
				render(container, template(`m-`), 'beforeend');
			}

			if(window.innerWidth <= breakpoints.TABLET && window.innerWidth >= breakpoints.MOBILE) {
				removeChilds(container);
				render(container, template(`t-`), 'beforeend');
			}

			if(window.innerWidth > breakpoints.TABLET){
				removeChilds(container);
				render(container, template(''), 'beforeend');
			}
		}

		getResizeVideo();
		window.addEventListener('resize', getResizeVideo);
	}
}
