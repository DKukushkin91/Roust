<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<div class="about-us__card">
	<?foreach ($arResult["ITEMS"] as $key => $value) {?>
		<?if($value['PROPERTIES']['FACTORY']['VALUE']=="Y"){?>
		<div class="about-us__card">
			<div class="about-us__card-img about-us__card-img--filter"><img class="js-card-img" src="<?=$value["PREVIEW_PICTURE"]["SRC"]?>"
					alt="<?=$value["NAME"]?>"></div>
			<div class="about-us__card-content">
				<h4 class="about-us__card-title js-card-title"><?=$value["NAME"]?></h4>
				<p class="about-us__card-text js-card-text"><?=$value['PROPERTIES']['ADRESS_SMALL']['VALUE']?></p>
				<button class="about-us__card-btn js-side-block">Learn more</button>
			</div>
		</div>
		<?}?>
	<?}?>
</div>
