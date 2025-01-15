import React, { createContext, useEffect, useState } from 'react'
import { getPost } from '../utils/PostApi';
export const ContextData = createContext()
const Context = (props) => {
    const [card, setCard] = useState([])
    const getPostData = async () => {
        const res = await getPost();
        setCard(res.data);
    };

    useEffect(() => {
        getPostData();
    }, [])
    
    return (
        <ContextData.Provider value={{ card, setCard }}>
            {props.children}
        </ContextData.Provider>
    )
}

export default Context
