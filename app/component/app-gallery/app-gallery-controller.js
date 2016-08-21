'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', ['image Service', AppGalleryController]);

function AppGalleryController(imageService) {
  this.galleryItem = 'image';
  imageService.addImage({
    title: 'Flower One',
    desc: 'origanum vulgare',
    imgSrc: require('../../asset/img/flower/flower-0.jpg'),
    bombs: 5,
    hearts: 10
  });

  imageService.addImage({
    title: 'Flower Two',
    desc: 'salvia greggii',
    imgSrc: require('../../asset/img/flower/flower-1.jpg'),
    bombs: 6,
    hearts: 15
  });

  imageService.addImage({
    title: 'Flower Three',
    desc: 'jasminum azoricum',
    imgSrc: require('../../asset/img/flower/flower-2.jpg'),
    bombs: 4,
    hearts: 30
  });

  imageService.addImage({
    title: 'Flower Four',
    desc: 'gentiana newberryi',
    imgSrc: require('../../asset/img/flower/flower-3.jpg'),
    bombs: 3,
    hearts: 20
  });

  imageService.addImage({
    title: 'Flower Five',
    desc: 'continus obovatus',
    imgSrc: require('../../asset/img/flower/flower-4.jpg'),
    bombs: 4,
    hearts: 30
  });

  imageService.addImage({
    title: 'Flower Six',
    desc: 'anemone cornoria',
    imgSrc: require('../../asset/img/flower/flower-5.jpg'),
    bombs: 13,
    hearts: 14
  });

  imageService.addImage({
    title: 'Flower Seven',
    desc: 'aster frikartii',
    imgSrc: require('../../asset/img/flower/flower-6.jpg'),
    bombs: 2,
    hearts: 19
  });

  imageService.addImage({
    title: 'Flower Eight',
    desc: 'achillea',
    imgSrc: require('../../asset/img/flower/flower-7.jpg'),
    bombs: 6,
    hearts: 20
  });

  imageService.addImage({
    title: 'Flower Nine',
    desc: 'cedrus atlantica',
    imgSrc: require('../../asset/img/flower/flower-8.jpg'),
    bombs: 8,
    hearts: 24
  });
  
  imageService.addImage({
    title: 'Flower Ten',
    desc: 'lantana',
    imgSrc: require('../../asset/img/flower/flower-9.jpg'),
    bombs: 4,
    hearts: 15
  });
  console.log('hitting gallery ctrl');
  this.images = imageService.images;
  this.selectGalleryStyle = function(style) {
    if(style === 'list' || style === 'thumb' || style === 'image' )
      this.galleryStyle = style;
    return this.galleryStyle;
  };
}
