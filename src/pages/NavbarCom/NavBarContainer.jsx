import React, { useState, useEffect } from 'react';
import ResponsiveNav from './ResponsiveNav';
import Navbar from "./Navbar"

const NavBarContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <ResponsiveNav /> : <Navbar />}
    </>
  );
};

export default NavBarContainer;
