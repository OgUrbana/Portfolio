import Link from 'next/link';
import React from 'react';

import CopyButton from './CopyButton';
import Hello from './Hello';
import { HeroImage } from '@/utils';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='padding-layout flex h-[calc(100vh-5rem)] flex-col items-center justify-center text-center sm:text-left xl:flex-row'>
      <div className='flex flex-col gap-6 xl:w-5/12 xl:gap-8'>
        <Hello />
        <h1 className='text-5xl !leading-tight'>
          Professional <span className='yellow-gradient'>Web Developer </span>
          based in USA
        </h1>
        <p className='text-[12px] text-white-500 sm:text-[1.125rem]'>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </p>
        <div className='flex flex-col justify-center gap-4 md:flex-row'>
          <Link
            href='/case'
            className='rounded-full bg-primary px-5 py-2 text-sm font-semibold leading-[160%] text-white transition duration-300 ease-in-out hover:bg-primary/80 lg:px-6 lg:py-4'
          >
            My Work
          </Link>
          <CopyButton content='matthewgajo@gmail.com' />
        </div>
      </div>
      <div className='mx-auto hidden xl:block'>
        <HeroImage />
        {/* 
        Need to change to Framer Motion, video sucks 🤮
        <video autoPlay loop muted playsInline>
          <source src='/comp.webm' type='video/webm' />
        </video> */}
      </div>
    </div>
  );
};

export default Hero;
