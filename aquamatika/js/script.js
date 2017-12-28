$(document).ready(function(){

	$(window).on('resize', function(){
		previewSizes();
	});

	/****** preview catalog *********/

	function previewSizes() {
		$('.preview-item').each(function(){
			if (window.innerWidth>960) {
				qq = $('.container').width()*0.16666 - 15;
			} else if ((window.innerWidth <= 960) && (window.innerWidth > 550))  {
				qq = $('.container').width()*0.3333 - 10;
			} else if ((window.innerWidth <= 550) && (window.innerWidth > 480)) {
				qq = $('.container').width()*0.50 - 10;
			} else if (window.innerWidth <= 480) {
				qq = $('.container').width();
			} 
			
			$(this).find('.preview').height(qq);
			$(this).find('.preview').width(qq);
		});
	}


	// function previewSizes() {
	// 	$('.preview-item').each(function(){
	// 		if ($(window).width()>960) {
	// 			qq = $('.container').width()*0.16666 - 10;
	// 		} else if (($(window).width() <= 960) && ($(window).width() > 550))  {
	// 			qq = $('.container').width()*0.3333 - 10;
	// 		} else if (($(window).width() <= 550) && ($(window).width() > 480)) {
	// 			qq = $('.container').width()*0.50 - 10;
	// 		} else if ($(window).width() <= 480) {
	// 			qq = $('.container').width();
	// 		} 
			
	// 		$(this).find('.preview').height(qq);
	// 		$(this).find('.preview').width(qq);
	// 	});
	// }

	previewSizes();


	$('.preview-item > .preview > a').on('click', function(e){
		e.preventDefault();
		$('.preview-item').removeClass('active');
		$(this).closest('.preview-item').addClass('active');
	});

	$('.close-preview').on('click', function(e){
		e.preventDefault();
		$(this).closest('.preview-item').removeClass('active');
	});
	// $('.preview-item').each(function(){
	// 	qq = $(this).width();
	// 	$(this).height(qq);
	// 	$(this).find('.preview').height(qq);
	// 	$('.preview').width(qq);
	// });

	/***** hamburger ******/

	$('.hamburger').on('click', function(){
		$(this).toggleClass('is-active');
		$('.main-menu').slideToggle();
	});

	/**** responsive toggle catalog menu ****/

	$('.side-menu > p').on('click', function(){
		$('.side-menu > ul').slideToggle();
	});

	/***** scroll top btn **********/

	$("#scroll-top").on("click", function (event) { 
		event.preventDefault(); 
		$('body,html').animate({ 
			scrollTop: 0 
		}, 1500); 
	});

	$(window).on('scroll', function(){
		var qq = $(window).scrollTop()
		if (qq > 400) {
			$('#scroll-top').fadeIn();
		} else {
			$('#scroll-top').fadeOut();
		}
		
	});

	/***** side menu ****/

	$('.side-menu > ul > li').on('click', '> a', function(e){
		e.preventDefault();
		// $('.side-menu > ul > li').find('ul').hide();
		// removeClass('active');
		$('.side-menu > ul > li > a').not(this).closest('li').removeClass('active').find('.sub-menu').slideUp();
		$(this).closest('li').toggleClass('active').find('.sub-menu').slideToggle();
		// .addClass('active');
	});

	/*** about us text - show all ***/

	$('.about-us .show-more').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active')
			   .closest('.about-us').find('.text').toggleClass('active')
	})

	/*** popups initialization ***/

	$('.fancybox').fancybox({
		padding: '0',
		scrolling: 'no'
		// helpers	: {
		// 	title	: {
		// 		type: 'outside'
		// 	},
		// 	thumbs	: {
		// 		width	: 50,
		// 		height	: 50
		// 	}
		// }
	});


	/*** sliders initialization ***/

	$('.view-history-slider').slick({
		slidesToShow: 6,
		draggable: false,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	    ]
	});

	$('.product-previews').slick({
		slidesToShow: 5
	})

	$('.product-slider').slick({
		slidesToShow: 4,
		arrows: true,
		draggable: false,
		responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	})


	/***** view history slider - next/prev arrows ***/

	$(".view-history .slider-prev").click(function(e) { 
	    e.preventDefault();
	    $(".view-history-slider").slick('slickPrev');; 
	});

	$(".view-history .slider-next").click(function(e) { 
	    e.preventDefault();
	    $(".view-history-slider").slick('slickNext');; 
	});

	/********** similar products slider - uninitialization slider ****/

	$('.unslider').on('click', function(e){
		e.preventDefault();
		$(this).hide();
		$(this).closest('.product-slider-wrap').find('.product-slider').addClass('noslider').slick('unslick');
	});





	/****** price filter *****/

	$(function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 500,
	      values: [ 75, 300 ],
	      slide: function( event, ui ) {
	        $( "#range1" ).val(ui.values[ 0 ]);
	        $( "#range2" ).val(ui.values[ 1 ]);
	      }
	    });
	    $( "#range1" ).val($( "#slider-range" ).slider( "values", 0 ));
	    $( "#range2" ).val($( "#slider-range" ).slider( "values", 1 ));
	  });

	$("#range1").on('change', function () {
	    var value = this.value;
	    console.log(value);
	    $("#slider-range").slider("values", 0, value);
	});
	$("#range2").on('change', function () {
	    var value = this.value;
	    console.log(value);
	    $("#slider-range").slider("values", 1, value);
	});

	/***** search - hide filters ****/

	$('.hide').on('click', 'a', function(e){ 
		e.preventDefault();
		$('.filters-wrap').slideToggle();
		$(this).toggleClass('active')
	});

	/**** filter colors - show all ****/

	$('.all-filters').on('click', function(e){ 
		e.preventDefault();
		if ($(this).closest('div').hasClass('active')) {
			$(this).text('Все').closest('div').removeClass('active');
			} else {
				$(this).text('Свернуть').closest('div').addClass('active');
			}
	});

	/*** product images - clone from preview to main img ***/

	$('.preview-slide').on('mouseenter', function(){
		var qq = $(this).find('img').attr('src');
		// console.log(qq);
		$('.main-img').find('a').attr('href',qq);
		$('.main-img').find('img').attr('src',qq);
	});


	/******* tabs *******/

	$('.tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
        jQuery('.tab' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });


   	/**** sorting ****/
   	$('.sort-type, .per-page').on('mouseenter', 'ul', function(e){
   		$(this).find('li').show();
   	});

   	$('.sort-type, .per-page').on('click', 'a', function(e){
   		e.preventDefault();
   		$(this).closest('li').siblings('li').removeClass('active');
   		$(this).closest('li').addClass('active');
   		if ($(window).width() < 1170) {
   			$(this).closest('li').siblings('li').hide();
   		}
   	});

	



	// $('.compare-body .delete a').on('click', function(e){
	// 	e.preventDefault();
	// 	var qq = $(this).closest('th').index();
	// 	$('.compare-body td, .compare-body th').eq(qq).each(function(){
	// 		$(this).css({'background':'red'})
	// 	});
	// });
});












