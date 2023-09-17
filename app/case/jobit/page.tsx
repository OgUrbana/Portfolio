import CaseLayout from '@/components/Case/CaseLayout';
import { getProjects } from '@/utils';

import Jobit from '@/public/projects/jobit.png';
import MorrentProblem from '@/public/cases/morrentproblem.png';

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

const projects = getProjects(['morrent']);

const Page = () => {
  return (
    <CaseLayout
      name='Jobit'
      preview={Jobit}
      hero={{
        title: 'web dev project',
        tag: '- A Job Finding Platform',
        demoLink: 'https://cohort5-divine-domain-job-it.vercel.app/',
        source:
          'https://github.com/JavaScript-Mastery-PRO/Cohort5_DivineDomain_JobIt',
      }}
      info={{
        role: 'Software Developer',
        start: '07/10/2023',
        end: '08/06/2023',
      }}
      tech={[
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
      ]}
      description={description}
      problem={{
        statement:
          'One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.',
        problemImage: MorrentProblem,
      }}
      challenges={challenges}
      learnings={learnings}
      projects={projects}
    />
  );
};

export default Page;
