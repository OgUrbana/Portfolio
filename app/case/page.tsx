import Image from 'next/image';

import Morrent from '@/public/projects/desktop/morrent.png';
import Jobit from '@/public/projects/desktop/Jobit.png';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import { classNames } from '@/utils';

const cases = [
  {
    title: 'Morrent',
    desc: 'Car Rental Application',
    image: Morrent,
    color: 'primary',
    link: '/case/morrent',
  },
  {
    title: 'Jobit',
    desc: 'Job Finding Application',
    image: Jobit,
    color: 'jobit',
    link: '/case/jobit',
  },
];
const Page = () => {
  return (
    <section className='flex flex-col gap-8'>
      <section className='padding-layout'>
        <section className='flex justify-center text-center'>
          <hgroup className='flex w-[80%] flex-col gap-6 md:my-12 xl:w-[55%]'>
            <h1 className='text-4xl md:text-6xl'>
              Recent <span className='text-secondary'>Case Studies</span>
            </h1>
            <p className='small md:paragraph text-white-500 dark:text-white'>
              {
                "Dive into my recent success stories and discover how I've helped clients overcome challenges, innovate, and achieve their goals"
              }
            </p>
          </hgroup>
        </section>
      </section>
      <section className='bg-background-1'>
        <section className='padding-layout flex flex-col place-items-center justify-center gap-8 pt-20 md:grid-cols-2 md:flex-row md:gap-12'>
          {cases.map((study, index) => (
            <Link href={study.link} key={`study-${index}`}>
              <article className='default-animation group flex w-full flex-col justify-center hover:scale-105 md:w-fit lg:w-[90%]'>
                <figure
                  className={`h-fit w-fit cursor-pointer rounded-xl px-12 pt-16 ${
                    'bg-' + study.color
                  }`}
                >
                  <Image src={study.image} alt='Morrent Laptop Preview' />
                </figure>
                <hgroup className='pl-12 pt-6'>
                  <h3
                    className={classNames(
                      'default-animation',
                      `group-hover:text-${study.color}`,
                    )}
                  >
                    {study.title}
                  </h3>
                  <p className='text-white-500'>{study.desc}</p>
                </hgroup>
              </article>
            </Link>
          ))}
        </section>
        <GetInTouch />
      </section>
    </section>
  );
};

export default Page;
