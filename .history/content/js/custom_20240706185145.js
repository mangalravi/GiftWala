$(".projetos-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  speed: 1500,
  responsive: [
    {
      breakpoint: 1121,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
      },
    },
  ],
});
