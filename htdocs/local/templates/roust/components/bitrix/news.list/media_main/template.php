<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<ul class="news__list-slide swiper-wrapper">
	<?foreach ($arResult['ITEMS'] as $value) {?>
	<li class="news__item-slide swiper-slide"><a class="news__item-link" href="<?=$value["DETAIL_PAGE_URL"];?>"></a>
		<div class="news__item-img"><img src="<?=$value["PREVIEW_PICTURE"]["SRC"]?>"
				alt="<?=$value["PREVIEW_PICTURE"]["ALT"]?>"></div>
		<div class="news__item-content">
			<p class="news__item-date"><?echo CIBlockFormatProperties::DateFormat("j F Y", MakeTimeStamp($value["DATE_ACTIVE_FROM"], CSite::GetDateFormat()));?>
		</p>
			<p class="news__item-text"><?=$value["NAME"]?></p>
		</div>
	</li>
	<?
}
?>
</ul>
<button class="news__nav-btn news__nav-btn--position-r news__nav-btn--next js-news-slider-next">
	<svg class="news__nav-icon news__nav-icon--color" width="51" height="12">
		<use href="/f/img/sprite.svg#arrow-nav"></use>
	</svg>
</button>
<button class="news__nav-btn news__nav-btn--position-l js-news-slider-prev">
	<svg class="news__nav-icon news__nav-icon--color" width="51" height="12">
		<use href="/f/img/sprite.svg#arrow-nav"></use>
	</svg>
</button>
<div class="swiper-pagination"></div>
