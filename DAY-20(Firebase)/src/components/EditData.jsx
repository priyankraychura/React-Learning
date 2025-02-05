import React, { useEffect, useState } from 'react'
import '../App.css';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

function EditData({id, users}) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [refresh, DoRefresh] = useState(false)

    useEffect(() => {
      users.forEach((el)=>{
        if(el.id == id){
          formData.username = el.username;
          formData.email = el.email;
          formData.password = el.password
        }
       })
    }, [refresh])

    const handleSubmit = async (e) => {
      e.preventDefault();
      let update = doc(db, "users", id)

      await updateDoc(update, formData)

      setFormData({
        username: "",
        email: "",
        password: ""
      })
    }

    const handleOnChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
    }
    
  return (
    <div>
      <div className="main">
                <div className="content">
                    <div className="update-title">
                      <h1>Update</h1> 
                      <i class="fa-solid fa-arrows-rotate" onClick={() => DoRefresh(!refresh)}></i>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="username" value={formData.username} name="username" onChange={handleOnChange}/>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="email" value={formData.email} name="email" onChange={handleOnChange} />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="password" value={formData.password} name="password" onChange={handleOnChange} />
                        <input type='submit' className='form-btn' value="Update" />
                    </form>
                </div>
            </div>
    </div>
  )
}

export default EditData
