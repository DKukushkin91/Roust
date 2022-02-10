<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>

<?
$minDataThisProduct = Products::getDataProductByCode('talka');
?>
<!-- <pre><?print_r($minDataThisProduct)?></pre> -->
<? 
CModule::IncludeModule("iblock");
$arSelect = Array("*", "PROPERTY_*");     
$arFilter = Array("ID" =>Array(), "IBLOCK_ID" => CIBlockTools::GetIBlockId('brands'), "ACTIVE" => "Y"); 
$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize" => 5000), $arSelect);
while ($ob = $res->GetNextElement()) {
	$arFields = $ob->GetFields(); 
}
?>

<!-- <pre><?print_r($arFields)?></pre> -->

<?
				// Калькулятор
				$APPLICATION->IncludeComponent(
					'bitrix:news.detail',
					'brands_header',
					array(
						'IBLOCK_ID' => CIBlockTools::GetIBlockId('brands'),
						'ELEMENT_ID' => $minDataThisProduct["ID"],
						'CACHE_TYPE' => 'Y',
						'CACHE_TIME' => 604800,
						'FIELD_CODE' => array('*'),
						'PROPERTY_CODE' => array('*')
					)
				);?>


<?$APPLICATION->IncludeComponent(
        "bitrix:catalog", 
        "brands", 
        array(
                "IBLOCK_ID" => CIBlockTools::GetIBlockId('brands'),
                "IBLOCK_TYPE" => "content",
                "LINK_ELEMENTS_URL" => "#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
                 "SEF_FOLDER" => "/brands/",
                "SEF_MODE" => "Y",
                "SEF_URL_TEMPLATES" => array(
                    "compare" => "compare/",
                        "sections" => "",
                        "section" => "#SECTION_CODE_PATH#/",
                        "element" => "#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
                        "smart_filter" => "#SECTION_CODE_PATH#/#SMART_FILTER_PATH#/"
                ),
                "AJAX_MODE" => "Y",
                "INSTANT_RELOAD" => "Y",
                "AJAX_OPTION_JUMP" => "N",
                "AJAX_OPTION_HISTORY" => "Y",
                "SET_STATUS_404" => "Y",
                "SET_TITLE" => "Y",
                "SHOW_404" => "Y",
                'CACHE_TYPE' => 'Y',
                'CACHE_TIME' => 604800,
                'FIELD_CODE' => array('*'),
                'PROPERTY_CODE' => array('*'),

                "USE_FILTER" => "Y",
                "FILTER_HIDE_ON_MOBILE" => "N",
                "FILTER_VIEW_MODE" => "HORIZONTAL",
                "FILTER_NAME" => "",
                "FILTER_FIELD_CODE" => array(
                        0 => "NAME",
                ),
                "ELEMENT_SORT_FIELD" =>  "PROPERTY_TYPE",   
                "ELEMENT_SORT_ORDER" => "DESC",
				"ELEMENT_SORT_FIELD2" => "FEED_LINE",  
                "ELEMENT_SORT_ORDER2" => "ASC",
                "FILTER_PROPERTY_CODE" =>  array('*'),
        ),
        false
    );?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>