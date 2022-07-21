import * as flsFunctions from "./modules/functions.js";
import "./modules/slick.js";

flsFunctions.isWebp();

flsFunctions.ibg();

let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.header__logo');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
    if($(window).width() <= 990){
        logo.classList.toggle('active');
    }
}

$(function (){
    $('.top__slider').slick({
        dots: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/top/prev.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/top/next.svg" alt="arrow right"></button>',
        responsive: [{
            breakpoint: 560,
            settings: {
                autoplay: true,
                autoplaySpeed: 5000,
                prevArrow: false,
                nextArrow: false,
                dots: false
              }
            }
        ]
    });
});
