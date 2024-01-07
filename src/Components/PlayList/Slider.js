import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow , Pagination , Navigation} from 'swiper/modules';

function SliderComponent() {
  const size = 'h-64 w-full'
  return (
    <div className='container my-7'>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      spaceBetween={.7}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:50,
          modifier:2.5,
        }
      }
      pagination={{el:'.swipr-pagination',clickable:true}}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-perv',
        clickable:true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className='swiper-container'>
        <SwiperSlide>
          <img src='/images/img/slider/1.jpg' alt='slider' className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/2.jpg' alt='slider'className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/3.jpg' alt='slider' className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/4.jpg' alt='slider'className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/5.jpg' alt='slider'className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/2.jpg' alt='slider'className={size}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/img/slider/3.jpg' alt='slider' className={size}/>
        </SwiperSlide>
        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
          <div className='swipr-pagination'></div>
        </div>
      </Swiper>
    </div>
  )
}

export default SliderComponent
