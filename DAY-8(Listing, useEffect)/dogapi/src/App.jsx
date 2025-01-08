import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [imgData, setImgData] = useState(null);
  const [change, setChange] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((res) => {
      setImgData(res.message);
    })
  }, [change])

  return (
    <>
      {
        <img src={imgData} alt="" />        
      }
      <button onClick={() => setChange(!change)}>New Image</button>
    </>
  )
}

export default App
