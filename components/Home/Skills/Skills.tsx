import React from 'react';
import SkillsTab from './SkillsTab';

const Skills = () => {
  return (
    <section className='bg-white py-16 dark:bg-black-200'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <h3 className='yellow-gradient'>My Skills</h3>
        <SkillsTab />
      </div>
    </section>
  );
};

export default Skills;
