import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import ShowUsers from '../Pages/ShowUsers'
import EditUser from '../Pages/EditUser'
import AddUser from '../Pages/AddUser'
import NotFound from '../Pages/NotFound'

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addUser' element={<AddUser />}></Route>
        <Route path='/showUsers' element={<ShowUsers />}></Route>
        <Route path='/editUser/:id' element={<EditUser />}>Edit User</Route>
        <Route path='*' element={<NotFound />}>Edit User</Route>
      </Routes>
    </div>
  )
}

export default MainRoute
