import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import SlickSlider from '../components/Slider'
import axios from 'axios'
import { Link } from 'react-router'
import toast from 'react-hot-toast';

function Home({eventData}) {
    const [deleted, isDeleted] = useState(false)

    

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
                    <SlickSlider eventData={eventData}>
                        
                    </SlickSlider>
                </div>
            </div>
        </div>
    )
}

export default Home
