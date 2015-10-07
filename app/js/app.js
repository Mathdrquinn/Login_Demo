console.log('brendan');

angular
  .module('LoginApp', [
    'firebase',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'signupGroup',
    'loginGroup'
  ])
  .config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    // Clean Url
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'views/login.html',
    //   controller: 'appCtrl'
    // })
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: 'views/signup.html',
    //   controller: 'signupCtrl'
    // })
    .state('books', {
      url: '/books',
      templateUrl: 'views/books.html',
      controller: 'booksCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'appCtrl'
    })
    .state('home.user', {
      parent: 'home',
      url: 'user',
      views: {
        'home-window@home': {
          templateUrl: 'views/user.html'
        }
      }
    })
    // .state('home', {
    //   url: '/',
    //   views: {
    //     'page': {
    //       templateUrl: 'views/home.html',
    //       controller: 'appCtrl'
    //     }
    //   },
    //   abstract: true
    // })
    // .state('home.user', {
    //   parent: 'home',
    //   url: '/user',
    //   views: {
    //     'home-window@home': {
    //       templateUrl: 'views/user.html'
    //     }
    //   }
    // })
});
