import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Titles from '../Titles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Autoplay } from 'swiper/modules';
import { Musics } from '../../Data/MusicData';

function Suggestion() {
    return (
        <div className='mt-10'>
          <h2 className='font-bold text-lg text-white'>Suggestion</h2>
          <div className='mt-2'>
            <Swiper
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            spaceBetween={10}
            breakpoints={{
              0:{
                slidesPerView: 3,
              },
              400:{
                slidesPerView: 4,
              },
              768:{
                slidesPerView:5,
              },
              1024:{
                slidesPerView:6,
              },
              1280:{
                slidesPerView:8,
                spaceBetween:20,
              }
            }}>
              {
                Musics.map((user,i) =>(
                  <SwiperSlide key={i}>
                    <div className='w-full p-3 hovered text-xs text-text rounded flex-colo'>
                      <img src={`/images/img/${user.poster}`} alt={user.name} className='w-full h-30 object-cover rounded mb-4'/>
                      <div className='text-left'>
                        <p className='text-xs text-white text-bold'>{user.name}</p>
                        <h5 className='text-subtitle'>{user.singer}</h5>
                      </div>
                      <div className='px-4 gap-6 hoveres bg-black text-center absolute bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                          <button className='w-12 h-12 transitions flex-colo rounded-full bg-opacity-30 text-white'>
                            <AiFillPlayCircle className='text-4xl'/>
                          </button>
                    </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
  )
}

export default Suggestion
