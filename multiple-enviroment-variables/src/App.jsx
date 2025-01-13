import React from 'react'

const App = () => {
  return (
    <div className='max-w-screen-xl mx-auto h-screen bg-zinc-200 p-5'>
      <h1 className='text-3xl font-semibold'>Title</h1>
      <p className='text-md mt-2'>this is Env title <span className='text-purple-500 font-semibold underline'>{import.meta.VITE_Heading}The Title</span> </p>
    </div>
  )
}

export default App
