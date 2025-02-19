$(document).ready(function () {
  // Function to initialize sliders
  function initializeSliders() {
    $(".my-slider").not(".slick-initialized").slick({
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

    $(".bestseller")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow: "<button type='button' class='slick-next'>Next</button>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }

  // Initialize sliders on document ready
  initializeSliders();

  // Rotate dropdown arrow
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

  // Adjust slider margin-top on navbar toggle
  const button = document.querySelector(".navbar-toggler");
  const sliderSection = document.querySelector(".slider");

  button.addEventListener("click", function () {
    setTimeout(() => {
      if (button.classList.contains("collapsed")) {
        sliderSection.classList.remove("mt-7rem");
      } else {
        sliderSection.classList.add("mt-7rem");
      }
    }, 300); // Adjust timeout to ensure it catches the Bootstrap animation timing
  });

  // Refresh sliders on tab show
  $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Trigger a window resize event to force recalculation
    $(window).trigger("resize");

    // Set positions and refresh the sliders after a short delay
    setTimeout(function () {
      $(".my-slider").slick("setPosition");
      $(".bestseller").slick("setPosition");
    }, 300); // Adjust timeout to ensure the tab content is fully rendered
  });

  // Ensure sliders are initialized correctly on tab show
  $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Reinitialize sliders if not initialized properly
    if (!$(".my-slider").hasClass("slick-initialized")) {
      initializeSliders();
    }
    if (!$(".bestseller").hasClass("slick-initialized")) {
      initializeSliders();
    }
  });
});
