import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Import your CSS file

// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

const SlickSlider = ({ children }) => {
  const settings = {
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Use custom left arrow
    nextArrow: <CustomNextArrow />, // Use custom right arrow
  };

  return (
    <div style={{ width: "67%", margin: "auto" }}>
      <Slider {...settings} >
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;
