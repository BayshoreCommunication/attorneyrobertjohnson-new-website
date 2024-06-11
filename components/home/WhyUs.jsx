import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import MotionEffect from '../motion/MotionEffect';

const WhyUs = async () => {
  return (
    <SectionLayout bg='bg-slate-50 '>
      <div className=''>
        <div className='flex items-center justify-center'>
          <div className=''>
            <MotionEffect effect='fade-up' duration='2000'>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
              >
                Why Us
              </h2>

              <hr class='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
            </MotionEffect>

            <MotionEffect effect='fade-up' duration='2000'>
              <p className='mb-4 text-lg text-stone-950 text-center max-w-[700px] mt-8'>
                Bookkeeping, Payroll, Tax Preparation, Credit Repair &
                Counseling We here at Apex Advisor Group Inc are a team of
                highly qualified professionals that have over 40+ years of
                combined experience in the tax, accounting, insurance.
              </p>
            </MotionEffect>
          </div>
        </div>

        <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-0 md:mt-4'>
          <MotionEffect effect='fade-up' duration='2000'>
            <div className='transition-transform duration-300 hover:scale-105'>
              <Image
                width='300'
                height='200'
                className='w-full object-cover h-[300px]'
                src={'/image/understanding.png'}
                alt={'understanding'}
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='transition-transform duration-300 hover:scale-105'>
              <Image
                width='300'
                height='200'
                className='w-full object-cover h-[300px]'
                src={'/image/ourWork.png'}
                alt={'ourWork'}
              />
            </div>
          </MotionEffect>

          <MotionEffect effect='fade-up' duration='2000'>
            <div className='transition-transform duration-300 hover:scale-105'>
              <Image
                width='300'
                height='200'
                className='w-full object-cover h-[300px]'
                src={'/image/professionalChoice.png'}
                alt={'professionalChoice'}
              />
            </div>
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
};

export default WhyUs;
