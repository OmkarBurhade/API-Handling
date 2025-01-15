import React from 'react'
import { getPost } from './utils/PostApi'
import { useEffect } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';

const App = () => {

  return (
    <div className='max-w-screen-xl mx-auto py-8'>
      <Form />
      <Cards />

    </div>
  )
}

export default App
