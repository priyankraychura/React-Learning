import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><h3 className='logo'>RPriyank</h3></li>
            <li><NavLink to="./">Home</NavLink></li>
            <li><NavLink to="./addUser">Add User</NavLink></li>
            <li><NavLink to="./showUsers">Show User</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
