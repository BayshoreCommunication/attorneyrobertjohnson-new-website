import SectionLayout from '@/components/shared/SectionLayout';
import Head from 'next/head';
import Image from 'next/image';
import robjhonson from '@/public/images/Robert-Johnson-Law.png';
import { BiSolidPhoneCall } from 'react-icons/bi';
import ContactUs from '@/components/shared/ContactUs';
import MotionEffect from '@/components/motion/MotionEffect';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About - Apex Advisor Group Inc</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Tax Accountants at Apex Advisor Group Inc offer personal tax returns to clients across Tampa, Brandon, Riverview, Sun City &amp; Plant City.'
        />
      </Head>

      <SectionLayout bg='bg-[#F3F3F3]'>
        <section>
          <div className='flex flex-col-reverse md:flex-row gap-6'>
            <div className='flex flex-col gap-2 w-full md:w-[60%] justify-between'>
              <MotionEffect effect={'fade-down'} duration={1500}>
                <div className='flex flex-col gap-4 text-center sm:text-start'>
                  <h1 className='uppercase text-[#4B93FF] text-2xl sm:text-3xl font-bold'>
                    About Robert Johnson
                  </h1>
                  <p className='font-bold'>ROBERT J. JOHNSON, ESQ.</p>
                </div>
              </MotionEffect>
              <MotionEffect
                effect={'fade-right'}
                duration={1500}
                className='flex flex-col gap-3'
              >
                <p>{`Rob is the son of an Army Veteran who was born at Elmendorf Air Force Base in Alaska.  He grew up moving from one military base to another and because of that and his travels later in life, he has been fortunate to visit all fifty (50) states in The United States of America.  Although he moved often due to his father’s military orders, he had the opportunity to spend much of his young life growing up in central Florida and because of that he considers Florida, more specifically the Tampa Bay area, to be his home.`}</p>
                <p>{`Rob graduated from The University of Tampa with both a Bachelor of Science in Criminology and a Bachelor of Arts in Government & World Affairs. During his time at The University of Tampa, Rob was very involved in service to others and his community and held several leadership roles, including his elected positions as Student Government President and President of his fraternity.  The University of Tampa is also where he met his wife Ainsley.`}</p>
                <p>{`While attending law school at Western Michigan University Thomas M. Cooley Law School, Rob earned his way onto the Dean’s list and honor roll and was the recipient of the book award for his Gaming Law course.  Additionally, Rob was awarded the Leadership Achievement Award and served as President of the Student Bar Association, President of the Mock Trial Board, and was a member of the Moot Court Board, Honor Council, Law Journal, Phi Alpha Delta, and Phi Delta Phi Legal Honor Society.`}</p>
                <p>{`Rob’s strong work ethic is a reflection of his previous experience from working at one of the country’s largest personal injury law firms.  A passionate advocate for his clients, Rob specializes in all types of personal injury cases to include, but not limited to: auto accidents, truck accidents, slip and fall injuries, and wrongful death cases.`}</p>
                <p>{`Rob is licensed with The Florida Bar and is eligible to practice in all Florida State Courts and the Federal Courts in the Southern and Middle Districts of Florida.  He is also a member of the Florida Bar Trial Lawyers Section, Florida Bar Appellate Practice Section, Workers Compensation Law Section, Solo & Small Firm Section, Animal Law Section, Florida Justice Association, Southern Trial Lawyers Association, Hillsborough County Bar Association and Tampa Bay Inn of Court (American Inn of Courts).`}</p>
                <p>{`When he is not advocating for his clients, Rob enjoys traveling, fishing, volunteering with various local charities, attending concerts, cheering on Tampa Bay’s local sports teams, and spending time with his wife, family and friends.`}</p>
              </MotionEffect>
              <MotionEffect effect={'fade-right'} duration={1500}>
                <p className='text-xl font-bold mb-2'>Education:</p>
                <ul className='list-disc list-inside flex flex-col gap-2'>
                  <li>2005 - Bachelor of Science, The University of Tampa</li>
                  <li>2005 - Bachelor of Arts, The University of Tampa</li>
                  <li>
                    2018 - Juris Doctorate, cum laude, Western Michigan
                    University Thomas M. Cooley Law School (Tampa)
                  </li>
                </ul>
              </MotionEffect>
              <MotionEffect effect={'fade-right'} duration={1500}>
                <p className='text-xl font-bold mb-2'>
                  Admissions and Associations:
                </p>
                <ul className='list-disc list-inside flex flex-col gap-2'>
                  <li>2019 – Admitted into The Florida Bar</li>
                  <li>
                    2020 – Admitted into the Federal U.S. Middle District Court
                    of Florida
                  </li>
                  <li>
                    2020 – Admitted into the Federal U.S. Southern District
                    Court of Florida
                  </li>
                  <li>
                    2019 – Hillsborough County Bar Association Member (HCBA)
                  </li>
                  <li>2019 – Tampa Bay Inn of Court Member</li>
                  <li>
                    2020 – Tampa Bay Trial Lawyers’ Association Member (TBTLA)
                  </li>
                  <li>
                    2021 – American Justice Association Member / Association of
                    Trial Lawyers (AAJ)
                  </li>
                  <li>2021 – Florida Justice Association Member (FJA)</li>
                  <li>
                    2021 – Southern Trial Lawyers Association Member (STLA)
                  </li>
                </ul>
              </MotionEffect>
            </div>
            <div className='w-full md:w-[40%] flex justify-center'>
              <MotionEffect effect={'fade-left'} duration={1500}>
                <Image
                  src={robjhonson}
                  alt='rob johnson'
                  width={400}
                  height={300}
                />
              </MotionEffect>
            </div>
          </div>
          <MotionEffect
            effect={'fade-up'}
            anchorPlacement={'top-bottom'}
            duration={1500}
          >
            <div className='flex flex-col items-center gap-3 mt-6 md:mt-12 font-semibold text-center'>
              <p className='text-center'>
                Robert J. Johnson, Esq. is the son of an Army Veteran that spent
                the majority of his years <br /> right here in the central
                Florida area.
              </p>
              <div>
                <p className='text-lg mb-1'>
                  CALL “CAR CRASH ROB” NOW IF YOU HAVE BEEN INJURED!
                </p>
                <p className='flex items-center gap-2 text-lg justify-center'>
                  Free Consultation:
                  <BiSolidPhoneCall size={17} color='red' />
                  (813) 540-3225
                </p>
              </div>
              <p className='text-xl md:text-2xl text-red-600 text-center'>
                There is NO COST to YOU unless we win!
              </p>
            </div>
          </MotionEffect>
        </section>

        {/* contact us  */}
      </SectionLayout>
      <SectionLayout>
        <ContactUs />
      </SectionLayout>
    </>
  );
};

export default AboutUsPage;
