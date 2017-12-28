$(document).ready(function(){



$('html').click(function(){
	$('.main-menu').removeClass('toggled');
});


$('.hamburger').click(function(e){
	e.stopPropagation();
	$(this).toggleClass('is-active');
	$('.main-menu ').toggleClass('toggled');
});

$('.main-menu, .main-menu a').click(function(e){
	e.stopPropagation();
});

	

  /******************** function ****************************/

//   $('.cars-slider').owlCarousel({
//   	items: 1,
//     loop:true,
//     margin:10,
//     nav:true
// })




// $('.cars-slider').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });


$('.cars-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});



function bodyResize() {
	var qq = $('.wrapper').height();
	$('.wrapper').height(qq-270);
}


$(window).scroll(function(){
	if ($(window).scrollTop()>0) {
		$('.header-top').addClass('scrolled');
	} else 
	$('.header-top').removeClass('scrolled');
});

$(window).on('load',function(){

	$('input[type="radio"]').on('click',function(){
		$('.cars-slider').slick('unslick');
		$('.cars-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1
		});
	});

	


	bodyResize();
});


$(window).on('resize change',function(){
	$('.wrapper').css({'height':'auto'});
	bodyResize();
});





$(function() {
    $( "#datepicker1, #datepicker2" ).datepicker();
  });


$('.fancy').fancybox({
	padding: 0
});


$(".main-menu a").on("click", function (event) { 
//отменяем стандартную обработку нажатия по ссылке 
event.preventDefault(); 

//забираем идентификатор бока с атрибута href 
var id = $(this).attr('href'), 

//узнаем высоту от начала страницы до блока на который ссылается якорь 
top = $(id).offset().top; 

//анимируем переход на расстояние - top за 1500 мс 
$('body,html').animate({ 
scrollTop: top+100 
}, 1500); 
});

});


