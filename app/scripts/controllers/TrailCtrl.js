(function() {
  function TrailCtrl(Trails, $stateParams, $state) {
    var trailBeingPassed = $stateParams.trailId;
    this.trailData = Trails.getTrail(trailBeingPassed);

    /*this.run = function($state, $stateParams) {
      var trailBeingPassed = $stateParams.trailId;
      this.trailData = Trails.getTrail(trailBeingPassed);
    }*/
  }

  angular
    .module('sloHiker')
    .controller('TrailCtrl', ['Trails', '$stateParams', '$state', TrailCtrl]);

    /*.run(['$state', '$stateParams',
    function($state, $stateParams) {
      var trailBeingPassed = $stateParams.trailId;
      this.trailData = Trails.getTrail(trailBeingPassed);
    }]); error unexpected . */
})();
