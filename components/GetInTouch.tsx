import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ContactBanner from '@/public/contactbanner.png';
import ContactBannerSmall from '@/public/contactbannersm.png';
const GetInTouch = () => {
  return (
    <section className='bg-background-1 pt-12'>
      <div className='padding-layout flex justify-center'>
        <Link href='/contact'>
          <Image
            src={ContactBanner}
            priority
            alt='Large Placeholder Contact background'
            className='hidden sm:block'
          />
          <Image
            src={ContactBannerSmall}
            priority
            alt='Small Placeholder Contact Background'
            className='sm:hidden'
          />
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
