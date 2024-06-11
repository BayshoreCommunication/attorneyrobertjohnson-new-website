import MotionEffect from '@/components/motion/MotionEffect';
import PageHeroSection from '@/components/shared/PageHeroSection';
import SectionLayout from '@/components/shared/SectionLayout';
import GetAllPostData from '@/lib/GetAllPostData';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import BlogSideBar from '@/components/blog/BlogSideBar';
import Head from 'next/head';

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
      <div className='mt-10 md:mt-[130px]'>
        <PageHeroSection
          heading={'Blogs'}
          subheading={'By Apex Advisor Group Inc'}
          image={'/image/blog-image.jpg'}
          alt={'About Us Image'}
          width={1000}
          height={657}
        />
        <SectionLayout>
          <div className='flex items-start justify-center gap-12 relative'>
            <div className='w-[92%] md:w-[75%] '>
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <div key={index} className='mb-14'>
                    <Link href={`/blog/${blogs?.slug}`}>
                      <div>
                        <MotionEffect effect='fade-right' duration='2000'>
                          <Image
                            width={1800}
                            height={300}
                            src={blogs?.featuredImage?.image?.url}
                            alt={blogs?.featuredImage?.altText}
                            className='bg-center bg-cover'
                          />

                          <p className='text-[1rem] text-black text-left italic mt-2'>
                            {postDate(blogs?.createdAt)}
                          </p>
                          <h2 className='text-2xl tracking-normal font-bold text-[#1B2639] text-left mb-4 mt-3 '>
                            {blogs?.title}
                          </h2>
                          <div className='font-normal text-[1rem] text-black mb-8 line-clamp-6'>
                            {parse(blogs?.body)}
                          </div>
                          <div className='flex justify-center md:justify-start'>
                            <button
                              type='button'
                              class='text-white bg-[#0B7788] hover:bg-[#096573] font-medium  text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md'
                            >
                              Read More
                            </button>
                          </div>
                        </MotionEffect>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>

            <div className='hidden lg:block w-[0%] md:w-[25%]'>
              <BlogSideBar />
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default page;
