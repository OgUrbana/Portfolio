import Image from 'next/image';
import Link from 'next/link';

import Morrent from '@/public/projects/morrent.png';
import GithubIcon from '@/public/cases/github.svg';
import RightArrow from '@/public/cases/arrowright.svg';
import GlobeIcon from '@/public/cases/globe.svg';
import Technologies from '@/components/Case/Technologies';
import MorrentProblem from '@/public/cases/morrentproblem.png';
import ChallengeIcon from '@/public/cases/challenge.png';
import SuccessIcon from '@/public/cases/success.png';
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
import JobitCase from '@/public/cases/projects/jobit.png';
import { classNames } from '@/utils';

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

const description = [
  'Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.',
  'My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles.',
  "Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze",
];

const challenges = [
  'Working with a team for the first time was a difficult challenge to overcome. Merge conflicts, conflicting ideas, and coming to a mutual decision. As well as assigning tasks and creating opportunity for everyone.',
  'We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS & Supabase was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.',
  'Out of Date and bad documentation was a big struggle to overcome. Often times we found ourselves digging deeper and deeper to find the true solution',
];

const learnings = [
  'Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols RLS.',
  'Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.',
  "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.",
  'Acquired proficiency in NextJS, React, Supabase, and implemented various features utilizing industry-standard best practices.',
];

const projects = [
  {
    name: 'Jobit',
    link: '/case/jobit',
    image: JobitCase,
    desc: 'Jobit, a web app made with React, NextJS and JSearch API, links developers to millions of job openings. It offers easy job search by displaying relevant jobs',
  },
];

// <article className='flex flex-col rounded-xl bg-background-1'>
//                 <Image
//                   priority
//                   src={JobitCase}
//                   alt='Jobit'
//                   className='rounded-t-xl'
//                 />
//                 <section className='flex flex-col gap-2 p-6'>
//                   <small className='base-bold text-primary'>JobIt</small>
//                   <p className='line-clamp-3 text-lg font-light text-white-500 dark:text-white'>
//                     Jobit, a web app made with React, NextJS and JSearch API,
//                     links developers to millions of job openings. It offers easy
//                     job search by displaying relevant jobs
//                   </p>
//                   <Link
//                     href='/case/jobit'
//                     className='w-fit place-self-end rounded-full bg-primary px-3 py-2 text-center text-white'
//                   >
//                     See Case Study
//                   </Link>
//                 </section>
//               </article>

const Page = () => {
  return (
    <section>
      <section className='my-16 flex flex-col items-center justify-center gap-6 text-center'>
        <hgroup className='flex flex-col gap-4'>
          <small className='text-base font-semibold tracking-widest text-primary md:text-lg'>
            WEB DEV PROJECT
          </small>
          <h1 className='text-5xl md:text-6xl'>
            <span className='text-secondary'>Morrent</span> - A Car Rental
            Website
          </h1>
        </hgroup>
        <Image
          src={Morrent}
          priority
          alt='Mobile & Desktop Morrent Preview'
          className='p-3'
        />
        <section className='flex items-center justify-center gap-12 md:gap-32'>
          <Link
            href='/'
            className='default-animation group flex items-center gap-2 text-primary hover:text-primary/60'
          >
            <GlobeIcon className='default-animation fill-primary group-hover:fill-primary/60' />
            <p>Demo Site</p>
            <RightArrow className='default-animation stroke-primary group-hover:stroke-primary/60' />
          </Link>
          <Link
            href='https://github.com/JavaScript-Mastery-PRO/Cohort5_DivineDomain_CarRent'
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
              <h4 className='text-xl'>Software Engineer</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                Start Date
              </small>
              <h4 className='text-xl'>08/08/2023</h4>
            </hgroup>
            <hgroup>
              <small className='text-lg font-semibold text-black-400'>
                End Date
              </small>
              <h4 className='text-xl'>09/03/2023</h4>
            </hgroup>
          </section>
          <section>
            <hgroup className='flex flex-col gap-2'>
              <small className='bold text-primary'>Technologies used</small>
              <h3>Tech Stack</h3>
              <section className='pt-2'>
                <Technologies
                  tech={[
                    'react',
                    'next',
                    'typescript',
                    'motion',
                    'tailwind',
                    'html',
                    'css',
                    'supabase',
                    'git',
                    'github',
                    'node',
                  ]}
                />
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
            One of the main problems that people face when looking to rent a car
            is the hassle of finding a reliable and user-friendly platform to
            search for and book rental cars. In addition, car owners who want to
            rent out their vehicles often struggle to find a suitable platform
            to list their cars and manage their rentals.
          </p>
          <Image
            src={MorrentProblem}
            alt='Cars Image'
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
                    src={JobitCase}
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

export default Page;
