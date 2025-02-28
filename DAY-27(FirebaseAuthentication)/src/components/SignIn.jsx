import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { auth } from '../../firebaseConfig';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((res) =>{
      navigate('/dashboard');
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <h2>SingIn Form</h2>
        <label htmlFor="">Email</label>
        <input type="text" name='email' onChange={handleOnChange} placeholder='Email'/>
        <label htmlFor="">Password</label>
        <input type="text" name='password' onChange={handleOnChange} placeholder='Password'/>
        <button className='btn'>SignIn</button>
        <Link to={"/"}>Don't have an account? SignUp</Link>
      </form>
    </div>
  )
}
