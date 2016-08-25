'use strict';

const angular = require('angular');
angular.module('galleryApp').controller('AppModalImageController', [AppModalImageController]);

function AppModalImageController() {
  this.updateImageWithData = function(image) {
    if(typeof image === 'object' && typeof this.image === 'object') {
      Object.keys(this.image).forEach((key) => {
        if(image[key])
          this.image[key] = image[key];
      });
    }
  };
}
