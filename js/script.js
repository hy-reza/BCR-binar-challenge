// Setting owl carousel
$(".owl-carousel").owlCarousel({
    // setting one item center
    center: true,
    // menjadi loop
    loop: true,
    // margin 10
    margin: 10,
    // nav button false / tidak ditampilkan
    nav: false,
    // autoplay
    autoplay:true,
    paginationSpeed: 500,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  // Go to the next item
  $(".btn-right").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".btn-left").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });