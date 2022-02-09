<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
?>

<section class="investors">
	<div class="container">
		<div class="investors__wrap">
			<h2 class="investors__title">Investor News</h2><a class="investors__news-link" href="#">All news</a>
			<div class="investors__slider js-investors-slider">
				<?$APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"investor_news",
					Array(
						"CACHE_TYPE" => "Y",
						"CAHCE_TIME" => 604800,
						"DETAIL_PROPERTY_CODE" => array('*'),
						"FIELD_CODE" => array('*'),
						"IBLOCK_ID" => CIBlockTools::GetIBlockId('investor_news'),
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
				<div class="investors__pagination swiper-pagination js-investors-pagination"></div>
			</div>
		</div>
		<div class="investors__wrap investors__wrap--grid">
			<div class="investors__docs-box">
				<h2 class="investors__title">Current Reports</h2><a class="investors__box-link" href="#" download>
					<div class="investors__icon"><img src="/f/img/icon-pdf.png" alt=""></div>
					<div class="investors__box-content">
						<time class="investors__box-date">03 Apr 2020</time>
						<p class="investors__box-text">Roust Corporation Presentation for Q3 2019</p>
					</div>
				</a><a class="investors__redirect" href="#"><span class="investors__redirect-text">All presentations (23)</span>
					<svg class="investors__redirect-icon" width="9" height="15">
						<use href="/f/img/sprite.svg#arrow-g"></use>
					</svg></a>
			</div>
			<div class="investors__docs-box">
				<h2 class="investors__title">Quarterly Reports</h2><a class="investors__box-link" href="#" download>
					<div class="investors__icon"><img src="/f/img/icon-pdf.png" alt=""></div>
					<div class="investors__box-content">
						<time class="investors__box-date">03 Apr 2020</time>
						<p class="investors__box-text">IFRS Roust Corporation financial results for Q1 2019</p>
					</div>
				</a><a class="investors__redirect" href="#"><span class="investors__redirect-text">All presentations (16)</span>
					<svg class="investors__redirect-icon" width="9" height="15">
						<use href="/f/img/sprite.svg#arrow-g"></use>
					</svg></a>
			</div>
			<div class="investors__docs-box">
				<h2 class="investors__title">Presentations</h2><a class="investors__box-link" href="#" download>
					<div class="investors__icon"><img src="/f/img/icon-pdf.png" alt=""></div>
					<div class="investors__box-content">
						<time class="investors__box-date">03 Apr 2020</time>
						<p class="investors__box-text">Roust Corporation Presentation for Q3 2019</p>
					</div>
				</a><a class="investors__redirect" href="#"><span class="investors__redirect-text">All presentations (12)</span>
					<svg class="investors__redirect-icon" width="9" height="15">
						<use href="/f/img/sprite.svg#arrow-g"></use>
					</svg></a>
			</div>
			<div class="investors__docs-box">
				<h2 class="investors__title">Annual Reports</h2><a class="investors__box-link" href="#" download>
					<div class="investors__icon"><img src="/f/img/icon-pdf.png" alt=""></div>
					<div class="investors__box-content">
						<time class="investors__box-date">03 Apr 2020</time>
						<p class="investors__box-text">IFRS Roust Corporation 2018 annual report</p>
					</div>
				</a><a class="investors__redirect" href="#"><span class="investors__redirect-text">All presentations (7)</span>
					<svg class="investors__redirect-icon" width="9" height="15">
						<use href="/f/img/sprite.svg#arrow-g"></use>
					</svg></a>
			</div>
		</div>
		<div class="investors__wrap">
			<div class="investors__content-box investors__content-box--width">
				<h2 class="investors__title">Board of Directors</h2>
				<div class="about-us__cards-wrap about-us__cards-wrap--jc">
					<?$APPLICATION->IncludeComponent(
						"bitrix:catalog.section",
						"our_team",
						Array(
							"CACHE_TYPE" => "Y",
							"CAHCE_TIME" => 604800,
							"DETAIL_PROPERTY_CODE" => array('*'),
							"FIELD_CODE" => array('*'),
							"IBLOCK_ID" => CIBlockTools::GetIBlockId('our_team'),
							"SECTION_ID" => 31,
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
				</div>
			</div>
			<div class="investors__content-box investors__content-box--max-width">
				<h2 class="investors__title">Executive Officers</h2>
				<div class="about-us__cards-wrap about-us__cards-wrap--jc">
					<?$APPLICATION->IncludeComponent(
						"bitrix:catalog.section",
						"our_team",
						Array(
							"CACHE_TYPE" => "Y",
							"CAHCE_TIME" => 604800,
							"DETAIL_PROPERTY_CODE" => array('*'),
							"FIELD_CODE" => array('*'),
							"IBLOCK_ID" => CIBlockTools::GetIBlockId('our_team'),
							"SECTION_ID" => 32,
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
				</div>
			</div>
			<div class="investors__content-box investors__content-box--map">
				<h2 class="investors__title">Investor Relations Contact</h2>
				<div class="investors__content-inner">
					<div class="investors__content-img">
						<picture>
							<source media="(max-width: 575px)" srcset="/f/img/map-m.jpg">
							<source media="(max-width: 1024px)" srcset="/f/img/map-t.jpg"><img src="/f/img/map.jpg" alt="">
						</picture>
					</div>
					<div class="investors__content-wrap">
						<p class="investors__content-text">Novoorlovskaya Street 5 Moscow 119633 Russia</p><a
							class="investors__content-link" href="mailto:IR@roust.com" target="_blank"
							rel="noopener noreferrer">IR@roust.com</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
