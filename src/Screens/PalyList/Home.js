import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Playlist } from '../../Data/PlayList';
import { HiMusicNote } from 'react-icons/hi';
import { RiCircleLine, RiFolderMusicFill } from 'react-icons/ri';
import { BsFillPlayCircleFill } from 'react-icons/bs';

function Home({children}) {

    const [clickedPlaylist , setClickPlaylist] = useState(null);
    const [activeId , setActiveId] = useState(null);

    const active = 'rounded font-medium text-sm transitions flex gap-3 items-center p-2 bg-dryGry text-subMain'
    const hover = 'rounded font-medium text-sm transitions flex gap-3 items-center text-subtitle p-2 hover:text-subMain hover:bg-maine'

    const Hover = ({isActive}) =>
        isActive ? `${active}` : `${hover}`


        const handleClick = (id) => {
            const foundPlaylist = Playlist.find((p) => p.name ===id)
            if(foundPlaylist){
                console.log('clicked playlist:', foundPlaylist)
                setClickPlaylist(foundPlaylist);
            }else{
                console.log('playlist not found!')
            }
        }

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
        {
            name:'New Playlist',
            link:'/musics',
            icon : RiCircleLine
        },
        {
            name:'Downloaded',
            link:'/',
            icon : RiCircleLine
        },
        {
            name:'recently',
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
            <div className='mt-6 overflow-y-scroll h-36 hide-scrollbar'>
                {
                    Playlist.map((p , index) =>{
                        let id = p.name;
                        const buttonClassName = id===activeId ? active:hover;
                        return(
                            <NavLink 
                            to={`/playlist/`} 
                            key={index} 
                            className={buttonClassName}
                            id={p.name} 
                            onClick={() => handleClick(id)}>
                                <RiFolderMusicFill/>
                                <p>{p.name}</p>
                        </NavLink>
                        )
    })
                }
            </div>
            <div 
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='10'
            data-aos-offset='100'
            className='mt-8 overflow-y-scroll h-44 hide-scrollbar'
            >
                {clickedPlaylist && (
                    <div>
                    <div>
                        {clickedPlaylist.musics.map((music, index) => (
                            <div className='xl:grid grid-cols-6 flex justify-between mb-2' key={index}>
                            <h5 className='col-span-1 text-subtitle text-sm font-bold flex items-center ml-2'>{music.id}</h5>
                            <img src={`/images/img/${music.poster}`} alt={music.name} className='col-span-1 w-10'/>
                            <div className='col-span-3 font-bold'>
                                <h5 className='text-white text-xs'>{music.name}</h5>
                                <h5 className='text-subtitle text-xs'>{music.singer}</h5>
                            </div>
                            <div className='col-span-1 text-white flex-colo'>
                            <BsFillPlayCircleFill/>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
            </div>
    </div>
      )
}


export default Home


