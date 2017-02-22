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

  function genCipher(list, length) {
    let cipher = '';
    for (let i = 0; i < length; i += 1) {
      const random = Math.floor(Math.random() * list.length);
      cipher += list[random];
    }
    return cipher;
  }

  function render() {
    const charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '-', '_', '^', '+', '=', '%', '#', '@', '!', '~', '?'];

    const firstNameDecrypt = 'Alvin';
    const lastNameDecrypt = ' Yuen';
    let time = new Date().getTime();
    let interval;
    let animation;
    function decrypt() {
      interval = (new Date().getTime() - time);
      if (interval >= 80) {
        $('.first-name').text(genCipher(charList, firstNameDecrypt.length));
        $('.last-name').text(genCipher(charList, firstNameDecrypt.length));
        time = new Date().getTime();
      }
      animation = window.requestAnimationFrame(decrypt);
    }
    animation = window.requestAnimationFrame(decrypt);
    setTimeout(() => {
      window.cancelAnimationFrame(animation);
      $('.first-name').text(firstNameDecrypt);
      $('.last-name').text(lastNameDecrypt);
    }, 2200);
  }
  render();
});
