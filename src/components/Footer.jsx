import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faArtstation, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="Container-parent">
      <div className="footer-parent">
        <div className="footer-child" >
          {/* Facebook */}
          <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '30px', color: 'white', }} />
          </a>

          {/* Artstation */}
          <a href="https://www.artstation.com/yourArtstationPage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArtstation} style={{ fontSize: '30px', color: 'white', }} />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: 'white',}} />
          </a>

          <ul>
              <li>
                  <a href="/about">About</a>
              </li>
              <li>
                  <a href="/services/main">Services</a>
              </li>
              <li>
                  <a href="/portfolio/portfolioFurniture">Portfolio</a>
              </li>
              <li>
                  <a href="/contact">Contact</a>
              </li>
          </ul>
        </div>

      

        {/* Footer text */}
        <div className="footer-child2" >
          <h1>TRIDENT DESIGN SERVICES INC.</h1>
          <p>+63 975 457 1125</p>
          <p>68 Panama Street
              Betterliving Subdivision Annex 5 Paranaque City
              1711 Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;