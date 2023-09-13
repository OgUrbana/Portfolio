import Link from 'next/link';
import React from 'react';

import InstagramIcon from '@/public/icons/social/instagram.svg';
import XIcon from '@/public/icons/social/x.svg';
import LinkedInIcon from '@/public/icons/social/linkedin.svg';
import GithubIcon from '@/public/icons/social/github.svg';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-background-1 pb-6 pt-12'>
      <section className='padding-layout'>
        <section className='flex flex-col items-center justify-center gap-2 pt-8 dark:border-t dark:border-t-black-300 md:flex-row md:justify-between'>
          <small>© 2023 Matthew Gajo. All rights reserved.</small>
          <figure className='flex gap-2'>
            <Link href='' className='default-animation'>
              <InstagramIcon className='social' />
            </Link>
            <Link
              href=''
              className='default-animation rounded-full bg-black-400 hover:bg-primary dark:bg-white dark:hover:bg-primary'
            >
              <XIcon className='fill-background-1' />
            </Link>
            <Link href='' className='default-animation'>
              <LinkedInIcon className='social' />
            </Link>
            <Link href='' className='default-animation'>
              <GithubIcon className='social' />
            </Link>
          </figure>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
