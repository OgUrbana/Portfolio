import { MouseEventHandler } from 'react';

import { ArrowLeft, ArrowRight, classNames } from '@/utils';

const ReviewButton = ({
  mobile = false,
  next = false,
  onClick,
}: {
  mobile?: boolean;
  next?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const btn = (
    <button
      type='button'
      className={classNames(
        'rounded-full bg-background-1 p-3 default-animation hover:bg-primary/60',
        mobile ? 'md:hidden' : 'hidden md:block',
      )}
      aria-label='Change Review'
      onClick={onClick}
    >
      {!next && (
        <ArrowLeft className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
      )}
      {next && (
        <ArrowRight className='h-6 w-6 stroke-black-200 stroke-2 dark:stroke-white' />
      )}
    </button>
  );

  return btn;
};

export default ReviewButton;
