import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { addTask, deleteTask, fetchTask } from '../Store';

const Todo = () => {
    const tasks = useSelector((state) => state.task)

    const [task, setTask] = useState('');

    const dispatch = useDispatch();
    //   form handleFromSubmit
    const handleFromSubmit = (e) => {
        e.preventDefault();
        return (
            dispatch(addTask(task)),
            setTask('')
        )
    }
    // handletaskDelete
    const handletaskDelete = (index) => {
        return dispatch(deleteTask(index))
    }

    // fetch task from API 
    const handleFetchTask = async () => {
       return dispatch(fetchTask())
    }

    return (
        <div className='bg-zinc-100 w-96 p-5  rounded-lg'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl mb-5 font-bold'>To-do List:</h1>
                <h5 onClick={handleFetchTask} className='text-sm mb-5 text-green-600 underline font-bold cursor-pointer'>Fetch Data</h5>
            </div>
            <form onSubmit={handleFromSubmit} className='flex justify-center items-center w-full'>
                <input onChange={(e) => setTask(e.target.value)} className='py-2 px-4 bg-white w-[245px] rounded-s-full focus:outline-none' type="text" value={task} placeholder='Add new a task' required />
                <button type='submit' className='py-2 px-4 rounded-e-full text-md font-semibold text-white focus:outline-none bg-zinc-800'>Add Task</button>
            </form>
            <ul className='mt-2'>
                {tasks.map((curTask, index) => {
                    return (
                        <li key={index} className='py-2 px-4 hover:bg-red-100'>
                            <div className='flex justify-between items-center'>
                                <p className='flex gap-10 text-center text-lg font-normal'> <span>{index} </span> {curTask} </p>
                                <AiFillDelete title='delete!' onClick={() => handletaskDelete(index)} className='fill-red-600 cursor-pointer' />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo
