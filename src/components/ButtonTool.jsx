import React from 'react';
import '../css/ButtonTool.css';
import { useNavigate } from 'react-router-dom';

const ButtonTool = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/covoiturage');
  };

  return (
    <div>
      <button className="custom-button btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default ButtonTool;
