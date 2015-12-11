angular.module('shortly.services', [])

// .factory('Links', function ($http, $location, Auth) {
//   // Your code here
//   if(Auth.isAuth) {

//     var title = function(link) {
//       return $http({

//       })
//     }


//     // return {
//     //   visits:     ,
//     //   title:      ,
//     //   original:   ,
//     //   base_url:'http://localhost:8000',
//     //   code:
//     // }

//   } else {
//     $location.path('/signin');
//   }

// .factory('Shorten', function ($http, $location, Auth) {
//   if(Auth.isAuth) {

//     var title = function(link) {
//       return $http({
//         method: 'POST',
//         url: '/api/links/shorten'
//         data
//       })
//     }


//     return {
//       visits:     ,
//       title:      ,
//       original:   ,
//       url:'http://localhost:8000',
//       code:
//     }

//   } else {
//     $location.path('/signin');
//   }

// })

// })
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
