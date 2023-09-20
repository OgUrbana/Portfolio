import { Case } from '@/utils/type';
import Technologies from './Technologies';

const CaseStats = ({ data }: { data: Case }) => {
  const { info, tech } = data;
  const { role, start, end } = info;

  return (
    <section className='bg-background-1'>
      <section className='padding-layout flex flex-col gap-12 p-16 xl:px-72'>
        <section className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-0'>
          <hgroup>
            <small className='text-lg font-semibold text-black-400'>
              My Role
            </small>
            <h4 className='text-xl'>{role}</h4>
          </hgroup>
          <hgroup>
            <small className='text-lg font-semibold text-black-400'>
              Start Date
            </small>
            <h4 className='text-xl'>{start}</h4>
          </hgroup>
          <hgroup>
            <small className='text-lg font-semibold text-black-400'>
              End Date
            </small>
            <h4 className='text-xl'>{end}</h4>
          </hgroup>
        </section>
        <section>
          <hgroup className='flex flex-col gap-2'>
            <small className='bold text-primary'>Technologies used</small>
            <h3>Tech Stack</h3>
            <section className='pt-2'>
              <Technologies tech={tech} />
            </section>
          </hgroup>
        </section>
      </section>
    </section>
  );
};

export default CaseStats;
