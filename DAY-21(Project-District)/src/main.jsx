import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import MainRoute from './Routes/MainRoute.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <MainRoute />
    <Footer />
  </BrowserRouter>,
)
