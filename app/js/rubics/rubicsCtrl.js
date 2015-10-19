(function () {
    "use strict";

        angular
            .module('rubicsGroup')
            .controller('rubicsCtrl', ['$scope', '$filter', '$http',
                function ($scope, $filter, $http) {

                    // Checker
                    $scope.works = "Yatta!"

                    $scope.rubicsX = 35;
                    $scope.rubicsY = 7;
                    $scope.rubicsZ = 0;

                    $scope.rubicsRX = -20;
                    $scope.rubicsRY = 20;
                    $scope.rubicsRZ = 0;

                    $scope.getScope = function () {
                      var scope = {
                        rubics: $scope.rubics
                      }
                      debugger;

                      $scope.rubics = scope.rubics;

                      debugger;
                      return false;
                    }

                    $scope.loop = function (data, func) {
                        for (var i = 0; i < data.sections.length; i++) {
                            for (var cube in data.sections[i]) {
                                if(data.sections[i][cube].start) {
                                  data.sections[i][cube] = func(data.sections[i][cube]);
                                }
                            }
                        }
                        $scope.move = {};
                        return data;
                    }

                    $scope.setCubeStyles = function (cube) {
                        var newStyle = {
                                transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateX(" + (cube.startCoords.x - cube.currentCoords.x) * 90 + "deg) rotateY(" + (cube.startCoords.y - cube.currentCoords.y) * 90 + "deg) rotateZ(" + (cube.startCoords.z - cube.currentCoords.z) * 90 + "deg)",
                        };
                        cube.cubeStyles = newStyle;
                        return cube;
                    }
                    $scope.resetCubeStyles = function (cube) {
                          cube.currentCoords.z = cube.startCoords.z;
                          cube.currentCoords.y = cube.startCoords.y;
                          cube.currentCoords.x = cube.startCoords.x;
                          var newStyle = {
                                  transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateX(" + (cube.startCoords.x - cube.currentCoords.x) * 90 + "deg) rotateY(" + (cube.startCoords.y - cube.currentCoords.y) * 90 + "deg) rotateZ(" + (cube.startCoords.z - cube.currentCoords.z) * 90 + "deg)",
                          };
                          cube.cubeStyles = newStyle;
                          return cube;
                    }

                    $scope.move = {};

                    var add = function (cube) {
                      var start = cube.start,
                          currentZ = cube.currentCoords.z,
                          currentY = cube.currentCoords.y,
                          currentX = cube.currentCoords.x;
                    }

                    $scope.slideForward = function (cube) {
                        if (cube.start) {

                          var dim = $scope.move.dim,
                              movePos = parseFloat($scope.move[dim]);
                          if (cube.currentCoords[dim] === movePos) {
                              console.log('Yes to: ' + cube.start);
                              cube.currentCoords[dim]++
                              cube = $scope.setCubeStyles(cube);
                          } else {
                           console.log('No to: ' + cube.start);
                          }

                        }
                      return cube;
                    }

                    $http.get('js/rubics/rubics.json').success(function(data) {
                        $scope.rubics = $scope.loop(data, $scope.setCubeStyles);
                    });

                    $scope.yell = function () {
                      console.log($scope.rubics)
                    }

                    // "setCubeStyles": function () {
                    //     var styles = {
                    //         "transform" : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateX(" + (this.startCoords.x - this.currentCoords.x) * 90 + "deg) rotateY(" + (this.startCoords.y - this.currentCoords.y) * 90 + "deg) rotateZ(" + (this.startCoords.z - this.currentCoords.z) * 90 + "deg)",
                    //     };
                    //
                    //     this.cubeStyles = styles;
                    //
                    //     return styles;
                    // }

                    // $scope.yell = 'Yatta!'

                    // $scope.changed = function () {
                    //   console.log($scope.X);
                    //   $scope.squareStyles = {
                    //     transform: 'translate(' + $scope.X + 'px, ' + $scope.Y + 'px, ' + $scope.Z + 'px)'
                    //   }
                    //   debugger;
                    // }

            }]);
}
)();
