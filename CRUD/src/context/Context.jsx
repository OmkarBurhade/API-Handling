import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../utils/PostApi';
export const ContextData = createContext()
const Context = (props) => {

    // getting cards from api 
    const [card, setCard] = useState([])

    // getting cards data from edit button 
    const [updateDataApi, setUpdateDataApi] = useState({})

    const getDataData = async () => {
        const res = await getData();
        setCard(res.data);
    };

    useEffect(() => {
        getDataData();
    }, [])

    return (
        <ContextData.Provider value={{ card, setCard, updateDataApi, setUpdateDataApi }}>
            {props.children}
        </ContextData.Provider>
    )
}

export default Context
