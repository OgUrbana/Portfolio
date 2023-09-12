import React from 'react';

import Hero from '@/components/Home/Hero';
import Skills from '@/components/Home/Skills/Skills';
import Services from '@/components/Home/Services';
import Experience from '@/components/Home/Experience';
import FeaturedProjects from '@/components/Home/FeaturedProjects';

export default function Home() {
  return (
    <section className='flex flex-col gap-6'>
      <Hero />
      <Skills />
      <section>
        <Services />
      </section>
      <section className='flex flex-col gap-12 bg-background-1 py-16'>
        <Experience />
        <FeaturedProjects />
      </section>
    </section>
  );
}
