import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { classNames } from '@/utils';

const CasePreviews = ({
  project,
}: {
  project: {
    image: StaticImageData;
    name: string;
    desc: string;
    link: string;
    length: number;
  };
}) => {
  const { image, name, desc, link, length } = project;

  return (
    <article className='flex flex-col rounded-xl bg-background-1'>
      <Image priority src={image} alt={name} className='rounded-t-xl' />
      <section className='flex flex-col gap-2 p-6'>
        <small className='base-bold text-primary'>JobIt</small>
        <p className='line-clamp-3 text-lg font-light text-white-500 dark:text-white'>
          {desc}
        </p>
        <Link
          href={link}
          className={classNames(
            'rounded-full bg-primary px-3 py-2 text-center text-white default-animation hover:bg-primary/70 hover:scale-105',
            length > 1 ? 'w-full' : 'w-full lg:w-fit lg:place-self-end',
          )}
          aria-label={`Case-${name}`}
        >
          See Case Study
        </Link>
      </section>
    </article>
  );
};

export default CasePreviews;
