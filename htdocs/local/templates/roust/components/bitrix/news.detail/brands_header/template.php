<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<section class="top brands-item__top-section">
	<div class="container brands-item__top-container js-brands-item-container">
		<div class="top__wrap top__wrap--brands-item">
			<? /* 
			<nav class="breadcrumbs js-opacity brands-item__breadcrumbs">
				<? 
				$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
					"START_FROM" => "1",
					"PATH" => "",
					"SITE_ID" => "s1"
					)
				); ?>
			</nav> */?>
			<div class="top__content top__content--brands-item js-opacity">
				<h1 class="top__title top__title--brands-item">
					<?$arResult['NAME'];?>
				</h1>
				<!-- <pre><?print_r($arResult)?></pre> -->
				<p class="top__text top__text--brands-item">
					<?$arResult['PROPERTIES']["DESCRPTION"]['VALUE'];?>
				</p>
				<a class="top__link" href="<?$arResult['PROPERTIES']["LINK"]['VALUE'];?>">
					<span class="top__link-text">Visit brand site</span>
				</a>
			</div>
			<ul class="top__list-awards js-opacity">
                <? foreach ($arResult['PROPERTIES']['COLLECTION_BOOTLE']['VALUE'] as $key => $value ) {?>
				<li class="top__item-awards">
					<picture>
                            <?
                            $awards_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_png']['VALUE'], array('width'=> 214,'height' => 165), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_png']['VALUE'], array('width'=> 427,'height' => 330), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_webp']['VALUE'], array('width'=> 214,'height' => 165), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_webp']['VALUE'], array('width'=> 427,'height' => 330), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_m_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_m_png']['VALUE'], array('width'=> 107,'height' => 83), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_m_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_m_png']['VALUE'], array('width'=> 214,'height' => 165), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_m_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_m_webp']['VALUE'], array('width'=> 107,'height' => 83), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $awards_m_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['AWARDS_m_webp']['VALUE'], array('width'=> 214,'height' => 165), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            ?>
							<source srcset="<?=$awards_png_1x['src']?> 1x, <?=$awards_png_2x['src']?> 2x" type="image/png" />
							<source srcset="<?=$awards_webp_1x['src']?> 1x, <?=$awards_webp_2x['src']?> 2x" type="image/webp" />
							<source srcset="<?=$awards_m_png_1x['src']?> 1x, <?=$awards_m_png_2x['src']?> 2x" media="(max-width: 639px)" type="image/png" />
							<source srcset="<?=$awards_m_webp_1x['src']?> 1x, <?=$awards_m_webp_2x['src']?> 2x" media="(max-width: 639px)" type="image/webp" />
                            <img src="<?=$awards_png_1x['src']?>" alt="" />
					</picture>
				</li>
                <?}?>
			</ul>
			<div class="top__img-item js-anim-size">
				<div class="top__img-wrapper">
					<div class="top__picture">                        
                    <? foreach ($arResult['PROPERTIES']['COLLECTION_BOOTLE']['VALUE'] as $key => $value ) { 
                        if ($key==0){?>
						<picture>
                            <?
                            $bottle_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_png']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_png']['VALUE'], array('width'=> 453,'height' => 1600), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_webp']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_webp']['VALUE'], array('width'=> 453,'height' => 1600), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_m_png_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_png']['VALUE'], array('width'=> 113,'height' => 339), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_m_png_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_png']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_m_webp_1x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_webp']['VALUE'], array('width'=> 113,'height' => 339), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            $bottle_m_webp_2x = CFile::ResizeImageGet($value['SUB_VALUES']['BOTTLE_m_webp']['VALUE'], array('width'=> 227,'height' => 802), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
                            ?>
							<source srcset="<?=$bottle_png_1x['src']?> 1x, <?=$bottle_png_2x['src']?> 2x" type="image/png" />
							<source srcset="<?=$bottle_webp_1x['src']?> 1x, <?=$bottle_webp_2x['src']?> 2x" type="image/webp" />
							<source srcset="<?=$bottle_m_png_1x['src']?> 1x, <?=$bottle_m_png_2x['src']?> 2x" media="(max-width: 639px)" type="image/png" />
							<source srcset="<?=$bottle_m_webp_1x['src']?> 1x, <?=$bottle_m_webp_2x['src']?> 2x" media="(max-width: 639px)" type="image/webp" />
                            <img src="<?=$bottle_png_1x['src']?>" alt="" />
						</picture>
                        <?}
                    }?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<button class="top__scroll-btn js-scroll-btn">
		<svg class="top__scroll-icon" width="144" height="50">
			<use href="/f/img/sprite.svg#flag"></use>
		</svg>
	</button>
</section>
