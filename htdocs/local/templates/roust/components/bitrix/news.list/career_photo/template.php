<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<ul class="g-template__list swiper-wrapper js-g-list">
	<?foreach ($arResult["ITEMS"] as $key => $value) {?>
	<li class="g-template__item swiper-slide">
		<div class="g-template__img"><img src="<?=$value['PREVIEW_PICTURE']['SRC']?>" alt="<?=$value['NAME']?>"></div>
		<p class="g-template__title"><?=$value['NAME']?></p>
		<p class="g-template__text"><?=$value['PREVIEW_TEXT']?></p>
	</li>
	<?}?>
</ul>
