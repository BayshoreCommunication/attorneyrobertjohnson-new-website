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
                  className={`text-stone-50 font-bold text-2xl md:text-5xl mt-5 mb-4 text-center`}
                >
                  CONTACT ME FOR A NO COST FREE CONSULTATION
                </h2>
              </MotionEffect>

              <MotionEffect effect='fade-up' duration='2000'>
                <p className='mb-4 text-lg text-stone-50 text-center mt-8'>
                  I you have been involved in an accident and have quistions,
                  call me now to schedule a free no-obligation consultation.
                  <br /> consultation.
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
                  src={'/images/getintouch.png'}
                  alt={'getintouch'}
                  className='mb-4'
                  id='getintouch'
                />
              </div>
            </div>
          </MotionEffect>
        </div>
      </SectionLayout>
    </>
  );
};

export default ContactApex;
