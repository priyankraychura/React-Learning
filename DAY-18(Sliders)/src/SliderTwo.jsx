import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios"

import 'swiper/css';
import 'swiper/css/navigation';
import './SliderTwo.css';

import { Navigation } from 'swiper/modules';

export default function Slider() {
    const swiperRef = useRef(null);
    const [ productData, setProductData ] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProductData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const truncateText = (text, maxLength) => {
        if (!text) return ""; // Handle cases where text is undefined or null
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    console.log("products", productData);
    

    return (
        <div className="slider-container">
            <div className="custom-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><i className="fa-solid fa-circle-chevron-left"></i></div>
            <div className="custom-next" onClick={() => swiperRef.current.swiper.slideNext()}><i className="fa-solid fa-circle-chevron-right"></i></div>

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
                {
                   productData.map((el) => {
                     return (<SwiperSlide>
                    <div className="img">
                        <img src={el.image} alt="" />
                        <span>
                            <i className="fa-solid fa-star"></i>
                            {el.rating.rate}
                        </span>
                    </div>
                    <div className='pro-overview'>
                        <div className="name">
                            <div>
                                <h6>{truncateText(el.title, 35)}</h6>
                                <span>{truncateText(el.description, 43)}</span>
                            </div>
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="price">
                            <p>₹{Math.floor((el.price) - (el.price * 0.55))}</p>
                            <span className='stricked'><s>₹{el.price}</s></span>
                            <span className='discount'>55% OFF</span>
                        </div>
                    </div>
                </SwiperSlide>)
                   })
                }
               
            </Swiper>
        </div>
    );
}
