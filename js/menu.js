var btnMenu = document.querySelector('.header__btn-menu');
var menu = document.querySelector('.header__mob-menu-list');
var menuClose = document.querySelector('.header__mob-close');

btnMenu.addEventListener('click', function () {
    menu.classList.remove('header__mob-menu-hide');
});

menuClose.addEventListener('click', function () {
    menu.classList.add('header__mob-menu-hide');
});