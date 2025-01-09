import { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let users = props.users.filter((el) => {
            return (el.email == email && el.password == password)
        });

        if(users.length > 0) {
            Swal.fire({
                title: "Login successful!!",
                text: "You can now navigate website",
                icon: "success",
                background: "#D4EDDA",
                color: "#155724"
              });
        } else {
            Swal.fire({
                title: "Login Failed",
                text: "Incorrect username or password!",
                icon: "error",
                background: "#F8D7DA",
                color: "#721C24"
            });
        }
    }

    return (
        <>
           <div className="main">
                <div className="login-content">
                    <h1>Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value="Login" className='form-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;