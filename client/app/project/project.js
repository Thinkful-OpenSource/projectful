'use strict';

angular.module('projectfulApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/views/index.html',
        controller: 'ProjectCtrl'
      })
      .state('project-add', {
        url: '/project/add',
        templateUrl: 'app/project/views/add.html',
        controller: 'ProjectCtrl'
      })
      .state('project-view', {
        url: '/project/{id:[0-9a-fA-F]{24}}',
        templateUrl: 'app/project/views/view.html',
        controller: 'ProjectCtrl'
      })
      .state('project-edit', {
        url: '/project/{id:[0-9a-fA-F]{24}}/edit',
        templateUrl: 'app/project/views/edit.html',
        controller: 'ProjectCtrl'
      });
  });