function playVideo(e) {
	var el = $(e);
	var p = el.parent().parent().parent();
	$('video', p).get(0).play();
	$('.km-testimonial-text').css('display','none');
	$('.img-testimoniales').css('display','none');
	$('.overlay').css('display','none');
}

function menu(){
	var w = $(window).width();
	if($(this).scrollTop() > 10) {
		$('.bg-transparent').addClass('bg-white');
		$('.navbar-brand img').attr('src', 'images/km-logos/km-logo-negro.png');
		$('.navbar-toggle img').attr('src', 'images/km-navbar-mobile-negro.svg');
		$('.nav li a').css('padding','10px 15px 8px');
		$('.navbar-brand>img').css('height','40px');
		$('.nav li:first-child a').addClass('pd-tb11');
		$('.nav-login').addClass('dnone');
		$('.navbar').css('padding-top', '15px');
		if( w >= 768 ){
			$('a.km-nav-link, .nav-login li a').css('color','black');
		}
	} else {
		$('.bg-transparent').removeClass('bg-white');
		$('.navbar-brand img').attr('src', 'images/km-logos/km-logo.png');
		$('.navbar-toggle img').attr('src', 'images/km-navbar-mobile.svg');
		$('.nav li a').css('padding','19px 15px 15px');
		$('.navbar-brand>img').css('height','60px');
		$('.nav li:first-child a').removeClass('pd-tb11');
		$('.nav-login').removeClass('dnone');
		$('.navbar').css('padding-top', '30px');
		if( w >= 768 ){
			$('a.km-nav-link, .nav-login li a').css('color','white');
		}
	}
}

$(window).resize(function() {
	menu();
});

$(document).ready(function(){
	menu();

	$(window).scroll(function() {
		menu();
	});

	$('.bxslider').bxSlider({
	  buildPager: function(slideIndex){
		switch(slideIndex){
		  case 0:
			return '<img src="images/km-testimoniales/thumbs/testimonial-1.jpg">';
		  case 1:
			return '<img src="images/km-testimoniales/thumbs/testimonial-2.jpg">';
		  case 2:
			return '<img src="images/km-testimoniales/thumbs/testimonial-3.jpg">';
		}
	  }
	});
	$('.km-premium-slider').bxSlider({
	    slideWidth: 200,
	    minSlides: 1,
	    maxSlides: 3,
	    slideMargin: 10
	  });
	$('.km-opcion').on('click', function(e) {
		$(this).toggleClass('km-opcionactivo');
	});

	$('.km-servicio-opcion').on('click', function(e) {
		$(this).toggleClass('km-servicio-opcionactivo');
	});

	var $date_f = $(".date_from");
	var $date_t = $(".date_to");

	$date_f.datepicker({
		language: 'es',
		onSelect: function (fd, date) {
			$date_t.data('datepicker').update('minDate', date);
			$date_t.focus();
		}
	});

	$date_t.datepicker({
		language: 'es',
		onSelect: function (fd, date) {
			$date_f.data('datepicker').update('maxDate', date);
		}
	});
});