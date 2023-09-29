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
import TypeScriptIcon from '@/public/cases/tech/ts.svg';
import NextIcon from '@/public/cases/tech/next.svg';
import CSSIcon from '@/public/cases/tech/css.svg';
import ReactIcon from '@/public/cases/tech/react.svg';
import HTMLIcon from '@/public/cases/tech/html.svg';
import MotionIcon from '@/public/cases/tech/motion.svg';
import TailwindIcon from '@/public/cases/tech/tailwind.svg';
import GithubTechIcon from '@/public/cases/tech/github.svg';
import GitIcon from '@/public/cases/tech/git.svg';
import NodeIcon from '@/public/cases/tech/node.svg';
import SupabaseIcon from 'public/cases/tech/supabase.svg';
import AllMight from '@/public/people/allmight.jpg';
import PlaceholderUser from '@/public/people/placeholder-user.jpg';
import ArrowLeft from '@/public/icons/arrow-left.svg';
import ArrowRight from '@/public/icons/arrow-right.svg';
import FullStar from '@/public/icons/fullstar.svg';
import AnalyticsIcon from '@/public/icons/services/analytics.svg';
import MonitorIcon from '@/public/icons/services/monitor.svg';
import ServerIcon from '@/public/icons/services/server.svg';
import OptimizeIcon from '@/public/icons/services/optimize.svg';
import InstagramIcon from '@/public/icons/social/instagram.svg';
import XIcon from '@/public/icons/social/x.svg';
import LinkedInIcon from '@/public/icons/social/linkedin.svg';
import GithubSocialIcon from '@/public/icons/social/github.svg';
import PhoneIcon from '@/public/phone.svg';
import EmailIcon from '@/public/email.svg';

export * from './components';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const reviews = [
  {
    name: 'All Might',
    image: AllMight,
    title: 'Teacher at U.A & Number 1 Hero',
    rating: 5,
    review:
      'It was a pleasure working with Matthew as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in many modern languages and framerworks. He is very hard working and always goes beyond PLUS ULTRA!',
  },
  {
    name: '- Mom',
    image: PlaceholderUser,
    rating: 5,
    title: 'My Wonderful Mom',
    review:
      'Very handsome, very nice and very respectable. Always babysits when we asks him. Smartest in the world! He always helps around the house and always fixes everything that breaks. He is an IT genius!',
  },
];

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
  TypeScriptIcon,
  NextIcon,
  CSSIcon,
  ReactIcon,
  HTMLIcon,
  MotionIcon,
  TailwindIcon,
  GithubTechIcon,
  GitIcon,
  NodeIcon,
  SupabaseIcon,
  ArrowLeft,
  ArrowRight,
  FullStar,
  AnalyticsIcon,
  MonitorIcon,
  ServerIcon,
  OptimizeIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
  GithubSocialIcon,
  PhoneIcon,
  EmailIcon,
};

export const techDefs = [
  { name: 'next', icon: NextIcon, link: 'https://www.nextjs.org' },
  {
    name: 'typescript',
    icon: TypeScriptIcon,
    link: 'https://www.typescriptlang.org',
  },
  { name: 'css', icon: CSSIcon, link: 'https://www.w3schools.com/css/' },
  { name: 'react', icon: ReactIcon, link: 'https://www.react.dev/' },
  { name: 'html', icon: HTMLIcon, link: 'https://www.w3schools.com/html/' },
  { name: 'motion', icon: MotionIcon, link: 'https://www.framer.com/motion/' },
  { name: 'tailwind', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
  { name: 'github', icon: GithubTechIcon, link: 'https://github.com/OgUrbana' },
  { name: 'git', icon: GitIcon, link: 'https://git-scm.com/' },
  { name: 'node', icon: NodeIcon, link: 'https://nodejs.org/en' },
  { name: 'supabase', icon: SupabaseIcon, link: 'https://supabase.com/' },
];

export const services = [
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

export const contactQuestions = [
  {
    question: "What's your name?",
    type: 'text',
    name: 'name',
    invalid: 'Please enter your Full Name',
  },
  {
    question: "What's your email?",
    type: 'email',
    name: 'email',
    invalid: 'Please enter your Email',
    mismatch: 'Please enter a valid Email.',
  },
  {
    question: 'Write something about your project goals and timeframe',
    type: 'text',
    name: 'project',
    invalid: 'Please enter information about your project.',
  },
  {
    question: 'How to reach out to you back?',
    exempli: ' eg. phone number or email',
    type: 'text',
    name: 'contact',
    invalid: 'Let me know how I can reach you.',
  },
];
