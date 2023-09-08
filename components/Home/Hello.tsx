'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const titles = [
  'Matthew Gajo',
  1000,
  'a Creator',
  1000,
  'an Innovator',
  1000,
  'an Aspiring Developer',
  1000,
];

const Hello = () => {
  return (
    <h1 className='text-base font-semibold tracking-widest text-primary'>
      Hey! I am{' '}
      <TypeAnimation
        sequence={titles}
        repeat={Infinity}
        className='after:text-white-500'
      />
    </h1>
  );
};

export default Hello;
