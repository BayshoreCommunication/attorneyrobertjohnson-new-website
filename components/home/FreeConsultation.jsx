import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { BiSolidPhoneCall } from 'react-icons/bi';
import MotionEffect from '../motion/MotionEffect';
import Link from 'next/link';

const FreeConsultation = () => {
  return (
    <>
      <SectionLayout img="bg-[url('/images/FreeConsultation-banner.jpg')] bg-cover bg-center">
        <div className=''>
          <div className='flex items-center justify-center'>
            <div className=''>
              <MotionEffect effect='fade-up' duration='2000'>
                <h2
                  className={`text-stone-900 font-bold text-2xl md:text-3xl mt-5 mb-2 text-center`}
                >
                  CALL “CAR CRASH ROB” NOW IF YOU HAVE BEEN INJURED!
                </h2>
                <h2
                  className={`text-stone-900 font-bold text-xl md:text-3xl mt-5 mb-4 text-center md:flex items-center justify-center`}
                >
                  Free Consultation:{' '}
                  <Link
                    href={'tel:(813) 540-3225'}
                    className='text-black font-medium text-base md:text-2xl flex gap-3 items-center justify-center mt-3 md:mt-0'
                  >
                    <BiSolidPhoneCall className='w-8 h-8 text-[#FF3838] md:ml-2' />
                    <span className='text-slate-900 text-lg md:text-2xl  '>
                      (813) 540-3225
                    </span>
                  </Link>
                </h2>
              </MotionEffect>

              <MotionEffect effect='fade-up' duration='2000'>
                <p className='mb-4 text-xl md:text-2xl text-red-600 text-center max-w-[780px] mt-0 '>
                  There is NO COST to YOU unless we win!
                </p>
              </MotionEffect>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default FreeConsultation;
