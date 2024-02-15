
import { useState } from 'react';
import SliderFurniture from '../Sliders/sliderFurniture';
import PortfolioFurniture from '../Functionality/PortfolioFurniture';
import Footer from '../components/Footer';
import ScrollToTopButton from '../Functionality/ScrollToTop';

export default function Portfolio() {
  const [popups, setPopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
  });

  const togglePopup = (popup) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [popup]: !prevPopups[popup],
    }));
  };

  const handleScrollToPortfolio = () => {
    scroll.scrollTo('portfolio', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <div className="portfolio-container">
     <SliderFurniture/>
     <PortfolioFurniture/>
     <ScrollToTopButton/>
     <Footer/>
    </div>
    
  );
}