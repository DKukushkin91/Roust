<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="social-projects">
	<div class="container">
		<?$APPLICATION->IncludeComponent(
			"bitrix:news.list",
			"social-projects_page",
			Array(
				"CACHE_TYPE" => "Y",
				"CAHCE_TIME" => 604800,
				"DETAIL_PROPERTY_CODE" => array('*'),
				"FIELD_CODE" => array('*'),
				"IBLOCK_ID" => CIBlockTools::GetIBlockId('social-projects'),
				"PROPERTY_CODE" => array('*'),
				"SET_STATUS_404" => "Y",
				"SET_TITLE" => "N",
				"SHOW_404" => "Y",
				"SORT_BY1" => "SORT",
				"SORT_ORDER1" => "ASC"
			)
		);?>
	</div>
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
