import React from 'react'
import { FaPlay, FaShareAlt } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import FlexArtistItem from '../FlexArtistItem'

function ArtistInfo({artist}) {
    return (
        <div className='w-full xl:h-screen relative text-white'>
            <img src={`/images/img/Artists/${artist?.image}`} 
             />
        </div>
      )
}

export default ArtistInfo



