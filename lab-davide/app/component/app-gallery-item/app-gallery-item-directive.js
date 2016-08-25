'use strict';

//default for all directive below//
const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryItem', function () {
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    template: require('./app-gallery-item.html'),
    scope: {
      image: '='
    }
  };
});
