import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react';
import { getPost } from '../utils/PostApi';

const Cards = () => {
    const [card, setCard] = useState([])
    const getPostData = async () => {
        const res = await getPost();
        setCard(res.data);
    };

    useEffect(() => {
        getPostData();
    }, [])


    return (
        <div className='w-full'>
            <Card cardData={card} setcardDtata={setCard} />
        </div>
    )
}

export default Cards
