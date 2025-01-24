import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchdata } from './slice/ApiSLice';
import { useSelector } from 'react-redux'
import { decrement, increment } from './slice/ConterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const { data, error, loading } = useSelector((state) => state.api)
  console.log(data, error, loading);

  useEffect(() => {
    dispatch(fetchdata())
  }, [])

  const dispatch = useDispatch()

  return (
    <div className='w-full text-center mt-10'>
      <h1 className='text-4xl'>Redux Middleware Example</h1>
      <h1 className='text-2xl mt-5'>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} className='py-2 px-5 mt-5 bg-emerald-400 text-black text-lg rounded cursor-pointer'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='py-2 px-5 mt-5 bg-emerald-400 text-black text-lg rounded cursor-pointer ms-5'>Decrement</button>

      <div className='mt-10 w-full'>
        <h1 className='text-center text-4xl'>Redux Middleware with API example</h1>
        <div className='w-[575px] mt-5 mx-auto text-left content-center'>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {
            data.map((items, index) => {
              return (
                <div key={index}>
                  <h3 className='text-2xl text-emerald-500 font-semibold'>{items.name}</h3>
                  <p className=' text-zinc-500 font-medium'>{items.website}</p>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default App