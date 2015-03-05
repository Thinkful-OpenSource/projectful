'use strict';

angular.module('projectfulApp')
  .controller('ProjectCtrl', function ($scope, $stateParams, $log, Project) {
    $scope.findAll = function() {
      $scope.projects = Project.query();
    };

    $scope.findOne = function() {
      $scope.project = Project.get({
        id: $stateParams.id
      });
    };

    $scope.create = function() {
      $log.info('Create method not implemented yet');
    };

    $scope.update = function() {
      $log.info('Update method not implemented yet');
    };

    $scope.remove = function() {
      $log.info('Remove method not implemented yet');
    };
  });
