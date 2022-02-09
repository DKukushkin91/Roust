<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="about-us__slider-wrapper swiper-wrapper">
	<?foreach ($arResult['ITEMS'] as $value) {?>
	<?$img_d = CFile::ResizeImageGet($value['PROPERTIES']['SLIDE_D']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
	<?$img_t = CFile::ResizeImageGet($value['PROPERTIES']['SLIDE_T']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
	<?$img_m = CFile::ResizeImageGet($value['PROPERTIES']['SLIDE_M']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
	<div class="about-us__slide swiper-slide">
		<div class="about-us__slide-img">
			<picture>
				<source media="(max-width: 767px)" srcset="<?=$img_m['src']?>">
				<source media="(max-width: 959px)" srcset="<?=$img_t['src']?>">
				<img src="<?=$img_d['src']?>" alt="<?=$value['NAME']?>"/>
			</picture>
		</div>
		<div class="about-us__slide-content">
			<div class="about-us__slide-box">
				<h3 class="about-us__slide-title"><?=$value['NAME']?></h3>
				<p class="about-us__slide-text"><?=$value['PROPERTIES']['TEXT']['VALUE']?></p>
			</div><span class="about-us__slide-num about-us__slide-num--dark"><?=$value['PROPERTIES']['YEAR']['VALUE']?></span>
		</div>
	</div>
	<?
}
?>
</div>

<button class="about-us__nav-btn about-us__nav-btn--left js-about-prev">
	<svg class="about-us__nav-icon about-us__nav-icon--rotate" width="14" height="9">
		<use href="/f/img/sprite.svg#arrow-g"></use>
	</svg>
</button>
<button class="about-us__nav-btn about-us__nav-btn--right js-about-next">
	<svg class="about-us__nav-icon" width="14" height="9">
		<use href="/f/img/sprite.svg#arrow-g"></use>
	</svg>
</button>
<div class="about-us__slider-pagination swiper-pagination js-about-pagination"></div>
