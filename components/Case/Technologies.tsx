import Link from 'next/link';

import { techDefs } from '@/utils';
import { Tech } from '@/utils/type';

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
