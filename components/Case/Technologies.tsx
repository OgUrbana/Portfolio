import Link from 'next/link';

import {
  NextIcon,
  TypeScriptIcon,
  CSSIcon,
  ReactIcon,
  HTMLIcon,
  MotionIcon,
  TailwindIcon,
  GithubTechIcon,
  GitIcon,
  NodeIcon,
  SupabaseIcon,
} from '@/utils';
import { Tech } from '@/utils/type';

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
  { name: 'github', icon: GithubTechIcon, link: 'https://github.com/OgUrbana' },
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
