import { useState } from 'react';
import '../App.css';


function Signup({handleOnChange, handleSubmit}) {    
    return (
        <>
            <div className="main">
                <div className="content">
                    <h1>Signup</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="username" name="username" onChange={handleOnChange}/>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="email" name="email" onChange={handleOnChange} />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="password" name="password" onChange={handleOnChange} />
                        <input type='submit' className='form-btn' value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;