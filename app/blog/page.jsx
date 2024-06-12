import MotionEffect from '@/components/motion/MotionEffect';
import PageHeroSection from '@/components/shared/PageHeroSection';
import SectionLayout from '@/components/shared/SectionLayout';
import GetAllPostData from '@/lib/GetAllPostData';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import BlogSideBar from '@/components/blog/BlogSideBar';
import Head from 'next/head';
import SecondaryButton from '@/components/shared/SecondaryButton';

const page = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <>
      <Head>
        <title>Blogs - Apex Advisor Group Inc</title>
        <meta
          name='description'
          content='Read the blog posts by Apex Advisor Group Inc - Tampa Accounting Firm. Our Tax Accountants offer Tax Preparation Services to clients across Tampa, Brandon &amp; Riverview.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className=''>
        <SectionLayout bg='bg-slate-50 '>
          <div className=''>
            <MotionEffect effect='fade-up' duration='2000'>
              <div className='flex items-center justify-center'>
                <div className=''>
                  <h2
                    className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
                  >
                    Blogs
                  </h2>

                  <hr className='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
                  <p className='mb-4 text-lg text-stone-950 text-center mt-8'>
                    Robert has over 20 years of valuable experience in the legal
                    community and insurance industry. 
                    <br /> He is not afraid to fight for justice for you and
                    your family.
                  </p>
                </div>
              </div>
            </MotionEffect>
            <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-0 md:mt-4 items-stretch'>
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <Link href={`/blog/${blogs?.slug}`} key={index}>
                    <MotionEffect effect='fade-up' duration='2000'>
                      <div className='bg-slate-50 border rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105'>
                        <div className='text-small block text-left mt-4 mb-4'>
                          <h2 className='text-default-500 text-lg font-bold line-clamp-1 mb-2'>
                            {blogs?.title}
                          </h2>
                        </div>
                        <div className=' p-0'>
                          <Image
                            width='300'
                            height='200'
                            className='w-full object-cover h-[300px]'
                            src={blogs?.featuredImage?.image?.url}
                            alt={blogs?.featuredImage?.altText}
                          />
                        </div>
                        <div className='text-small block text-left mt-4'>
                          <h2 className='text-default-500 text-base line-clamp-5 mb-2'>
                            {blogs?.title}
                          </h2>
                          <SecondaryButton
                            title={'Read More'}
                            href={`/blog/${blogs?.slug}`}
                            style={'bg-[#0E758B] text-white'}
                            radius={'sm'}
                          />
                        </div>
                      </div>
                    </MotionEffect>
                  </Link>
                ))}
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default page;
