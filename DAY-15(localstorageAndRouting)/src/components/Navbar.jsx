import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addProduct">Add Product</NavLink></li>
            <li><NavLink to="/showProduct">Show Product</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
