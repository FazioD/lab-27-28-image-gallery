'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppMainController', [AppMainController]);

function AppMainController() {
  this.images = [];

  this.addimage = function(image) {
    if( typeof image === 'object' && image.title && image.imageUrl) {
      this.images.push(image);
    }
  };
}

function AppMainController( {
  this.displayModalImage = false;

  this.showModalImage = function(imageUrl) {
    this.displayImageUrl = imageUrl
  }

})
