import React from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'
import Search from '../../Components/PlayList/Search'
import PlayBar from '../../Layout/Playbar/PlayBar'


function SideBar({children}) {
  return (
    <div>
      <div className='min-h-screen container mx-auto'>
        <div className='xl:grid grid-cols-8 items-start'>
            <div className='col-span-2 min-h-screen sticky bg-main shadoww p-2 xl:mb-0'>
                <Home/>
            </div>
            <div className='col-span-6 p-6 bg-dry min-h-screen'>
                <Search/>
                {children}
            </div>
        </div>
        <PlayBar/>
      </div>
    </div>
  )
}

export default SideBar
