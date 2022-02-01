<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="contacts">
	<div class="container">
	<?$APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"contact_factories",
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
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>