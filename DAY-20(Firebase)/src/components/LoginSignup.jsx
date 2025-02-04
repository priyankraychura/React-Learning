import { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import '../App.css'
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


function LoginSignup({showLogin}) {
   const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    // const [users, setUsers] = useState([]);
    const [isValid, setIsValid] = useState({
        username: true,
        email: true,
        password: true
    });
    const [users, setUsers] = useState(null)

    const userCollection = collection(db, "users");

    const getData = async () => {
        let userData = await getDocs(userCollection);
        // console.log(userData.docs);

        let fetchedUsers = userData.docs.map((el) => {
            // console.log(el.id);
            return {id: el.id, ...el.data()}
            // console.log(fetchedUsers);
        })
        setUsers(fetchedUsers);
    }

    useEffect(() => {
        getData();
    }, [])

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    
    // console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isFormInvalid =  Object.values(isValid).some(value => value == false);
        if(isFormInvalid) {
            return;
        }

        // console.log("form submitted");

        await addDoc(userCollection, formData);
        

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

       
    //    console.log(username.test(formData.username));
    //    console.log(emailRegex.test(formData.email));
    //    console.log(passwordRegex.test(formData.password));
       
    //    if(e.target.value.length < 3) {
    //     setIsValid({...isValid, [e.target.name]: false})
    //    }

        // if(e.target.name == "username") {
        //     console.log("username");
        //     if(!username.test(formData.username)) {
        //         setIsValid({...isValid, [e.target.name]: false})
        //     }
        // } else if (e.target.name == "email") {
        //     console.log("email");
        //     if(!emailRegex.test(formData.email)) {
        //         setIsValid({...isValid, [e.target.name]: false})
        //     }
        // } else if (e.target.name == "password") {
        //     console.log("password");
        //     if(!passwordRegex.test(formData.password)) {
        //         setIsValid({...isValid, [e.target.name]: false})
        //     }
        // }

        const regexMap = {
            username: /^[0-9A-Za-z]{6,16}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
        };
    
        const fieldName = e.target.name;
        const fieldValue = formData[fieldName];
    
        // console.log(fieldName);
        if (!regexMap[fieldName]?.test(fieldValue)) {
            // setIsValid((prev) => ({ ...prev, [fieldName]: false }));
            setIsValid({...isValid, [fieldName]: false})
        }

        
    }
    
    // console.log(isValid);
    const handleFocus = (e) => {
        setIsValid({...isValid, [e.target.name]: true})
    }
    // console.log(isValid);

    

    return (
    <>
       
        {
            showLogin ? <Signup formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleBlur={handleBlur} handleFocus={handleFocus} isValid={isValid}/> : <Login users={users}/> 
        }
    </>
   )
}

export default LoginSignup;

