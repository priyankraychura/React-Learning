import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import Filter from '../Pages/Filter'
import Sort from '../Pages/Sort'

function MainRoute() {
    return (
        <div>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/search' Component={Search}></Route>
                <Route path='/filter' Component={Filter}></Route>
                <Route path='/sort' Component={Sort}></Route>
            </Routes>
        </div>
    )
}

export default MainRoute
