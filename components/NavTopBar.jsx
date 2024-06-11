import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import Link from 'next/link';

const NavTopBar = () => {
  return (
    <section className={`hidden md:flex justify-center`}>
      <div className='container mx-5 lg:mx-0'>
        <div className='flex-1 flex flex-col'>
          <nav className='px-4 flex justify-between bg-white h-16'>
            <ul className='flex items-center'>
              <li className='flex items-center gap-2'>
                <MdEmail className='w-6 h-6 text-slate-700' />
                <span>attorneyRobJohnson@gmail.com</span>
              </li>
            </ul>

            <ul className='flex items-center'>
              <li className='flex items-center gap-2'>
                <BiSolidPhoneCall className='w-6 h-6 text-[#FF3838]' />
                <span>
                  Call Robert Johnson{' '}
                  <Link href={'tel:(813) 540-3225'} className='text-blue-600'>
                    {' '}
                    (813) 540-3225
                  </Link>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default NavTopBar;
