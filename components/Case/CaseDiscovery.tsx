import { Challenge, Lesson } from '.';

const CaseDiscovery = ({
  challenges,
  learnings,
}: {
  challenges: string[];
  learnings: string[];
}) => {
  return (
    <section className='padding-layout flex flex-col gap-6 p-16 xl:px-72'>
      <div className='flex flex-col gap-2'>
        <small className='bold text-primary'>Discovery</small>
        <h3>Challenges & Learnings</h3>
      </div>
      <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
        <small className='paragraph text-lg !font-semibold uppercase leading-7 text-[#E15A46]'>
          Challenges
        </small>
        <section className='flex flex-col gap-6'>
          {challenges.map((challenge, index) => (
            <Challenge challenge={challenge} key={`challenge-${index}`} />
          ))}
        </section>
      </article>
      <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
        <small className='paragraph text-lg !font-semibold uppercase leading-7 text-[#02BC7D]'>
          Learnings
        </small>
        <section className='flex flex-col gap-6'>
          {learnings.map((lesson, index) => (
            <Lesson lesson={lesson} key={`lesson-${index}`} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default CaseDiscovery;
