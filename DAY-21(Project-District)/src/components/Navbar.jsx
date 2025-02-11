import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            <li className='selected'><i className="fa-solid fa-guitar"></i>Events</li>
            <li><i className="fa-solid fa-clapperboard"></i>Movies <span>Comming soon</span></li>
            <li><i className="fa-solid fa-utensils"></i>Dining <span>Comming soon</span></li>
        </ul>
        <i className="fa-regular fa-circle-user"></i>
      </nav>
    </div>
  )
}

export default Navbar
