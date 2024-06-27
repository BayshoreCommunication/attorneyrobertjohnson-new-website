import ServicesArea from '@/components/servicesArea/ServicesArea';
import Consultation from '@/components/shared/Consultation';
import PageHeroSection from '@/components/shared/PageHeroSection';
import React from 'react';
import ServiceArea from '../../public/image/services-area.jpg';
import Head from 'next/head';
import MotionEffect from '@/components/motion/MotionEffect';

const page = () => {
  return (
    <>
      <Head>
        <title>Service Area - Apex Advisor</title>
        <meta
          name='description'
          content='Apex Advisor Group Inc provides financial and tax services to clients in many areas. Our experienced team tailors high-quality services to meet your unique needs. Contact us to achieve your financial goals.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={'Services Area'}
          subheading={'By Apex Advisor Group Inc'}
          image={ServiceArea}
          width={1000}
          height={657}
        />
        <MotionEffect effect='fade-up' duration='2000'>
          <ServicesArea />
        </MotionEffect>

        <Consultation />
      </div>
    </>
  );
};

export default page;
