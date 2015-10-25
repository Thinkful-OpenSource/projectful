'use strict';

/* jshint -W098 */
angular.module('mean.projectful').controller('ProjectfulController', ['$scope', 'Global', 'Projectful',
  function($scope, Global, Projectful) {
    $scope.global = Global;
    $scope.package = {
      name: 'projectful'
    };
  }
]);
