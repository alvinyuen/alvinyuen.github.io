

$(document).ready(function () {
  $('.bar a').click(function () {
    const $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
  return false;
  });

  $('#burger').click(function() {
    $('.bar').toggleClass('show');
  });

});
