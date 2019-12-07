$(function(){

    $('.featured__slider').slick({
      prevArrow:'<button type="button" class="slick-prev icon-chevron-left"></button>',
      nextArrow:'<button type="button" class="slick-next icon-chevron-right"></button>'
    });

    $(".rateyo").rateYo({
        rating: 4.5,
        starWidth: "13px",
        normalFill: "#808080",
        readOnly: true,
        spacing: '3px'
      });

});