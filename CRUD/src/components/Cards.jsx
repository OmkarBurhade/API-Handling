import React, { useContext } from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react';
import { getPost } from '../utils/PostApi';
import { ContextData } from '../context/Context';

const Cards = () => {
    const { card, setCard } = useContext(ContextData) // from Context.jsx
    
    return (
        <div className='w-full'>
            <Card cardData={card} setcardDtata={setCard} />
        </div>
    )
}

export default Cards
