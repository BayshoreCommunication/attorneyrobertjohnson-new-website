'use client';
import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { SITECONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      // shouldHideOnScroll
      maxWidth='2xl'
      className='flex bg-[#FFFFFF] bg-cover md:py-2 shadow-md border-t-2'
    >
      <NavbarContent className='md:hidden ml-0' justify='start'>
        <NavbarMenuToggle className='text-slate-900 ml-0' />
      </NavbarContent>

      <NavbarContent className='md:hidden' justify='end'>
        <NavbarItem>
          <Image
            width={120}
            height={130}
            src={'/images/robertjhonsonlogo.png'}
            alt='robertJohnsonlogo'
            className='object-cover cursor-pointer'
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='hidden md:flex' justify='start'>
        <Link href='/'>
          <Image
            width={200}
            height={60}
            src={'/images/robertjhonsonlogo.png'}
            alt='robertJohnsonlogo'
            className='object-cover cursor-pointer !max-w-[200px] ml-[-20px]'
          />
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden gap-10 md:flex' justify='end'>
        {SITECONFIG?.navMenuItem?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`flex text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-[#4B93FF] ${pathname === nav.slug ? 'border-b-2 border-solid border-[#4B93FF] text-[#4B93FF]' : ''}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className='ml-0'>
        {SITECONFIG?.navMenuItem?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className='list-none'>
            <Link
              className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-[#4B93FF] list-none ${pathname === nav.slug ? 'border-b-2 border-solid border-[#4B93FF]' : ''}`}
              href={nav.slug}
              size='lg'
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
