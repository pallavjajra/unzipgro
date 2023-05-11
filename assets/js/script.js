$(document).ready(function () {
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  $('#type-query').click(function () {
    $('#type-query').toggleClass('active');
  });

  //   $('#overlay').click(function () {
  //     $(this).removeClass('open');
  //     $('.button_container').removeClass('active');
  //   });
  $('#overlay-cross').click(function () {
    $('#overlay').removeClass('open');
    $('.button_container').removeClass('active');
  });

  // solution page

  $('section.solution-tab-section .container .tabs-section ul .tab-list, header .container .overlay .overlay-menu li.nav-items .dropdown-navbar .dropdown-menu-bar li.drop-items, header .container .overlay .overlay-menu ul li.mob-view.slide-toggle-box li').click(function () {
    var value = $(this).attr('data-filter');
    // alert(value);
    // if (value === 'design-solutions') {
    //   $('section.solution-tab-section .container .items .item-box').show('200');
    // } else {
    $('section.solution-tab-section .container .items .item-box').not('.' + value).hide();
    $('section.solution-tab-section .container .items .item-box').filter('.' + value).show();
    // }
  });
  $('section.solution-tab-section .container .tabs-section ul .tab-list').click(function () {
    $('section.solution-tab-section .container .tabs-section ul .tab-list').removeClass('active')
    $(this).addClass('active');
  });


  // Our Work Page
  $('section.our-work-tab-section .container .our-tabs ul .our-tab-list,header .container .overlay .overlay-menu ul li.mob-view.slide-toggle-box.slide-tog-a ul li').click(function () {
    const value = $(this).attr('data-filter');
    //     if (value === 'all') {
    //       $('section.our-work-tab-section .container .our-item-box').show('200');
    //     } else {
    $('section.our-work-tab-section .container  .our-item-box').not('.' + value).hide();
    $('section.our-work-tab-section .container  .our-item-box').filter('.' + value).show();
    //     }
  });
  $('section.our-work-tab-section .container .our-tabs ul .our-tab-list').click(function () {
    $('section.our-work-tab-section .container .our-tabs ul .our-tab-list').removeClass('active')
    $(this).addClass('active');
  });

  $('section.template-data-section .container .template-basic-sec ul#tabs-nav-basic li a').click(function () {
    $('section.template-data-section .container .template-basic-sec ul#tabs-nav-basic li a').removeClass('active')
    $(this).addClass('active');
  });

  $('section.fre-bought .container .fre-box .fre-items .free-inrt.disright').click(function () {
    $(this).toggleClass('disright');
  });

  $('.calander-section .slot-section .item').click(function () {
    $(this).hide();
  })


  // 	$('#pj-pj').click(function () {
  //             $('.page-wrap .page-wrap-inner-x').addClass('page-wrap-inner');
  //             $('.page-wrap .cart-summary-x').addClass('cart-summary');
  //         })


  $('.mob-view-right-errow').click(function () {
    $('.page-wrap .page-wrap-inner').addClass('page-wrap-inner-x');
    $('.page-wrap .cart-summary').addClass('cart-summary-x');
  })


  // $('section.solution-tab-section .container .tabs-section ul .tab-list').click(function () {
  //   $(this).addClass('active').siblings().removeClass('active');
  // });



  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {
      $('.our-values .container .our-item').slick('unslick');
    } else {
      $('.our-values .container .our-item').not('.slick-initialized').slick({
        dots: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,

        infinite: true,
        slidesToScroll: 1,
      });
    }
  });

  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {

      $('section.brand-reach .container .card-section').slick('unslick');
    } else {
      $('section.brand-reach .container .card-section').not('.slick-initialized').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
      });
    }
  });



  $("header .container .overlay .overlay-menu li.nav-items.nav-items-arrow .mob-view i.mob-tab-a").click(function () {
    $("header .container .overlay .overlay-menu ul li.mob-view.slide-tog-a").slideToggle();
  });

  $("header .container .overlay .overlay-menu li.nav-items.nav-items-arrow .mob-view i.mob-tab-b").click(function () {
    $("header .container .overlay .overlay-menu ul li.mob-view.slide-tog-b").slideToggle();
  });

  // tab-slider
  $('#tem-left-slide').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,

    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('section.related-product-sec .container').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 6,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });



  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {

      $('.client-card .container').slick('unslick');
    } else {
      $('.client-card .container').not('.slick-initialized').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,

        infinite: true,
        slidesToScroll: 1,
      });
    }
  });

  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {

      $('section.what-we-bottom .container').slick('unslick');
    } else {
      $('section.what-we-bottom .container').not('.slick-initialized').slick({
        dots: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
      });
    }
  });



  // Show the first tab and hide the rest
  $('#tabs-nav-basic li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav-basic li').click(function () {
    $('#tabs-nav-basic li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });






})