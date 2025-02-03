import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './SliderTwo.css';

import { Navigation } from 'swiper/modules';

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <div className="slider-container">
      {/* Custom Navigation Buttons */}
      <div className="custom-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><i class="fa-solid fa-circle-chevron-left"></i></div>
      <div className="custom-next" onClick={() => swiperRef.current.swiper.slideNext()}><i class="fa-solid fa-circle-chevron-right"></i></div>

      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        slidesPerGroup={2}
        spaceBetween={15}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={false} // Hide pagination dots
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="img">
                <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-chocolate-brown-textured-track-pants-646483-1734504088-1.jpg&w=1920&q=75" alt="" />
                <span>
                    <i class="fa-solid fa-star"></i>
                    4.4
                </span>
            </div>
            <div className='pro-overview'>
                <div className="name">
                    <div>
                        <h6>Bewakoof Heavy Duty® 1.0</h6>
                        <span>Men's Chocolate Brown Textured Oversized...</span>
                    </div>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div className="price">
                    <p>₹1199</p>
                    <span className='stricked'><s>₹2699</s></span>
                    <span className='discount'>55% OFF</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img">
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-chocolate-brown-textured-track-pants-646477-1734503952-1.jpg&w=1920&q=75" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="img">
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="" />

            </div>
            </SwiperSlide>
        <SwiperSlide>
<div className="img">
<img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-all-over-printed-pyjamas-642188-1731388265-1.jpg&w=1920&q=75" alt="" />
    
    </div>            </SwiperSlide>
        <SwiperSlide>
        <div className="img">
        <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="" />

        </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="img">
        <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="" />

        </div>
            </SwiperSlide>
      </Swiper>
    </div>
  );
}
