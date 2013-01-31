(function() {
  var Router = Backbone.Router.extend({
    routes: {
      'screen/:screen_id': 'screen'
    , '*path': 'home'
    },
    show: function(selector) {
      $('section.active').removeClass('active');
      $('section' + selector).addClass('active');
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
