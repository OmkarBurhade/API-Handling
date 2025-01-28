import React, { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'

const UseCallback = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    // const getAdjectives = () => {
    //     return 'another' + count
    // }
    const getAdjectives = useCallback(
        () => {
            return 'another' + count
        }, [count])

    return (
        <div className='max-w-screen-xl mx-auto mt-5 px-36'>
            <Navbar adjective={'good'} getAdjectives={getAdjectives} />
            <h3 className='text-2xl mt-5'>Count: {count}</h3>
            <button onClick={handleCount} className='py-2 px-5 bg-emerald-400 rounded mt-3 text-sm font-semibold'>Increment</button>
        </div>
    )
}

export default UseCallback