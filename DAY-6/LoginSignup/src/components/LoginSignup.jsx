import { useState } from "react";
import "./LoginSignup.css";
import swal from 'sweetalert';

function LoginSignup() {
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginEmail, setLoginEmail] = useState("");  
    const [loginPassword, setLoginPassword] = useState("");
    
    const [userData, setUserData] = useState([]);
    
    const handleRegister = () => {
        let obj = {
            username,
            email,
            password
        }
        setUserData([...userData, obj]);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const handleLogin = () => {
        let user = userData.filter((user) => user.email === loginEmail && user.password === loginPassword);
        console.log("user", user);
        

        if(user.length > 0) {
            swal("Login Successfull", "You are successfully logged in", "success");
        } else {
            swal("Login Failed", "Please enter correct email and password", "error");
        }
    }
    
    
    return (
        <>
            <div className="main">
            {login ? <div className="loginPage">
                <h1>Login</h1>
                    <label htmlFor="emailLogin">Email: </label>
                    <input type="text" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)}/>
                    <label htmlFor="Username">Password: </label>
                    <input type="passwordLogin" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
                    <button onClick={handleLogin}>Login</button>
                <br /><span className="btn-link" onClick={() => setLogin(false)}>Don't have an account? Create Account</span>
            </div> :
            <div className="signupPage">
                <h1>Signup</h1>
                <label htmlFor="usernameRegister">Username: </label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                <label htmlFor="emailRegister">Email id: </label>
                <input type="email" placeholder="Email Id" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label htmlFor="passwordRegister">Password: </label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={handleRegister}>Register</button>
                <br /><span className="btn-link" onClick={() => setLogin(true)}>Already have an acount? Login</span>
            </div>}
            </div>
        </>
    );
}

export default LoginSignup