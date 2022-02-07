<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="about-us">
	<div class="container">
		<ol class="about-us__list">
			<li class="about-us__item">
				<p class="about-us__item-title">Our Mission</p>
				<div class="about-us__item-wrap">
					<?
					$APPLICATION->IncludeComponent(
						'bitrix:news.detail',
						'include_html_from_iblock',
						array(
							'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
							'ELEMENT_CODE' => 'page-about-mission',
							'CACHE_TIPE' => 'Y',
							'CACHE_TIME' => 604800,
							"SET_STATUS_404" => "Y",
							"SHOW_404" => "Y",
						)
					); 
					?>
				</div>
			</li>
			<li class="about-us__item about-us__item--margin">
				<p class="about-us__item-title about-us__item-title--padding">Our Heritage</p>
				<div class="about-us__slider swiper js-about-us-slider">
				<?$APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"heritage-slider",
					Array(
						"CACHE_TYPE" => "Y",
						"CAHCE_TIME" => 604800,
						"DETAIL_PROPERTY_CODE" => array('*'),
						"FIELD_CODE" => array('*'),
						"IBLOCK_ID" => CIBlockTools::GetIBlockId('heritage-slider'),
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
			</li>
			<li class="about-us__item">
				<p class="about-us__item-title">Our Team</p>
				<div class="about-us__cards-wrap">
				<?$APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"our_team",
					Array(
						"CACHE_TYPE" => "Y",
						"CAHCE_TIME" => 604800,
						"DETAIL_PROPERTY_CODE" => array('*'),
						"FIELD_CODE" => array('*'),
						"IBLOCK_ID" => CIBlockTools::GetIBlockId('our_team'),
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
			</li>
			<li class="about-us__item">
				<p class="about-us__item-title">Our Facilities</p>
				<div class="about-us__texts-wrap">
					<?
					$APPLICATION->IncludeComponent(
						'bitrix:news.detail',
						'include_html_from_iblock',
						array(
							'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
							'ELEMENT_CODE' => 'page-about-facilities',
							'CACHE_TIPE' => 'Y',
							'CACHE_TIME' => 604800,
							"SET_STATUS_404" => "Y",
							"SHOW_404" => "Y",
						)
					); 
					?>
				</div>
				<div class="about-us__cards-container js-about-mob-slider js-about-card">
					<?$APPLICATION->IncludeComponent(
						"bitrix:news.list",
						"contact_about",
						Array(
							"CACHE_TYPE" => "Y",
							"CAHCE_TIME" => 604800,
							"DETAIL_PROPERTY_CODE" => array('*'),
							"FIELD_CODE" => array('*'),
							"IBLOCK_ID" => CIBlockTools::GetIBlockId('contacts'),
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
			</li>
		</ol>
	</div>
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
