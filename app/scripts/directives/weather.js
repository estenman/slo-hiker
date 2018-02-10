(function () {
  function weather () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $.simpleWeather({
          woeid: '2488117', //2357536
          location: '',
          unit: 'f',
          success: function(weather) {
            html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';

            for(var i=0;i<weather.forecast.length;i++) {
              html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
            }

            $("#weather").html(html);
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      }
    };
  }

  angular
    .module('sloHiker')
    .directive('weather', [weather]);
})();
