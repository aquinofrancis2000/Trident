import React, { useState } from 'react';
import PopupGLTF from './PopupARVR';
import Car from '../Pages/Car';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function PortfolioGLTFboxes() {
  const [activeGLTFModals, setActiveGLTFModals] = useState([]);

  const toggleModalGLTF = (modalIdGLTF) => {
    setActiveGLTFModals((prevActiveModals) => {
      if (prevActiveModals.includes(modalIdGLTF)) {
        return prevActiveModals.filter((id) => id !== modalIdGLTF);
      } else {
        return [...prevActiveModals, modalIdGLTF];
      }
    }); 
  };
  const Car = () => <Car/>

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
        <li>
          <a href="/gltfviewerCar">
          <img src="../public/images/Car.png" alt="car" />  
          </a>
        </li>
           
         
        </div>

        
      </div>

    
    

        {/* Render PopupGLTF based on activeGLTFModals */}
        {activeGLTFModals.map((modalIdGLTF) => (
          <PopupGLTF key={`gltf-${modalIdGLTF}`} showModal={true} toggleModal2={toggleModalGLTF} modalIdGLTF={modalIdGLTF} />
        ))}
    </div>
  );
}

export default PortfolioGLTFboxes;