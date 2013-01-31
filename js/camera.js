(function() {
  function err() {
    console.error(arguments);
  }
  $('.camera_frame').each(function(i, el) {
    var $camera = $(el);
    var $section = $camera.parents('section').first();
    $camera.append('<video/>');
    var $video = $camera.find('video');
    $video.attr('autoplay', true);
    var stream;
    var attemptingCapture = false;

    $section.on('activated', function() {
      if (attemptingCapture) return;
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
      if (stream) {
        attemptingCapture = false;
        stream.stop();
      }
    });
  });
})();
