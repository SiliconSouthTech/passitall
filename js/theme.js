/*
*============================================
* Table of contents:
---------------------------------------------
** On Document Ready
---------------------------------------------
* - Bootstrap Essentials
* - Video Background
* - Adjust Header Menu On Scroll Down
* - Smooth Scrolling Effect
* - Adjusting Hero Area Height
* - Adjust App Download Section
* - Adjust Call To Action Area
* - Init Waypoint Js
* - App Download Carousel
* - Testimonial Carousel
* - Screenshot Carousel Slider
---------------------------------------------
** On Window Load
---------------------------------------------
* - Preloader
* - Video background Essentials
*============================================
*/
// On Window Load
$(window).load(function(){

// Preloader
	$('.preloader-wrap').fadeOut();    
  	$('.preloader-wrap').delay(350).fadeOut('slow');    
  	$('body').delay(550);

});

// Document Ready Function
(function($) {
"use strict";

// Bootstrap Essentials
  	$(".embed-responsive iframe").addClass("embed-responsive-item");
  	$(".carousel-inner .item:first-child").addClass("active");     
  	$('[data-toggle="tooltip"]').tooltip();

// Video Background
  	scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

// Adjust Header Menu On Scroll Down
  	$(window).scroll(function() {
	  var wScroll = $(this).scrollTop();
	  var wh = $(window).height();
	  if(wScroll > 40) {
	    $(".topbar-area").addClass('dark-header-area');
	    $(".topbar-area-lite").addClass('lite-header-area');
	  }else { 
	    $(".topbar-area").removeClass('dark-header-area');
	    $(".topbar-area-lite").removeClass('lite-header-area');
	  }
	});

// Smooth Scrolling Effect
  	$('.smoothscroll').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;

	    $('html, body').stop().animate({
	        'scrollTop': $(target).offset().top - 50
	    }, 1200);
	});

// Adjusting Hero Area Height
  	var wh = $(window).height();
  	$('.hero-area').css('height', wh + 'px');
  	$('.hero-left').css('height', wh + 'px');
  	$('.hero-right').css('height', wh + 'px');

// Adjust App Download Section
	var ads_height = $('.app-download-screen').height();
	$('.app-download-intro').css('height', ads_height + 'px');

// Adjust Call To Action Area
	var cta_height = $('.call-to-action').height() + 60;
	var cta_mt = -(cta_height/2 + 40);
	$('.call-to-action').css('marginTop', cta_mt + 'px');

// Init Waypoint Js
	function onScrollInit( items, trigger ) {
  	items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function(direction) {
	          if(direction == "down") {
	          	osElement.addClass('animated').addClass(osAnimationClass);
	          }
          },{
              triggerOnce: true,
              offset: '90%'
        });
  	});
	}

 	onScrollInit( $('.way') );
 	onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

// App Download Carousel
  	function app_download_carousel() {
	  	var owl = $("#app-download-screen");
	    owl.owlCarousel({
	        loop:true,
		    margin:10,
		    responsiveClass:true,
		    navigation: true,
		    items: 1,
		    animateOut: 'rollOut',
		    addClassActive: true,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 5000,
		    responsive:{
		    }
	    });
	}
	app_download_carousel();


// Testimonial Carousel
  	function testimonial_carousel() {
	  var owl = $("#testimonial-carousel");
	    owl.owlCarousel({
	        loop:true,
		    margin:10,
		    responsiveClass:true,
		    navigation: true,
		    items: 3,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 4000,
		    center: true,
		    responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                760:{
                    items:3
                }
            }
	    });
	}
	testimonial_carousel();

// Screenshot Carousel Slider
	function screenshot_carousel() {
		var element = document.querySelector('.example');

		var slider = new Bee3D(element, {
			  	effect: 'coverflow',
			  	listeners: {
			      	keys: true,
			      	touches: true
			  	},
			  	navigation: {
			      	enabled: true
			  	},
			  	loop: {
			      	enabled: true,
			      	continuous: true
			  	}
		});
	}
	screenshot_carousel();

// Video background Essentials
function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height, 10) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;
    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');
        $(this).width(windowWidth);
        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
            $(this).width(videoWidth).height(videoHeight);
        }
        $('.hero-area .video-container video').addClass('fadeIn animated');
    });
}
})(jQuery);

