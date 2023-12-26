import React from 'react'
import { RiFolderMusicFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { RiCircleLine } from "react-icons/ri";
import { HiMusicNote } from "react-icons/hi";
import { Playlist } from '../Data/PlayList';
import MenuBar from '../Components/PlayList/MenuBar';
import SongSide from '../Components/PlayList/SongSide';


function PlayList() {


  return (
    <div className='min-h-screen container mx-auto'>
        <div className='xl:grid grid-cols-8 items-start'>
            <div className='col-span-2 min-h-screen sticky bg-main shadoww p-2 xl:mb-0'>
                <MenuBar/>
                {/* <div className='text-white text-xl p-3 mb-5'>Playlist</div>
                {
                    // SideBar Links
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
                    {children}
                </div> */}
            </div>
            <div className='col-span-6 bg-dry text-white p-6'>
                <SongSide/>
            </div>
        </div>
    </div>
  )
}

export default PlayList
