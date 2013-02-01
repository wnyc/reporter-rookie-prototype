(function() {
  /*global router */
  function goTo(place) {
    router.goTo(place);
    window.scrollTo(0);
  }
  function current() {
    return $('section.active');
  }
  function next($fromEl) {
    var $el = $fromEl;
    var id = $el.next('section').attr('id');
    if (!id) return;
    goTo(id);
  }
  function prev($fromEl) {
    var $el = $fromEl;
    var id = $el.prev('section').attr('id');
    if (!id) return;
    goTo(id);
  }
  $('section').each(function(i, el) {
    var $el = $(el);
    $el.find('.next').on('click', function() { next($el); });
    $el.find('.prev').on('click', function() { prev($el); });
    $el.find('.jumpTo').on('click', function() {
      var id = $(this).attr('data-jump-to');
      if (!id) return;
      goTo(id);
    });
  });

  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) { // left key
      prev(current());
    }
    else if (e.keyCode === 39) { // right key
      next(current());
    }
  });
})();
