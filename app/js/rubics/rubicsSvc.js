angular
    .module('rubicsGroup')
    .factory('rubicsSvc', ['$http',
        function($http){

          var rubicsData = $http.get('js/rubics/rubics.json').success(function(data) {
              console.log(data);
              return data;
          });

          return {
              rubicsData: rubicsData
          }
    }]);
