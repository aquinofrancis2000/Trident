import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

function PopupModal({ showModal, toggleModal, modalId }) {
  const modalStyle = {
    display: showModal ? 'block' : 'none',
  };

  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const minScale = 1; // Minimum scale value
  const maxScale = 10; // Maximum scale value
  
  const handleScroll = (event) => {
    event.preventDefault();
    const zoomSpeed = 0.025; // Adjust the zoom speed as needed
  
    let newScale = scale;
    if (event.deltaY < 0) {
      newScale = Math.min(scale + zoomSpeed, maxScale);
    } else {
      newScale = Math.max(scale - zoomSpeed, minScale);
    }
  
    setScale(newScale);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setDragStart({ x: event.clientX, y: event.clientY });
    setIsDragging(true);
  };

  const panningSpeed = 0.5; // Adjust the panning speed as needed

  const handleMouseMove = (event) => {
    event.preventDefault();
    if (isDragging && scale !== 1) {
      const x = dragPosition.x + panningSpeed * (event.clientX - dragStart.x);
      const y = dragPosition.y + panningSpeed * (event.clientY - dragStart.y);
  
      setDragPosition({ x, y });
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };
      
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener('wheel', handleScroll, { passive: false });
      imgElement.addEventListener('mousedown', handleMouseDown);
      imgElement.addEventListener('mousemove', handleMouseMove);
      imgElement.addEventListener('mouseup', handleMouseUp);
      return () => {
        imgElement.removeEventListener('wheel', handleScroll);
        imgElement.removeEventListener('mousedown', handleMouseDown);
        imgElement.removeEventListener('mousemove', handleMouseMove);
        imgElement.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleScroll, handleMouseDown, handleMouseMove, handleMouseUp]);

  const handleCloseModal = () => {
    toggleModal(modalId); // Call the function to close the modal
  };

  const imageStyle = {
    transform: `scale(${scale}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
  };

  const handleZoomIn = () => {
    const newScale = Math.min(scale + 0.1, maxScale); // Increase scale by 0.1 or your desired increment
    setScale(newScale);
  };
  
  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.1, minScale); // Decrease scale by 0.1 or your desired increment
    setScale(newScale);
  };

  return (
    <div>
      {modalId === 1 && (
        <div className={`modal ${showModal ? 'active' : ''}`} style={modalStyle} id={`popup-${modalId}-1`}>
          <div className="zoom_container">
            <div className="zoom_parent">
              <div className="zoom_child">
                <div className="zoom_outer">
                  <div className="zoomcontainer" id="zoom">
                    <img
                      ref={imgRef}
                      src="../public/images/Final Render.png"
                      alt="zoom"
                      style={imageStyle}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    />
                  </div>
                </div>

                <div className="zoom_buttons">
                  <button id="zoomInButton" className="zoom-in" onClick={handleZoomIn}><FontAwesomeIcon icon={faSearchPlus} /></button>
                  <button id="zoomOutButton" className="zoom-out" onClick={handleZoomOut}><FontAwesomeIcon icon={faSearchMinus} /></button>
                  <button id="closeButton" className="close-button" onClick={handleCloseModal}>X</button>
                </div>
              </div>
              <div className="zoom_child2">
                <h1>A Dining Set Scene</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque earum fugiat, obcaecati soluta doloribus ipsa! Debitis, pariatur, non quidem a illum beatae perspiciatis ad quisquam quos voluptas fuga natus magnam.</p>
              </div>
            </div>
          </div>
        </div>
      )}

{modalId === 2 && (
        <div className={`modal ${showModal ? 'active' : ''}`} style={modalStyle} id={`popup-${modalId}-1`}>
          <div className="zoom_container">
            <div className="zoom_parent">
              <div className="zoom_child">
                <div className="zoom_outer">
                  <div className="zoomcontainer" id="zoom">
                    <img
                      ref={imgRef}
                      src="../public/images/slideShowFurniture2.jpeg"
                      alt="zoom"
                      style={imageStyle}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    />
                  </div>
                </div>

                <div className="zoom_buttons">
                  <button id="zoomInButton" className="zoom-in" onClick={handleZoomIn}><FontAwesomeIcon icon={faSearchPlus} /></button>
                  <button id="zoomOutButton" className="zoom-out" onClick={handleZoomOut}><FontAwesomeIcon icon={faSearchMinus} /></button>
                  <button id="closeButton" className="close-button" onClick={handleCloseModal}>X</button>
                </div>
              </div>
              <div className="zoom_child2">
                <h1>A Dining Set Scene</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque earum fugiat, obcaecati soluta doloribus ipsa! Debitis, pariatur, non quidem a illum beatae perspiciatis ad quisquam quos voluptas fuga natus magnam.</p>
              </div>
            </div>
          </div>
        </div>
      )}

{modalId === 3 && (
        <div className={`modal ${showModal ? 'active' : ''}`} style={modalStyle} id={`popup-${modalId}-1`}>
          <div className="zoom_container">
            <div className="zoom_parent">
              <div className="zoom_child">
                <div className="zoom_outer">
                  <div className="zoomcontainer" id="zoom">
                    <img
                      ref={imgRef}
                      src="../public/images/slideShowFurniture3.jpg"
                      alt="zoom"
                      style={imageStyle}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    />
                  </div>
                </div>

                <div className="zoom_buttons">
                  <button id="zoomInButton" className="zoom-in" onClick={handleZoomIn}><FontAwesomeIcon icon={faSearchPlus} /></button>
                  <button id="zoomOutButton" className="zoom-out" onClick={handleZoomOut}><FontAwesomeIcon icon={faSearchMinus} /></button>
                  <button id="closeButton" className="close-button" onClick={handleCloseModal}>X</button>
                </div>
              </div>
              <div className="zoom_child2">
                <h1>A Dining Set Scene</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque earum fugiat, obcaecati soluta doloribus ipsa! Debitis, pariatur, non quidem a illum beatae perspiciatis ad quisquam quos voluptas fuga natus magnam.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default PopupModal;