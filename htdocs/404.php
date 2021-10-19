<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");

?>

<section class="not-found">
  <div class="page-container">
    <div class="content-wrapper">
      <div class="not-found__wrapper">
        <h1 class="not-found__title">404</h1>
        <div class="not-found__subtitle">Страница не найдена</div>
        <div class="not-found__btn">
          <a class="btn btn_with-arrow btn_not-found" href="/">На главную страницу</a>
        </div>
      </div>
    </div>
  </div>
  <div class="not-found__bg not-found__bg_cat" style="background-image: url('/f/img/not-found/not-found-bg-cat.png');">
  </div>
  <div class="not-found__bg not-found__bg_dog" style="background-image: url('/f/img/not-found/not-found-bg-dog.png');">
  </div>
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>