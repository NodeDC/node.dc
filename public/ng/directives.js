/*global angular */
/*******************************************************************************
 * Directives
 ******************************************************************************/

angular.module('nodeDC.directives', [])
    .directive('appVersion', function (version) {
        'use strict';
        return function(scope, elm) {
            elm.text(version);
        };
    });