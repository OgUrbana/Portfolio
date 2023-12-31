import { Case } from '@/types';
import {
  CaseHero,
  CaseStats,
  CaseDesc,
  CaseProblem,
  Process,
  CaseDiscovery,
} from '.';
import CasePreviews from './CasePreviews';

const CaseLayout = ({ data }: { data: Case }) => {
  const { description, problem, challenges, learnings, projects } = data;
  return (
    <section>
      <CaseHero data={data} />
      <CaseStats data={data} />
      <CaseDesc description={description} />
      <CaseProblem problem={problem} />
      <Process />
      <section className='bg-background-1'>
        <CaseDiscovery challenges={challenges} learnings={learnings} />
        <div className='bg-background-2'>
          <div className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
            <div className='flex flex-col gap-2'>
              <small className='bold text-primary'>Projects</small>
              <h3>Other Case Studies</h3>
            </div>
            <div className='flex flex-col gap-4 md:flex-row'>
              {projects.map((project, index) => (
                <CasePreviews
                  project={{ ...project, length: projects.length }}
                  key={`case-preview-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseLayout;
