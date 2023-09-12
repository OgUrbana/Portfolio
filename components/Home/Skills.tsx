import React from 'react';
// import SkillIcons from './SkillIcons';
import SkillsTab from './SkillsTab';

const Skills = () => {
  return (
    <section className='bg-white py-16 dark:bg-black-200'>
      <section className='flex flex-col items-center justify-center gap-8'>
        <h3 className='yellow-gradient'>My Skills</h3>
        <SkillsTab />
      </section>
    </section>
  );
};

export default Skills;
