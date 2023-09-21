'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { FullStar, reviews } from '@/utils';
import ReviewButton from './ReviewButton';

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
      <ReviewButton onClick={previousReview} />
      <article className='flex flex-col items-center gap-6 py-12 md:flex-row'>
        <Image
          src={review.image}
          alt='Reviewer'
          className='h-56 w-56 rounded-xl object-cover'
        />
        <section className='flex gap-4'>
          <ReviewButton mobile onClick={previousReview} />
          <ReviewButton mobile next onClick={nextReview} />
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
      <ReviewButton next onClick={nextReview} />
    </section>
  );
};

export default Reviews;
