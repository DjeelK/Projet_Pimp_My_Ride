import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';

const SignUpForm = ({ formData, onInputChange, onSignUpClick }) => {
  const { firstName, lastName, email, password, phoneNumber } = formData;

  const [isDriver, setIsDriver] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  // Fonction pour gérer le changement de la checkbox "Conducteur"
  const handleCheckboxChange = (e) => {
    setIsDriver(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajoutez isDriver aux données du formulaire
    const updatedFormData = {
      ...formData,
      isDriver: isDriver,
    };

    onSignUpClick(updatedFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nom"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        placeholder="Votre nom"
        required
      />
      <TextInput
        label="Prénom"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        placeholder="Votre prénom"
        required
      />
      <TextInput
        label="Adresse email"
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Adresse email"
        required
      />
      <TextInput
        label="Mot de passe"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Mot de passe"
        required
      />
      <TextInput
        label="Numéro de téléphone"
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Numéro de téléphone"
      />
      <div className="form-group">
      <label >
          Conducteur:
          <input
            type="checkbox"
            name="isDriver"
            checked={isDriver}
            onChange={handleCheckboxChange}
            style={{ marginLeft: '10px' }}
          />
          <span>
            <br/>
            (Cochez si vous êtes conducteur ♡)
          </span>
        </label>
      </div>
      <ButtonComponent type="submit">Sign Up</ButtonComponent>
    </form>
  );
};

export default SignUpForm;
