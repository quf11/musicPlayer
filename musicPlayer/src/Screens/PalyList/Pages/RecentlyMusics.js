import React from 'react'
import Music from '../../../Components/Music'
import { Musics } from '../../../Data/MusicData'
import SideBar from '../SideBar'

function RecentlyMusics() {
    return (
        <div>
          <SideBar>
            <div className='min-height-screen container mx-auto px-2 mt-3'>
              <div className='h-header overflow-y-scroll overflow-hidden hide-scrollbar'>
                <div className='grid sm:mt-10 mt-5 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {
                      Musics.slice(4,12).map((music , index)=>(
                        <Music key={index} music={music} />
                      ))
                    }
                </div>
              </div>
            </div>
          </SideBar>
        </div>
      )
}

export default RecentlyMusics
