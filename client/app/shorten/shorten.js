angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {}

  $scope.shortenLink = function () {
    Links.addLink()
    .then(function(data) {
      console.log('data',data)
      $scope.link = data;
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
