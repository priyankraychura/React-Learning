import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddProduct from '../Pages/AddProduct'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SignUp'
import PrivateRoutes from './PrivateRoutes'

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='dashboard' element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }></Route>
        <Route path='add-product' Component={AddProduct}></Route>
        <Route path='signup' Component={SignUp}></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}
