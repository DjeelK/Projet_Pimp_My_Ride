import React from 'react';
import SignInForm from './SignInForm'; // Assurez-vous que le chemin est correct
import '../css/SignInPage'

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="left-section">
          {/* Ajoutez des éléments ou styles pour la section gauche si nécessaire */}
        </div>
        <div className="right-section">
          <h2>Sign In</h2>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;