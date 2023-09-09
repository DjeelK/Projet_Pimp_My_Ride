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
          <h2>Sign In</h2>
          <SignInForm/>
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPageRoute;