import React from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';

const SearchBarForm = ({ formData, onInputChange, onSubmit }) => {
  const { depart, arrivee, date } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Lieu de départ"
        type="text"
        name="depart"
        value={depart}
        onChange={handleInputChange}
        placeholder="Lieu de départ"
        required
      />
      <TextInput
        label="Lieu d'arrivée"
        type="text"
        name="arrivee"
        value={arrivee}
        onChange={handleInputChange}
        placeholder="Lieu d'arrivée"
        required
      />
      <TextInput
        label="Date"
        type="date"
        name="date"
        value={date}
        onChange={handleInputChange}
        placeholder="Date"
        required
      />
      <ButtonComponent type="submit">Rechercher</ButtonComponent>
    </form>
  );
};

export default SearchBarForm;
