import React from 'react'
import { BiTime } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'

function FlexArtistItem({artist}) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>{artist.category}</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{artist.year}</span>
            </div>
            <div className='flex items-center gap-2'>
                <BiTime className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{artist.time}</span>
            </div>
        </>
      )
}

export default FlexArtistItem
