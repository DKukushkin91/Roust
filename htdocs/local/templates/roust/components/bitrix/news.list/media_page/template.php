<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?CIBlockFormatProperties::DateFormat("j F Y", MakeTimeStamp($value["DATE_ACTIVE_FROM"], CSite::GetDateFormat()));?>
<div class="media__banner">
	<a href="<?=$arResult["ITEMS"][0]["DETAIL_PAGE_URL"];?>">
		<img class="media__banner-img" src="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["ALT"]?>">
		<div class="media__banner-date media__date"><?=$arResult["ITEMS"][0]["DATE_ACTIVE_FROM"]?></div>
		<h2 class="media__banner-title"><?=$arResult["ITEMS"][0]["NAME"]?></h2>
	</a>
</div>
<ul class="media__list">
	<?foreach ($arResult["ITEMS"] as $key => $value) {?>
	<?if($key>0){?>
		<?CIBlockFormatProperties::DateFormat("j F Y", MakeTimeStamp($value["DATE_ACTIVE_FROM"], CSite::GetDateFormat()));?>	
		<li class="media__item">
			<a class="media__item-link" href="<?=$value["DETAIL_PAGE_URL"];?>">
			<img class="media__item-img" src="<?=$value["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$value["PREVIEW_PICTURE"]["ALT"]?>">
				<div class="media__item-content">
					<div class="media__item-date media__date"><?=$value["DATE_ACTIVE_FROM"]?></div>
					<p class="media__item-text"><?=$value["NAME"]?></p>
				</div>
			</a>
		</li>
	<?
	}
	?>
<?
}
?>
</ul>
<div class="media__more">
	<button class="media__btn btn">More</button>
</div>



