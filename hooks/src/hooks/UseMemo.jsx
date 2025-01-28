import React, { useEffect, useMemo, useState } from 'react'
const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    }
})



const UseMemo = () => {
    console.log('page rerender');
    const [Count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(nums)
    // const magical = numbers.find(items => items.isMagical === true) //Expensive Computation
    const magical = useMemo(() => numbers.find(items => items.isMagical === true), [numbers])
    console.log('magical number rendering', magical);

    const handleCount = () => {
        setCount(Count + 1)
        if (Count == 10) {
            setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
                return {
                    index: i,
                    isMagical: i === 9_000_000
                }
            }))
        }
    }


    return (
        <div className='max-w-screen-xl mx-auto mt-5'>
            <span className='mb-5'>Magical Number is {magical.index}</span>
            <button onClick={handleCount} className='py-2 px-5 bg-emerald-300 rounded mx-2'>Count:{Count} </button>

        </div>
    )
}

export default UseMemo