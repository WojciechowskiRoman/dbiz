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

        $('.award__item').fadeIn().css('display', 'none');
        $($(this).attr('href')).fadeIn().css('display', 'flex');
    });

    const accordion = document.getElementsByClassName('accordion__item');

    for(i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('accordion__item--active');
        });
    };

    $('.faq__link').on('click', function(e) {
        e.preventDefault();
        $('.faq__link').removeClass('faq__link--active');
        $(this).addClass('faq__link--active');

        $('.faq__item').fadeIn().css('display', 'none');
        $($(this).attr('href')).fadeIn().css('display', 'flex');
    });
});