'use strict';

angular.module('projectfulApp')
  .factory('Course', function Course($resource) {
    return $resource('/api/courses/:id/:controller', {
      id: '@_id'
    });
  });