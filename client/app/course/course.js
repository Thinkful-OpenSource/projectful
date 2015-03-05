'use strict';

angular.module('projectfulApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('course', {
        url: '/course',
        templateUrl: 'app/course/views/index.html',
        controller: 'CourseCtrl'
      })
      .state('course-add', {
        url: '/course/add',
        templateUrl: 'app/course/views/add.html',
        controller: 'CourseCtrl'
      })
      .state('course-view', {
        url: '/course/{id:[0-9a-fA-F]{24}}',
        templateUrl: 'app/course/views/view.html',
        controller: 'CourseCtrl'
      })
      .state('course-edit', {
        url: '/course/{id:[0-9a-fA-F]{24}}/edit',
        templateUrl: 'app/course/views/edit.html',
        controller: 'CourseCtrl'
      });
  });