import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/addProduct">Add Product</a></li>
            <li><a href="/showProduct">Show Product</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
