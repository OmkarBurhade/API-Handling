import React from 'react'
import { getPost } from './utils/PostApi'
import { useEffect } from 'react';
import Cards from './components/Cards';

const App = () => {
 
  return (
    <div className='max-w-screen-xl mx-auto py-8'>

      <Cards/>

    </div>
  )
}

export default App
