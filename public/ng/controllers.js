'use strict';

/*******************************************************************************
 * Controllers
 ******************************************************************************/

angular.module('nodeDC.controllers', [])
  .controller('HomeCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  })
  .controller('AboutCtrl', function ($scope) {
    // write Ctrl here

  })
  .controller('ContactCtrl', function ($scope) {
    $scope.userSubmitted = false;

    $scope.userSubmit = function() {
        $scope.userSubmitted = true;
    };
  });