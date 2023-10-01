import { Case } from '@/types';
import { getProjects, Jobit, JobProblem, MorrentProblem } from '..';

export const jobitCase = {
  description: [
    'Jobit, a cutting-edge job finding application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured jobs.',
    'My team and I also developed used IP-API in order to get the users location and find relevant jobs in their area by default.',
    'An all-in-one job finding application that allows you to see salary, company and job information, and apply directly.',
  ],
  challenges: [
    'Working with a team for the first time was a difficult challenge to overcome. Merge conflicts, conflicting ideas, and coming to a mutual decision. As well as assigning tasks and creating opportunity for everyone.',
    'We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS & Supabase was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.',
    'Learning new technologies, and even deciding on one was definitely a difficult process. With the countless number of technologies that could be used on this project we had to figure out what was best for the project, and learn those technologies.',
  ],
  learnings: [
    'Learned how to communicate and work as a team.',
    'Gained extensive knowledge of NextJS, React and reading through documentation efficiently.',
    'Learned how to properly handle dynamic data being rendered on a site.',
    'Acquired proficiency in NextJS, React, Supabase, and implemented various features utilizing industry-standard best practices.',
  ],
  projects: getProjects(['morrent']),
  name: 'Jobit',
  preview: Jobit,
  hero: {
    title: 'web dev project',
    tag: '- A Job Finding Platform',
    demoLink: 'https://cohort5-divine-domain-job-it.vercel.app/',
    source:
      'https://github.com/JavaScript-Mastery-PRO/Cohort5_DivineDomain_JobIt',
  },
  info: {
    role: 'Software Developer',
    start: '07/10/2023',
    end: '08/06/2023',
  },
  tech: [
    'react',
    'next',
    'typescript',
    'motion',
    'tailwind',
    'html',
    'css',
    'git',
    'github',
    'node',
  ],
  problem: {
    statement:
      'The main problem with finding jobs today is searching for the perfect job, that meet each of your requirements. We make it simple by giving you all the tool sthat you need in order to find jobs that you are interested in, as well as filter through those jobs. As well as trying to get as much information as possible from the company and job listing. This can now all be done in one place.',
    problemImage: JobProblem,
  },
} as Case;
