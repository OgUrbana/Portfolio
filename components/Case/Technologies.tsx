import Link from 'next/link';

import { Tech } from './types';

import NextIcon from '@/public/cases/tech/next.svg';
import TypeScriptIcon from '@/public/cases/tech/ts.svg';
import CSSIcon from '@/public/cases/tech/css.svg';
import ReactIcon from '@/public/cases/tech/react.svg';
import HTMLIcon from '@/public/cases/tech/html.svg';
import MotionIcon from '@/public/cases/tech/motion.svg';
import TailwindIcon from '@/public/cases/tech/tailwind.svg';
import GithubIcon from '@/public/cases/tech/github.svg';
import GitIcon from '@/public/cases/tech/git.svg';
import NodeIcon from '@/public/cases/tech/node.svg';
import SupabaseIcon from 'public/cases/tech/supabase.svg';

const techDefs = [
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
  { name: 'github', icon: GithubIcon, link: 'https://github.com/OgUrbana' },
  { name: 'git', icon: GitIcon, link: 'https://git-scm.com/' },
  { name: 'node', icon: NodeIcon, link: 'https://nodejs.org/en' },
  { name: 'supabase', icon: SupabaseIcon, link: 'https://supabase.com/' },
];

const Technologies = ({ tech }: { tech: Tech[] }) => {
  // Filter for only technologies listed
  const filteredTech = techDefs.filter((techDef) =>
    tech.includes(techDef.name as Tech),
  );

  // Sort it in the order listed
  filteredTech.sort((a, b) => {
    const indexA = tech.indexOf(a.name as Tech);
    const indexB = tech.indexOf(b.name as Tech);
    return indexA - indexB;
  });

  return (
    <figure className='flex h-fit w-fit flex-wrap justify-center gap-8 rounded-xl bg-background-2 p-4 lg:rounded-full'>
      {filteredTech.map((tech) => (
        <Link href={tech.link} key={tech.name} aria-label={tech.name}>
          <tech.icon
            className={`default-animation h-8 w-8 hover:scale-125 ${
              tech.name === 'next' ? 'fill-black dark:fill-white' : ''
            } `}
          />
        </Link>
      ))}
    </figure>
  );
};

export default Technologies;
