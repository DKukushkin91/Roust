<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Web\Json;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */
?>
<section class="brands-item brands-item--width">
	<div class="container brands-item__container">
		<div class="brands-item__content-slider js-content-slider">
			<div class="brands-item__wrap js-anim-items js-content-wrap">
				<div class="brands-item__content js-content-slide">
					<div class="brands-item__img-slider swiper js-img-slider js-b-item-slider">
						<div class="brands-item__img-wrapper swiper-wrapper">
                			<? foreach ($arResult['PROPERTIES']['COLLECTION_BASE']['VALUE'] as $key => $value ) {?>
								<?$background = CFile::ResizeImageGet($value['SUB_VALUES']['COLLECTION_BACKGROUND']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_EXACT, false);?>
								<div class="brands-item__img swiper-slide"><img src="<?$background['src']?>" alt=""></div>
                			<?}?>
						</div>
					</div>
					<div class="brands-item__text-slider swiper js-text-slider js-b-item-slider">
						<div class="brands-item__text-wrapper swiper-wrapper">
                			<? foreach ($arResult['PROPERTIES']['COLLECTION_BASE']['VALUE'] as $key => $value ) {?>
							<div class="brands-item__text-block js-anim-text swiper-slide">
								<h2 class="brands-item__title">
									<?$value['SUB_VALUES']['COLLECTION_NAME']['VALUE'];?>
									<span class="brands-item__title--color"><?$value['SUB_VALUES']['COLLECTION_SUB_NAME']['VALUE'];?></span>
								</h2>
								<p class="brands-item__text"><?$value['SUB_VALUES']['COLLECTION_DESCRPTION']['VALUE']['TEXT'];?></p>
							</div>	
                			<?}?>
						</div>
					</div>
					<button class="brands-item__btn brands-item__btn--mobile brands-item__btn--mobile-prev js-mob-prev-btn"></button>
				</div>
				<div class="brands-item__content brands-item__content--mobile js-content-slide">
					<?
					if(!empty($arResult['PROPERTIES']['BACKGROUND']['VALUE'])){
					$background_bottle = CFile::ResizeImageGet($arResult['PROPERTIES']['BACKGROUND']['VALUE'], array(), BX_RESIZE_IMAGE_EXACT, false);
					?>
					<div class="brands-item__bg-img"><img src="<?$background_bottle['src']?>" alt=""></div>
					<?}?>
					<div class="brands-item__prod-slider swiper js-product-slider">
						<div class="brands-item__prod-wrap swiper-wrapper">
                			<? foreach ($arResult['PROPERTIES']['COLLECTION_BOOTLE']['VALUE'] as $key => $value ) {?>
                            <?
                            $bottle_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_png']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_png']['VALUE'], array('width'=> 453,'height' => 1600), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_webp']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_webp']['VALUE'], array('width'=> 453,'height' => 1600), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_m_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_png']['VALUE'], array('width'=> 113,'height' => 339), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_m_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_png']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_m_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_webp']['VALUE'], array('width'=> 113,'height' => 339), BX_RESIZE_IMAGE_EXACT, false);
                            $bottle_m_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_webp']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_EXACT, false);
                            ?>
							<div class="brands-item__prod-img swiper-slide">
								<picture>
									<source srcset="<?=$bottle_png_1x['src']?> 1x, <?=$bottle_png_2x['src']?> 2x" type="image/png" />
									<source srcset="<?=$bottle_webp_1x['src']?> 1x, <?=$bottle_webp_2x['src']?> 2x" type="image/webp" />
									<source srcset="<?=$bottle_m_png_1x['src']?> 1x, <?=$bottle_m_png_2x['src']?> 2x" media="(max-width: 639px)" type="image/png" />
									<source srcset="<?=$bottle_m_webp_1x['src']?> 1x, <?=$bottle_m_webp_2x['src']?> 2x" media="(max-width: 639px)" type="image/webp" />
									<img src="<?=$bottle_png_1x['src']?>" alt="" />
								</picture>
							</div>
                			<?}?>
						</div>
					</div>
					<button class="brands-item__btn brands-item__btn--mobile js-mob-next-btn"></button>
				</div>
			</div>
		</div>
	</div>
	<button class="brands-item__nav-btn brands-item__nav-btn--prev js-item-prev js-slide-btn">
		<svg class="brands-item__icon" width="14" height="9">
			<use href="/f/img/sprite.svg#arrow-b"></use>
		</svg>
	</button>
	<button class="brands-item__nav-btn brands-item__nav-btn--next js-item-next js-slide-btn">
		<svg class="brands-item__icon" width="14" height="9">
			<use href="/f/img/sprite.svg#arrow-b"></use>
		</svg>
	</button>
</section>

<section class="brands-item brands-item--color">
	<div class="container brands-item__container--padding">
		<div class="brands-item__inner">
			<div class="brands-item__box js-rect-point">
				<h3 class="brands-item__s-title">Collection</h3><span class="brands-item__text"><?echo count($arResult['PROPERTIES']['COLLECTION_BASE']['VALUE']);?> flavours</span>
			</div>
			<div class="brands-item__scroll-wrap">
				<div class="brands-item__slide swiper js-thumbs-slider" thumbsSlider="">
					<ul class="brands-item__list js-thumbs-wrapper swiper-wrapper">
                		<? foreach ($arResult['PROPERTIES']['COLLECTION_PICTURE']['VALUE'] as $key => $value ) {?>
						<li class="brands-item__item swiper-slide js-scroll-item">
							<button class="brands-item__btn">
								<span class="brands-item__text-box">
									<p class="brands-item__text"><?=$arResult['PROPERTIES']['COLLECTION_BASE']['VALUE'][$key]['SUB_VALUES']['COLLECTION_NAME']['VALUE']?></p>
									<p class="brands-item__text brands-item__text--fz"><?=$arResult['PROPERTIES']['COLLECTION_BASE']['VALUE'][$key]['SUB_VALUES']['COLLECTION_SUB_NAME']['VALUE']?></p>
								</span>
								<span class="brands-item__picture">
									<picture>
										<?
										$picture_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_png']['VALUE'], array('width'=> 166,'height' => 143), BX_RESIZE_IMAGE_EXACT, false);
										$picture_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_png']['VALUE'], array('width'=> 332,'height' => 286), BX_RESIZE_IMAGE_EXACT, false);
										$picture_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_webp']['VALUE'], array('width'=> 166,'height' => 143), BX_RESIZE_IMAGE_EXACT, false);
										$picture_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_webp']['VALUE'], array('width'=> 332,'height' => 286), BX_RESIZE_IMAGE_EXACT, false);
										$picture_m_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_m_png']['VALUE'], array('width'=> 83,'height' => 72), BX_RESIZE_IMAGE_EXACT, false);
										$picture_m_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_m_png']['VALUE'], array('width'=> 166,'height' => 143), BX_RESIZE_IMAGE_EXACT, false);
										$picture_m_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_m_webp']['VALUE'], array('width'=> 83,'height' => 72), BX_RESIZE_IMAGE_EXACT, false);
										$picture_m_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['PICTURE_m_webp']['VALUE'], array('width'=> 166,'height' => 143), BX_RESIZE_IMAGE_EXACT, false);
										?>
										<source srcset="<?=$picture_png_1x['src']?> 1x, <?=$picture_png_2x['src']?> 2x" type="image/png" />
										<source srcset="<?=$picture_webp_1x['src']?> 1x, <?=$picture_webp_2x['src']?> 2x" type="image/webp" />
										<source srcset="<?=$picture_m_png_1x['src']?> 1x, <?=$picture_m_png_2x['src']?> 2x" media="(max-width: 639px)" type="image/png" />
										<source srcset="<?=$picture_m_webp_1x['src']?> 1x, <?=$picture_m_webp_2x['src']?> 2x" media="(max-width: 639px)" type="image/webp" />
										<img src="<?=$picture_png_1x['src']?>" alt="" />
									</picture>
								</span>
							</button>
						</li>								
                		<?}?>						
					</ul>
				</div>
				<div class="brands-item__scroll js-scroll"></div>
			</div>
		</div>
	</div>
</section>
<section class="news brands-item__news-section">
	<div class="container container--brands-item">
		<div class="news__list-wrap js-news-slider">
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"media_main",
				Array(
					"CACHE_TYPE" => "Y",
					"CAHCE_TIME" => 604800,
					"DETAIL_PROPERTY_CODE" => array('*'),
					"FIELD_CODE" => array('*'),
					"IBLOCK_ID" => CIBlockTools::GetIBlockId('media'),
					"PROPERTY_CODE" => array('*'),
					"SET_STATUS_404" => "Y",
					"SET_TITLE" => "N",
					"SHOW_404" => "Y",
					"SORT_BY1" => "SORT",
					"SORT_ORDER1" => "ASC",		
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER2" => "DESC",	
				)
			);?>
		</div>
	</div>
</section>
<div class="container brands-item__container brands-item__container--bg">
	<div class="brands-item__sub-container">
		<?foreach ($arResult['PROPERTIES']['LINKS_TEXT']['VALUE'] as $key => $value){?>
			<?$num=$key+1;?>
			<p class="brands-item__sub-text"><sup><?=$num?></sup><?=$value;?></p>
		<?}?>
	</div>
</div>