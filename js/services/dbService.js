angular.module('dbService',[])

  .service('db',function($http) {
    this.getMovies = function () {

      return $http({
        method:'GET',
        url : 'externalDb.json'
      })
    }
    
  })
