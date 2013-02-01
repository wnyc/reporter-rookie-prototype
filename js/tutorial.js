(function() {
  $('.tutorial').each(function(i, el) {
    var $el = $(el);
    var $video = $el.find('video');
    $el.on('activated', function() {
      $video.get(0).play();
    });
    $el.on('deactivated', function() {
      $video.get(0).pause();
      $video.attr('src', $video.get(0).src);
    });
  });
})();

