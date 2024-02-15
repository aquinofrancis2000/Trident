
import React from 'react';
import PopupModal from './PopupModal'; // Ensure PopupModal is imported if used

function PopupARVR({ showModal, toggleModal2, modalIdARVR, activeModals }) {
  const modalStyle2 = {
    display: showModal ? 'block' : 'none',
  };

  const handleCloseModal = () => {
    toggleModal2(modalIdARVR);
  };

  return (
    <div>
      {modalIdARVR === 1 && (
        <div className={`modal ${showModal ? 'active' : ''}`} style={modalStyle2} id={`popup-${modalIdARVR}-1`}>
          {/* Integrated code */}
          <div className="gltf_container">
            <div className="gltf_parent">
              <div className="gltf_child">
                <div className="gltf_outer">
                  <div className="gltfcontainer" id="gltf">
                    <iframe src="https://momento360.com/e/u/885f9f6add844592a018b062a2ebd09d?utm_campaign=embed&utm_source=other&heading=312.93&pitch=12.1&field-of-view=43&size=medium&display-plan=true"></iframe>
                  </div>
                </div>

                <div className="gltf_buttons">
                  <button id="closeButton" className="close-button" onClick={handleCloseModal}>
                    X
                  </button>
                </div>
              </div>
              <div className="gltf_child2">
                <h1>TRIDENT BEDROOM SCENE</h1>
              </div>
            </div>
          </div>
        </div>
      )}

{modalIdARVR === 2 && (
        <div className={`modal ${showModal ? 'active' : ''}`} style={modalStyle2} id={`popup-${modalIdARVR}-1`}>
          {/* Integrated code */}
          <div className="gltf_container">
            <div className="gltf_parent">
              <div className="gltf_child">
                <div className="gltf_outer">
                  <div className="gltfcontainer" id="gltf">
                    <iframe src="https://momento360.com/e/u/5b75238a08204b1a91b2116c9d1d7bb3?utm_campaign=embed&utm_source=other&heading=-72.3&pitch=-6.83&field-of-view=75&size=medium&display-plan=true"></iframe>
                  </div>
                </div>

                <div className="gltf_buttons">
                  <button id="closeButton" className="close-button" onClick={handleCloseModal}>
                    X
                  </button>
                </div>
              </div>
              <div className="gltf_child2">
                <h1>TRIDENT LIVING ROOM SCENE</h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Check if activeModals is an array before mapping */}
      {Array.isArray(activeModals) && activeModals.map((modalId) => (
        <PopupModal key={modalId} showModal={true} toggleModal={toggleModal2} modalId={modalId} />
      ))}
    </div>
  );
}

export default PopupARVR;