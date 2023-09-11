import React from 'react';
import '../css/ButtonTool.css';


const ButtonTool = ({ onSubmit }) => {
  return (
    <div>
      <button className="custom-button btn" onClick={onSubmit} type ="submit">
        Search
      </button>
    </div>
  );
};

export default ButtonTool;