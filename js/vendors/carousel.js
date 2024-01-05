$('.carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    pauseOnFocus: true,
    infinite: true,
    slickPause: true,
    // MOBILE BELOW
    swipe: true,
    touchMove: true,
    fade: true,
  });

  // @media only screen and (max-width: 767px) {
  //   .carousel {
  //     display: none;
  //   }
  // }

  // function updateCarousel() {
  //   if(window.innerWidth < 767) {
  //     console.log($('.carousel').slick('slickGetOption', 'fade'));
  //     $('.carousel').slick('slickSetOption', 'fade', true, true);
  //     console.log($('.carousel').slick('slickGetOption', 'fade'));
  //     // $('.carousel').slick('slickSetOption', 'swipe', false, true);
  //     // $('.carousel').slick('slickSetOption', 'touchMove', false, true);
  //   }
  // }

  // window.addEventListener('resize', updateCarousel);

  // updateCarousel();