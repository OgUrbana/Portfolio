import Hello from '@/components/Home/Hello';

export default function Home() {
  return (
    <section className='padding-layout'>
      <section className='w-full lg:w-5/12'>
        <Hello />
        <h1 className='text-5xl lg:text-6xl'>
          Professional Web Developer based in USA
        </h1>
      </section>
    </section>
  );
}
