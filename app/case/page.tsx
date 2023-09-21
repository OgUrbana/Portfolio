import GetInTouch from '@/components/GetInTouch';
import Study from '@/components/Case/Study';
import { cases } from '@/utils';

const Page = () => {
  return (
    <section className='flex flex-col gap-8'>
      <section className='padding-layout'>
        <div className='flex justify-center text-center'>
          <div className='flex w-[80%] flex-col gap-6 md:my-12 xl:w-[55%]'>
            <h1 className='text-4xl md:text-6xl'>
              Recent <span className='text-secondary'>Case Studies</span>
            </h1>
            <p className='small md:paragraph text-white-500 dark:text-white'>
              {
                "Dive into my recent success stories and discover how I've helped clients overcome challenges, innovate, and achieve their goals"
              }
            </p>
          </div>
        </div>
      </section>
      <section className='bg-background-1'>
        <div className='padding-layout flex flex-col place-items-center justify-center gap-8 pt-20 md:grid-cols-2 md:flex-row md:gap-12'>
          {cases.map((study) => (
            <Study
              study={study}
              key={`study-${study.title.toLocaleLowerCase()}`}
            />
          ))}
        </div>
        <GetInTouch />
      </section>
    </section>
  );
};

export default Page;
