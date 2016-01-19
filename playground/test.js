(function($) {
  'use strict';

  var $navbar = $('.navbar a'),
      $scrollTooTop = $('.scrolltoo-top');

  $(document).ready(function() {

    $navbar.scrolltoo();

    $scrollTooTop.scrolltoo({
      speed: 300
    });

  });

  $(document).scroll(function() {
    var $one = $('#one').height();

    if ($(this).scrollTop() > $one) {
      $scrollTooTop.css({ 'bottom' : '15px' });
    } else {
      $scrollTooTop.css({ 'bottom' : '-80px' });
    }
  });

})(jQuery);
