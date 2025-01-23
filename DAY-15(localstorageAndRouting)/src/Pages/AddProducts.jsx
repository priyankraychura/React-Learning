import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    desc: "",
    id: uuidv4()
  });
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[])

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  const handleOnChange = (e) => {
    const {name, value} = e.target
    console.log(e.target.name);
    
    setFormData({...formData, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData])
    setFormData({
      title: "",
      img: "",
      desc: "",
      id: uuidv4()
    })
  }

  console.log(formData);
  
  return (
    <div>
      <div className="main">
        <form action="" onSubmit={handleOnSubmit}>
          <h1>Add Products</h1>
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

export default AddProducts