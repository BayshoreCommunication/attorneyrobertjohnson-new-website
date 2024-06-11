import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import ServiceSlider from './ServiceSlider';
import MotionEffect from '../motion/MotionEffect';
import Link from 'next/link';

const ServiceSection = () => {

  return (
    <SectionLayout img="bg-[url('/image/homebanner2.png')] bg-cover md:bg-center bg-left bg-fixed">
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center md:justify-start '>
          <MotionEffect effect='fade-right' duration='2000'>
            <div className='col-span-1'>
              <h2
                className={`text-stone-50 font-bold text-3xl mt-5 mb-4 text-center md:text-left`}
              >
                Our <span className='text-[#00E0FF]'>Services</span>
              </h2>
              <hr class='h-[2px] my-0 bg-[#00E0FF] border-0 w-24 mx-auto md:mx-0'></hr>
              <p className='mb-4 text-lg text-stone-50 text-center md:text-left mt-6'>
                Introducing our top-rated service that offers expert solutions
                for all your needs. Our team of professionals provide efficient
                and reliable service that is tailored to your specific
                requirements. With a wide range of services including
                consulting, design, development, and maintenance, we have got
                you covered. Trust us to deliver high-quality results on time
                and within budget. Contact us today to experience the best
                service in the industry!
              </p>
              <div className='flex justify-center md:justify-start'>
                <Link
                  href={'/services'}
                  id='view-all-btn'
                  type='button'
                  className='text-stone-50 bg-none hover:bg-[#0E758B] font-medium text-base md:text-lxl px-6 md:px-8 py-2.5 me-0 md:me-6 mb-2 mt-5 border border-stone-900 md:border-white'
                >
                  VIEW ALL
                </Link>
              </div>
            </div>
          </MotionEffect>

          <div className='col-span-2 ml-0 md:ml-20 md:mx-0'>
            <MotionEffect effect='fade-left' duration='2000'>
              <div>
                <ServiceSlider />
              </div>
            </MotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
