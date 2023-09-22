import React from 'react';

import AnalyticsIcon from '@/public/icons/services/analytics.svg';
import MonitorIcon from '@/public/icons/services/monitor.svg';
import ServerIcon from '@/public/icons/services/server.svg';
import OptimizeIcon from '@/public/icons/services/optimize.svg';

const services = [
  {
    title: 'Analytics & SEO',
    desc: 'Implement tracking & analytics tools to monitor website performance & improve SEO.',
    icon: AnalyticsIcon,
  },
  {
    title: 'Front-End Dev',
    desc: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
    icon: MonitorIcon,
  },
  {
    title: 'Back-End Dev',
    desc: 'Back-end dev includes managing API, integrate elements, and managing data.',
    icon: ServerIcon,
  },
  {
    title: 'Web Optimization',
    desc: 'Web optimization focuses on improving website performance for a smoother user experience',
    icon: OptimizeIcon,
  },
];

const Services = () => {
  return (
    <section className='padding-layout my-12 flex flex-col items-center justify-center gap-12'>
      <h3 className='text-center'>
        What <span className='yellow-gradient'>Services</span> do I provide?
      </h3>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-6 xl:grid-cols-4 xl:gap-12'>
        {services.map((service, index) => (
          <article
            key={index}
            className='drop-shadow-light dark:drop-shadow-black-300 group flex w-72 flex-col gap-6 rounded-xl bg-background-1 fill-white p-6 transition ease-in-out hover:scale-105 hover:bg-primary hover:fill-primary'
          >
            <figure className='drop-shadow-primary w-fit rounded-xl bg-primary p-3 group-hover:bg-white'>
              <service.icon className='h-6 w-6 fill-inherit' />
            </figure>
            <div>
              <h4 className='base-bold !text-lg group-hover:text-white'>
                {service.title}
              </h4>
              <small className='!text-xs text-white-500 group-hover:text-white'>
                {service.desc}
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
