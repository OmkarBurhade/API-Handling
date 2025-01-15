import React, { useContext, useState } from 'react'
import { ContextData } from '../context/Context';
import { postData } from '../utils/PostApi';

const Form = () => {
    // from Context.jsx
    const { card, setCard } = useContext(ContextData)
    
    // get data from inputs
    const [addData, setAddData] = useState({
        title: '',
        body: '',
    })

    const handlInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const addPostData = async () => {
        const res = await postData(addData);
        console.log(res);
        
        if (res.status === 201) {
           const d= setCard([...card, res.data]);
           setAddData({title:'', body:''});
        }
    }

    // from submission
    const handlFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }
    return (
        <div className='my-5'>
            <form onSubmit={handlFormSubmit} className='flex gap-5 justify-start items-center rounded-md w-fit h-14 bg-purple-50 ps-2 pr-5' action="">
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" className='py-2 px-5 rounded focus:outline focus:outline-0 placeholder:font-normal border-[0.5px] border-purple-300' autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handlInputChange} />
                </div>
                <div>
                    <label htmlFor="desc"></label>
                    <input type="text" className='py-2 px-5 rounded focus:outline focus:outline-0 placeholder:font-normal border-[0.5px] border-purple-300' autoComplete='off' id='desc' name='body' placeholder='Add Post' value={addData.body} onChange={handlInputChange} />
                </div>
                <button className='py-2 px-5 rounded text-white bg-purple-800' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form
