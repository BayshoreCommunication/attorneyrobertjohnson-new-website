import MotionEffect from "@/components/motion/MotionEffect";
import ContactUs from "@/components/shared/ContactUs";
import SectionLayout from "@/components/shared/SectionLayout";
import React from "react";

const AreasServed = () => {
  return (
    <main>
      <SectionLayout bg="bg-[#F3F3F3]">
        <div>
          <div className="text-center">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h3 className="mb-2 font-bold text-3xl">
                We are served this area
              </h3>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:justify-items-center">
            <MotionEffect effect={"fade-up"} duration={800}>
              <div>
                <p className="text-xl font-bold mb-2">Pasco County:</p>
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
                <p className="text-xl font-bold mb-2">Manatee County:</p>
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
                <p className="text-xl font-bold mb-2">Polk County:</p>
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
                <p className="text-xl font-bold mb-2">Sarasota County:</p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Sarasota</li>
                  <li>Siesta Key</li>
                  <li>Venice</li>
                </ul>
              </div>
            </MotionEffect>

            <MotionEffect effect={"fade-up"} duration={2000}>
              <div>
                <p className="text-xl font-bold mb-2">Hillsborough County:</p>
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
          </div>
        </div>
      </SectionLayout>
      <div className="py-10">
        <ContactUs />
      </div>
    </main>
  );
};

export default AreasServed;
