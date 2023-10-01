import LineDecoration from '@/public/linedecoration.svg';
import { experience } from '@/utils';

import Link from 'next/link';

const Experience = () => {
  return (
    <section className='padding-layout flex w-full flex-col items-center justify-between gap-8 md:flex-row'>
      <div className='flex w-full flex-col gap-8 rounded-xl bg-black-200 p-16 dark:bg-white-800 md:w-1/2 md:max-w-[450px]'>
        <h2 className='text-3xl text-white dark:text-black'>
          Dev <span className='yellow-gradient'>Experience</span>
        </h2>
        <p className='text-sm text-white dark:text-white-500 lg:text-lg'>
          Progress and milestones. A simple walkthrough of roles, projects, and
          achievements in my career
        </p>
        <LineDecoration className='place-self-end fill-white stroke-white stroke-2 dark:fill-black-200 dark:stroke-gray-500 sm:w-1/2 md:w-full' />
      </div>
      <div className='w-full'>
        {experience.map((job, index) => (
          <Link key={`job-${index}`} href={job.link}>
            <article className='group flex h-24 items-center gap-8 rounded-xl px-8 transition duration-300 ease-in-out hover:scale-105 hover:bg-background-2 hover:shadow-xl'>
              <job.icon className='h-12 w-12 fill-white transition duration-300 ease-in-out group-hover:fill-primary' />
              <hgroup className=''>
                <h4 className='base-bold group-hover:text-primary'>
                  {job.title}
                </h4>
                <small>{job.desc}</small>
              </hgroup>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Experience;
