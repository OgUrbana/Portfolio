import React from 'react';

const titles = ['Matthew', 'a Developer', 'a Student', 'a Programmer'];

const Hello = () => {
  return (
    <h1 className='text-base font-semibold tracking-widest text-primary'>
      Hey! I am {titles[0]}
    </h1>
  );
};

export default Hello;
