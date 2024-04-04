const page = () => {
  return (
    <article className='padding-layout mb-10 flex w-full flex-col justify-between gap-8'>
      <h1 className='text-3xl'>Tailwind Cover Letter</h1>
      <address className='flex flex-col not-italic text-gray-500'>
        <span>Matthew Gajo</span>
        <span>9120 John Simmons St</span>
        <span>Frederick, Maryland, 21704</span>
        <a href='mailto:matthew.gajo@gmail.com'>matthew.gajo@gmail.com</a>
        <span>(240) 220-4816</span>
        <span>04/03/2024</span>
      </address>
      <p>Dear Tailwind Labs,</p>
      <p>
        I am writing to express my interest in the Design Engineer position at
        Tailwind Labs. With my strong background in self-taught web development
        and design, I am excited about this opportunity to contribute to your
        team and help create beautiful components, designs, websites and more.
      </p>
      <p>
        In my projects, I have demonstrated my ability to design and build
        modern web applications. One project I am particularly proud of is the
        development of Hipnode, a forum web aplication in a team of 4. On this
        team I played a crucial lead role of reviewing, testing and fixing code.
        As well as develop many of the components. This site boasts a beatiful
        design created with Figma, and real time messaging using signals,
        podcasts and more.
      </p>
      <p>
        What excites me most about this position is the chance to work with the
        team that developed Tailwind CSS, a CSS framework which I have grown to
        love and use every single day, in every single project. I am eager to
        leverage my skills in React, TypeSccript, NextJS, Framer motion and
        other technologies to contribute meaninigfully to Tailwind Labs{"'"}{' '}
        mission.
      </p>
      <p>
        Additionally, I feel aligned with Tailwind Labs{"'"} values of obsessing
        over design details, staying at the forefront of technology, and
        fostering a collaborative remote work environment. You care about making
        enough money to do what you love doing, not whatever it takes to make as
        much money as you can. I really connected with this as all I want to do
        is be able to do what I love, programming. And I{"'"}d love to program
        for the company that created the CSS framework I love so much.
      </p>
      <p>
        Please take the time to look at my resume, which provides further
        details about my skills and experience, though I believe it is not
        enough to fully show my character and my love for programming, I hope it
        gives you a general idea. And I know that I lack professional
        experience, and of course I may not be the best fit for the position,
        but I guarantee that if given the opportunity I will be able to mold
        myself into that position and hopefully surpass your expectations. I
        want nothing more than to do what I love, and I am hopeful and excited
        about the possibility of joining your team, contributing to the future
        of web design and becoming a better developer.
      </p>
      <div className='flex flex-col'>
        <small>Sincerely,</small>
        <span className='text-xl'>Matthew Gajo</span>
      </div>
    </article>
  );
};

export default page;
