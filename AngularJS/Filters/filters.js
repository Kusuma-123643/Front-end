var app = angular.module('myApp', []);

app.controller('FilterCtrl', function($scope) {
  $scope.today = new Date();
  $scope.name = "AngularJS Filters";
  $scope.number = 12345.6789;
});

app.filter('reverse', function() {
  return function(input) {
    return input.split("").reverse().join("");
  };
});
