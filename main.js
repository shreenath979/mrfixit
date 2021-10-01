        var owl = $('.logo-carousel');
      owl.owlCarousel({
        margin:50,
        autoplay: true,
        autoplayHoverPause:true,
        dots: false,
        nav: false,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 6
          }
        }
      });

      var owl = $('.testimonial-carousel');
      owl.owlCarousel({
        margin:50,
        autoplay: true,
        autoplayHoverPause:true,
        dots: false,
        nav: false,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      });

       var owl = $('.service-carousel');
      owl.owlCarousel({
        margin:50,
        autoplay: true,
        autoplayHoverPause:true,
        dots: false,
        nav: false,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });




      // Back to top button
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
$('.scroll-to-top').fadeIn('slow');
} else {
$('.scroll-to-top').fadeOut('slow');
}
});
$('.scroll-to-top').click(function() {
$('html, body').animate({
scrollTop: 0
}, 100);
return false;
});


$(window).scroll(function(){
  if ($(this).scrollTop()>50) {
    $('header').addClass('headersticky');
  }
  else {
    $('header').removeClass('headersticky');
  }
});