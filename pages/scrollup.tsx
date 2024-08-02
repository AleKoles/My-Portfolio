import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
    <div
      className={`fixed bottom-10 right-10 p-3 text-gray-600 dark:text-amber-400 rounded-full cursor-pointer transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp className="text-2xl" />
    </div>
  );
};

export default ScrollUp;

