(function ($) {

  "use strict";

  $(document).ready(function () {


    $('.navbar').on('click', '.search-toggle', function (e) {
      var selector = $(this).data('selector');

      $(selector).toggleClass('show').find('.search-input').focus();
      $(this).toggleClass('active');

      e.preventDefault();
    });

  // background color when scroll 
  var initScrollNav = function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.nav-header.fixed-top').addClass("bg-black");
    } else {
      $('.nav-header.fixed-top').removeClass("bg-black");
    }
  }

  $(window).scroll(function () {
    initScrollNav();
  });

    // close when click off of container
    $(document).on('click touchstart', function (e) {
      if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
        $('.search-toggle').removeClass('active');
        $('.navbar').removeClass('show');
      }
    });

    // Responsive Navigation with Button

    //quantity in product
    var initquantity = function () {
      const incrementButton = document.querySelector('.incriment-button');
      const decrementButton = document.querySelector('.decriment-button');
      const inputField = document.querySelector('.spin-number-output');

      // Add event listener to increment button
      incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
      });

      // Add event listener to decrement button
      decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
          inputField.value = currentValue - 1;
        }
      });
    };

    // init jarallax parallax
    var initJarallax = function () {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-img"), {
        keepImg: true,
      });
    }

    // init Chocolat light box
    var initChocolat = function () {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      });
    };

    // Payment method
    $('input[type="radio"]').click(function () {
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".payment-box").not(targetBox).hide();
      $(targetBox).show();
    });


    // document ready
    $(document).ready(function () {

      var swiper = new Swiper(".main-swiper", {
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },

        navigation: {
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
      });

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          599: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1599: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        },
      });

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".icon-arrow.icon-arrow-right",
          prevEl: ".icon-arrow.icon-arrow-left",
        },
        pagination: {
          el: "#testimonials .swiper-pagination",
          clickable: true,
        },
      });

          // product single page
    var thumb_slider = new Swiper(".thumb-swiper", {
      loop: true,
      slidesPerView: 4,
      autoplay: true,
      direction: "vertical",
      spaceBetween: 30,
    });

    var large_slider = new Swiper(".large-swiper", {
      loop: true,
      slidesPerView: 2,
      autoplay: true,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

      // var swiper = new Swiper(".thumb-swiper", {
      //   slidesPerView: 1,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      // });

      // var swiper2 = new Swiper(".large-swiper", {
      //   spaceBetween: 10,
      //   effect: 'fade',
      //   thumbs: {
      //     swiper: swiper,
      //   },
      // });


      $(".youtube").colorbox({
        iframe: true,
        innerWidth: 960,
        innerHeight: 585
      });

      initHamburgerMenu();
      initChocolat();
      initJarallax();
      initquantity();



    });

  }); // End of a document

})(jQuery);