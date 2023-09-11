import React, { useState } from 'react';

const SearchBarForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="depart"
        value={formData.depart}
        onChange={handleInputChange}
        placeholder="Lieu de départ"
        required
      />
      <input
        type="text"
        name="arrivee"
        value={formData.arrivee}
        onChange={handleInputChange}
        placeholder="Lieu d'arrivée"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        placeholder="Date"
        required
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBarForm;