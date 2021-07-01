$(function() {

    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       false,       
        live:         true   
      }
    );

    wow.init();

    $('.header__burger, menu__link').on('click', function() {
        if(window.innerWidth <= 768) {
            $('.header__burger').toggleClass('header__burger--active');
            $('.menu__list').toggleClass('menu__list--active');
            $('.body').toggleClass('lock');
            $('.overflow').toggleClass('overflow--active');
        }
    });

    $('.header__list').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.review__list').slick({
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '0',
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