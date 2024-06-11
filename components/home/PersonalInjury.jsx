import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';
import Image from 'next/image';

function PersonalInjury() {
  return (
    // <SectionLayout>
    //   <div>
    //     <div className='flex flex-col-reverse md:flex-row items-center justify-between md:justify-start gap-16'>
    //       {/* <MotionEffect effect='fade-right' duration='2000'> */}
    //       <div className=''>
    //         <h2 className='text-stone-900 font-bold text-3xl mt-5 mb-4 text-center md:text-left'>
    //           FLORIDA PERSONAL INJURY AND ACCIDENT ATTORNEYS
    //         </h2>

    //         <h4 className='text-stone-900 font-bold text-xl mt-5 mb-2 text-center md:text-left'>
    //           Robert J. Johnson, Esq. is the son of an Army Veteran that spent
    //           the majority of his years right here in the central Florida area.
    //         </h4>

    //         <p className='mb-2 text-lg text-stone-900 text-center md:text-left mt-6'>
    //           {`The State of Florida, more specifically the Tampa area is home to Robert – it is where he attended college, earning two bachelor’s degrees and then ultimately his law degree (Cum Laude). Florida is ultimately where he chose to pursue his legal career and fight for the rights of those injured due to the negligence of others. He has travelled all over this great state, from the Panhandle to South Florida to all the small towns and cities in between, to fight and obtain just compensation for his clients.`}
    //         </p>
    //         <p className='mb-2 text-lg text-stone-900 text-center md:text-left mt-6'>
    //           {`Robert handles all types of cases and helps victims who have been injured in Auto Accidents, Trucking Accidents, Motorcycle Accidents, Pedestrian Accidents, Uber Accidents, Lyft Accidents, DUI Accidents, Moped Accidents, Scooter Accidents, Slip and Fall Accidents, Boating Accidents, and more.`}
    //         </p>
    //         <p className='mb-2 text-lg text-stone-900 text-center md:text-left mt-6'>
    //           {`Robert is passionate about truly connecting with his clients and helping make a difference in their lives. He has a natural ability to make clients feel at ease, and to not be intimidated by the process of speaking to an attorney or pursuing a legal case.`}
    //         </p>
    //         <p className='mb-2 text-lg text-stone-900 text-center md:text-left mt-6'>
    //           {`Robert has over 20 years of valuable experience in the legal community and insurance industry. He is not afraid to fight for justice for you and your family.`}
    //         </p>
    //       </div>
    //       {/* </MotionEffect> */}

    //       {/* <MotionEffect effect='fade-left' duration='2000'> */}
    //       <div className='w-[50%]'>
    //         <Image
    //           src='/images/personal-injury.png'
    //           alt='personal-accident'
    //           className='w-full h-auto'
    //           height={1220}
    //           width={500}
    //         />
    //       </div>
    //       {/* </MotionEffect> */}
    //     </div>
    //   </div>
    // </SectionLayout>
    <SectionLayout bg='bg-white'>
      <div className='space-y-20'>
        <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-12 items-center'>
          <div className='flex-1'>
            <MotionEffect effect='fade-right' duration='2000'>
              <h2
                className={`text-[#4B93FF] font-bold text-xl md:text-4xl mb-4 text-center md:text-left `}
              >
                FLORIDA PERSONAL INJURY AND ACCIDENT ATTORNEYS
              </h2>
            </MotionEffect>

            <MotionEffect effect='fade-right' duration='2000'>
              <p className='mb-4 text-md md:text-2xl  text-stone-950 text-center md:text-left font-semibold'>
                Robert J. Johnson, Esq. is the son of an Army Veteran that spent
                the majority of his years right here in the central Florida
                area.
              </p>
            </MotionEffect>

            <MotionEffect effect='fade-right' duration='2000'>
              <p className='mb-2 text-md md:text-lg text-stone-950 text-center md:text-left'>
                The State of Florida, more specifically the Tampa area is home
                to Robert – it is where he attended college, earning two
                bachelor’s degrees and then ultimately his law degree (Cum
                Laude).  Florida is ultimately where he chose to pursue his
                legal career and fight for the rights of those injured due to
                the negligence of others.  He has travelled all over this great
                state, from the Panhandle to South Florida to all the small
                towns and cities in between, to fight and obtain just
                compensation for his clients.
              </p>

              <p className='mb-2 text-md md:text-lg text-stone-950 text-center md:text-left'>
                Robert handles all types of cases and helps victims who have
                been injured in Auto Accidents, Trucking Accidents, Motorcycle
                Accidents, Pedestrian Accidents, Uber Accidents, Lyft Accidents,
                DUI Accidents, Moped Accidents, Scooter Accidents, Slip and Fall
                Accidents, Boating Accidents, and more.
              </p>

              <p className='mb-2 text-md md:text-lg text-stone-950 text-center md:text-left'>
                Robert is passionate about truly connecting with his clients and
                helping make a difference in their lives.  He has a natural
                ability to make clients feel at ease, and to not be intimidated
                by the process of speaking to an attorney or pursuing a legal
                case.
              </p>

              <p className='mb-2 text-md md:text-lg text-stone-950 text-center md:text-left'>
                Robert has over 20 years of valuable experience in the legal
                community and insurance industry.  He is not afraid to fight for
                justice for you and your family.
              </p>
            </MotionEffect>
          </div>

          <div className='flex-1'>
            <div className='flex justify-center items-center'>
              <MotionEffect effect='fade-left' duration='2000'>
                <Image
                  width={1200}
                  height={500}
                  src='/images/personal-injury.png'
                  alt='about img'
                />
              </MotionEffect>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default PersonalInjury;
