(function () {
    "use strict";

        angular
            .module('rubicsGroup')
            .directive('frontface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/frontface.html'
                }
            })
            .directive('backface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/backface.html'
                }
            })
            .directive('leftface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/leftface.html'
                }
            })
            .directive('rightface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/rightface.html'
                }
            })
            .directive('topface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/topface.html'
                }
            })
            .directive('bottomface', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    templateUrl: '/templates/bottomface.html'
                }
            })
            // Summation of all of the face directives
            .directive('allfaces', function() {
                return {
                    restrict: 'E',
                    scope: {
                        data: '='
                    },
                    template: '<frontface></frontface><backface></backface><leftface></leftface><rightface></rightface><topface></topface><bottomface></bottomface>'
                }
            })
            .directive('cube', function() {
                return {
                    restrict: 'E',
                    scope: {
                      // ngz: '=',
                      // ngy: '=',
                      // ngx: '=',
                      // ngCubeStyles: '='
                    },
                    link: function(scope, element, attrs) {
                        scope.cube = attrs.cube;
                        scope.x = attrs.ngx
                    },
                    template: '<div class="cube" cube="{{ cube }}" ngz="{{ ngz }}" ngy="{{ ngy }}" ngx="{{ ngx }}" ng-style="{{ ngCubeStyles }}"><allfaces></allfaces></div>'
                }
            })
            // Attriubtes
            .directive('testing', function() {
                return {
                    restrict: 'A',
                    link: function(scope, element, attrs) {
                        // Some auth check function
                        // var isAuthorized = checkAuthorization();
                        // if (!isAuthorized) {
                        //     element.css('display', 'none');
                        // }
                      }
                }
            })

})();
