import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, Divided, fetchCounter, increment, multiply, updateCounter } from '../Store/Slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();

    const { value, loading, error } = useSelector((state) => state.counter)
    console.log(value, loading, error);

    useEffect(() => {
        dispatch(fetchCounter())
    }, [])

    const handleIncrement = () => {
        dispatch(increment());
        dispatch(updateCounter(value + 1))
    };
    const handleDecrement = () => {
        dispatch(decrement());
        dispatch(updateCounter(value - 1))
    };
    const handleMultiply = () => {
        dispatch(multiply());
        dispatch(updateCounter(value * 2))
    };
    const handleDivided = () => {
        dispatch(Divided());
        dispatch(updateCounter(value / 2))
    };

    return (
        <div>
            <h1 className=''>Counter Application</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h2 className='my-2'>Counter Value: {value}</h2>

            <button onClick={()=>(handleIncrement())} className='py-2 px-5 bg-purple-400 rounded text-md font-semibold text-center content-center mt-5'>+ Increment</button>

            <button onClick={handleDecrement} className='py-2 px-5 bg-purple-400 mx-2 rounded text-md font-semibold text-center content-center mt-5'>- Decrement</button>

            <button onClick={handleMultiply} className='py-2 px-5 bg-purple-400 mx-2 rounded text-md font-semibold text-center content-center mt-5'>* Multiply</button>

            <button onClick={handleDivided} className='py-2 px-5 bg-purple-400 mx-2 rounded text-md font-semibold text-center content-center mt-5'>/ Divided</button>

        </div>
    )
}

export default Counter
