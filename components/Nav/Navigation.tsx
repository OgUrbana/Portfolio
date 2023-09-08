import React from 'react';
import NavContainer from './NavContainer';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav/MobileNav';

const Navigation = () => {
  return (
    <NavContainer>
      <DesktopNav />
      <MobileNav />
    </NavContainer>
  );
};

export default Navigation;
