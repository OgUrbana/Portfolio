'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import ToggleTheme from './ToggleTheme';
import Link from 'next/link';

// className={`${
// 	pathname === '/'
// 		? 'font-semibold text-primary'
// 		: 'text-white-500 dark:text-white-800'
// } transition ease-in-out`}

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-40 w-full bg-background-2/95 backdrop-blur transition-colors duration-500 lg:z-50'>
      <section className='padding-layout flex items-center justify-between'>
        <div>Logo</div>
        <section className='flex items-center gap-8'>
          <ul className='flex gap-4' id='navList'>
            <li>
              <Link
                href='/'
                className={`${pathname === '/' ? 'navActive' : 'navLink'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/case'
                className={`${pathname === '/case' ? 'navActive' : 'navLink'}`}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${
                  pathname === '/contact' ? 'navActive' : 'navLink'
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${
                  pathname === '/contact' ? 'navActive' : 'navLink'
                }`}
              >
                Resume
              </Link>
            </li>
          </ul>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='2'
            height='25'
            viewBox='0 0 2 25'
            fill='none'
          >
            <path
              d='M1 0.5L0.999999 24.5'
              stroke='#6F74A7'
              strokeLinecap='round'
            />
          </svg>
          <ToggleTheme />
        </section>
      </section>
    </nav>
  );
};

export default Navigation;
