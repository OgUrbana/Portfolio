import Image from 'next/image';

import {
  JSIcon,
  ReactIcon,
  NextIcon,
  TSIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  FramerIcon,
  NodeIcon,
  MongoIcon,
  GitIcon,
  MaterialIcon,
  GithubIcon,
  SassIcon,
  HeadlessIcon,
  SupabaseIcon,
  RadixIcon,
} from '@/utils';

const icons = [
  JSIcon,
  ReactIcon,
  NextIcon,
  TSIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  FramerIcon,
  NodeIcon,
  MongoIcon,
  GitIcon,
  MaterialIcon,
  GithubIcon,
  SassIcon,
  HeadlessIcon,
];

const SkillIcons = () => {
  return (
    <section className='flex flex-wrap items-center justify-center gap-8'>
      {icons.map((Component, key) => (
        <figure
          key={key}
          className='shrink-0 cursor-pointer rounded-full p-5 transition ease-in-out hover:scale-125 dark:bg-black-300'
        >
          <Component className='h-8 w-8' />
        </figure>
      ))}
      <figure className='shrink-0 cursor-pointer rounded-full p-5 transition ease-in-out hover:scale-125 dark:bg-black-300'>
        <Image src={SupabaseIcon} className='h-8 w-8' alt='supabase logo' />
      </figure>
      <figure className='shrink-0 cursor-pointer rounded-full p-5 transition ease-in-out hover:scale-125 dark:bg-black-300'>
        <Image
          src={RadixIcon}
          className='h-8 w-8 rounded-lg'
          alt='supabase logo'
        />
      </figure>
    </section>
  );
};

export default SkillIcons;
