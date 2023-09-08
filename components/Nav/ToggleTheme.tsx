import React from 'react';
import { useTheme } from 'next-themes';
import { Listbox } from '@headlessui/react';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import MonitorIcon from './Icons/MonitorIcon';
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
        <Listbox.Options
          className={
            'relative left-72 top-24 w-36 rounded-lg bg-background-1 py-2'
          }
        >
          {settings.map(({ value, label, icon }) => (
            <Listbox.Option
              key={value}
              value={value}
              className='flex cursor-pointer items-center gap-2 p-1 pl-3 hover:bg-background-2'
            >
              {icon(theme ?? 'system', 'h-6 w-6')}
              {label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default ToggleTheme;
