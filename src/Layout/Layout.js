import React from 'react'
import NavBar from './Navbar/NavBar';
import PlayBar from '../Layout/Playbar/PlayBar';

function Layout({children}) {
  return (
    <div className='bg-main'>
        <NavBar/>
        {children}
        <PlayBar/>
    </div>
  )
}

export default Layout
