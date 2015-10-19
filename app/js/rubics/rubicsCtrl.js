(function () {
    "use strict";

        angular
            .module('rubicsGroup')
            .controller('rubicsCtrl', ['$scope', '$filter', 'rubicsSvc',
                function ($scope, $filter, rubicsSvc) {

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

                    $scope.move = {};

                    var add = function (cube) {
                      var start = cube.start,
                          currentZ = cube.currentCoords.z,
                          currentY = cube.currentCoords.y,
                          currentX = cube.currentCoords.x;
                    }

                    $scope.slideForward = function (move) {
                      console.log('slideForward')
                      for (var i = 0; i < $scope.rubics.sections.length; i++) {
                        console.log('Seciton ' + i);
                        for (var cube in $scope.rubics.sections[i]) {

                          if ($scope.rubics.sections[i][cube].start) {

                            var block = $scope.rubics.sections[i][cube],
                                dim = move.dim,
                                movePos = parseFloat(move[dim]);

                            if (block.currentCoords[dim] === movePos) {
                                console.log('Yes to: ' + block.start);
                                block.currentCoords[dim]++
                                block.setCubeStyles();
                            } else {
                             console.log('No to: ' + block.start);
                            }

                          }
                        }
                      }
                      $scope.move = {};
                    }

                    $scope.rubics = {
                      sections: [
                        {
                            '000': {
                                start: '000',
                                startCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 0,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 0,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '001': {
                                start: '001',
                                startCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 1,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 1,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '002': {
                                start: '002',
                                startCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 2,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 0,
                                  x: 2,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '010': {
                                start: '010',
                                startCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 0,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 0,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '011': {
                                start: '011',
                                startCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 1,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 1,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '012': {
                                start: '012',
                                startCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 2,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 1,
                                  x: 2,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '020': {
                                start: '020',
                                startCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 0,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 0,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '021': {
                                start: '021',
                                startCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 1,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 1,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            },
                            '022': {
                                start: '022',
                                startCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 2,
                                },
                                currentCoords: {
                                  z: 0,
                                  y: 2,
                                  x: 2,
                                },
                                cubeStyles: {},
                                setCubeStyles: function () {
                                    var styles = {
                                        'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                    };

                                    this.cubeStyles = styles;

                                    return styles;
                                }
                            }
                        },
                        {
                          '100': {
                              start: '100',
                              startCoords: {
                                z: 1,
                                y: 0,
                                x: 0,
                              },
                              currentCoords: {
                                z: 1,
                                y: 0,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '101': {
                              start: '101',
                              startCoords: {
                                z: 1,
                                y: 0,
                                x: 1,
                              },
                              currentCoords: {
                                z: 1,
                                y: 0,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '102': {
                              start: '102',
                              startCoords: {
                                z: 1,
                                y: 0,
                                x: 2,
                              },
                              currentCoords: {
                                z: 1,
                                y: 0,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '110': {
                              start: '110',
                              startCoords: {
                                z: 1,
                                y: 1,
                                x: 0,
                              },
                              currentCoords: {
                                z: 1,
                                y: 1,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '111': {
                              start: '111',
                              startCoords: {
                                z: 1,
                                y: 1,
                                x: 1,
                              },
                              currentCoords: {
                                z: 1,
                                y: 1,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '112': {
                              start: '112',
                              startCoords: {
                                z: 1,
                                y: 1,
                                x: 2,
                              },
                              currentCoords: {
                                z: 1,
                                y: 1,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '120': {
                              start: '120',
                              startCoords: {
                                z: 1,
                                y: 2,
                                x: 0,
                              },
                              currentCoords: {
                                z: 1,
                                y: 2,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '121': {
                              start: '121',
                              startCoords: {
                                z: 1,
                                y: 2,
                                x: 1,
                              },
                              currentCoords: {
                                z: 1,
                                y: 2,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '122': {
                              start: '122',
                              startCoords: {
                                z: 1,
                                y: 2,
                                x: 2,
                              },
                              currentCoords: {
                                z: 1,
                                y: 2,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          }
                        },
                        {
                          '200': {
                              start: '200',
                              startCoords: {
                                z: 2,
                                y: 0,
                                x: 0,
                              },
                              currentCoords: {
                                z: 2,
                                y: 0,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '201': {
                              start: '201',
                              startCoords: {
                                z: 2,
                                y: 0,
                                x: 1,
                              },
                              currentCoords: {
                                z: 2,
                                y: 0,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '202': {
                              start: '202',
                              startCoords: {
                                z: 2,
                                y: 0,
                                x: 2,
                              },
                              currentCoords: {
                                z: 2,
                                y: 0,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '210': {
                              start: '210',
                              startCoords: {
                                z: 2,
                                y: 1,
                                x: 0,
                              },
                              currentCoords: {
                                z: 2,
                                y: 1,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '211': {
                              start: '211',
                              startCoords: {
                                z: 2,
                                y: 1,
                                x: 1,
                              },
                              currentCoords: {
                                z: 2,
                                y: 1,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '212': {
                              start: '212',
                              startCoords: {
                                z: 2,
                                y: 1,
                                x: 2,
                              },
                              currentCoords: {
                                z: 2,
                                y: 1,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '220': {
                              start: '220',
                              startCoords: {
                                z: 2,
                                y: 2,
                                x: 0,
                              },
                              currentCoords: {
                                z: 2,
                                y: 2,
                                x: 0,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '221': {
                              start: '221',
                              startCoords: {
                                z: 2,
                                y: 2,
                                x: 1,
                              },
                              currentCoords: {
                                z: 2,
                                y: 2,
                                x: 1,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          },
                          '222': {
                              start: '222',
                              startCoords: {
                                z: 2,
                                y: 2,
                                x: 2,
                              },
                              currentCoords: {
                                z: 2,
                                y: 2,
                                x: 2,
                              },
                              cubeStyles: {},
                              setCubeStyles: function () {
                                  var styles = {
                                      'transform' : 'translate(' + 0 + 'px, ' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + (this.startCoords.x - this.currentCoords.x) * 90 + 'deg) rotateY(' + (this.startCoords.y - this.currentCoords.y) * 90 + 'deg) rotateZ(' + (this.startCoords.z - this.currentCoords.z) * 90 + 'deg)',
                                  };

                                  this.cubeStyles = styles;

                                  return styles;
                              }
                          }
                        }
                      ]
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
