import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const { name } = useParams()
    const navigat = useNavigate()
    const goBackHandler = () => {
        navigat('/user') // for navigate the component using url
        // navigat(-1) // for navigate the component back 
        console.log('go back '+ name);

    }
    return (
        <div className='bg-zinc-200 w-1/2 m-auto p-4 rounded mt-10'>
            <h1 className='text-3xl font-medium mb-2'>Hii! {name}</h1>
            <p className='font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo eum, id voluptate et, aliquam mollitia sit veritatis possimus error nobis alias qui voluptatum repellendus voluptatibus esse facilis? Aliquam, iusto?</p>
            <button onClick={goBackHandler} className='py-2 px-3 mt-4 bg-zinc-600 text-white rounded'>Go Back!</button>
        </div>
    )
}

export default UserDetails