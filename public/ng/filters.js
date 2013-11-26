/*global angular */
/*******************************************************************************
 * Filters
 ******************************************************************************/

angular.module('nodeDC.filters', [])
    .filter('interpolate', function (version) {
        'use strict';
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    });