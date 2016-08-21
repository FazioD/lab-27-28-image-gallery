'use strict';

const angular = require('angular');
angular.module('galleryApp').controller('AppGalleryItemController', [AppGalleryItemController]);

function AppGalleryItemController() {
  console.log('hitting');
  this.updateImage = function(image) {
    console.log('hitting image', image);
    Object.keys(this.image).forEach(key => {
      if (image[key]) this.image[key] = image[key];
    });
  } ;
}
