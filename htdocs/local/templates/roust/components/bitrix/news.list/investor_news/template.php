<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<ul class="investors__list js-investors-wrap">
	<?foreach ($arResult["ITEMS"] as $key => $value) {?>
	<li class="investors__item js-investors-slide"><a class="investors__item-link" href="#"></a>
		<time class="investors__date"><?echo CIBlockFormatProperties::DateFormat("j F Y", MakeTimeStamp($value["ACTIVE_FROM"], CSite::GetDateFormat()));?></time>
		<p class="investors__text"><?=$value["NAME"]?></p>
	</li>
	<?
}
?>
</ul>
