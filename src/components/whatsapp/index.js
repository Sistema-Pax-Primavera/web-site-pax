import React, { useState } from 'react';
import './whatsapp.css'
import Logo from '../../imagens/logo-whatsapp.png'

export default function WhatsApp() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="whatsapp-container">
          <button className="whatsapp-close" onClick={handleClose}>
            X
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=5567996808200"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <img
              src={Logo}
              alt="WhatsApp"
              className="whatsapp-image"
            />
          </a>
        </div>
      )}
    </div>
  );
}
