import { workProcess } from '@/utils/cases';
import Image from 'next/image';

const Process = () => {
  return (
    <section className='bg-background-1'>
      <div className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
        <div className='flex flex-col gap-2'>
          <small className='bold text-primary'>Way of work</small>
          <h3>My Process</h3>
        </div>
        <div className='flex flex-wrap justify-center gap-8 lg:justify-between'>
          {workProcess.map((step, index) => (
            <figure
              className='flex flex-col items-center gap-6'
              key={`process-${index}`}
            >
              <span className='rounded-full bg-background-2 p-5'>
                <Image
                  src={step.darkIcon}
                  alt={step.alt}
                  className='hidden dark:block'
                />
                <Image
                  src={step.lightIcon}
                  alt={step.alt}
                  className='dark:hidden'
                />
              </span>
              <figcaption className='smallBold md:paragraphBold'>
                {step.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
