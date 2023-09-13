import React from 'react';

import Hero from '@/components/Home/Hero';
import Skills from '@/components/Home/Skills/Skills';
import Services from '@/components/Home/Services';
import Experience from '@/components/Home/Experience';
import FeaturedProjects from '@/components/Home/FeaturedProjects';
import Reviews from '@/components/Home/Reviews';
import ContactBanner from '@/public/contactbanner.png';
import ContactBannerSmall from '@/public/contactbannersm.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='flex flex-col gap-6'>
      <Hero />
      <Skills />
      <section>
        <Services />
      </section>
      <section className='flex flex-col gap-12 bg-background-1 py-16'>
        <Experience />
        <FeaturedProjects />
      </section>
      <section className='padding-layout'>
        <h3 className='text-center'>
          What do<span className='text-secondary'> people say?</span>
        </h3>
        <Reviews />
      </section>
      <section className='bg-background-1 pt-12'>
        <section className='padding-layout flex justify-center'>
          <Link href='/contact'>
            <Image
              src={ContactBanner}
              alt='contact background'
              className='hidden sm:block'
            />
            <Image
              src={ContactBannerSmall}
              alt='contact background'
              className='sm:hidden'
            />
          </Link>
        </section>
      </section>
    </section>
  );
}
