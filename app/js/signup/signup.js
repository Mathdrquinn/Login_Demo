angular
.module('signupGroup', [
  'firebase',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
])
.config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
  // Clean Url
  // $locationProvider.html5Mode(true);
})
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'signupCtrl'
  })
});
