$(document).ready(function() {
    $('.burger-menu').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
        e.preventDefault();
        $('.header').toggleClass('burger-menu-active');// .header это селектор на который будет довешиваться класс nav-active при нажатии на бургер кнопку
    });

    $(function() {
        $(window).scroll(function() {
            var winTop = $(window).scrollTop();
            if (winTop >= 30) {
                $("header, .burger-menu-nav, .navigation li a").addClass("default");
            } else {
                $("header, .burger-menu-nav, .navigation li a").removeClass("default");
            } //if-else
        }); //win func.
    }); //ready func.
});

/*function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu-button');
	let links = menu.find('.burger-menu-link');
	let overlay = menu.find('.burger-menu-overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());


	function toggleMenu() {
		menu.toggleClass('.burger-menu-active');

		if(menu.hasClass('.burger-menu-active')) {
			$('body').css('overflow', 'hidden');
		}else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');*/

/* $(".burger-menu").on('click',function(){
    $(this).find(".burger-menu-button").toggleClass(".burger-menu-active");
     $(this).find(".burger-menu-nav").toggleClass(".burger-menu-active");
     $(this).find(".burger-menu-overlay").toggleClass(".burger-menu-active");
     $("body").toggleClass("body-hidden");
    });

	$('.burger-menu-button').on('click', (e) => {
			e.preventDefault();
	});*/



/*$(function () {
            $('.burger-menu').click(function () {
                $('.burger-menu').toggleClass('burger-menu-active');
            })
            $(document).click(function (event) {
                if ($(event.target).closest(".burger-menu").
                    length ) return;
                $('.burger-menu').removeClass('burger-menu-active');
                event.stopPropagation();
            });
        })*/
