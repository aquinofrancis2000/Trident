import React, { useState } from 'react';


const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu display
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src='../public/images/Trident2nd Logo.png' alt="Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={showMenu ? 'navbar-links active' : 'navbar-links'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="portfolio-item">
            <a href="/portfolio/portfolioFurniture">Portfolio</a>
            <ul className="submenu">
              <li>
                <a href="/portfolio/portfolioARVR">AR/VR</a>
              </li>
              <li>
                <a href="/portfolio/portfolioGLTF">GLTF</a>
              </li>
              <li>
                <a href="/configurator">Configurator</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/services/main">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;