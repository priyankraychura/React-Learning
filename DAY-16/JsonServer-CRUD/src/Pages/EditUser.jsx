import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function EditUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: ""
  })
  let navigator = useNavigate()
  let urlData = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${urlData.id}`)
      .then((el) => {
        setFormData(el.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])  

  const handleOnChange = (e) => {
    let  { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/users/${urlData.id}`, formData)
      .then((res) => {
        console.log(res);
        navigator("/showUsers")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <div className="main-add">
        <form action="" onSubmit={handleOnSubmit}>
          <h1 className='title'>Add User</h1>
          <label htmlFor="">Username</label>
          <input type="text" name='username' value={formData.username} onChange={handleOnChange}/>
          <label htmlFor="">Email</label>
          <input type="text" name='email' value={formData.email} onChange={handleOnChange}/>
          <label htmlFor="">Number</label>
          <input type="text" name='number' value={formData.number} onChange={handleOnChange}/>
          <label htmlFor="">Password</label>
          <input type="text" name='password' value={formData.password} onChange={handleOnChange}/>
          <div className="btns">
            <button type='button' onClick={(e) => navigator("/showUsers")} className='cancel-btn'>Cancel</button>
            <button type='submit' className='add-btn'>Update User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
