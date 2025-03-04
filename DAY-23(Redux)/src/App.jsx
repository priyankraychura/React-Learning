import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './componenet/Create'
import Navbar from './componenet/Navbar'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Show from './componenet/Show'

function App() {
 

  return (
    <>
    <Provider store={store}>
    <Navbar></Navbar>
     <Create></Create>
     <Show></Show>
     </Provider>
    </>
  )
}

export default App
