/*global angular */
/*******************************************************************************
 * Controllers
 ******************************************************************************/

angular.module('nodeDC.controllers', [])
    .controller('HomeCtrl', function ($scope, $http) {
        'use strict';
        $http({
            method: 'GET',
            url: '/api/name'
        })
        .success(function (data) {
            $scope.name = data.name;
        })
        .error(function () {
            $scope.name = 'Error!';
        });
    })
    .controller('AboutCtrl', function () {
        'use strict';
        // write Ctrl here
    })
    .controller('ContactCtrl', function ($scope) {
        'use strict';
        $scope.userSubmitted = false;

        $scope.userSubmit = function() {
            $scope.userSubmitted = true;
        };
    });