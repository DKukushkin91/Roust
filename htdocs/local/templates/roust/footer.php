</main>
</div>
<footer class="footer">
	<div class="container">
		<div class="footer__wrap">
			<div class="footer__content">
				<div class="footer__social">
					<ul class="footer__social-list">
						<li class="footer__social-item footer__social-item--fb"><a class="footer__social-link" href="#"></a></li>
						<li class="footer__social-item footer__social-item--inst"><a class="footer__social-link" href="#"></a></li>
						<li class="footer__social-item footer__social-item--vk"><a class="footer__social-link" href="#"></a></li>
					</ul>
				</div>
				<div class="footer__copyright">
					<p class="footer__copyright-text">&copy;&nbsp;&laquo;Roust&raquo; 2021</p>
				</div>
			</div>
			<?
			// меню в футере 1
			$APPLICATION->IncludeComponent(
				'bitrix:menu',
				'bottom-menu',
				array(
					'ROOT_MENU_TYPE' => 'bottom1',
					'CACHE_TYPE' => 'Y',
					'MENU_CACHE_TIME' => 604800,
					"SET_STATUS_404" => "Y",
					"SHOW_404" => "Y",
				),
				false
			);
			?>
			<?
			// меню в футере 2
			$APPLICATION->IncludeComponent(
				'bitrix:menu',
				'bottom-menu',
				array(
					'ROOT_MENU_TYPE' => 'bottom2',
					'CACHE_TYPE' => 'Y',
					'MENU_CACHE_TIME' => 604800,
					"SET_STATUS_404" => "Y",
					"SHOW_404" => "Y",
				),
				false
			);
			?>
			<button class="footer__btn js-btn-top">
				<svg class="footer__icon" width="14" height="9">
					<use href="/f/img/sprite.svg#arrow-b"></use>
				</svg>
			</button>
		</div>
	</div>
</footer>
</div>
</body>
<template class="brands__template js-brands-template">
	<ul class="brands__list js-brands-list">
		<li class="brands__item brands__item--flex">
			<div class="brands__item-bg"><img src="/f/img/brands-rs-bg.jpg" alt=""></div>
			<div class="brands__img brands__img--rs">
				<picture>
					<source
						srcset="/f/img/responsive/m-brand-rs-bottle@1x.webp 1x, /f/img/responsive/m-brand-rs-bottle@2x.webp 2x"
						media="(max-width: 639px)" type="image/webp" />
					<source srcset="/f/img/responsive/m-brand-rs-bottle@1x.png 1x, /f/img/responsive/brand-rs-bottle@2x.png 2x"
						media="(max-width: 639px)" type="image/png" />
					<source srcset="/f/img/responsive/brand-rs-bottle@1x.webp 1x, /f/img/responsive/brand-rs-bottle@2x.webp 2x"
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
					<source srcset="/f/img/responsive/m-brand-zb-bottle@1x.png 1x, /f/img/responsive/brand-zb-bottle@2x.png 2x"
						media="(max-width: 639px)" type="image/png" />
					<source srcset="/f/img/responsive/brand-zb-bottle@1x.webp 1x, /f/img/responsive/brand-zb-bottle@2x.webp 2x"
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
					<source srcset="/f/img/responsive/m-brand-cr-bottle@1x.png 1x, /f/img/responsive/brand-cr-bottle@2x.png 2x"
						media="(max-width: 639px)" type="image/png" />
					<source srcset="/f/img/responsive/brand-cr-bottle@1x.webp 1x, /f/img/responsive/brand-cr-bottle@2x.webp 2x"
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
					<source srcset="/f/img/responsive/m-brand-rum-bottle@1x.png 1x, /f/img/responsive/brand-rum-bottle@2x.png 2x"
						media="(max-width: 639px)" type="image/png" />
					<source srcset="/f/img/responsive/brand-rum-bottle@1x.webp 1x, /f/img/responsive/brand-rum-bottle@2x.webp 2x"
						type="image/webp" />
					<source srcset="/f/img/responsive/brand-rum-bottle@1x.png 1x, /f/img/responsive/brand-rum-bottle@2x.png 2x"
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
					classic ingredients, The Botanist also includes 22 native plants.</p><a class="brands__link animate-button"
					href="/brands/distributed/gin/"><span class="brands__link-text">More</span></a>
			</div>
		</li>
	</ul>
</template>
<template class="gallery__template g-template js-gallery-template">
	<div class="g-template__container js-gallery-container">
		<div class="g-template__wrap swiper js-gallery-slider">
			<button class="g-template__btn js-close-btn">
				<svg class="g-template__icon" width="22" height="22">
					<use href="/f/img/sprite.svg#cross"></use>
				</svg>
			</button>
		</div>
		<button class="g-template__nav-btn g-template__nav-btn--left js-g-btn-prev">
			<svg class="g-template__nav-icon" width="14" height="9">
				<use href="/f/img/sprite.svg#arrow-g"></use>
			</svg>
		</button>
		<button class="g-template__nav-btn g-template__nav-btn--right js-g-btn-next">
			<svg class="g-template__nav-icon" width="14" height="9">
				<use href="/f/img/sprite.svg#arrow-g"></use>
			</svg>
		</button>
	</div>
</template>
<template class="g-template js-g-list-template">
	<?$APPLICATION->IncludeComponent(
		"bitrix:catalog.section",
		"career_photo",
		Array(
			"CACHE_TYPE" => "Y",
			"CAHCE_TIME" => 604800,
			"DETAIL_PROPERTY_CODE" => array('*'),
			"FIELD_CODE" => array('*'),
			"IBLOCK_ID" => CIBlockTools::GetIBlockId('career_photo'),
			"SECTION_ID" => 26,
			"PROPERTY_CODE" => array('*'),
			"SET_STATUS_404" => "Y",
			"SET_TITLE" => "N",
			"SHOW_404" => "Y",
			"SORT_BY1" => "SORT",
			"SORT_ORDER1" => "ASC",		
			"SORT_BY2" => "ACTIVE_FROM",
			"SORT_ORDER2" => "DESC",	
		)
	);?>
	<?$APPLICATION->IncludeComponent(
		"bitrix:catalog.section",
		"career_photo",
		Array(
			"CACHE_TYPE" => "Y",
			"CAHCE_TIME" => 604800,
			"DETAIL_PROPERTY_CODE" => array('*'),
			"FIELD_CODE" => array('*'),
			"IBLOCK_ID" => CIBlockTools::GetIBlockId('career_photo'),
			"SECTION_ID" => 27,
			"PROPERTY_CODE" => array('*'),
			"SET_STATUS_404" => "Y",
			"SET_TITLE" => "N",
			"SHOW_404" => "Y",
			"SORT_BY1" => "SORT",
			"SORT_ORDER1" => "ASC",		
			"SORT_BY2" => "ACTIVE_FROM",
			"SORT_ORDER2" => "DESC",	
		)
	);?>
</template>
<template class="popup-form js-popup-form-template">
	<div class="popup-form__wrap js-popup-wrap">
		<form class="popup-form__form js-popup-form" action="" method="post">
			<button class="popup-form__close-btn js-close-btn">
				<svg class="popup-form__icon" width="22" height="22">
					<use href="/f/img/sprite.svg#cross"></use>
				</svg>
			</button>
			<fieldset class="popup-form__fieldset">
				<h2 class="popup-form__title">Please complete the form</h2>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="first-name" type="text" name="first-name" required>
					<label class="popup-form__label" for="first-name">First name</label>
					<p class="popup-form__error-text">Please enter your First name.</p>
				</div>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="surname" type="text" name="surname">
					<label class="popup-form__label" for="surname">Surname</label>
				</div>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="email" type="email" name="email" required>
					<label class="popup-form__label" for="email">Email</label>
					<p class="popup-form__error-text">Please enter your email.</p>
				</div>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="c-email" type="email" name="email" required>
					<label class="popup-form__label" for="c-email">Confirm email</label>
					<p class="popup-form__error-text">Please confirm your email.</p>
				</div>
				<div class="m-select">
					<div class="m-select__wrapper">
						<select class="m-select__native-wrap js-select-native" name="" aria-labelledby="company"
							required="required">
							<option value="select" disabled="disabled" selected="selected">Select company...</option>
							<option value="ABC technologies">ABC technologies</option>
							<option value="Roust">Roust</option>
							<option value="Test Company">Test Company</option>
						</select>
						<div class="m-select__custom-wrap js-select-custom" aria-hidden="true">
							<div class="m-select__custom-trigger js-custom-box"><span class="m-select__custom-text">Select
									company...</span></div>
							<div class="m-select__custom-options js-custom-options">
								<div class="m-select__custom-option js-custom-option" data-value="ABC technologies">ABC technologies
								</div>
								<div class="m-select__custom-option js-custom-option" data-value="Roust">Roust</div>
								<div class="m-select__custom-option js-custom-option" data-value="Test Company">Test Company</div>
							</div>
							<svg class="m-select__custom-icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
					</div><span class="m-select__label" id="company">Application for company</span>
					<p class="popup-form__error-text">Please choose your company.</p>
				</div>
				<div class="m-select">
					<div class="m-select__wrapper">
						<select class="m-select__native-wrap js-select-native" name="" aria-labelledby="country"
							required="required">
							<option value="select" disabled="disabled" selected="selected">Select country...</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="USA">USA</option>
							<option value="Russia">Russia</option>
						</select>
						<div class="m-select__custom-wrap js-select-custom" aria-hidden="true">
							<div class="m-select__custom-trigger js-custom-box"><span class="m-select__custom-text">Select
									country...</span></div>
							<div class="m-select__custom-options js-custom-options">
								<div class="m-select__custom-option js-custom-option" data-value="United Kingdom">United Kingdom</div>
								<div class="m-select__custom-option js-custom-option" data-value="USA">USA</div>
								<div class="m-select__custom-option js-custom-option" data-value="Russia">Russia</div>
							</div>
							<svg class="m-select__custom-icon" width="14" height="9">
								<use href="/f/img/sprite.svg#arrow-b"></use>
							</svg>
						</div>
					</div><span class="m-select__label" id="country">Country</span>
					<p class="popup-form__error-text">Please choose your country.</p>
				</div>
				<div class="popup-form__input-group popup-form__input-group--textarea">
					<textarea class="popup-form__textarea" id="textarea" name="cover" required></textarea>
					<label class="popup-form__label" for="textarea">Cover letter</label>
					<p class="popup-form__error-text">Please enter your cover letter.</p>
				</div>
				<p class="popup-form__text"><span class='popup-form__text popup-form__text--color'>*</span> All fields are
					required</p>
				<div class="popup-form__inner">
					<input class="popup-form__upload-input" id="upload" type="file" name="upload-file" required>
					<label class="popup-form__upload-label" for="upload">Upload CV *</label>
					<button class="popup-form__btn" type="submit">Submit</button>
					<p class="popup-form__error-text">Please upload your CV.</p>
				</div>
			</fieldset>
		</form>
	</div>
	<div class="popup-form__wrap js-subscribe-popup">
		<form class="popup-form__form js-popup-form" action="" method="post">
			<button class="popup-form__close-btn js-close-btn">
				<svg class="popup-form__icon" width="22" height="22">
					<use href="/f/img/sprite.svg#cross"></use>
				</svg>
			</button>
			<fieldset class="popup-form__fieldset">
				<h2 class="popup-form__title">Please complete the form</h2>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="your-name" type="text" name="your-name" required>
					<label class="popup-form__label" for="your-name">Your name</label>
					<p class="popup-form__error-text">Please enter your First name.</p>
				</div>
				<div class="popup-form__input-group">
					<input class="popup-form__input" id="email" type="email" name="email" required>
					<label class="popup-form__label" for="email">Email</label>
					<p class="popup-form__error-text">Please enter your email.</p>
				</div>
				<p class="popup-form__text"><span class='popup-form__text popup-form__text--color'>*</span> All fields are
					required</p>
				<button class="popup-form__btn" type="submit">Subscribe</button>
			</fieldset>
		</form>
	</div>
</template>
<template class="js-about-template">
	<div class="side">
		<div class="side__wrap js-side-wrap">
			<div class="side__content">
				<button class="side__back-btn js-back-btn">
					<svg class="side__icon" width="16" height="16">
						<use href="/f/img/sprite.svg#arrow-back"></use>
					</svg><span class="side__btn-text">Go back</span>
				</button>
				<div class="side__top">
					<div class="side__img"><img class="js-side-img" src="" alt=""></div>
					<div class="side__texts-wrap">
						<h2 class="side__title js-side-title"></h2><span class="side__sub-title js-side-subTitle"></span>
					</div>
				</div>
				<div class="side__main">
					<p class="side__text js-side-text"></p>
				</div>
			</div>
		</div>
	</div>
</template>
<template class="js-search-template">
	<div class="search-popup js-search-popup">
		<div class="search-popup__wrap js-search-wrap">
			<button class="search-popup__close-btn js-close-btn">
				<svg class="search-popup__icon" width="22" height="22">
					<use href="/f/img/sprite.svg#cross"></use>
				</svg>
			</button>
			<h2 class="search-popup__title">Search</h2>
			<form class="search-popup__form" action="" method="get">
				<input class="search-popup__input" type="search" name="search" placeholder="Enter text">
				<button class="search-popup__btn">Search</button>
			</form>
			<ul class="search-popup__list">
				<li class="search-popup__item">
					<h3 class="search-popup__sub-title">Parliament Production Distillery</h3>
					<p class="search-popup__text js-search-result">One of the most technologically advanced distilleries of Roust
						Group. Built and commissioned in 1991. Investments in the modernization of the plant since 2011 amount to
						over 270 million rubles</p><a class="search-popup__link" href="#">More</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="/f/scripts/vendor.js" type="text/javascript"></script>
<script src="/f/scripts/main.js" type="text/javascript"></script>

</html>
