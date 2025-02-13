import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoute from './Routes/MainRoute'
import { BrowserRouter } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  )
}

export default App
