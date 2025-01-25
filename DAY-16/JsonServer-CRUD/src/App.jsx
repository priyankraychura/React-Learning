import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoute from './Routes/MainRoute'
import Navbar from './components/Navbar'
import './Pages/Pages.css'

function App() {

  return (
    <>
      <Navbar />
      <MainRoute />
    </>
  )
}

export default App
