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
    })
    .controller('MeetupsCtrl', function ($scope, $http) {
        'use strict';
        $http({
            method: 'GET',
            url: '/api/meetups'
        })
        .success(function (data) {
            var results = data.results;
            if (results) {
                results.forEach(function(result) {
                    result.visible = false;
                });
            }

            $scope.meetups = results;
        });
        $scope.toggleVisibility = function (meetup) {
            meetup.visible = !meetup.visible;
        };
    })
    .controller('IrcCtrl', function ($scope, $http) {
        'use strict';
        $http({
            method: 'GET',
            url: '/api/irc'
        })
        .success(function (data) {
            if (data) {
                data.forEach(function(result) {
                    var sentAt = new Date(result.sent_at);
                    var currentTimeZoneOffsetInHours = sentAt.getTimezoneOffset() / 60;
                    if (currentTimeZoneOffsetInHours > 0) {
                        currentTimeZoneOffsetInHours = "+" + currentTimeZoneOffsetInHours;
                    }
                    var sentAtFormattedDate = (sentAt.getMonth()+1) + "/" + sentAt.getDate()    + "/" + sentAt.getFullYear();
                    var sentAtFormattedTime = sentAt.getHours()     + ":" + sentAt.getMinutes() + ":" + sentAt.getSeconds() + " (UTC" + currentTimeZoneOffsetInHours + ")";
                    result.sentAtFormatted  = sentAtFormattedDate   + " " + sentAtFormattedTime;
                    result.sentAt = sentAt;
                });
            }

            $scope.messages = data;
        });
    });
