import React, { useState } from 'react';
import SignUpForm from './auth/SignUpForm'; // Importez le composant SignUpForm
import '../css/SignUpPage.css';
import { Link } from 'react-router-dom';
import { registerAPICall } from '../services/AuthService';

const SignUpPageRoute = () => {
  const [formData, setFormData] = useState({
    // name: '',
    username: '',
    // email: '',
    password: '',
    driver:''
    // phoneNumber: '',
  });

  const handleSignUpClick = (e) => {
    // console.log('First Name:', formData.firstName);
    // console.log('Last Name:', formData.lastName);
    // console.log('Email:', formData.email);
    // console.log('Password:', formData.password);
    // console.log('Phone Number:', formData.phoneNumber);
    // console.log('Conducteur:', formData.isDriver);
    // e.preventDefault();

    // const register = {formData}
    //
    // console.log(register);
    //
    // registerAPICall(formData).then((response) => {
    //   console.log(response.data);
    // }).catch(error => {
    //   console.error(error);
    // })
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <div className="left-section"></div>
        <div className="right-section">
          <h4>Bienvenue sur Pimp My Ride</h4>
          <h2>Sign up</h2>
          <SignUpForm
            formData={formData}
            onInputChange={handleInputChange}
            onSignUpClick={handleSignUpClick}
          />
          <div className="no-account">
          Already have an account? <Link to="/signin" className="sign-in-link">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageRoute;
