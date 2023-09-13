import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Download from '@/public/icons/download.svg';

const links = [
  {
    name: 'Home',
    value: '/',
  },
  {
    name: 'Case Studies',
    value: '/case',
  },
  {
    name: 'Contact',
    value: '/contact',
  },
  {
    name: 'Resume',
    value: '/resume.pdf',
  },
];

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
  },
};

const liVariant = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: { display: 'none' },
  },
};

const MobileNavLinks = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <motion.ul
      variants={variants}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='absolute left-10 top-16'
    >
      {links.map((link) => (
        <motion.li
          key={`link-${link.name.toLocaleLowerCase()}`}
          variants={liVariant}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='my-3'
        >
          <Link
            href={link.value}
            locale={false}
            className={`base-bold flex items-center gap-3 hover:text-primary ${
              pathname === link.value ? 'text-primary' : ''
            }`}
          >
            {link.name}
            {link.name === 'Resume' && <Download width={24} height={24} />}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MobileNavLinks;
