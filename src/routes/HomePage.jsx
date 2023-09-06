import React from 'react';
import NavigationBar from '../components/NavigationBar'; 
const HomePage = () => {
  return (
    <div>
      <NavigationBar /> 
      <div className="container">
        <h1>Bienvenue sur la page d'accueil</h1>
      </div>
    </div>
  );
};

export default HomePage;