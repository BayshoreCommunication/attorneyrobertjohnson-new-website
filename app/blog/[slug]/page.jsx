// import MotionEffect from '@/components/motion/MotionEffect';
// import SectionLayout from '@/components/shared/SectionLayout';
// import GetAllPostData from '@/lib/GetAllPostData';
// import Image from 'next/image';
// import parse from 'html-react-parser';
// import BlogSideBar from '@/components/blog/BlogSideBar';
// import Head from 'next/head';

// const page = async ({ params }) => {
//   const blogPostData = await GetAllPostData();

//   const blogDetails = blogPostData?.data?.filter(
//     (blogs) => blogs.slug === params.slug,
//   );

//   const postDate = (date) => {
//     const formattedDate = new Date(date).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//     return formattedDate;
//   };

//   return (
//     <>
//       <Head>
//         <title>{blogDetails[0]?.title}</title>
//         <meta
//           name='description'
//           content='Read the blog posts by Apex Advisor Group Inc - Tampa Accounting Firm. Our Tax Accountants offer Tax Preparation Services to clients across Tampa, Brandon &amp; Riverview.'
//         />
//         <meta name='viewport' content='width=device-width, initial-scale=1' />
//         <meta property='og:title' content={blogDetails[0]?.title} />
//         <meta property='og:description' content={blogDetails[0]?.title} />
//         <meta
//           property='og:image'
//           content={blogDetails[0]?.featuredImage?.image?.url}
//         />

//         <meta
//           property='og:url'
//           content={`https://www.attorneyrobertjohnson.com/blog/${blogDetails[0]?.slug}`}
//         />
//         <meta property='og:type' content='article' />
//         <meta property='og:site_name' content='Attorneyrobertjohson' />
//       </Head>

//       <div className='page'>
//         <style>{`
//           .page h1,
//           .page h2,
//           .page p,
//           .page br,
//           .page nav {
//             padding-top: 10px;
//             padding-bottom: 10px;
//             line-height: normal;
//           }

//           .page h1 {
//             font-size: 40px;
//           }

//           .page h2 {
//             font-size: 25px;
//           }

//           .page p,
//           .page br {
//             padding-top: 6px;
//             padding-bottom: 6px;
//           }

//           .page ul {
//             list-style-type: disc;
//             margin-left: 30px;
//           }
//         `}</style>
//         <SectionLayout>
//           <div className='flex items-start justify-center gap-12'>
//             <div className='w-[90%] md:w-[75%]'>
//               {blogDetails?.map((blogs, index) => (
//                 <div key={index} className='mb-14'>
//                   <div>
//                     <MotionEffect effect='fade-right' duration='2000'>
//                       <Image
//                         width={1800}
//                         height={300}
//                         src={blogs?.featuredImage?.image?.url}
//                         alt={blogs?.featuredImage?.altText}
//                         className='bg-center bg-cover'
//                       />

//                       <p className='text-[1rem] text-black text-left italic mt-4 mb-4'>
//                         {postDate(blogs?.createdAt)}
//                       </p>

//                       <div className='font-normal text-[1rem] text-black mb-8 '>
//                         {parse(blogs?.body)}
//                       </div>
//                     </MotionEffect>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className='hidden lg:block w-[0%] md:w-[25%]'>
//               <BlogSideBar />
//             </div>
//           </div>
//         </SectionLayout>
//       </div>
//     </>
//   );
// };

// export default page;

import MotionEffect from '@/components/motion/MotionEffect';
import SectionLayout from '@/components/shared/SectionLayout';
import GetAllPostData from '@/lib/GetAllPostData';
import Image from 'next/image';
import parse from 'html-react-parser';
import BlogSideBar from '@/components/blog/BlogSideBar';

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug,
  );

  // Ensure the blogDetails exist before attempting to access properties
  if (!blogDetails) {
    return {
      title: 'Blog not found',
      description: 'No blog post available.',
    };
  }

  // Optionally you can access parent metadata if necessary
  return {
    title: blogDetails?.title,
    description: blogDetails?.excerpt || blogDetails?.title,
    openGraph: {
      title: blogDetails?.title,
      description: blogDetails?.excerpt || blogDetails?.title,
      images: [blogDetails?.featuredImage?.image?.url],
      url: `https://www.attorneyrobertjohnson.com/blog/${blogDetails?.slug}`,
      type: 'article',
      site_name: 'Attorney Robert Johnson',
    },
  };
}

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
      <div className='page'>
        <style>{`
          .page h1,
          .page h2,
          .page p,
          .page br,
          .page nav {
            padding-top: 10px;
            padding-bottom: 10px;
            line-height: normal;
          }

          .page h1 {
            font-size: 40px;
          }

          .page h2 {
            font-size: 25px;
          }

          .page p,
          .page br {
            padding-top: 6px;
            padding-bottom: 6px;
          }

          .page ul {
            list-style-type: disc;
            margin-left: 30px;
          }
        `}</style>
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
