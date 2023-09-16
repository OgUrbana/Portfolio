import Image from 'next/image';
import Link from 'next/link';

import Morrent from '@/public/projects/morrent.png';
import GithubIcon from '@/public/icons/cases/github.svg';
import RightArrow from '@/public/icons/cases/arrowright.svg';
import GlobeIcon from '@/public/icons/cases/globe.svg';
import Technologies from '@/components/Case/Technologies';

const Page = () => {
  return (
    <section>
      <section className='my-16 flex flex-col items-center justify-center gap-6 text-center'>
        <hgroup className='flex flex-col gap-4'>
          <h4 className='text-base font-semibold tracking-widest text-primary md:text-lg'>
            WEB DEV PROJECT
          </h4>
          <h1 className='text-5xl md:text-6xl'>
            <span className='text-secondary'>Morrent</span> - A Car Rental
            Website
          </h1>
        </hgroup>
        <Image
          src={Morrent}
          alt='Mobile & Desktop Morrent Preview'
          className='p-3'
        />
        <section className='flex items-center justify-center gap-12 md:gap-32'>
          <Link
            href=''
            className='default-animation group flex items-center gap-2 text-primary hover:text-primary/60'
          >
            <GlobeIcon className='default-animation fill-primary group-hover:fill-primary/60' />
            <p>Demo Site</p>
            <RightArrow className='default-animation stroke-primary group-hover:stroke-primary/60' />
          </Link>
          <Link
            href=''
            className='default-animation group flex items-center gap-2 text-primary hover:text-primary/60'
          >
            <GithubIcon className='default-animation fill-primary group-hover:fill-primary/60' />
            <p>Source Code</p>
            <RightArrow className='default-animation stroke-primary group-hover:stroke-primary/60' />
          </Link>
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-12 p-16 xl:px-72'>
          <section className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-0'>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                My Role
              </small>
              <h4 className='text-xl'>Software Engineer</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                Start Date
              </small>
              <h4 className='text-xl'>08/08/2023</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                End Date
              </small>
              <h4 className='text-xl'>09/03/2023</h4>
            </hgroup>
          </section>
          <section>
            <hgroup className='flex flex-col gap-2'>
              <small className='bold text-primary'>Technologies used</small>
              <h3>Tech Stack</h3>
              <section>
                <Technologies
                  tech={[
                    'react',
                    'next',
                    'typescript',
                    'motion',
                    'tailwind',
                    'html',
                    'css',
                    'supabase',
                    'git',
                    'github',
                    'node',
                  ]}
                />
              </section>
            </hgroup>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Page;
