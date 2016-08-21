'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppMainController', [AppMainController]);




function AppMainController() {
  this.displayModalImage = true;


  this.hideModalImage = function() {
    this.displayModalImage = false;
  };
  this.showModalImage = function(image) {
    this.modalImage = image;
    this.displayModalImage = true;
  };
}
