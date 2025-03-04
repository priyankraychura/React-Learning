import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Dashboard from '../components/Dashboard'
import { Toaster } from 'react-hot-toast'

function MainRoutes() {
  return (
    <>
      <div><Toaster/></div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoutes
