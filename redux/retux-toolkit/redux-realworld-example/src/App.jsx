import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Products from './components/Products';
import Users from './components/Users';
import Home from './components/Home';
const App = () => {


  return (
    <>
      <div className='max-w-screen-xl mx-auto mt-5'>
        <nav className='flex gap-5 mb-10'>
          <Link to={"/"}>Home</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/products"}>Products</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
