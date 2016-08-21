'use strict';

require('angular').module('galleryApp')
.directive('appGallery', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery.html'),
    controller: 'AppGalleryController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true
  };
});
