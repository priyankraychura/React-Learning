import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function AddUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: ""
  })
  let navigator = useNavigate()

  const handleOnChange = (e) => {
    let  { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", formData)
      .then((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="main-add">
        <form action="" onSubmit={handleOnSubmit}>
          <h1 className='title'>Add User</h1>
          <label htmlFor="">Username</label>
          <input type="text" name='username' onChange={handleOnChange}/>
          <label htmlFor="">Email</label>
          <input type="text" name='email' onChange={handleOnChange}/>
          <label htmlFor="">Number</label>
          <input type="text" name='number' onChange={handleOnChange}/>
          <label htmlFor="">Password</label>
          <input type="text" name='password' onChange={handleOnChange}/>
          <div className="btns">
            <button type='button' onClick={(e) => navigator("/showUsers")} className='cancel-btn'>Cancel</button>
            <button type='submit' className='add-btn'>Add User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
