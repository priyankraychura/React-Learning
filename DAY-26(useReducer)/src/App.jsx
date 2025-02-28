import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialstate = 0;

const reducer = (state, action) => {
  switch(action) {
    case "Inc1": 
      return state += 1;
    case "Inc10":
      return state += 10;
    case "Inc100":
      return state += 100;
    default: 
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("Inc1")} style={{marginRight: '10px'}}>1</button>      
      <button onClick={() => dispatch("Inc10")} style={{marginRight: '10px'}}>10</button>      
      <button onClick={() => dispatch("Inc100")}>100</button>      
    </>
  )
}

export default App
