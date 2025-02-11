import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import AddMovie from '../Pages/AddMovie'

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add-movie' element={<AddMovie />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
