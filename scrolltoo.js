/*!
 * scrolltoo.js 0.1.0 - https://github.com/nandomoreirame/scrolltoo
 *
 * Copyright (c) 2016 Fernando Moreira (http://nandomoreira.me)
 * Licensed under the MIT license (https://github.com/nandomoreirame/scrolltoo/blob/master/LICENSE)
 **/

$.fn.scrolltoo = function(options) {

  var defaults = {
    $elem: $(this),
    speed: 600
  },

  _settings = $.extend(defaults, options);

  _settings.$elem.click(function(event) {
    event.preventDefault();

    var $this     = $(this),
        $htmlBody = $('html, body'),
        _offset   = ($this.attr('data-offset'))   ? $this.attr('data-offset')   : false,
        _position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
        $hash     = $(this.hash), _toMove;

    if (_offset) {
      _toMove = parseInt(_offset, 10);
      $htmlBody.stop(true, false).animate({
          scrollTop: ($hash.offset().top + _toMove)
        },
        _settings.speed
      );
    } else if (_position) {
      _toMove = parseInt(_position, 10);
      $htmlBody.stop(true, false).animate({
          scrollTop: _toMove
        },
        _settings.speed
      );
    } else {
      if($hash.length > 0) {
        $htmlBody.stop(true, false).animate({
            scrollTop: ($hash.offset().top)
          },
          _settings.speed
        );
      }
    }
  });
};
