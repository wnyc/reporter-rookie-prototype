(function() {
  function err() {
    console.error(arguments);
  }
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

    var stream;
    var bufferWidth;
    var bufferHeight;
    var attemptingCapture = false;

    $section.on('activated', function() {
      if (attemptingCapture) return;
      bufferHeight = $video.height();
      bufferWidth = bufferHeight * (4/3);

      $video.width(bufferWidth + 'px');
      $video.height(bufferHeight + 'px');
      $video.css('margin-left', '-' + (bufferWidth/2) + 'px');
      $buffer.width(bufferWidth + 'px');
      $buffer.css('margin-left', '-' + (bufferWidth/2) + 'px');

      attemptingCapture = true;
      // activate the camera
      navigator.webkitGetUserMedia({video: true}, function(localMediaStream) {
        attemptingCapture = false;
        $video.attr('src', window.URL.createObjectURL(stream = localMediaStream));
        if ($section.get(0) !== $('.active').get(0)) {
          stream.stop();
        }
      }, err);
    });

    $section.on('deactivated', function() {
      // deactivate the camera
      if (stream && attemptingCapture) {
        attemptingCapture = false;
        stream.stop();
      }
    });

    $button.on('click', function() {
      $video.get(0).pause();
    });

    $cancel.on('click', function() {
      $video.get(0).play();
    });

    $ok.on('click', function() {
      $photo.get(0)
        .getContext('2d')
        .drawImage($video.get(0), 0, 0, 200, 150)
      ;
    });

  });
})();
