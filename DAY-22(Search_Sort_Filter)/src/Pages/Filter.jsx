import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Filter() {
    const [data, setData] = useState([])
    const [term, setTerm] = useState("all")

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const searchRes = data.filter((item) =>
        term == 'all' ? data : item.category == term
    )

    return (
        <div>
            <div className="title">
                <Link to={'/'}><i class="fa-solid fa-arrow-left"></i></Link><h1>Filter</h1>
            </div>
            <select name="" id="" onChange={(e) => setTerm(e.target.value)}>
                <option value="all">All</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery </option>
            </select>
            <div className="res">
                {
                    searchRes.map((el, i) => {
                        return (
                            <div key={el.id}>
                                <p>{el.title} | {el.category} | {el.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter
