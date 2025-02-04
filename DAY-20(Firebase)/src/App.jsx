import { useEffect, useState } from 'react'
import './App.css'
import LoginSignup from './components/LoginSignup'
import UsersList from './components/UsersList'

function App() {
  const [showUsersList, setShowUsersList] = useState(false);
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
    <header>
            <button onClick={() => setShowUsersList(!showUsersList)}>Show/Hide UserList</button>
            <button onClick={() => setShowLogin(false)}>Login</button>
            <button onClick={() => setShowLogin(true)}>Signup</button>
    </header>
      {
        showUsersList ? <UsersList />
        : <LoginSignup showLogin={showLogin}/>
      }
      
    </>
  )
}

export default App
