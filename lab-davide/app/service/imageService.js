'use strict';

const angular = require('angular');

angular.module('galleryApp')
.factory('imageService', function(){
  const images = [];
  const addImage = function(img) {
    this.images.push(img);
  };
  const removeImageWithImgUrl = function(imgUrl) {
    this.images = images.filter((img) => {
      if(img.Url === imgUrl) return false;
      return true;
    });
  };

  return {
    images,
    addImage,
    removeImageWithImgUrl
  };
});
