<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
if (!empty($arResult)){ ?>
    <ul class="nav__list">
        <? foreach ($arResult as $item){?>    
            <li class="nav__item">
                <a class="nav__link <?=(($item['SELECTED'] == 1)? 'is-active' : '');?>" href="<?= $item['LINK']; ?>"><?= $item['TEXT']; ?></a>
            </li>              
        <?}?>       
    </ul>
<?}?>
     