import React, { useEffect, useState } from 'react';


function SliderARVR() {
 

  const [curSlide, setCurSlide] = useState(0);
  const slides = [
    '../public/images/slideShowFurniture1.jpeg',
    'https://source.unsplash.com/random?landscape,cars',
    'https://source.unsplash.com/random?landscape,night',   
    'https://source.unsplash.com/random?landscape,city',
    'https://source.unsplash.com/random?landscape,mountain'
  ];

  const handleNextSlide = () => {
    const maxSlide = slides.length - 1;
    setCurSlide((prevSlide) => (prevSlide === maxSlide ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    const maxSlide = slides.length - 1;
    setCurSlide((prevSlide) => (prevSlide === 0 ? maxSlide : prevSlide - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider-info" data-aos="zoom-in" data-aos-duration="2000">
      <h1>AR/VR COLLECTIONS 2023</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nisi, dolore aperiam eos possimus similique ipsum veniam, 
                suscipit natus molestiae delectus necessitatibus facilis nostrum cum itaque error quas. Minus,
                 quibusdam explicabo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nisi, dolore aperiam eos possimus similique ipsum veniam, 
                suscipit natus molestiae delectus necessitatibus facilis nostrum cum itaque error quas. Minus,
                 quibusdam explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur corporis
                  fugit quasi expedita! Id voluptates ipsum deserunt architecto vitae, ea, ut accusamus corrupti sint obcaecati,
                   labore minima soluta itaque!</p>
        
      </div>

      <div className="slider" data-aos="zoom-in" data-aos-duration="2000">
        {slides.map((slideURL, index) => (
          <div
            key={index}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - curSlide)}%)`,
            }}
          >
            <img src={slideURL} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <button className="btn btn-next" onClick={handleNextSlide}>
          {'>'}
        </button>
        <button className="btn btn-prev" onClick={handlePrevSlide}>
          {'<'}
        </button>
      </div>
    </div>
  );
}

export default SliderARVR;