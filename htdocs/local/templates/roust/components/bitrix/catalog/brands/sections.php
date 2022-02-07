<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);
?>


<section class="brands">
	<div class="container brands__container">
		<div class="brands__btns-wrap js-btns-wrap">
			<button class="brands__btn js-brands-btn brands__btn--active"><span class="brands__btn-text">Owned
					brands</span></button>
			<button class="brands__btn js-brands-btn"><span class="brands__btn-text">Distributed brands</span></button>
		</div>
		<div class="brands__wrap">
			<ul class="brands__list js-brands-list">
				<li class="brands__item brands__item--flex">
					<div class="brands__item-bg"><img src="/f/img/brands-rs-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--rs">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-rs-bottle@1x.webp 1x, /f/img/responsive/m-brand-rs-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-rs-bottle@1x.png 1x, /f/img/responsive/brand-rs-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-rs-bottle@1x.webp 1x, /f/img/responsive/brand-rs-bottle@2x.webp 2x"
								type="image/webp" />
							<source srcset="/f/img/responsive/brand-rs-bottle@1x.png 1x, /f/img/responsive/brand-rs-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-rs-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content brands__item-content--max-width">
						<h2 class="brands__item-title">Russian vodka</h2>
						<p class="brands__item-text">Our portfolio of Russian vodkas includes some of the best known and most loved
							brands in Russia, and 86 countries across the world.</p><a class="brands__link animate-button"
							href="/brands/owned/russian-vodka/"><span class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item brands__item--bg-red">
					<div class="brands__img brands__img--chanti">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-chanti-bottle@1x.webp 1x, /f/img/responsive/m-brand-chanti-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-chanti-bottle@1x.png 1x, /f/img/responsive/brand-chanti-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-chanti-bottle@1x.webp 1x, /f/img/responsive/brand-chanti-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-chanti-bottle@1x.png 1x, /f/img/responsive/brand-chanti-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-chanti-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Wines</h2>
						<p class="brands__item-text">Our still wine portfolio is carefully crafted using traditional Italian wine
							making
							processes and includes wines with DOC and DOCG status.</p><a class="brands__link animate-button"
							href="/brands/owned/wines/"><span class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item brands__item--grid-2">
					<div class="brands__item-bg"><img src="/f/img/brands-gancia-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--gancia">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-gancia-bottle@1x.webp 1x, /f/img/responsive/m-brand-gancia-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-gancia-bottle@1x.png 1x, /f/img/responsive/brand-gancia-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-gancia-bottle@1x.webp 1x, /f/img/responsive/brand-gancia-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-gancia-bottle@1x.png 1x, /f/img/responsive/brand-gancia-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-gancia-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Sparkling wines</h2>
						<p class="brands__item-text">Founded in 1850, Gancia is the creator of the first Italian sparkling wine.</p>
						<a class="brands__link animate-button" href="/brands/owned/sparkling-wines/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-darrow-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--darrow">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-darrow-bottle@1x.webp 1x, /f/img/responsive/m-brand-darrow-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-darrow-bottle@1x.png 1x, /f/img/responsive/brand-darrow-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-darrow-bottle@1x.webp 1x, /f/img/responsive/brand-darrow-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-darrow-bottle@1x.png 1x, /f/img/responsive/brand-darrow-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-darrow-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Whisky</h2>
						<p class="brands__item-text">Darrow is Roust Group’s first owned whisky brand. It is produced and bottled in
							one
							of Scotland's finest distilleries.</p><a class="brands__link animate-button"
							href="/brands/owned/whisky/"><span class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item brands__item--grid-3 brands__item--bg-blue">
					<div class="brands__img brands__img--bravo">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-bravo-bottle@1x.webp 1x, /f/img/responsive/m-brand-bravo-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-bravo-bottle@1x.png 1x, /f/img/responsive/brand-bravo-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-bravo-bottle@1x.webp 1x, /f/img/responsive/brand-bravo-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-bravo-bottle@1x.png 1x, /f/img/responsive/brand-bravo-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-bravo-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content brands__item-content--max-width">
						<h2 class="brands__item-title">Ready-to-Drink</h2>
						<p class="brands__item-text">Our Ready-to-Drink business is a category leader in Russia, producing
							well-known
							international drinks, and our own line of refreshing ready to consume cocktails.</p><a
							class="brands__link animate-button" href="/brands/owned/ready-to-drink/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item brands__item--flex brands__item--grid-last">
					<div class="brands__item-bg">
						<picture>
							<source media="(max-width: 1279.9px)" srcset="/f/img/brands-gancia3-m-bg.jpg"><img
								src="/f/img/brands-gancia3-bg.jpg" alt="">
						</picture>
					</div>
					<div class="brands__img brands__img--gancia3">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-gancia3-bottle@1x.webp 1x, /f/img/responsive/m-brand-gancia3-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-gancia3-bottle@1x.png 1x, /f/img/responsive/brand-gancia3-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-gancia3-bottle@1x.webp 1x, /f/img/responsive/brand-gancia3-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-gancia3-bottle@1x.png 1x, /f/img/responsive/brand-gancia3-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-gancia3-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Vermouth</h2>
						<p class="brands__item-text">The first ever Vermouth Bianco was created by Casa Gancia before 1890 and is
							made
							with Moscato Bianco grapes.</p><a class="brands__link animate-button" href="/brands/owned/vermouth/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
			</ul>
			<ul class="brands__list js-brands-list">
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-grants-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--grants">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-grants-bottle@1x.webp 1x, /f/img/responsive/m-brand-grants-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-grants-bottle@1x.png 1x, /f/img/responsive/brand-grants-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-grants-bottle@1x.webp 1x, /f/img/responsive/brand-grants-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-grants-bottle@1x.png 1x, /f/img/responsive/brand-grants-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-grants-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Whisky</h2>
						<p class="brands__item-text">Grant’s is the world's TOP 5 premium Scotch whisky, owning 58 industry awards.
						</p>
						<a class="brands__link animate-button" href="/brands/distributed/whisky/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-remy-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--martin">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-martin-bottle@1x.webp 1x, /f/img/responsive/m-brand-martin-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-martin-bottle@1x.png 1x, /f/img/responsive/brand-martin-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-martin-bottle@1x.webp 1x, /f/img/responsive/brand-martin-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-martin-bottle@1x.png 1x, /f/img/responsive/brand-martin-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-martin-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Cognac and Brandy</h2>
						<p class="brands__item-text">One of the few cognac houses that produces the world's most prestigious Fine
							Champagne cognac.</p><a class="brands__link animate-button"
							href="/brands/distributed/cognac-and-brandy/"><span class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-jager-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--jager">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-jager-bottle@1x.webp 1x, /f/img/responsive/m-brand-jager-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-jager-bottle@1x.png 1x, /f/img/responsive/brand-jager-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-jager-bottle@1x.webp 1x, /f/img/responsive/brand-jager-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-jager-bottle@1x.png 1x, /f/img/responsive/brand-jager-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-jager-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Liquors</h2>
						<p class="brands__item-text">The Number 1 ice cold shot in the world, made with 56 herb and botanical
							ingredients.</p><a class="brands__link animate-button" href="/brands/distributed/liquors/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-zubrowka-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--zb">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-zb-bottle@1x.webp 1x, /f/img/responsive/m-brand-zb-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-zb-bottle@1x.png 1x, /f/img/responsive/brand-zb-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-zb-bottle@1x.webp 1x, /f/img/responsive/brand-zb-bottle@2x.webp 2x"
								type="image/webp" />
							<source srcset="/f/img/responsive/brand-zb-bottle@1x.png 1x, /f/img/responsive/brand-zb-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-zb-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Polish vodka</h2>
						<p class="brands__item-text">We produce authentic Polish brands with more than 500 years of history,
							appreciated
							around the world.</p><a class="brands__link animate-button" href="/brands/distributed/polish-vodka/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-rossi-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--cr">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-cr-bottle@1x.webp 1x, /f/img/responsive/m-brand-cr-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-cr-bottle@1x.png 1x, /f/img/responsive/brand-cr-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-cr-bottle@1x.webp 1x, /f/img/responsive/brand-cr-bottle@2x.webp 2x"
								type="image/webp" />
							<source srcset="/f/img/responsive/brand-cr-bottle@1x.png 1x, /f/img/responsive/brand-cr-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-cr-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Wines</h2>
						<p class="brands__item-text">For 40 years, Carlo Rossi has kept its simple, straightforward approach to
							winemaking by consistently producing great tasting, unpretentious wines.</p><a
							class="brands__link animate-button" href="/brands/distributed/wines/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-rum-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--rum">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-rum-bottle@1x.webp 1x, /f/img/responsive/m-brand-rum-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-rum-bottle@1x.png 1x, /f/img/responsive/brand-rum-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-rum-bottle@1x.webp 1x, /f/img/responsive/brand-rum-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-rum-bottle@1x.png 1x, /f/img/responsive/brand-rum-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-rum-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Rum</h2>
						<p class="brands__item-text">The oldest rum in the world and the symbol of the island of Barbados.</p><a
							class="brands__link animate-button" href="/brands/distributed/rum/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item">
					<div class="brands__item-bg"><img src="/f/img/brands-tequil-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--sierra">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-sierra-bottle@1x.webp 1x, /f/img/responsive/m-brand-sierra-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-sierra-bottle@1x.png 1x, /f/img/responsive/brand-sierra-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-sierra-bottle@1x.webp 1x, /f/img/responsive/brand-sierra-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-sierra-bottle@1x.png 1x, /f/img/responsive/brand-sierra-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-sierra-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Tequila</h2>
						<p class="brands__item-text">Tequila Sierra, with its famous sombrero cap, is in great demand not only in
							its
							homeland, Mexico, but also far beyond its borders.</p><a class="brands__link animate-button"
							href="/brands/distributed/tequila/"><span class="brands__link-text">More</span></a>
					</div>
				</li>
				<li class="brands__item brands__item--grid-last">
					<div class="brands__item-bg"><img src="/f/img/brands-botanist-bg.jpg" alt=""></div>
					<div class="brands__img brands__img--botanist">
						<picture>
							<source
								srcset="/f/img/responsive/m-brand-botanist-bottle@1x.webp 1x, /f/img/responsive/m-brand-botanist-bottle@2x.webp 2x"
								media="(max-width: 639px)" type="image/webp" />
							<source
								srcset="/f/img/responsive/m-brand-botanist-bottle@1x.png 1x, /f/img/responsive/brand-botanist-bottle@2x.png 2x"
								media="(max-width: 639px)" type="image/png" />
							<source
								srcset="/f/img/responsive/brand-botanist-bottle@1x.webp 1x, /f/img/responsive/brand-botanist-bottle@2x.webp 2x"
								type="image/webp" />
							<source
								srcset="/f/img/responsive/brand-botanist-bottle@1x.png 1x, /f/img/responsive/brand-botanist-bottle@2x.png 2x"
								type="image/png" /><img src="/f/img/responsive/brand-botanist-bottle@1x.png" alt="" />
						</picture>
					</div>
					<div class="brands__item-content">
						<h2 class="brands__item-title">Gin</h2>
						<p class="brands__item-text">The only gin produced on the island of Islay in Scotland. In addition to the
							nine
							classic ingredients, The Botanist also includes 22 native plants.</p><a
							class="brands__link animate-button" href="/brands/distributed/gin/"><span
								class="brands__link-text">More</span></a>
					</div>
				</li>
			</ul>
		</div>
		<p class="brands__sub-text">*EGAIS, 2019 **IMPACT, 2020</p>
	</div>
</section>
