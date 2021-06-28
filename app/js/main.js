$(function() {
    $('.header__list').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.award__link').on('click', function(e) {
        e.preventDefault();
        $('.award__link').removeClass('award__link--active');
        $(this).addClass('award__link--active');

        $('.award__item').fadeOut().css('display', 'none');
        $($(this).attr('href')).fadeIn().css('display', 'flex');
    });
});