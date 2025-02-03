import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper, { FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Responsive.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [FreeMode], // Ensure FreeMode is included
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
  });

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function App() {
  return (
    <>
      <Swiper
  modules={[FreeMode]}
  freeMode={true}
  slidesPerView={'auto'}
  spaceBetween={10}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>

    </>
  );
}
