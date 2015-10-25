'use strict';

angular.module('mean.projectful').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('projectful example page', {
      url: '/projectful/example',
      templateUrl: 'projectful/views/index.html'
    });
  }
]);
