import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';

import Link from 'next/link';

const NavTopBar = () => {
  return (
    <section className={`hidden md:flex justify-center`}>
      <div className='container mx-5 lg:mx-0'>
        <div className='flex-1 flex flex-col'>
          <nav className='px-4 flex justify-between bg-white h-16'>
            <ul className='flex items-center'>
              <li className='flex items-center gap-2'>
                <IoLocationSharp className='w-6 h-6 text-slate-700' />
                <span> ROBERT J. JOHNSON, ESQ. Se Habla Espanol</span>
              </li>
            </ul>

            <ul className='flex items-center gap-x-4'>
              <li className='flex items-center gap-2'>
                <BiSolidPhoneCall className='w-6 h-6 text-slate-700' />
                <span>
                  <Link href={'tel:(813) 540-3225'} className='text-slate-700'>
                    {' '}
                    (813) 540-3225
                  </Link>
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <MdEmail className='w-6 h-6 text-slate-700' />
                <Link href='mailto:attorneyRobJohnson@gmail.com'>
                  <span>attorneyRobJohnson@gmail.com</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default NavTopBar;
