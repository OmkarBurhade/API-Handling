import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UserDetails from '../components/UserDetails'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />{/* for open component in another page */}
            <Route path='/user' element={<User />}>
            </Route>
            <Route path='/user/:name' element={<UserDetails />} /> {/* for open component in User page */}
            <Route path='/about' element={<About />} />
        </Routes>
    )
}

export default Routing