<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<ul class="social-projects__list project">
	<?foreach ($arResult['ITEMS'] as $value) {?>
	<li class="project__item">
		<h2 class="project__title"><?=$value["NAME"]?></h2>
		<div class="project__block">
			<div class="project__content">
				<h3 class="project__subtitle"><?=$value["NAME"]?></h3>
				<div class="project__img project__img-several project__img-mob">
					<img src="/f/img/sp-content-2.jpg" alt="">
					<img src="/f/img/sp-content-3.jpg" alt="">
					<img src="/f/img/sp-content-4.jpg" alt="">
					<a class="project__img-link" href="#">
						<div class="project__img-text">
							<div class="project__img-number">+8 </div>фотографий
						</div><img src="/f/img/sp-content-5.jpg" alt="">
					</a>
				</div>
				<p class="project__text"><?=$value['DETAIL_TEXT']?></p>
				<a class="project__link btn" href="<?=$value['PROPERTIES']['LINK']['VALUE']?>">Visit website</a>
			</div>
			<!-- <pre><?print_r($value['PROPERTIES']['PHOTO']['VALUE']);?></pre> -->
			<div class="project__img project__img-several project__img-desc">
				<img src="/f/img/sp-content-2.jpg" alt="">
				<img src="/f/img/sp-content-3.jpg" alt="">
				<img src="/f/img/sp-content-4.jpg" alt="">
				<a class="project__img-link" href="#">
					<div class="project__img-text">
						<div class="project__img-number">+8 </div>фотографий
					</div><img src="/f/img/sp-content-5.jpg" alt="">
				</a>
			</div>
		</div>
	</li>
	<?
}
?>
</ul>
