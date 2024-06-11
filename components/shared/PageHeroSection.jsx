import React from 'react';
import MotionEffect from '../motion/MotionEffect';
import Image from 'next/image';

// img="bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
const PageHeroSection = ({
  heading,
  subheading,
  paragraphOne,
  paragraphTwo,
  image,
  alt,
  width,
  height,
}) => {
  return (
    <section className='bg-[#11869912] overflow-hidden mt-[62px] md:mt-[130px]'>
      <div className='lg:flex gap-10 items-start '>
        <div className='p-6 lg:pe-0 lg:ps-[5%] 2xl:ps-[10%] w-full lg:max-w-[50%] text-center lg:text-start'>
          <MotionEffect effect={'fade-right'} duration={'2000'}>
            <h1 className='text-4xl font-semibold mb-4 '>{heading}</h1>
            <h4 className='text-2xl font-medium mb-4 '>{subheading}</h4>
            <p className='text-base my-3 '>{paragraphOne}</p>
            <p className='text-base  '>{paragraphTwo}</p>
          </MotionEffect>
        </div>

        <div className='w-full hidden lg:block'>
          <MotionEffect effect={'fade-left'} duration={'2000'}>
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
              className='w-full rounded-tl-[180px] rounded-bl-[180px]'
            ></Image>
          </MotionEffect>
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
