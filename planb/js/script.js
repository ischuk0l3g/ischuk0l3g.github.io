$(document).ready(function(){




  function loop() {
    if ($(window).width()>768) {
        $('.team-list').css({right:0});
        $('.team-list').animate ({
            top: '+=100',
        }, 3000, 'linear', function() {
            $('.team-list').animate ({
                top: '-=100',
            }, 3000, 'linear', function() {
                loop();
            });
        });
      }
    }

    loop();



  /******************** function ****************************/

  $(window).on('load', function(){
  	$('.cloud').removeClass('inactive');
  });

  $('.img-text').each(function(){
	  	$(this).addClass('hidden').viewportChecker({
	        classToAdd: 'visable animated fadeUpImg',
	        offset: 100
	    })
	 });

	$('.contacts-list p').each(function(){
	  	$(this).addClass('hidden').viewportChecker({
	        classToAdd: 'visable animated fadeInUp',
	        offset: 100
	    })
	 });

  $('.blood').addClass('hidden').viewportChecker({
      classToAdd: 'visable',
      offset: 100
  })

  
});

$(window).on('load',function(){
  setTimeout(function(){
    $('.hidden-slogan').fadeIn(1000);
  },2500);
});

  


var s2, s3, s4, s5, s6;




$('.methods-list a:not(.link)').click(function(e){
  e.preventDefault();
});

function asideShow() {
  if ($(window).width()>960) {
    if(($(window).scrollTop() >= $('.about-us-group').offset().top-100)) {
      $('aside').addClass('fixed');
      $('.main-menu').fadeIn()
    } else {
      $('aside').removeClass('fixed');
      $('.main-menu').fadeOut()
    }
  }
}


asideShow();





$('.methods-list a').each(function(){
  var id = $(this).attr('href');
  $(this).on('mouseenter', function(){
    var top = $(this).offset().top;
    if ($(window).width() > 768 ) {
      $(id).fadeIn(1000).css({'top':top-250});
    } else {
      $(id).fadeIn(1000).css({'top':top-50});
    }
    $(id).on('mouseenter', function(){
      $(this).show();
    });
  });
  $(this).on('mouseleave', function(){
    var id = $(this).attr('href');
    $(id).hide();
    $(id).on('mouseleave', function(){
      $(this).hide();
    });
  });
});

var ml = $('.methods-item').length;
var hml = ml/2;
for (var i = 0; i <= ml; i++) {
  if (i<=ml/2) {
    $('.methods-item').eq(i).addClass('m-left')
    console.log('l' + i);
  } else {
    $('.methods-item').eq(i).addClass('m-right')
    console.log('r' + i);
  }
}