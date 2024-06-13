import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';
import Link from 'next/link';
import CardMotion from '../motion/CardMotion';
import { areasOfPractice } from '@/config/areasOfPracticeData';
import ServiceCard from '../services/ServiceCard';

const AreasOfPractice = () => {
  return (
    <>
      <SectionLayout img="bg-[url('/images/areas-of-practice.jpg')] bg-cover bg-center">
        <div className=''>
          <div className='flex items-center justify-center'>
            <div className=''>
              <MotionEffect effect='fade-up' duration='2000'>
                <h2
                  className={`text-[#4B93FF] font-bold text-2xl md:text-4xl mt-5 mb-2 text-center`}
                >
                  CALL “CAR CRASH ROB” NOW IF YOU HAVE BEEN INJURED!
                </h2>
              </MotionEffect>

              <MotionEffect effect='fade-up' duration='2000'>
                <p className='mb-4 text-lg text-slate-50 text-center mt-5 '>
                  Robert has over 20 years of valuable experience in the legal
                  community and insurance industry.
                  <br /> He is not afraid to fight for justice for you and your
                  family.
                </p>
              </MotionEffect>
            </div>
          </div>
          <SectionLayout>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-center justify-center md:justify-between'>
              {areasOfPractice?.map((el, index) => (
                <Link href={`/services/${el?.slug}`} key={index}>
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
                    <ServiceCard serversData={el} />
                  </CardMotion>
                </Link>
              ))}
            </div>
          </SectionLayout>
        </div>
      </SectionLayout>
    </>
  );
};

export default AreasOfPractice;
