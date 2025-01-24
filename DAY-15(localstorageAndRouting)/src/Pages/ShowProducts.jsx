import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const ShowProducts = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[]);
  console.log(products);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])
  
  const handleDelete = (el, id) => {
    let arr = products.filter((el) => {
      return el.id != id
    })
    setProducts(arr)
  }
  
  return (
    <div>
      <div className="main-card">
      {
        products.map((el) => (
            <div className="card" key={el.id}>
              <div className="img">
                <img src={el.img} alt="" />
                <div className="actions">
                  <Link to={`/editProduct/${el.id}`}><i className="fa-solid fa-pencil"></i></Link>
                  <i className="fa-solid fa-xmark" onClick={(e) => handleDelete(e, el.id)}></i>
                </div>
              </div>
              <div className="details">
                <h4>{el.title}</h4>
                <p>{el.desc}</p>
              </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default ShowProducts
