import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-custom.css"


function SlickSlider() {
    const settings = {
        dots: false,            // Show navigation dots
        infinite: true,        // Infinite loop scrolling
        speed: 500,           // Transition speed
        slidesToShow: 3,      // Number of slides visible
        slidesToScroll: 1,    // Number of slides to scroll per click
        autoplay: false,       // Enable auto-play
        autoplaySpeed: 2000,  // Auto-play speed (in milliseconds)
      };
    
  return (
    <div>
      <div style={{ width: "67%", margin: "auto" }}>
      <h2>React Slick Slider</h2>
      <Slider {...settings}>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-jet-black-oversized-cargo-jogger-pants-648629-1735623776-1.jpg&w=1920&q=75" alt="Slide 1" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="Slide 2" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-grey-oversized-cargo-parachute-pants-651186-1735623755-1.jpg&w=1920&q=75" alt="Slide 3" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-ginger-root-brown-oversized-acid-wash-cargo-joggers-646426-1734329761-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-jet-black-oversized-cargo-jogger-pants-648629-1735623776-1.jpg&w=1920&q=75" alt="Slide 1" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-oversized-cargo-joggers-646496-1735624026-1.jpg&w=1920&q=75" alt="Slide 2" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-grey-oversized-cargo-parachute-pants-651186-1735623755-1.jpg&w=1920&q=75" alt="Slide 3" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-charcoal-grey-textured-track-pants-646507-1735621325-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
        <div><img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-ginger-root-brown-oversized-acid-wash-cargo-joggers-646426-1734329761-1.jpg&w=1920&q=75" alt="Slide 4" /></div>
      </Slider>
    </div>
    </div>
  )
}

export default SlickSlider
