(function() {
  function HomeCtrl(Trails, $rootScope, $scope, $log) {

//Retrieves all trails in the Trail service
    this.trails = Trails.getAllTrails();

//Used to indicate what the user selected to sort by
    this.changeFilterTo = function(item) {
      this.filter = item;
    }

//Returns to the views filter what the user choose to sort by.
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

//Provides information for map display
    this.options = {
      map: {
        center: new google.maps.LatLng(35.282752, -120.659616),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      },
      notselected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      },
      selected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
      }
    };

//map trail info
    this.hikingTrails = Trails.trailArray();

//Used to change the marker color when clicked on and to update indicator if it is selected.
    this.getHikingTrailOpts = function(trl) {
     return angular.extend(
       { title: trl.name },
       trl.selected ? this.options.selected :
          this.options.notselected
      );
    };

//Used to display the trail information when the marker is selected.
    this.selectHikingTrail = function(trl) {
      if ($scope.trl) {
        $scope.trl.selected = false;
      }
      $scope.trl = trl;
      $scope.trl.selected = true;

      $rootScope.$broadcast('gmMarkersUpdate', 'this.hikingTrails');
    };

  }

  angular
    .module('sloHiker')
    .controller('HomeCtrl', ['Trails', '$rootScope', '$scope', '$log', HomeCtrl]);
})();
