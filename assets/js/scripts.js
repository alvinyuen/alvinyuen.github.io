$(document).ready(() => {
  $('.bar a').click(function () {
    const $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top,
    }, 1000);
    return false;
  });

  $('#burger').click(() => {
    $('.bar').toggleClass('show');
  });

  AOS.init();
});
