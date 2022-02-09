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


 
function RusEnding($n, $n1, $n2, $n5) {
	if($n >= 11 and $n <= 19) return $n5;
	$n = $n % 10;
	if($n == 1) return $n1;
	if($n >= 2 and $n <= 4) return $n2;
	return $n5;
  } 
?>

<?$product_image = CFile::ResizeImageGet($arResult['PROPERTIES']['PHOTO_FOOD']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);?>
<?$icon_product = CFile::ResizeImageGet($arResult['PROPERTIES']['ICON_VKUS']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);?>

<style>
	.b-product-promo__label:after {
		background-image: url(<?=$icon_product['src']?>);
	}

	/*
	.img-dop:after {
		background-image: url(<?=$product_image['src']?>);
		background-repeat: no-repeat;
		background-position: 0 0;
		content: '';
		position: absolute;
		right: calc(50% - 240px);
		bottom: 0px;
		background-size: 135px auto;
		width: 200px;
		height: 84px;
		
	}
 .img-dop-popup:before {
		background-image: url(<?=$product_image['src']?>);
		background-repeat: no-repeat;
		background-position: 0 0;
		content: '';
		position: absolute;
		right: calc(50% - 240px);
		bottom: -16px;
		background-size: 214px auto;
		width: 221px;
		height: 149px;
	} */
</style>


<?/* всплывающие окна */?>
<?if (!empty($arResult['PROPERTIES']['GALLERY']['VALUE'])){?>
<div class="modal modal_product-gallery" data-modal="{&quot;id&quot;:&quot;product-gallery&quot;}">
	<div class="modal__wrapper" data-modal-wrapper>
		<div class="modal__inner">
			<button class="modal__close" data-modal-close></button>
			<div class="modal__content" data-modal-content>
				<div class="modal__body">
					<div class="product-gallery-slider">
						<div class="product-gallery-slider__wrapper">
							<div class="product-gallery-slider__nav"
								data-content-slider="{&quot;sliderOptions&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesToScroll&quot;:3,&quot;dots&quot;:false,&quot;arrows&quot;:false,&quot;asNavFor&quot;:&quot;.product-gallery-slider__main-list&quot;,&quot;infinite&quot;:false,&quot;vertical&quot;:true,&quot;verticalSwiping&quot;:true,&quot;focusOnSelect&quot;:true,&quot;responsive&quot;:[{&quot;breakpoint&quot;:1023,&quot;settings&quot;:{&quot;vertical&quot;:false,&quot;verticalSwiping&quot;:false,&quot;variableWidth&quot;:true}}]}}">
								<div class="product-gallery-slider__nav-list" data-content-slider-list>
									<?foreach ($arResult['PROPERTIES']['GALLERY']['VALUE'] as $key => $photo)
									{			
									$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
									<div class="product-gallery-slider__nav-item" data-entity="image"
										data-id="<?=$photo['ID']?>">
										<img class="product-gallery-slider__nav-item-img" src="<?=$img['src']?>"
											alt="<?=$photo['NAME']?>" />
									</div>
									<?}?>
								</div>
							</div>
							<div class="product-gallery-slider__main"
								data-content-slider="{&quot;sliderOptions&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesToScroll&quot;:1,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;fade&quot;:true,&quot;adaptiveHeight&quot;:false,&quot;asNavFor&quot;:&quot;.product-gallery-slider__nav-list&quot;,&quot;responsive&quot;:[{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;dots&quot;:true,&quot;arrows&quot;:false}}]}}">
								<div class="product-gallery-slider__main-list" data-content-slider-list>
									<?foreach ($arResult['PROPERTIES']['GALLERY']['VALUE'] as $key => $photo)
									{			
									$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); ?>
									<div class="product-gallery-slider__main-item" data-entity="image"
										data-id="<?=$photo['ID']?>" data-key="<?=$key?>">
										<img class="product-gallery-slider__main-item-img" src="<?=$img['src']?>"
											alt="<?=$photo['NAME']?>" />
									</div>
									<?}?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?}?>
<?/* всплывающие окна */?> 

<?
if ($arResult['PROPERTIES']['BREED_SIZE']['VALUE_XML_ID']=="small"){$breed_size = "мелких пород";}
elseif ($arResult['PROPERTIES']['BREED_SIZE']['VALUE_XML_ID']=="medium"){$breed_size = "средних пород";}
elseif ($arResult['PROPERTIES']['BREED_SIZE']['VALUE_XML_ID']=="big"){$breed_size = "крупных пород";}


$product_type = "";
	if ($arResult['PROPERTIES']['AGE']['VALUE_XML_ID']=="adult"){
		if ($arResult["SECTION"]["CODE"]=="dogs"){
			$product_type = "dog";		
			$product_vkus = "dog";	
			if($arResult['PROPERTIES']['BREED_SIZE']['VALUE_XML_ID']!="all"){$product_type_ru = "взрослых собак ".$breed_size;}
			else{$product_type_ru = "взрослых собак";}
		}
		else {
			$product_type = "cat";	
			$product_vkus = "beef";
			$product_type_ru = "взрослых кошек";
			if($arResult['PROPERTIES']['SPECIAL_NEEDS']['VALUE_XML_ID']=="sterilized"){$product_type_ru = "взрослых стерилизованных кошек";}
			else{$product_type_ru = "взрослых кошек";}
		}
	}
	else {
		if ($arResult["SECTION"]["CODE"]=="dogs")
			{$product_type = "puppy";$product_vkus = "salmon";$product_type_ru = "щенков";}
		else {$product_type = "kitten";$product_vkus = "lamb";$product_type_ru = "котят";}
	}
?>

<div
	class="page-container page-container--<?=$arResult['PROPERTIES']['INGREDIENTS']['VALUE_XML_ID']?> page-container--<?=$product_type?>">
	<div class="product-in-content" id="product-in-content">
		<section class="b-product-promo is-loading">
			<script>
				setTimeout(function() {
					$('.b-product-promo').removeClass('is-loading');
				}, 1000);
			</script>
			<div class="b-product-promo__loader">
				<div class="loader">
					<div class="loader__wrapper"></div>
				</div>
			</div>
			<div class="b-product-promo__wrapper">
				<div class="content-wrapper">
					<div class="b-product-promo__row">
						<div class="b-product-promo__column">
							<div class="b-product-promo__carousel js-carousel-fade">
								<?foreach ($arResult['PROPERTIES']['GALLERY']['VALUE'] as $key => $photo)
							{			
							$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); 
							?>
								<div class="b-product-promo__slide" data-entity="image">
									<div class="b-product-promo__image" data-modal-open="product-gallery">
										<img src="<?=$img['src']?>" alt="<?=$arResult['NAME']?>" />
									</div>
								</div>
								<?}?>
							</div>
						</div>
						<div class="b-product-promo__column">
							<div class="b-product-promo__label">
							<?if(!empty($arResult["PROPERTIES"]["HEADER_NOTE"]["~VALUE"])):?>
								<?echo $arResult["PROPERTIES"]["HEADER_NOTE"]["~VALUE"]["TEXT"];?>								
							<?else:?>
								<?echo $arResult["PROPERTIES"]["TYPE"]["VALUE"].' для '.$product_type_ru;?>	
							<?endif;?>
							</div>
							<h1 class="b-product-promo__title">Nutro™ с <?=$arResult["PROPERTIES"]["NAME_WITH"]["VALUE"]?></h1>
							<a class="b-stars" href="#review" onclick="">
								<?
							$num_of_rev = 0;
							$rating = 0;
							$stars = 0;
							CModule::IncludeModule("iblock");
							$arSelect = Array("ID", "NAME", "PROPERTY_STARS", "PROPERTY_PRODUCT");     
							$arFilter = Array("ID" =>Array(), "IBLOCK_ID" => IntVal(17), "ACTIVE" => "Y"); 
							$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize" => 5000), $arSelect);
							while ($ob = $res->GetNextElement()) {
								$arFields = $ob->GetFields(); 
								if ($arFields["PROPERTY_PRODUCT_VALUE"]==$arResult['ID'])  
								{
									$stars = $arFields["PROPERTY_STARS_VALUE"];
									$rating += $stars;
									$num_of_rev++;
								}
							}	
							//Можно задать рейтинг вручную
							if($rating==0){
								if(!empty($arResult['PROPERTIES']['STARS']['VALUE'])){$rating = $arResult['PROPERTIES']['STARS']['VALUE'];}
							}
							else{$rating = $rating/$num_of_rev;}
							?>
								<div class="b-stars__wrapper">
									<?for ($i = 1; $i <= 5; $i++) {?>
									<div class="b-stars__item <?if ($rating >= $i) echo "is-active";?>">
										<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M16 5.99986H9.88667L8 0.186523L6.11333 5.99986H0L4.94667 9.59319L3.05333 15.4065L8 11.8132L12.9467 15.4065L11.0533 9.59319L16 5.99986Z">
											</path>
										</svg>
									</div>
									<?}?>
								</div>
								<?if($num_of_rev>0){?>
								<div class="b-stars__reviews">
									<?echo $num_of_rev;?>
									<?echo RusEnding($num_of_rev, "отзыв", "отзыва", "отзывов");?>
								</div>
								<?}?>
							</a>

							<div class="b-product-promo__carousel b-product-promo__carousel--mobile js-carousel-fade">
								<?foreach ($arResult['PROPERTIES']['GALLERY']['VALUE'] as $key => $photo)
							{			
							$img = CFile::ResizeImageGet($photo, array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false); 
							?>
								<div class="b-product-promo__slide" data-entity="image">
									<div class="b-product-promo__image" data-modal-open="product-gallery">
										<img src="<?=$img['src']?>" alt="<?=$arResult['NAME']?>" />
									</div>
								</div>
								<?}?>
							</div>
							<div class="b-product-promo__desc"><?=$arResult['DETAIL_TEXT']?></div>
							<button class="b-product-promo__desc-arrow"></button>
							
							<div class="b-product-promo__size" id="product-weight">
								<?if(!empty($arResult['PROPERTIES']['WEIGHT']['VALUE'])):?>
								<div class="b-sizer">
									<div class="b-sizer__wrapper">
										<?
											$arWeight[] = array("weight" => $arResult['PROPERTIES']['WEIGHT']['VALUE'], "url" => "#");
											foreach ($arResult['PROPERTIES']['OTHER_WEIGHT']['VALUE'] as $key => $weight)
											{
												$arSelect = Array("ID", "NAME", "DETAIL_PAGE_URL", "PROPERTY_WEIGHT");     
												$arFilter = Array("ID" => $weight, "IBLOCK_ID" => IntVal(CIBlockTools::GetIBlockId('catalog_nutro')), "ACTIVE" => "Y"); 
												$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize" => 5000), $arSelect);
												while ($ob = $res->GetNextElement()) {
													$arFields = $ob->GetFields(); 
													array_push($arWeight, array("weight" => $arFields["PROPERTY_WEIGHT_VALUE"], "url" => $arFields["DETAIL_PAGE_URL"]));
												}
											}
											function weight_sort($x, $y) {
												return (IntVal($x['g']) > IntVal($y['g']));
											}
                                            
                                            // преобразовать всё в граммы
                                            foreach ($arWeight as $key => $value) {
                                                $g = 0;
                                                if (strpos($value['weight'], 'кг' ) !== false ) { // если килограммы
                                                    $g = preg_replace('/[^0-9,]/', '', $value['weight']);
                                                    $g = str_replace(',', '.', $g);
                                                    $g *= 1000;
                                                } elseif( strpos($value['weight'], 'г' ) !== false  ) { // если граммы
                                                    $g = preg_replace('/[^0-9]/', '', $value['weight']);
                                                } 
                                                $arWeight[$key]['g'] = $g;
                                            }
                                            
											usort ($arWeight, 'weight_sort');
											
                                            foreach ($arWeight as $Weight){?>
										<a href="<?=$Weight["url"]?>" <label class="b-sizer__item js-change-weight" onclick="">
											<input type="radio" name="product-size" <?if ($Weight["url"]=="#"
												)echo 'checked' ;?>/><span><?=$Weight["weight"]?></span>

											</label>
										</a>
										<?}?>
									</div>
								</div>
								<?endif;?>
								<?
								if (!empty($arResult['PROPERTIES']['SHOPS_AND_NEW_URL']['VALUE'][0]['SUB_VALUES']['SHOP']['VALUE'])) {
									$arModalParams = [
											'id' => $arResult['ID'],
											'category' => $product_type,
									];
									?>
									<div class="btn btn--buy ga-click-js" data-ga-category="<?=$arResult['PROPERTIES']['GA_LABEL']['VALUE']?>" data-ga-action="buy" data-modal-open="brands" data-modal-params='<? echo Json::encode($arModalParams); ?>'>КУПИТЬ</div>
									<?
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="b-product-menu b-product-menu_<?=$product_vkus;?> js-product-menu">
			<div class="content-wrapper">
				<div class="b-product-menu__wrapper">
					<a class="b-product-menu__item is-active" href="#about" onclick=""><?=$arResult["PROPERTIES"]["FEED_LINE"]["VALUE"]?></a>
					<a class="b-product-menu__item" href="#consist" onclick="">Состав</a>
					<?
					if (!empty($arResult['PROPERTIES']['SHOPS_AND_NEW_URL']['VALUE'][0]['SUB_VALUES']['SHOP']['VALUE'])) {
						$arModalParams = [
								'id' => $arResult['ID'],
								'category' => $product_type,
						];
						?>
						<a class="b-product-menu__item" data-modal-open="brands" data-modal-params='<? echo Json::encode($arModalParams); ?>'>Купить</a>
						<?
					} else {
						?>
						<a class="b-product-menu__item" href="#feed" onclick="">Как кормить</a>
						<?
					}
					?>
					<?/*			
					<?if($arResult['PROPERTIES']['TYPE']['VALUE_XML_ID']!="wet"):?>
					<a class="b-product-menu__item" href="#tour" onclick="">Переход на&nbsp;Nutro</a>
					<?endif;?>
					<a class="b-product-menu__item" href="#review" onclick="">Отзывы</a>					
					<? if (!empty($arResult['PROPERTIES']['SHOPS_AND_NEW_URL']['VALUE'][0]["SUB_VALUES"]["SHOPS"]["VALUE"])):?>
					<a class="b-product-menu__item" href="#brands" onclick="">Где купить</a>
					<?endif;?>
					*/?>
				</div>
			</div>
		</div>
		<section class="b-product-about js-product-section" id="about">
			<div class="content-wrapper">
				<?$background = CFile::ResizeImageGet($arResult['PROPERTIES']['FEED_PHOTO']['VALUE'], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);?>
				<div class="b-product-about__wrapper" style="background-image: url('<?=$background['src']?>');">
					<h2 class="b-product-about__title">NUTRO™ <?=$arResult["PROPERTIES"]["FEED_LINE"]["VALUE"]?></h2>
					<div class="b-product-about__desc"><?=$arResult["PROPERTIES"]["FEED_TEXT"]["VALUE"]["TEXT"]?></div>
				</div>
			</div>
		</section>
		<section class="b-product-consist js-product-section" id="consist">
			<div class="b-product-consist__wrapper">
				<div class="b-product-consist__image"></div>
				<div class="b-product-consist__row">
					<div class="b-product-consist__column b-product-consist__column--red">
						<h2 class="b-product-consist__title">Состав</h2>
                		<div class="b-product-consist__name"><?=$arResult["PROPERTIES"]["FULL_NAME"]["VALUE"]?></div>
						<div class="b-product-consist__desc">
							<?=$arResult["PROPERTIES"]["STRUCTURE_TEXT"]["VALUE"]["TEXT"]?>
						</div>
					</div>
					<?if ($arResult['PROPERTIES']['PROTRIN']['VALUE'] || $arResult['PROPERTIES']['ASH']['VALUE'] || $arResult['PROPERTIES']['FAT']['VALUE'] || $arResult['PROPERTIES']['CELLULOSE']['VALUE'] || $arResult['PROPERTIES']['VITAMINS_A']['VALUE'] || $arResult['PROPERTIES']['WATER']['VALUE'] || $arResult['PROPERTIES']['OMEGA_6']['VALUE'] || $arResult['PROPERTIES']['CALCIUM']['VALUE'] || $arResult['PROPERTIES']['PHOSPHOURS']['VALUE']){?>
					<div class="b-product-consist__column">
						<div class="b-product-consist__caption">Содержание питательных веществ (100&nbsp;г)</div>
						<div class="b-product-consist__table">
							<?if(!empty($arResult['PROPERTIES']['PROTRIN']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['PROTRIN']['NAME']?>
								</div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['PROTRIN']['VALUE']?></div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['FAT']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column"><?=$arResult['PROPERTIES']['FAT']['NAME']?>
								</div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['FAT']['VALUE']?>
								</div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['ASH']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column"><?=$arResult['PROPERTIES']['ASH']['NAME']?>
								</div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['ASH']['VALUE']?>
								</div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['CELLULOSE']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['CELLULOSE']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['CELLULOSE']['VALUE']?></div>
							</div>
							<?endif;?>

							
							<?if(!empty($arResult['PROPERTIES']['VITAMINS_A']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['VITAMINS_A']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['VITAMINS_A']['VALUE']?></div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['WATER']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['WATER']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['WATER']['VALUE']?></div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['OMEGA_6']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['OMEGA_6']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['OMEGA_6']['VALUE']?></div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['CALCIUM']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['CALCIUM']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['CALCIUM']['VALUE']?></div>
							</div>
							<?endif;?>
							<?if(!empty($arResult['PROPERTIES']['PHOSPHOURS']['VALUE'])):?>
							<div class="b-product-consist__table-row">
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['PHOSPHOURS']['NAME']?></div>
								<div class="b-product-consist__table-column">
									<?=$arResult['PROPERTIES']['PHOSPHOURS']['VALUE']?></div>
							</div>
							<?endif;?>
						</div>
					</div>
					<?}?>
					<?if ($arResult['PROPERTIES']['VITAMINS_E']['VALUE'] || $arResult['PROPERTIES']['MANGANESE']['VALUE'] || $arResult['PROPERTIES']['VITAMINS_D3']['VALUE'] || $arResult['PROPERTIES']['SELENIUM']['VALUE'] || $arResult['PROPERTIES']['COPPER']['VALUE'] || $arResult['PROPERTIES']['ZINC']['VALUE'] || $arResult['PROPERTIES']['IODINE']['VALUE'] || $arResult['PROPERTIES']['IRON']['VALUE']){?>
					<div class="b-product-consist__column b-product-consist__column--grid">
						<div class="b-product-consist__caption">Добавленные<br>вещества (кг)</div>
                		<div class="b-product-consist__flex">
							<div class="b-product-consist__table">
								<?if(!empty($arResult['PROPERTIES']['VITAMINS_E']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['VITAMINS_E']['NAME']?></div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['VITAMINS_E']['VALUE']?></div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['VITAMINS_D3']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['VITAMINS_D3']['NAME']?></div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['VITAMINS_D3']['VALUE']?></div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['COPPER']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['COPPER']['NAME']?>
									</div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['COPPER']['VALUE']?>
									</div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['MANGANESE']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['MANGANESE']['NAME']?></div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['MANGANESE']['VALUE']?></div>
								</div>
								<?endif;?>
							</div>
							<div class="b-product-consist__table">
								<?if(!empty($arResult['PROPERTIES']['IODINE']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['IODINE']['NAME']?>
									</div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['IODINE']['VALUE']?>
									</div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['SELENIUM']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['SELENIUM']['NAME']?></div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['SELENIUM']['VALUE']?></div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['ZINC']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['ZINC']['NAME']?>
									</div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['ZINC']['VALUE']?>
									</div>
								</div>
								<?endif;?>
								<?if(!empty($arResult['PROPERTIES']['IRON']['VALUE'])):?>
								<div class="b-product-consist__table-row">
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['IRON']['NAME']?>
									</div>
									<div class="b-product-consist__table-column">
										<?=$arResult['PROPERTIES']['IRON']['VALUE']?>
									</div>
								</div>
								<?endif;?>
							</div>
						</div>
					</div>
					<?}?>
				</div>
			</div>
		</section>
		<?if(!empty($arResult['PROPERTIES']['CALC']['VALUE'])):?>
		<section class="b-product-feed js-product-section" id="feed">
			<div class="content-wrapper">
				<div class="b-product-feed__wrapper">
					<?
				// Калькулятор
				$APPLICATION->IncludeComponent(
					'bitrix:news.detail',
					'calculator_nutro',
					array(
						'IBLOCK_ID' => CIBlockTools::GetIBlockId('calculator_nutro'),
						'ELEMENT_ID' => $arResult['PROPERTIES']['CALC']['VALUE'],
						'CACHE_TYPE' => 'Y',
						'CACHE_TIME' => 604800,
						'FIELD_CODE' => array('*'),
						'PROPERTY_CODE' => array('*'),
						'GA_LABEL' => $arResult['PROPERTIES']['GA_LABEL']['VALUE']
					)
				);?>
				</div>
			</div>
		</section>
		<?endif;?>
		<?if($arResult['PROPERTIES']['TYPE']['VALUE_XML_ID']!="wet"):?>
		<section class="b-product-tour" id="tour">
			<div class="content-wrapper">
				<div class="b-product-tour__wrapper">
					<?
				// Каталог - Переход на NUTRO
				$APPLICATION->IncludeComponent(
					'bitrix:news.detail',
					'include_html_from_iblock',
					array(
						'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
						'ELEMENT_CODE' => 'catalog-perehod-nutro',
						'CACHE_TYPE' => 'Y',
						'CACHE_TIME' => 604800,
						'FIELD_CODE' => array('*'),
						'PROPERTY_CODE' => array('*')
					)
				);?>
				</div>
			</div>
		</section>
		<?endif;?>
		<section class="b-product-other" id="incart-catalog">
			<div class="content-wrapper">
				<div class="b-product-other__wrapper">
					<h2 class="b-product-other__title">Вам может понравиться</h2>
					<?
				$APPLICATION->IncludeComponent(
					'bitrix:catalog.section',
					'catalog-incart',
					array(
						'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
						'IBLOCK_ID' => $arParams['IBLOCK_ID'],
						'SECTION_ID' => $arResult["IBLOCK_SECTION_ID"],
						'SECTION_CODE' => $arResult['VARIABLES']['SECTION_CODE'],
						'ELEMENT_SORT_FIELD' => 'shows',
						'ELEMENT_SORT_ORDER' => 'desc',
						'ELEMENT_SORT_FIELD2' => 'sort',
						'ELEMENT_SORT_ORDER2' => 'asc',
						'PAGE_ELEMENT_COUNT' => 999,
						'CACHE_TYPE' => 'Y',
						'CACHE_TIME' => 604800,
						'FIELD_CODE' => array('*'),
						'PROPERTY_CODE' => array('*')
					),
					$component
				);
				?>
				</div>
			</div>
		</section>

		<section class="b-review"><a class="anchor" name="review"></a>
			<?
			// Отзывы
			$GLOBALS['filterReviewsproduct'] = [
					'PROPERTY_PRODUCT' => $arResult['ID']
			];

			$APPLICATION->IncludeComponent('bitrix:news.list', 'reviews',
				[
						'PRODUCT_ID'	 => $arResult['ID'],
						'PRODUCT_NAME'	 => $arResult['PROPERTIES']['NAME_WITH']['VALUE'],
						'IBLOCK_ID'		 => CIBlockTools::GetIBlockId('review_nutro'),
						'CACHE_TYPE'	 => 'Y',
						'CACHE_TIME'	 => 604800,
						'FIELD_CODE'	 => [
								'*'
						],
						'PROPERTY_CODE'	 => [
								'*'
						],
						'FILTER_NAME'	 => 'filterReviewsproduct',
						'NEWS_COUNT'	 => 12,
						'SORT_BY1' => 'RAND',
						'SORT_ORDER1' => 'ASC'
				]
			);
			?>
		</section>
	</div>
</div>
