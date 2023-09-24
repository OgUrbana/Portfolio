import { Case } from '@/utils/type';
import Technologies from './Technologies';

const CaseStats = ({ data }: { data: Case }) => {
  const { info, tech } = data;
  const { role, start, end } = info;

  return (
    <section className='bg-background-1'>
      <div className='padding-layout flex flex-col gap-12 p-16 xl:px-72'>
        <div className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-0'>
          <div>
            <small className='text-lg font-semibold text-black-400'>
              My Role
            </small>
            <h4 className='text-2xl'>{role}</h4>
          </div>
          <div>
            <small className='text-lg font-semibold text-black-400'>
              Start Date
            </small>
            <h4 className='text-2xl'>{start}</h4>
          </div>
          <div>
            <small className='text-lg font-semibold text-black-400'>
              End Date
            </small>
            <h4 className='text-2xl'>{end}</h4>
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-2'>
            <small className='bold text-primary'>Technologies used</small>
            <h3>Tech Stack</h3>
            <div className='pt-2'>
              <Technologies tech={tech} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStats;
