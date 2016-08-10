'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController () {
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.addGalleryItem = function () {
    this.images.push(angular.copy(this.galleryItem));
    this.galleryItem = {title: '', desc: '', imgSrc: ''};
  };

  this.images = [

    {
      title: 'Flower One',
      desc: 'origanum vulgare',
      imgSrc: require('../../asset/img/flower/flower-0.jpg')
    },

    {
      title: 'Flower Two',
      desc: 'salvia greggii',
      imgSrc: require('../../asset/img/flower/flower-1.jpg')

    },

    {
      title: 'Flower Three',
      desc: 'jasminum azoricum',
      imgSrc: require('../../asset/img/flower/flower-2.jpg')

    },

    {

      title: 'Flower Four',
      desc: 'gentiana newberryi',
      imgSrc: require('../../asset/img/flower/flower-3.jpg')

    },

    {
      title: 'Flower Five',
      desc: 'continus obovatus',
      imgSrc: require('../../asset/img/flower/flower-4.jpg')

    },

    {
      title: 'Flower Six',
      desc: 'anemone cornoria',
      imgSrc: require('../../asset/img/flower/flower-5.jpg')

    },

    {
      title: 'Flower Seven',
      desc: 'aster frikartii',
      imgSrc: require('../../asset/img/flower/flower-6.jpg')

    },

    {
      title: 'Flower Eight',
      desc: 'achillea',
      imgSrc: require('../../asset/img/flower/flower-7.jpg')

    },

    {
      title: 'Flower Nine',
      desc: 'cedrus atlantica',
      imgSrc: require('../../asset/img/flower/flower-8.jpg')

    },

    {
      title: 'Flower Ten',
      desc: 'lantana',
      imgSrc: require('../../asset/img/flower/flower-9.jpg')

    }
  ];
}
