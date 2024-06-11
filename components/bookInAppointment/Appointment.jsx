import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import MotionEffect from '../motion/MotionEffect';
import SecondaryButton from '../shared/SecondaryButton';

const Appointment = () => {
  return (
    <SectionLayout>
      <div className='overflow-hidden'>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div className='lg:max-w-[20%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/carlos-rosario.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>Carlos Rosario</h1>
              <SecondaryButton
                title={'SCHEDULE TIME WITH ME'}
                link={'https://calendly.com/carlosapexadvisor'}
                style={'bg-[#0E758B] text-white mt-3'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div className='lg:max-w-[20%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/jennifer-colon.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>Jennifer Colon</h1>
              <SecondaryButton
                title={'SCHEDULE TIME WITH ME'}
                link={'https://calendly.com/jennyapexpro/tax-preparation'}
                style={'bg-[#0E758B] text-white mt-3'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div className='lg:max-w-[20%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/eddia-rosario.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>Eddia Rosario</h1>
              <SecondaryButton
                title={'SCHEDULE TIME WITH ME'}
                link={'https://calendly.com/eddiaapexadvisor/15min'}
                style={'bg-[#0E758B] text-white mt-3'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div className='lg:max-w-[20%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/stephane-calixte.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>Stephane Calixte</h1>
              <SecondaryButton
                title={'SCHEDULE TIME WITH ME'}
                link={'https://calendly.com/stephaneapexadvisor/15min'}
                style={'bg-[#0E758B] text-white mt-3'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1'>
            <div className='lg:max-w-[20%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/carlos-alberto.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>
                Carlos Alberto Muñoz
              </h1>
              <SecondaryButton
                title={'SCHEDULE TIME WITH ME'}
                link={
                  'https://calendly.com/apex-cmunoz/apex-service-appointment'
                }
                style={'bg-[#0E758B] text-white mt-3'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
      </div>
    </SectionLayout>
  );
};

export default Appointment;
