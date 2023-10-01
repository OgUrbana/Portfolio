const GetInTouch = () => {
  return (
    <section className='padding-layout flex justify-center pb-16'>
      <div className='h-80 rounded-3xl bg-secondary bg-BGSmall bg-contain sm:bg-BGLarge'>
        <div className='flex h-full flex-col items-center justify-center gap-4 px-10 lg:flex-row lg:justify-between lg:px-16 '>
          <h3 className='w-full font-extrabold text-black md:w-2/3'>
            Have a project in mind? that required technical expertise?
          </h3>
          <button className='default-animation w-full rounded-full bg-primary px-5 py-3 text-white hover:scale-105 hover:bg-primary/80 dark:hover:bg-blue-700 md:w-fit'>
            Get in Touch with me
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
