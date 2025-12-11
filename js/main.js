console.log("Сайт кафедри завантажено успішно!");

$(document).ready(function () {

    $('.menu-toggle').on('click', function () {
        $('.nav-menu').toggleClass('show');
    });

    $('.language-switcher .ukr a').on('click', function (e) {
        e.preventDefault();
        $('.language-switcher .ukr a').addClass('is-active');
        $('.language-switcher .eng a').removeClass('is-active');
    });

    $('.language-switcher .eng a').on('click', function (e) {
        e.preventDefault();
        $('.language-switcher .eng a').addClass('is-active');
        $('.language-switcher .ukr a').removeClass('is-active');
    });

    const $slickElement = $('.news-cards');

    $slickElement.not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        cssEase: 'ease-in-out',
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            }
        ]
    });

    const $reviewsSlider = $('#testimonials .cards-wrapper');

    $reviewsSlider.not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        cssEase: 'ease-in-out',
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            }
        ]
    });
});