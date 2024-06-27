import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SITECONFIG } from '@/config/site';

import SectionLayout from './shared/SectionLayout';

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer-banner.jpg')] bg-cover bg-bottom">
      <SectionLayout>
        <div className='md:flex md:justify-center'>
          <div className='grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-4 justify-between '>
            <div className='flex-1 mb-6 md:mb-0 mx-auto md:mx-0'>
              <Link href='/' className='flex items-center cursor-pointer'>
                <Image
                  width={220}
                  height={200}
                  src={'/images/footer-logo.png'}
                  alt='Trip Low'
                  className='object-cover'
                />
              </Link>
              <p className='text-gray-300 font-thin text-base mt-6 max-w-64 text-center md:text-left'>
                Robert has over 20 years of valuable experience in the legal
                community and insurance industry. He is not afraid to fight for
                justice for you and your family.
              </p>
            </div>

            {/* Contactinfo Section*/}

            <div className='flex-1 justify-between'>
              <h2 className='mb-6 md:mb-12  text-lg font-semibold text-white text-center md:text-left'>
                CONTACT INFO
              </h2>
              <ul className='text-gray-300 font-thin text-base list-none ml-0 text-center md:text-left'>
                <li className='mb-4 space-y-2'>
                  <p className='font-bold'>Attorney Robert J. Johnson, Esq.</p>
                  <p>1211 Tech Blvd.</p>
                  <p>Suite #110</p>
                  <p>Tampa, Florida 33619</p>
                </li>
              </ul>
            </div>

            {/*Opening Hours*/}

            <div className='flex-1'>
              <h2 className='mb-6 md:mb-12 text-lg font-semibold text-white text-center md:text-left'>
                USEFUL LINKS
              </h2>
              <ul className='text-gray-300 font-thin text-base list-none ml-0 text-center md:text-left'>
                <li className='mb-4'>
                  <Link href={'/privacy-policy'} className='hover:underline'>
                    Privacy Policy
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Apollo Beach
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Arcadia
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Auburndale
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Avon Park
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Bartow
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Bradenton
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Brooksville
                  </Link>
                  <Link href={'/'} className='hover:underline'>
                    Clearwater
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Crystal River
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Dade City
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Davenport
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Dundee
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Dunedin
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Haines City
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Holiday
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Homosassa
                  </Link>
                  ,{' '}
                  <Link href={'/'} className='hover:underline'>
                    Inverness
                  </Link>
                  ,{' '}
                </li>
              </ul>
            </div>

            {/* service Section*/}

            <div className='flex justify-center'>
              <div className=''>
                <h2 className='mb-6 md:mb-12 text-lg font-semibold text-white text-center md:text-left'>
                  SERVICE
                </h2>
                <ul className='text-gray-300 font-thin text-base list-none p-0 text-center md:text-left'>
                  {SITECONFIG?.footer?.services?.map((el, index) => (
                    <Link href={`/services/${el.slug}`} key={index}>
                      <li className='mb-4 hover:underline'>
                        <p>{el.title}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part*/}

        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='md:flex items-center justify-between'>
          <div className=''>
            <div className='flex flex-col md:flex-row md:justify-start mb-3'>
              <div className='text-gray-300 font-thin text-md md:text-base text-center md:text-left'>
                © 2024 Robert J. Johnson. ® All Rights Reserved. Attorney
                Advertising.
              </div>
              <div className='text-gray-300 font-thin text-md md:text-base text-center md:text-left'>
                {'  '} Design & Developed by {'  '}
                <a
                  href='https://www.bayshorecommunication.com//'
                  target='_blank'
                  className='hover:underline font-medium text-[#4B93FF]'
                >
                  BayShore Communication
                </a>
              </div>
            </div>
            <div className='text-gray-300 font-thin text-md md:text-base text-center md:text-left'>
              The information presented at this site should not be construed to
              be formal legal advice nor the formation of a lawyer/client
              relationship.
              <br /> *Law Office of Robert J. Johnson d/b/a Robert Johnson Law &
              Car Crash Rob is employed with Carter Injury Law*
            </div>
          </div>
          <div className='flex mt-3 mb-3 justify-center sm:mt-4 gap-3'>
            <Link
              href='https://www.facebook.com/attorneyrobertjohnsonatlaw'
              target='_blank'
              className='text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2'
            >
              <svg
                className='h-3.5 w-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fill-rule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clip-rule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </Link>

            <Link
              href='https://www.instagram.com/attorneyrobertjohnsonatlaw/'
              target='_blank'
              className='text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3.5 w-3.5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
              <span className='sr-only'>Instagram</span>
            </Link>
            {/* <Link
                href='https://www.linkedin.com/company/apex-advisor-group-inc/'
                target='_blank'
                className='text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 448 512'
                  className='h-3.5 w-3.5'
                >
                  <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
                </svg>

                <span className='sr-only'>Linkdin</span>
              </Link> */}
            <Link
              href='https://www.youtube.com/@RobJohnson-AttorneyAtLaw'
              target='_blank'
              className='text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 576 512'
                className='h-3.5 w-3.5'
              >
                <path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
              </svg>
              <span className='sr-only'>Youtube</span>
            </Link>

            <Link
              href='https://x.com/robjohnsonlaw'
              target='_blank'
              className='text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 448 512'
                className='h-3.5 w-3.5'
              >
                <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
              </svg>

              <span className='sr-only'>X</span>
            </Link>
          </div>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;
