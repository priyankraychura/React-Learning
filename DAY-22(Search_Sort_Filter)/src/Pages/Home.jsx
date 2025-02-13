import React from 'react'
import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="btns">
                <Link to={'/search'}><button>Search</button></Link>
                <Link to={'/filter'}><button>Filter</button></Link>
                <Link to={'/sort'}><button>Sort</button></Link>
            </div>
        </div>
    )
}

export default Home