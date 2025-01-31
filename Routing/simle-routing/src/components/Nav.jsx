import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='max-w-screen-xl mx-auto my-3 flex justify-center items-center gap-10'>
            {/* active by using inline tag with class */}
            <NavLink to='/'>
                {(e) => {
                    // console.log(e);
                    return (
                        <>
                        
                        <span className={[e.isActive ? 'text-lg font-medium text-red-500' : 'text-lg font-medium']}>Home</span>
                        </>
                    )
                }}
            </NavLink>
            {/* active by using with class */}
            <NavLink
                className={
                    (e) => {
                        return [
                            e.isActive ? 'text-red-500' : 'text-black text-lg font-medium',
                            e.isActive ? 'text-lg font-medium' : 'text-black text-lg font-medium',
                        ].join(' ')
                    }}
                to="/user">
                User
            </NavLink>

            {/* active by using with style */}
            <NavLink
                style={
                    (e) => {
                        return { color: e.isActive ? 'red' : 'black' }
                    }
                }
                className='text-lg font-medium' to="/about">
                About
            </NavLink>
        </nav>
    )
}

export default Nav