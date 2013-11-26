/*global angular */
/*******************************************************************************
 * Declare app level module which depends on filters, and services
 ******************************************************************************/

angular.module('nodeDC', [
    'ngRoute',
    'nodeDC.controllers',
    'nodeDC.filters',
    'nodeDC.services',
    'nodeDC.directives'
])
.config(function ($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider
    .when('/', {
        templateUrl: 'partials/partialHome',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: 'partials/partialAbout',
        controller: 'AboutCtrl'
    })
    .when('/contact', {
        templateUrl: 'partials/partialContact',
        controller: 'ContactCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});