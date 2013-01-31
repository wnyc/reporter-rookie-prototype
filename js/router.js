(function() {
  var Router = Backbone.Router.extend({
    routes: {
      'screen/:screen_id': 'screen'
    , '*path': 'home'
    },
    show: function(selector) {
      var $shown
        , $hidden;
      ($hidden = $('section.active')).removeClass('active');
      ($shown = $('section' + selector)).addClass('active');
      $shown.trigger('activated');
      $hidden.trigger('deactivated');
    },
    screen: function(screenID) {
      this.show('#' + screenID);
    },
    goTo: function(place) {
      this.navigate('screen/'+place, true);
    },
    home: function() {
      this.goTo('login');
    }
  });

  window.router = new Router;
  Backbone.history.start();
})();
