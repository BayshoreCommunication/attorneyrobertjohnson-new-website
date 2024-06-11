import React from "react";
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import MotionEffect from '../motion/MotionEffect';

const AboutUs = async () => {
  return (
    <SectionLayout img="bg-[url('/image/homebanner3.png')] bg-cover bg-center">
      <div className=''>
        <div className='flex items-center justify-center'>
          <div className=''>
            <MotionEffect effect='fade-up' duration='2000'>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
              >
                About Us
              </h2>
              <hr class='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
            </MotionEffect>

            <MotionEffect effect='fade-up' duration='2000'>
              <p className='mb-4 text-lg text-stone-950 text-center max-w-[780px] mt-8 mx-4'>
                Putting the clients’ needs first has always been the Apex
                Advisor philosophy and has helped us create a reputation of
                honesty, integrity and trust with our clients and our community.
                We strive to increase financial literacy and awareness for all
                our clients and our community.
              </p>
            </MotionEffect>
          </div>
        </div>

        <div className='flex  mt-0 md:mt-8 items-center justify-center gap-2 md:gap-8 mx-4'>
          <MotionEffect effect='fade-up' duration='2000'>
            <div className='max-w-[150px] max-h-[150px] min-w-[50px] min-h-[50px] rounded-full transition-transform duration-300 hover:scale-105'>
              <Image
                width='150'
                height='150'
                src={'/image/carlos-rosario.jpg'}
                alt={'carlos-rosario'}
                className='rounded-full'
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='max-w-[150px] max-h-[150px] min-w-[50px] min-h-[50px] rounded-full transition-transform duration-300 hover:scale-105'>
              <Image
                width='150'
                height='150'
                src={'/image/jennifer-colon.jpg'}
                alt={'jennifer-colon'}
                className='rounded-full'
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='max-w-[150px] max-h-[150px] min-w-[50px] min-h-[50px] rounded-full transition-transform duration-300 hover:scale-105'>
              <Image
                width='150'
                height='150'
                src={'/image/eddia-rosario.jpg'}
                alt={'eddia-rosario'}
                className='rounded-full'
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='max-w-[150px] max-h-[150px] min-w-[50px] min-h-[50px]rounded-full transition-transform duration-300 hover:scale-105'>
              <Image
                width='150'
                height='150'
                src={'/image/stephane-calixte.jpg'}
                alt={'stephane-calixte'}
                className='rounded-full'
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='max-w-[150px] max-h-[150px] min-w-[50px] min-h-[50px] rounded-full transition-transform duration-300 hover:scale-105'>
              <Image
                width='150'
                height='150'
                src={'/image/carlos-alberto.jpg'}
                alt={'carlos-alberto'}
                className='rounded-full'
              />
            </div>
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
