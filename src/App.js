import './App.scss';
import Desktop from './Desktop';
import Mobile from './Mobile';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Inisialisasi dengan nilai awal

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const isMobile = windowWidth <= 600;

  return (
    <div className='content_app'>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}
