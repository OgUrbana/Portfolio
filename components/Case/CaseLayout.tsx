import Link from 'next/link';
import Image from 'next/image';

import { SuccessIcon, classNames } from '@/utils';
import { Case } from '@/utils/type';
import CaseHero from './CaseHero';
import CaseStats from './CaseStats';
import CaseDesc from './CaseDesc';
import CaseProblem from './CaseProblem';
import Process from './Process';
import Challenge from './Challenge';
import Lesson from './Lesson';

const CaseLayout = ({ data }: { data: Case }) => {
  const { description, problem, challenges, learnings, projects } = data;
  return (
    <section>
      <CaseHero data={data} />
      <CaseStats data={data} />
      <CaseDesc description={description} />
      <CaseProblem problem={problem} />
      <Process />
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
                <Challenge challenge={challenge} key={`challenge-${index}`} />
              ))}
            </section>
          </article>
          <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
            <small className='paragraph text-lg !font-semibold uppercase leading-7 text-[#02BC7D]'>
              Learnings
            </small>
            <section className='flex flex-col gap-6'>
              {learnings.map((lesson, index) => (
                <Lesson lesson={lesson} key={`lesson-${index}`} />
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
