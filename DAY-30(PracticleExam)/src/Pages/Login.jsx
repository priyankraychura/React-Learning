import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedin", true);
    localStorage.setItem("userId", 12345);
    navigate("/dashboard")
  }
  return (
    <div className='login-page'>
      <h1>Login</h1>
      <Button onClick={handleLogin} variant="contained">Demo Login</Button>
    </div>
  )
}
