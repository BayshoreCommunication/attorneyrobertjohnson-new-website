import React from "react";
import MotionEffect from "@/components/motion/MotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import AreasOfPractice from "@/components/home/AreasOfPractice";
import ContactUs from "@/components/shared/ContactUs";

export const metadata = {
  title: "Areas Served - Attorney Robert Johnson",
  description: "",
};

const AreasServed = () => {
  return (
    <>
      {/* <Head>
        <title>Areas Served - Attorney Robert Johnson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head> */}
      <SectionLayout bg="bg-[#F3F3F3]">
        <div>
          <div className="text-center">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h1 className="mb-2 font-bold text-2xl lg:text-3xl">
                We served this area
              </h1>
            </MotionEffect>

            <MotionEffect
              effect={"fade-left"}
              duration={1500}
              className="text-sm mb-6 lg:mb-12"
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%] mx-auto lg:translate-x-[6%]">
            <MotionEffect effect={"fade-up"} duration={800}>
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Pasco County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Dade City</li>
                  <li>Hudson</li>
                  <li>{`Land O’ Lakes`}</li>
                  <li>Odessa</li>
                  <li>Port Richey</li>
                  <li>New Port Richey </li>
                  <li>Trinity</li>
                  <li>Wesley Chapel</li>
                  <li>Zephyrhills</li>
                </ul>
              </div>
              <div className="mt-7">
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Manatee County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Bradenton</li>
                  <li>Ellenton</li>
                  <li>Palmetto</li>
                  <li>Parrish</li>
                </ul>
              </div>
            </MotionEffect>
            <MotionEffect effect={"fade-up"} duration={1500}>
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Pinellas County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Clearwater</li>
                  <li>Dunedin</li>
                  <li>Largo</li>
                  <li>Oldsmar</li>
                  <li>Palm Harbor</li>
                  <li>Pinellas Park</li>
                  <li>Saint Petersburg</li>
                  <li>Seminole</li>
                  <li>Tarpon Springs</li>
                </ul>
              </div>
              <div className="mt-7">
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Sarasota County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Sarasota</li>
                  <li>Siesta Key</li>
                  <li>Venice</li>
                </ul>
              </div>
            </MotionEffect>

            <MotionEffect effect={"fade-up"} duration={2000}>
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Hillsborough County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Apollo Beach</li>
                  <li>Bloomingdale</li>
                  <li>Brandon</li>
                  <li>Gibsonton</li>
                  <li>Lithia</li>
                  <li>Lutz</li>
                  <li>Plant City</li>
                  <li>Riverview</li>
                  <li>Ruskin</li>
                  <li>Seffner</li>
                  <li>Sun City</li>
                  <li>Tampa</li>
                  <li>Temple Terrace</li>
                  <li>Valrico</li>
                  <li>Ybor City</li>
                </ul>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={"fade-up"}
              duration={2000}
              className={"lg:hidden xl:block"}
            >
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Polk County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Auburndale</li>
                  <li>Bartow</li>
                  <li>Davenport</li>
                  <li>Dundee</li>
                  <li>Fort Meade</li>
                  <li>Frostproof</li>
                  <li>Haines City</li>
                  <li>Kathleen</li>
                  <li>Lake Alfred</li>
                  <li>Lakeland</li>
                  <li>Lake Wales</li>
                  <li>Mulberry</li>
                  <li>Polk City</li>
                  <li>Winter Haven</li>
                </ul>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={"fade-up"}
              duration={2000}
              className={"hidden lg:block xl:hidden"}
            >
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2">
                  Polk County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Auburndale</li>
                  <li>Bartow</li>
                  <li>Davenport</li>
                  <li>Dundee</li>
                  <li>Fort Meade</li>
                  <li>Frostproof</li>
                  <li>Haines City</li>
                </ul>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={"fade-up"}
              duration={2000}
              className={"hidden lg:block xl:hidden"}
            >
              <div>
                <p className="text-lg lg:text-xl font-bold mb-2 opacity-0">
                  Polk County:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Kathleen</li>
                  <li>Lake Alfred</li>
                  <li>Lakeland</li>
                  <li>Lake Wales</li>
                  <li>Mulberry</li>
                  <li>Polk City</li>
                  <li>Winter Haven</li>
                </ul>
              </div>
            </MotionEffect>
          </div>
        </div>
      </SectionLayout>
      <AreasOfPractice />
      <SectionLayout>
        <ContactUs />
      </SectionLayout>
       
    </>
  );
};

export default AreasServed;
