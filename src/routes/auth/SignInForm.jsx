import React from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
import { loginAPICall, saveLoggedInUser, storeToken } from '../../services/AuthService';
import {useNavigate} from "react-router-dom";

const SignInForm = ({ formData, onInputChange, onSignInClick }) => {
  const { username, password } = formData;
    const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      navigate('/', { state: formData });
    loginAPICall(username, password).then((response) => {
          console.log(response.data);

          const token = 'Bearer ' + response.data.accessToken;
          storeToken(token);

          saveLoggedInUser(username);
          navigator("/mesTrajets")

          window.location.reload(false);
      }).catch(error => {
          console.error(error);
      })


    onSignInClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Entrez votre adresse mail"
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Adresse email"
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
