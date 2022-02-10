<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>


<section class="top brands-item__top-section">
					<div class="container brands-item__top-container js-brands-item-container">
						<div class="top__wrap top__wrap--brands-item">
							<nav class="breadcrumbs js-opacity brands-item__breadcrumbs">
								<? 
								$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
									"START_FROM" => "1",
									"PATH" => "",
									"SITE_ID" => "s1"
									)
								); ?>
							</nav>
							<div class="top__content top__content--brands-item js-opacity">
								<h1 class="top__title top__title--brands-item"><?$arResult["NAME"];?></h1>
								<p class="top__text top__text--brands-item"><?$arResult["DESCRPTION"];?></p>
								<a class="top__link" href="<?$arResult["LINK"];?>">
									<span class="top__link-text">Visit brand site</span>
								</a>
							</div>
							<ul class="top__list-awards js-opacity">
								<li class="top__item-awards">
									<picture>
										<source
											srcset="/f/img/responsive/m-Awards-rs1@1x.webp 1x, /f/img/responsive/m-Awards-rs1@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-Awards-rs1@1x.png 1x, /f/img/responsive/Awards-rs1@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/Awards-rs1@1x.webp 1x, /f/img/responsive/Awards-rs1@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/Awards-rs1@1x.png 1x, /f/img/responsive/Awards-rs1@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/Awards-rs1@1x.png" alt="" />
									</picture>
								</li>
								<li class="top__item-awards">
									<picture>
										<source
											srcset="/f/img/responsive/m-awards-rs2@1x.webp 1x, /f/img/responsive/m-awards-rs2@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-awards-rs2@1x.png 1x, /f/img/responsive/awards-rs2@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/awards-rs2@1x.webp 1x, /f/img/responsive/awards-rs2@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/awards-rs2@1x.png 1x, /f/img/responsive/awards-rs2@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/awards-rs2@1x.png" alt="" />
									</picture>
								</li>
							</ul>
							<div class="top__img-item js-anim-size">
								<div class="top__img-wrapper">
									<div class="top__picture">
										<picture>
											<source
												srcset="/f/img/responsive/m-rs-bottle@1x.webp 1x, /f/img/responsive/m-rs-bottle@2x.webp 2x"
												media="(max-width: 639px)" type="image/webp" />
											<source srcset="/f/img/responsive/m-rs-bottle@1x.png 1x, /f/img/responsive/rs-bottle@2x.png 2x"
												media="(max-width: 639px)" type="image/png" />
											<source srcset="/f/img/responsive/rs-bottle@1x.webp 1x, /f/img/responsive/rs-bottle@2x.webp 2x"
												type="image/webp" />
											<source srcset="/f/img/responsive/rs-bottle@1x.png 1x, /f/img/responsive/rs-bottle@2x.png 2x"
												type="image/png" /><img src="/f/img/responsive/rs-bottle@1x.png" alt="" />
										</picture>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="top__scroll-btn js-scroll-btn">
						<svg class="top__scroll-icon" width="144" height="50">
							<use href="/f/img/sprite.svg#flag"></use>
						</svg>
					</button>
				</section>







