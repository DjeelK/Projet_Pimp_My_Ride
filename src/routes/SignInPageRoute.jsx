import React from 'react';
import SignInForm from '../routes/auth/SignForm';

const SignInPageRoute = () => {
  const handleSignInClick = () => {
    console.log('Bouton Sign In cliqué');
    // Vous pouvez ajouter ici le code pour rediriger l'utilisateur ou effectuer d'autres actions liées à la connexion
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