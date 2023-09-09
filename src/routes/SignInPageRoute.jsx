import React from 'react';
import SignInForm from '../routes/auth/SignForm';
import '../css/SignInPage.css';

const SignInPageRoute = () => {
  const handleSignInClick = () => {
    // console.log('Bouton Sign In cliqué');
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="left-section"></div>
        <div className="right-section">
          <h4>Bienvenue sur Pimp My Ride</h4> 
          <h2>Sign in</h2>
          <SignInForm />
          <button onClick={handleSignInClick}>Sign in</button>
          <div className="no-account">
            No Account ? <span className="sign-up-link">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPageRoute;
