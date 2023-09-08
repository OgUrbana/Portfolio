'use client';

import React, { useEffect, useState } from 'react';
import MonitorIcon from '@/public/icons/monitor.svg';
import MoonIcon from '@/public/icons/moon.svg';
import SunIcon from '@/public/icons/sun.svg';
import { useTheme } from 'next-themes';

const SelectedIcon = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <figure>
        <MonitorIcon selected='system' className='h-6 w-6' />
      </figure>
    );

  return (
    <>
      <figure className={theme === 'light' ? 'dark:hidden' : 'hidden'}>
        <SunIcon
          className={`h-6 w-6 ${
            theme === 'light' ? 'fill-primary' : 'fill-white-500'
          }`}
        />
      </figure>
      <figure className={theme === 'dark' ? 'dark:inline' : 'hidden'}>
        <MoonIcon
          className={`h-6 w-6 ${
            theme === 'dark' ? 'fill-primary' : 'fill-white-500'
          }`}
        />
      </figure>
      <figure className={theme === 'system' || !theme ? '' : 'hidden'}>
        <MonitorIcon
          className={`h-6 w-6 stroke-2 ${
            theme === 'system' ? ' stroke-primary' : ' stroke-white-500'
          }`}
        />
      </figure>
    </>
  );
};

export default SelectedIcon;
