'use strict';

/*******************************************************************************
 * Filters
 ******************************************************************************/

angular.module('nodeDC.filters', [])
  .filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  });