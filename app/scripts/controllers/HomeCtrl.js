(function() {
  function HomeCtrl(Trails, $rootScope, $scope) {

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

    this.hikingTrails = [
      {
        id: 0,
        name: 'Cerro San Luis',
        img: 'http://www.thetrackerfoundation.org/Images/MountRainier_SM.jpg',
        elevationMeters: 4392,
        location: {
          lat: 35.2748481,
          lng: -120.6767364
        }
      },
      {
        id: 1,
        name: 'Irish Hills Mariposa King',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 35.254311,
          lng: -120.69525
        }
      },
      {
        id: 2,
        name: 'Irish Hills Froom Creek',
        img: 'http://www.rhinoclimbs.com/Images/Glacier.9.jpg',
        elevationMeters: 3207,
        location: {
          lat: 35.254311,
          lng: -120.69525
        }
      },
      {
        id: 3,
        name: 'Islay Hill',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 35.243296,
          lng: -120.62713
        }
      },
      {
        id: 4,
        name: 'Poly Canyon',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 35.30445,
          lng: -120.65845
        }
      },
      {
        id: 5,
        name: 'Felsman Loop',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 35.30433,
          lng: -120.685438
        }
      },
      {
        id: 6,
        name: 'Bishop Peak',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 35.30115,
          lng: -120.68916
        }
      }
    ];

    this.getHikingTrailOpts = function(trl) {
     return angular.extend(
       { title: trl.name },
       trl.selected ? this.options.selected :
          this.options.notselected
      );
    };

    this.selectHikingTrail = function(trl) {

      if ($scope.trl) {
        $scope.trl.selected = false;
      }
      $scope.trl = trl;
      $scope.trl.selected = true;

      $rootScope.$broadcast('gmMarkersUpdate', 'this.hikingTrails');
    };

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
    .controller('HomeCtrl', ['Trails', '$rootScope', '$scope', HomeCtrl]);
})();
