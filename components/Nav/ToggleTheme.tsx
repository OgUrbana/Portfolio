'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Listbox, Transition } from '@headlessui/react';
import SunIcon from '@/public/icons/sun.svg';
import MoonIcon from '@/public/icons/moon.svg';
import MonitorIcon from '@/public/icons/monitor.svg';
import { SettingsType } from './types';
import SelectedIcon from './SelectedIcon';

const settings: SettingsType[] = [
  {
    value: 'light',
    label: 'Light',
    icon: (selected, className) => (
      <SunIcon selected={selected} className={className} />
    ),
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: (selected, className) => (
      <MoonIcon selected={selected} className={className} />
    ),
  },
  {
    value: 'system',
    label: 'System',
    icon: (selected, className) => (
      <MonitorIcon selected={selected} className={className} />
    ),
  },
];

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Label className='sr-only'>Theme</Listbox.Label>
      <Listbox.Button type='button'>
        <SelectedIcon />
      </Listbox.Button>
      <div className='absolute'>
        <Transition
          enter='transition ease-in duration-100'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className={
              'relative right-24 top-20 w-36 rounded-lg border border-white-500/30 bg-background-1 py-2 lg:left-72 lg:top-24'
            }
          >
            {settings.map(({ value, label, icon }) => (
              <Listbox.Option
                key={value}
                value={value}
                className='flex cursor-pointer items-center gap-2 p-1 pl-3 hover:bg-background-2'
              >
                {icon(
                  theme ?? 'system',
                  `h-6 w-6 stroke-2 ${
                    theme === value
                      ? `${
                          value === 'system' ? 'stroke-primary' : 'fill-primary'
                        }`
                      : `${
                          value === 'system'
                            ? 'stroke-white-500'
                            : 'fill-white-500'
                        }`
                  }`,
                )}
                {label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ToggleTheme;
