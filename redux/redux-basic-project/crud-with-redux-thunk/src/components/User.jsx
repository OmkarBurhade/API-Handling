import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../store/slices/UserSlice';

const Users = () => {
    const dispatch = useDispatch();
    const { users, status } = useSelector((state) => state.users);

    const [formData, setFormData] = useState({ name: '', email: '' });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleAddOrUpdate = () => {
        
        if (editId) {
            console.log(editId);
            
            dispatch(updateUser({ id: editId, user: formData }));
        } else {
            dispatch(addUser(formData));
        }
        setFormData({ name: '', email: '' });
        setEditId(null);
    };

    const handleEdit = (user) => {
        setFormData({ name: user.name, email: user.email });
        setEditId(user.id);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
const handlFormSubmit = (e) => {
    e.preventDefault()
}
    return (
        <div className='relative'>
            <form onSubmit={handlFormSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='py-2 px-2 border-[1px] border-zinc-300 w-60 rounded-md '
                />
                <input
                    type="email"
                    placeholder="Last Name"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='py-2 px-2 border-[1px] border-zinc-300 w-60 rounded-md mx-2'
                />
                <button type='submit' onClick={handleAddOrUpdate} className='py-2 px-5 bg-green-500 rounded font-semibold'>
                    {editId ? 'Update User' : 'Add User'}
                </button>
            </form>
            {status === 'loading' && <div className='h-screen w-full text-5xl flex justify-center items-center bg-white '>Loading...</div>}

            <table className='w-full text-center'>
                <thead>
                    <tr className=''>
                        <th className='border-b-[1px] border-zinc-200 p-3'>ID</th>
                        <th className='border-b-[1px] border-zinc-200 p-3'>Name</th>
                        <th className='border-b-[1px] border-zinc-200 p-3'>Email</th>
                        <th className='border-b-[1px] border-zinc-200 p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={user.id}>
                            <td className='border-b-[1px] border-zinc-200 p-3'>{i + 1}</td>
                            <td className='border-b-[1px] border-zinc-200 p-3'>{user.name}</td>
                            <td className='border-b-[1px] border-zinc-200 p-3'>{user.email}</td>
                            <td className='border-b-[1px] border-zinc-200 p-3'>
                                <button className='py-1 px-2 bg-green-500 rounded' onClick={() => handleEdit(user)}>Edit</button>
                                <button className='py-1 px-2 bg-red-500 rounded mx-2' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
