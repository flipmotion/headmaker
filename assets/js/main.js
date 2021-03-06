 $(document).ready(function() {
 	window.addEventListener("scroll", scrolling);
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
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});

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
			myPlacemark = new ymaps.Placemark([55.784380, 37.636997], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				''// '<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
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
 
 });


 function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#thx').modal('show');
		$(form).resetForm();
	});
}

function scrolling(){

	var scrolled = document.documentElement.scrollTop || window.pageYOffset, 
		header = document.querySelector('.header-lvl-2'),
		headerHeight = header.clientHeight;
		if(0 < scrolled < headerHeight){
			var j = scrolled;
			if (j > headerHeight){
				j = headerHeight;
			}
			header.style.marginTop = -j+'px';
		}else{
			header.style.marginTop = 0+'px';
		}
}
