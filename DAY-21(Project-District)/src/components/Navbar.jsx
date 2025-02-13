import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import { Toaster } from 'react-hot-toast';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li className='selected'><i className="fa-solid fa-guitar"></i>Events</li>
          <li><i className="fa-solid fa-clapperboard"></i>Movies <span>Comming soon</span></li>
          <li><i className="fa-solid fa-utensils"></i>Dining <span>Comming soon</span></li>
        </ul>
        <div className='user-actions'>
          <Link to={'/add-event'}><i className="fa-regular fa-calendar-plus"></i></Link>
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default Navbar
