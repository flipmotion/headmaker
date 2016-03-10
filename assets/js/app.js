'use strict';

$(document).ready(function () {

	$('a.smooth').click(function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 0
		}, 1000);
		return false;
	});
	window.addEventListener("scroll", scrolling);
	$(window).resize(function () {
		scrolling();
	});
	$(".owl-carousel").owlCarousel({
		items: 3,
		navigation: true,
		pagination: false,
		// itemsDesktop : [1000,3],
		// itemsDesktopSmall : [800,2],
		// itemsTablet: [500,1],
		nav: true,
		navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"],
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	send();
	var form = $('[data-form="send"]');
	$(form).on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
			console.log('error');
		} else {
			// everything looks good!
			send();
		}
	});

	var input1 = undefined,
	    input2 = undefined,
	    input3 = undefined,
	    input4 = undefined,
	    output = undefined;

	function initI(e) {
		var inp = $('.form-group');
		if (inp.hasClass('has-error')) {
			$('.outputErr .error-block').css({ 'opacity': '1', 'height': 'auto' });
		} else {
			$('.outputErr .error-block').css({ 'opacity': '0', 'height': '0px' });
		}
	}
	initI();
	$('.form-control').on('focus', initI);
	$('.form-control').on('keyup', initI);
	$('.form-control').on('keydown', initI);

	var myMap;
	ymaps.ready(init);
	function init() {
		myMap = new ymaps.Map('map', {
			center: [55.784380, 37.636997],
			zoom: 17,
			controls: []
		}), myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
		myPlacemark = new ymaps.Placemark([55.784380, 37.636997], {
			hintContent: [''].join(''),
			balloonContentBody: ['' // '<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
			].join('')
		}, {
			iconLayout: 'default#image',
			iconImageHref: '',
			iconImageSize: [20, 20],
			iconImageOffset: [-23, -70]
		});
		myMap.geoObjects.add(myPlacemark);
	}
	var map = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7
	});
	scrolling();
});

function send() {
	var form = $('[data-form="send"]');
	form.ajaxForm(function () {
		$('#modal-form').modal('hide');
		$('#thx').modal('show');
	});
}

function scrolling() {

	var scrolled = document.documentElement.scrollTop || window.pageYOffset,
	    header = document.querySelector('.header-lvl-2'),
	    headerHeight = header.clientHeight;
	header.style.marginTop = 0 + 'px';
	if (0 < scrolled < headerHeight) {
		var j = scrolled;
		if (j > headerHeight) {
			j = headerHeight;
		}
		header.style.marginTop = -j + 'px';
	} else {
		header.style.marginTop = 0 + 'px';
	}
}