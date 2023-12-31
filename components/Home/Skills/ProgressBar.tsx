'use client';

import { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressBar = ({
  content,
  currentProgress,
}: {
  content: string;
  currentProgress: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const incrementProgress = async () => {
      for (let i = 0; i <= currentProgress; i++) {
        setTimeout(() => {
          setProgress(i);
        }, 15 * i);
      }
    };
    incrementProgress();
  }, [currentProgress]);

  return (
    <article className='mb-2 flex w-96 flex-col gap-2 md:w-80 lg:mb-0 lg:w-96'>
      <div className='flex items-center justify-between'>
        <h4 className='text-xl'>{content}</h4>
        <small>
          {progress}
          <span className='text-xs'>%</span>
        </small>
      </div>
      <Progress.Root
        aria-label={`${content} current progress ${currentProgress}%`}
        className='relative h-3 w-full overflow-hidden rounded-full bg-background-2'
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <Progress.Indicator
          className='h-full w-full rounded-r-full bg-primary'
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </article>
  );
};

export default ProgressBar;
