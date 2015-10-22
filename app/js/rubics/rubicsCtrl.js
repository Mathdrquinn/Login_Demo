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

                    $http.get('js/rubics/rubics.json').success(function(data) {
                        $scope.rubics = $scope.loop(data, $scope.setCubeStyles);
                    });

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

                    $scope.slideForward = function (cube) {
                        if (cube.start) {

                          var move = $scope.move,
                              dim = $scope.move.dim,
                              movePos = parseFloat($scope.move[dim]);
                          if (cube.currentCoords[dim] === movePos) {
                              // console.log('Yes to: ' + cube.start);
                            //   cube.currentCoords[dim]++
                              // cube.currentCoords = $scope.tirnaryAdd(cube, dim, move)
                              $scope.tirnaryAdd(cube, dim, move)
                              cube = $scope.setCubeStyles(cube, dim);
                          } else {
                          //  console.log('No to: ' + cube.start);
                          }

                        }
                      return cube;
                    }

                    $scope.tirnaryAdd = function (cube, dim, move) {
                        switch (dim) {
                            case 'z':
                                cube = rotateZ(cube);
                                break;
                            case 'y':
                                cube = rotateY(cube);
                                break;
                            case 'x':
                                cube = rotateX(cube);
                                break;
                        }
                    }

                    $scope.setCubeStyles = function (cube, dim) {
                        if (!cube.translate) {
                            cube.translate = {
                                z: 0,
                                y: 0,
                                x: 0
                            }
                        }

                        //move this is an object that determines how the grid has been mutated and returns {newDim, movementDeg}
                        cube.translate = findNewPlane(cube, dim)

                        // cube.translate[dim] +=90;
                        var newStyle = {
                                transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateX(" + (-1 * cube.translate.x) + "deg) rotateY(" + cube.translate.y + "deg) rotateZ(" + cube.translate.z + "deg)",
                        };
                        cube.cubeStyles = newStyle;
                        return cube;
                    }

                    var findNewPlane = function (cube, dim) {
                        var cartPos = {
                            z: cube.translate.z % 360,
                            y: cube.translate.y % 360,
                            x: cube.translate.x % 360
                        }
                        // debugger;
                        if (dim === 'z' && (cartPos.x === 90 || cartPos.x === -270)) {
                            cube.translate['y'] -= 90;
                            return cube.translate;
                        }
                        else if (dim === 'z' && (cartPos.x === 180 || cartPos.x === -180)) {
                            cube.translate[dim] -= 90;
                            return cube.translate;
                        }
                        else if (dim === 'z' && (cartPos.x === 270 || cartPos.x === -90)) {
                            cube.translate['y'] += 90;
                            return cube.translate;
                        }
                        else if (dim === 'y' && (cartPos.x === 90 || cartPos.x === -270)) {
                            cube.translate['z'] += 90;
                            return cube.translate;
                        }
                        else if (dim === 'y' && (cartPos.x === 180 || cartPos.x === -180)) {
                            cube.translate[dim] -= 90;
                            return cube.translate;
                        }
                        else if (dim === 'y' && (cartPos.x === 270 || cartPos.x === -90)) {
                            cube.translate['z'] -= 90;
                            return cube.translate;
                        } else {
                            cube.translate[dim] +=90;
                            return cube.translate;
                        }
                    }

                    $scope.resetCubeStyles = function (cube) {
                          cube.currentCoords.z = cube.startCoords.z;
                          cube.currentCoords.y = cube.startCoords.y;
                          cube.currentCoords.x = cube.startCoords.x;
                          var newStyle = {
                                  transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateX(" + 0 + "deg) rotateY(" + 0 + "deg) rotateZ(" + 0 + "deg)",
                          };

                          cube.cubeStyles = newStyle;
                          cube.translate = {
                              x: 0,
                              y: 0,
                              z: 0
                          }
                          return cube;
                    }

                    $scope.move = {};

                    var rotateX = function (cube) {
                        // console.log(cube.start);
                        // debugger;
                        // console.log(cube.currentCoords.z + '' + cube.currentCoords.y);
                        switch (cube.currentCoords.z + '' + cube.currentCoords.y) {
                            case '00':
                                cube.currentCoords.y = 2;
                                break;
                            case '02':
                                cube.currentCoords.z = 2;
                                break;
                            case '22':
                                cube.currentCoords.y = 0;
                                break;
                            case '20':
                                cube.currentCoords.z = 0;
                                break;
                            case '01':
                                cube.currentCoords.z = 1;
                                cube.currentCoords.y = 2;
                                break;
                            case '12':
                                cube.currentCoords.z = 2;
                                cube.currentCoords.y = 1;
                                break;
                            case '21':
                                cube.currentCoords.z = 1;
                                cube.currentCoords.y = 0;
                                break;
                            case '10':
                                cube.currentCoords.z = 0;
                                cube.currentCoords.y = 1;
                                break;
                        }
                    }

                    var rotateY = function (cube) {
                        console.log(cube.currentCoords.z + '' + cube.currentCoords.x);
                        switch (cube.currentCoords.z + '' + cube.currentCoords.x) {
                            case '00':
                                cube.currentCoords.x = 2;
                                break;
                            case '02':
                                cube.currentCoords.z = 2;
                                break;
                            case '22':
                                cube.currentCoords.x = 0;
                                break;
                            case '20':
                                cube.currentCoords.z = 0;
                                break;
                            case '01':
                                cube.currentCoords.z = 1;
                                cube.currentCoords.x = 2;
                                break;
                            case '12':
                                cube.currentCoords.z = 2;
                                cube.currentCoords.x = 1;
                                break;
                            case '21':
                                cube.currentCoords.z = 1;
                                cube.currentCoords.x = 0;
                                break;
                            case '10':
                                cube.currentCoords.z = 0;
                                cube.currentCoords.x = 1;
                                break;
                        }
                    }

                    var rotateZ = function (cube) {
                        console.log(cube.currentCoords.y + '' + cube.currentCoords.x);
                        switch (cube.currentCoords.y + '' + cube.currentCoords.x) {
                            case '00':
                                cube.currentCoords.x = 2;
                                break;
                            case '02':
                                cube.currentCoords.y = 2;
                                break;
                            case '22':
                                cube.currentCoords.x = 0;
                                break;
                            case '20':
                                cube.currentCoords.y = 0;
                                break;
                            case '01':
                                cube.currentCoords.y = 1;
                                cube.currentCoords.x = 2;
                                break;
                            case '12':
                                cube.currentCoords.y = 2;
                                cube.currentCoords.x = 1;
                                break;
                            case '21':
                                cube.currentCoords.y = 1;
                                cube.currentCoords.x = 0;
                                break;
                            case '10':
                                cube.currentCoords.y = 0;
                                cube.currentCoords.x = 1;
                                break;
                        }
                    }

            }]);
}
)();
