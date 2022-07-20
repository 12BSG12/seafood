import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

flsFunctions.ibg();

let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.header__logo');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
    if($(window).width() <= 580){
        logo.classList.toggle('active');
    }
}
