'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const titles = [
  'Matthew Gajo',
  10000,
  'a Creator',
  10000,
  'an Innovator',
  10000,
  'a Developer',
  10000,
];

const Hello = () => {
  return (
    <h1 className='text-base font-semibold tracking-widest text-primary'>
      <small>{'< "'}</small>Hello World<small>{'" >'}</small> I am{' '}
      <TypeAnimation
        sequence={titles}
        repeat={Infinity}
        className='after:text-white-500'
        speed={25}
      />
    </h1>
  );
};

export default Hello;
