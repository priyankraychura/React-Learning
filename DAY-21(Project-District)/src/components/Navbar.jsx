import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import { Toaster } from 'react-hot-toast';

function Navbar({handleFilter, handleSearch, handleSort}) {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li><input className='search' type="text" placeholder='Search here...' onChange={handleSearch}/></li>
          <li className='selected' onClick={() => handleFilter('all')}><i className="fa-solid fa-guitar"></i>All</li>
          <li onClick={() => handleFilter('events')}><i className="fa-solid fa-guitar"></i>Events</li>
          <li onClick={() => handleFilter('movies')}><i className="fa-solid fa-clapperboard"></i>Movies</li>
          <li onClick={() => handleFilter('dining')}><i className="fa-solid fa-utensils"></i>Dining</li>
        </ul>
        <div className='user-actions'>
          <span onClick={handleSort}>Sort</span>
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
