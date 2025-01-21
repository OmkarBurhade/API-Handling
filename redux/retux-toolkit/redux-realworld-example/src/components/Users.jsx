import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from '../store/reducers/UserReducer';
const Users = () => {
    const { users } = useSelector((state) => state.userSlice)
    const dispatch = useDispatch()
    const handleDelete = (index) => {
        dispatch(userdelete(index))
    }
    return (
        <div>
            <div className='max-w-screen-xl mx-auto mt-5 p-5' >
                <h1 className='text-2xl font-bold mb-2'>User List</h1>
                {users.map((users, index) => {
                    return (
                        <h1 key={index}>
                            {users.name}
                            <span onClick={() => handleDelete(index)} className='text-red-500 font-bold cursor-pointer'> X</span>
                        </h1>
                    )
                })}
            </div>
        </div>
    )
}

export default Users
