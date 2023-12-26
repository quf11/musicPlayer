import React from 'react'
import Home from './PlayList/Home'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'


function SideBar({children}) {
  return (
    <div>
      <div className='min-h-screen container mx-auto'>
        <div className='xl:grid grid-cols-8 items-start'>
            <div className='col-span-2 min-h-screen sticky bg-main shadoww p-2 xl:mb-0'>
                <Home/>
            </div>
            <div 
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='10'
            data-aos-offset='100'
            className='col-span-6 bg-dry border border-gray-800 p-6'>
                <NavBar/>
                {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
