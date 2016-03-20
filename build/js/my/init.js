 $(document).ready(function() {
 	var labels = {
		'home1' : [
		'Запись на "Маникюр"',
		'Запись на маникюр'
		],
		'profile1' : [
		'Запись на "Педикюр"',
		'Запись на педикюр'
		],
		'messages1' : [
		'Запись на "Моделирование ногтей"',
		'Запись на моделирование ногтей'
		],
		'settings1' : [
		'Запись в салон',
		'Записаться'
		],
		'home' : [
		'Запись на "Стрижки и укладки"',
		'Запись на стрижку и укладку'
		],
		'profile' : [
		'Запись на "Окрашивание и колорирование"',
		'Запись на окрашивание и колорирование'
		],
		'messages' : [
		'Запись на "Восстановление волос"',
		'Запись на восстановление волос'
		],
		'settings' : [
		'Запись в "Мужской зал"',
		'Запись в мужской зал'
		],
		'default' : [
		'Запись в салон',
		'Записаться'
		],
	};

	var replaceText = function(event) {
		var index = $(this).attr('aria-controls');
		var label = labels[index][0];
		var button = labels[index][1];

		if (!label){
			label = labels['default'][0];
			button = labels['default'][1];
		};

		$('.form-'+index).text(button);
		$('.form-label').text(label);

		$('#servicef').attr('value', label);
	}
	$("a[role='tab']").on('click', replaceText);
 
	$('#modal-form').on('show.bs.modal', function(e){
		console.log(e.relatedTarget);
		var button = e.relatedTarget,
			text = button.innerHTML;

		document.querySelector('.form-label').innerHTML = text;
		document.querySelector('#servicef').setAttribute('value', text);
	});

 	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 0
		}, 1000);
		return false;
	});
 	window.addEventListener("scroll", scrolling);
 	$( window ).resize(function() {
		 scrolling();
		// $('.header-lvl-2').css({'top':'0px'});
		});
	$(".owl-carousel").owlCarousel({
		items : 3,
		navigation : true,
		pagination: false,
		// itemsDesktop : [1000,3],
		// itemsDesktopSmall : [800,2],
		// itemsTablet: [500,1],
		nav:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
      	],
      	responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
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

	let input1,input2,input3,input4,output;

	function initI (e){
		var inp = $('.form-group');
		if(inp.hasClass('has-error')) {
			$('.outputErr .error-block').css({'opacity': '1','height': 'auto'});
		}
		else {
			$('.outputErr .error-block').css({'opacity': '0','height': '0px'});
		}
	}
	initI();
	$('.form-control').on('focus',initI);
	$('.form-control').on('keyup',initI);
	$('.form-control').on('keydown',initI);

	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.784380, 37.636997],
			zoom: 17,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			var myPlacemark = new ymaps.Placemark([55.7844, 37.636697], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				''// '<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/address.png',
				iconImageSize: [13, 17],
				iconImageOffset: [0, 0]
			});
		myMap.geoObjects.add(myPlacemark);
	}
 		scrolling();
 });


 function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#modal-form-header').modal('hide');
		$('#modal-form').modal('hide');
		$('#thx').modal('show');
	});
}

function scrolling(){

	var scrolled = document.documentElement.scrollTop || window.pageYOffset, 
		header = document.querySelector('.header-lvl-2'),
		headerL = document.querySelector('.header'),
		headerHeight = header.clientHeight;
		if(0 < scrolled < headerHeight){
			var j = scrolled;
			if (j > headerHeight){
				j = headerHeight;
			}
			header.style.top = -j+'px';
		}else{
			header.style.top = 0+'px';
		}
}
