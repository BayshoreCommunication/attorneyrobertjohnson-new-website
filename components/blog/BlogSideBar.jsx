import React from 'react';
import GetAllPostData from '@/lib/GetAllPostData';
import SecondaryButton from '../shared/SecondaryButton';
import Link from 'next/link';
import { serviceData } from '@/config/servicesData';

const BlogSideBar = async () => {
  const blogPostData = await GetAllPostData();
  return (
    <div>
      <div className='bg-[#EEF6F8] p-6'>
        <div className="bg-[url('/image/contact-banner.jpg')] bg-cover bg-center w-[100%] h-[500px] flex items-center justify-center">
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
        <div className='mt-16'>
          <h2
            className={`text-stone-900 font-bold text-2xl mt-5 mb-4 text-left`}
          >
            Our Services
          </h2>
          <div className='flex flex-col gap-y-2'>
            {serviceData
              ?.filter((data, index) => index <= 6)
              ?.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service?.slug}`}
                  className='bg-slate-200 text-slate-900 p-4 hover:bg-[#0B7788] hover:text-white rounded-md'
                >
                  {service?.navTitle}
                </Link>
              ))}
          </div>
        </div>
        <div className='mt-16'>
          <h2
            className={`text-stone-900 font-bold text-2xl mt-5 mb-4 text-left`}
          >
            Our Latest Blogs
          </h2>
          <div className='flex flex-col gap-y-2'>
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true)
              ?.map((blogs, index) => (
                <Link
                  key={index}
                  href={`/blog/${blogs?.slug}`}
                  className='bg-slate-200 text-slate-900 p-4 hover:bg-[#0B7788] hover:text-white rounded-md'
                >
                  {blogs.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
