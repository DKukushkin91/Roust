<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
if (!empty($arResult)){ ?>
    <ul class="footer__list">
        <? foreach ($arResult as $item){?>     
            <li class="footer__item"><a target="_blank" class="footer__link <?=(($item['SELECTED'] == 1)? 'is-active' : '');?>" href="<?=$item['LINK'];?>"><?= $item['TEXT']; ?></a></li>            
        <?}?>       
    </ul>
<?}?>