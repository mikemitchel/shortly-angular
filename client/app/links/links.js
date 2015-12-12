angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
   $scope.links = {}

   $scope.getLinks = function() {
     Links.getLinks()
     .then(function(data) {
       $scope.links.data = data.data;
     })
     .catch(function(err) {
       console.log(err);
     })
   }

  // $scope.getLinks = function (links) {
  // return $http({
  //   method: 'GET',
  //   url: '/api/links/allLinks'
  //  })
  //   .then(function(links){
  //     console.log(links);
  //     return links;
  // });
  //   .then(function(req, res) {
  //     res.send(200, '')
  //   })

   // };
  $scope.getLinks();
})

