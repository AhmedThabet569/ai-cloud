$(document).ready(function () {
    if ($('html').attr('dir') == 'rtl') {
        var dir = true;
    } else {
        var dir = false;
    }

    if ($(".hero-section").length > 0) {
      $(".hero-section").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          rtl: dir,
          autoplay: true,
          autoplaySpeed: 3000,

      });
  }

  if ($(".services-slider").length > 0) {
    $(".services-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        rtl: dir,
        centerMode: true,
        useTransform: false,
        autoplaySpeed: 3000,
        autoplay: true,

    });
  }





  if ($(".partners").length > 0) {
    $(".partners").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        rtl: dir,
        //autoplay: true,
        useTransform: false,
        autoplaySpeed: 3000,

        responsive: [

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              centerMode: true,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay: true,
              arrows: false,
              centerMode: true,

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay: true,
              arrows: false,
              centerMode: true,

            }
          }
        ]
    });
  }







});