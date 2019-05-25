var link = document.querySelector('.nav__button');
var link2 = document.querySelector('.header__button');
var link3 = document.querySelector('.exp__button');
var modal = document.querySelector('.modal');
var close = document.querySelector('.modal__close-btn');

link3.addEventListener('click', function () {
    modal.classList.remove('modal-hide');
});

link2.addEventListener('click', function () {
    modal.classList.remove('modal-hide');
});

link.addEventListener('click', function () {
    modal.classList.remove('modal-hide');
});

close.addEventListener('click', function () {
    modal.classList.add('modal-hide');
});

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        modal.classList.add("modal-hide");
        ajax.classList.add('modal-hide');
    }
};