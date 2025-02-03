import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1xx1-winterwearcollection-limitedBuy2-common-1738324665.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-com--1--1738338343.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1x1-valentines-commmon-new-1738331891.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Common-1x1-HC-Banner-1738056776.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-CFT-Common-1x1-HC-Banner-1738078783.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-27jan-common-1737995149.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1x1-jeans-29-common-1738161379.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.bewakoof.com/uploads/grid/app/1x1-pj-29-common-1738246439.jpg" alt="" /></SwiperSlide> */}

        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-chocolate-brown-textured-track-pants-646483-1734504088-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-chocolate-brown-textured-track-pants-646477-1734503952-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-all-over-printed-pyjamas-642188-1731388265-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-navy-blue-oversized-cargo-jogger-pants-648645-1734676394-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-chocolate-brown-oversized-cargo-jogger-pants-648643-1735623997-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-purple-oversized-joggers-646511-1736509085-1.jpg&w=1920&q=75" alt="" /></SwiperSlide>
      </Swiper>

    </>
  );
}
