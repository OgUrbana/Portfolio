import Link from 'next/link';
import Image from 'next/image';

import { ChallengeIcon, SuccessIcon, classNames } from '@/utils';
import { Case } from '@/utils/type';
import { workProcess } from '@/utils/cases';
import CaseHero from './CaseHero';
import CaseStats from './CaseStats';
import CaseDesc from './CaseDesc';

const CaseLayout = ({ data }: { data: Case }) => {
  const {
    description,
    problem: { statement, problemImage },
    challenges,
    learnings,
    projects,
  } = data;
  return (
    <section>
      <CaseHero data={data} />
      <CaseStats data={data} />
      <CaseDesc description={description} />
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
          <section className='flex flex-wrap justify-center gap-8 lg:justify-between'>
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
                <figcaption className='smallBold md:paragraphBold'>
                  {step.name}
                </figcaption>
              </figure>
            ))}
          </section>
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
          <div className='flex flex-col gap-2'>
            <small className='bold text-primary'>Discovery</small>
            <h3>Challenges & Learnings</h3>
          </div>
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
