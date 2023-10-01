import { Morrent, Jobit } from '..';

export * from './morrent';
export * from './jobit';
export * from './reusable';

export const cases = [
  {
    title: 'Morrent',
    desc: 'Car Rental Application',
    image: Morrent,
    color: 'primary',
    link: '/case/morrent',
  },
  {
    title: 'Jobit',
    desc: 'Job Finding Application',
    image: Jobit,
    color: 'jobit',
    link: '/case/jobit',
  },
];
