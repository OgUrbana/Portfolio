'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ToggleTheme from '../Reusable/ToggleTheme';
import { Download, Divider } from '@/utils';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <section className='padding-layout hidden items-center justify-between py-4 md:flex'>
      <Link href='/' aria-label='Home'>
        Matthew Gajo
      </Link>
      <div className='flex items-center gap-8'>
        <ul className='flex gap-4' id='navList'>
          <li>
            <Link
              prefetch
              href='/'
              className={`${pathname === '/' ? 'navActive' : 'navLink'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              prefetch
              href='/case'
              className={`${pathname === '/case' ? 'navActive' : 'navLink'}`}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              prefetch
              href='/contact'
              className={`${pathname === '/contact' ? 'navActive' : 'navLink'}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              prefetch
              href='/resume.pdf'
              className={`${pathname === '/resume' ? 'navActive' : 'navLink'}`}
              locale={false}
            >
              <Download width={14} height={15} />
              Resume
            </Link>
          </li>
        </ul>
        <Divider />
        <ToggleTheme />
      </div>
    </section>
  );
};

export default DesktopNav;
