angular
    .module('rubicsGroup', [
      // 'firebase',
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
        .state('rubics', {
          url: '/rubics',
          templateUrl: 'views/rubics.html',
          controller: 'rubicsCtrl'
        })
    });
