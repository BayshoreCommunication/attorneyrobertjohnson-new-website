import MotionEffect from "@/components/motion/MotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import GetAllPostData from "@/lib/GetAllPostData";
import Image from "next/image";
import parse from "html-react-parser";
import BlogSideBar from "@/components/blog/BlogSideBar";
import FloridaStatuteReposeVsLimitationsInjuryCases from "@/components/static-blogs/blogs/florida-statute-repose-vs-limitations-injury-cases";
import HowDashcamFootageCanStrengthen from "@/components/static-blogs/blogs/how-dashcam-footage-can-strengthen";
import StructuredSettlementsVsLumpSumPayments from "@/components/static-blogs/blogs/structured-settlements-vs-lump-sum-payments";
import WhatArePunitiveDamagesInFlorida from "@/components/static-blogs/blogs/what-are-punitive-damages-in-florida";
import WhatHappensIfMultiplePartiesAreAtFaultInAFloridaAccident from "@/components/static-blogs/blogs/what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident";
import HowWeatherConditionsCanImpact from "@/components/static-blogs/blogs/How Weather Conditions Can Impact";
import CanYouFilePersonalInjuryClaimWithoutAPoliceReportInFlorida from "@/components/static-blogs/blogs/can-you-file-personal-injury-claim-without-a-police-report-in-florida";
import HowInsurancePolicyLimitsAffectYourInjuryCompensation from "@/components/static-blogs/blogs/how-insurance-policy-limits-affect-your-injury-compensation";
import { staticBlogPosts } from "@/components/static-blogs/staticBlogData";

const staticBlogComponents = {
  "florida-statute-repose-vs-limitations-injury-cases":
    FloridaStatuteReposeVsLimitationsInjuryCases,
  "how-dashcam-footage-can-strengthen": HowDashcamFootageCanStrengthen,
  "structured-settlements-vs-lump-sum-payments":
    StructuredSettlementsVsLumpSumPayments,
  "what-are-punitive-damages-in-florida": WhatArePunitiveDamagesInFlorida,
  "what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident":
    WhatHappensIfMultiplePartiesAreAtFaultInAFloridaAccident,
  "weather-impact-florida-car-accident-liability": HowWeatherConditionsCanImpact,
  "can-you-file-personal-injury-claim-without-a-police-report-in-florida": CanYouFilePersonalInjuryClaimWithoutAPoliceReportInFlorida,
  "how-insurance-policy-limits-affect-your-injury-compensation": HowInsurancePolicyLimitsAffectYourInjuryCompensation,
};

export async function generateMetadata({ params }) {
  const staticBlogDetails = staticBlogPosts.find(
    (blogs) => blogs.slug === params.slug
  );

  if (staticBlogDetails) {
    const canonicalPath = `/blog/${staticBlogDetails.slug}`;
    const canonicalUrl = `https://www.attorneyrobertjohnson.com${canonicalPath}`;

    return {
      title: staticBlogDetails.metaTitle || staticBlogDetails.title,
      description: staticBlogDetails.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: staticBlogDetails.metaTitle || staticBlogDetails.title,
        description: staticBlogDetails.description,
        images: [
          {
            url: staticBlogDetails.featuredImage.image.url,
            alt: staticBlogDetails.featuredImage.altText,
          },
        ],
        url: canonicalUrl,
        type: "article",
        site_name: "Attorney Robert Johnson",
      },
    };
  }

  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  let description = blogDetails?.body
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/i, "&")
    .slice(0, 150);

  return {
    title: blogDetails?.title,
    description: description,
    alternates: {
      canonical: `/blog/${blogDetails?.slug}`,
    },
    openGraph: {
      title: blogDetails?.title,
      description: `${description}...`,
      images: [blogDetails?.featuredImage?.image?.url],
      url: `https://www.attorneyrobertjohnson.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "Attorney Robert Johnson",
    },
  };
}

const page = async ({ params }) => {
  const staticBlogDetails = staticBlogPosts.find(
    (blogs) => blogs.slug === params.slug
  );

  if (staticBlogDetails) {
    const StaticBlogComponent =
      staticBlogComponents[staticBlogDetails.slug] ||
      FloridaStatuteReposeVsLimitationsInjuryCases;

    return (
      <div className="page">
        <SectionLayout>
          <div className="flex items-start justify-center gap-12">
            <div className="w-[90%] md:w-[75%]">
              <MotionEffect effect="fade-right" duration="2000">
                <StaticBlogComponent />
              </MotionEffect>
            </div>
            <div className="hidden lg:block w-[0%] md:w-[25%]">
              <BlogSideBar />
            </div>
          </div>
        </SectionLayout>
      </div>
    );
  }

  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug
  );

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <div className="page">
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
          <div className="flex items-start justify-center gap-12">
            <div className="w-[90%] md:w-[75%]">
              {blogDetails?.map((blogs, index) => (
                <div key={index} className="mb-14">
                  <div>
                    <MotionEffect effect="fade-right" duration="2000">
                      <Image
                        width={1800}
                        height={300}
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        className="bg-center bg-cover"
                      />

                      <p className="text-[1rem] text-black text-left italic mt-4 mb-4">
                        {postDate(blogs?.createdAt)}
                      </p>

                      <h1 className="text-[1.4rem] text-black text-left mt-4 mb-4 font-semibold">
                        {blogs?.title}
                      </h1>

                      <div className="font-normal text-[1rem] text-black mb-8 ">
                        {parse(blogs?.body)}
                      </div>
                    </MotionEffect>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block w-[0%] md:w-[25%]">
              <BlogSideBar />
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default page;
