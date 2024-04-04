import Image from 'next/image';

import { Case } from '@/types';

const CaseHero = ({ data }: { data: Case }) => {
  const { name, preview, hero } = data;
  const { title, tag } = hero;

  return (
    <section className='my-16 flex flex-col items-center justify-center gap-6 text-center'>
      <div className='flex flex-col gap-4'>
        <small className='text-base font-semibold uppercase tracking-widest text-primary md:text-lg'>
          {title}
        </small>
        <h1 className='text-5xl md:text-6xl'>
          <span className='text-secondary'>{name} </span> {tag}
        </h1>
      </div>
      <Image
        src={preview}
        priority
        alt='Mobile & Desktop Preview'
        className='p-3'
      />
      {/* <div className='flex items-center justify-center gap-12 md:gap-32'>
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
      </div> */}
    </section>
  );
};

export default CaseHero;
