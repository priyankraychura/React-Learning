import React, { useEffect, useState } from 'react'
import '../styles/AddEvent.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

function AddEvent() {
    const [formData, setFormData] = useState({
        title: "",
        day: "",
        time: "",
        img: "",
        location: "",
        price: ""
    });

    const handleOnChnage = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submited");
        setFormData({
            title: "",
            day: "",
            time: "",
            img: "",
            location: "",
            price: ""
        })
    }

    console.log(formData);
    
    return (
        <div>
            <div className="main-add">
                <form action="" onSubmit={handleSubmit}>
                    <Box className="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="img-preview">
                            <img src={formData.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqS_8MHUZvJpcLQIg3BnARgIXKZM4-DsrsT8aXSUViNGMJvmLapHAJ90AxNzcurze1JM&usqp=CAU"} alt="" />
                        </div>
                        <div>
                            <div>
                                <h2>ADD EVENT</h2>
                                <TextField
                                    onChange={handleOnChnage}
                                    name='title'
                                    value={formData.title}
                                    label="Title"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '25ch' }}
                                />
                                <TextField
                                    onChange={handleOnChnage}
                                    name='day'
                                    value={formData.day}
                                    label="Day"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '25ch' }}
                                />
                                <TextField
                                    onChange={handleOnChnage}
                                    name='date'
                                    value={formData.date}
                                    label="Date"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '25ch' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleOnChnage}
                                    name='img'
                                    value={formData.img}
                                    label="Image URL"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '51.5ch' }}
                                />
                                <TextField
                                    onChange={handleOnChnage}
                                    name='location'
                                    value={formData.location}
                                    label="Location"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '25ch' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleOnChnage}
                                    name='price'
                                    value={formData.price}
                                    label="Price"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, mb: 3, width: '25ch' }}
                                />
                            </div>
                            <div>
                                <Link to={'/'}><Button variant="outlined" size="large" color='error' sx={{ m: 1, width: '46ch' }}>Cancel</Button></Link>
                                <Button variant="contained" size="large" color='primary' sx={{ m: 1, width: '46ch' }}>Add Event</Button>
                            </div>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default AddEvent
