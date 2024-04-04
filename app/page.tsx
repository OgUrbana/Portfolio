import GetInTouch from '@/components/GetInTouch';
import Experience from '@/components/Home/Experience';
import FeaturedProjects from '@/components/Home/FeaturedProjects';
import Hero from '@/components/Home/Hero';
import Reviews from '@/components/Home/Reviews';
import Services from '@/components/Home/Services';
import Skills from '@/components/Home/Skills/Skills';

export default function Home() {
  return (
    <section className='flex flex-col gap-6'>
      <Hero />
      <Skills />
      <Services />
      <section className='flex flex-col gap-12 bg-background-1 py-16'>
        <Experience />
        <FeaturedProjects />
      </section>
      <section className='padding-layout'>
        {/* <h3 className='text-center'>
          Hidden for now :)
          What do<span className='text-secondary'> people say?</span>
        </h3>
        <Reviews /> */}
      </section>
      <GetInTouch />
    </section>
  );
}
