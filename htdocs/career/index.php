<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="career">
	<div class="container">
		<div class="career__wrap">      
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-career_why_work',
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
<section class="gallery">
	<div class="container gallery__container">
		<div class="gallery__wrap"> 
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-career_gallery',
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
<section class="career-contacts">
	<div class="career-contacts__img">
		<picture>
			<source media="(max-width: 574.9px)" srcset="/f/img/arrow-bg-m.jpg">
			<source media="(max-width: 959.9px)" srcset="/f/img/arrow-bg-t.jpg"><img src="/f/img/arrow-bg.jpg" alt="">
		</picture>
	</div>
	<div class="container">
		<div class="career-contacts__wrap">   
        <?
		$APPLICATION->IncludeComponent(
			'bitrix:news.detail',
			'include_html_from_iblock',
			array(
				'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
				'ELEMENT_CODE' => 'page-career_hr_team',
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
