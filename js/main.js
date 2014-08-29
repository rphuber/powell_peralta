$(document).ready(function(){
	$('.slideshow').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		draggable: true,
		fade: true,
		easing: 'linear',
		cssEase: 'ease',
		useCSS: true,
		speed: 3000,
	});

	$('.newsshow').slick({
		centerMode: true,
  		centerPadding: '40px',
  		slidesToShow: 1,
  		arrows: false, 


	});

	$(".owl-carousel").owlCarousel({
		center: true,
		loop:true,
		items:7,
		margin: 25,
	});


	$(window).scroll(function() {    
    if ($(window).scrollTop() > 0) {
        $('.nav-arrow').html("<a href=\"#skatenews\"><h2 class=\"arrow-label\">Sk8 News</h2></a>");
    	}    
	});

	$(window).scroll(function() {    
    if ($(window).scrollTop() > 450) {
        $('.nav-arrow').html("<a href=\"#skaters\"><h2 class=\"arrow-label\">Skaters</h2></a>");
    	}    
	});

	$(window).scroll(function() {    
    if ($(window).scrollTop() > 925) {
        $('.nav-arrow').html("<a href=\"#boards\"><h2 class=\"arrow-label\">Skate Boards</h2></a>");
    	}    
	});

	$(window).scroll(function() {    
    if ($(window).scrollTop() > 1225) {
        $('.nav-arrow').html("<a href=\"#contact\"><h2 class=\"arrow-label\">Contact Us</h2></a>");
    	}    
	});

	$('[data-toggle=bstooltip]').tooltip();

	$('[data-toggle=bspopover]').popover();

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

});