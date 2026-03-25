import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Using window.scrollY as pageYOffset is technically deprecated
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div  className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 
          
      text-sky-700 dark:text-amber-400 rounded-full transition-all duration-300 z-[60]
      hover:scale-110 active:scale-95
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
  >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top">
        <IoIosArrowUp className="text-2xl md:text-3xl" />
      </button>
    </div>
   
  );
};

export default ScrollUp;
