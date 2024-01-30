import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { BannerImage } from '../../Data/BannerData';


function Banner() {
    return (
      <Swiper
      direction='vertical'
      loop={true}
      speed={1000}
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{delay:9000 , disableOnInteraction:false}}
      className='w-full xl:h-96 bg-dry lg:h-64 h-48'
    >
      {
        BannerImage.map((banner , index) => (
          <SwiperSlide key={index} className='relative rounded overflow-hidden'>
            <img
            src={`/images/img/Banner/${banner.image}`}
            alt={banner.alt}
            className='w-full h-full object-cover'
            />
            <div className='absolute xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 linear-bg'>
              <h1 className='xl:text-4xl truncate'></h1>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Banner



