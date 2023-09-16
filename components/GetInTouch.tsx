import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ContactBanner from '@/public/contactbanner.png';
import ContactBannerSmall from '@/public/contactbannersm.png';
const GetInTouch = () => {
  return (
    <section className='bg-background-1 pt-12'>
      <section className='padding-layout flex justify-center'>
        <Link href='/contact'>
          <Image
            src={ContactBanner}
            priority
            alt='contact background'
            className='hidden sm:block'
          />
          <Image
            src={ContactBannerSmall}
            priority
            alt='contact background'
            className='sm:hidden'
          />
        </Link>
      </section>
    </section>
  );
};

export default GetInTouch;
