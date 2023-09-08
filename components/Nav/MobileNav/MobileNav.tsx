'use client';

import React from 'react';
import Hamburger from '../../SVG/Hamburger';
import ToggleTheme from '../ToggleTheme';
import { useCycle, motion } from 'framer-motion';
import MobileNavLinks from './MobileNavLinks';

const sidebar = {
  open: {
    transform: 'translateY(0%)',
  },
  closed: {
    transform: 'translateY(-100%)',
  },
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <section className='padding-layout flex items-center justify-between py-6 lg:hidden'>
      <p>Logo</p>
      <section className='flex items-center gap-3 '>
        <ToggleTheme />
        <motion.div
          variants={sidebar}
          animate={isOpen ? 'open' : 'closed'}
          className='absolute left-0 top-0 h-screen w-screen bg-background-2'
          initial={false}
        />
        <MobileNavLinks isOpen={isOpen} />
        <figure className='z-50 cursor-pointer' onClick={() => toggleOpen()}>
          <Hamburger isOpen={isOpen} />
        </figure>
      </section>
    </section>
  );
};

export default MobileNav;
