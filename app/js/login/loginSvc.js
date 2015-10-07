(function () {

    angular
        .module('loginGroup')
        .factory('loginSvc', ['$firebaseAuth',
            function ($firebaseAuth) {

              // Checker
              var works = 'appCtrl is here, Yatta!';

              var user = false;

              // create an instance of the authentication service
              var authRef = new Firebase("https://fiery-torch-4029.firebaseio.com");
              var auth = $firebaseAuth(authRef);

              return {
                  works: works,
                  authenticationRef: authRef,
                  authentication: auth,
                  setUser: function (userData) {
                    user = userData;
                    this.user = userData;
                    return false;
                  },
                  user: user

              }

            }
        ])

})()
