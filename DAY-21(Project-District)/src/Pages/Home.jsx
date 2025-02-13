import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import SlickSlider from '../components/Slider'
import axios from 'axios'
import { Link } from 'react-router'
import toast from 'react-hot-toast';

function Home() {
    const [eventData, setEventData] = useState([]);
    const [deleted, isDeleted] = useState(false)

    const truncateText = (text, maxLength) => {
        if (!text) return ""; // Handle cases where text is undefined or null
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    useEffect(() => {
        axios.get("http://localhost:3000/events")
            .then((res) => {
                setEventData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [deleted])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/events/${id}`)
            .then((res) => {
                toast.success('Event deleted successfully!')
                isDeleted(!deleted)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="home-events">
                <div className="event-headers">
                    <h6 className='sponser'>IDFC FIRST Bank</h6>
                    <h4 className='metch'>India vs England Series</h4>
                    <p>Get ready for an exhilarating clash as India faces England in the much-anticipated series. Witness your favourite players in action, <br />delivering thrilling moments, big hits, and intense competition.</p>
                    <h4 className='grab'>
                        <span className='left'></span>
                        GRAB your tickets now!
                        <span className='right'></span>
                    </h4>
                </div>
                <div className="home-content">
                    <SlickSlider>
                        {
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
                    </SlickSlider>
                </div>
            </div>
        </div>
    )
}

export default Home
