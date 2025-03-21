import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedin')) || false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedin")
    localStorage.removeItem("userId")
    navigate("/");
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <h1>esacDev</h1>
        </div>
        <ul className='left-nav'>
          <li><Link to={'/add-product'}>AddProduct</Link></li>
          <li><Link to={'/dashboard'}>ListProduct</Link></li>
        </ul>
        <ul className='right-nav'>
          <li style={{ cursor: "pointer" }}><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </nav>
    </div >
  )
}
