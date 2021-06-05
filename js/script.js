// Preloader js
$(window).on("load", function () {
  $(".preloader").fadeOut(100);
});

(function ($) {
  "use strict";

  // product Slider
  $(".product-image-slider").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data("image");
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    },
  });

  // Product slider
  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //Contact form
  $('#alert').hide()

  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    };

    Email.send({
      SecureToken: "01942de1-e0ba-4b42-94d2-2ccaffa0c99b",
      To: "lovepiratehearts+contactform@gmail.com",
      From: formData.email,
      Subject: "Contact Form",
      Body: JSON.stringify(formData),
    }).then((message) => {
      $('#alert').fadeIn();     
      setTimeout(function() {
        $("#alert").fadeOut();           
      },5000);
    });

    event.preventDefault();
  });

 
})(jQuery);