'use strict';

angular.module('projectfulApp')
  .controller('CourseCtrl', function ($scope, $stateParams, $log, Course) {
    $scope.findAll = function() {
      $scope.courses = Course.query();
    };

    $scope.findOne = function() {
      $scope.course = Course.get({
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
