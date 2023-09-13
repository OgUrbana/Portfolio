import React from 'react';
import Image from 'next/image';

import JSIcon from '@/public/icons/js.svg';
import ReactIcon from '@/public/icons/react.svg';
import NextIcon from '@/public/icons/nextjs.svg';
import TSIcon from '@/public/icons/typescript.svg';
import HTMLIcon from '@/public/icons/html5.svg';
import CSSIcon from '@/public/icons/css3.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';
import FramerIcon from '@/public/icons/framer.svg';
import NodeIcon from '@/public/icons/node.svg';
import MongoIcon from '@/public/icons/mongodb.svg';
import GitIcon from '@/public/icons/git.svg';
import MaterialIcon from '@/public/icons/materialui.svg';
import GithubIcon from '@/public/icons/github.svg';
import SassIcon from '@/public/icons/sass.svg';
import HeadlessIcon from '@/public/icons/headless.svg';
import SupabaseIcon from '@/public/icons/supabase.png';
import RadixIcon from '@/public/icons/radix.png';

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
