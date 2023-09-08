'use client';

import Link from 'next/link';
import React from 'react';
import Download from './Icons/Download';
import { usePathname } from 'next/navigation';
import ToggleTheme from './ToggleTheme';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <section className='padding-layout hidden items-center justify-between py-9 lg:flex'>
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
              className={`${pathname === '/contact' ? 'navActive' : 'navLink'}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href='/resume.pdf'
              className={`${pathname === '/resume' ? 'navActive' : 'navLink'}`}
              locale={false}
            >
              <Download />
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
  );
};

export default DesktopNav;
