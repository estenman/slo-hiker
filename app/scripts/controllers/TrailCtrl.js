(function() {
  function TrailCtrl(Trails) {
    this.trailData = Trails.getTrail();
    //this.showTrail = Trails.getTrail($stateParams.trailId);
  }

  angular
    .module('sloHiker')
    .controller('TrailCtrl', ['Trails', TrailCtrl]);
})();
