import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { classNames } from '@/utils';
import Technologies from './Technologies';
import { Tech } from './types';

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

const workProcess = [
  {
    lightIcon: DefLightIcon,
    darkIcon: DefIcon,
    name: 'Definition',
    alt: 'Definition Icon',
  },
  {
    lightIcon: DesignLightIcon,
    darkIcon: DesignIcon,
    name: 'Design',
    alt: 'Design Icon',
  },
  {
    lightIcon: PlanLightIcon,
    darkIcon: PlanIcon,
    name: 'Planning',
    alt: 'Planning Icon',
  },
  {
    lightIcon: DevLightIcon,
    darkIcon: DevIcon,
    name: 'Development',
    alt: 'Development Icon',
  },
  {
    lightIcon: DeployLightIcon,
    darkIcon: DeployIcon,
    name: 'Deployment',
    alt: 'Deployment Icon',
  },
];

const CaseLayout = ({
  name,
  preview,
  hero: { title, tag, demoLink, source },
  info: { role, start, end },
  tech,
  description,
  problem: { statement, problemImage },
  challenges,
  learnings,
  projects,
}: {
  name: string;
  preview: StaticImageData;
  hero: {
    title: string;
    tag: string;
    demoLink: string;
    source: string;
  };
  info: {
    role: string;
    start: string;
    end: string;
  };
  tech: Tech[];
  description: string[];
  problem: {
    statement: string;
    problemImage: StaticImageData;
  };
  challenges: string[];
  learnings: string[];
  projects: {
    name: string;
    link: string;
    image: StaticImageData;
    desc: string;
  }[];
}) => {
  return (
    <section>
      <section className='my-16 flex flex-col items-center justify-center gap-6 text-center'>
        <hgroup className='flex flex-col gap-4'>
          <small className='text-base font-semibold uppercase tracking-widest text-primary md:text-lg'>
            {title}
          </small>
          <h1 className='text-5xl md:text-6xl'>
            <span className='text-secondary'>{name} </span> {tag}
          </h1>
        </hgroup>
        <Image
          src={preview}
          priority
          alt='Mobile & Desktop Preview'
          className='p-3'
        />
        <section className='flex items-center justify-center gap-12 md:gap-32'>
          <Link
            href={demoLink}
            className='default-animation group flex items-center gap-2 text-primary hover:text-primary/60'
          >
            <GlobeIcon className='default-animation fill-primary group-hover:fill-primary/60' />
            <p>Demo Site</p>
            <RightArrow className='default-animation stroke-primary group-hover:stroke-primary/60' />
          </Link>
          <Link
            href={source}
            className='default-animation group flex items-center gap-2 text-primary hover:text-primary/60'
          >
            <GithubIcon className='default-animation fill-primary group-hover:fill-primary/60' />
            <p>Source Code</p>
            <RightArrow className='default-animation stroke-primary group-hover:stroke-primary/60' />
          </Link>
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-12 p-16 xl:px-72'>
          <section className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-0'>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                My Role
              </small>
              <h4 className='text-xl'>{role}</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                Start Date
              </small>
              <h4 className='text-xl'>{start}</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                End Date
              </small>
              <h4 className='text-xl'>{end}</h4>
            </hgroup>
          </section>
          <section>
            <hgroup className='flex flex-col gap-2'>
              <small className='bold text-primary'>Technologies used</small>
              <h3>Tech Stack</h3>
              <section className='pt-2'>
                <Technologies tech={tech} />
              </section>
            </hgroup>
          </section>
        </section>
      </section>
      <section className='bg-background-2'>
        <section className='padding-layout flex flex-col gap-12 p-16 text-white-500 dark:text-white-800 xl:px-72'>
          {description.map((desc, index) => (
            <p key={`desc-${index}`} className='paragraph font-light'>
              {desc}
            </p>
          ))}
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-6 px-16 pt-12 xl:px-72'>
          <hgroup className='flex flex-col gap-2'>
            <small className='bold text-primary'>Problem</small>
            <h3>Problem Statement</h3>
          </hgroup>
          <p className='paragraph font-light text-white-500 dark:text-white-800'>
            {statement}
          </p>
          <Image
            src={problemImage}
            alt='placeholder problem image'
            className='rounded-2xl'
            priority
          />
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
          <hgroup className='flex flex-col gap-2'>
            <small className='bold text-primary'>Way of work</small>
            <h3>My Process</h3>
          </hgroup>
          <section className='flex justify-between'>
            {workProcess.map((step, index) => (
              <figure
                className='flex flex-col items-center gap-6'
                key={`process-${index}`}
              >
                <span className='rounded-full bg-background-2 p-5'>
                  <Image
                    src={step.darkIcon}
                    alt={step.alt}
                    className='hidden dark:block'
                  />
                  <Image
                    src={step.lightIcon}
                    alt={step.alt}
                    className='dark:hidden'
                  />
                </span>
                <figcaption className='paragraphBold'>{step.name}</figcaption>
              </figure>
            ))}
          </section>
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
          <hgroup className='flex flex-col gap-2'>
            <small className='bold text-primary'>Discovery</small>
            <h3>Challenges & Learnings</h3>
          </hgroup>
          <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
            <small className='paragraph text-lg !font-semibold uppercase leading-7 text-[#E15A46]'>
              Challenges
            </small>
            <section className='flex flex-col gap-6'>
              {challenges.map((challenge, index) => (
                <section key={`challenge-${index}`} className='flex gap-3'>
                  <Image
                    src={ChallengeIcon}
                    className='mt-1 h-6 w-6'
                    alt='Target'
                  />
                  <small className='h-fit w-fit text-lg text-white-500 dark:text-white'>
                    {challenge}
                  </small>
                </section>
              ))}
            </section>
          </article>
          <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
            <small className='paragraph text-lg !font-semibold uppercase leading-7 text-[#02BC7D]'>
              Learnings
            </small>
            <section className='flex flex-col gap-6'>
              {learnings.map((lesson, index) => (
                <section key={`challenge-${index}`} className='flex gap-3'>
                  <Image
                    src={SuccessIcon}
                    className='mt-1 h-6 w-6'
                    alt='Target'
                  />
                  <small className='h-fit w-fit text-lg text-white-500 dark:text-white'>
                    {lesson}
                  </small>
                </section>
              ))}
            </section>
          </article>
        </section>
        <section className='bg-background-2'>
          <section className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
            <hgroup className='flex flex-col gap-2'>
              <small className='bold text-primary'>Projects</small>
              <h3>Other Case Studies</h3>
            </hgroup>
            <section className='flex flex-col gap-4 md:flex-row'>
              {projects.map((project, index) => (
                <article
                  key={`project-${index}`}
                  className='flex flex-col rounded-xl bg-background-1'
                >
                  <Image
                    priority
                    src={project.image}
                    alt={project.name}
                    className='rounded-t-xl'
                  />
                  <section className='flex flex-col gap-2 p-6'>
                    <small className='base-bold text-primary'>JobIt</small>
                    <p className='line-clamp-3 text-lg font-light text-white-500 dark:text-white'>
                      {project.desc}
                    </p>
                    <Link
                      href={project.link}
                      className={classNames(
                        'rounded-full bg-primary px-3 py-2 text-center text-white default-animation hover:bg-primary/70 hover:scale-105',
                        projects.length > 1
                          ? 'w-full'
                          : 'w-full lg:w-fit lg:place-self-end',
                      )}
                      aria-label={`Case-${project.name}`}
                    >
                      See Case Study
                    </Link>
                  </section>
                </article>
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CaseLayout;
