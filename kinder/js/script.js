$(document).ready(function(){


  $(window).on('resize', function(){
    commentsHeight();
    advantagesHeight();
    regioHeight();
    imgSizing();
    removeClasses()
  });


  $('.toggle-menu').click(function(){
    $('.main-menu').slideToggle();
  });


/* shedule items */

function shedule() {
  var l = $('.shedule-item').length;
  console.log('l = ' + l);
  lh = l/2;
  console.log('lh = ' + lh);
  lfh = Math.floor(lh)
  console.log('lfh = ' + lfh);
  mod = lh%4;
  console.log('mod = ' + mod);
  if (l%2!=0) {
    console.log('da');
    $('.shedule-list').addClass('odd').append("<div class='shedule-item'></div>");
    lm = lfh;
    mod = Math.ceil(mod)
  } else {
    lm = lfh-1;
  }

  lm2 = lm;

  if (lh%4 == 0) {
    console.log("NA 4 SUKA");
    lm = lm + 3;
  }

  console.log('lm = ' + lm);
  
  for (i = 0; i<lm-3; i=i+4) {
    $('.shedule-item').eq(i).addClass('s1');
    $('.shedule-item').eq(i+1).addClass('s2');
    $('.shedule-item').eq(i+2).addClass('s3');
    $('.shedule-item').eq(i+3).addClass('s4');
    console.log(i+1);
  }
  for (ii = 1; ii<=mod; ii++) {
    console.log('ii = ' + ii);
    var qq = lm - mod;

    $('.shedule-item').eq(qq+ii).addClass('s' + ii);
    console.log('qq = ' + (qq+ii));
  }



  for (i = lm2+1; i<l; i=i+4) {
    $('.shedule-item').eq(i).addClass('s1');
    $('.shedule-item').eq(i+1).addClass('s2');
    $('.shedule-item').eq(i+2).addClass('s3');
    $('.shedule-item').eq(i+3).addClass('s4');
    console.log(i+1);
  }

}

shedule();

/***** tabs ******/

jQuery(document).ready(function() {
    jQuery('.tabs .tabs-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});


/** **/

$('.menu-mail a').click(function(e){
  e.preventDefault();
  $('.hidden-phones').removeClass('opened')
  if ($('.hidden-mails').hasClass('opened')) {
    $('.hidden-mails').removeClass('opened');
    $('.hidden-contacts').hide();
    if ($('.secondary-menu').hasClass('second-fixed')) {
      $('.secondary-menu').css('top','90px');
    }
  } else {
    $('.hidden-contacts').show();
    $('.hidden-mails').addClass('opened');
    if ($('.secondary-menu').hasClass('second-fixed')) {
      $('.secondary-menu').css('top','144px');
    }
  }
});

$('.menu-phone a').click(function(e){
  e.preventDefault();
  $('.hidden-mails').removeClass('opened')
  if ($('.hidden-phones').hasClass('opened')) {
    $('.hidden-phones').removeClass('opened');
    $('.hidden-contacts').hide();
    if ($('.secondary-menu').hasClass('second-fixed')) {
      $('.secondary-menu').css('top','90px');
    }
  } else {
    $('.hidden-contacts').show();
    $('.hidden-phones').addClass('opened');
    if ($('.secondary-menu').hasClass('second-fixed')) {
      $('.secondary-menu').css('top','144px');
    }
  }
});


	/** main page slider **/
	var sliderPadding = $(window).width() > 768 ? $(window).width()/4 : 0;

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		center: true,
		stagePadding: sliderPadding,
		nav: true,
		navText: ["<",">"],
		dots: false,
		lazyLoad: true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 1000

	});




function commentsHeight() {
  var mheight=0;
  var comment = $('.review-item');
  if ($(window).width() > 768) {
    for (var i=0; i < $('.review-item').length; i+=2) {
      if (comment.eq(i).height() > comment.eq(i+1).height()) {
          mheight = comment.eq(i).height();
          comment.eq(i+1).height(comment.eq(i).height());
        } else {
          comment.eq(i).height(comment.eq(i+1).height());
        } 
    }
  } else {
    comment.each(function() {
    $(this).css('height','auto'); });
  }
}

commentsHeight();



/** advantages item same height **/

function advantagesHeight() {
  var aheight=0;
  var advantage = $('.advantage-item');
  if ($(window).width() < 1170) {
    for (var i=0; i < $('.advantage-item').length; i+=2) {
      if (advantage.eq(i).height() > advantage.eq(i+1).height()) {
          advantage.eq(i+1).height(advantage.eq(i).height());
        } else {
          advantage.eq(i).height(advantage.eq(i+1).height());
        } 
    }
  } else {
    advantage.each(function() {
    $(this).css('height','auto'); });
  }
}

advantagesHeight();


/** regio item same height **/

function regioHeight() {
  var rheight=0;
  var regio = $('.regio-item');
  if ($(window).width() < 1170) {
    for (var i=0; i < $('.regio-item').length; i+=2) {
      if (regio.eq(i).height() > regio.eq(i+1).height()) {
          regio.eq(i+1).height(regio.eq(i).height());
        } else {
          regio.eq(i).height(regio.eq(i+1).height());
        } 
    }
  } else {
    regio.each(function() {
    $(this).css('height','auto'); });
  }
}

regioHeight();





	/** buttons blinks **/

	var timer = 210;
    function animPlay() {
        if ($('.btn-step-1').is(':visible')) {
            $('.btn-step-1').hide();
            $('.btn-step-2').show();
        } else {
            $('.btn-step-1').show();
            $('.btn-step-2').hide();
        }
    }
    setInterval(animPlay, timer);



    /** reviews show more **/

    comments_size = $(".review-items .review-item").size();
    x=2;
    $('.review-items .review-item:lt('+x+')').show();
    $('.reviews-button').click(function (e) {
        e.preventDefault();
        commentsHeight();
        x= (x+2 <= comments_size) ? x+2 : comments_size;
        $('.review-items .review-item:lt('+x+')').show();
    });




/** map **/

var map;
var salon = new google.maps.LatLng(50.403887, 30.352762);
var MY_MAPTYPE_ID = 'mystyle';
 
function initialize() { 
  var stylez =  [
      {
      featureType: "All",
      stylers: [
      { "hue": "#00eeff" },
      { "saturation": -78 }
      ]
    }
  ];
 
  var mapOptions = {
      zoom: 11,
      center: salon,
      scrollwheel: false,
      disableDefaultUI: true,
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
      mapTypeId: MY_MAPTYPE_ID
  };
 
  map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);


 var icon = {
        url: "img/pointer-map.svg",

    }

    var marker = new google.maps.Marker({
        position: salon,
        map: map,
        icon: icon,
        zIndex : -20
    });


  var styledMapOptions = {
    name: "Styled"
  };
 
  var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
  map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);  
}

google.maps.event.addDomListener(window, 'load', initialize);



/** regio cloud popup **/

$('html').click(function(){
  if ($(window).width() > 1170 ) {
    $('.regio-popup').hide();
  }
});

$('.regio-popup, .regio-item a').click(function(event){
    event.stopPropagation();
});


$('.regio-item a').click(function(e){
  e.preventDefault();
  $(this).closest('div').children('.regio-popup').show();
});


/** fancybox **/ 

 $(".fancybox").fancybox({
        wrapCSS: "imagePopUp",
        fitToView: true,
        scrolling: 'auto',
        autoSize: true,
        closeBtn: false,

        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(58, 42, 45, 0.95)'
                }
            }
        }
    });


 $(".fancybox2").fancybox({
        wrapCSS: "imagePopUp",
        fitToView: true,
        scrolling: 'auto',
        autoSize: true,
        closeBtn: false,

        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(58, 42, 45, 0.95)'
                }
            },
             title : { type : 'over' }
           }, // helpers
           beforeShow : function() {
            this.title = (this.title ? '' + this.title + '' : '') + (this.index + 1) + '/' + this.group.length;
           } // beforeShow
    });


 $('.close-window').click(function(){
        $.fancybox.close();
    });


/** scroll fix top menu **/



  $(window).scroll(function() {
    if (!($('body').hasClass('inner-page'))&&($(window).width() > 1170)) {
      var headerHeight = $('.header-top').height();
      if ($(this).scrollTop() > headerHeight)
        {          
          $('.header-menu').addClass("nav-fixed");
        }
       else if ($(this).scrollTop() < headerHeight) {
          $('.header-menu').removeClass("nav-fixed");
        }
      }
    });

  $(window).scroll(function() {
    if ($(window).width() > 1170) {
      if ($(this).scrollTop() > 155)
        {          
          $('.secondary-menu').addClass("second-fixed");
          $('.secondary-menu').css('top','89px');
        }
       else if ($(this).scrollTop() < 155) {
          $('.secondary-menu').removeClass("second-fixed");
          $('.secondary-menu').css('top','0');
        }
      }
    });



function animMenuOut() {
  if (!($('body').hasClass('inner-page'))&&($(window).width() > 1170)) {
        $('.menustep1').fadeOut(150, function(){
            $('.menu-tel').css('opacity', '.6');
            $('.header-menu').css('height', 130);
            $('.menustep2').fadeOut(150, function(){
                $('.menu-tel').css('opacity', '.3');
                $('.header-menu').css('height', 115);
                $('.menustep3').fadeOut(150, function(){
                    $('.menu-tel').css('opacity', '0').hide();
                    $('.menu-contacts').hide();
                    $('.menu-phone, .menu-mail').css('opacity','.3').show();
                    $('.header-menu').css('height', 100);
                    $('.menustep4').fadeOut(150, function(){
                       $('.header-menu').css({'height': 90, 'background': '#eee'});
                          $('.menu-phone, .menu-mail').css('opacity','1');
                          $('.menustep5').css('height', 107);
                    })
                })
            })
        });
      }
}


function animMenuIn() {
  if (!($('body').hasClass('inner-page'))&&($(window).width() > 1170)) {
        $('.header-menu').css('height', 103).removeClass('main_nav_inner_fixed');
        $('.hidden-contacts').hide();

        $('.menustep5').fadeIn(100, function(){
            $('.menu-phone, .menu-mail').css('opacity','.6');
            $('.header-menu').css('height', 107);
            $('.menustep4').fadeIn(100, function(){
                $('.menu-phone, .menu-mail').css('opacity','.3');
                $('.header-menu').css({'height': 110, 'background': '#F2F2ED'});
                $('.menustep3').fadeIn(100, function(){
                    $('.menu-phone, .menu-mail').css('opacity','0').hide();
                    $('.menu-contacts').show();
                    $('.main_nav_phone_left, .main_nav_phone_right').show();
                    $('.menu-tel').css('opacity', '.3').show();
                    $('.header-menu').css('height', 115);
                    $('.menustep2').fadeIn(100, function(){
                        $('.main_nav_sub').css('opacity', '.6');
                        $('.header-menu').css('height', 130);
                        $('.menustep1').fadeIn(100, function(){
                            $('.menu-tel').css('opacity', '1');
                        })
                    })
                })
            })
        });
      }
}


var scrolled,
            windowHeight = document.documentElement.clientHeight,
            m = $('.header-menu'),
            menuTop = parseInt(m.offset().top),
            menuTop2 = parseInt(m.offset().top);

        window.onscroll = function() {
            windowHeight = document.documentElement.clientHeight;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            scrolled = parseInt(scrolled);
            if ( $(window).width()>1170) {
                if (scrolled>=menuTop) {
                    animMenuOut();
                    $('.main_nav_inner').addClass('main_nav_inner_fixed');
                } else if ( scrolled <= menuTop2 ) {
                    animMenuIn();
                }
            }
        };


function imgSizing() {
  var imgs = $('.about-us-img-wrap').width();
  $('.about-us-img-wrap').height(imgs/1.83);
}

imgSizing();

function removeClasses() {
  if ($(window).width() < 1170) {
      $('.secondary-menu').removeClass("second-fixed");
      $('.secondary-menu').css('top','0');
  }
}



/*****************************************************************/




});