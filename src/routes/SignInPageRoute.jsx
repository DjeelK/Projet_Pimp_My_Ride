import React, { useState } from 'react';
import SignInForm from './auth/SignInForm';
import { Link } from 'react-router-dom';
import '../css/SignInPage.css';

const SignInPageRoute = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSignInClick = () => {
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="left-section"></div>
        <div className="right-section">
          <h4>Bienvenue sur Pimp My Ride</h4>
          <h2>Sign in</h2>
          <SignInForm
            formData={formData}
            onInputChange={handleInputChange}
            onSignInClick={handleSignInClick}
          />
          <div className="no-account">
          No Account? <Link to="/register" className="sign-up-link">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPageRoute;
