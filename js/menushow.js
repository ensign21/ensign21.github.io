jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('#header-nav').addClass('fixed');
        }
        else if ($(this).scrollTop() < 550) {
            $('#header-nav').removeClass('fixed');
        }
    });
});