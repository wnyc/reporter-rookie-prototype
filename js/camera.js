(function() {
  $('.camera_frame').each(function(i, el) {
    var $camera = $(el);
    var $section = $camera.parents('section').first();
    $section.on('activated', function() {
      // activate the camera
    });
  });
})();
