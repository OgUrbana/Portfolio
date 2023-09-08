'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Download from './Icons/Download';
import ToggleTheme from './ToggleTheme';

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const offset = 50;
    function onScroll() {
      if (!isScroll && window.scrollY > offset) {
        setIsScroll(true);
      } else if (isScroll && window.scrollY <= offset) {
        setIsScroll(false);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [isScroll]);

  return (
    <nav
      className={
        'sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50' +
        `${isScroll ? ' bg-background-2/75' : ''}`
      }
    >
      <section className='padding-layout flex items-center justify-between py-9'>
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
                href='/resume'
                className={`${
                  pathname === '/resume' ? 'navActive' : 'navLink'
                }`}
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
    </nav>
  );
};

export default Navigation;
