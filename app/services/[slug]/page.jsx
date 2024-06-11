import PageHeroSection from '@/components/shared/PageHeroSection';
import { serviceData } from '@/config/servicesData';
import Image from 'next/image';
import Consultation from '@/components/shared/Consultation';
import SectionLayoutBlog from '@/components/shared/SectionLayoutBlog';
import Head from 'next/head';
import MotionEffect from '@/components/motion/MotionEffect';

const page = async ({ params }) => {
  const serviceDatas = serviceData?.filter(
    (service) => service.slug === params.slug,
  );

  return (
    <>
      <Head>
        <title>{serviceDatas[0]?.title}</title>
        <meta
          name='description'
          content={`${serviceDatas[0]?.topBarDescription}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={serviceDatas[0]?.title}
          subheading={serviceDatas[0]?.topBarDescription}
          image={`/image/${serviceDatas[0]?.topBarImage}`}
          alt={'About Us Image'}
          width={1000}
          height={657}
        />

        <div className=''>
          {serviceDatas?.map((el, index) => (
            <div className='' key={index}>
              <SectionLayoutBlog>
                <MotionEffect effect='fade-up' duration='2000'>
                  <div className='flex flex-col-reverse md:flex-row gap-x-12 items-center mb-0 md:mb-4 mt-12'>
                    <div className='w-full md:w-2/3'>
                      <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                        {el?.mainHeading}
                      </h3>
                      <p className='font-normal text-[1rem] text-black mb-8'>
                        {el?.mainDescription}
                      </p>
                    </div>

                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                      <div className='w-full'>
                        <Image
                          width={600}
                          height={300}
                          src={`/image/${el?.mainImage}`}
                          alt={'blog-image'}
                          className='object-cover w-full h-full'
                        />
                      </div>
                    </div>
                  </div>
                </MotionEffect>
              </SectionLayoutBlog>

              {el?.detailSections?.map((subEl, index) => (
                <div key={index}>
                  <SectionLayoutBlog>
                    <MotionEffect effect='fade-up' duration='2000'>
                      <div className='flex flex-col-reverse md:flex-row gap-x-12 items-center mb-4 md:mt-12 mt-2'>
                        <div className='w-full md:w-1/3'>
                          <div className='w-full'>
                            <Image
                              width={600}
                              height={300}
                              src={`/image/${subEl?.image}`}
                              alt={'blog-image'}
                              className='object-cover w-full h-full'
                            />
                          </div>
                        </div>
                        <div className='w-full md:w-2/3'>
                          <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                            {subEl?.heading}
                          </h3>
                          <p className='font-normal text-[1rem] text-black mb-8'>
                            {subEl?.paragraph}
                          </p>
                        </div>
                      </div>
                    </MotionEffect>

                    {/* <hr class='w-full border-t border-gray-500' /> */}
                    {/* <div className='flex flex-col md:flex-row gap-x-0 md:gap-x-12 items-center mb-2 p-6 '>
                      <div className='w-35%'>
                        <div className='w-full'>
                          <Image
                            width={1800}
                            height={300}
                            src={`/image/${subEl?.image}`}
                            alt={'blog-image'}
                            className='bg-center bg-cover'
                          />
                        </div>
                      </div>
                      <div className='w-65%'>
                        <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                          {subEl?.heading}
                        </h3>

                        <p className='font-normal text-[1rem] text-black mb-8 mt-4'>
                          {subEl?.paragraph}
                        </p>
                      </div>
                    </div> */}

                    <div className='mt-10 mb-6 md:mb-0'>
                      <MotionEffect effect='fade-up' duration='2000'>
                        <div className='flex flex-col md:flex-row items-stretch gap-10'>
                          {subEl?.cards?.map((subCard, index) => (
                            <div
                              className='bg-[#EEF6F8] p-6 flex-1 flex flex-col'
                              key={index}
                            >
                              <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                                {subCard?.heading}
                              </h3>
                              <p className='font-normal text-[1rem] text-black mb-0'>
                                {subCard?.paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </MotionEffect>
                    </div>
                  </SectionLayoutBlog>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='mt-8'>
          <Consultation />
        </div>
      </div>
    </>
  );
};

export default page;
