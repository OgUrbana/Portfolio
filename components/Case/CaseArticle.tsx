import { classNames } from '@/utils';
import Link from 'next/link';

const CaseArticle = () => {
  return (
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
  );
};

export default CaseArticle;
