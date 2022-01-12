<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="media">
	<div class="container">
		<div class="media__subscription">
			<button class="media__btn btn">Subscribe to our newsletters</button>
		</div>
		<?$APPLICATION->IncludeComponent(
		"bitrix:news",
		"media_page",
		Array(
			"CACHE_TYPE" => "Y",
			"CAHCE_TIME" => 604800,	
			"IBLOCK_ID" => CIBlockTools::GetIBlockId('media'),					
			"NEWS_COUNT" => "20",
			"SEF_FOLDER" => "/media/",
			"SEF_MODE" => "Y",
			"SEF_URL_TEMPLATES" => Array(
				"detail" => "#ELEMENT_CODE#/",
				"news" => "",
				"section" => "",
			),
			"PROPERTY_CODE" => array('*'),
			"SORT_BY1" => "SORT",
			"SORT_ORDER1" => "ASC"				
		)
		);?>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
