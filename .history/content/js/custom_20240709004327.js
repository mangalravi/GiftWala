$(document).ready(function () {
  $(".my-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
  });
  $(".bestseller").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    spaceBetween: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
  });
  AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
  const fstdrpdwn = document.querySelector(".fstdrpdwn");
  const fstdrpdwnlst = document.querySelector(".fstdrpdwnlst");

  const applyTransform = (event) => {
    if (event.type === "mouseenter") {
      fstdrpdwn.classList.add("rotate-180");
    } else {
      fstdrpdwn.classList.remove("rotate-180");
    }
  };

  fstdrpdwnlst.addEventListener("mouseenter", applyTransform);
  fstdrpdwnlst.addEventListener("mouseleave", applyTransform);
});
