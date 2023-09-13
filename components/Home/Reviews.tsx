'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import AllMight from '@/public/people/allmight.jpg';
import PlaceholderUser from '@/public/people/placeholder-user.jpg';
import FullStar from '@/public/icons/fullstar.svg';
import ArrowLeft from '@/public/icons/arrow-left.svg';
import ArrowRight from '@/public/icons/arrow-right.svg';

const reviews = [
  {
    name: '- All Might',
    image: AllMight,
    title: 'Teacher at U.A & Number 1 Hero',
    rating: 5,
    review:
      'It was a pleasure working with Matthew as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in many modern languages and framerworks. He is very hard working and always goes beyond PLUS ULTRA!',
  },
  {
    name: '- Mom',
    image: PlaceholderUser,
    rating: 5,
    title: 'My Wonderful Mom',
    review:
      'Very handsome, very nice and very respectable. Always babysits when we asks him. Smartest in the world! He always helps around the house and always fixes everything that breaks. He is an IT genius!',
  },
];

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(
    Math.floor(Math.random() * reviews.length),
  );
  const [review, setReview] = useState(reviews[0]);

  useEffect(() => {
    setReview(reviews[reviewIndex]);
  }, [reviewIndex]);

  const previousReview = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (reviewIndex <= 0) setReviewIndex(reviews.length - 1);
    else setReviewIndex((reviewIndex) => (reviewIndex -= 1));
  };

  const nextReview = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (reviewIndex >= reviews.length - 1) setReviewIndex(0);
    else setReviewIndex((reviewIndex) => (reviewIndex += 1));
  };

  return (
    <section className='flex items-center justify-around gap-8'>
      <button
        type='button'
        className='hidden rounded-full bg-background-1 p-3 transition duration-300 ease-in-out hover:bg-primary/60 md:block'
        onClick={previousReview}
      >
        <ArrowLeft className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
      </button>
      <article className='flex flex-col items-center gap-6 py-12 md:flex-row'>
        <Image
          src={review.image}
          alt='Reviewer'
          className='h-56 w-56 rounded-xl object-cover'
        />
        <section className='flex gap-4'>
          <button
            className='h-fit rounded-full bg-background-1 p-3 transition duration-300 ease-in-out hover:bg-primary/60 md:hidden'
            onClick={previousReview}
          >
            <ArrowLeft className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
          </button>
          <button
            className='h-fit rounded-full bg-background-1 p-3 transition duration-300 ease-in-out hover:bg-primary/60 md:hidden'
            onClick={nextReview}
          >
            <ArrowRight className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
          </button>
        </section>
        <section className='flex flex-col justify-center gap-4'>
          <section className='flex h-5 w-24 gap-1'>
            {[...Array(review.rating)].map((item, index) => (
              <FullStar
                key={`star-${index}`}
                className='h-5 w-5 fill-secondary'
              />
            ))}
          </section>
          <p className='text-lg text-white-500 dark:text-white md:text-base lg:text-lg'>
            {review.review}
          </p>
          <section className='flex flex-col'>
            <small className='text-lg font-bold text-black dark:text-white'>
              {review.name}
            </small>
            <small className='text-lg text-white-500 dark:text-white'>
              {review.title}
            </small>
          </section>
        </section>
      </article>
      <button
        type='button'
        className='hidden rounded-full bg-background-1 p-3 transition duration-300 ease-in-out hover:bg-primary/60 md:block'
        onClick={nextReview}
      >
        <ArrowRight className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
      </button>
    </section>
  );
};

export default Reviews;
