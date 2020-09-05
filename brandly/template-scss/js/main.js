$(document).ready(function() {
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,

        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }]
    });

    $('.features-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    });

    $('.preview-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    });

    $('.hamburher-menu').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
        e.preventDefault();
        $(this).find('.hamburher-icon').toggleClass("open");
        $('.header').toggleClass('hamburher-menu-active'); // .header это селектор на который будет довешиваться класс nav-active при нажатии на бургер кнопку
    });


    $('.header').removeClass('default');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('default').fadeIn('fast');
        } else {
            $('.header').removeClass('default').fadeIn('fast');
        }

    });


    var tabs = $('#tabs');
    $('.tabs-box > div', tabs).each(function(i) {
        if (i != 0) $(this).hide(0);
    });
    tabs.on('click', '.li-tab a', function(e) {
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.li-tab a', tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-box > div', tabs).hide(0);
        $(tabId).show();
    });

});