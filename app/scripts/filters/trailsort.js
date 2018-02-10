(function(){
  function trailsort () {
    return function(items, field) {
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (a[field] > b[field] ? 1 : -1);
      });
      return filtered;
    };
  }

  angular
    .module('sloHiker')
    .filter('trailsort', trailsort);
})();
