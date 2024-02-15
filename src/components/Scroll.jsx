import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollComponent() {
  const handleScroll = () => {
    scroll.scrollTo('sliderInfo', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <div>
      <button onClick={handleScroll}>Scroll to Slider</button>
    </div>
  );
}

export default ScrollComponent;