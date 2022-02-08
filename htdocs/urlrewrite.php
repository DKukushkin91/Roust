<?php
$arUrlRewrite=array (
  0 => 
  array (
    'CONDITION' => '#^\\/?\\/mobileapp/jn\\/(.*)\\/.*#',
    'RULE' => 'componentName=$1',
    'ID' => NULL,
    'PATH' => '/bitrix/services/mobileapp/jn.php',
    'SORT' => 50,
  ),
  1 => 
  array (
    'CONDITION' => '#^/bitrix/services/ymarket/#',
    'RULE' => '',
    'ID' => '',
    'PATH' => '/bitrix/services/ymarket/index.php',
    'SORT' => 50,
  ),
  2 => 
  array (
    'CONDITION' => '#^/media/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/media/index.php',
    'SORT' => 100,
  ),
  3 => 
  array (
    'CONDITION' => '#^/brands/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/brands/index.php',
    'SORT' => 200,
  ),
);
