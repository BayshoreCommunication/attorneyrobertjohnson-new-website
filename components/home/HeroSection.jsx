'use client';
import Link from 'next/link';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiSolidPhoneCall } from 'react-icons/bi';

const HeroSection = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  const text = '40+ YEARS OF COMBINED EXPERIENCE'.split(' ');

  return (
    <div className='relative'>
      <div className='relative h-[500px] md:h-[750px]'>
        <Image
          src='/images/homebanner.jpg'
          alt='Home Banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10'
          rel='preload'
        />

        <motion.div
          className='absolute inset-0 z-20 flex items-center justify-center'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <SectionLayout>
            <div className='flex flex-col items-center md:items-start'>
              <motion.h1
                variants={itemVariants}
                className='text-[30px] md:text-[50px] font-[700] text-white text-center md:text-left leading-tight tracking-normal bg-[#4B93FF] p-6  rounded-md md:rounded-xl max-w-[800px]'
              >
                Rob Johnson-Attorney At Law
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className='text-white text-xl md:text-3xl max-w-[550px] font-semibold text-center md:text-left mt-8'
              >
                Speak directly to me, an attorney, for a free consultation!
              </motion.p>
              <motion.div
                className='mt-8 flex justify-center md:justify-start'
                variants={itemVariants}
              >
                <Link
                  href={'tel:(813) 540-3225'}
                  id='view-all-btn'
                  className='text-black bg-none bg-white font-medium text-base md:text-2xl !px-4 !md:px-12 !py-4 border border-white flex gap-3 items-center rounded-lg'
                >
                  <BiSolidPhoneCall className='w-8 h-8 text-[#4B93FF]' />
                  <span className='text-[#4B93FF] text-2xl'>
                    (813) 540-3225
                  </span>
                </Link>
              </motion.div>
            </div>
          </SectionLayout>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
