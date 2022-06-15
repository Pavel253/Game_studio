$(function() {

  $('.slider__game').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

})

$(function() {

  $('.block__review').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  $('.block__review-tablet').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.block__review-phone').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

})

$(function() {
  $('.slider__image').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: "<img src='../img/page1/section3/prev.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/page1/section3/next.svg' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2,
          prevArrow: "<img src='../img/page1/section3/prev.svg' class='prev' alt='1'>",
          nextArrow: "<img src='../img/page1/section3/next.svg' class='next' alt='2'>",
        }
      },
     
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2,
          prevArrow: "<img src='../img/page1/section3/prev.svg' class='prev' alt='1'>",
          nextArrow: "<img src='../img/page1/section3/next.svg' class='next' alt='2'>",
        }
      },
      
     
      {
        breakpoint: 801,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          prevArrow: "<img src='../img/page1/section3/prev.svg' class='prev' alt='1'>",
          nextArrow: "<img src='../img/page1/section3/next.svg' class='next' alt='2'>",
        }
      },
      {
        breakpoint: 578,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          prevArrow: "<img src='../img/page1/section3/prev.svg' class='prev' alt='1'>",
          nextArrow: "<img src='../img/page1/section3/next.svg' class='next' alt='2'>",
        }
      }
    ]
  });
})

$(function() {
  $('.slider__image').slick({
    
  });
})