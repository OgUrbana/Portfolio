'use client';

import React, { useEffect, useState, ReactNode } from 'react';

const NavContainer = ({ children }: { children: ReactNode }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const offset = 50;
    function onScroll() {
      if (!isScroll && window.scrollY > offset) {
        setIsScroll(true);
      } else if (isScroll && window.scrollY <= offset) {
        setIsScroll(false);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [isScroll]);
  return (
    <nav
      className={
        'sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50' +
        `${isScroll ? ' bg-background-2/75' : ''}`
      }
    >
      {children}
    </nav>
  );
};

export default NavContainer;
