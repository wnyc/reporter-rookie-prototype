(function() {
  var $congrats = $('.congrats');
  $congrats.each(function(i, el) {
    var j;
    var $el = $(el);
    var $star = $('<div/>');
    var stars = [];
    $star.addClass('star');
    for (j = 0; j < 3; j++) {
      stars.push($star.clone());
    }
    $el.append.apply($el, stars);

    $el.on('activated', function() {
      setTimeout(function() {
        stars.forEach(function($s) {
          setTimeout(function() {
            $s.css({
              top: (650 + Math.floor((Math.random() * 500) + 200)) + 'px'
            });
          }, Math.floor(Math.random() * 200));
        });
      }, 500);
    });

    $el.on('deactivated', resetStars);

    function resetStars() {
      var left = Math.floor(Math.random() * 50);
      stars.forEach(function($s) {
        $s.css({
          top: '-50px'
        , left: left + 'px'
        });
        left = left + (Math.floor(Math.random() * 50) + 50);
      });
    }
    resetStars();
  });
})();
