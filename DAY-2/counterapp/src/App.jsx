import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(0);
  let [message, setMessage] = useState("")

  const addValue = () => {
    if(count < 20) {
      setCounter(count + 1)
      setMessage("");
    } else {
      setMessage("Cannot go above 20 or below 0");
    }
  }

  const removeValue = () => {
    if(count > 0) {
      setCounter(count - 1);
      setMessage("");
    } else {
      setMessage("Cannot go above 20 or below 0");
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Current Count: {count}</h3>
      <button onClick={addValue} style={{ marginRight: "10px" }}>Add +</button>
      <button onClick={removeValue}>Remove -</button>
      <p style={{ color: "orange" }}>{message}</p>
    </>
  )
}

export default App
