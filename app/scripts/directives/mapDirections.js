(function (){
  function mapDirections() {


    return {
      templateUrl: '/templates/directives/map_directions.html',
      replace: true,
      restrict: 'E'
    };
  }

  angular
    .module('sloHiker')
    .directive('mapDirections', [mapDirections]);
})();
