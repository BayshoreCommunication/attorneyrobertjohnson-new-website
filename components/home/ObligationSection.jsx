'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const obligations = [
  {
    id: 1,
    defaultImage: '/images/one.png',
    hoverImage: '/images/obligation1.png',
    text: 'FREE NO-OBLIGATION CONSULTATION',
  },
  {
    id: 2,
    defaultImage: '/images/two.png',
    hoverImage: '/images/obligation2.png',
    text: 'SUPERIOR COMMUNICATION',
  },
  {
    id: 3,
    defaultImage: '/images/three.png',
    hoverImage: '/images/obligation3.png',
    text: 'AGGRESSIVE ADVOCACY',
  },
  {
    id: 4,
    defaultImage: '/images/four.png',
    hoverImage: '/images/obligation4.png',
    text: 'NO UPFRONT FEE OR COSTS',
  },
  {
    id: 5,
    defaultImage: '/images/five.png',
    hoverImage: '/images/obligation5.png',
    text: `IF DON'T WIN, NO ATTORNEY’S FEES`,
  },
];

const ObligationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          <h2 className='text-stone-950 font-bold text-2xl md:text-5xl mt-0 mb-5 text-center'>
            MY OBLIGATION TO YOU
          </h2>
          <p className='text-base text-stone-950 text-center'>
            Robert has over 20 years of valuable experience in the legal
            community and insurance industry. <br />
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
            {obligations.map((item, index) => (
              <div key={item.id}>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-6 rounded-xl w-[120px] mx-auto hover:bg-[#4B93FF] border-2 border-slate-500 hover:border-[#4B93FF] flex items-center justify-center'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    width={item.id === 5 ? 50 : 80}
                    height={50}
                    src={
                      hoveredIndex === index
                        ? item.hoverImage
                        : item.defaultImage
                    }
                    alt='Obligation img'
                  />
                </motion.div>
                <h2 className='text-stone-950 font-bold text-md md:text-xl mt-5 mb-0 text-center'>
                  {item.text}
                </h2>
              </div>
            ))}
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default ObligationSection;
