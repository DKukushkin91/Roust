<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Web\Json;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 *
 *  _________________________________________________________________________
 * |	Attention!
 * |	The following comments are for system use
 * |	and are required for the component to work correctly in ajax mode:
 * |	<!-- items-container -->
 * |	<!-- pagination-container -->
 * |	<!-- component-end -->
 */

$this->setFrameMode(true);

?>

<ul class="brands__list js-catalog-list">
	<?
    foreach ($arResult['ITEMS'] as $value)
    {
        ?>
	<li class="brands__item"><a class="catalog-brands__link" href="<?=$value["DETAIL_PAGE_URL"];?>"></a>
		<div class="catalog-brands__item-content">
			<h2 class="catalog-brands__item-title"><?=$value["NAME"];?></h2>
		</div>
		<div class="brands__img"><img src="<?=$value["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$value["NAME"];?>"></div>
	</li>
	<?
    }
    ?>
</ul>
