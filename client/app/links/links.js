angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
   $scope.links = {

   }


   $scope.getLinks = function() {
     console.log('getLinks ran');
     Links.getLinks()
     .then(function(data) {
       console.log('data',data)
       $scope.links = data.data;
     })
     .catch(function(err) {
       console.log(err);
     })
   }
   $scope.getLinks();
})

