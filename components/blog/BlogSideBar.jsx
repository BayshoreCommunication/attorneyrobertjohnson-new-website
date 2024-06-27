import React from 'react';
import GetAllPostData from '@/lib/GetAllPostData';
import SecondaryButton from '../shared/SecondaryButton';
import Link from 'next/link';
import Image from 'next/image';

const BlogSideBar = async () => {
  const blogPostData = await GetAllPostData();
  return (
    <div>
      <div className='bg-[#EEF6F8] p-6'>
        <div className="bg-[url('/images/calltoaction.jpg')] bg-cover bg-center  flex items-center justify-center w-[100%] h-[500px]">
          <div className=''>
            <div>
              <h2
                className={`text-stone-50 font-bold text-3xl mt-5 mb-4 text-center`}
              >
                Need Consultacy Help?
              </h2>

              <p className='text-lg text-stone-200 text-center max-w-[780px] mt-4 mx-4 mb-4'>
                We are here to give you 24/7 hours services.
              </p>
              <div className='flex items-start justify-center'>
                <SecondaryButton
                  title={'Contact Us'}
                  link={'/contact'}
                  style={'bg-[#0E758B] text-white'}
                  radius={'sm'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <h2
            className={`text-stone-900 font-bold text-2xl mt-5 mb-4 text-left`}
          >
            Related Blogs
          </h2>
          <div className='flex flex-col gap-y-2'>
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true)
              ?.map((blog, index) => (
                <Link
                  key={index}
                  href={`/blog/${blog?.slug}`}
                  className='bg-slate-200 text-slate-900 p-4 hover:bg-[#4B93FF] hover:text-white rounded-md'
                >
                  <div className='flex items-center gap-x-2'>
                    <div className='h-[60px] w-[30%]'>
                      <Image
                        width={120}
                        height={50}
                        className='w-full h-full object-cover'
                        src={blog?.featuredImage?.image?.url}
                        alt={blog?.featuredImage?.altText}
                      />
                    </div>
                    <h3 className='line-clamp-2 w-[70%]'>{blog.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
