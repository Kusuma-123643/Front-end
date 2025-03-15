var app = angular.module('myApp', []);

app.service('GreetService', function() {
  this.sayHello = function(name) {
    return "Hello " + name + " from Custom Service!";
  };
});

app.controller('ServiceCtrl', function($scope, $location, $timeout, GreetService) {
  $scope.url = $location.absUrl();

  $timeout(function() {
    $scope.delayedMessage = "This appeared after 2 seconds!";
  }, 2000);

  $scope.greetMessage = GreetService.sayHello("kusuma");
});
