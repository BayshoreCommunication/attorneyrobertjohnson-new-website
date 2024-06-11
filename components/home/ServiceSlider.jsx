'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { sliderData } from '@/config/sliderData';

export default function ServiceSlider() {
  return (
    <div className='flex justify-center items-center py-10 mx-0 md:mx-10'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
        breakpoints={{
          // when window width is >= 0px (mobile and tablets)
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px (desktops)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {sliderData?.map((el, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center items-start rounded-lg min-h-[360px] mb-10 p-5 shadow-md bg-slate-50'>
              <div>
                <Image
                  width={45}
                  height={45}
                  src={`/image/${el.image}`}
                  alt={el.image}
                />
                <h2 className='text-stone-900 font-bold text-2xl mt-5 mb-2 text-left'>
                  {el.titt}
                </h2>
                <p className='mb-4 text-md text-stone-900 text-left mt-2'>
                  {el.detail}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-pagination mt-5'></div>
      </Swiper>
    </div>
  );
}
