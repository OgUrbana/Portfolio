import Link from 'next/link';

import InstagramIcon from '@/public/icons/social/instagram.svg';
import XIcon from '@/public/icons/social/x.svg';
import LinkedInIcon from '@/public/icons/social/linkedin.svg';
import GithubIcon from '@/public/icons/social/github.svg';

const Footer = () => {
  return (
    <footer className='bg-background-1 pb-6 pt-12'>
      <section className='padding-layout'>
        <section className='flex flex-col items-center justify-center gap-2 pt-8 dark:border-t dark:border-t-black-300 md:flex-row md:justify-between'>
          <small>© 2023 Matthew Gajo. All rights reserved.</small>
          <figure className='flex gap-2'>
            <Link
              href='https://instagram.com/'
              className='default-social'
              aria-label='instagram'
            >
              <InstagramIcon className='social' />
            </Link>
            <Link
              aria-label='X'
              href='https://x.com/'
              className='default-social rounded-full bg-black-400 hover:bg-primary dark:bg-white dark:hover:bg-primary'
            >
              <XIcon className='fill-background-1' />
            </Link>
            <Link
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/matthewgajo/'
              className='default-social'
            >
              <LinkedInIcon className='social' />
            </Link>
            <Link
              aria-label='GitHub'
              href='https://github.com/OgUrbana'
              className='default-social'
            >
              <GithubIcon className='social' />
            </Link>
          </figure>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
