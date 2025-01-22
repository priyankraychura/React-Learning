import { useState } from "react"
import './Form.css'
import axios from 'axios'

function UserInfo({formData, handleAddSkills, handleDelete, handleOnChange, handleSubmit}) {
    return (
        <>
            <div className="main">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Username: </label>
                    <input type="text" placeholder="Full name here" value={formData.name} name="name" onChange={handleOnChange}/>
                    <label htmlFor="">Email Id:</label>
                    <input type="text" placeholder="youremail@gmail.com" value={formData.email} name="email" onChange={handleOnChange}/>
                    <label htmlFor="">Mobile No.</label>
                    <input type="text" placeholder="XXXXXXXXXX" value={formData.number} name="number" onChange={handleOnChange}/>
                    <label htmlFor="">Profile URL: </label>
                    <input type="text" placeholder="https://yourpicture.jpg" value={formData.image} name="image" onChange={handleOnChange}/>
                    <div className="skills">
                    <label htmlFor="">Skills:</label>
                    <button type="button" className="btn-sm" onClick={handleAddSkills}>Add</button>
                    {/* <button type="button" className="btn-sm btn-rmv" onClick={handleRemove}>Remove</button> */}
                    </div>
                    {
                        formData.skills.map((el, index) => (
                            <div className="skill-input" key={index}>
                            <input type="text" placeholder={index} name={index} onChange={handleOnChange}/>
                            {
                                formData.skills.length > 1 ? 
                                    <button type="button" className="btn-sm btn-rmv" value={formData.skills} onClick={(el) => handleDelete(el, index)}>Del</button> : ""
                            }
                            </div>
                        ))
                    }
                    <button type="submit" className="btn btn-sbt">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserInfo