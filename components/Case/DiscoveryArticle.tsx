import { Challenge, Lesson } from '.';

const DiscoveryArticle = ({
  challenge = false,
  discoveries,
}: {
  challenge?: boolean;
  discoveries: string[];
}) => {
  return (
    <article className='flex flex-col gap-6 rounded-xl bg-background-2 px-6 py-10 lg:px-12'>
      <small
        className={`paragraph text-lg !font-semibold uppercase leading-7 ${
          challenge ? 'text-challenge' : 'text-success'
        }`}
      >
        {challenge ? 'Challenges' : 'Learnings'}
      </small>
      <div className='flex flex-col gap-6'>
        {discoveries.map((discovery, index) =>
          challenge ? (
            <Challenge challenge={discovery} key={`challenge-${index}`} />
          ) : (
            <Lesson lesson={discovery} key={`lesson-${index}`} />
          ),
        )}
      </div>
    </article>
  );
};

export default DiscoveryArticle;
