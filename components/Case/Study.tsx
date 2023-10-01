import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { classNames } from '@/utils';

const Study = ({
  study,
}: {
  study: {
    link: string;
    color: string;
    image: StaticImageData;
    desc: string;
    title: string;
  };
}) => {
  const { link, color, image, desc, title } = study;
  const textColorVariants: any = {
    jobit: 'group-hover:text-jobit',
    primary: 'group-hover:text-primary',
  };
  const bgColorVariants: any = {
    primary: 'bg-primary',
    jobit: 'bg-jobit',
  };

  return (
    <Link href={link}>
      <article className='default-animation group flex w-full flex-col justify-center hover:scale-105 md:w-fit lg:w-[90%]'>
        <figure
          className={classNames(
            'h-fit w-fit cursor-pointer rounded-xl px-8 pt-16',
            bgColorVariants[color],
          )}
        >
          <Image src={image} alt='Morrent Laptop Preview' />
        </figure>
        <hgroup className='pl-12 pt-6'>
          <h3
            className={classNames(
              'default-animation',
              textColorVariants[color],
            )}
          >
            {title}
          </h3>
          <p className='text-white-500'>{desc}</p>
        </hgroup>
      </article>
    </Link>
  );
};

export default Study;
