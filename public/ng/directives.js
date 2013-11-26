'use strict';

/*******************************************************************************
 * Directives
 ******************************************************************************/

angular.module('nodeDC.directives', [])
  .directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });