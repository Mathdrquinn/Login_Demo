angular
.module('loginGroup', [
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
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  })
});
