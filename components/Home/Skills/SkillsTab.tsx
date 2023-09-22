'use client';

import { Tab } from '@headlessui/react';
import React from 'react';
import ProgressBar from './ProgressBar';
import { classNames } from '@/utils';

const tabs = ['Languages', 'Frameworks', 'Backend'];

const SkillsTab = () => {
  return (
    <Tab.Group>
      <Tab.List className='flex justify-center'>
        <div className='mb-4 flex rounded-lg bg-background-2 p-1 shadow-md'>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'rounded-lg px-3 py-1 text-sm transition ease-in-out duration-300 outline-none font-light',
                  selected ? 'shadow text-primary' : 'hover:bg-gray-400/20',
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels className=''>
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='JavaScript' currentProgress={84} />
            <ProgressBar content='CSS' currentProgress={92} />
            <ProgressBar content='Python' currentProgress={64} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='Typescript' currentProgress={72} />
            <ProgressBar content='HTML' currentProgress={94} />
            <ProgressBar content='C++' currentProgress={40} />
          </div>
        </Tab.Panel>
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='React' currentProgress={76} />
            <ProgressBar content='Headless' currentProgress={80} />
            <ProgressBar content='Material UI' currentProgress={64} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='NextJS' currentProgress={84} />
            <ProgressBar content='Tailwind' currentProgress={90} />
            <ProgressBar content='Radix UI' currentProgress={81} />
          </div>
        </Tab.Panel>
        <Tab.Panel className='flex flex-col gap-3 md:flex-row md:justify-between md:gap-10'>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='Supabase' currentProgress={74} />
            <ProgressBar content='Git' currentProgress={80} />
          </div>
          <div className='flex w-full flex-col items-center gap-3'>
            <ProgressBar content='MongoDB' currentProgress={78} />
            <ProgressBar content='Github' currentProgress={89} />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default SkillsTab;
