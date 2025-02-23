import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import AddEvent from '../Pages/AddEvent'

function MainRoute({eventData}) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home eventData={eventData}/>}></Route>
        <Route path='/add-event' element={<AddEvent />}></Route>
        <Route path='/add-event/:id' element={<AddEvent />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
