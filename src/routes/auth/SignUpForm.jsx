import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
import {loginAPICall, registerAPICall, saveLoggedInUser, storeToken} from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({ formData, onInputChange, onSignUpClick }) => {
  const { username, password ,driver} = formData;
const navigate = useNavigate();


  // const [isDriver, setIsDriver] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  // Fonction pour gérer le changement de la checkbox "Conducteur"
  const handleCheckboxChange = () => {
    // setIsDriver(e.target.checked);
      onInputChange('driver', !driver);
      console.log(driver)

  };

    const updatedFormData = {
        ...formData,
        driver: driver,
    };

  const handleSubmit = (e) => {
    e.preventDefault();

      navigate('/', { state: formData });

      e.preventDefault();
        console.log(formData);
      registerAPICall(formData).then((response) => {
         console.log(response.data);

          const token = 'Bearer ' + response.data.accessToken;
          storeToken(token);

          saveLoggedInUser(username);
          navigator("/")

          window.location.reload(false);
      }).catch(error => {
          console.error(error);
      })


      // Ajoutez isDriver aux données du formulaire


    onSignUpClick(updatedFormData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nom"
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Votre nom"
        required
      />
      {/*<TextInput*/}
      {/*  label="Prénom"*/}
      {/*  type="text"*/}
      {/*  name="lastName"*/}
      {/*  value={lastName}*/}
      {/*  onChange={handleInputChange}*/}
      {/*  placeholder="Votre prénom"*/}
      {/*  // required*/}
      {/*/>*/}
      {/*<TextInput*/}
      {/*  label="Adresse email"*/}
      {/*  type="email"*/}
      {/*  name="email"*/}
      {/*  value={email}*/}
      {/*  onChange={handleInputChange}*/}
      {/*  placeholder="Adresse email"*/}
      {/*/>*/}
      <TextInput
        label="Mot de passe"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Mot de passe"
        required
      />
      {/*<TextInput*/}
      {/*  label="Numéro de téléphone"*/}
      {/*  type="tel"*/}
      {/*  name="phoneNumber"*/}
      {/*  value={phoneNumber}*/}
      {/*  onChange={handleInputChange}*/}
      {/*  placeholder="Numéro de téléphone"*/}
      {/*/>*/}
      <div className="form-group">
      <label >
          Conducteur:
          <input
            type="checkbox"
            name="isDriver"
            checked={driver}
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
