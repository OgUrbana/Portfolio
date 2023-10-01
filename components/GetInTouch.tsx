const GetInTouch = () => {
  return (
    <section className='padding-layout flex justify-center'>
      <div className='h-80 rounded-3xl bg-secondary bg-BGSmall bg-contain sm:bg-BGLarge'>
        <div className='flex h-full flex-col items-center justify-center gap-4 px-10 lg:flex-row lg:justify-between lg:px-16 '>
          <h3 className='w-full font-extrabold text-black md:w-2/3'>
            Have a project in mind? that required technical expertise?
          </h3>
          <button className='w-full rounded-full bg-primary px-5 py-3 md:w-fit'>
            Get in Touch with me
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
