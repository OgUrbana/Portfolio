const CaseDesc = ({ description }: { description: string[] }) => {
  return (
    <section className='bg-background-2'>
      <div className='padding-layout flex flex-col gap-12 p-16 text-white-500 dark:text-white-800 xl:px-72'>
        {description.map((desc, index) => (
          <p key={`desc-${index}`} className='paragraph font-light'>
            {desc}
          </p>
        ))}
      </div>
    </section>
  );
};

export default CaseDesc;
