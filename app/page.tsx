export default function Home() {
  return (
    <section className='flex flex-col gap-6'>
      <h1 className='text-white'>Heading 1</h1>
      <h2 className='text-white'>Heading Level 2</h2>
      <h3 className='text-white'>Heading Level 3</h3>
      <span className='base text-white'>Base - Regular</span>
      <span className='base-bold text-white'>Base - Bold</span>
      <p className='text-white '>Paragraph - Regular</p>
      <p className='bold text-white'>Paragraph - Bold</p>
      <small className='text-white'>Test</small>
      <small className='bold text-white'>Test</small>
    </section>
  );
}
