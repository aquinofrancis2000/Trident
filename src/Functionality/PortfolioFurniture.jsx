import React, { useState } from 'react';
import PopupModal from './PopupModal'; // Adjust the path based on your project structure
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function PortfolioFurniture() {
  const [activeModals, setActiveModals] = useState([]);

  const toggleModal = (modalId) => {
    setActiveModals((prevActiveModals) => {
      if (prevActiveModals.includes(modalId)) {
        return prevActiveModals.filter((id) => id !== modalId);
      } else {
        return [...prevActiveModals, modalId];
      }
    });
  };

  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);

  return (
    <div className="landing-container-portfolio">
       <div className="portfolio-heading" >
                <h1  data-aos="fade-right" data-aos-duration="2000">PORTFOLIO</h1>
            
            </div>
            <div className="portfolio-intro" data-aos="fade-right" data-aos-duration="2000"> 
                <h2 >Office Desk Collections</h2>
                <p >Our collections encompass both your unique personal style and exceptional craftsmanship, offering a comprehensive experience.</p>
            </div> 
      <div className="landing-container-child" id="portfolio" data-aos="zoom-in" data-aos-duration="2000">

        <div className="landing-image-container">
          <img src="../public/images/Final Render.png" onClick={() => toggleModal(1)} alt="sofa" />
        </div>

        <div className="landing-image-container">
          <img src="../public/images/slideShowFurniture2.jpeg" onClick={() => toggleModal(2)} alt="sofa" />
        </div>

        <div className="landing-image-container">
          <img src="../public/images/slideShowFurniture3.jpg" onClick={() => toggleModal(3)} alt="sofa" />
        </div>

        <div className="landing-image-container">
          <img src="../public/images/Final Render.png" onClick={() => toggleModal(1)} alt="sofa" />
        </div>

        <div className="landing-image-container">
          <img src="../public/images/slideShowFurniture2.jpeg" onClick={() => toggleModal(2)} alt="sofa" />
        </div>

        <div className="landing-image-container">
          <img src="../public/images/slideShowFurniture3.jpg" onClick={() => toggleModal(3)} alt="sofa" />
        </div>
        
      </div>

      {/* Render the modals based on activeModals */}
      {activeModals.map((modalId) => (
        <PopupModal key={modalId} showModal={true} toggleModal={toggleModal} modalId={modalId} />
      ))}
    </div>
  );
}

export default PortfolioFurniture;