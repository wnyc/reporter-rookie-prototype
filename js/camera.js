(function() {

  $('.camera_frame').each(function(i, el) {
    var $camera = $(el);
    var $section = $camera.parents('section').first();
    $camera.prepend('<video/>');
    var $video = $camera.find('video');
    $video.attr('autoplay', true);
    var $buffer = $section.find('canvas');
    var context = $buffer.get(0).getContext('2d');
    var $button = $section.find('.camera_button');
    var $cancel = $section.find('.cancel');
    var $ok = $section.find('.next');
    var $photo = $('#metadata_photo');

    var bufferWidth;
    var bufferHeight;

    var interval = setInterval(function() {
      if (window.mediaStreamURL) {
        $video.attr('src', window.mediaStreamURL);
        clearInterval(interval);
      }
    }, 1000);

    $section.on('activated', function() {
      bufferHeight = $video.height();
      bufferWidth = bufferHeight * (4/3);
      $video.width(bufferWidth + 'px');
      $video.height(bufferHeight + 'px');
      $video.css('margin-left', '-' + (bufferWidth/2) + 'px');
      $buffer.width(bufferWidth + 'px');
      $buffer.css('margin-left', '-' + (bufferWidth/2) + 'px');
    });

    $video.on('click', function() {
      $video.get(0).pause();
      $cancel.addClass('active');
      $ok.addClass('active');
    });

    $cancel.on('click', function() {
      $video.get(0).play();
      $ok.removeClass('active');
      $cancel.removeClass('active');
    });

    $ok.on('click', function() {
      $photo.get(0)
        .getContext('2d')
        .drawImage($video.get(0), 0, 0, 200, 150)
      ;
    });

  });
})();
