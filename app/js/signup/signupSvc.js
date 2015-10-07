(function () {

    angular
        .module('signupGroup')
        .factory('signupSvc',  ['$firebaseAuth',
            function($firebaseAuth) {

              // Checker
              var works = 'appCtrl is here, Yatta!';



              // create an instance of the authentication service
              var authRef = new Firebase("https://fiery-torch-4029.firebaseio.com");
              var auth = $firebaseAuth(authRef);

              return {
                  works: works,
                  authenticationRef: authRef,
                  authentication: auth

              }
            }
        ])

})()
