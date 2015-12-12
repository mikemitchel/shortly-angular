angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {}

  $scope.addLink = function (link) {
    Links.addLink(link)
    .then(function(data) {
     $scope.link = data.data;
    })
    .catch(function(err) {
      console.log(err)
    })


  }
  $scope.isAuth = function() {
     if(!Auth.isAuth()) {
      $location.path('/signin');
   }
 }

   $scope.isAuth();

});
