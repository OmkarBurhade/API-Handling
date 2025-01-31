import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
    return (
        <>
            <div className=' w-1/2 m-auto p-4 rounded mt-10'>
                <h1 className='text-3xl font-medium mb-2'>User</h1>
                {/* user list  */}

                <ul className='w-full bg-zinc-100 p-4 my-5'>
                    <Link to={'/user/Radha'}>
                        <li className='py-2 px-3 border-y-[1px] border-red-400 hover:bg-red-800 hover:text-white'>Radha</li>
                    </Link>
                    <Link to={'/user/Krishna'}>
                        <li className='py-2 px-3 border-b-[1px] border-red-400 hover:bg-red-800 hover:text-white'>Krishna </li>
                    </Link>
                    <Link to={'/user/Savita'}>
                        <li className='py-2 px-3 border-b-[1px] border-red-400 hover:bg-red-800 hover:text-white'>Savita </li>
                    </Link>
                    <Link to={'/user/Omkar'}>
                        <li className='py-2 px-3 border-b-[1px] border-red-400 hover:bg-red-800 hover:text-white'>Omkar </li>
                    </Link>

                </ul>
            </div>
            <hr />

            <Outlet /> {/* for onpne the component here */}
        </>
    )
}

export default User