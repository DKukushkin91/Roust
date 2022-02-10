<?
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
global $APPLICATION;
global $elementId;
?>
<?
if(!empty($elementId)){
	$page_name ='brands-item';
	$DataThisProduct = Products::getDataProductByCode($elementId);
	$DataThisProduct_img = CFile::ResizeImageGet($DataThisProduct["BACKGROUND"], array(), BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);
}else{
	switch ($APPLICATION->GetCurPage(false)) {
		case '/';
			$page_name ='main-page';
		break;
		case "/about-us/":
			$page_name ='about-us';
		break;
		case "/brands/":
			$page_name ='brands';
		break;
		case "/career/":
			$page_name ='career';
		break;
		case "/contacts/":
			$page_name ='contacts';
		break;
		case "/investors/":
			$page_name ='investors';
		break;
		case "/media/":
			$page_name ='media';
		break;
		case "/partnership/":
			$page_name ='partnership';
		break;
		case "/social-projects/":
			$page_name ='social-projects';
		break;
		default:   
			$page_name ='media';                 
		break;
	}
}?>
<!DOCTYPE html>
<html lang="ru">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta property="og:site_name" content="Боль в спине">
	<meta property="og:url" content="<? echo " https://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>"> 
	<link rel="canonical" href="<? echo " https://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>"> 

	<? // получить СЕО данные текущей страницы 
	$seoTextThisPage=Helpers::getSeoTextsPageByUrlPage($APPLICATION->GetCurDir());
	if(!empty($seoTextThisPage['title'])){ ?>
	<title><?=$seoTextThisPage['title']?></title>
	<meta property="og:title" content="<?=$seoTextThisPage['title']?>">
	<?} else {?>
	<title>
		<?$APPLICATION->ShowTitle()?>
	</title>
	<meta property="og:title" content="<?$APPLICATION->ShowTitle()?>">
	<?}
    if(!empty($seoTextThisPage['description'])){ ?>
	<meta name="description" content="<?=$seoTextThisPage['description']?>">
	<meta property="og:description" content="<?=$seoTextThisPage['description']?>">
	<?} else {
        $APPLICATION->ShowMeta("description");?>
	<meta property="og:description" content="<?=$APPLICATION->ShowProperty('description');?>">
	<?}
    if(!empty($seoTextThisPage['keywords'])){ ?>
	<meta name="keywords" content="<?=$seoTextThisPage['keywords']?>">
	<?} else {$APPLICATION->ShowMeta("keywords");}
    if(!empty($seoTextThisPage['image'])){ 
		$img_path = CFile::GetPath($seoTextThisPage['image']);?>
	<meta property="og:image" content="<? echo " https://".$_SERVER['SERVER_NAME'].$img_path?>"> <?} else {?>
	<meta property="og:image" content="<? echo " https://".$_SERVER['SERVER_NAME']."/f/img/snippet-537-240.png";?>" />
	<?}?>

	<link href="/f/css/main.css" type="text/css" rel="stylesheet">
	<link href="/f/css/vendor.css" type="text/css" rel="stylesheet">

	<?      
    $APPLICATION->ShowCSS();
    $APPLICATION->ShowHeadStrings();
    CJSCore::Init();
	?>
</head>

<body lang="ru-RU">
	<div class="box">
		<div class="box__content box__content--<?=$page_name?>">
			<?if(!empty($elementId)){?>
        	<div class="box__img"><img src="<?$DataThisProduct_img['src']?>" alt=""></div>
			<?}?>
			<div class="box__top box__top--<?=$page_name?>">
				<header class="header js-animate-header">
					<div class="container header__container">
						<div class="header__wrap <?=$page_name?>__header-wrap">
							<div class="header__logo-wrap"><a class="header__link" href="/"><img src="/f/img/roust-logo.svg"></a>
							</div>
							<button class="header__burger-btn js-burger-btn"><span class="header__burger-menu"></span></button>
							<div class="header__content-box">
								<div class="header__search">
									<button class="header__search-btn js-search-btn"><span class="header__search-text">Search</span>
										<svg class="header__search-icon" width="16" height="16">
											<use href="/f/img/sprite.svg#search"></use>
										</svg>
									</button>
								</div>
								<nav class="nav">
									<?
                                $APPLICATION->IncludeComponent(
                                    'bitrix:menu',
                                    'top-menu',
                                    array(
                                        'ROOT_MENU_TYPE' => 'top',
                                        'CACHE_TYPE' => 'Y',
                                        'MENU_CACHE_TIME' => 604800,
                                        "SET_STATUS_404" => "Y",
                                        "SHOW_404" => "Y",
                                    ),
                                    false
                                );
                                ?>
								</nav>
							</div>
						</div>
					</div>
				</header>
				<?
				if(!empty($elementId)){?>
				<section class="top brands-item__top-section">
					<div class="container brands-item__top-container js-brands-item-container">
						<div class="top__wrap top__wrap--brands-item">
							<nav class="breadcrumbs js-opacity brands-item__breadcrumbs">
								<? 
								$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
									"START_FROM" => "1",
									"PATH" => "",
									"SITE_ID" => "s1"
									)
								); ?>
							</nav>
							<div class="top__content top__content--brands-item js-opacity">
								<h1 class="top__title top__title--brands-item"><?$DataThisProduct["NAME"];?></h1>
								<p class="top__text top__text--brands-item"><?$DataThisProduct["DESCRPTION"];?></p>
								<a class="top__link" href="<?$DataThisProduct["LINK"];?>">
									<span class="top__link-text">Visit brand site</span>
								</a>
							</div>
							<ul class="top__list-awards js-opacity">
								<li class="top__item-awards">
									<picture>
										<source
											srcset="/f/img/responsive/m-Awards-rs1@1x.webp 1x, /f/img/responsive/m-Awards-rs1@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-Awards-rs1@1x.png 1x, /f/img/responsive/Awards-rs1@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/Awards-rs1@1x.webp 1x, /f/img/responsive/Awards-rs1@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/Awards-rs1@1x.png 1x, /f/img/responsive/Awards-rs1@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/Awards-rs1@1x.png" alt="" />
									</picture>
								</li>
								<li class="top__item-awards">
									<picture>
										<source
											srcset="/f/img/responsive/m-awards-rs2@1x.webp 1x, /f/img/responsive/m-awards-rs2@2x.webp 2x"
											media="(max-width: 639px)" type="image/webp" />
										<source srcset="/f/img/responsive/m-awards-rs2@1x.png 1x, /f/img/responsive/awards-rs2@2x.png 2x"
											media="(max-width: 639px)" type="image/png" />
										<source srcset="/f/img/responsive/awards-rs2@1x.webp 1x, /f/img/responsive/awards-rs2@2x.webp 2x"
											type="image/webp" />
										<source srcset="/f/img/responsive/awards-rs2@1x.png 1x, /f/img/responsive/awards-rs2@2x.png 2x"
											type="image/png" /><img src="/f/img/responsive/awards-rs2@1x.png" alt="" />
									</picture>
								</li>
							</ul>
							<div class="top__img-item js-anim-size">
								<div class="top__img-wrapper">
									<div class="top__picture">
										<picture>
											<source
												srcset="/f/img/responsive/m-rs-bottle@1x.webp 1x, /f/img/responsive/m-rs-bottle@2x.webp 2x"
												media="(max-width: 639px)" type="image/webp" />
											<source srcset="/f/img/responsive/m-rs-bottle@1x.png 1x, /f/img/responsive/rs-bottle@2x.png 2x"
												media="(max-width: 639px)" type="image/png" />
											<source srcset="/f/img/responsive/rs-bottle@1x.webp 1x, /f/img/responsive/rs-bottle@2x.webp 2x"
												type="image/webp" />
											<source srcset="/f/img/responsive/rs-bottle@1x.png 1x, /f/img/responsive/rs-bottle@2x.png 2x"
												type="image/png" /><img src="/f/img/responsive/rs-bottle@1x.png" alt="" />
										</picture>
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
				<?}
				elseif($page_name=="main-page"){
				}
				else{
					$page_header = "header_".$page_name;
					$APPLICATION->IncludeComponent(
						'bitrix:news.detail',
						'include_html_from_iblock',
						array(
							'IBLOCK_ID' => CIBlockTools::GetIBlockId('content_page'),
							'ELEMENT_CODE' => $page_header,
							'CACHE_TIPE' => 'Y',
							'CACHE_TIME' => 604800,
							"SET_STATUS_404" => "Y",
							"SHOW_404" => "Y",
					)
					); 
				}
                ?>




			</div>
			<main class="main main--<?=$page_name?>">
