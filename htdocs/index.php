<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
?>
<section class="main-page">
	<div class="container main-page__container">
		<div class="main-page__wrap">
			<div class="main-page__screen screen">
				<div class="screen__video-wrap">
					<div class="screen__video">
						<video class="screen__video-item" preload="auto" autoplay muted loop playsinline>
							<source src="/f/video/bg-video.webm" type="video/webm">
							<source src="/f/video/bg-video.mp4" type="video/mp4">
						</video>
					</div>
					<div class="screen__video-img">
						<picture>
							<source srcset="/f/img/responsive/m-bg-video@1x.webp 1x, /f/img/responsive/m-bg-video@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source srcset="/f/img/responsive/m-bg-video@1x.png 1x, /f/img/responsive/bg-video@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source srcset="/f/img/responsive/bg-video@1x.webp 1x, /f/img/responsive/bg-video@2x.webp 2x"
								type="image/webp" />
							<source srcset="/f/img/responsive/bg-video@1x.png 1x, /f/img/responsive/bg-video@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/bg-video@1x.png" alt="" />
						</picture>
					</div>
				</div>
			</div>
			<div class="main-page__screen screen swiper js-main-slider">
				<div class="screen__slider-wrap swiper-wrapper">
					<div class="screen__slide swiper-slide">
						<div class="screen__img-wrap">
							<picture>
								<source srcset="/f/img/m-rs-banner.jpg" media="(max-width: 574.9px)" type="image/jpg">
								<source srcset="/f/img/t-rs-banner.jpg" media="(max-width: 959.9px)" type="image/jpg">
								<source srcset="/f/img/t-rs-slide@1x.jpg 1x, /f/img/t-rs-slide@2x.jpg 2x" media="(max-width: 959.9px)"
									type="image/jpg"><img src="/f/img/rs-banner.jpg" alt="">
							</picture>
						</div>
						<div class="screen__icon-wrap">
							<svg class="screen__icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
						<div class="screen__content screen__content--slider">
							<div class="screen__inner screen__inner--slider screen__inner--top">
								<h2 class="screen__title">Russian Standard</h2>
								<p class="screen__text">A vodka of exceptional quality, born from our pursuit for perfection and
									Russia's rich vodka heritage.</p><a class="screen__link" href="#">More</a>
							</div>
						</div>
					</div>
					<div class="screen__slide swiper-slide">
						<div class="screen__img-wrap"><img src="/f/img/gancia-banner.jpg" alt=""></div>
						<div class="screen__icon-wrap">
							<svg class="screen__icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
						<div class="screen__content screen__content--slider">
							<div class="screen__inner screen__inner--slider">
								<h2 class="screen__title">Gancia</h2>
								<p class="screen__text">The first Italian sparkling wine. Its cellars are reckoned world heritage and
									are protected by UNESCO.</p><a class="screen__link" href="#">More</a>
							</div>
							<div class="screen__content-img screen__content-img--gancia">
								<picture>
									<source
										srcset="/f/img/responsive/m-slider-gancia-bottle@1x.webp 1x, /f/img/responsive/m-slider-gancia-bottle@2x.webp 2x"
										media="(max-width: 639px)" type="image/webp" />
									<source
										srcset="/f/img/responsive/m-slider-gancia-bottle@1x.png 1x, /f/img/responsive/slider-gancia-bottle@2x.png 2x"
										media="(max-width: 639px)" type="image/png" />
									<source
										srcset="/f/img/responsive/slider-gancia-bottle@1x.webp 1x, /f/img/responsive/slider-gancia-bottle@2x.webp 2x"
										type="image/webp" />
									<source
										srcset="/f/img/responsive/slider-gancia-bottle@1x.png 1x, /f/img/responsive/slider-gancia-bottle@2x.png 2x"
										type="image/png" /><img src="/f/img/responsive/slider-gancia-bottle@1x.png" alt="" />
								</picture>
							</div>
						</div>
					</div>
					<div class="screen__slide swiper-slide">
						<div class="screen__img-wrap"><img src="/f/img/gm-banner.jpg" alt=""></div>
						<div class="screen__icon-wrap">
							<svg class="screen__icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
						<div class="screen__content screen__content--slider">
							<div class="screen__inner screen__inner--slider">
								<h2 class="screen__title">GreenMark</h2>
								<p class="screen__text">One of the most popular brands in Russia. Green Mark is a classic vodka with a
									long history steeped in the very best traditions of Russian vodka production.</p><a
									class="screen__link" href="#">More</a>
							</div>
							<div class="screen__content-img screen__content-img--gm">
								<picture>
									<source
										srcset="/f/img/responsive/m-slider-gm-bottle@1x.webp 1x, /f/img/responsive/m-slider-gm-bottle@2x.webp 2x"
										media="(max-width: 639px)" type="image/webp" />
									<source
										srcset="/f/img/responsive/m-slider-gm-bottle@1x.png 1x, /f/img/responsive/slider-gm-bottle@2x.png 2x"
										media="(max-width: 639px)" type="image/png" />
									<source
										srcset="/f/img/responsive/slider-gm-bottle@1x.webp 1x, /f/img/responsive/slider-gm-bottle@2x.webp 2x"
										type="image/webp" />
									<source
										srcset="/f/img/responsive/slider-gm-bottle@1x.png 1x, /f/img/responsive/slider-gm-bottle@2x.png 2x"
										type="image/png" /><img src="/f/img/responsive/slider-gm-bottle@1x.png" alt="" />
								</picture>
							</div>
						</div>
					</div>
					<div class="screen__slide swiper-slide">
						<div class="screen__img-wrap"><img src="/f/img/pm-banner.jpg" alt=""></div>
						<div class="screen__icon-wrap">
							<svg class="screen__icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
						<div class="screen__content screen__content--slider">
							<div class="screen__inner screen__inner--slider">
								<h2 class="screen__title">Parliament</h2>
								<p class="screen__text">Parliament vodka is one of the oldest Russian brands in the segment. This
									classic vodka is crafted according to a traditional Russian vodka recipe - using alcohol and water
									only - and is complemented by unparalleled purification with milk.</p><a class="screen__link"
									href="#">More</a>
							</div>
							<div class="screen__content-img screen__content-img--pm">
								<picture>
									<source
										srcset="/f/img/responsive/m-slider-pm-bottle@1x.webp 1x, /f/img/responsive/m-slider-pm-bottle@2x.webp 2x"
										media="(max-width: 639px)" type="image/webp" />
									<source
										srcset="/f/img/responsive/m-slider-pm-bottle@1x.png 1x, /f/img/responsive/slider-pm-bottle@2x.png 2x"
										media="(max-width: 639px)" type="image/png" />
									<source
										srcset="/f/img/responsive/slider-pm-bottle@1x.webp 1x, /f/img/responsive/slider-pm-bottle@2x.webp 2x"
										type="image/webp" />
									<source
										srcset="/f/img/responsive/slider-pm-bottle@1x.png 1x, /f/img/responsive/slider-pm-bottle@2x.png 2x"
										type="image/png" /><img src="/f/img/responsive/slider-pm-bottle@1x.png" alt="" />
								</picture>
							</div>
						</div>
					</div>
					<div class="screen__slide swiper-slide">
						<div class="screen__img-wrap"><img src="/f/img/talka-banner.jpg" alt=""></div>
						<div class="screen__icon-wrap">
							<svg class="screen__icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
						<div class="screen__content screen__content--slider">
							<div class="screen__inner screen__inner--slider">
								<h2 class="screen__title">Talka</h2>
								<p class="screen__text">В глубинах Сибири, среди заснеженных просторов и суровой северной природы, среди
									величавых рек и свежего таежного воздуха, берет свое начало водка «Талка» — Легенда Сибири.</p><a
									class="screen__link" href="#">More</a>
							</div>
							<div class="screen__content-img screen__content-img--talka">
								<picture>
									<source
										srcset="/f/img/responsive/m-slider-talka-bottle@1x.webp 1x, /f/img/responsive/m-slider-talka-bottle@2x.webp 2x"
										media="(max-width: 639px)" type="image/webp" />
									<source
										srcset="/f/img/responsive/m-slider-talka-bottle@1x.png 1x, /f/img/responsive/slider-talka-bottle@2x.png 2x"
										media="(max-width: 639px)" type="image/png" />
									<source
										srcset="/f/img/responsive/slider-talka-bottle@1x.webp 1x, /f/img/responsive/slider-talka-bottle@2x.webp 2x"
										type="image/webp" />
									<source
										srcset="/f/img/responsive/slider-talka-bottle@1x.png 1x, /f/img/responsive/slider-talka-bottle@2x.png 2x"
										type="image/png" /><img src="/f/img/responsive/slider-talka-bottle@1x.png" alt="" />
								</picture>
							</div>
						</div>
					</div>
				</div>
				<button class="screen__nav-btn screen__nav-btn--next js-main-slider-next">
					<svg class="screen__nav-icon" width="51" height="12">
						<use href="/f/img/sprite.svg#arrow-nav"></use>
					</svg>
				</button>
				<button class="screen__nav-btn js-main-slider-prev">
					<svg class="screen__nav-icon" width="51" height="12">
						<use href="/f/img/sprite.svg#arrow-nav"></use>
					</svg>
				</button>
				<div class="screen__pagination">
					<div class="screen__p-container js-preview-slider" thumbsSlider="">
						<ol class="screen__p-list swiper-wrapper">
							<li class="screen__p-item swiper-slide">
								<button class="screen__p-btn">
									<picture>
										<source srcset="/f/img/responsive/m-rs-logo@1x.webp 1x, /f/img/responsive/m-rs-logo@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-rs-logo@1x.png 1x, /f/img/responsive/rs-logo@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/rs-logo@1x.webp 1x, /f/img/responsive/rs-logo@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/rs-logo@1x.png 1x, /f/img/responsive/rs-logo@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/rs-logo@1x.png" alt="Russian Standard" />
									</picture>
								</button>
							</li>
							<li class="screen__p-item swiper-slide">
								<button class="screen__p-btn">
									<picture>
										<source
											srcset="/f/img/responsive/m-gancia-logo@1x.webp 1x, /f/img/responsive/m-gancia-logo@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-gancia-logo@1x.png 1x, /f/img/responsive/gancia-logo@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/gancia-logo@1x.webp 1x, /f/img/responsive/gancia-logo@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/gancia-logo@1x.png 1x, /f/img/responsive/gancia-logo@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/gancia-logo@1x.png" alt="Gancia" />
									</picture>
								</button>
							</li>
							<li class="screen__p-item swiper-slide">
								<button class="screen__p-btn">
									<picture>
										<source srcset="/f/img/responsive/m-zm-logo@1x.webp 1x, /f/img/responsive/m-zm-logo@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-zm-logo@1x.png 1x, /f/img/responsive/zm-logo@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/zm-logo@1x.webp 1x, /f/img/responsive/zm-logo@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/zm-logo@1x.png 1x, /f/img/responsive/zm-logo@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/zm-logo@1x.png" alt="Green Mark" />
									</picture>
								</button>
							</li>
							<li class="screen__p-item swiper-slide">
								<button class="screen__p-btn">
									<picture>
										<source
											srcset="/f/img/responsive/m-parlament-logo@1x.webp 1x, /f/img/responsive/m-parlament-logo@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source
											srcset="/f/img/responsive/m-parlament-logo@1x.png 1x, /f/img/responsive/parlament-logo@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source
											srcset="/f/img/responsive/parlament-logo@1x.webp 1x, /f/img/responsive/parlament-logo@2x.webp 2x"
											type="image/webp" />
										<source
											srcset="/f/img/responsive/parlament-logo@1x.png 1x, /f/img/responsive/parlament-logo@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/parlament-logo@1x.png" alt="Parliament vodka" />
									</picture>
								</button>
							</li>
							<li class="screen__p-item swiper-slide">
								<button class="screen__p-btn">
									<picture>
										<source
											srcset="/f/img/responsive/m-talka-logo@1x.webp 1x, /f/img/responsive/m-talka-logo@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-talka-logo@1x.png 1x, /f/img/responsive/talka-logo@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/talka-logo@1x.webp 1x, /f/img/responsive/talka-logo@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/talka-logo@1x.png 1x, /f/img/responsive/talka-logo@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/talka-logo@1x.png" alt="Talka" />
									</picture>
								</button>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<div class="main-page__screen screen js-anchor-bottle">
				<div class="screen__icon-wrap">
					<svg class="screen__icon" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__imgs-wrap">
					<div class="screen__img-wrap"><img src="/f/img/brands-banner.jpg" alt=""></div>
					<div class="screen__img-wrap screen__img-wrap--center screen__img-wrap--desk">
						<div class="screen__img-animate screen__img-animate--rs js-main-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-rs-bottle@1x.webp 1x, /f/img/responsive/m-main-rs-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-rs-bottle@1x.png 1x, /f/img/responsive/main-rs-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-rs-bottle@1x.webp 1x, /f/img/responsive/main-rs-bottle@2x.webp 2x"
									type="image/webp" />
								<source srcset="/f/img/responsive/main-rs-bottle@1x.png 1x, /f/img/responsive/main-rs-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-rs-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--rsplatinum js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-rsplatinum-bottle@1x.webp 1x, /f/img/responsive/m-main-rsplatinum-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-rsplatinum-bottle@1x.png 1x, /f/img/responsive/main-rsplatinum-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-rsplatinum-bottle@1x.webp 1x, /f/img/responsive/main-rsplatinum-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-rsplatinum-bottle@1x.png 1x, /f/img/responsive/main-rsplatinum-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-rsplatinum-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--rsgold js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-rsgold-bottle@1x.webp 1x, /f/img/responsive/m-main-rsgold-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-rsgold-bottle@1x.png 1x, /f/img/responsive/main-rsgold-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-rsgold-bottle@1x.webp 1x, /f/img/responsive/main-rsgold-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-rsgold-bottle@1x.png 1x, /f/img/responsive/main-rsgold-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-rsgold-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--gancia js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-gancia-bottle@1x.webp 1x, /f/img/responsive/m-main-gancia-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-gancia-bottle@1x.png 1x, /f/img/responsive/main-gancia-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-gancia-bottle@1x.webp 1x, /f/img/responsive/main-gancia-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-gancia-bottle@1x.png 1x, /f/img/responsive/main-gancia-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-gancia-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--talka js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-talka-bottle@1x.webp 1x, /f/img/responsive/m-main-talka-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-talka-bottle@1x.png 1x, /f/img/responsive/main-talka-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-talka-bottle@1x.webp 1x, /f/img/responsive/main-talka-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-talka-bottle@1x.png 1x, /f/img/responsive/main-talka-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-talka-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--gancia3 js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-gancia3-bottle@1x.webp 1x, /f/img/responsive/m-main-gancia3-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-gancia3-bottle@1x.png 1x, /f/img/responsive/main-gancia3-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-gancia3-bottle@1x.webp 1x, /f/img/responsive/main-gancia3-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-gancia3-bottle@1x.png 1x, /f/img/responsive/main-gancia3-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-gancia3-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--zm js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-zm-bottle@1x.webp 1x, /f/img/responsive/m-main-zm-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-zm-bottle@1x.png 1x, /f/img/responsive/main-zm-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-zm-bottle@1x.webp 1x, /f/img/responsive/main-zm-bottle@2x.webp 2x"
									type="image/webp" />
								<source srcset="/f/img/responsive/main-zm-bottle@1x.png 1x, /f/img/responsive/main-zm-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-zm-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--gancia2 js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-gancia2-bottle@1x.webp 1x, /f/img/responsive/m-main-gancia2-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-gancia2-bottle@1x.png 1x, /f/img/responsive/main-gancia2-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-gancia2-bottle@1x.webp 1x, /f/img/responsive/main-gancia2-bottle@2x.webp 2x"
									type="image/webp" />
								<source
									srcset="/f/img/responsive/main-gancia2-bottle@1x.png 1x, /f/img/responsive/main-gancia2-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-gancia2-bottle@1x.png" alt="" />
							</picture>
						</div>
						<div class="screen__img-animate screen__img-animate--pm js-animate-bottle">
							<picture>
								<source
									srcset="/f/img/responsive/m-main-pm-bottle@1x.webp 1x, /f/img/responsive/m-main-pm-bottle@2x.webp 2x"
									media="(max-width: 639px)" type="image/webp" />
								<source
									srcset="/f/img/responsive/m-main-pm-bottle@1x.png 1x, /f/img/responsive/main-pm-bottle@2x.png 2x"
									media="(max-width: 639px)" type="image/png" />
								<source
									srcset="/f/img/responsive/main-pm-bottle@1x.webp 1x, /f/img/responsive/main-pm-bottle@2x.webp 2x"
									type="image/webp" />
								<source srcset="/f/img/responsive/main-pm-bottle@1x.png 1x, /f/img/responsive/main-pm-bottle@2x.png 2x"
									type="image/png" /><img src="/f/img/responsive/main-pm-bottle@1x.png" alt="" />
							</picture>
						</div>
					</div>
					<div class="screen__img-wrap screen__img-wrap--center screen__img-wrap--mob">
						<picture>
							<source srcset="/f/img/responsive/m-bottles@1x.webp 1x, /f/img/responsive/m-bottles@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source srcset="/f/img/responsive/m-bottles@1x.png 1x, /f/img/responsive/bottles@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source srcset="/f/img/responsive/bottles@1x.webp 1x, /f/img/responsive/bottles@2x.webp 2x"
								type="image/webp" />
							<source srcset="/f/img/responsive/bottles@1x.png 1x, /f/img/responsive/bottles@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/bottles@1x.png" alt="" />
						</picture>
					</div>
				</div>
				<div class="screen__content">
					<div class="screen__inner screen__inner--padding">
						<h2 class="screen__title screen__title--fonts">Brands</h2>
						<p class="screen__text screen__text--padding">We produce and supply world-famous alcohol brands to 86
							countries.</p><a class="screen__link" href="/brands/">More</a>
					</div>
				</div>
			</div>
			<div class="main-page__screen screen">
				<div class="screen__icon-wrap">
					<svg class="screen__icon" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__img-wrap"><img src="/f/img/partnership-banner.jpg" alt=""></div>
				<div class="screen__content">
					<div class="screen__inner">
						<h2 class="screen__title screen__title--fonts">Partnership</h2>
						<p class="screen__text screen__text--padding">We have an extensive portfolio of leading brands across
							diverse categories that offer considerable advantages for co-operation.</p>
						<div class="screen__in-box">
							<h3 class="screen__sub-title">How to become a business partner?</h3>
							<ol class="screen__o-list">
								<li class="screen__o-item">
									<p class="screen__o-text">Complete <button class="screen__o-button js-btn-form">the form</p>
								</li>
								<li class="screen__o-item">
									<p class="screen__o-text">We will contact you to discuss the details</p>
								</li>
								<li class="screen__o-item">
									<p class="screen__o-text">Let’s start earning together</p>
								</li>
							</ol>
						</div><a class="screen__link" href="/partnership/">More</a>
					</div>
				</div>
			</div>
			<?/*Новости*/?>
			<div class="main-page__screen screen screen--background">
				<div class="screen__icon-wrap">
					<svg class="screen__icon screen__icon--color" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__content">
					<div class="screen__title-wrap">
						<h2 class="screen__title screen__title--fonts screen__title--color">News</h2><a class="screen__title-link"
							href="/media/">More news</a>
					</div>
				</div>
				<section class="news main-page__news-section">
					<div class="container container--main-page">
						<div class="news__list-wrap js-news-slider">
							<?$APPLICATION->IncludeComponent(
								"bitrix:news.list",
								"media_main",
								Array(
									"CACHE_TYPE" => "Y",
									"CAHCE_TIME" => 604800,
									"DETAIL_PROPERTY_CODE" => array('*'),
									"FIELD_CODE" => array('*'),
									"IBLOCK_ID" => CIBlockTools::GetIBlockId('media'),
									"PROPERTY_CODE" => array('*'),
									"SET_STATUS_404" => "Y",
									"SET_TITLE" => "N",
									"SHOW_404" => "Y",
									"SORT_BY1" => "SORT",
									"SORT_ORDER1" => "ASC"
								)
							);?>
						</div>
					</div>
				</section>
			</div>
			<div class="main-page__screen screen">
				<div class="screen__icon-wrap">
					<svg class="screen__icon" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__img-wrap screen__img-wrap--height"><img src="/f/img/investors-banner.jpg" alt=""></div>
				<div class="screen__content screen__content--grid">
					<h2 class="screen__title screen__title--fonts"> Investors</h2><a class="screen__link" href="/investors/">More</a>
					<dl class="screen__dl">
						<div class="screen__d-wrap">
							<dt class="screen__dt">60</dt>
							<dd class="screen__dd">brands in the portfolio</dd>
						</div>
						<div class="screen__d-wrap">
							<dt class="screen__dt">4&nbsp;000</dt>
							<dd class="screen__dd">people in our team</dd>
						</div>
						<div class="screen__d-wrap">
							<dt class="screen__dt">$&nbsp;2&nbsp;000&nbsp;000&nbsp;000</dt>
							<dd class="screen__dd">is the turnover in 2019</dd>
						</div>
					</dl>
				</div>
			</div>
			<div class="main-page__screen screen screen--bg-before">
				<div class="screen__icon-wrap">
					<svg class="screen__icon screen__icon--fill" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__img-wrap"><img src="/f/img/career-banner.jpg" alt=""></div>
				<div class="screen__content screen__content--padding">
					<div class="screen__inner screen__inner--bg">
						<h2 class="screen__title screen__title--fonts screen__title--color">Career</h2>
						<p class="screen__text screen__text--padding screen__text--color screen__text--md">We give our employees
							opportunities to fulfill their dreams.</p>
						<p class="screen__text screen__text--fz screen__text--color">Join our international team of professionals
							who achieve their ambitions with us.</p><a class="screen__link screen__link--color" href="/career/">More</a>
					</div>
				</div>
			</div>
			<div class="main-page__screen screen">
				<div class="screen__icon-wrap">
					<svg class="screen__icon" width="14" height="9">
						<use href="/f/img/sprite.svg#arrow-b"></use>
					</svg>
				</div>
				<div class="screen__img-wrap screen__img-wrap--o-position"><img src="/f/img/contacts-banner.jpg" alt=""></div>
				<div class="screen__content">
					<div class="screen__inner screen__inner--last">
						<h2 class="screen__title screen__title--fonts screen__title--padding">Contacts</h2>
						<p class="screen__prev-text">Russia</p>
						<div class="screen__contacts">
							<p class="screen__text-title">Roust Global Headquarters</p>
							<ul class="screen__contacts-list">
								<li class="screen__contacts-item">Novoorlovskaya Street 5 Moscow 119633 Russia</li>
								<li class="screen__contacts-item"><a class="screen__contacts-link" href="tel:84957771777"
										target="_blank">+7 (495) 777-1-777</a></li>
								<li class="screen__contacts-item"><a class="screen__contacts-link"
										href="mailto:info@rust.com">info@roust.com</a></li>
							</ul>
						</div>
						<button class="screen__contacts-btn">Send message</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
