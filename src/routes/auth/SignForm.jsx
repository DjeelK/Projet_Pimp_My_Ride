import React, { useState } from 'react';
import TextInput from '../../components/TextInput';


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion, par exemple, en utilisant une requête API vers votre serveur
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Entrez votre adresse mail ou votre pseudonyme"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Pseudonyme ou adresse email"
        required
      />
      <TextInput
        label="Entrez votre mot de passe"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Mot de passe"
        required
      />
    </form>
  );
};

export default SignInForm;
