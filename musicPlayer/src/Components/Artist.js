import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Artist({artist , }) {
  return (
    <>
    <div className='border border-border p-1 hover:scale-95 transitions rounded relative overflow-hidden'>
        <Link to={`/artist/${artist?.singer}`} className='w-full' >
            <img src={`/images/img/Artists/${artist?.image}`} alt={artist?.singer} className='w-full h-64 object-cover'/>
        </Link>
        <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-dry bg-opacity-60 text-white px-4 py-3'>
            <h3 className='font-semibold truncate'>{artist?.singer}</h3>
        </div>
    </div>
    </>
  )
}

export default Artist
