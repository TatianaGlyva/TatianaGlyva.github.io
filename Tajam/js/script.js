$(document).ready(function() {
    $('.main-slider').slick({
        arrows: false,
        dots: true
    });

      $('.hamburher-menu').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
        e.preventDefault();
        $(this).find('.hamburher-icon').toggleClass("open");
        $('.header').toggleClass('hamburher-menu-active');// .header это селектор на который будет довешиваться класс nav-active при нажатии на бургер кнопку
    });

      $('.header').removeClass('default');
    $(window).scroll(function () {
        if ($(this).scrollTop()>20) {
            $('.header').addClass('default').fadeIn('fast');
        } else {
            $('.header').removeClass('default').fadeIn('fast');
        }
        
    });
});