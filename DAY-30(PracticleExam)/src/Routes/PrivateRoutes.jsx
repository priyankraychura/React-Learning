import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedin')) || false);
    console.log(isLoggedIn);
    
    return (
        <div>
            { isLoggedIn ? children : <Navigate to={"/"}></Navigate>}
        </div>
  )
}
