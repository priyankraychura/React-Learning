import React from 'react'

export default function Login() {
  const handleLogin = () => {
    localStorage.setItem("isLoggedin", true);
    localStorage.setItem("userId", el.data[0].id);
  }
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
