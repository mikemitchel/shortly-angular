angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {}

  $scope.shortenLink = function (link) {
    Links.addLink(link)
    .then(function(data) {
      console.log('data',data.data)
      $scope.link = data.data;
    })
    .catch(function(err) {
      console.log(err)
    })


  }
  //   return $http({
  //     method: 'POST',
  //     url: '/api/shorten',
  //     data: link
  // })
  //   .then(function(resp){
  //   return resp.data.link;
  // });

  // };
});
