import Image from 'next/image';

import { SuccessIcon } from '@/utils';

const Lesson = ({ lesson }: { lesson: string }) => {
  return (
    <div className='flex gap-3'>
      <Image src={SuccessIcon} className='mt-1 h-6 w-6' alt='Target' />
      <small className='h-fit w-fit text-lg text-white-500 dark:text-white'>
        {lesson}
      </small>
    </div>
  );
};

export default Lesson;
