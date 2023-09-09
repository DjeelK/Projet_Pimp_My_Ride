import React from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';

const SignUpForm = ({ formData, onInputChange, onSignUpClick }) => {
  const { firstName, lastName, email, password, phoneNumber } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUpClick();
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
      <ButtonComponent type="submit">Sign Up</ButtonComponent>
    </form>
  );
};

export default SignUpForm;