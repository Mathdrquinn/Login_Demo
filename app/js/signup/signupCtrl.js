(function () {
    "use strict";

        angular
            .module('signupGroup')
            .controller('signupCtrl', ['$scope', '$filter', '$state', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 'signupSvc',
                function ($scope, $filter, $state, $firebaseObject, $firebaseArray, $firebaseAuth, signupSvc) {

                    // Checker
                    $scope.works = signupSvc.works;

                    // Firebase Login
                    // $scope.login = function() {
                    //     $scope.authData = null;
                    //     $scope.error = null;
                    //
                    //     signupSvc.authentication.$authAnonymously().then(function(authData) {
                    //         $scope.authData = authData;
                    //     }).catch(function(error) {
                    //         $scope.error = error;
                    //     });
                    // };

                    var authenticationRef = signupSvc.authenticationRef;

                    $scope.createUser = function(newUser) {
                        debugger;

                        if(Boolean(newUser.email) && Boolean(newUser.password)) {

                            authenticationRef.createUser({
                                email    : newUser.email,
                                password : newUser.password
                            }, function(error, userData) {
                                if (error) {
                                    console.log("Error creating user:", error);
                                } else {
                                    console.log("Successfully created user account with uid:", userData.uid);
                                    $scope.success = userData;
                                    $scope.$digest();
                                    debugger;
                                    $state.go('home.user')
                                }
                            });

                            $scope.user = {};
                        }
                        else {
                          console.log('bad')
                        }

                    }

                    //Event Listeners

            }]);

})();
