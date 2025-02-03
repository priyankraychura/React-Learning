import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./NewSlickSlider.css"; // Import your CSS file

// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
        <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <i class="fa-solid fa-circle-chevron-right"></i>
    </div>
  );
};

const SlickCarousel = () => {
  const settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomPrevArrow />, // Use custom left arrow
    nextArrow: <CustomNextArrow />, // Use custom right arrow
};

  return (
    <div>
      <h2>Customized Slick Slider</h2>
      <Slider {...settings} >
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-jet-black-oversized-cargo-jogger-pants-648629-1735623776-1.jpg&w=1920&q=75" alt="Slide 1" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="Slide 2" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-grey-oversized-cargo-parachute-pants-651186-1735623755-1.jpg&w=1920&q=75" alt="Slide 3" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-ginger-root-brown-oversized-acid-wash-cargo-joggers-646426-1734329761-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-jet-black-oversized-cargo-jogger-pants-648629-1735623776-1.jpg&w=1920&q=75" alt="Slide 1" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="Slide 2" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-grey-oversized-cargo-parachute-pants-651186-1735623755-1.jpg&w=1920&q=75" alt="Slide 3" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div className="item"><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-ginger-root-brown-oversized-acid-wash-cargo-joggers-646426-1734329761-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
