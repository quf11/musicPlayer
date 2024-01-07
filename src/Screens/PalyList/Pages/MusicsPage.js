import React from 'react'
import SideBar from '../SideBar'
import { CgSpinner } from 'react-icons/cg';
import { useState } from 'react';
import Music from '../../../Components/Music';
import { Musics } from '../../../Data/MusicData';

function MusicsPage() {
  const maxPage = 15;
  const [page , setPage] = useState(maxPage)
  const HandleLoadingMore = () =>{
    setPage(page + maxPage)
  }
  return (
    <div>
      <SideBar>
        <div className='min-height-screen container mx-auto px-2 mt-3'>
          <div className='h-header overflow-y-scroll overflow-hidden hide-scrollbar'>
            <div className='grid sm:mt-10 mt-5 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {
                  Musics.slice(0,page).map((music , index)=>(
                    <Music key={index} music={music} />
                  ))
                }
            </div>
            <div className='w-full flex-colo md:my-20 my-10'>
              <button onClick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                Loading More <CgSpinner className='animate-spin'/>
              </button>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  )
}

export default MusicsPage
