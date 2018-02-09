(function() {
  function HomeCtrl(Trails) {
    this.trails = Trails.getAllTrails();

    this.changeFilterTo = function(item) {
      this.filter = item;
    }

    this.getFilter = function(){
      switch (this.filter) {
        case 'difficulty':
          return 'difficulty';
        case 'timeToHike':
          return 'timeToHike';
        case 'length':
          return 'length';
        default:
          return 'trailName';
      }
    }
  }

  angular
    .module('sloHiker')
    .controller('HomeCtrl', ['Trails', HomeCtrl]);
})();
