'use strict';

angular.module('projectfulApp')
  .factory('Project', function Project($resource) {
    return $resource('/api/projects/:id/:controller', {
      id: '@_id'
    });
  });