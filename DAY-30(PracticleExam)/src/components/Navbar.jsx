import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedin")
    localStorage.removeItem("userId")
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
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  )
}
