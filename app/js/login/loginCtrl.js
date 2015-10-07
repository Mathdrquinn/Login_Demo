(function () {
  "use strict";
      angular
          .module('loginGroup')
          .controller('loginCtrl', ['$scope', '$firebaseAuth', 'loginSvc',
              function ($scope, $firebaseAuth, loginSvc) {

                $scope.works = "Yatta!"


                var authentication = loginSvc.authenticationRef

                $scope.login = function(user) {

                  authentication.authWithPassword({
                      email    : user.email,
                      password : user.password
                  }, function(error, authData) {
                      // Callback for Firebase Login
                      if(error) {
                        //  Error, log it.
                        console.log(error)
                      } else {
                        console.log("Successfully created user account with uid:", authData);
                        $scope.success = authData;
                        $scope.user = {};
                        $scope.$digest();
                        loginSvc.setUser(authData)
                        $scope.user = loginSvc.user;
                        debugger;
                        $state.go('home.user');
                      }
                  }, {
                    remember: "sessionOnly"
                  });

                }

              }
          ])

})()
