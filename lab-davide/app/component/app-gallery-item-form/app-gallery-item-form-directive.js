'use strict';

const angular = require('angular');
angular.module('galleryApp')
.directive('appGalleryItemForm', function() {
  return {
    restrict: 'E',
    replace: true,
    tamplate: require('./app-gallery-item-form.html'),
    scope: {
      btnTitle:  '@',
      submit: '&'
    }
  };
});
