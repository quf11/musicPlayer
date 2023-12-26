import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Playlist } from '../../Data/PlayList';
import { HiMusicNote } from 'react-icons/hi';
import { RiCircleLine, RiFolderMusicFill } from 'react-icons/ri';

function Home({children}) {

    const active = 'bg-dryGry text-subMain'
    const hover = 'hover:text-white hover:bg-main'
    const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-2'
    const inActive1 = 'rounded font-medium text-sm transitions flex gap-3 items-center text-subtitle p-2'
    const Hover = ({isActive}) =>
        isActive ? `${active} ${inActive}` : `${inActive1} ${hover}`
    const HoverPlaylists = ({isActive}) =>
        isActive ? `${active} ${inActive}` : `${inActive1} ${hover}`


    const SideLinks =[
        {
            name:'Playlist',
            link:'/playlist',
            icon : HiMusicNote
        },
        {
            name:'Home',
            link:'/',
            icon : RiCircleLine
        },
    ];


  return (
    <div>
        <div className='text-white text-xl p-3 mb-5'>Playlist</div>
        {
            SideLinks.map((link, index) =>(
                <NavLink to={link.link} key={index} className={Hover}>
                    <link.icon/><p>{link.name}</p>
                </NavLink>
            ))
        }
        <div className='mt-8 overflow-y-scroll h-52 hide-scrollbar'>
            {
                Playlist.map((p , index) =>(
                    <NavLink to={`/playlist/${p?.name}`} key={index} className={HoverPlaylists}>
                            <RiFolderMusicFill/>
                            <p>{p.name}</p>
                    </NavLink>
                ))
            }
        </div>
        <div 
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='10'
        data-aos-offset='200'
        className='mt-8 overflow-y-scroll h-52 hide-scrollbar'>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Home



//   <div className='xl:grid grid-cols-6 flex justify-between mb-2' key={index}>
                //     <h5 className='col-span-1 text-subtitle text-sm font-bold flex items-center ml-2'>{m.id}</h5>
                //     <img src={`/images/img/${m.poster}`} alt={m.name} className='col-span-1 w-10'/>
                //     <div className='col-span-3 font-bold'>
                //         <h5 className='text-white text-xs'>{m.name}</h5>
                //         <h5 className='text-subtitle text-xs'>{m.singer}</h5>
                //     </div>
                //     <div className='col-span-1 text-white flex-colo'>
                //       <BsFillPlayCircleFill/>
                //     </div>
                //   </div>
