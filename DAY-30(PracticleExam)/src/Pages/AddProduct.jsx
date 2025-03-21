import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/AddProduct.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        img: "",
        cat: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/products", formData)
            .then((res) => {
                alert("Product added successfully");
            })
            .catch((err) => {
                alert("Failed to add product!")
            })

        setFormData({
            title: "",
            price: "",
            img: "",
            cat: ""
        })

    }
    return (
        <div className='main-add'>

            <form action="" className='form' onSubmit={handleSubmit}>
                <h1>Add Product Details</h1>
                <Box
                    // component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Title"
                            name='title'
                            onChange={handleChange}
                            value={formData.title}
                        />


                        <TextField
                            required
                            id="outlined-number"
                            label="Price"
                            type="number"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name='price'
                            onChange={handleChange}
                            value={formData.price}
                        />
                        <TextField
                            required
                            sx={{ minWidth: 460 }}
                            id="outlined-required"
                            label="Image Url"
                            name='img'
                            onChange={handleChange}
                            value={formData.img}
                        />
                        <InputLabel sx={{ ml: 1 }} id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            sx={{ ml: 1, minWidth: 120 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='cat'
                            value={formData.cat}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value="men">Men</MenuItem>
                            <MenuItem value="women">Women</MenuItem>
                        </Select>
                    </div>
                </Box>
                <Button type='submit' sx={{ ml: 1 }} variant="contained">Add Product</Button>
            </form>
        </div>
    )
}
