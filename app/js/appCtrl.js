(function () {
    "use strict";

    angular
        .module('LoginApp')
        .controller('appCtrl', ['$scope', '$filter', '$state', '$firebaseObject', function ($scope, $filter, $state, $firebaseObject) {

            // Checker
            $scope.works = 'appCtrl is here, Yatta!';


            // Initialize Firebase Data
            var ref = new Firebase("https://fiery-torch-4029.firebaseio.com");
            // download the data into a local object
            $scope.data = $firebaseObject(ref);


            $scope.consoleData = function () {
              console.log($scope.data);
            }


            //Event Listeners

        }]);
})();
