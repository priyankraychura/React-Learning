import React, { useState } from 'react'

function Localstorage() {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        email: "",
        password: "",
    })

    const handleOnChnage = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setUsers([...users, formData]);
        
        localStorage.setItem("users",JSON.stringify([...users, formData]))
    }

  return (
    <div>
      <h1>Localstorage Add</h1>
      <form action="">
          <input type="text" placeholder='Enter name' name="name" onChange={handleOnChnage}/>
          <input type="text" placeholder='Enter email' name="email" onChange={handleOnChnage}/>
          <input type="text" placeholder='Enter password' name="password" onChange={handleOnChnage}/>
          <button onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Localstorage
