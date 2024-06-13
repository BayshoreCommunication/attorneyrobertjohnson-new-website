'use client';
import Image from 'next/image';
import React, { useState } from 'react';
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

const ObligationSection = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

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
                className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500'
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <Image
                  width={80}
                  height={50}
                  src={
                    isHovered1 ? '/images/obligation1.png' : '/images/one.png'
                  }
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
                className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500'
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <Image
                  width={80}
                  height={50}
                  src={
                    isHovered2 ? '/images/obligation2.png' : '/images/two.png'
                  }
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
                className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500'
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <Image
                  width={80}
                  height={50}
                  src={
                    isHovered3 ? '/images/obligation3.png' : '/images/three.png'
                  }
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
                className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500'
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              >
                <Image
                  width={80}
                  height={50}
                  src={
                    isHovered4 ? '/images/obligation4.png' : '/images/four.png'
                  }
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
                className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500'
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
              >
                <div className='w-[50px] ml-2'>
                  <Image
                    width={60}
                    height={50}
                    src={
                      isHovered5
                        ? '/images/obligation5.png'
                        : '/images/five.png'
                    }
                    alt='about img'
                  />
                </div>
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
