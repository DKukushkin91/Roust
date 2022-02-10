<?php

class Products
{    
    /**
     * getAllProducts
     *  - получить данные по всем продуктам
     * 
     * @return array
     */
    private function getAllProducts(){
        
        $result = array();

        $iblockId = CIBlockTools::GetIBlockId('brands');
        $cacheTime = 604800;
        $cacheID = 'getAllProducts'.$iblockId;
        $cachePath = "/getAllProducts/";
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
                array( 'ID', 'CODE', 'PROPERTY_BACKGROUND' )
            );
            while($arRes = $res->Fetch()){
                $result[ $arRes['CODE'] ] = array(
                    'CODE' => $arRes['CODE'],
                    'ID' => $arRes['ID'],
                    'BACKGROUND' => $arRes['PROPERTY_BACKGROUND_VALUE'],
                );
            }
            $obCache->EndDataCache($result);
        }
        return $result;
    }
    
    /**
     * getDataProductByCode
     *  - получить данные а продукте по коду продукта
     * 
     * @param string $codeProduct - код продукта
     * @return array
     */
    public static function getDataProductByCode($urlProduct){        
        $result = array();
        $pos = strpos($urlProduct, '/', 14);
        $codeProduct = substr($urlProduct, $pos+1, -1);
        // получить данные СЕО по всем страницам
        $allDataProducts = self::getAllProducts();
        if(!empty($allDataProducts[$codeProduct])){
            $result = $allDataProducts[$codeProduct];
        }
        return $result;
    }
}
