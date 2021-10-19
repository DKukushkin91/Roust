<?

use \Bitrix\Main\Loader;

//автоподключение классов
Loader::registerAutoLoadClasses(null,
	[
			'CIBlockTools'									 => '/local/classes/iblockTools.php',
			'Helpers'										 => '/local/classes/Helpers.php',
	]
);
