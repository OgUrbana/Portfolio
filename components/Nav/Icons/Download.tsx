import React from 'react';

const Download = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width ?? '14'}
      height={width ?? '15'}
      viewBox='0 0 14 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.00016 14.1667C1.54183 14.1667 1.14933 14.0033 0.822664 13.6767C0.495997 13.35 0.332942 12.9578 0.333498 12.5V10H2.00016V12.5H12.0002V10H13.6668V12.5C13.6668 12.9583 13.5035 13.3508 13.1768 13.6775C12.8502 14.0042 12.4579 14.1672 12.0002 14.1667H2.00016ZM7.00016 10.8333L2.8335 6.66667L4.00016 5.45833L6.16683 7.625V0.833332H7.8335V7.625L10.0002 5.45833L11.1668 6.66667L7.00016 10.8333Z'
        fill='currentcolor'
      />
    </svg>
  );
};

export default Download;
