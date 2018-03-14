angular.module('myApp',[
  'ngRoute',
  'data',
  'dbService'
])


.config(function($routeProvider, $locationProvider) { // routeProvider je servis  za ngRoute
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', { // when - zahteva 2 argumenta, prvo je putanja '/'(root), drugi je object
      templateUrl: "pages/movies.html",
      controller: "mainCtrl" // napravimo kontroler za njega ovo ide uz location routeProvider
    })
    .when('/movie/:id', {
      templateUrl: "pages/movie.html"
    })
    .otherwise({
      redirectTo: '/'
    })
})
