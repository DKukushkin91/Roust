<?

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

if (empty($arResult)) {
	return '';
}

$strReturn = '<ul class="breadcrumbs__list">';
$count = count($arResult);

foreach ($arResult as $key => $arItem) {
	if ($key == $count - 1) {
		$strReturn .= ' <li class="breadcrumbs__item"><span class="breadcrumbs__link">' . $arItem['TITLE'] . '</span></li>';
	} else {
		$strReturn .= ' <li class="breadcrumbs__item"><a href="' . $arItem['LINK'] . '" class="breadcrumbs__link">' . $arItem['TITLE'] . '</a></li>';
	}

}

$strReturn .= '</ul>';
$strReturn .= '<pre>';
$strReturn .= print_r($arResult);
$strReturn .= '</pre>';

return $strReturn;
