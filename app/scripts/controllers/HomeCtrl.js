(function() {
  function HomeCtrl(Trails) {
    console.log("made it to home controller");

    this.options = {
      map: {
        center: new google.maps.LatLng(48, -121),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      },
      notselected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      },
      selected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
      }
    };

    this.volcanoes = [
      {
        id: 0,
        name: 'Mount Rainier',
        img: 'http://www.thetrackerfoundation.org/Images/MountRainier_SM.jpg',
        elevationMeters: 4392,
        location: {
          lat: 46.852947,
          lng: -121.760424
        }
      },
      {
        id: 1,
        name: 'Mount Baker',
        img: 'http://www.destination360.com/north-america/us/washington/images/s/washington-mt-baker-ski.jpg',
        elevationMeters: 3287,
        location: {
          lat: 48.776797,
          lng: -121.814467
        }
      },
      {
        id: 2,
        name: 'Glacier Peak',
        img: 'http://www.rhinoclimbs.com/Images/Glacier.9.jpg',
        elevationMeters: 3207,
        location: {
          lat: 48.111844,
          lng: -121.11412
        }
      }
    ];

    this.getVolcanoOpts = function(volcano) {
     return angular.extend(
       { title: volcano.name },
       volcano.selected ? this.options.selected :
          this.options.notselected
      );
    };

    this.selectVolcano = function(volcano) {
      if (this.volcano) {
        this.volcano.selected = false;
      }
      this.volcano = volcano;
      this.volcano.selected = true;

      this.$broadcast('gmMarkersUpdate', 'volcanoes');
    };
  }

  angular
    .module('sloHiker')
    .controller('HomeCtrl', ['Trails', HomeCtrl]);
})();
