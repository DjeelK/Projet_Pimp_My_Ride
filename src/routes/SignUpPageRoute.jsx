import React, { useState } from 'react';
import SignUpForm from './auth/SignUpForm'; // Importez le composant SignUpForm
import '../css/SignUpPage.css';

const SignUpPageRoute = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleSignUpClick = () => {
    console.log('First Name:', formData.firstName);
    console.log('Last Name:', formData.lastName);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    console.log('Phone Number:', formData.phoneNumber);
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
            Already have an account? <span className="sign-in-link">Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageRoute;
