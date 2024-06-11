import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import GoogleMap from '../shared/GoogleMap';
import MotionEffect from '../motion/MotionEffect';

const ContactApex = async () => {
  return (
    <>
      <SectionLayout img="bg-[url('/image/homebanner4.png')] bg-cover bg-center">
        <div className=''>
          <div className='flex items-center justify-center'>
            <div className=''>
              <MotionEffect effect='fade-up' duration='2000'>
                <h2
                  className={`text-stone-50 font-bold text-5xl mt-5 mb-4 text-center`}
                >
                  Contact Apex Advisor Group Inc
                </h2>
              </MotionEffect>

              <MotionEffect effect='fade-up' duration='2000'>
                <p className='mb-4 text-lg text-stone-50 text-center max-w-[780px] mt-8'>
                  You can be confident that Apex Advisor Group Inc is the right
                  choice
                  <br /> for you, your family and your business.
                </p>
              </MotionEffect>
            </div>
          </div>
          <MotionEffect effect='fade-up' duration='2000'>
            <div className='flex items-center justify-center flex-col mt-0 md:mt-8'>
              <div className=''>
                <Image
                  width='300'
                  height='300'
                  src={'/image/getintouch.png'}
                  alt={'carlos-rosario'}
                  className='mb-4'
                  id='getintouch'
                />
              </div>
              <div className='mt-[-15px]'>
                <Image
                  width='60'
                  height='60'
                  src={'/image/getintouchround.png'}
                  alt={'carlos-rosario'}
                  className=''
                  id='getintouchround'
                />
              </div>
            </div>
          </MotionEffect>
        </div>
      </SectionLayout>
      <div className='relative h-[550px] w-full'>
        <GoogleMap />
      </div>
    </>
  );
};

export default ContactApex;
