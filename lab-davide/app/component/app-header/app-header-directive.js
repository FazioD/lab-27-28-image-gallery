'use strict';

require('angular').module('galleryApp')
.directive('appHeader', function () {
  return {
    restrict: 'E',
    replace: true,
    template: require('./header.html'),
    scope: {
      selectGalleryStyle: '&'
    }
  };
});
