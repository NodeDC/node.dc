/*global angular */
/*******************************************************************************
 * Controllers
 ******************************************************************************/

angular.module('nodeDC.controllers', [])
    .controller('HomeCtrl', function ($scope, $http, Chat) {
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

        $scope.lines = Chat.getLines();
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
    })
    .controller('MeetupsCtrl', function ($scope, $http) {
        'use strict';
        $scope.toggleDescription = false;
        $http({
            method: 'GET',
            url: '/api/meetups'
        })
        .success(function (data) {
            $scope.meetups = data.results;
        });
        $scope.showDescription = function () {
          $scope.toggleDescription = true;
        }
        $scope.hideDescription = function () {
          $scope.toggleDescription = false;
        }
    });
