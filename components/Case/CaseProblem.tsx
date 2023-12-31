import Image, { StaticImageData } from 'next/image';

const CaseProblem = ({
  problem,
}: {
  problem: { statement: string; problemImage: StaticImageData };
}) => {
  const { statement, problemImage } = problem;
  return (
    <section className='bg-background-1'>
      <div className='padding-layout flex flex-col gap-6 px-16 pt-12 xl:px-72'>
        <div className='flex flex-col gap-2'>
          <small className='bold text-primary'>Problem</small>
          <h3>Problem Statement</h3>
        </div>
        <p className='paragraph font-light text-white-500 dark:text-white-800'>
          {statement}
        </p>
        <Image
          src={problemImage}
          alt='placeholder problem image'
          className='rounded-2xl'
          priority
        />
      </div>
    </section>
  );
};

export default CaseProblem;
