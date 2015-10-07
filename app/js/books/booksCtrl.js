(function () {
    "use strict";

        angular
            .module('LoginApp')
            .controller('booksCtrl', ['$scope', '$filter', '$state', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 'booksSvc', function ($scope, $filter, $state, $firebaseObject, $firebaseArray, $firebaseAuth, booksSvc) {

                // Checker
                $scope.works = booksSvc.works;


                // Initialize Firebase Data
                $scope.books = booksSvc.books;


                // Add to Data
                $scope.addBook = function(book) {
                  booksSvc.addBook(book);
                  $scope.newBook = {};
                  return false;
                };

                // Remove to Data
                $scope.removeBook = function(bookIndex) {
                  debugger;
                  booksSvc.removeBook(bookIndex);
                  return false;
                };


                // Authentification
                var authRef = new Firebase("https://fiery-torch-4029.firebaseio.com/users");

                $scope.users = $firebaseObject(authRef);

                $scope.showUsers = function () {
                    console.log($scope.users);
                }

                // // create an instance of the authentication service
                // var auth = $firebaseAuth(authRef);
                //
                // // login with Facebook
                // $scope.authCred = auth.$authWithOAuthPopup("facebook").then(function(authData) {
                //     console.log("Logged in as:", authData.uid);
                //     return authData.uid;
                // })
                //     .catch(function(error) {
                //         console.log("Authentication failed:", error);
                //     });
                //
                // $scope.showAuth = function () {
                //     console.log($scope.authCred);
                // }
                //
                // $scope.consoleData = function () {
                //     console.log($scope.works);
                // }

                //Event Listeners

            }]);

})();
