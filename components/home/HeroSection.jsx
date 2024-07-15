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

  const text = 'ROBERT J. JOHNSON, ESQ.'.split(' ');

  return (
    <div className='relative overflow-hidden'>
      <div className='relative h-[500px] md:h-[750px]'>
        <Image
          src='/images/homebanner.jpg'
          alt='home-banner-bg'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10'
          rel='preload'
        />

        <Image
          src='/images/Robert-Johnson-Law.png'
          alt='robert-johnson-law'
          priority
          className='z-20 absolute bottom-0 right-0 md:right-[9%] top-[8%] '
          rel='preload'
          height={700}
          width={500}
        />

        <motion.div
          className='absolute inset-0 z-20 flex items-center justify-center mt-64 md:mt-0'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <SectionLayout>
            <div className='flex flex-col items-center md:items-start'>
              <motion.h1
                variants={itemVariants}
                className='text-[25px] md:text-[55px] font-[900] text-white text-center md:text-left leading-tight tracking-normal bg-[#4b93ffe9] p-4  rounded-md md:rounded-xl max-w-[800px]'
              >
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{' '}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className='text-white text-md md:text-3xl max-w-[550px] font-semibold text-center md:text-left mt-2 md:mt-8'
              >
                Speak Directly To Me, An Attorney, For A Free Consultation!
              </motion.p>
              <motion.div
                className='mt-4 md:mt-8 flex justify-center md:justify-start'
                variants={itemVariants}
              >
                <Link href={'tel:(813) 540-3225'} className='group'>
                  <div className='text-black bg-white font-medium text-md md:text-2xl !p-2 !md:p-4 border border-white flex gap-3 items-center !rounded-lg group-hover:text-green-700'>
                    <BiSolidPhoneCall className='w-4 h-4 md:w-8 md:h-8 text-[#4B93FF] group-hover:text-green-700' />
                    <p className='text-[#4B93FF] group-hover:text-green-700 text-md md:text-2xl'>
                      (813) 540-3225
                    </p>
                  </div>
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
