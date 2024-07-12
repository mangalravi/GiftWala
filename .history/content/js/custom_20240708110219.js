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

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".fstdrpdwn .dropdown-toggle");

  const toggleRotate = (event) => {
    if (event.type === "mouseenter") {
      dropdownToggle.classList.add("rotate-180");
    } else {
      dropdownToggle.classList.remove("rotate-180");
    }
  };

  document.querySelectorAll(".fstdrpdwnlst, .scnddrpdwn").forEach((element) => {
    element.addEventListener("mouseenter", toggleRotate);
    element.addEventListener("mouseleave", toggleRotate);
  });
});
