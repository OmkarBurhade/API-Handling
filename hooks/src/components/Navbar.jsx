import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjectives }) => {
  console.log('navbat is rendered');

  return (
    <div>
      I am a {adjective} Navbar
      <button className='py-2 px-5 rounded bg-emerald-200 mx-2'>{getAdjectives()}</button>
    </div>
  )
}

export default memo(Navbar) // the Navbar is rendered when the props are updated. This is because the memo is take a snapshot and store it in the cache and check the props are updated or not if the props are not updated/changed then the Navbar is not rendered.