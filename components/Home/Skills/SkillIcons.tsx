const SkillIcons = ({ icons }: { icons: any[] }) => {
  return (
    <div className='flex max-w-3xl flex-wrap items-center justify-center gap-8'>
      {icons.map((Component, key) => (
        <figure
          key={key}
          className='group shrink-0 cursor-pointer rounded-full p-5 transition ease-in-out hover:scale-105 dark:bg-black-300'
        >
          <Component className='h-8 w-8 transition ease-in-out group-hover:scale-125 group-hover:grayscale-0 lg:grayscale' />
        </figure>
      ))}
    </div>
  );
};

export default SkillIcons;
