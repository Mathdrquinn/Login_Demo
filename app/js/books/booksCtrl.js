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
                  booksSvc.removeBook(bookIndex);
                  return false;
                };


                //Event Listeners

            }]);

})();
