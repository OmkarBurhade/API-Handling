import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
 
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nameRef.current.value) {
      alert('name is required');
      nameRef.current.focus();
      return;
    }
    if (!emailRef.current.value) {
      alert('name is required');
      emailRef.current.focus();
      return;
    }

    alert('From submitted successfully')
  }

  return (
    <div>

     
      <br /> <hr />
      <button onClick={scrollToSection} style={{ margin: '10px' }}>Go to section</button>
      <div style={{ height: '100vh' }}>Scroll down</div>
      <div ref={sectionRef} style={{ height: '50vh', background: 'lightblue' }}>Target Section</div>

      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={emailRef} type="email" placeholder='email...' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App