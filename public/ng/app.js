/*global angular */
/*******************************************************************************
 * Declare app level module which depends on filters, and services
 ******************************************************************************/

angular.module('nodeDC', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'nodeDC.controllers',
    'nodeDC.filters',
    'nodeDC.services',
    'nodeDC.directives'
])
.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'partials/partialHome',
        controller: 'HomeCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'partials/partialAbout',
        controller: 'AboutCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'partials/partialContact',
        controller: 'ContactCtrl'
    })
    .state('meetups', {
        url: '/meetups',
        templateUrl: 'partials/partialMeetups',
        controller: 'MeetupsCtrl'
    })
    .state('irc', {
        url: '/irc',
        templateUrl: 'partials/partialIrc',
        controller: 'IrcCtrl'
    });

    $urlRouterProvider.otherwise('/');

});
