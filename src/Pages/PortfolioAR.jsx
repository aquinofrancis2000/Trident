import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderARVR from '../Sliders/sliderARVR';
import Footer from '../components/Footer';
import PopupARVR from '../Functionality/PopupARVR';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTopButton from '../Functionality/ScrollToTop';



export default function PortfolioAR() {
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const toggleModal2 = (id) => {
    setShowModal(!showModal);
    setModalId(id);
  };

  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);

  return (
    <div>
      
        
     
      <SliderARVR />
      <div className="portfolio_arvr_container"  >
  
        <h1  data-aos="fade-right" data-aos-duration="2000">Trident Designs 360° Panorama Rendering</h1>
        <div className="portfolio_parent"  data-aos="fade-right" data-aos-duration="2000">
          <div className="portfolio_child" id="img_cont">
            <img src="../public/images/ARVR_1.png" onClick={() => toggleModal2(1)} alt="Image 1" />
          </div>
          <div className="portfolio_child" id="info_cont">
            <h1>Bedroom Scene</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deleniti illo itaque iste iusto dolore
              dolorem debitis quidem aspernatur blanditiis, quibusdam numquam ratione minima adipisci in, obcaecati
              temporibus ea nostrum.
            </p>
          </div>
        </div>

        <div className="portfolio_parent"  data-aos="fade-right" data-aos-duration="2000">
          <div className="portfolio_child" id="img_cont">
            <img src="../public/images/ARVR_2.png" onClick={() => toggleModal2(2)} alt="Image 1" />
          </div>
          <div className="portfolio_child" id="info_cont">
            <h1>LIVING ROOM SCENE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deleniti illo itaque iste iusto dolore
              dolorem debitis quidem aspernatur blanditiis, quibusdam numquam ratione minima adipisci in, obcaecati
              temporibus ea nostrum.
            </p>
          </div>
        </div>
        {/* Repeat this structure for other portfolio items */}
      </div>
      
      <PopupARVR showModal={showModal} toggleModal2={toggleModal2} modalIdARVR={modalId} />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
}