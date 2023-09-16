import TypeScriptIcon from '@/public/icons/cases/tech/ts.svg';

const TechItem = () => {
  return (
    <article className='w-full'>
      <hgroup className='flex items-center gap-2'>
        <TypeScriptIcon className='h-6 w-6' />
        <h4 className='text-xl'>TypeScript</h4>
      </hgroup>
    </article>
  );
};

export default TechItem;
