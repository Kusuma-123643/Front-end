var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.message = "Hello from Controller!";
});

app.directive('customDirective', function() {
  return {
    template: "<p>This is from a custom directive.</p>"
  };
});
