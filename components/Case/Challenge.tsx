import Image from 'next/image';

import { ChallengeIcon } from '@/utils';

const Challenge = ({ challenge }: { challenge: string }) => {
  return (
    <div className='flex gap-3'>
      <Image src={ChallengeIcon} className='mt-1 h-6 w-6' alt='Target' />
      <small className='h-fit w-fit text-lg text-white-500 dark:text-white'>
        {challenge}
      </small>
    </div>
  );
};

export default Challenge;
