import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((res) =>{
      setDoc(doc(db, 'users', res.user.uid), {...formData})
        toast.success(`Rregistration successful!`)
        navigate('/dashboard');
    })
    .catch((err) => {
      toast.error(err.message);
    })
  }
  

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <h2>SingUp Form</h2>
        <label htmlFor="">Email</label>
        <input type="text" name='email' onChange={handleOnChange} placeholder='Email'/>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={handleOnChange} placeholder='Name'/>
        <label htmlFor="">Password</label>
        <input type="text" name='password' onChange={handleOnChange} placeholder='Password'/>
        <button className='btn'>SignUp</button>
        <Link to='/signIn'>Already have an account? SignIn</Link>
      </form>
    </div>
  )
}
