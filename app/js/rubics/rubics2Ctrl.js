(function () {
    "use strict";

        angular
            .module('rubicsGroup')
            .controller('rubics2Ctrl', ['$scope', '$filter', '$http',
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

                      $scope.rubics = scope.rubics;

                      debugger;
                      return false;
                    }

                    $http.get('js/rubics/rubics.json').success(function(data) {
                        $scope.rubics = data;
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

                    $scope.slideForward = function (block) {
                        if (block.start) {

                          var move = $scope.move,
                              dim = move.dim,
                              movePos = parseFloat(move[dim]);
                          if (block.currentCoords[dim] === movePos) {
                              block = $scope.tirnaryAdd(block, dim, move)
                          } else {
                        //    console.log('No to: ' + cube.start);
                          }

                        }
                      return block;
                    }

                    $scope.tirnaryAdd = function (cub, dim, move) {
                        switch (dim) {
                            case 'z':
                                cub = rotateZ(cub);
                                break;
                            case 'y':
                                cub = rotateY(cub);
                                break;
                            case 'x':
                                cub = rotateX(cub);
                                break;
                        }
                        var theCube = $scope.setCubeStyles(cub, dim);
                        return theCube;
                    }

                    $scope.setCubeStyles = function (cubage, dim) {
                        var newStyle = {
                                transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateZ(" + (cubage.spin.z) + "deg) rotateY(" + cubage.spin.y + "deg) rotateX(" + cubage.spin.x + "deg)",
                        };
                        cubage.cubeStyles = newStyle;
                        return cubage;
                    }

                    $scope.resetCubeStyles = function (cube) {
                        var newStyle = {
                                transform : "translate(" + 0 + "px, " + 0 + "px) translateZ(" + 0 + "px) rotateZ(" + (cube.startSpin.z) + "deg) rotateY(" + cube.startSpin.y + "deg) rotateX(" + cube.startSpin.x + "deg)",
                        };

                        cube.cubeStyles = newStyle;
                        cube.currentCoords = {
                            z: cube.startCoords.z,
                            y: cube.startCoords.y,
                            x: cube.startCoords.x
                        }
                        cube.spin = {
                            z: cube.startSpin.z,
                            y: cube.startSpin.y,
                            x: cube.startSpin.x
                        }
                        return cube;
                    }

                    $scope.move = {};

                    var rotateX = function (xcube) {
                        console.log('before: ' + xcube.spin.x)
                        xcube.spin.x += 90;
                        console.log('after: ' + xcube.spin.x)
                        switch (xcube.currentCoords.z + '' + xcube.currentCoords.y) {
                            case '00':
                                xcube.currentCoords.y = 2;
                                break;
                            case '02':
                                xcube.currentCoords.z = 2;
                                break;
                            case '22':
                                xcube.currentCoords.y = 0;
                                break;
                            case '20':
                                xcube.currentCoords.z = 0;
                                break;
                            case '01':
                                xcube.currentCoords.z = 1;
                                xcube.currentCoords.y = 2;
                                break;
                            case '12':
                                xcube.currentCoords.z = 2;
                                xcube.currentCoords.y = 1;
                                break;
                            case '21':
                                xcube.currentCoords.z = 1;
                                xcube.currentCoords.y = 0;
                                break;
                            case '10':
                                xcube.currentCoords.z = 0;
                                xcube.currentCoords.y = 1;
                                break;
                        }
                        return xcube;
                    }

                    var rotateY = function (ycube) {
                        console.log(ycube.currentCoords.z + '' + ycube.currentCoords.x);
                        console.log('before: ' + ycube.spin.y)
                        if(ycube.spin.z % 360 == 270 || ycube.spin.z % 360 == -90 || ycube.spin.z % 360 == 90 || ycube.spin.z % 360 == -270) {
                            if(ycube.spin.y % 360 === 0) {
                                ycube.spin.x -= 90;
                            } else {
                                ycube.spin.x += 90;
                            }
                        }
                        else if(ycube.spin.z % 360 == 180 || ycube.spin.z % 360 == -180) {
                            ycube.spin.y -= 90;
                        } else {
                            ycube.spin.y += 90;
                        }
                        console.log('after: ' + ycube.spin.y)

                        switch (ycube.currentCoords.z + '' + ycube.currentCoords.x) {
                            case '00':
                                ycube.currentCoords.x = 2;
                                break;
                            case '02':
                                ycube.currentCoords.z = 2;
                                break;
                            case '22':
                                ycube.currentCoords.x = 0;
                                break;
                            case '20':
                                ycube.currentCoords.z = 0;
                                break;
                            case '01':
                                ycube.currentCoords.z = 1;
                                ycube.currentCoords.x = 2;
                                break;
                            case '12':
                                ycube.currentCoords.z = 2;
                                ycube.currentCoords.x = 1;
                                break;
                            case '21':
                                ycube.currentCoords.z = 1;
                                ycube.currentCoords.x = 0;
                                break;
                            case '10':
                                ycube.currentCoords.z = 0;
                                ycube.currentCoords.x = 1;
                                break;
                        }

                        return ycube
                    }

                    var rotateZ = function (cube) {
                        console.log(cube.currentCoords.z + '' + cube.currentCoords.y + '' + cube.currentCoords.x);
                        console.log('before: ' + cube.spin.z)
                        cube.spin.z += 90;
                        console.log('after: ' + cube.spin.z)

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

                        return cube
                    }

            }]);
}
)();
