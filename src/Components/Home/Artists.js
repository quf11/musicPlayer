import React from 'react'
// import ArtistsData, { Data } from '../../Data/ArtistsData';
import Titles from '../Titles';
import { BsCollectionFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Data } from '../../Data/ArtistsData';

function Artists() {
  return (
    <div className='py-5'>
      <Titles title='Artists' Icon={BsCollectionFill}/>
      <div className='mt-10'>
        <Swiper autoplay={{delay:9000 , disableOnInteraction:false}}
        loop={true}
        speed={1000}
        spaceBetween={10}
        breakpoints={{
          0:{
            slidesPerView: 3,
          },
          400:{
            slidesPerView: 6,
          },
          768:{
            slidesPerView:7,
          },
          1024:{
            slidesPerView:8,
          },
          1280:{
            slidesPerView:12,
            spaceBetween:30,
          }
        }}>
          {
            Data.map((user,i) =>(
              <SwiperSlide key={i}>
                <div className='h-24 w-24 rounded-full overflow-hidden'>
                  <img src={`/images/img/Artists/${user.image}`} alt='' className='w-full h-full object-cover'/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Artists
