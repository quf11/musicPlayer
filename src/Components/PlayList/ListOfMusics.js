import React from 'react'
import Home from './Home'
import { useParams } from 'react-router-dom';
import { Playlist } from '../../Data/PlayList';
import { BsFillPlayCircleFill } from 'react-icons/bs';

function ListOfMusics() {
    let {id} = useParams();
    const music = Playlist.find ((music) => music.name === id);
  return (
    <Home>
      {
              music.musics.map((m , index) =>(
                <>
                  <div className='xl:grid grid-cols-6 flex justify-between mb-2' key={index}>
                    <h5 className='col-span-1 text-subtitle text-sm font-bold flex items-center ml-2'>{m.id}</h5>
                    <img src={`/images/img/${m.poster}`} alt={m.name} className='col-span-1 w-10'/>
                    <div className='col-span-3 font-bold'>
                        <h5 className='text-white text-xs'>{m.name}</h5>
                        <h5 className='text-subtitle text-xs'>{m.singer}</h5>
                    </div>
                    <div className='col-span-1 text-white flex-colo'>
                      <BsFillPlayCircleFill/>
                    </div>
                  </div>
                </>
              ))
              }
    </Home>
  )
}

export default ListOfMusics




{/* {
              music.musics.map((m , index) =>(
                <>
                  <div className='xl:grid grid-cols-6 flex justify-between mb-2' key={index}>
                    <h5 className='col-span-1 text-subtitle text-sm font-bold flex items-center ml-2'>{m.id}</h5>
                    <img src={`/images/img/${m.poster}`} alt={m.name} className='col-span-1 w-10'/>
                    <div className='col-span-3 font-bold'>
                        <h5 className='text-white text-xs'>{m.name}</h5>
                        <h5 className='text-subtitle text-xs'>{m.singer}</h5>
                    </div>
                    <div className='col-span-1 text-white flex-colo'>
                      <BsFillPlayCircleFill/>
                    </div>
                  </div>
                </>
              ))
              } */}
