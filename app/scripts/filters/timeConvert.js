(function () {
  function timeConvert (){
    return function(time){
      if (time > 60) {
        var hour= Math.floor(time/60);
        var minutes= time - (hour*60);
        return hour + ' hr ' + minutes + ' m'
      } else if (time == 60) {
        return '1 hr'
      } else {
        return time + ' m';
      }
    };
  }
  angular
    .module('sloHiker')
    .filter('timeConvert', timeConvert);
})();
