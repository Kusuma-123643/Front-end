var app = angular.module('myApp', []);

app.controller('ApiCtrl', function($scope) {
  $scope.text = "AngularJS is Awesome!";
  $scope.upper = angular.uppercase($scope.text);
  $scope.lower = angular.lowercase($scope.text);
});
