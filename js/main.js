$('.skillbar').skillBars({
  // options here
});

              new WOW().init();


	
	$(function () {
	$('.tlt').textillate({
        
        loop: true
        
    });
});

//Mixit up


var mixer = mixitup('.mymix');

//Owl carosuel



$(document).ready(function(){
  $('.team-carousel').owlCarousel({
      items:4,
      loop:true,
      autoplay:true,
       responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        
        768 : {
          items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
  });
});



$(document).ready(function(){
  $('.carousel2').owlCarousel({
      items:1,
      loop:true,
      autoplay:true
      
  });
});




$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


 /***
          Preloader
      ***/
      $('body').addClass('preloader-active');
      
      $(window).on('load', function() { 
          $('.preloader').fadeOut();
          $('.preloader-spinner').delay(350).fadeOut('slow');
          $('body').removeClass('preloader-active');
      });



var spy = new Gumshoe('#my-awesome-nav a');




// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
        $('.scrolltotop').fadeIn(400);    // Fade in the arrow
    } else {
        $('.scrolltotop').fadeOut(400);   // Else fade out the arrow
    }
});
$('.scrolltotop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});