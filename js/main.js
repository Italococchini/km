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

	$('.km-galeria-cuidador-slider').bxSlider({
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

	$(document).on("click", '.show-map-mobile', function ( e ) {
		e.preventDefault();
		$(".km-map-content").addClass("showMap");
	});

	$(document).on("click", '.km-map-content .km-map-close', function ( e ) {
		e.preventDefault();
		$(".km-map-content").removeClass("showMap");
	});

	$(document).on("click", '.page-reservation .km-quantity .km-minus', function ( e ) {
		e.preventDefault();
		var el = $(this);
		var div = el.parent();
		var span = $(".km-number", div);
		if ( span.html() > 1 ) {
			span.html( span.html() - 1 );
		}

		if ( span.html() <= 1 ) {
			el.addClass("disabled");
		}
	});

	$(document).on("click", '.page-reservation .km-quantity .km-plus', function ( e ) {
		e.preventDefault();
		var el = $(this);
		var div = el.parent();
		var span = $(".km-number", div);
		var minus = $(".km-minus", div);
		span.html( parseInt(span.html()) + 1 );

		if ( span.html() > 1 ) {
			minus.removeClass("disabled");
		}
	});

	$(document).on("change", '.page-reservation .km-height-select', function ( e ) {
		e.preventDefault();
		var el = $(this);
		el.removeClass("small");
		el.removeClass("medium");
		el.removeClass("large");
		el.removeClass("extra-large");

		el.addClass( el.val() );
	});

	$(document).on("click", '.page-reservation .optionCheckout', function ( e ) {
		e.preventDefault();
		var el = $(this);
		el.toggleClass("active");
	});

	$(document).on("click", '.page-reservation .km-method-paid-options .km-method-paid-option', function ( e ) {
		e.preventDefault();
		var el = $(this);
		$(".km-method-paid-option", el.parent()).removeClass("active");

		el.addClass("active");

		$(".km-end-btn-form-disabled").hide();
		$(".km-end-btn-form-enabled").show();

		if ( el.hasClass("km-option-deposit") ) {
			$(".page-reservation .km-detail-paid-deposit").slideDown("fast");
		} else {
			$(".page-reservation .km-detail-paid-deposit").slideUp("fast");
		}
	});

	$(document).on("click", '.page-reservation .list-dropdown .km-tab-link', function ( e ) {
		e.preventDefault();
		var el = $(this);
		$(".km-tab-content", el.parent()).slideToggle("fast");
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

	$(document).on("focus", "input.input-label-placeholder", function(){
		$(this).parent().addClass("focus");
	}).on("blur", "input.input-label-placeholder", function(){
		let i = $(this);
		if ( i.val() !== "" ) $(this).parent().addClass("focused");
		else $(this).parent().removeClass("focused");

		$(this).parent().removeClass("focus");
	});
});
