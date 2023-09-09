import React from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';

const SignInForm = ({ formData, onInputChange, onSignInClick }) => {
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignInClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Entrez votre adresse mail ou votre pseudonyme"
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Pseudonyme ou adresse email"
        required
      />
      <TextInput
        label="Entrez votre mot de passe"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Mot de passe"
        required
      />
      <ButtonComponent type="submit">Sign in</ButtonComponent>
    </form>
  );
};

export default SignInForm;
