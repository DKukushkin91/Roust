<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="partnership">
	<div class="container partnership__container">
		<div class="partnership__wrap">
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-partnership_contact',
				'CACHE_TIPE' => 'Y',
				'CACHE_TIME' => 604800,
				"SET_STATUS_404" => "Y",
				"SHOW_404" => "Y",
			)
		); 
		?>
		</div>
	</div>
</section>
<section class="price">
	<div class="container price__container">
		<div class="price__wrap">
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-partnership_price',
				'CACHE_TIPE' => 'Y',
				'CACHE_TIME' => 604800,
				"SET_STATUS_404" => "Y",
				"SHOW_404" => "Y",
			)
		); 
		?>
		</div>
	</div>
</section>
<section class="answer">
	<div class="container answer__container">
		<div class="answer__wrap">
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-partnership_price',
				'CACHE_TIPE' => 'Y',
				'CACHE_TIME' => 604800,
				"SET_STATUS_404" => "Y",
				"SHOW_404" => "Y",
			)
		); 
		?>
		</div>
	</div>
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
