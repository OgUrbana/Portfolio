import Image from 'next/image';
import Link from 'next/link';

import Morrent from '@/public/projects/morrent.png';
import JobIt from '@/public/projects/jobit.png';
import ArrowIcon from '@/public/icons/arrow.svg';
import SmallArrow from '@/public/icons/smallarrow.svg';

const projects = [
  {
    title: 'Morrent - A Car Rental Application',
    tech: ['ReactJS, NextJS', 'Nodejs, Supabase'],
    preview: Morrent,
    bgColor: 'bg-primary',
    link: '/case',
  },
  {
    title: 'JobIT - A Job Finding Application',
    tech: ['ReactJS, NextJS', 'Nodejs, JSearch'],
    preview: JobIt,
    bgColor: 'bg-jobit',
    link: '/case',
  },
];

const FeaturedProjects = () => {
  return (
    <section className='padding-layout mt-12 flex w-full flex-col items-center gap-8'>
      <h3>
        Featured <span className='yellow-gradient'>Projects</span>
      </h3>

      <section className='flex w-full flex-col gap-8'>
        {projects.map((project, index) => (
          <article
            key={`project-${index}`}
            className={`flex flex-col items-center rounded-xl p-3 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } md:p-12 ${project.bgColor}`}
          >
            <section className='m-8 flex flex-col gap-8'>
              <h2 className='text-3xl text-white md:text-3xl xl:text-4xl'>
                {project.title}
              </h2>
              <section className='flex gap-4'>
                {project.tech.map((tech, index) => (
                  <small
                    key={`tech-${index}`}
                    className='rounded-lg bg-white/10 p-3 text-xs text-white xl:text-lg'
                  >
                    {tech}
                  </small>
                ))}
              </section>
              <Link
                href={project.link}
                className='flex items-center gap-2 fill-white font-semibold text-white transition duration-300 ease-in-out hover:fill-secondary hover:text-secondary'
              >
                See Case Study
                <ArrowIcon />
              </Link>
            </section>
            <section>
              <Image
                src={project.preview}
                alt='Morrent Desktop & mobile display'
              />
            </section>
          </article>
        ))}
        <section className='flex justify-center'>
          <Link
            href='/case'
            className='flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80'
          >
            See more case studies
            <SmallArrow />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default FeaturedProjects;
