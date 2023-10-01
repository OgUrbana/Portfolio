import { InstagramIcon, XIcon, LinkedInIcon, GithubSocialIcon } from '@/utils';
import Link from 'next/link';

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <figure className={className ?? 'flex gap-2'}>
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
        <GithubSocialIcon className='social' />
      </Link>
    </figure>
  );
};

export default SocialLinks;
