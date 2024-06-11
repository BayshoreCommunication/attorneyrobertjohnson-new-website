import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';
import Image from 'next/image';
import SecondaryButton from '../shared/SecondaryButton';

const Services = () => {
  return (
    <SectionLayout>
      <div className='overflow-hidden'>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div className='lg:max-w-[23%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/tax-prepration.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              ></Image>
            </div>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>
                Tax Preparation Services
              </h1>
              <p className='text-base mb-4'>
                Tax preparation done right. Guaranteed. Millions of taxpayers
                miss out on getting a larger refund each year because they
                didn’t take advantage of all the credits and deductions that are
                available to them.
              </p>
              <p className='text-base mb-4'>
                With Apex Advisor we guarantee assurance that your return is
                verified for accuracy, has zero errors and will result in fewer
                chances of getting contacted by the IRS. We will also help you
                manage the taxes that you pay throughout the year so you can
                maximize your cash flow potential.
              </p>
              <SecondaryButton
                title={'Read More'}
                link={'/contact'}
                style={'bg-[#0E758B] text-white'}
                radius={'sm'}
              />
            </div>
          </div>
        </MotionEffect>
        <MotionEffect effect={'fade-up'} duration={'2000'}>
          <div className='flex-col-reverse flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
            <div>
              <h1 className='text-[42px] font-bold mb-4'>
                Accounting Services
              </h1>
              <p className='text-base mb-4'>
                Apex Advisor Group is an experienced accounting team that looks
                forward to the opportunity to help you manage your business
                financials. We will work with you to establish short- and
                long-term strategies for growth and profitability.
              </p>

              <SecondaryButton
                title={'Read More'}
                link={'/contact'}
                style={'bg-[#0E758B] text-white'}
                radius={'sm'}
              />
            </div>
            <div className='lg:max-w-[23%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
              <Image
                src={'/image/accounting-services.jpg'}
                alt='carlos rosario'
                width={270}
                height={270}
                className='w-full'
              />
            </div>
          </div>
        </MotionEffect>
      </div>
    </SectionLayout>
  );
};

export default Services;
