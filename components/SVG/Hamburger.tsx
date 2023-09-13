import React from 'react';
import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    strokeWidth='2'
    stroke='currentColor'
    strokeLinecap='round'
    {...props}
  />
);

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg width='23' height='18' viewBox='0 0 23 18'>
      <Path
        d='M 8 2.5 L 24 2.5'
        className={
          isOpen
            ? 'stroke-primary'
            : 'stroke-black transition duration-200 ease-in-out dark:stroke-white'
        }
        variants={{
          closed: { d: 'M 8 2.5 L 24 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d='M 2 9.423 L 24 9.423'
        opacity='1'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        className={
          isOpen
            ? 'stroke-primary'
            : 'stroke-black transition duration-200 ease-in-out dark:stroke-white'
        }
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d='M 12 16.346 L 24 16.346'
        className={
          isOpen
            ? 'stroke-primary'
            : 'stroke-black transition duration-200 ease-in-out dark:stroke-white'
        }
        variants={{
          closed: { d: 'M 12 16.346 L 24 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  );
};

export default Hamburger;
