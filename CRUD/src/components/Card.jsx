import React from 'react'
import { deletePost } from '../utils/PostApi'

const Card = ({ cardData, setcardDtata }) => {
    
    // delete data from API 
    const handleDeleteCard = async (id) => {
        try {
            const res = await deletePost(id)
            if (res.status === 200) {
                const newDeletedPost = cardData.filter((curPost) => {
                    return (
                        curPost.id != id
                    )
                });
                setcardDtata(newDeletedPost);

            } else {
                console.log("Failed to delete the Card", res.status);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='grid gap-4 grid-cols-3 grid-rows'>
            {cardData.map((card, i) => {
                const { id, title, body } = card
                return (
                    <div key={i} className='w-full border-[0.5px] border-purple-300 border-s-2 border-s-purple-800 bg-purple-50 p-3 rounded'>
                        <span className='text-lg text-purple-800 mb-2 inline-block font-bold'> {id}</span>
                        <h5 className='text-md mb-2 font-medium'><span className='font-bold  text-purple-800'>Title: </span>{title}</h5>
                        <p className='text-md font-medium'><span className='font-bold  text-purple-800'>News:</span> {body}</p>
                        <div className='mt-5'>
                            <button className='py-2 text-md font-medium text-white px-8 mr-5 shadow-md shadow-[#cb9aff] bg-green-500 rounded'>EDIT</button>
                            <button onClick={() => handleDeleteCard(id)} className='py-2 text-md font-medium text-white px-8 shadow-md shadow-[#cb9aff] bg-red-500 rounded'>DELETE</button>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default Card
