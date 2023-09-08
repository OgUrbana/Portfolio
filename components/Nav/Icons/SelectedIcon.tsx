'use client';

import React, { useEffect, useState } from 'react';
import MonitorIcon from './MonitorIcon';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
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
        <SunIcon selected={theme ?? 'system'} className='h-6 w-6' />
      </figure>
      <figure className={theme === 'dark' ? 'dark:inline' : 'hidden'}>
        <MoonIcon selected={theme ?? 'system'} className='h-6 w-6' />
      </figure>
      <figure className={theme === 'system' || !theme ? '' : 'hidden'}>
        <MonitorIcon selected={theme ?? 'system'} className='h-6 w-6' />
      </figure>
    </>
  );
};

export default SelectedIcon;
