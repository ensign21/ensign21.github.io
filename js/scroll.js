jQuery(document).ready(function () {
    jQuery("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = jQuery(this).attr('href'),
            top = jQuery(id).offset().top;
        jQuery('body,html').animate({ scrollTop: top }, 1000);
    });
});