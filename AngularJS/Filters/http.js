var app = angular.module('myApp', []);

app.controller('HttpCtrl', function($scope, $http) {
  $http.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
      $scope.getData = response.data.title;
    });

  $http.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Test Post',
    body: 'This is a test',
    userId: 1
  }).then(function(response) {
    $scope.postStatus = response.status; 
  });
});
