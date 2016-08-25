'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppMainController', [AppMainController]);


function AppMainController() {
  console.log('hitting AppMainController');
  this.displayModalImage = false;


  this.hideModalImage = function() {
    this.displayModalImage = false;
  };

  this.showModalImage = function(image) {
    this.modalImage = image;
    this.displayModalImage = true;
  };
}
