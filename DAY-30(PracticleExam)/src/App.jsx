import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainRoutes from './Routes/MainRoutes'


function App() {
  

  return (
    <>

      <Navbar />
      <MainRoutes />
    </>
  )
}

export default App
