'use client';

import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

const ScreenText = ({
  smallText,
  largeText,
  breakpoint = 768,
}: {
  smallText: string;
  largeText: string;
  breakpoint?: number;
}) => {
  const { width } = useWindowSize();

  return width >= breakpoint ? largeText : smallText;
};

export default ScreenText;
