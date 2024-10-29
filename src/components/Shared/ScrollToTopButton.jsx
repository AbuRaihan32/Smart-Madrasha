"use client"
import React, { useState, useEffect } from 'react';
import { SlArrowUp } from "react-icons/sl";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[500]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-gradient-to-r from-blue-400 to-green-300 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition"
        >
          <SlArrowUp></SlArrowUp>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
