
import { useRef } from 'react'

const UseRef = () => {
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
            alert('email is required');
            emailRef.current.focus();
            return;
        }

        alert('From submitted successfully')
        nameRef.current.value = ''
        emailRef.current.value = ''
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <button onClick={scrollToSection} className='py-2 px-5 bg-emerald-400 rounded mt-3 text-center font-semibold text-sm'>Click for scroll</button>
            <div className='h-screen text-center flex justify-center items-center bg-emerald-100 mt-5 text-5xl font-semibold'>Just a div</div>
            <div ref={sectionRef} className='h-screen text-center flex justify-center items-center bg-emerald-200'>
                <form onSubmit={handleSubmit}>
                    <input ref={nameRef} className='border-[1px] border-emerald-500 mx-1 py-2 px-3 rounded' type="text" placeholder="Name" />
                    <input ref={emailRef} className='border-[1px] border-emerald-500 mx-1 py-2 px-3 rounded' type="email" placeholder='email...' />
                    <button type='submit' className='mx-1 rounded bg-emerald-500 py-2 px-5'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UseRef