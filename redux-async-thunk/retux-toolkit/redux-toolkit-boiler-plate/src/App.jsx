import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync } from './store/reducers/CounterSlice';
const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=' w-full h-screen p-5'>
      <h1>
        Counter: {value}
      </h1>
      <div className='flex gap-5 mt-2'>
        <button onClick={() => dispatch(increment())} className='py-2 px-5 bg-blue-500 rounded text-white'>Increment</button>
        <button onClick={() => dispatch(decrement())} className='py-2 px-5 bg-blue-500 rounded text-white'>Decrement</button>
        <button onClick={() => dispatch(incrementAsync(5))} className='py-2 px-5 bg-blue-500 rounded text-white'>Increment by 5</button>
      </div>
    </div>
  )
}

export default App