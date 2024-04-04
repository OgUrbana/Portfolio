import { ContactRight, EclipseLeft } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const GetInTouch = () => {
  return (
    <section className='padding-layout relative flex justify-center pb-16'>
      <div className='relative h-80 rounded-3xl bg-secondary'>
        <Image
          src={EclipseLeft}
          priority
          alt='Contact Banner SemiCircle'
          className='absolute left-0 h-full rounded-3xl'
        />
        <Image
          src={ContactRight}
          priority
          alt='Contact Banner Random Shapes'
          className='absolute right-0 h-full rounded-3xl'
        />
        <div className='relative z-10 flex h-full flex-col items-center justify-center gap-4 px-10 lg:flex-row lg:justify-between lg:px-16'>
          <h3 className='w-full font-extrabold text-black md:w-2/3'>
            Have a project in mind? that required technical expertise?
          </h3>
          <Link
            href='/contact'
            className='default-animation w-full rounded-full bg-primary px-5 py-3 text-white hover:scale-105 hover:bg-primary/80 dark:hover:bg-blue-700 md:w-fit'
          >
            Get in Touch with me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
