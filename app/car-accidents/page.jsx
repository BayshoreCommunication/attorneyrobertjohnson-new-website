import MotionEffect from "@/components/motion/MotionEffect";
import ContactUs from "@/components/shared/ContactUs";
import SectionLayout from "@/components/shared/SectionLayout";
import Image from "next/image";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

const CarAccidentsPage = () => {
  const data = [
    {
      imgLink: "/images/carAccident1.png",
      title: "Our case results tell the story of a winning law firm",
      text: [
        "Our founder, attorney Ben Swanson, has faced health challenges himself. Because of this, he relates to those who have suffered an illness or injury, and the pain and suffering they experience. He has taken his own health challenges and transformed them into a superpower to help his clients achieve justice. He and his talented team of trial lawyers are unrelenting, and won’t compromise with the health and future of a client.",
      ],
      imageInLeft: true,
    },
    {
      imgLink: "/images/carAccident2.png",
      title: "Our case results tell the story of a winning law firm",
      text: [
        "Our founder, attorney Ben Swanson, has faced health challenges himself. Because of this, he relates to those who have suffered an illness or injury, and the pain and suffering they experience. He has taken his own health challenges and transformed them into a superpower to help his clients achieve justice. He and his talented team of trial lawyers are unrelenting, and won’t compromise with the health and future of a client.",
      ],
      imageInLeft: false,
    },
  ];
  return (
    <main className="pb-10">
      <section className="h-[64vh] bg-[url('/images/Group6.png')] bg-cover flex items-center justify-center">
        <SectionLayout>
          <div className="flex flex-col items-center gap-3 text-white">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h1 className="text-3xl sm:text-4xl font-bold text-center">
                CAR ACCIDENT CASES
              </h1>
            </MotionEffect>
            <MotionEffect effect={"fade-left"} duration={1500}>
              <div className="text-center hidden sm:block">
                <p>
                  Robert has over 20 years of valuable experience in the legal
                  community and insurance industry.
                </p>
                <p>
                  He is not afraid to fight for justice for you and your family.
                </p>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={"fade-left"}
              duration={1500}
              className="text-center sm:hidden"
            >
              Robert has over 20 years of valuable experience in the legal
              community and insurance industry. He is not afraid to fight for
              justice for you and your family.
            </MotionEffect>
            <MotionEffect effect={"fade-up"} duration={1500}>
              <button className="flex justify-center items-center gap-1 bg-white px-6 py-2 mt-2 rounded-md text-[#4b93ff] font-bold mx-auto text-lg">
                <BiSolidPhoneCall size={24} />
                (813) 540-3225
              </button>
            </MotionEffect>
          </div>
        </SectionLayout>
      </section>
      <SectionLayout>
        <div className="py-4">
          <div className="text-center">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h3 className="mb-2 font-bold text-2xl lg:text-3xl">
                All Types of Car Accidents
              </h3>
            </MotionEffect>

            <MotionEffect
              className="text-sm mb-6 lg:mb-12"
              effect={"fade-left"}
              duration={1500}
            >
              <p>
                Robert has over 20 years of valuable experience in the legal
                community and insurance industry.
              </p>
              <p>
                He is not afraid to fight for justice for you and your family.
              </p>
            </MotionEffect>
          </div>
          <div className="flex flex-col gap-12">
            {data.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col ${item.imageInLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 md:gap-16 lg:items-center`}
              >
                <MotionEffect
                  effect={item.imageInLeft ? "fade-right" : "fade-left"}
                  duration={1500}
                  className="lg:w-1/2"
                >
                  <Image
                    src={item.imgLink}
                    alt="personal injuries"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </MotionEffect>
                <MotionEffect
                  effect={!item.imageInLeft ? "fade-right" : "fade-left"}
                  duration={1500}
                  className="lg:w-1/2 flex flex-col gap-4"
                >
                  <div>
                    <h6 className="text-xl lg:text-2xl font-bold mb-1">
                      {item.title}
                    </h6>
                    <div className="w-28 h-1 bg-[#4b93ff]"></div>
                  </div>
                  {item.text.map((text, index) => (
                    <p key={index} className="text-sm sm:text-base">
                      {text}
                    </p>
                  ))}
                </MotionEffect>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <ContactUs />
      </SectionLayout>
    </main>
  );
};

export default CarAccidentsPage;
