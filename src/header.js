$(window).on("scroll", function() {
  $('.header').toggleClass("active", $(this).scrollTop() > $('.hero').height());
});