import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Import your CSS file
import { Link } from "react-router";

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

const SlickSlider = ({ eventData }) => {
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

  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Handle cases where text is undefined or null
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div style={{ width: "67%", margin: "auto" }}>
      <Slider {...settings} >
        {eventData &&
          eventData.map((el, idx) => {
            return (
              <div className="card" key={el.id}>
                <div className="img">
                  <div className='admin-actions'>
                    <Link to={`/add-event/${el.id}`}> <i className="fa-regular fa-pen-to-square"></i></Link>
                    <i onClick={() => handleDelete(el.id)} className="fa-regular fa-trash-can"></i>
                  </div>
                  <img src={el.img} alt="" />
                </div>
                <div className="details">
                  <h5>{el.title}</h5>
                  <div className="location">
                    <span><i className="fa-solid fa-calendar-check"></i>  {el.day} | {el.time} Onwards</span>
                    <span><i className="fa-solid fa-location-dot"></i> {truncateText(el.location, 30)} </span>
                  </div>
                  <div className="price">
                    <h6>₹ {el.price}</h6>
                    <h6>BOOK NOW</h6>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default SlickSlider;
