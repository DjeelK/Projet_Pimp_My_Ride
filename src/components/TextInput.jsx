import React from 'react';

const TextInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;