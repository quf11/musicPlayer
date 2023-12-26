import React from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Playlist } from '../../Data/PlayList';
import { RiCircleLine, RiFolderMusicFill } from "react-icons/ri";
import { HiMusicNote } from "react-icons/hi";
import { useState } from 'react';
import { useEffect } from 'react';


function MenuBar({children}) {

    const { name } = useParams();
    const selectedPlaylist = Playlist.find((playlist) => playlist.name === name);

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



const active = 'bg-dryGry text-subMain'
const hover = 'hover:text-white hover:bg-main'
const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-2'
const inActive1 = 'rounded font-medium text-sm transitions flex gap-3 items-center text-subtitle p-2'
const Hover = ({isActive}) =>
    isActive ? `${active} ${inActive}` : `${inActive1} ${hover}`
const HoverPlaylists = ({isActive}) =>
isActive ? `${active} ${inActive}` : `${inActive1} ${hover}`



  return (
    <>
    



    <div>
      {/* اینجا از Link برای ایجاد لینک به صفحه playlist استفاده شده است */}
      <Link to="/playlist/Top%20Tracks">Top Tracks</Link>
      <Link to="/playlist/Best%20Musics">Best Musics</Link>
      {/* سایر لینک‌ها بر اساس نیاز اضافه شوند */}

      {/* نمایش آهنگ‌ها متناسب با پلی‌لیست انتخاب شده */}
      {selectedPlaylist && selectedPlaylist.musics && (
        <div className='text-white'>
          <h2>{selectedPlaylist.name}</h2>
          <ul>
            {selectedPlaylist.musics.map((music) => (
              <li key={music.id}>{music.name} - {music.singer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>










    </>
    // <div>
    //   <div className='text-white text-xl p-3 mb-5'>Playlist</div>
    //             {
    //                 // SideBar Links
    //                 SideLinks.map((link, index) =>(
    //                     <NavLink to={link.link} key={index} className={Hover}>
    //                         <link.icon/><p>{link.name}</p>
    //                     </NavLink>
    //                 ))
    //             }
    //             <div className='mt-8 overflow-y-scroll h-52 hide-scrollbar'>
    //                     {
    //                         Playlist.map((p , index) =>(
    //                             <NavLink to={`/playlist/${p?.name}`} key={index} className={HoverPlaylists}>
    //                                 <RiFolderMusicFill/>
    //                                 <p>{p.name}</p>
    //                             </NavLink>
    //                         ))
    //                     }
    //             </div>
    //             <div 
    //             data-aos='fade-up'
    //             data-aos-duration='1000'
    //             data-aos-delay='10'
    //             data-aos-offset='200'
    //             className='mt-8 overflow-y-scroll w-full h-52 hide-scrollbar'>
                    
    //             </div>
    // </div>
  )
}

export default MenuBar
