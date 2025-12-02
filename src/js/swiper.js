import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const topNftsSwiper = new Swiper('.top-nfts-swiper', {
  modules: [Pagination],

  slidesPerView: 1.1,
  spaceBetween: 25,
  pagination: {
    el: '.top-nfts-pagination',
    clickable: true,
  },

  breakpoints: {
    1600: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      allowTouchMove: false,
    },
  },
});

const exploreUsersSwiper = new Swiper('.explore-users-swiper', {
  slidesPerView: 1.1,
  spaceBetween: 25,

  breakpoints: {
    1600: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      allowTouchMove: false,
    },
  },
});
