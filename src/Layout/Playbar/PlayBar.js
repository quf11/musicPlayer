import React from 'react';
import { BsCloudDownloadFill, BsFillPlayFill, BsMusicNoteBeamed, BsVolumeOffFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";

function PlayBar() {
  return (
    <div className='bg-playbar sticky bottom-0 z-20 shadow'>
      <div className='container mx-auto sm:flex py-2 px-2'>
        {/* image */}
          <div className='w-12 h-12 mx-5'>
            <img className='w-full h-full' src='/images/poster-master.jpg' alt=''/>
          </div>
        {/* description */}
        <div className='flex flex-col justify-center lg:w-56 truncate'>
          <p className='text-white font-bold text-xs'>Vanda hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh mataram</p>
          <h5 className='text-subtitle font-semibold text-xs'>Bankim Chandra</h5>
        </div>
        {/* icons */}
        <div className='text-white flex items-center text-md mx-16 gap-2'>
          <BsMusicNoteBeamed/>
          <BsFillSkipStartFill/>
          <BsFillPlayFill/>
          <BsSkipEndFill/>
          <BsCloudDownloadFill/>
        </div>
        {/* music bar */}
        <div className='flex items-center gap-2'>
            <span className='text-white text-sm'>0:00</span>
            <div className='bar'>
                <input className='inputt' type='range' min='0' max='max'/>
                <div class="bar2" id="bar2"></div>
                <div class="bar_dot"></div>
            </div>
            <span className='text-white text-sm'>0:30</span>
        </div>
        {/* vol */}
        <div>
            <div className='vol flex items-center'>
                <BsVolumeOffFill className='text-white text-md bi'/>
                <input type='range' min='0' max='max'/>
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayBar
