'use client';

import { Tab } from '@headlessui/react';
import React from 'react';
// import ProgressBar from './ProgressBar';
import { classNames } from '@/utils';
import { SkillIcons } from '.';
import ScreenText from '@/components/ScreenText';

const tabs = [
  { lg: 'Web Development', sm: 'Web' },
  { lg: 'Web & Graphic Design', sm: 'Design' },
  { lg: 'Communication', sm: 'Communication' },
];

const SkillsTab = () => {
  return (
    <Tab.Group>
      <Tab.List className='flex justify-center'>
        <div className='mb-4 flex rounded-lg bg-background-2 p-1 shadow-md'>
          {tabs.map((tab) => (
            <Tab
              key={'key' + tab.sm}
              className={({ selected }) =>
                classNames(
                  'rounded-lg px-3 py-1 text-sm transition ease-in-out duration-300 outline-none font-light',
                  selected ? 'text-primary' : 'hover:bg-gray-400/20',
                )
              }
            >
              <ScreenText smallText={tab.sm} largeText={tab.lg} />
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <SkillIcons />
        </Tab.Panel>
        {/* 
        Another mistake 😑
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='JavaScript' currentProgress={93} />
            <ProgressBar content='CSS' currentProgress={92} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='Typescript' currentProgress={91} />
            <ProgressBar content='HTML' currentProgress={94} />
          </div>
        </Tab.Panel>
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='React' currentProgress={93} />
            <ProgressBar content='Headless' currentProgress={91} />
            <ProgressBar content='Framer Motion' currentProgress={90} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='NextJS' currentProgress={94} />
            <ProgressBar content='Tailwind' currentProgress={90} />
            <ProgressBar content='Radix UI' currentProgress={90} />
          </div>
        </Tab.Panel>
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='Supabase' currentProgress={90} />
            <ProgressBar content='Git' currentProgress={90} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='MongoDB' currentProgress={91} />
            <ProgressBar content='Github' currentProgress={92} />
          </div>
        </Tab.Panel> */}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default SkillsTab;
