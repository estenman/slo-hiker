(function() {
  function HomeCtrl(Trails) {
    this.trails = Trails.getAllTrails();
  }

  angular
    .module('sloHiker')
    .controller('HomeCtrl', ['Trails', HomeCtrl]);
})();
