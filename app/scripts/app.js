(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
    })

      .state('trail', {
        url: '/trails/:trailId',
        controller: 'TrailCtrl as trailmain',
        templateUrl: '/templates/trail.html'
      });

  }

  angular
    .module('sloHiker', ['ui.router'])
    .config(config);
})();
