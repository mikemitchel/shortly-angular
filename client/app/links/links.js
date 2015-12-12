angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
   $scope.data = {

   }

   $scope.getLinks = function() {
     Links.getLinks()
     .then(function(res) {
       $scope.data = res;
       $scope.data.links = res.data
     })
     .catch(function(err) {
       console.log(err);
     })
   }

   $scope.getLinks();
})

