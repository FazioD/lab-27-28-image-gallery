'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', ['imageService', AppGalleryController]);

function AppGalleryController(imageService) {
  console.log('hitting addImg');
  this.galleryStyle = 'image';

  imageService.addImage ({
    title: 'Flower One',
    desc: 'origanum vulgare. Hic flos porticus et exemplum atque imaginem proponendam',
    imgUrl: require('../../asset/img/flower/flower-1.jpg')
  }),

  imageService.addImage({
    title: 'Flower Two',
    desc: 'gentiana newberryi. Hic flos porticus et exemplum atque imaginem proponendam',
    imgUrl: require('../../asset/img/flower/flower-2.jpg')
  }),

  imageService.addImage({
    title: 'Flower Three',
    desc: 'continus obovatus. Hic flos porticus et exemplum atque imaginem proponendam',
    imgUrl: require('../../asset/img/flower/flower-3.jpg')
  }),

  // imageService.addImage({
  //   title: 'Flower Four',
  //   desc: 'anemone cornoria',
  //   imgUrl: require('../../asset/img/flower/flower-4.jpg')
  // }),

  console.log('hitting gallery ctrl');
  this.images = imageService.images;
  this.selectGalleryStyle = function(style) {
    if(style === 'list' || style === 'thumb' || style === 'image' )
      this.galleryStyle = style;
    return this.galleryStyle;
  };
}
