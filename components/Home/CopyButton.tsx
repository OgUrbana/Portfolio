'use client';

import React, { useRef, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';

import CopyIcon from '@/public/icons/copy.svg';

const CopyButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(0);

  return (
    <Toast.Provider swipeDirection='right'>
      <button
        className='flex justify-between gap-3 rounded-full bg-white px-5 py-2 text-sm font-semibold leading-[160%] text-white-500 lg:px-6 lg:py-4 '
        onClick={() => {
          setCopied(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            navigator.clipboard.writeText(content);
            setCopied(true);
          }, 100);
        }}
      >
        {content}
        <CopyIcon />
      </button>
      <Toast.Root
        className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-background-2 p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline outline-green-500 [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={copied}
        onOpenChange={setCopied}
      >
        <Toast.Title className='flex justify-between text-black dark:text-white-500'>
          Copied to Clipboard
          <CopyIcon />
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className='fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]' />
    </Toast.Provider>
  );
};

export default CopyButton;
