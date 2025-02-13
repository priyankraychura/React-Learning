import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Search() {
    const [data, setData] = useState([])
    const [term, setTerm] = useState("")

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const searchRes = data.filter((item) => item.title.toLowerCase().includes(term.toLocaleLowerCase()))
    return (
        <div>
            <div className="title">
                <Link to={'/'}><i class="fa-solid fa-arrow-left"></i></Link><h1>Search</h1>
            </div>
            <div className="search">
                <input type="search" onChange={(e) => setTerm(e.target.value)} />
                <div className="res">
                    {
                        searchRes.map((el, i) => {
                            return (
                                <div>
                                    <p>{el.title} | {el.category} | {el.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search
