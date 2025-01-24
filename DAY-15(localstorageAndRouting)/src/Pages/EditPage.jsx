import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPage = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    const [formData, setFormData] = useState({
        title: "",
        img: "",
        desc: "",
        id: ""
    })

    const urlData = useParams();
    let navigate = useNavigate();

    console.log(urlData);
    console.log(products);
    
    useEffect(() => {
        let product = products.filter((el) => {
            return el.id == urlData.id
        })

        setFormData(product[0]);
    }, [])

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

    const handleOnChange = (e) => {
        let {name, value} = e.target
        setFormData({...formData, [name] : value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let updatedPorducts = products.map((el) => {
            if(el.id == urlData.id) {
                return formData
            } else {
                return el
            }
        })

        setProducts(updatedPorducts);
        navigate("/showProduct")
    }

    console.log(products);
    
        
    return (
        <div>
        <div className="main">
            <form action="" onSubmit={handleOnSubmit}>
            <h1>Edit Product</h1>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={formData.title} onChange={handleOnChange}/>
            <label htmlFor="">Image Url</label>
            <input type="text" name='img' value={formData.img} onChange={handleOnChange}/>
            <label htmlFor="">Description</label>
            <input type="text" name='desc' value={formData.desc} onChange={handleOnChange}/>
            <button className='btn'>Submit</button>
            </form>
        </div>

        </div>
    )
}

export default EditPage
