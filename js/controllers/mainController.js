angular.module('data', [])

  .controller('mainCtrl', function($scope, db, ) {
    $scope.movies = [];


    db.getMovies().then(function(res) {
      $scope.movies = res.data;
    });


  })

  .controller('oneMovieCtrl', function($scope, $routeParams, db) {
    $scope.para = $routeParams.id;
    console.log($scope.para);
    $scope.movie ={};

    db.getMovies().then(function(res) {
      let movie = res.data.filter(function(e) {
        return e.id == $scope.para;
      })
      $scope.movie = movie[0];
      console.log($scope.movie);

    });

  })
