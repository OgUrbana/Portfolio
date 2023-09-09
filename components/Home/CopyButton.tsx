'use client';

import React from 'react';

import CopyIcon from '@/public/icons/copy.svg';

const CopyButton = ({ content }: { content: string }) => {
  return (
    <button
      className='flex justify-between gap-3 rounded-full bg-white-900 px-5 py-2 text-sm font-semibold leading-[160%] text-white-500 lg:px-6 lg:py-4 '
      onClick={() => navigator.clipboard.writeText(content)}
    >
      matthewgajo@gmail.com
      <CopyIcon />
    </button>
  );
};

export default CopyButton;
