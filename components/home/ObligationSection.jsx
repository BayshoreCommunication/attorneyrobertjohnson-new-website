'use client';
import Image from 'next/image';
import React from 'react';
import { Mulish, Bitter } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const bitter = Bitter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });

const ObligationSection = () => {
  return (
    <SectionLayout>
      <div className='py-6'>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h2
            className={`text-stone-950 font-bold text-2xl md:text-5xl mt-0 mb-5 text-center`}
          >
            MY OBLIGATION TO YOU
          </h2>

          <p className='text-base text-stone-950 text-center'>
            Robert has over 20 years of valuable experience in the legal
            community and insurance industry. 
            <br />
            He is not afraid to fight for justice for you and your family.
          </p>
        </CardMotion>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className='grid grid-cols-2 md:grid-cols-5 gap-8 items-stretch mt-16'>
            <div className=''>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF]'
              >
                <Image
                  width={100}
                  height={50}
                  src={'/images/one.png'}
                  alt='about img'
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center`}
              >
                FREE NO-OBLIGATION <br />
                CONSULTATION
              </h2>
            </div>
            <div>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF]'
              >
                <Image
                  width={100}
                  height={50}
                  src={'/images/two.png'}
                  alt='about img'
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center`}
              >
                SUPERIOR <br />
                CONSULTATION
              </h2>
            </div>
            <div className=''>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF]'
              >
                <Image
                  width={100}
                  height={50}
                  src={'/images/three.png'}
                  alt='about img'
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center`}
              >
                AGGRESSIVE
                <br />
                ADVOCACY
              </h2>
            </div>
            <div className=''>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF]'
              >
                <Image
                  width={100}
                  height={50}
                  src={'/images/four.png'}
                  alt='about img'
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center `}
              >
                NO UPFRONT <br />
                FEE OR COSTS
              </h2>
            </div>
            <div className=''>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 p-6 rounded-xl w-[100px] mx-auto hover:bg-[#4B93FF] '
              >
                <Image
                  width={70}
                  height={50}
                  src={'/images/five.png'}
                  alt='about img'
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center`}
              >
                {`  IF DON’T WIN,`} <br />
                {` NO ATTORNEY’S FEES`}
              </h2>
            </div>
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default ObligationSection;
