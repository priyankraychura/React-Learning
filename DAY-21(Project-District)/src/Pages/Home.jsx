import React from 'react'
import '../styles/Home.css'

function Home() {
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
                    <div className="card">
                        <div className="img">
                            <img src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_400/c_crop%2Cg_custom%2Fv1737631621%2Fnkju6b1q1qc2dtl5glw1.jpg" alt="" />
                        </div>
                        <div className="details">
                            <h5>IDFC FIRST Bank Series 2nd ODI: India vs England - Cuttack</h5>
                            <div className="location">
                                <span><i class="fa-solid fa-calendar-check"></i> February 9 | 1:30 pm Onwards</span>
                                <span><i class="fa-solid fa-location-dot"></i>Barabati Stadium, Cuttack</span>
                            </div>
                            <div className="price">
                                <h6>₹700</h6>
                                <h6>BOOK NOW</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
