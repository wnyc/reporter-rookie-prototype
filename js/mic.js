(function() {
  function monteCarlo() {
    var random3 = Math.random() * 0.2;
    var random1 = Math.random() * 0.3;
    var random2 = Math.random();
    return (random1 < random3) ? random2 : (random1 < random2) ? random1 : random2;
  }
  var $level = $('#microphone_level');
  var $rec = $('#microphone_record');
  var $wave = $('#level2_doit .waveform');
  var $play = $('#play');
  var $mp3 = $('#recording');
  var height = 100;
  var interval;
  function activateRecord() {
    interval = setInterval(function() {
      var rand = monteCarlo();
      var newHeight = Math.floor(height * rand);
      $level.css({
        'height': newHeight + 'px'
      });
    }, 1000/10);
  }
  function deactivateRecord() {
    clearInterval(interval);
    $level.css({
      'height': '0px'
    });
    $rec.removeClass('active');
  }
  $rec.on('click', function() {
    if ($rec.hasClass('active')) {
      $rec.removeClass('active');
      deactivateRecord();
      $wave.slideDown(function () {
        $play.addClass('active');
      });
    }
    else {
      $rec.addClass('active');
      activateRecord();
      $wave.slideUp();
      $play.removeClass('active');
      stop();
    }
  });
  $('#level2_doit').on('deactivated', stop);
  function stop() {
    $mp3.get(0).pause();
    $mp3.get(0).src = $mp3.get(0).src;
    playing = false;
  }
  var playing;
  $play.on('click', function() {
    if (playing) {
      stop();
    }
    else {
      playing = true;
      $mp3.get(0).play();
    }
  });
})();
