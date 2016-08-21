'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appImgItem', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./img-item.html'),
    scope: {
      image: '='
    }
  };
});
