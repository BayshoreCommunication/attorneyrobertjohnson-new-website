import MotionEffect from '@/components/motion/MotionEffect';
import PageHeroSection from '@/components/shared/PageHeroSection';
import SectionLayout from '@/components/shared/SectionLayout';
import GetAllPostData from '@/lib/GetAllPostData';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import BlogSideBar from '@/components/blog/BlogSideBar';
import Head from 'next/head';

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p, br {
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}
`;

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug,
  );

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
        <title>{blogDetails[0]?.title}</title>
        <meta
          name='description'
          content='Read the blog posts by Apex Advisor Group Inc - Tampa Accounting Firm. Our Tax Accountants offer Tax Preparation Services to clients across Tampa, Brandon &amp; Riverview.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className=''>
        <style>{css}</style>
        <SectionLayout>
          <div className='flex items-start justify-center gap-12'>
            <div className='w-[90%] md:w-[75%]'>
              {blogDetails?.map((blogs, index) => (
                <div key={index} className='mb-14'>
                  <div>
                    <MotionEffect effect='fade-right' duration='2000'>
                      <Image
                        width={1800}
                        height={300}
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        className='bg-center bg-cover'
                      />

                      <p className='text-[1rem] text-black text-left italic mt-4 mb-4'>
                        {postDate(blogs?.createdAt)}
                      </p>

                      <div className='font-normal text-[1rem] text-black mb-8 '>
                        {parse(blogs?.body)}
                      </div>
                    </MotionEffect>
                  </div>
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
