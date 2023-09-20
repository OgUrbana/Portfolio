import { Project } from './type';

import Jobit from '@/public/projects/jobit.png';
import Morrent from '@/public/projects/morrent.png';
import JobitCase from '@/public/cases/projects/jobit.png';
import MorrentCase from '@/public/cases/projects/morrent.png';
import GlobeIcon from '@/public/cases/globe.svg';
import GithubIcon from '@/public/cases/github.svg';
import RightArrow from '@/public/cases/arrowright.svg';
import DefIcon from '@/public/cases/def.png';
import DesignIcon from '@/public/cases/design.png';
import PlanIcon from '@/public/cases/plan.png';
import DevIcon from '@/public/cases/dev.png';
import DeployIcon from '@/public/cases/deploy.png';
import DefLightIcon from '@/public/cases/defLight.png';
import DesignLightIcon from '@/public/cases/designLight.png';
import PlanLightIcon from '@/public/cases/planLight.png';
import DevLightIcon from '@/public/cases/devLight.png';
import DeployLightIcon from '@/public/cases/deployLight.png';
import ChallengeIcon from '@/public/cases/challenge.png';
import SuccessIcon from '@/public/cases/success.png';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const cases = [
  {
    title: 'Morrent',
    desc: 'Car Rental Application',
    image: Morrent,
    color: 'primary',
    link: '/case/morrent',
  },
  {
    title: 'Jobit',
    desc: 'Job Finding Application',
    image: Jobit,
    color: 'jobit',
    link: '/case/jobit',
  },
];

const projects = [
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

export {
  GlobeIcon,
  GithubIcon,
  RightArrow,
  DefIcon,
  DesignIcon,
  PlanIcon,
  DevIcon,
  DeployIcon,
  DefLightIcon,
  DesignLightIcon,
  PlanLightIcon,
  DevLightIcon,
  DeployLightIcon,
  ChallengeIcon,
  SuccessIcon,
  Jobit,
  Morrent,
};
