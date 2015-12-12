angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
   $scope.links = {

   }

   $scope.spinner = false;
   $scope.getLinks = function() {
     $scope.spinner = true;
     Links.getLinks()
     .then(function(data) {
       $scope.links.data = data.data;
     })
     .catch(function(err) {
       console.log(err);
     })
   }
})

