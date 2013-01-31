(function() {
  /*global router */
  function goTo(place) { router.goTo(place); }
  $('section').each(function(i, el) {
    var $el = $(el);
    $el.find('.next').on('click', function() {
      var id = $el.next('section').attr('id');
      goTo(id);
    });
    $el.find('.prev').on('click', function() {
      var id = $el.prev('section').attr('id');
      goTo(id);
    });
  });
})();
