import DiscoveryArticle from './DiscoveryArticle';

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
      <DiscoveryArticle challenge discoveries={challenges} />
      <DiscoveryArticle discoveries={learnings} />
    </section>
  );
};

export default CaseDiscovery;
