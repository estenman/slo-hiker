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
            html = '<div class="row">'+'<div class="col">';
            html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '</div>'+'</div>';
            html += '<div class="row">'+'<div class="col">';
            html += '<ul><li>'+weather.city+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '</div>'+'</div>';
            html += '<div class="row">'+'<div class="col weather-day">';

            for(var i=0;i<5;i++) {
              html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
            }
            html += '</div>'+'</div>';

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
