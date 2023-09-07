import React from 'react';
import '../css/SearchBar.css';

const InputBar = ({ type, value, onChange }) => {
  return (
    <div className="input-bar">
      <input
        className="simple-input"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBar;