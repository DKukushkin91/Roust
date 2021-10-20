<?php
$arUrlRewrite=array (
    array (
        'CONDITION' => '#^\\/?\\/mobileapp/jn\\/(.*)\\/.*#',
        'RULE' => 'componentName=$1',
        'ID' => NULL,
        'PATH' => '/bitrix/services/mobileapp/jn.php',
        'SORT' => 100,
    ),
    array (
        'CONDITION' => '#^/bitrix/services/ymarket/#',
        'RULE' => '',
        'ID' => '',
        'PATH' => '/bitrix/services/ymarket/index.php',
        'SORT' => 100,
    ),

    
);
