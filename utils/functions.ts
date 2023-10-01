import { Project } from '@/types/type';
import { JobitCase, MorrentCase } from '.';

export const projects = [
  {
    name: 'Jobit',
    link: '/case/jobit',
    image: JobitCase,
    desc: 'Jobit, a web app made with React, NextJS and JSearch API, links developers to millions of job openings. It offers easy job search by displaying relevant jobs',
  },
  {
    name: 'Morrent',
    link: '/case/morrent',
    image: MorrentCase,
    desc: 'Morrent, a web app made with React, NextJS and Supabase. Car rental platform where users can rent cars, and put cars up for rent.',
  },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getProjects(names: Project[]) {
  const filteredProjects = projects.filter((project) =>
    names.includes(project.name.toLocaleLowerCase() as Project),
  );

  const sorted = filteredProjects.sort((a, b) => {
    const indexA = names.indexOf(a.name as Project);
    const indexB = names.indexOf(b.name as Project);

    return indexA - indexB;
  });

  return sorted;
}
