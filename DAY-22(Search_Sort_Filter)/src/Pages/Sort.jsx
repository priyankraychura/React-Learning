import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Sort() {
    const [data, setData] = useState([])
    const [term, setTerm] = useState("asc")

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const searchRes = data.sort((a, b) => 
        term == 'asc' ? a.price - b.price : b.price - a.price
    )
    return (
        <div>
            <div className="title">
                <Link to={'/'}><i class="fa-solid fa-arrow-left"></i></Link><h1>Sort</h1>
            </div>
            <select name="" id="" onChange={(e) => setTerm(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
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

export default Sort
