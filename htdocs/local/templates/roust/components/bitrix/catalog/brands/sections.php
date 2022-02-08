<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);
?>


<section class="brands">
	<div class="container brands__container">
		<div class="brands__btns-wrap js-btns-wrap">
			<button class="brands__btn js-brands-btn"><span class="brands__btn-text">Owned brands</span></button>
			<button class="brands__btn js-brands-btn"><span class="brands__btn-text">Distributed brands</span></button>
		</div>
		<div class="brands__wrap js-list-wrap"></div>
		<p class="brands__sub-text">*EGAIS, 2019 **IMPACT, 2020</p>
	</div>
</section>
