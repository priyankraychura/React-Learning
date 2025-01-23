import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddProducts from '../Pages/AddProducts'
import ShowProducts from '../Pages/ShowProducts'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProducts />}></Route>
        <Route path='/showProduct' element={<ShowProducts />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
