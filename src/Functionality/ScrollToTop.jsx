import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
      });
    };
  
    return (
        <div className="buttonScroll">
      <button onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '24px' }} />
      </button>
      </div>
    );
  };
  
  export default ScrollToTopButton;