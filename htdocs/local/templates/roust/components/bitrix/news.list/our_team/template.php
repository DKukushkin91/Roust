<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?foreach ($arResult["ITEMS"] as $key => $value) {?>
<div class="about-us__card">
	<div class="about-us__card-img"><img class="js-card-img" src="<?=$value["PREVIEW_PICTURE"]["SRC"]?>" alt=""></div>
	<div class="about-us__card-content">
		<h4 class="about-us__card-title js-card-title"><?=$value["NAME"]?></h4>
		<p class="about-us__card-text js-card-text"><?=$value['PROPERTIES']['POST']['VALUE']?></p>
		<button class="about-us__card-btn js-side-block">More</button>
	</div>
</div>
<?
}
?>
