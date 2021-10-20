<?
/**
 * Helpers - подсказки, константы, всё необходимое
 */
class Helpers{
    
    /**
     * getAllSeoText
     *  - получить все СЕО данные всех  страниц, из админки
     * 
     * @return array
     */
    private function getAllSeoText(){
        
        $result = array();

        $iblockId = CIBlockTools::GetIBlockId( 'seo_roust' );
        $cacheTime = 604800;
        $cacheID = 'getAllSeoText_'.$iblockId;
        $cachePath = "/getAllSeoText/";
        $obCache = new CPHPCache();
        
        if ($obCache->InitCache( $cacheTime, $cacheID, $cachePath)) {
            $result = $obCache->GetVars();
        } elseif ($obCache->StartDataCache()) {
        
            CModule::IncludeModule('iblock');
            
            $res = CIBlockElement::GetList(
                array(),
                array(
                    'IBLOCK_ID' => $iblockId,
                    'ACTION' => 'Y'
                ),
                false,
                false,
                array( 'ID', 'CODE', 'PROPERTY_TITLE', 'PROPERTY_DESCRIPTION', 'PROPERTY_KEYWORDS' )
            );
            while($arRes = $res->Fetch()){
                $result[ $arRes['CODE'] ] = array(
                    'title' => $arRes['PROPERTY_TITLE_VALUE'],
                    'description' => $arRes['PROPERTY_DESCRIPTION_VALUE'],
                    'keywords' => $arRes['PROPERTY_KEYWORDS_VALUE']
                );
            }
            $obCache->EndDataCache($result);
        }
        return $result;
    }
    
    /**
     * getSeoTextsPageByUrlPage
     *  - получить СЕО данные для текущей страницы
     * 
     * @param string $urlPage - url текущей страницы
     * @return array
     */
    public static function getSeoTextsPageByUrlPage($urlPage){        
        $result = array();
        // получить данные СЕО по всем страницам
        $allSeoData = self::getAllSeoText();
        if(!empty($allSeoData[$urlPage])){
            $result = $allSeoData[$urlPage];
        }
        return $result;
    }
    
    
    /**
     * show404Page - покажет 404 страницу (без редиректа)
     */
    public static function show404Page(){
        if (!defined("ERROR_404")){
            define("ERROR_404", "Y");
        }

        \CHTTP::setStatus("404 Not Found");

        global $APPLICATION;

        if ($APPLICATION->RestartWorkarea()) {
            require(\Bitrix\Main\Application::getDocumentRoot()."/404.php");
            die();
        }
    }
}
    
