<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<ul class="contacts__list contacts__list-multi">
	<?foreach ($arResult["ITEMS"] as $key => $value) {?>
	<li class="contacts__li">
		<?if ($value['PROPERTIES']['COUNTRY']['VALUE'] != $oldcountru && !empty($value['PROPERTIES']['COUNTRY']['VALUE'])){?>
			<h2 class="contacts__title"><?=$value['PROPERTIES']['COUNTRY']['VALUE']?></h2>
		<?}?>
		<div class="contacts__li-content">
			<h3 class="contacts__li-title<?if($value['PROPERTIES']['FACTORY']['VALUE']=="Y"){echo ' contacts__li-title--factory';}?>"><?=$value["NAME"]?></h3>
			<?if (!empty($value['PROPERTIES']['ADRESS']['VALUE'])){?>
				<p class="contacts__li-address"><?=$value['PROPERTIES']['ADRESS']['VALUE']?></p>
			<?}?>
			<?if (!empty($value['PROPERTIES']['PHONE']['VALUE'])){?>
				<a href="tel:<?=$value['PROPERTIES']['PHONE']['VALUE']?>" class="contacts__li-tel"><?=$value['PROPERTIES']['PHONE']['VALUE']?></a>
			<?}?>
			<?if (!empty($value['PROPERTIES']['EMAIL']['VALUE'])){?>
				<a class="contacts__li-link" href="mailto:<?=$value['PROPERTIES']['EMAIL']['VALUE']?>">Send message</a>
			<?}?>
		</div>
	</li>
	<?
	$oldcountru = $value['PROPERTIES']['COUNTRY']['VALUE'];
	}
	?>
</ul>
