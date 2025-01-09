import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import '../App.css'


function LoginSignup() {
   const [showLogin, setShowLogin] = useState(true)
   const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData])
    }

    console.log(users);
    

    return (
    <>
        <header>
            <button onClick={() => setShowLogin(false)}>Login</button>
            <button onClick={() => setShowLogin(true)}>Signup</button>
        </header>
        {
            showLogin ? <Signup handleOnChange={handleOnChange} handleSubmit={handleSubmit}/> : <Login users={users}/> 
        }
    </>
   )
}

export default LoginSignup;

