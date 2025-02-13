import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/AddEvent.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, replace, useNavigate, useParams } from 'react-router';
import toast from 'react-hot-toast';

function AddEvent() {
    const [formData, setFormData] = useState({
        title: "",
        day: "",
        time: "",
        img: "",
        location: "",
        price: ""
    });
    let navigator = useNavigate()
    const { id } = useParams();

    if (id != undefined) {
        useEffect(() => {
            axios.get(`http://localhost:3000/events/${id}`)
                .then((res) => {
                    setFormData(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, [])
    }

    const handleOnChnage = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id == undefined) {
            axios.post("http://localhost:3000/events", formData)
                .then((res) => {
                    toast.success('Event added successfully!')
                    navigator('/')
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios.patch(`http://localhost:3000/events/${id}`, formData)
                .then((res) => {
                    toast.success('Event updated successfully!')
                    navigator('/')
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        setFormData({
            title: "",
            day: "",
            time: "",
            img: "",
            location: "",
            price: ""
        })
    }

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
                                    name='time'
                                    value={formData.time}
                                    label="Time"
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
                                <Button type='submit' variant="contained" size="large" color='primary' sx={{ m: 1, width: '46ch' }}>{id == undefined ? "Add Event" : "Update Event"}</Button>
                            </div>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default AddEvent
