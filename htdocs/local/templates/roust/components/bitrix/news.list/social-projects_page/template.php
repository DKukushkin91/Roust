<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<ul class="social-projects__list project">
	<?foreach ($arResult['ITEMS'] as $value) {?>
	<?$count_photo=count($value['PROPERTIES']['PHOTO']['VALUE']);?>
	<li class="project__item">
		<h2 class="project__title"><?=$value["NAME"]?></h2>
		<div class="project__block">
			<div class="project__content">
				<h3 class="project__subtitle"><?=$value['PREVIEW_TEXT']?></h3>
				<div class="project__img <?if ($count_photo>1){ echo 'project__img-several ';}?>project__img-mob">
					<?foreach ($value['PROPERTIES']['PHOTO']['VALUE'] as $key => $photo){
						if($key<3)
						{			
							$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
							<img src="<?=$img['src']?>" alt="<?=$photo['NAME']?>"/>
						<?}?>
						<?if($key==3){?>
						<a class="project__img-link" href="#">
							<div class="project__img-text">
								<div class="project__img-number">+<?echo ($count_photo-4);?> </div>фотографий
							</div>
							<img src="<?=$img['src']?>" alt="<?=$photo['NAME']?>"/>
						</a>
						<?}?>
					<?}?>
				</div>
				<p class="project__text"><?=$value['DETAIL_TEXT']?></p>
				<a class="project__link btn" href="<?=$value['PROPERTIES']['LINK']['VALUE']?>">Visit website</a>
			</div>
			<div class="project__img <?if ($count_photo>1){ echo 'project__img-several ';}?>project__img-desc">
				<?foreach ($value['PROPERTIES']['PHOTO']['VALUE'] as $key => $photo){
					$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); 
					if($key<3)
					{?>
						<img src="<?=$img['src']?>" alt="<?=$photo['NAME']?>"/>
					<?}?>
					<?if($key==3){?>						
						<?if($count_photo==4){?>
							<img src="<?=$img['src']?>" alt="<?=$photo['NAME']?>"/>
						<?}else{?>
							<a class="project__img-link" href="#">
								<div class="project__img-text">
									<div class="project__img-number">+<?echo ($count_photo-4);?> </div>фотографий
								</div>
								<img src="<?=$img['src']?>" alt="<?=$photo['NAME']?>"/>
							</a>
						<?}?>
					<?}?>
				<?}?>
			</div>
		</div>
	</li>
	<?
}
?>
</ul>
