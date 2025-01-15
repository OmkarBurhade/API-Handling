import React, { useContext, useEffect, useState } from 'react'
import { ContextData } from '../context/Context';
import { postData, updateData } from '../utils/PostApi';

const Form = () => {
    // from Context.jsx
    const { card, setCard, updateDataApi, setUpdateDataApi } = useContext(ContextData)

    // get data from inputs
    const [addData, setAddData] = useState({
        title: '',
        body: '',
    })


    let isEmpty = Object.keys(updateDataApi).length === 0

    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            })
    }, [updateDataApi])

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

        setCard([...card, res.data]);
        setAddData({ title: '', body: '' });
    }



    // card update/edit/ using post 
    const updateCardData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData)
            console.log(res);
            setCard((prev) => {
                return prev.map((elem) => {
                    return elem.id === updateDataApi.id ? res.data : elem;
                });
            });
            setAddData({ title: '', body: '' });
            setUpdateDataApi({})

        } catch (error) {
            console.log(error);
        }
    }



    // from submission
    const handlFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        console.log(action);
        if (action === "Add") {
            addPostData();
        } else if (action === "Update") {
            updateCardData();
        }

    }
    return (
        <div className='my-5'>
            <form onSubmit={handlFormSubmit} className='flex gap-5 justify-start items-center rounded-md w-fit h-14 bg-purple-50 ps-2 pr-5'>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" className='py-2 px-5 rounded focus:outline focus:outline-0 placeholder:font-normal border-[0.5px] border-purple-300' required autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handlInputChange} />
                </div>
                <div>
                    <label htmlFor="desc"></label>
                    <input type="text" className='py-2 px-5 rounded focus:outline focus:outline-0 placeholder:font-normal border-[0.5px] border-purple-300' required autoComplete='off' id='desc' name='body' placeholder='Add Post' value={addData.body} onChange={handlInputChange} />
                </div>
                <button className='py-2 px-5 rounded text-white bg-purple-800' type='submit' value={isEmpty ? "Add" : "Update"}> {isEmpty ? "Add" : "Update"}</button>
            </form>
        </div>
    )
}

export default Form
