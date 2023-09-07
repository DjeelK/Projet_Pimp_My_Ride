import React from 'react';
import '../css/IconeLocalisation.css';

const IconeLocalisation = (props) => {
  return (
    <div className="icon-container">
      <div className="icon-wrapper">
        <img
          src={props.iconeLocalisation}
          alt="Localisation"
          width="40" 
          height="40" 
        />
      </div>
    </div>
  );
};

export default IconeLocalisation;
