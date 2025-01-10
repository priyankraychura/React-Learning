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
    const [isValid, setIsValid] = useState({
        username: true,
        email: true,
        password: true
    });

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData])
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    const handleBlur = (e) => {
       let username = /^[0-9A-Za-z]{6,16}$/;
       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

       
       console.log(username.test(formData.username));
       console.log(emailRegex.test(formData.email));
       console.log(passwordRegex.test(formData.password));
       
    //    if(e.target.value.length < 3) {
    //     setIsValid({...isValid, [e.target.name]: false})
    //    }

        if(e.target.name == "username") {
            console.log("username");
            if(!username.test(formData.username)) {
                setIsValid({...isValid, [e.target.name]: false})
            }
        } else if (e.target.name == "email") {
            console.log("email");
            if(!emailRegex.test(formData.email)) {
                setIsValid({...isValid, [e.target.name]: false})
            }
        } else if (e.target.name == "password") {
            console.log("password");
            if(!passwordRegex.test(formData.password)) {
                setIsValid({...isValid, [e.target.name]: false})
            }
        }
    }

    const handleFocus = (e) => {
        setIsValid({...isValid, [e.target.name]: true})
    }
    // console.log(isValid);

    

    return (
    <>
        <header>
            <button onClick={() => setShowLogin(false)}>Login</button>
            <button onClick={() => setShowLogin(true)}>Signup</button>
        </header>
        {
            showLogin ? <Signup formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleBlur={handleBlur} handleFocus={handleFocus} isValid={isValid}/> : <Login users={users}/> 
        }
    </>
   )
}

export default LoginSignup;

