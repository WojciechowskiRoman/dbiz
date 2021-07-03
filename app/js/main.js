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

    let list = document.querySelectorAll('.portfolio__button');
    let item = document.querySelectorAll('.course');

    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for(let j = 0; j < list.length; j++) {
                list[j].classList.remove('portfolio__button--active')
            }
            this.classList.add('portfolio__button--active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k < item.length; k++) {
                item[k].classList.remove('active');
                item[k].classList.add('hide');

                if(item[k].getAttribute('data-item') == dataFilter ||
                dataFilter == 'all') {
                    item[k].classList.remove('hide');
                    item[k].classList.add('active');
                }
            }
        });
    }

    $(".project__rating").rateYo({
        starWidth: "15px",
        readOnly: true,
        spacing: "4px",
      });

    $('.blog__pagination-item').on('click', function() {
        $('.blog__pagination-item').removeClass('blog__pagination-item--active');
        $(this).toggleClass('blog__pagination-item--active');
    });
});