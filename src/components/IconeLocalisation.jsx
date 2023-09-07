import React from 'react';
import '../css/IconeLocalisation.css';

const IconeLocalisation = () => {
  return (
    <div className="icon-container">
      <div className="icon-wrapper">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff" /* Couleur de l'icône en blanc */
        >
          {/* Insérez ici le code SVG de votre logo */}
          <circle cx="20" cy="20" r="15" />
        </svg>
      </div>
    </div>
  );
};

export default IconeLocalisation;
